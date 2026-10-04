import { questions, TOTAL_GROUPS, type OptionKey } from '../data/questions';
import { questionsParcial, TOTAL_GROUPS_PARCIAL } from '../data/questions-parcial';
import { getLastGroup, setLastGroup, type Mode } from './storage';

interface BankQuestion {
  id: number;
  group: number;
  prompt: string;
  options: Record<OptionKey, string>;
  correct: OptionKey;
  section: string;
  explanation?: string;
}

export interface ShuffledQuestion {
  id: number;
  prompt: string;
  options: { key: OptionKey; text: string }[];
  correctKey: OptionKey;
  section: string;
  explanation?: string;
}

export interface ExamDetail {
  question: ShuffledQuestion;
  chosen: OptionKey | null;
  correct: OptionKey;
  isCorrect: boolean;
}

export interface ExamResult {
  score: number;
  total: number;
  details: ExamDetail[];
}

const BANKS: Record<Mode, { questions: BankQuestion[]; groups: number }> = {
  rapido: { questions, groups: TOTAL_GROUPS },
  parcial: { questions: questionsParcial, groups: TOTAL_GROUPS_PARCIAL },
};

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function pickGroup(mode: Mode): number {
  const { groups } = BANKS[mode];
  const last = getLastGroup(mode);
  if (last === null) {
    return Math.floor(Math.random() * groups) + 1;
  }
  let group: number;
  do {
    group = Math.floor(Math.random() * groups) + 1;
  } while (group === last && groups > 1);
  return group;
}

function shuffleQuestion(question: BankQuestion): ShuffledQuestion {
  const optionKeys = Object.keys(question.options) as OptionKey[];
  const shuffledOptions = shuffle(optionKeys).map((key) => ({
    key,
    text: question.options[key],
  }));
  return {
    id: question.id,
    prompt: question.prompt,
    options: shuffledOptions,
    correctKey: question.correct,
    section: question.section,
    explanation: question.explanation,
  };
}

export function buildExam(mode: Mode, group: number): ShuffledQuestion[] {
  setLastGroup(mode, group);
  const groupQuestions = BANKS[mode].questions.filter((q) => q.group === group);
  return shuffle(groupQuestions).map(shuffleQuestion);
}

export function grade(exam: ShuffledQuestion[], answers: Record<number, OptionKey | null>): ExamResult {
  const details: ExamDetail[] = exam.map((question) => {
    const chosen = answers[question.id] ?? null;
    const isCorrect = chosen === question.correctKey;
    return { question, chosen, correct: question.correctKey, isCorrect };
  });
  const score = details.filter((d) => d.isCorrect).length;
  return { score, total: exam.length, details };
}

export function validateQuestionBank(): void {
  if (!import.meta.env.DEV) return;
  const errors: string[] = [];
  for (const [mode, bank] of Object.entries(BANKS) as [Mode, { questions: BankQuestion[]; groups: number }][]) {
    const expectedTotal = bank.groups * 10;
    if (bank.questions.length !== expectedTotal) {
      errors.push(`[${mode}] Se esperaban ${expectedTotal} preguntas, hay ${bank.questions.length}`);
    }
    const ids = new Set<number>();
    for (let g = 1; g <= bank.groups; g++) {
      const groupQuestions = bank.questions.filter((q) => q.group === g);
      if (groupQuestions.length !== 10) {
        errors.push(`[${mode}] El grupo ${g} tiene ${groupQuestions.length} preguntas (se esperaban 10)`);
      }
    }
    for (const q of bank.questions) {
      if (ids.has(q.id)) errors.push(`[${mode}] Id duplicado: ${q.id}`);
      ids.add(q.id);
      const optionKeys = Object.keys(q.options);
      if (optionKeys.length !== 4) errors.push(`[${mode}] Pregunta ${q.id}: no tiene 4 opciones`);
      if (!['A', 'B', 'C', 'D'].includes(q.correct)) errors.push(`[${mode}] Pregunta ${q.id}: correct inválido`);
    }
  }
  if (errors.length > 0) {
    console.error('Errores de validación en el banco de preguntas:', errors);
  }
}
