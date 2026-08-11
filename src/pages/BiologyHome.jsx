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

import { RESOURCES } from '../data/resources';

import '../styles/BiologyHome.css';


/* =========================================================
   BIOLOGY RESOURCE LINKS
   =========================================================


/* =========================================================
   CHAPTER CARD
   ========================================================= */

function ChapterCard({ chapter }) {
  const { state } = useProgress();

  const questions = getChapterQuestions(chapter.id);

  const attempt =
    state.attempts.biology?.[chapter.id];

  const total = questions.length;

  const seen = attempt?.seen || 0;

  const pct = total
    ? Math.min(
        100,
        Math.round((seen / total) * 100)
      )
    : 0;

  const resources =
  RESOURCES.biology[chapter.id];

  return (
    <article
      className={`chapter-card ${
        total === 0
          ? 'chapter-card-empty'
          : ''
      }`}
    >

      {/* Chapter title */}

      <div className="chapter-card-header">

        <div className="chapter-dot">
          •
        </div>

        <h3 className="name">
          {chapter.name}
        </h3>

      </div>


      {/* Progress */}

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


      {/* Study resources */}

      {resources && (
        <div className="chapter-resources">

          {resources.shortnotes && (
            <a
              href={resources.shortnotes}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-button"
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
          className="practice-button"
        >
          <span>
            Practice Questions
          </span>

          <span>
            →
          </span>
        </Link>
      )}

      {total === 0 && (
        <span className="coming-soon">
          SOON
        </span>
      )}

    </article>
  );
}


/* =========================================================
   CHAPTER SECTION
   ========================================================= */

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


/* =========================================================
   BIOLOGY HOME
   ========================================================= */

export default function BiologyHome() {

  const { state } = useProgress();

  /*
   * Calculate Biology statistics
   */

  const allChapters = [
    ...CLASS_11,
    ...CLASS_12,
  ];

  let questionsAttempted = 0;

  let correctAnswers = 0;

  allChapters.forEach((chapter) => {

    const attempt =
      state.attempts.biology?.[chapter.id];

    if (attempt) {

      questionsAttempted +=
        attempt.seen || 0;

      correctAnswers +=
        attempt.correct || 0;
    }

  });


  const accuracy =
    questionsAttempted > 0
      ? Math.round(
          (correctAnswers /
            questionsAttempted) *
            100
        )
      : 0;


  /*
   * Chapters which currently have questions
   */

  const chaptersLive =
    allChapters.filter(
      (chapter) =>
        getChapterQuestions(
          chapter.id
        ).length > 0
    ).length;


  return (
    <main className="biology-home">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="biology-header">

        <div className="biology-header-top">

          {/* Back */}

          <Link
            to="/"
            className="back-button"
          >
            ← All subjects
          </Link>


          {/* Header actions */}

          <div className="header-actions">

            <Link
              to="/biology/mock-test"
              className="mock-test-button"
            >
              Mock test
            </Link>

            <Link
              to="/biology/mistake-bank"
              className="mistake-button"
            >
              Mistake bank (
              {state.mistakes?.biology?.length || 0}
              )
            </Link>

          </div>

        </div>


        {/* Subject label */}

        <div className="subject-label">
          <span className="subject-dot">
            •
          </span>

          BIOLOGY
        </div>


        {/* Main title */}

        <h1 className="biology-title">
          Chapter-wise practice
        </h1>


        {/* Subtitle */}

        <p className="biology-subtitle">
          Concepts, diagrams, processes
        </p>


        {/* =================================================
            STATISTICS PANEL
            ================================================= */}

        <div className="biology-stats">

          <div className="stat-item">

            <div className="stat-value">
              {questionsAttempted}
            </div>

            <div className="stat-label">
              QUESTIONS ATTEMPTED
            </div>

          </div>


          <div className="stat-item">

            <div className="stat-value accuracy">
              {accuracy}%
            </div>

            <div className="stat-label">
              ACCURACY
            </div>

          </div>


          <div className="stat-item">

            <div className="stat-value">
              {chaptersLive}/
              {allChapters.length}
            </div>

            <div className="stat-label">
              CHAPTERS LIVE
            </div>

          </div>

        </div>

      </header>


      {/* =====================================================
          CHAPTERS
          ===================================================== */}

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