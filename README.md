# NEET Prep — Biology · Chemistry · Physics

A single app with one interactive, subject-themed home screen, and per-subject practice
engines. Biology is fully wired up first; Chemistry and Physics have placeholder pages
ready to build out the same way.

## Run it

```
npm install
npm run dev
```

Then open the printed localhost URL. `npm run build` produces a static `dist/` folder
you can host anywhere (Vercel, Netlify, GitHub Pages, etc).

## How it's organized

```
src/
  data/
    subjects.js               — home screen cards + theme colors per subject
    biology/
      chapters.js             — Class 11 & 12 chapter list (NCERT/NEET syllabus)
      questions.js             — question bank, keyed by chapter id
  context/ProgressContext.jsx   — all scoring / mistake-bank / bookmark state (localStorage)
  components/practice/QuizEngine.jsx — the actual question-answer-explanation flow,
                                        reused by chapter practice, mock test, and mistake review
  pages/
    Home.jsx              — subject picker (animated per-subject signature)
    BiologyHome.jsx        — chapter grid + progress strip + mock test / mistake bank entry points
    ChapterPractice.jsx    — practice for a single chapter
    MockTest.jsx           — mixed random test across all chapters that have questions
    MistakeBank.jsx        — review/retry every question you've gotten wrong
    ComingSoon.jsx          — Chemistry/Physics placeholder
```

## Adding questions for a chapter

Open `src/data/biology/questions.js` and add an entry to `QUESTION_BANK` keyed by the
chapter's `id` (ids live in `src/data/biology/chapters.js`). Each question looks like:

```js
{
  id: 'unique-id',
  type: 'mcq' | 'assertion-reason' | 'statement',
  question: 'The question text',
  options: ['A', 'B', 'C', 'D'],
  correctIndex: 0,       // index into options
  explanation: 'Why that answer is correct',
  difficulty: 'easy' | 'medium' | 'hard',
}
```

A chapter with an empty array shows an empty state on the chapter grid ("send the PDF,
or ask Claude to generate a set") instead of a broken link — nothing crashes if content
isn't there yet.

**Workflow going forward:** send a chapter PDF and I'll extract + verify questions with
explanations into this file. For chapters without a PDF, tell me and I'll generate a
NEET-pattern set instead.

## What's live right now

Sample sets (6 questions each) are seeded in six chapters so the whole app — practice,
mock test, mistake bank, progress — is fully working today:
Cell: The Unit of Life, Biomolecules, Photosynthesis in Higher Plants (Class 11);
Human Reproduction, Principles of Inheritance and Variation, Ecosystem (Class 12).
Every other chapter exists in the grid but is empty until real content is added.

Every practice session (chapter, mock test, or mistake review) opens with a quick setup
screen: pick a preset timer (5/10/15/20/30 min), enter a custom number of minutes, or
start with no time limit at all — there's no default time limit anywhere; nothing
auto-submits unless you set one. While answering, a Skip button is available on any
unanswered question — skipping moves on without locking in a wrong answer choice, but
still logs the question to the mistake bank so it resurfaces for review later.

## Extending to Chemistry / Physics

Mirror the Biology folder: `src/data/chemistry/chapters.js` + `questions.js`, a
`ChemistryHome.jsx` page with its own layout/theme (already has color tokens reserved
in `index.css` — `--chem-*`), and reuse `QuizEngine` as-is (it's subject-agnostic).
Same pattern for Physics with `--phy-*`.
