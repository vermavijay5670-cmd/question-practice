import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'neetprep.progress.v1';
const ProgressContext = createContext(null);

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore corrupt storage */ }
  return { attempts: {}, mistakes: {}, bookmarks: {} };
}

// attempts[subject][chapterId] = { seen, correct, lastScore: {correct,total,at} }
// mistakes[subject] = { [questionId]: questionSnapshot }
// bookmarks[subject] = { [questionId]: true }

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
      return next;
    });
  }, []);

  const value = { state, recordAnswer, recordSessionScore, toggleBookmark, clearMistake, resetSubject };
  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
