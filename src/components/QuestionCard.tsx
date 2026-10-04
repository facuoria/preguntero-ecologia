import type { OptionKey } from '../data/questions';
import type { Mode } from '../lib/storage';
import type { ShuffledQuestion } from '../lib/exam';
import { renderBold } from '../lib/markdown';

const LABELS = ['a', 'b', 'c', 'd'];

interface QuestionCardProps {
  question: ShuffledQuestion;
  index: number;
  total: number;
  selected: OptionKey | null;
  onSelect: (key: OptionKey) => void;
  onClear: () => void;
  mode: Mode;
}

export default function QuestionCard({ question, index, total, selected, onSelect, onClear, mode }: QuestionCardProps) {
  return (
    <div className="card question-card" key={question.id}>
      <div className="question-header">
        <p className="question-number">
          Pregunta {index + 1} de {total}
        </p>
        {mode === 'parcial' && <span className="mode-badge">Estilo parcial</span>}
      </div>
      <h2 className="question-prompt">{renderBold(question.prompt)}</h2>
      <div className={`options${mode === 'parcial' ? ' options-long' : ''}`}>
        {question.options.map((option, i) => (
          <button
            key={option.key}
            type="button"
            className={`option-button${selected === option.key ? ' selected' : ''}`}
            onClick={() => onSelect(option.key)}
            aria-pressed={selected === option.key}
          >
            <span className="option-label">{LABELS[i]}.</span>
            <span className="option-text">{renderBold(option.text)}</span>
          </button>
        ))}
      </div>
      {selected !== null && (
        <button type="button" className="link-button clear-choice" onClick={onClear}>
          Quitar mi elección
        </button>
      )}
    </div>
  );
}
