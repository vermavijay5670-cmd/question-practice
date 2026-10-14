import { useEffect, useState } from 'react';
import { getChapterQuestions as getBio } from '../data/biology/questions';
import { getChapterQuestions as getPhysics } from '../data/physics/questions';
import { getChapterQuestions as getChem } from '../data/chemistry/questions';

const GETTERS = { biology: getBio, physics: getPhysics, chemistry: getChem };

// Loads one chapter's question bank on demand. `questions` stays null while loading.
export function useChapterQuestions(subject, chapterId, attempt = 0) {
  const key = `${subject}/${chapterId}/${attempt}`;
  const [result, setResult] = useState({ key: null, questions: null, error: false });

  useEffect(() => {
    let alive = true;
    GETTERS[subject](chapterId)
      .then((questions) => alive && setResult({ key, questions, error: false }))
      .catch(() => alive && setResult({ key, questions: null, error: true }));
    return () => { alive = false; };
  }, [subject, chapterId, key]);

  const ready = result.key === key;
  return { questions: ready ? result.questions : null, error: ready && result.error };
}
