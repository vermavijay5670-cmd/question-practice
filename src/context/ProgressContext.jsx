import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'neetprep.progress.v1';
const ProgressContext = createContext(null);

function loadState() {
  const defaults = { attempts: {}, mistakes: {}, bookmarks: {}, sessions: {} };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...defaults, ...JSON.parse(raw) };
  } catch (e) { /* ignore corrupt storage */ }
  return defaults;
}

// attempts[subject][chapterId] = { seen, correct, lastScore: {correct,total,at} }
// mistakes[subject] = { [questionId]: questionSnapshot }
// bookmarks[subject] = { [questionId]: true }
// sessions[subject][chapterId] = { questionIds, index, answers, phase, timerTotalSeconds, timerEndAt }
//   — an in-progress quiz attempt, saved so it resumes where the user left off.

export function ProgressProvider({ children }) {
  const [state, setState] = useState(loadState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const recordAnswer = useCallback((subject, chapterId, question, isCorrect) => {
    setState(prev => {
      const next = structuredClone(prev);
      next.attempts[subject] ??= {};
      next.attempts[subject][chapterId] ??= { seen: 0, correct: 0 };
      next.attempts[subject][chapterId].seen += 1;
      if (isCorrect) next.attempts[subject][chapterId].correct += 1;

      next.mistakes[subject] ??= {};
      if (!isCorrect) {
        next.mistakes[subject][question.id] = { ...question, chapterId };
      } else {
        delete next.mistakes[subject][question.id];
      }
      return next;
    });
  }, []);

  // Skipping files the question in the mistake bank but doesn't count as an attempt,
  // so answering it later from the same session isn't double-counted.
  const recordSkip = useCallback((subject, chapterId, question) => {
    setState(prev => {
      if (prev.mistakes?.[subject]?.[question.id]) return prev;
      const next = structuredClone(prev);
      next.mistakes[subject] ??= {};
      next.mistakes[subject][question.id] = { ...question, chapterId };
      return next;
    });
  }, []);

  const recordSessionScore = useCallback((subject, chapterId, correct, total) => {
    setState(prev => {
      const next = structuredClone(prev);
      next.attempts[subject] ??= {};
      next.attempts[subject][chapterId] ??= { seen: 0, correct: 0 };
      next.attempts[subject][chapterId].lastScore = { correct, total, at: Date.now() };
      return next;
    });
  }, []);

  const toggleBookmark = useCallback((subject, question, chapterId) => {
    setState(prev => {
      const next = structuredClone(prev);
      next.bookmarks[subject] ??= {};
      if (next.bookmarks[subject][question.id]) {
        delete next.bookmarks[subject][question.id];
      } else {
        next.bookmarks[subject][question.id] = { ...question, chapterId };
      }
      return next;
    });
  }, []);

  const clearMistake = useCallback((subject, questionId) => {
    setState(prev => {
      const next = structuredClone(prev);
      if (next.mistakes[subject]) delete next.mistakes[subject][questionId];
      return next;
    });
  }, []);

  const resetSubject = useCallback((subject) => {
    setState(prev => {
      const next = structuredClone(prev);
      next.attempts[subject] = {};
      next.mistakes[subject] = {};
      next.bookmarks[subject] = {};
      if (next.sessions) next.sessions[subject] = {};
      return next;
    });
  }, []);

  // In-progress quiz attempts, keyed by subject + chapterId, so a quiz resumes
  // at the question the user was on instead of restarting from question 1.
  const getSession = useCallback((subject, chapterId) => {
    return state.sessions?.[subject]?.[chapterId] || null;
  }, [state.sessions]);

  const saveSession = useCallback((subject, chapterId, session) => {
    setState(prev => {
      const next = structuredClone(prev);
      next.sessions ??= {};
      next.sessions[subject] ??= {};
      next.sessions[subject][chapterId] = session;
      return next;
    });
  }, []);

  const clearSession = useCallback((subject, chapterId) => {
    setState(prev => {
      if (!prev.sessions?.[subject]?.[chapterId]) return prev;
      const next = structuredClone(prev);
      delete next.sessions[subject][chapterId];
      return next;
    });
  }, []);

  const value = {
    state,
    recordAnswer,
    recordSkip,
    recordSessionScore,
    toggleBookmark,
    clearMistake,
    resetSubject,
    getSession,
    saveSession,
    clearSession,
  };
  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
