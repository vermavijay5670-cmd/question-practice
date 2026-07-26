import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ALL_CHAPTERS } from '../data/biology/chapters';
import { getChapterQuestions } from '../data/biology/questions';
import QuizEngine from '../components/practice/QuizEngine';
import '../styles/Practice.css';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MockTest() {
  const [size, setSize] = useState(null);
  const pool = useMemo(() => {
    const all = [];
    ALL_CHAPTERS.forEach(c => {
      getChapterQuestions(c.id).forEach(q => all.push({ ...q, chapterId: c.id }));
    });
    return all;
  }, []);

  const [questions, setQuestions] = useState(null);

  function start(n) {
    setSize(n);
    setQuestions(shuffle(pool).slice(0, Math.min(n, pool.length)));
  }

  if (questions) {
    return (
      <QuizEngine
        subject="biology"
        chapterId="mock"
        title="Mock test"
        questions={questions}
        backTo="/biology"
        backLabel="Biology chapters"
      />
    );
  }

  return (
    <main className="practice">
      <div className="practice-shell">
        <Link to="/biology" className="back-link">← Biology chapters</Link>
        <div className="summary-card" style={{ marginTop: '1.5rem' }}>
          <div className="q-type-tag">Mixed mock test</div>
          <p>{pool.length} questions currently available across live chapters. Pick a length:</p>
          <div className="summary-actions">
            <button className="pill-btn primary" onClick={() => start(10)}>10 questions</button>
            <button className="pill-btn primary" onClick={() => start(20)}>20 questions</button>
            <button className="pill-btn primary" onClick={() => start(pool.length)}>All available</button>
          </div>
        </div>
      </div>
    </main>
  );
}
