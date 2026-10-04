import { useEffect, useMemo, useRef, useState } from 'react';
import type { OptionKey } from '../data/questions';
import { buildExam, grade, type ExamResult } from '../lib/exam';
import { addHistoryEntry, type Mode } from '../lib/storage';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';

const TIMED_DURATION_SECONDS = 15 * 60;

interface ExamProps {
  mode: Mode;
  group: number;
  onFinish: (result: ExamResult, group: number) => void;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function Exam({ mode, group, onFinish }: ExamProps) {
  const exam = useMemo(() => buildExam(mode, group), [mode, group]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, OptionKey | null>>(
    () => Object.fromEntries(exam.map((q) => [q.id, null])),
  );
  const [confirming, setConfirming] = useState(false);
  const [timedMode, setTimedMode] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(TIMED_DURATION_SECONDS);
  const submittedRef = useRef(false);

  const currentQuestion = exam[currentIndex];
  const answeredCount = Object.values(answers).filter((a) => a !== null).length;

  useEffect(() => {
    if (!timedMode) return;
    const interval = setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [timedMode]);

  useEffect(() => {
    if (timedMode && secondsLeft === 0 && !submittedRef.current) {
      submittedRef.current = true;
      submit(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft, timedMode]);

  function selectOption(key: OptionKey) {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: key }));
  }

  function clearOption() {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: null }));
  }

  function goTo(index: number) {
    setCurrentIndex(Math.max(0, Math.min(exam.length - 1, index)));
  }

  function submit(force = false) {
    if (!force && answeredCount < exam.length && !confirming) {
      setConfirming(true);
      return;
    }
    submittedRef.current = true;
    const result = grade(exam, answers);
    addHistoryEntry(mode, {
      fecha: new Date().toLocaleDateString('es-AR'),
      grupo: group,
      puntaje: result.score,
    });
    onFinish(result, group);
  }

  return (
    <div className="exam">
      {mode === 'parcial' && currentIndex === 0 && answeredCount === 0 && (
        <label className="timed-toggle">
          <input type="checkbox" checked={timedMode} onChange={(e) => setTimedMode(e.target.checked)} />
          Modo cronometrado (15 minutos)
        </label>
      )}
      {timedMode && (
        <div className="time-left" aria-live="polite">
          Tiempo restante: {formatTime(secondsLeft)}
        </div>
      )}

      <ProgressBar current={currentIndex + 1} total={exam.length} />

      <div className="question-indicators">
        {exam.map((q, i) => (
          <button
            key={q.id}
            type="button"
            className={`indicator${answers[q.id] !== null ? ' answered' : ''}${i === currentIndex ? ' current' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ir a la pregunta ${i + 1}`}
          />
        ))}
      </div>

      <QuestionCard
        question={currentQuestion}
        index={currentIndex}
        total={exam.length}
        selected={answers[currentQuestion.id]}
        onSelect={selectOption}
        onClear={clearOption}
        mode={mode}
      />

      <div className="exam-nav">
        <button
          type="button"
          className="secondary-button"
          onClick={() => goTo(currentIndex - 1)}
          disabled={currentIndex === 0}
        >
          Anterior
        </button>
        {currentIndex < exam.length - 1 ? (
          <button type="button" className="primary-button" onClick={() => goTo(currentIndex + 1)}>
            Siguiente
          </button>
        ) : (
          <button type="button" className="primary-button" onClick={() => submit()}>
            Entregar
          </button>
        )}
      </div>

      {confirming && (
        <div className="confirm-dialog card">
          <p>
            Todavía quedan {exam.length - answeredCount} pregunta(s) sin responder. ¿Entregar de todas formas?
          </p>
          <div className="confirm-actions">
            <button type="button" className="secondary-button" onClick={() => setConfirming(false)}>
              Volver
            </button>
            <button type="button" className="primary-button" onClick={() => submit(true)}>
              Entregar igual
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
