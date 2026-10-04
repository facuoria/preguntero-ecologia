import { useMemo, useState } from 'react';
import type { OptionKey } from '../data/questions';
import { buildExam, grade, type ExamResult } from '../lib/exam';
import { addHistoryEntry } from '../lib/storage';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';

interface ExamProps {
  group: number;
  onFinish: (result: ExamResult, group: number) => void;
}

export default function Exam({ group, onFinish }: ExamProps) {
  const exam = useMemo(() => buildExam(group), [group]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, OptionKey | null>>(
    () => Object.fromEntries(exam.map((q) => [q.id, null])),
  );
  const [confirming, setConfirming] = useState(false);

  const currentQuestion = exam[currentIndex];
  const answeredCount = Object.values(answers).filter((a) => a !== null).length;

  function selectOption(key: OptionKey) {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: key }));
  }

  function goTo(index: number) {
    setCurrentIndex(Math.max(0, Math.min(exam.length - 1, index)));
  }

  function submit() {
    if (answeredCount < exam.length && !confirming) {
      setConfirming(true);
      return;
    }
    const result = grade(exam, answers);
    addHistoryEntry({
      fecha: new Date().toLocaleDateString('es-AR'),
      grupo: group,
      puntaje: result.score,
    });
    onFinish(result, group);
  }

  return (
    <div className="exam">
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
          <button type="button" className="primary-button" onClick={submit}>
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
            <button type="button" className="primary-button" onClick={submit}>
              Entregar igual
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
