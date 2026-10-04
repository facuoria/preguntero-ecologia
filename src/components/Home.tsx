import { useState } from 'react';
import { getHistory, type Mode } from '../lib/storage';

interface HomeProps {
  onStart: (mode: Mode) => void;
}

function HistoryList({ mode }: { mode: Mode }) {
  const [history] = useState(() => getHistory(mode));

  if (history.length === 0) return null;

  return (
    <div className="history">
      <h4>Últimos resultados</h4>
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
  );
}

export default function Home({ onStart }: HomeProps) {
  return (
    <div>
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
          Practicá el parcial de múltiple opción con el contenido de las Unidades 1, 2 y 3: agroecología y
          transición, ordenamiento territorial y ley de bosques, y ecología de comunidades y sucesión.
        </p>
        <div className="unit-chips">
          <span className="chip">Unidad 1 › Agroecología</span>
          <span className="chip">Unidad 2 › Territorio y bosque nativo</span>
          <span className="chip">Unidad 3 › Comunidades y sucesión</span>
        </div>
      </div>

      <div className="mode-grid">
        <div className="card mode-card">
          <h2>Examen rápido</h2>
          <p>
            100 preguntas conceptuales repartidas en 10 grupos. Cada intento toma uno al azar, con preguntas y
            opciones mezcladas.
          </p>
          <button type="button" className="primary-button" onClick={() => onStart('rapido')}>
            Realizar examen
          </button>
          <HistoryList mode="rapido" />
        </div>

        <div className="card mode-card">
          <h2>
            Preguntas estilo parcial <span className="mode-badge">Nuevo</span>
          </h2>
          <p>
            50 preguntas de interpretación de casos y situaciones, con el formato real del parcial: opciones
            largas y similares entre sí. Incluye explicación de cada respuesta y modo cronometrado opcional.
          </p>
          <button type="button" className="primary-button" onClick={() => onStart('parcial')}>
            Realizar examen
          </button>
          <HistoryList mode="parcial" />
        </div>
      </div>

      <div className="card how-it-works">
        <h3>Cómo funciona</h3>
        <ol>
          <li>Elegís una sección y el sistema sortea uno de sus grupos, sin repetir el último usado.</li>
          <li>Respondés las 10 preguntas navegando libremente; podés cambiar o quitar tu elección.</li>
          <li>
            Al entregar ves tu puntaje y, en cada error, tu respuesta, la correcta, la explicación y la sección
            del apunte para repasar.
          </li>
        </ol>
      </div>
    </div>
  );
}
