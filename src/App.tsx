import { useState } from 'react';
import Home from './components/Home';
import Exam from './components/Exam';
import Results from './components/Results';
import { pickGroup, validateQuestionBank, type ExamResult } from './lib/exam';

validateQuestionBank();

type Screen = 'home' | 'exam' | 'results';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [group, setGroup] = useState<number | null>(null);
  const [result, setResult] = useState<ExamResult | null>(null);

  function startExam() {
    setGroup(pickGroup());
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
      {screen === 'exam' && group !== null && <Exam group={group} onFinish={finishExam} />}
      {screen === 'results' && result && (
        <Results result={result} onRetry={startExam} onHome={() => setScreen('home')} />
      )}
    </main>
  );
}
