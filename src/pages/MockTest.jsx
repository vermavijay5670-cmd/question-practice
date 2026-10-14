import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ALL_CHAPTERS as BIO_CHAPTERS } from '../data/biology/chapters';
import { getChapterQuestions as getBioQuestions, getChapterQuestionCount as getBioCount } from '../data/biology/questions';
import { ALL_CHAPTERS as PHYSICS_CHAPTERS } from '../data/physics/chapters';
import { getChapterQuestions as getPhysicsQuestions, getChapterQuestionCount as getPhysicsCount } from '../data/physics/questions';
import { ALL_CHAPTERS as CHEM_CHAPTERS } from '../data/chemistry/chapters';
import { getChapterQuestions as getChemQuestions, getChapterQuestionCount as getChemCount } from '../data/chemistry/questions';
import QuizEngine from '../components/practice/QuizEngine';
import '../styles/Practice.css';

const SUBJECT_DATA = {
  biology: { chapters: BIO_CHAPTERS, getChapterQuestions: getBioQuestions, getCount: getBioCount, label: 'Biology', backTo: '/biology' },
  physics: { chapters: PHYSICS_CHAPTERS, getChapterQuestions: getPhysicsQuestions, getCount: getPhysicsCount, label: 'Physics', backTo: '/physics' },
  chemistry: { chapters: CHEM_CHAPTERS, getChapterQuestions: getChemQuestions, getCount: getChemCount, label: 'Chemistry', backTo: '/chemistry' },
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
  const { chapters, getChapterQuestions, getCount, label, backTo } = SUBJECT_DATA[subject];

  // Known up front from the generated counts, so nothing has to be downloaded just to show this screen.
  const poolSize = useMemo(() => chapters.reduce((n, c) => n + getCount(c.id), 0), [chapters, getCount]);

  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Only now are this subject's chapter banks downloaded (in parallel, once; cached afterwards).
  async function start(n) {
    setLoading(true);
    setError(false);
    try {
      const banks = await Promise.all(
        chapters.map(async (c) => (await getChapterQuestions(c.id)).map(q => ({ ...q, chapterId: c.id })))
      );
      setQuestions(shuffle(banks.flat()).slice(0, n));
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
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
          <p>{poolSize} questions currently available across live chapters. Pick a length:</p>
          {loading && <p>Loading questions…</p>}
          {error && <p>Couldn't load the questions — check your connection and try again.</p>}
          <div className="summary-actions">
            <button className="pill-btn primary" disabled={loading} onClick={() => start(10)}>10 questions</button>
            <button className="pill-btn primary" disabled={loading} onClick={() => start(20)}>20 questions</button>
            <button className="pill-btn primary" disabled={loading} onClick={() => start(poolSize)}>All available</button>
          </div>
        </div>
      </div>
    </main>
  );
}
