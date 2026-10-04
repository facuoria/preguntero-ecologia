import { useEffect, useState } from 'react';
import { getHistory, type HistoryEntry } from '../lib/storage';

interface HomeProps {
  onStart: () => void;
}

export default function Home({ onStart }: HomeProps) {
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  return (
    <div className="card home-card">
      <div className="leaf-decoration" aria-hidden="true">
        <svg viewBox="0 0 120 40" width="120" height="40">
          <path
            d="M2 30 Q 20 5, 40 20 Q 60 35, 80 10 Q 100 -5, 118 15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <ellipse cx="30" cy="16" rx="6" ry="3" fill="currentColor" transform="rotate(-20 30 16)" />
          <ellipse cx="60" cy="24" rx="6" ry="3" fill="currentColor" transform="rotate(25 60 24)" />
          <ellipse cx="95" cy="8" rx="6" ry="3" fill="currentColor" transform="rotate(-15 95 8)" />
        </svg>
      </div>
      <h1>Preguntero de Ecología Agrícola</h1>
      <p className="subtitle">
        Practicá el parcial de múltiple opción (Unidades 1, 2 y 3). Cada examen toma uno de 10 grupos de 10
        preguntas al azar, con el orden de preguntas y opciones mezclado.
      </p>
      <button type="button" className="primary-button" onClick={onStart}>
        Realizar examen
      </button>

      {history.length > 0 && (
        <div className="history">
          <h3>Últimos resultados</h3>
          <ul>
            {history.map((entry, i) => (
              <li key={i}>
                <span className="history-date">{entry.fecha}</span>
                <span className="history-group">Grupo {entry.grupo}</span>
                <span className="history-score">{entry.puntaje}/10</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
