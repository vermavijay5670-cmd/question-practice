import React from 'react';
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


/*
|--------------------------------------------------------------------------
| BIOLOGY RESOURCE LINKS
|--------------------------------------------------------------------------
| Add links here using the chapter ID.
|
| Currently added:
| Breathing and Exchange of Gases
|
*/

const BIOLOGY_RESOURCES = {

  'breathing-exchange-gases': {

    shortnotes:
      'https://notebook.google.com/notebook/7d11822a-2997-4e81-b094-6de042470478/artifact/20ea724c-b7db-49f7-868b-3ebb7161c8c3?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_1&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_1_',

    flashcards:
      'https://notebook.google.com/notebook/7d11822a-2997-4e81-b094-6de042470478/artifact/edeba718-2188-49f9-869e-24a14161720b?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_1&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_1_',

  },

};


/*
|--------------------------------------------------------------------------
| CHAPTER CARD
|--------------------------------------------------------------------------
*/

function ChapterCard({ chapter }) {

  const { state } = useProgress();

  const questions =
    getChapterQuestions(chapter.id);

  const attempt =
    state.attempts.biology?.[chapter.id];

  const total =
    questions.length;

  const seen =
    attempt?.seen || 0;

  const pct =
    total > 0
      ? Math.min(
          100,
          Math.round((seen / total) * 100)
        )
      : 0;


  /*
  |--------------------------------------------------------------------------
  | RESOURCE LINKS
  |--------------------------------------------------------------------------
  */

  const resources =
    BIOLOGY_RESOURCES[chapter.id];


  return (

    <article
      className={`chapter-card ${
        total === 0
          ? 'chapter-card-empty'
          : ''
      }`}
    >

      {/* =====================================================
          CHAPTER NAME
          ===================================================== */}

      <div className="chapter-card-header">

        <div className="chapter-dot">
          •
        </div>

        <h3 className="name">
          {chapter.name}
        </h3>

      </div>


      {/* =====================================================
          PROGRESS
          ===================================================== */}

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
              {seen || 0} correct
            </span>

          </div>

        </>

      ) : (

        <div className="empty-tag">

          No questions yet — add the chapter
          question bank.

        </div>

      )}


      {/* =====================================================
          RESOURCE BUTTONS
          ===================================================== */}

      {resources && (

        <div className="chapter-resources">

          {resources.shortnotes && (

            <a
              href={resources.shortnotes}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-button"
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <span className="resource-icon">
                ↗
              </span>

              Short Notes

            </a>

          )}


          {resources.flashcards && (

            <a
              href={resources.flashcards}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-button"
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <span className="resource-icon">
                ↗
              </span>

              FlashCards

            </a>

          )}

        </div>

      )}


      {/* =====================================================
          PRACTICE QUESTIONS
          ===================================================== */}

      {total > 0 && (

        <Link
          to={`/biology/chapter/${chapter.id}`}
          className="practice-button"
        >

          Practice Questions

          <span>
            →
          </span>

        </Link>

      )}


      {/* =====================================================
          COMING SOON
          ===================================================== */}

      {total === 0 && (

        <span className="coming-soon">
          SOON
        </span>

      )}

    </article>

  );
}


/*
|--------------------------------------------------------------------------
| CHAPTER SECTION
|--------------------------------------------------------------------------
*/

function ChapterSection({
  title,
  chapters,
}) {

  return (

    <section className="biology-section">

      <div className="section-title">

        <span>
          {title}
        </span>

      </div>


      <div className="chapters-grid">

        {chapters.map((chapter) => (

          <ChapterCard
            key={chapter.id}
            chapter={chapter}
          />

        ))}

      </div>

    </section>

  );
}


/*
|--------------------------------------------------------------------------
| BIOLOGY HOME
|--------------------------------------------------------------------------
*/

export default function BiologyHome() {

  return (

    <main className="biology-home">

      <ChapterSection
        title="CLASS 11"
        chapters={CLASS_11}
      />


      <ChapterSection
        title="CLASS 12"
        chapters={CLASS_12}
      />

    </main>

  );
}