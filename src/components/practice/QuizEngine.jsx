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

// Checks a saved session against the current question set — if the chapter's
// questions changed (or it's a freshly shuffled mock test), the old session
// no longer lines up and should be ignored rather than resumed into garbage.
function sessionMatches(session, questions) {
  if (!session || !Array.isArray(session.answers)) return false;
  if (session.questionIds?.length !== questions.length) return false;
  for (let i = 0; i < questions.length; i++) {
    if (session.questionIds[i] !== questions[i].id) return false;
  }
  return true;
}

export default function QuizEngine({ subject, chapterId, title, questions, backTo, backLabel }) {
  const { recordAnswer, recordSessionScore, toggleBookmark, state, getSession, saveSession, clearSession } = useProgress();

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
  const [tick, setTick] = useState(0); // forces a re-render each second so the countdown display updates

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
  const answered = currentAnswer !== null;
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
    setAnswers(prev => {
      const next = [...prev];
      next[index] = { type: 'skipped' };
      return next;
    });
    recordAnswer(subject, current.chapterId || chapterId, current, false);
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
    return (
      <main className="practice">
        <div className="practice-shell">
          <Link to={backTo} className="back-link">← {backLabel}</Link>
          <div className="summary-card" style={{ marginTop: '1.5rem' }}>
            <div className="q-type-tag">{title} · {questions.length} questions</div>
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