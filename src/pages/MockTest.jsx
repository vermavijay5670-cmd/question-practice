import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ALL_CHAPTERS as BIO_CHAPTERS } from '../data/biology/chapters';
import { getChapterQuestions as getBioQuestions } from '../data/biology/questions';
import { ALL_CHAPTERS as PHYSICS_CHAPTERS } from '../data/physics/chapters';
import { getChapterQuestions as getPhysicsQuestions } from '../data/physics/questions';
import { ALL_CHAPTERS as CHEM_CHAPTERS } from '../data/chemistry/chapters';
import { getChapterQuestions as getChemQuestions } from '../data/chemistry/questions';
import QuizEngine from '../components/practice/QuizEngine';
import '../styles/Practice.css';

const SUBJECT_DATA = {
  biology: { chapters: BIO_CHAPTERS, getChapterQuestions: getBioQuestions, label: 'Biology', backTo: '/biology' },
  physics: { chapters: PHYSICS_CHAPTERS, getChapterQuestions: getPhysicsQuestions, label: 'Physics', backTo: '/physics' },
  chemistry: { chapters: CHEM_CHAPTERS, getChapterQuestions: getChemQuestions, label: 'Chemistry', backTo: '/chemistry' },
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MockTest({ subject = 'biology' }) {
  const { chapters, getChapterQuestions, label, backTo } = SUBJECT_DATA[subject];

  const pool = useMemo(() => {
    const all = [];
    chapters.forEach(c => {
      getChapterQuestions(c.id).forEach(q => all.push({ ...q, chapterId: c.id }));
    });
    return all;
  }, [chapters, getChapterQuestions]);

  const [questions, setQuestions] = useState(null);

  function start(n) {
    setQuestions(shuffle(pool).slice(0, Math.min(n, pool.length)));
  }

  if (questions) {
    return (
      <QuizEngine
        subject={subject}
        chapterId="mock"
        title="Mock test"
        questions={questions}
        backTo={backTo}
        backLabel={`${label} chapters`}
      />
    );
  }

  return (
    <main className="practice">
      <div className="practice-shell">
        <Link to={backTo} className="back-link">← {label} chapters</Link>
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
