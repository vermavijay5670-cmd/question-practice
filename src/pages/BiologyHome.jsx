import { Link } from 'react-router-dom';
import { CLASS_11, CLASS_12 } from '../data/biology/chapters';
import { getChapterQuestions } from '../data/biology/questions';
import { useProgress } from '../context/ProgressContext';
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

      {/* =========================================
          CHAPTER NAME
          ========================================= */}

      <div className="name">
        {chapter.name}
      </div>


      {/* =========================================
          QUESTION PROGRESS
          ========================================= */}

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
          No questions yet — send the chapter PDF,
          or add a question bank.
        </div>
      )}


      {/* =========================================
          VISIT STUDY MATERIAL
          ========================================= */}

      {chapter.link && (
        <a
          href={chapter.link}
          target="_blank"
          rel="noopener noreferrer"
          className="chapter-resource-link"
          onClick={(e) => e.stopPropagation()}
        >
          ↗ Visit Study Material
        </a>
      )}


      {/* =========================================
          PRACTICE QUESTIONS
          ========================================= */}

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