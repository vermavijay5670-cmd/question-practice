import { Link } from 'react-router-dom';
import { CLASS_11, CLASS_12 } from '../data/biology/chapters';
import { getChapterQuestions } from '../data/biology/questions';
import { useProgress } from '../context/ProgressContext';
import '../styles/BiologyHome.css';

function ChapterCard({ chapter }) {
  const { state } = useProgress();
  const questions = getChapterQuestions(chapter.id);
  const attempt = state.attempts.biology?.[chapter.id];
  const total = questions.length;
  const seen = attempt?.seen || 0;
  const pct = total ? Math.min(100, Math.round((seen / total) * 100)) : 0;

  if (total === 0) {
    return (
      <div className="chapter-card">
        <div className="name">{chapter.name}</div>
        <div className="empty-tag">No questions yet — send the chapter PDF, or ask Claude to generate a set.</div>
      </div>
    );
  }

  return (
    <Link to={`/biology/chapter/${chapter.id}`} className="chapter-card">
      <div className="name">{chapter.name}</div>
      <div className="progress-track"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
      <div className="meta-row">
        <span>{total} questions</span>
        <span>{attempt?.correct || 0}/{seen || 0} correct so far</span>
      </div>
    </Link>
  );
}

export default function BiologyHome() {
  const { state } = useProgress();
  const attempts = state.attempts.biology || {};
  const mistakeCount = Object.keys(state.mistakes.biology || {}).length;
  const totalSeen = Object.values(attempts).reduce((s, a) => s + (a.seen || 0), 0);
  const totalCorrect = Object.values(attempts).reduce((s, a) => s + (a.correct || 0), 0);
  const accuracy = totalSeen ? Math.round((totalCorrect / totalSeen) * 100) : 0;
  const chaptersLive = [...CLASS_11, ...CLASS_12].filter(c => getChapterQuestions(c.id).length > 0).length;

  return (
    <main className="bio-home">
      <div className="bio-top">
        <div className="bio-title-block">
          <Link to="/" className="back-link">← All subjects</Link>
          <div className="eyebrow">Biology</div>
          <h1>Chapter-wise practice</h1>
        </div>
        <div className="bio-actions">
          <Link to="/biology/mock" className="pill-btn primary">Mock test</Link>
          <Link to="/biology/mistakes" className="pill-btn">Mistake bank ({mistakeCount})</Link>
        </div>
      </div>

      <div className="bio-stats-strip">
        <div className="bio-stat"><span className="num">{totalSeen}</span><span className="label">Questions attempted</span></div>
        <div className="bio-stat"><span className="num">{accuracy}%</span><span className="label">Accuracy</span></div>
        <div className="bio-stat"><span className="num">{chaptersLive}/{CLASS_11.length + CLASS_12.length}</span><span className="label">Chapters live</span></div>
      </div>

      <section className="class-section">
        <div className="class-heading">Class 11</div>
        <div className="chapter-grid">
          {CLASS_11.map((c) => <ChapterCard key={c.id} chapter={c} />)}
        </div>
      </section>

      <section className="class-section">
        <div className="class-heading">Class 12</div>
        <div className="chapter-grid">
          {CLASS_12.map((c) => <ChapterCard key={c.id} chapter={c} />)}
        </div>
      </section>
    </main>
  );
}
