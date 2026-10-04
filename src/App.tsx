import { useState } from 'react';
import Home from './components/Home';
import Exam from './components/Exam';
import Results from './components/Results';
import { pickGroup, validateQuestionBank, type ExamResult } from './lib/exam';
import type { Mode } from './lib/storage';

validateQuestionBank();

type Screen = 'home' | 'exam' | 'results';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [mode, setMode] = useState<Mode>('rapido');
  const [group, setGroup] = useState<number | null>(null);
  const [result, setResult] = useState<ExamResult | null>(null);

  function startExam(selectedMode: Mode = mode) {
    setMode(selectedMode);
    setGroup(pickGroup(selectedMode));
    setResult(null);
    setScreen('exam');
  }

  function finishExam(examResult: ExamResult) {
    setResult(examResult);
    setScreen('results');
  }

  return (
    <main className="app-container">
      {screen === 'home' && <Home onStart={startExam} />}
      {screen === 'exam' && group !== null && <Exam mode={mode} group={group} onFinish={finishExam} />}
      {screen === 'results' && result && (
        <Results result={result} onRetry={() => startExam(mode)} onHome={() => setScreen('home')} />
      )}
    </main>
  );
}
