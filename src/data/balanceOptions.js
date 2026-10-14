// Rebalances where the correct answer sits (A/B/C/D) for each chapter, at load time.
//
// Why: several banks had the right answer almost never in position D, so students could
// learn to rule it out. This reorders options deterministically (seeded by chapter id), so
// a question always shows the same order across reloads, bookmarks and resumed sessions.
//
// Only plain 4-option MCQs are touched. Anything whose options or text point at other
// options ("Both A and B", "All of the above", "(i) and (iii)", "option (c)") keeps its
// original order, because reordering would change what it means. Eligible questions are
// assigned positions that fill whatever the untouched questions leave under-represented,
// so the chapter as a whole ends up close to 25% per position.

const OPTION_REF =
  /\bboth\b|\bneither\b|\babove\b|\b(all|none)\s+of\s+(the|these|them)\b|\ball\s+(three|four|the)\b|\b[a-d]\s*(and|&|,|or)\s*[a-d]\b|\(\s*[ivx]+\s*\)|\b[ivx]+\)|\(\s*[a-d]\s*\)|\b(only|and)\s+\(?[ivx1-4]\b|\b\d\s*(and|&|,)\s*\d\b/i;
const TEXT_REF = /\boptions?\b|\bchoices?\b|\(\s*[a-d]\s*\)\s*(is|are|and|,|\.)/i;

export function isReorderable(q) {
  return (
    q.type === 'mcq' &&
    Array.isArray(q.options) &&
    q.options.length === 4 &&
    Number.isInteger(q.correctIndex) &&
    !q.options.some((o) => OPTION_REF.test(String(o))) &&
    !TEXT_REF.test(q.question || '') &&
    !TEXT_REF.test(q.explanation || '')
  );
}

function hashString(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleInPlace(arr, rand) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function balanceOptions(questions, chapterId) {
  if (!Array.isArray(questions) || !questions.length) return questions;
  const rand = mulberry32(hashString(String(chapterId)));

  // Where the correct answer already sits among questions we won't touch.
  const counts = [0, 0, 0, 0];
  const movable = [];
  questions.forEach((q, i) => {
    if (isReorderable(q)) movable.push(i);
    else if (Number.isInteger(q.correctIndex) && q.correctIndex >= 0 && q.correctIndex < 4) counts[q.correctIndex]++;
  });
  if (!movable.length) return questions;

  // Hand out target positions, always topping up the least-used position first.
  const targets = [];
  for (let n = 0; n < movable.length; n++) {
    const min = Math.min(...counts);
    const ties = [0, 1, 2, 3].filter((p) => counts[p] === min);
    const pick = ties[Math.floor(rand() * ties.length)];
    counts[pick]++;
    targets.push(pick);
  }
  shuffleInPlace(targets, rand); // so positions don't follow a visible pattern down the chapter

  const out = questions.slice();
  movable.forEach((qi, k) => {
    const q = questions[qi];
    const target = targets[k];
    const correct = q.options[q.correctIndex];
    const others = shuffleInPlace(q.options.filter((_, i) => i !== q.correctIndex), rand);
    const options = [];
    for (let p = 0, o = 0; p < 4; p++) options.push(p === target ? correct : others[o++]);
    out[qi] = { ...q, options, correctIndex: target };
  });
  return out;
}
