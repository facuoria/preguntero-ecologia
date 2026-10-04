const LAST_GROUP_KEY = 'preguntero:lastGroup';
const HISTORY_KEY = 'preguntero:history';
const MAX_HISTORY = 10;

export interface HistoryEntry {
  fecha: string;
  grupo: number;
  puntaje: number;
}

export function getLastGroup(): number | null {
  try {
    const raw = localStorage.getItem(LAST_GROUP_KEY);
    return raw ? Number(raw) : null;
  } catch {
    return null;
  }
}

export function setLastGroup(group: number): void {
  try {
    localStorage.setItem(LAST_GROUP_KEY, String(group));
  } catch {
    // localStorage no disponible, se ignora
  }
}

export function getHistory(): HistoryEntry[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? (JSON.parse(raw) as HistoryEntry[]) : [];
  } catch {
    return [];
  }
}

export function addHistoryEntry(entry: HistoryEntry): void {
  try {
    const history = getHistory();
    history.unshift(entry);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, MAX_HISTORY)));
  } catch {
    // localStorage no disponible, se ignora
  }
}
