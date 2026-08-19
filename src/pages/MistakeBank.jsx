import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { ALL_CHAPTERS as BIO_CHAPTERS } from '../data/biology/chapters';
import { ALL_CHAPTERS as PHYSICS_CHAPTERS } from '../data/physics/chapters';
import { ALL_CHAPTERS as CHEM_CHAPTERS } from '../data/chemistry/chapters';
import QuizEngine from '../components/practice/QuizEngine';
import '../styles/Practice.css';

const SUBJECT_DATA = {
  biology: { chapters: BIO_CHAPTERS, label: 'Biology', backTo: '/biology' },
  physics: { chapters: PHYSICS_CHAPTERS, label: 'Physics', backTo: '/physics' },
  chemistry: { chapters: CHEM_CHAPTERS, label: 'Chemistry', backTo: '/chemistry' },
};

export default function MistakeBank({ subject = 'biology' }) {
  const { chapters, label, backTo } = SUBJECT_DATA[subject];
  const { state } = useProgress();
  const mistakes = Object.values(state.mistakes[subject] || {});
  const [reviewing, setReviewing] = useState(false);

  if (reviewing && mistakes.length) {
    return (
      <QuizEngine
        subject={subject}
        chapterId="mistake-review"
        title="Mistake review"
        questions={mistakes}
        backTo={`${backTo}/mistakes`}
        backLabel="Mistake bank"
      />
    );
  }

  return (
    <main className="practice">
      <div className="practice-shell">
        <Link to={backTo} className="back-link">← {label} chapters</Link>
        <div className="summary-card" style={{ marginTop: '1.5rem' }}>
          <div className="q-type-tag">Mistake bank</div>
          <div className="summary-score">{mistakes.length}</div>
          <p>{mistakes.length ? 'Question(s) you got wrong, waiting for a rematch.' : 'Nothing here yet — mistakes you make in practice or mock tests land here automatically.'}</p>
          {mistakes.length > 0 && (
            <div className="summary-actions">
              <button className="pill-btn primary" onClick={() => setReviewing(true)}>Review all</button>
            </div>
          )}
        </div>

        {mistakes.length > 0 && (
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {mistakes.map(m => {
              const chapter = chapters.find(c => c.id === m.chapterId);
              return (
                <div key={m.id} className="chapter-card" style={{ background: 'var(--surface)' }}>
                  <div className="name" style={{ fontSize: '0.95rem' }}>{chapter?.name || m.chapterId}</div>
                  <div className="meta-row"><span>{m.question.slice(0, 70)}...</span></div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
