import { useState } from 'react';
import type { ExamResult } from '../lib/exam';

interface ResultsProps {
  result: ExamResult;
  onRetry: () => void;
  onHome: () => void;
}

function messageFor(score: number): string {
  if (score >= 8) return '¡Muy bien! Dominás el tema.';
  if (score >= 6) return 'Aprobado. Repasá los detalles que fallaste.';
  return 'A repasar: revisá las secciones indicadas abajo.';
}

export default function Results({ result, onRetry, onHome }: ResultsProps) {
  const [showCorrect, setShowCorrect] = useState(false);
  const incorrect = result.details.filter((d) => !d.isCorrect);
  const correct = result.details.filter((d) => d.isCorrect);

  return (
    <div className="results">
      <div className="card results-summary">
        <div className="score-circle">
          <span className="score-value">
            {result.score}/{result.total}
          </span>
        </div>
        <p className="score-message">{messageFor(result.score)}</p>
      </div>

      {incorrect.length > 0 && (
        <div className="results-section">
          <h3>Para repasar</h3>
          {incorrect.map((detail) => {
            const chosenOption = detail.question.options.find((o) => o.key === detail.chosen);
            const correctOption = detail.question.options.find((o) => o.key === detail.correct);
            return (
              <div className="card error-card" key={detail.question.id}>
                <p className="error-prompt">{detail.question.prompt}</p>
                <p className="answer-line wrong">
                  Tu respuesta: {chosenOption ? chosenOption.text : '(sin responder)'}
                </p>
                <p className="answer-line right">Correcta: {correctOption?.text}</p>
                <p className="section-tag">📖 Dónde estudiarlo: {detail.question.section}</p>
              </div>
            );
          })}
        </div>
      )}

      {correct.length > 0 && (
        <div className="results-section">
          <button type="button" className="link-button" onClick={() => setShowCorrect((v) => !v)}>
            {showCorrect ? 'Ocultar las que acertaste' : 'Ver las que acertaste'}
          </button>
          {showCorrect && (
            <div>
              {correct.map((detail) => (
                <div className="card correct-card" key={detail.question.id}>
                  <p className="error-prompt">{detail.question.prompt}</p>
                  <p className="answer-line right">
                    {detail.question.options.find((o) => o.key === detail.correct)?.text}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="results-actions">
        <button type="button" className="primary-button" onClick={onRetry}>
          Hacer otro examen
        </button>
        <button type="button" className="secondary-button" onClick={onHome}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
}
