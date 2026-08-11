import { Link } from 'react-router-dom';
import { CLASS_11, CLASS_12 } from '../data/chemistry/chapters';
import { getChapterQuestions } from '../data/chemistry/questions';
import { useProgress } from '../context/ProgressContext';
import { RESOURCES } from '../data/resources';
import '../styles/ChemistryHome.css';

function ChapterCard({ chapter }) {
  const { state } = useProgress();

  const questions = getChapterQuestions(chapter.id);

  const attempt = state.attempts.chemistry?.[chapter.id];

  const total = questions.length;
  const seen = attempt?.seen || 0;

  const pct = total
    ? Math.min(100, Math.round((seen / total) * 100))
    : 0;
  const resources =
  RESOURCES.chemistry[chapter.id];

  /*
   * If no questions have been added yet,
   * show the chapter as coming soon.
   */
  if (total === 0) {
    return (
      <div className="chem-chapter-card chem-empty-card">

        <div className="chem-card-number">
          {chapter.number || '—'}
        </div>

        <div className="chem-card-content">

          <div className="name">
            {chapter.name}
          </div>

          <div className="empty-tag">
            No questions yet — add the chapter question bank.
          </div>

        </div>

        <div className="chem-status">
          SOON
        </div>

      </div>
    );
  }

  return (
    <Link
      to={`/chemistry/chapter/${chapter.id}`}
      className="chem-chapter-card"
    >

      <div className="chem-card-number">
        {chapter.number || '•'}
      </div>

      <div className="chem-card-content">

        <div className="name">
          {chapter.name}
        </div>

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${pct}%` }}
          />
        </div>

        <div className="meta-row">
  <span>
    {total} questions
  </span>

  <span>
    {attempt?.correct || 0}/{seen || 0} correct
  </span>
</div>

{/* STUDY RESOURCES */}

{resources && (
  <div className="chapter-resources">

    {resources.shortnotes && (
      <a
        href={resources.shortnotes}
        target="_blank"
        rel="noopener noreferrer"
        className="resource-button"
        onClick={(e) => e.stopPropagation()}
      >
        ↗ Short Notes
      </a>
    )}

    {resources.flashcards && (
      <a
        href={resources.flashcards}
        target="_blank"
        rel="noopener noreferrer"
        className="resource-button"
        onClick={(e) => e.stopPropagation()}
      >
        ↗ FlashCards
      </a>
    )}

  </div>
)}

</div>

<div className="chem-arrow">
  →
</div>

    </Link>
  );
}


export default function ChemistryHome() {

  const { state } = useProgress();

  const attempts =
    state.attempts.chemistry || {};

  const mistakeCount =
    Object.keys(
      state.mistakes.chemistry || {}
    ).length;

  const totalSeen =
    Object.values(attempts)
      .reduce(
        (sum, attempt) =>
          sum + (attempt.seen || 0),
        0
      );

  const totalCorrect =
    Object.values(attempts)
      .reduce(
        (sum, attempt) =>
          sum + (attempt.correct || 0),
        0
      );

  const accuracy =
    totalSeen
      ? Math.round(
          (totalCorrect / totalSeen) * 100
        )
      : 0;

  const allChapters = [
    ...CLASS_11,
    ...CLASS_12
  ];

  const chaptersLive =
    allChapters.filter(
      chapter =>
        getChapterQuestions(chapter.id).length > 0
    ).length;


  return (

    <main className="chem-home">

      {/* =================================================
          HEADER
          ================================================= */}

      <div className="chem-top">

        <div className="chem-title-block">

          <Link
            to="/"
            className="back-link"
          >
            ← All subjects
          </Link>

          <div className="eyebrow">
            Chemistry
          </div>

          <h1>
            Chapter-wise practice
          </h1>

          <p className="chem-subtitle">
            Reactions, mechanisms, structure
          </p>

        </div>


        {/* ACTION BUTTONS */}

        <div className="chem-actions">

          <Link
            to="/chemistry/mock"
            className="pill-btn primary"
          >
            Mock test
          </Link>

          <Link
            to="/chemistry/mistakes"
            className="pill-btn"
          >
            Mistake bank ({mistakeCount})
          </Link>

        </div>

      </div>


      {/* =================================================
          STATS
          ================================================= */}

      <div className="chem-stats-strip">

        <div className="chem-stat">
          <span className="num">
            {totalSeen}
          </span>

          <span className="label">
            Questions attempted
          </span>
        </div>


        <div className="chem-stat">
          <span className="num">
            {accuracy}%
          </span>

          <span className="label">
            Accuracy
          </span>
        </div>


        <div className="chem-stat">
          <span className="num">
            {chaptersLive}/{allChapters.length}
          </span>

          <span className="label">
            Chapters live
          </span>
        </div>

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
