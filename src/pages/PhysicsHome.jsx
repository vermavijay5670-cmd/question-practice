import { Link } from 'react-router-dom';
import { CLASS_11, CLASS_12 } from '../data/physics/chapters';
import { getChapterQuestions } from '../data/physics/questions';
import { useProgress } from '../context/ProgressContext';
import '../styles/PhysicsHome.css';

function ChapterCard({ chapter }) {
  const { state } = useProgress();
  const questions = getChapterQuestions(chapter.id);
  const attempt = state.attempts.physics?.[chapter.id];
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
    <Link to={`/physics/chapter/${chapter.id}`} className="chapter-card">
      <div className="name">{chapter.name}</div>
      <div className="progress-track"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
      <div className="meta-row">
        <span>{total} questions</span>
        <span>{attempt?.correct || 0}/{seen || 0} correct so far</span>
      </div>
    </Link>
  );
}

export default function PhysicsHome() {
  const { state } = useProgress();
  const attempts = state.attempts.physics || {};
  const mistakeCount = Object.keys(state.mistakes.physics || {}).length;
  const totalSeen = Object.values(attempts).reduce((s, a) => s + (a.seen || 0), 0);
  const totalCorrect = Object.values(attempts).reduce((s, a) => s + (a.correct || 0), 0);
  const accuracy = totalSeen ? Math.round((totalCorrect / totalSeen) * 100) : 0;
  const chaptersLive = [...CLASS_11, ...CLASS_12].filter(c => getChapterQuestions(c.id).length > 0).length;

  return (
    <main className="phy-home">
      <div className="phy-top">
        <div className="phy-title-block">
          <Link to="/" className="back-link">← All subjects</Link>
          <div className="eyebrow">Physics</div>
          <h1>Chapter-wise practice</h1>
        </div>
        <div className="phy-actions">
          <Link to="/physics/mock" className="pill-btn primary">Mock test</Link>
          <Link to="/physics/mistakes" className="pill-btn">Mistake bank ({mistakeCount})</Link>
        </div>
      </div>

      <div className="phy-stats-strip">
        <div className="phy-stat"><span className="num">{totalSeen}</span><span className="label">Questions attempted</span></div>
        <div className="phy-stat"><span className="num">{accuracy}%</span><span className="label">Accuracy</span></div>
        <div className="phy-stat"><span className="num">{chaptersLive}/{CLASS_11.length + CLASS_12.length}</span><span className="label">Chapters live</span></div>
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
