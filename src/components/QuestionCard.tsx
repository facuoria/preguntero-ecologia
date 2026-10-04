import type { OptionKey } from '../data/questions';
import type { ShuffledQuestion } from '../lib/exam';

const LABELS = ['a', 'b', 'c', 'd'];

interface QuestionCardProps {
  question: ShuffledQuestion;
  index: number;
  total: number;
  selected: OptionKey | null;
  onSelect: (key: OptionKey) => void;
}

export default function QuestionCard({ question, index, total, selected, onSelect }: QuestionCardProps) {
  return (
    <div className="card question-card" key={question.id}>
      <p className="question-number">
        Pregunta {index + 1} de {total}
      </p>
      <h2 className="question-prompt">{question.prompt}</h2>
      <div className="options">
        {question.options.map((option, i) => (
          <button
            key={option.key}
            type="button"
            className={`option-button${selected === option.key ? ' selected' : ''}`}
            onClick={() => onSelect(option.key)}
            aria-pressed={selected === option.key}
          >
            <span className="option-label">{LABELS[i]}</span>
            <span className="option-text">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
