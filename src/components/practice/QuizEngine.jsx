import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../../context/ProgressContext';
import '../../styles/Practice.css';

const TYPE_LABEL = {
  mcq: 'MCQ',
  'assertion-reason': 'Assertion – Reason',
  statement: 'Statement based',
};

const TIMER_PRESETS = [5, 10, 15, 20, 30];

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function QuizEngine({ subject, chapterId, title, questions, backTo, backLabel }) {
  const { recordAnswer, recordSessionScore, toggleBookmark, state } = useProgress();

  const [phase, setPhase] = useState('setup');
  const [customMinutes, setCustomMinutes] = useState('');
  const [timerTotalSeconds, setTimerTotalSeconds] = useState(null);
  const [remainingSeconds, setRemainingSeconds] = useState(null);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [skippedCount, setSkippedCount] = useState(0);
  const [visited, setVisited] = useState(() => new Set());
  const [reviewed, setReviewed] = useState(() => new Set());
  const [answers, setAnswers] = useState({});
  const finishedRef = useRef(false);

  // Each time a practice screen is opened, create one fresh question order.
  // Keep that order stable while answering so context updates cannot reshuffle it.
  const freshQuestionsRef = useRef(null);
  if (freshQuestionsRef.current === null) {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    freshQuestionsRef.current = shuffled;
  }
  const freshQuestions = freshQuestionsRef.current;

  const current = freshQuestions[index];
  const bookmarks = state.bookmarks[subject] || {};
  const isBookmarked = current && !!bookmarks[current.id];

  const pct = useMemo(
    () => Math.round(((index + 1) / freshQuestions.length) * 100),
    [index, freshQuestions.length]
  );

  useEffect(() => {
    if (phase !== 'active' || timerTotalSeconds === null) return undefined;
    const tick = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev === null) return prev;
        if (prev <= 1) {
          clearInterval(tick);
          if (!finishedRef.current) finishSession();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, timerTotalSeconds]);

  useEffect(() => {
    if (phase === 'active') {
      setVisited((prev) => {
        const next = new Set(prev);
        next.add(index);
        return next;
      });
    }
  }, [index, phase]);

  if (!freshQuestions.length) {
    return (
      <main className="practice">
        <div className="practice-shell">
          <p>No questions available yet.</p>
          <Link to={backTo} className="pill-btn">{backLabel}</Link>
        </div>
      </main>
    );
  }

  function startWithTimer(minutes) {
    if (minutes) {
      setTimerTotalSeconds(minutes * 60);
      setRemainingSeconds(minutes * 60);
    } else {
      setTimerTotalSeconds(null);
      setRemainingSeconds(null);
    }
    setPhase('active');
  }

  function finishSession() {
    finishedRef.current = true;
    recordSessionScore(subject, chapterId, score, freshQuestions.length);
    setPhase('finished');
  }

  function handleSelect(i) {
    if (selected !== null) return;
    setSelected(i);
    setAnswers((prev) => ({ ...prev, [index]: i }));
    const correct = i === current.correctIndex;
    if (correct) setScore((s) => s + 1);
    recordAnswer(subject, current.chapterId || chapterId, current, correct);
  }

  function goTo(indexToGo) {
    const next = Math.max(0, Math.min(indexToGo, freshQuestions.length - 1));
    setIndex(next);
    setSelected(answers[next] ?? null);
  }

  function goToNextOrFinish() {
    if (index + 1 >= freshQuestions.length) {
      finishSession();
    } else {
      goTo(index + 1);
    }
  }

  function handleSkip() {
    if (selected !== null) return;
    setSkippedCount((c) => c + 1);
    recordAnswer(subject, current.chapterId || chapterId, current, false);
    goToNextOrFinish();
  }

  function handleReviewAndNext() {
    setReviewed((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

    if (index + 1 >= freshQuestions.length) {
      finishSession();
    } else {
      goTo(index + 1);
    }
  }

  function handleRetry() {
    finishedRef.current = false;
    setIndex(0);
    setSelected(null);
    setScore(0);
    setSkippedCount(0);
    setVisited(new Set());
    setReviewed(new Set());
    setAnswers({});
    setPhase('setup');
    setTimerTotalSeconds(null);
    setRemainingSeconds(null);
  }

  function statusFor(i) {
    if (reviewed.has(i) && answers[i] !== undefined) return 'answered-review';
    if (reviewed.has(i)) return 'review';
    if (answers[i] !== undefined) return 'answered';
    if (visited.has(i)) return 'not-answered';
    return 'not-visited';
  }

  if (phase === 'setup') {
    return (
      <main className="practice">
        <div className="practice-shell">
          <Link to={backTo} className="back-link">← {backLabel}</Link>
          <div className="summary-card" style={{ marginTop: '1.5rem' }}>
            <div className="q-type-tag">{title} · {freshQuestions.length} questions</div>
            <p>Set a timer for this session if you want one — it's off by default, so nothing auto-submits unless you choose a time here.</p>
            <div className="summary-actions">
              {TIMER_PRESETS.map((m) => (
                <button key={m} className="pill-btn" onClick={() => startWithTimer(m)}>{m} min</button>
              ))}
            </div>
            <div className="summary-actions" style={{ marginTop: '0.75rem' }}>
              <input
                type="number"
                min="1"
                placeholder="Custom minutes"
                value={customMinutes}
                onChange={(e) => setCustomMinutes(e.target.value)}
                style={{ width: '140px', padding: '0.55rem 0.8rem', borderRadius: '999px', border: '1px solid var(--line)', background: 'transparent', color: 'var(--ink)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}
              />
              <button
                className="pill-btn"
                disabled={!customMinutes || Number(customMinutes) <= 0}
                onClick={() => startWithTimer(Number(customMinutes))}
              >
                Start with custom timer
              </button>
            </div>
            <div className="summary-actions" style={{ marginTop: '0.75rem' }}>
              <button className="pill-btn primary" onClick={() => startWithTimer(null)}>Start with no time limit</button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (phase === 'finished') {
    return (
      <main className="practice">
        <div className="practice-shell">
          <div className="summary-card">
            <div className="q-type-tag">{title} · complete</div>
            <div className="summary-score">{score}/{freshQuestions.length}</div>
            <p>
              {Math.round((score / freshQuestions.length) * 100)}% correct this session
              {skippedCount > 0 ? ` · ${skippedCount} skipped` : ''}
              {timerTotalSeconds !== null && remainingSeconds === 0 ? ' · time ran out' : ''}
            </p>
            <div className="summary-actions">
              <Link to={backTo} className="pill-btn primary">{backLabel}</Link>
              <button className="pill-btn" onClick={handleRetry}>Retry this set</button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const answeredReviewCount = [...reviewed].filter((i) => answers[i] !== undefined).length;
  const answeredCount = Math.max(0, Object.keys(answers).length - answeredReviewCount);
  const notAnsweredCount = Math.max(0, visited.size - Object.keys(answers).length);
  const reviewCount = Math.max(0, reviewed.size - answeredReviewCount);

  return (
    <main className={`test-page test-${subject}`}>
      <header className="test-header">
        <div className="test-candidate">
          <div className="candidate-avatar" aria-hidden="true">
            <span />
          </div>
          <div className="candidate-meta">
            <div><strong>Candidate Name</strong><span>: [Your Name]</span></div>
            <div><strong>Exam Name</strong><span>: NEET</span></div>
            <div><strong>Subject Name</strong><span>: {subject.toUpperCase()}</span></div>
            <div>
              <strong>Remaining Time</strong>
              <span className={`timer-chip${remainingSeconds !== null && remainingSeconds <= 60 ? ' warning' : ''}`}>
                {remainingSeconds === null ? 'No Limit' : formatTime(remainingSeconds)}
              </span>
            </div>
          </div>
        </div>

        <div className="test-header-actions">
          <span className="test-title">{title}</span>
          <Link to={backTo} className="exit-test">Exit test</Link>
        </div>
      </header>

      <div className="test-workspace">
        <section className="question-panel">
          <div className="question-scroll">
            <div className="question-heading">
              <div>
                <span className="question-number">Question {index + 1}:</span>
                <span className="question-type">{TYPE_LABEL[current.type] || current.type} · {current.difficulty}</span>
              </div>
              <span className="question-progress">{index + 1} / {freshQuestions.length}</span>
            </div>

            <div className="question-body">
              <div className="q-text">{current.question}</div>

              <div className="q-options exam-options">
                {current.options.map((opt, i) => {
                  let cls = 'q-option';
                  if (selected !== null) {
                    if (i === current.correctIndex) cls += ' correct';
                    else if (i === selected) cls += ' incorrect';
                  }
                  return (
                    <button key={i} className={cls} disabled={selected !== null} onClick={() => handleSelect(i)}>
                      <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {selected !== null && (
                <div className="explanation-box">{current.explanation}</div>
              )}
            </div>
          </div>

          <div className="question-footer">
            <button
              className={`exam-action review-action${reviewed.has(index) ? ' active' : ''}`}
              onClick={handleReviewAndNext}
            >
              {reviewed.has(index) ? 'Marked for Review' : 'Mark for Review & Next'}
            </button>

            <button className="exam-action clear-action" onClick={() => {
              setSelected(null);
              setAnswers((prev) => {
                const next = { ...prev };
                delete next[index];
                return next;
              });
            }}>
              Clear Response
            </button>

            {selected === null && (
              <button className="exam-action skip-action" onClick={handleSkip}>
                Skip
              </button>
            )}

            <button className="exam-action save-action" disabled={selected === null} onClick={goToNextOrFinish}>
              {index + 1 >= freshQuestions.length ? 'Submit Test' : 'Save & Next'}
            </button>
          </div>

          <div className="mobile-palette-toggle">
            <span>{answeredCount} answered · {reviewCount} review</span>
            <button type="button" onClick={() => document.querySelector('.test-sidebar')?.classList.toggle('mobile-open')}>
              Question Palette
            </button>
          </div>
        </section>

        <aside className="test-sidebar">
          <div className="sidebar-top">
            <div className="status-summary">
              <div className="status-count not-visited"><b>{freshQuestions.length - visited.size}</b><span>Not Visited</span></div>
              <div className="status-count not-answered"><b>{notAnsweredCount}</b><span>Not Answered</span></div>
              <div className="status-count answered"><b>{answeredCount}</b><span>Answered</span></div>
              <div className="status-count review"><b>{reviewCount}</b><span>Marked for Review</span></div>
              <div className="status-count answered-review"><b>{answeredReviewCount}</b><span>Answered &amp; Marked</span></div>
            </div>

            <div className="palette-header">
              <span>Question Palette</span>
              <span>{freshQuestions.length} Questions</span>
            </div>

            <div className="question-palette">
              {freshQuestions.map((_, i) => (
                <button
                  key={i}
                  className={`palette-btn ${statusFor(i)}${i === index ? ' current' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Question ${i + 1}, ${statusFor(i).replaceAll('-', ' ')}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="sidebar-legend">
            <div><span className="legend-dot not-visited" /> Not Visited</div>
            <div><span className="legend-dot not-answered" /> Not Answered</div>
            <div><span className="legend-dot answered" /> Answered</div>
            <div><span className="legend-dot review" /> Marked for Review</div>
            <div><span className="legend-dot answered-review" /> Answered &amp; Marked for Review</div>
          </div>
        </aside>
      </div>
    </main>
  );
}
