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

export default function Bookmarks({ subject = 'biology' }) {
  const { chapters, label, backTo } = SUBJECT_DATA[subject];
  const { state, toggleBookmark } = useProgress();
  const marked = Object.values(state.bookmarks[subject] || {});
  const [reviewing, setReviewing] = useState(false);

  if (reviewing && marked.length) {
    return (
      <QuizEngine
        subject={subject}
        chapterId="bookmark-review"
        title="Marked questions"
        questions={marked}
        backTo={`${backTo}/bookmarks`}
        backLabel="Bookmarks"
      />
    );
  }

  return (
    <main className="practice">
      <div className="practice-shell">
        <Link to={backTo} className="back-link">← {label} chapters</Link>
        <div className="summary-card" style={{ marginTop: '1.5rem' }}>
          <div className="q-type-tag">Bookmarks</div>
          <div className="summary-score">{marked.length}</div>
          <p>{marked.length ? 'Question(s) you marked while attempting, ready to revisit.' : "Nothing here yet — tap ☆ Bookmark on a question while attempting to save it here for later review."}</p>
          {marked.length > 0 && (
            <div className="summary-actions">
              <button className="pill-btn primary" onClick={() => setReviewing(true)}>Review all</button>
            </div>
          )}
        </div>

        {marked.length > 0 && (
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {marked.map(m => {
              const chapter = chapters.find(c => c.id === m.chapterId);
              return (
                <div key={m.id} className="chapter-card" style={{ background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                  <div>
                    <div className="name" style={{ fontSize: '0.95rem' }}>{chapter?.name || m.chapterId}</div>
                    <div className="meta-row"><span>{m.question.slice(0, 70)}...</span></div>
                  </div>
                  <button
                    className="bookmark-btn active"
                    style={{ flexShrink: 0 }}
                    onClick={() => toggleBookmark(subject, m, m.chapterId)}
                  >
                    ★ Remove
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}