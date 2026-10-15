import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../../context/ProgressContext';
import '../../styles/Practice.css';
import '../../styles/QuizSetup.css';

const TYPE_LABEL = {
  mcq: 'MCQ',
  'assertion-reason': 'Assertion – Reason',
  statement: 'Statement based',
};

const TIMER_PRESETS = [5, 10, 15, 20, 30];

// Bump when the order of options can change, so saved in-progress sessions (which store
// the selected option index) from an older layout aren't resumed against the new one.
const SESSION_VERSION = 2;

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// Checks a saved session against the current question set — if the chapter's
// questions changed (or it's a freshly shuffled mock test), the old session
// no longer lines up and should be ignored rather than resumed into garbage.
function sessionMatches(session, questions) {
  if (!session || session.v !== SESSION_VERSION || !Array.isArray(session.answers)) return false;
  if (session.questionIds?.length !== questions.length) return false;
  for (let i = 0; i < questions.length; i++) {
    if (session.questionIds[i] !== questions[i].id) return false;
  }
  return true;
}

export default function QuizEngine({ subject, chapterId, title, questions, backTo, backLabel }) {
  const { recordAnswer, recordSkip, recordSessionScore, toggleBookmark, state, getSession, saveSession, clearSession } = useProgress();

  // Look up any in-progress attempt for this exact chapter + question set once, on mount.
  const savedSession = useMemo(() => {
    const s = getSession(subject, chapterId);
    return sessionMatches(s, questions) ? s : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 'setup' lets you optionally set a timer before starting — there is no default
  // time limit unless you choose one here. Resuming a saved session skips setup.
  const [phase, setPhase] = useState(savedSession?.phase === 'active' ? 'active' : 'setup');
  const [customMinutes, setCustomMinutes] = useState('');
  const [timerTotalSeconds, setTimerTotalSeconds] = useState(savedSession?.timerTotalSeconds ?? null);
  const [timerEndAt, setTimerEndAt] = useState(savedSession?.timerEndAt ?? null);
  const [, setTick] = useState(0); // forces a re-render each second so the countdown display updates

  const [index, setIndex] = useState(() => {
    if (!savedSession) return 0;
    return Math.min(savedSession.index, questions.length - 1);
  });
  // answers[i] is null (untouched), { type: 'answered', selected, correct }, or { type: 'skipped' }
  const [answers, setAnswers] = useState(() => savedSession?.answers ?? Array(questions.length).fill(null));
  const finishedRef = useRef(false);
  const scoreRef = useRef(0);

  const current = questions[index];
  const bookmarks = state.bookmarks[subject] || {};
  const isBookmarked = current && !!bookmarks[current.id];

  const currentAnswer = answers[index] || null;
  // A skipped question is NOT answered — it can be revisited and answered later.
  const answered = currentAnswer?.type === 'answered';
  const selectedIndex = currentAnswer?.type === 'answered' ? currentAnswer.selected : null;

  const score = useMemo(
    () => answers.reduce((n, a) => n + (a?.type === 'answered' && a.correct ? 1 : 0), 0),
    [answers]
  );
  const skippedCount = useMemo(() => answers.filter(a => a?.type === 'skipped').length, [answers]);
  scoreRef.current = score;

  const remainingSeconds = timerEndAt !== null ? Math.max(0, Math.ceil((timerEndAt - Date.now()) / 1000)) : null;
  const pct = useMemo(() => Math.round((index / questions.length) * 100), [index, questions.length]);

  // Persist progress (question index, per-question answers, timer) as it changes,
  // so reloading or navigating away and back resumes exactly where you left off.
  useEffect(() => {
    if (phase !== 'active') return;
    saveSession(subject, chapterId, {
      v: SESSION_VERSION,
      questionIds: questions.map(q => q.id),
      index,
      answers,
      phase,
      timerTotalSeconds,
      timerEndAt,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, index, answers, timerTotalSeconds, timerEndAt]);

  // Countdown — only runs when a timer was actually set, and auto-finishes at zero.
  // Uses a fixed end timestamp rather than a decrementing counter so it survives reloads correctly.
  useEffect(() => {
    if (phase !== 'active' || timerEndAt === null) return undefined;
    const iv = setInterval(() => {
      if (Date.now() >= timerEndAt) {
        clearInterval(iv);
        if (!finishedRef.current) finishSession();
      } else {
        setTick(t => t + 1);
      }
    }, 1000);
    return () => clearInterval(iv);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, timerEndAt]);

  if (!questions.length) {
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
      setTimerEndAt(Date.now() + minutes * 60 * 1000);
    } else {
      setTimerTotalSeconds(null);
      setTimerEndAt(null);
    }
    setPhase('active');
  }

  function finishSession() {
    finishedRef.current = true;
    recordSessionScore(subject, chapterId, scoreRef.current, questions.length);
    clearSession(subject, chapterId);
    setPhase('finished');
  }

  function handleSelect(i) {
    if (answered) return;
    const correct = i === current.correctIndex;
    setAnswers(prev => {
      const next = [...prev];
      next[index] = { type: 'answered', selected: i, correct };
      return next;
    });
    recordAnswer(subject, current.chapterId || chapterId, current, correct);
  }

  function goToNext() {
    if (index + 1 >= questions.length) {
      finishSession();
    } else {
      setIndex(i => i + 1);
    }
  }

  function goToPrev() {
    setIndex(i => Math.max(0, i - 1));
  }

  function handleSkip() {
    if (answered) return;
    if (currentAnswer?.type !== 'skipped') {
      setAnswers(prev => {
        const next = [...prev];
        next[index] = { type: 'skipped' };
        return next;
      });
      recordSkip(subject, current.chapterId || chapterId, current);
    }
    goToNext();
  }

  function handleRetry() {
    finishedRef.current = false;
    clearSession(subject, chapterId);
    setIndex(0);
    setAnswers(Array(questions.length).fill(null));
    setPhase('setup');
    setTimerTotalSeconds(null);
    setTimerEndAt(null);
  }

  if (phase === 'setup') {
    const customValid = customMinutes !== '' && Number(customMinutes) > 0;
    return (
      <main className="practice qs" data-subject={subject}>
        <div className="practice-shell">
          <Link to={backTo} className="qs-back">← {backLabel}</Link>

          <div className="qs-card">
            <div className="qs-medal" aria-hidden="true">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="13" r="8" />
                <path d="M12 9v4l2.5 2M9.5 2.5h5" />
              </svg>
            </div>

            <div className="qs-eyebrow">{title} · {questions.length} questions</div>
            <p className="qs-lead">
              Set a timer for this session if you want one — it's off by default, so nothing auto-submits unless you choose a time here.
            </p>

            <div className="qs-label">PICK A TIME</div>
            <div className="qs-presets">
              {TIMER_PRESETS.map((m) => (
                <button key={m} type="button" className="qs-tile" onClick={() => startWithTimer(m)}>
                  <b>{m}</b>
                  <span>min</span>
                </button>
              ))}
            </div>

            <div className="qs-label">OR SET YOUR OWN</div>
            <div className="qs-custom">
              <input
                className="qs-input"
                type="number"
                inputMode="numeric"
                min="1"
                placeholder="Custom minutes"
                aria-label="Custom minutes"
                value={customMinutes}
                onChange={(e) => setCustomMinutes(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && customValid) startWithTimer(Number(customMinutes)); }}
              />
              <button
                type="button"
                className="qs-btn"
                disabled={!customValid}
                onClick={() => startWithTimer(Number(customMinutes))}
              >
                Start with custom timer
              </button>
            </div>

            <div className="qs-final">
              <button type="button" className="qs-btn qs-go" onClick={() => startWithTimer(null)}>
                Start with no time limit
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (phase === 'finished') {
    const markedInSession = questions.filter(q => bookmarks[q.id]);
    return (
      <main className="practice">
        <div className="practice-shell">
          <div className="summary-card">
            <div className="q-type-tag">{title} · complete</div>
            <div className="summary-score">{score}/{questions.length}</div>
            <p>
              {Math.round((score / questions.length) * 100)}% correct this session
              {skippedCount > 0 ? ` · ${skippedCount} skipped` : ''}
              {timerTotalSeconds !== null && remainingSeconds === 0 ? ' · time ran out' : ''}
            </p>
            <div className="summary-actions">
              <Link to={backTo} className="pill-btn primary">{backLabel}</Link>
              <button className="pill-btn" onClick={handleRetry}>Retry this set</button>
              {markedInSession.length > 0 && (
                <Link to={`/${subject}/bookmarks`} className="pill-btn">
                  ★ Review marked ({markedInSession.length})
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }

  const isLast = index + 1 >= questions.length;

  return (
    <main className="practice">
      <div className="practice-shell">
        <div className="practice-top">
          <Link to={backTo} className="back-link">← {backLabel}</Link>
          {timerTotalSeconds !== null && (
            <span style={{ color: remainingSeconds <= 30 ? '#c96a5a' : undefined }}>⏱ {formatTime(remainingSeconds)}</span>
          )}
          <span>{index + 1} / {questions.length}</span>
        </div>
        <div className="practice-track"><div className="practice-track-fill" style={{ width: `${pct}%` }} /></div>

        <div className="q-nav-row">
          <button
            type="button"
            className="q-nav-arrow"
            aria-label="Previous question"
            disabled={index === 0}
            onClick={goToPrev}
          >
            ‹
          </button>

          <div className="q-card">
            <span className="q-type-tag">{TYPE_LABEL[current.type] || current.type} · {current.difficulty}</span>
            <div className="q-text">{current.question}</div>
            <div className="q-options">
              {current.options.map((opt, i) => {
                let cls = 'q-option';
                if (answered) {
                  if (i === current.correctIndex) cls += ' correct';
                  else if (i === selectedIndex) cls += ' incorrect';
                }
                return (
                  <button key={i} className={cls} disabled={answered} onClick={() => handleSelect(i)}>
                    {opt}
                  </button>
                );
              })}
            </div>
            {answered && (
              <div className="explanation-box">{current.explanation}</div>
            )}
          </div>

          <button
            type="button"
            className={`q-nav-arrow${isLast ? ' finish' : ''}`}
            aria-label={isLast ? 'Finish' : 'Next question'}
            disabled={!answered}
            onClick={goToNext}
          >
            {isLast ? '✓' : '›'}
          </button>
        </div>

        <div className="practice-controls">
          <button
            className={`bookmark-btn${isBookmarked ? ' active' : ''}`}
            onClick={() => toggleBookmark(subject, current, current.chapterId || chapterId)}
          >
            {isBookmarked ? '★ Bookmarked' : '☆ Bookmark'}
          </button>
          {!answered && (
            <button className="bookmark-btn" onClick={handleSkip}>Skip</button>
          )}
        </div>
      </div>
    </main>
  );
}