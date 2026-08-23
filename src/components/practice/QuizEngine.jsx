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

  // 'setup' lets you optionally set a timer before starting — there is no default
  // time limit unless you choose one here.
  const [phase, setPhase] = useState('setup');
  const [customMinutes, setCustomMinutes] = useState('');
  const [timerTotalSeconds, setTimerTotalSeconds] = useState(null);
  const [remainingSeconds, setRemainingSeconds] = useState(null);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [skippedCount, setSkippedCount] = useState(0);
  const finishedRef = useRef(false);

  const current = questions[index];
  const bookmarks = state.bookmarks[subject] || {};
  const isBookmarked = current && !!bookmarks[current.id];

  const pct = useMemo(() => Math.round((index / questions.length) * 100), [index, questions.length]);

  // Countdown — only runs when a timer was actually set, and auto-finishes at zero.
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
      setRemainingSeconds(minutes * 60);
    } else {
      setTimerTotalSeconds(null);
      setRemainingSeconds(null);
    }
    setPhase('active');
  }

  function finishSession() {
    finishedRef.current = true;
    recordSessionScore(subject, chapterId, score, questions.length);
    setPhase('finished');
  }

  function handleSelect(i) {
    if (selected !== null) return;
    setSelected(i);
    const correct = i === current.correctIndex;
    if (correct) setScore(s => s + 1);
    recordAnswer(subject, current.chapterId || chapterId, current, correct);
  }

  function goToNextOrFinish() {
    if (index + 1 >= questions.length) {
      finishSession();
    } else {
      setIndex(i => i + 1);
      setSelected(null);
    }
  }

  function handleSkip() {
    if (selected !== null) return;
    setSkippedCount(c => c + 1);
    recordAnswer(subject, current.chapterId || chapterId, current, false);
    goToNextOrFinish();
  }

  function handleRetry() {
    finishedRef.current = false;
    setIndex(0);
    setSelected(null);
    setScore(0);
    setSkippedCount(0);
    setPhase('setup');
    setTimerTotalSeconds(null);
    setRemainingSeconds(null);
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
            </div>
          </div>
        </div>
      </main>
    );
  }

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

        <div className="q-card">
          <span className="q-type-tag">{TYPE_LABEL[current.type] || current.type} · {current.difficulty}</span>
          <div className="q-text">{current.question}</div>
          <div className="q-options">
            {current.options.map((opt, i) => {
              let cls = 'q-option';
              if (selected !== null) {
                if (i === current.correctIndex) cls += ' correct';
                else if (i === selected) cls += ' incorrect';
              }
              return (
                <button key={i} className={cls} disabled={selected !== null} onClick={() => handleSelect(i)}>
                  {opt}
                </button>
              );
            })}
          </div>
          {selected !== null && (
            <div className="explanation-box">{current.explanation}</div>
          )}
        </div>

        <div className="practice-controls">
          <button
            className={`bookmark-btn${isBookmarked ? ' active' : ''}`}
            onClick={() => toggleBookmark(subject, current, current.chapterId || chapterId)}
          >
            {isBookmarked ? '★ Bookmarked' : '☆ Bookmark'}
          </button>
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            {selected === null && (
              <button className="bookmark-btn" onClick={handleSkip}>Skip</button>
            )}
            <button className="next-btn" disabled={selected === null} onClick={goToNextOrFinish}>
              {index + 1 >= questions.length ? 'Finish' : 'Next question'}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
