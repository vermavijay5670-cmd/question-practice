import { Link } from 'react-router-dom';

import {
  CLASS_11,
  CLASS_12,
} from '../data/biology/chapters';

import {
  getChapterQuestions,
} from '../data/biology/questions';

import {
  useProgress,
} from '../context/ProgressContext';

import '../styles/BiologyHome.css';

function ChapterCard({ chapter }) {
  const { state } = useProgress();

  const questions = getChapterQuestions(chapter.id);

  const attempt =
    state.attempts.biology?.[chapter.id];

  const total = questions.length;

  const seen =
    attempt?.seen || 0;

  const pct = total
    ? Math.min(
        100,
        Math.round((seen / total) * 100)
      )
    : 0;

  return (
    <div className="chapter-card">

      <div className="name">
        {chapter.name}
      </div>

      {total > 0 ? (
        <>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: `${pct}%`,
              }}
            />
          </div>

          <div className="meta-row">
            <span>
              {total} questions
            </span>

            <span>
              {attempt?.correct || 0}/
              {seen || 0} correct so far
            </span>
          </div>
        </>
      ) : (
        <div className="empty-tag">
          No questions yet — add the chapter
          question bank.
        </div>
      )}

      {/* Study resources */}

      {chapter.resources && (
        <div className="chapter-resources">

          {chapter.resources.Shortnotes && (
            <a
              href={chapter.resources.Shortnotes}
              target="_blank"
              rel="noopener noreferrer"
              className="chapter-resource-link"
              onClick={(e) => e.stopPropagation()}
            >
              ↗ Short Notes
            </a>
          )}

          {chapter.resources.FlashCards && (
            <a
              href={chapter.resources.FlashCards}
              target="_blank"
              rel="noopener noreferrer"
              className="chapter-resource-link"
              onClick={(e) => e.stopPropagation()}
            >
              ↗ FlashCards
            </a>
          )}

        </div>
      )}

      {/* Practice */}

      {total > 0 && (
        <Link
          to={`/biology/chapter/${chapter.id}`}
          className="chapter-practice-link"
        >
          Practice Questions →
        </Link>
      )}

    </div>
  );
}