export type Mode = 'rapido' | 'parcial';

export interface HistoryEntry {
  fecha: string;
  grupo: number;
  puntaje: number;
}

const MAX_HISTORY = 10;

function lastGroupKey(mode: Mode): string {
  return `preguntero:lastGroup:${mode}`;
}

function historyKey(mode: Mode): string {
  return `preguntero:history:${mode}`;
}

export function getLastGroup(mode: Mode): number | null {
  try {
    const raw = localStorage.getItem(lastGroupKey(mode));
    return raw ? Number(raw) : null;
  } catch {
    return null;
  }
}

export function setLastGroup(mode: Mode, group: number): void {
  try {
    localStorage.setItem(lastGroupKey(mode), String(group));
  } catch {
    // localStorage no disponible, se ignora
  }
}

export function getHistory(mode: Mode): HistoryEntry[] {
  try {
    const raw = localStorage.getItem(historyKey(mode));
    return raw ? (JSON.parse(raw) as HistoryEntry[]) : [];
  } catch {
    return [];
  }
}

export function addHistoryEntry(mode: Mode, entry: HistoryEntry): void {
  try {
    const history = getHistory(mode);
    history.unshift(entry);
    localStorage.setItem(historyKey(mode), JSON.stringify(history.slice(0, MAX_HISTORY)));
  } catch {
    // localStorage no disponible, se ignora
  }
}
