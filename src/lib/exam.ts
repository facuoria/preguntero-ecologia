import { questions, TOTAL_GROUPS, type OptionKey, type Question } from '../data/questions';
import { getLastGroup, setLastGroup } from './storage';

export interface ShuffledQuestion {
  id: number;
  prompt: string;
  options: { key: OptionKey; text: string }[];
  correctKey: OptionKey;
  section: string;
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

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function pickGroup(): number {
  const last = getLastGroup();
  if (last === null) {
    return Math.floor(Math.random() * TOTAL_GROUPS) + 1;
  }
  let group: number;
  do {
    group = Math.floor(Math.random() * TOTAL_GROUPS) + 1;
  } while (group === last && TOTAL_GROUPS > 1);
  return group;
}

function shuffleQuestion(question: Question): ShuffledQuestion {
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
  };
}

export function buildExam(group: number): ShuffledQuestion[] {
  setLastGroup(group);
  const groupQuestions = questions.filter((q) => q.group === group);
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
  if (import.meta.env.DEV) {
    const errors: string[] = [];
    if (questions.length !== 100) {
      errors.push(`Se esperaban 100 preguntas, hay ${questions.length}`);
    }
    const ids = new Set<number>();
    for (let g = 1; g <= TOTAL_GROUPS; g++) {
      const groupQuestions = questions.filter((q) => q.group === g);
      if (groupQuestions.length !== 10) {
        errors.push(`El grupo ${g} tiene ${groupQuestions.length} preguntas (se esperaban 10)`);
      }
    }
    for (const q of questions) {
      if (ids.has(q.id)) errors.push(`Id duplicado: ${q.id}`);
      ids.add(q.id);
      const optionKeys = Object.keys(q.options);
      if (optionKeys.length !== 4) errors.push(`Pregunta ${q.id}: no tiene 4 opciones`);
      if (!['A', 'B', 'C', 'D'].includes(q.correct)) errors.push(`Pregunta ${q.id}: correct inválido`);
    }
    if (errors.length > 0) {
      console.error('Errores de validación en el banco de preguntas:', errors);
    }
  }
}
