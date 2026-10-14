import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { ALL_CHAPTERS as BIO } from '../data/biology/chapters';
import { ALL_CHAPTERS as PHY } from '../data/physics/chapters';
import { ALL_CHAPTERS as CHEM } from '../data/chemistry/chapters';
import { QUESTION_COUNTS as BIO_COUNTS } from '../data/biology/counts';
import { QUESTION_COUNTS as PHY_COUNTS } from '../data/physics/counts';
import { QUESTION_COUNTS as CHEM_COUNTS } from '../data/chemistry/counts';
import '../styles/Landing.css';

const TRACKER_URL = 'https://study-tracker-green-nine.vercel.app/Today';
const THEME_KEY = 'neetprep.landing.theme';

/* ---------- subject metadata (real counts, real chapter lists) ---------- */

const SMALL = new Set(['of', 'and', 'in', 'the', 'to', 'a', 'on', 'for']);
function tidy(name) {
  return name
    .trim()
    .split(/\s+/)
    .map((w, i) => (i > 0 && SMALL.has(w.toLowerCase()) ? w.toLowerCase() : w[0].toUpperCase() + w.slice(1)))
    .join(' ');
}

const SUBJECT_DEFS = [
  { id: 'physics', label: 'Physics', accent: 'purple', icon: 'bolt', chapters: PHY, counts: PHY_COUNTS, cta: 'Practice Physics' },
  { id: 'chemistry', label: 'Chemistry', accent: 'cyan', icon: 'flask', chapters: CHEM, counts: CHEM_COUNTS, cta: 'Practice Chemistry' },
  { id: 'biology', label: 'Biology', accent: 'green', icon: 'leaf', chapters: BIO, counts: BIO_COUNTS, cta: 'Practice Biology' },
].map((s) => ({
  ...s,
  total: Object.values(s.counts).reduce((a, b) => a + b, 0),
  chapterCount: s.chapters.filter((c) => (s.counts[c.id] || 0) > 0).length,
}));

const TOTAL_QUESTIONS = SUBJECT_DEFS.reduce((n, s) => n + s.total, 0);
const TOTAL_CHAPTERS = SUBJECT_DEFS.reduce((n, s) => n + s.chapterCount, 0);
const fmt = (n) => n.toLocaleString('en-IN');
const roundDown100 = (n) => Math.floor(n / 100) * 100;

/* ---------- small pieces ---------- */

function Icon({ name, size = 22 }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  switch (name) {
    case 'logo': return <svg {...p}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>;
    case 'sun': return <svg {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;
    case 'moon': return <svg {...p}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>;
    case 'clock': return <svg {...p}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
    case 'target': return <svg {...p}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" fill="currentColor" /></svg>;
    case 'redo': return <svg {...p}><path d="M3 12a9 9 0 0 1 15.5-6.3L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15.5 6.3L3 16" /><path d="M3 21v-5h5" /></svg>;
    case 'star': return <svg {...p}><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" /></svg>;
    case 'resume': return <svg {...p}><path d="M5 3l14 9-14 9V3z" /></svg>;
    case 'check': return <svg {...p}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>;
    case 'skip': return <svg {...p}><path d="M5 4l10 8-10 8V4zM19 5v14" /></svg>;
    case 'bolt': return <svg {...p}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" /></svg>;
    case 'flask': return <svg {...p}><path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3" /><path d="M7.5 15h9" /></svg>;
    case 'leaf': return <svg {...p}><path d="M5 19c0-8 5-14 15-15 0 10-6 15-14 15z" /><path d="M5 19c3-5 6-8 10-10" /></svg>;
    case 'chevron': return <svg {...p}><path d="M6 9l6 6 6-6" /></svg>;
    default: return null;
  }
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch { /* storage unavailable */ }
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  // Follow the OS setting until the person picks a theme themselves.
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: light)');
    if (!mq) return undefined;
    const onChange = (e) => {
      let saved = null;
      try { saved = localStorage.getItem(THEME_KEY); } catch { /* ignore */ }
      if (!saved) setTheme(e.matches ? 'light' : 'dark');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem(THEME_KEY, next); } catch { /* ignore */ }
  };
  return [theme, toggle];
}

function scrollToId(id) {
  // HashRouter owns the URL hash, so in-page links scroll programmatically instead of using #anchors.
  document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
}

/* ---------- hero demo: a real, clickable sample question ---------- */

const SAMPLE = {
  chapter: 'Atoms',
  subject: 'Physics',
  question: "In Rutherford's alpha-particle scattering experiment, the observation that most alpha particles passed through the gold foil with little or no deflection suggested that",
  options: [
    'the atom is a solid, densely packed sphere with no empty space',
    'most of the volume of an atom is empty space',
    'gold atoms have no positive charge at all',
    'alpha particles cannot interact with matter',
  ],
  correct: 1,
  explanation: 'Only a few alpha particles bounced back, so the positive charge sits in a tiny nucleus. Since nearly all of them went straight through, most of the atom must be empty space.',
};

function SessionTimer() {
  const [left, setLeft] = useState(9 * 60 + 42);
  useEffect(() => {
    const id = setInterval(() => setLeft((s) => (s <= 1 ? 10 * 60 : s - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(left / 60)).padStart(2, '0');
  const ss = String(left % 60).padStart(2, '0');
  return (
    <div className="lp-db-timer" role="timer" aria-label="Sample session timer">
      <div className="lp-db-timer-block"><span>{mm}</span><small>MIN</small></div>
      <span className="lp-db-colon">:</span>
      <div className="lp-db-timer-block"><span>{ss}</span><small>SEC</small></div>
    </div>
  );
}

function HeroDemo() {
  const [picked, setPicked] = useState(null);
  const answered = picked !== null;
  return (
    <div className="lp-hero-dashboard">
      <div className="lp-dashboard-glow" aria-hidden="true" />
      <div className="lp-dashboard-frame">
        <div className="lp-db-bar">
          <div>
            <div className="lp-db-bar-label">Sample session</div>
            <div className="lp-db-bar-title">{SAMPLE.subject} · {SAMPLE.chapter}</div>
            <div className="lp-db-bar-sub">Chapter practice with a 10 minute timer</div>
          </div>
          <div className="lp-db-count"><span>12</span><small>of 150</small></div>
          <SessionTimer />
        </div>

        <div className="lp-db-stats">
          {[
            { icon: 'check', tone: 'green', label: 'Answered', value: '11', sub: 'this session' },
            { icon: 'target', tone: 'cyan', label: 'Accuracy', value: '73%', sub: '8 of 11 correct' },
            { icon: 'skip', tone: 'yellow', label: 'Skipped', value: '1', sub: 'sent to mistake bank' },
            { icon: 'star', tone: 'pink', label: 'Marked', value: '2', sub: 'to review later' },
          ].map((s) => (
            <div className="lp-db-stat" key={s.label}>
              <div className={`lp-db-stat-icon lp-tone-${s.tone}`}><Icon name={s.icon} size={16} /></div>
              <div className="lp-db-stat-label">{s.label}</div>
              <div className="lp-db-stat-value">{s.value}</div>
              <div className="lp-db-stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="lp-db-main">
          <div className="lp-db-question">
            <div className="lp-db-card-head">
              <span className="lp-db-card-title">Try it — pick an answer</span>
              <span className="lp-pill lp-tone-purple">MCQ · easy</span>
            </div>
            <p className="lp-db-q-text">{SAMPLE.question}</p>
            <div className="lp-db-options">
              {SAMPLE.options.map((opt, i) => {
                let cls = 'lp-db-option';
                if (answered && i === SAMPLE.correct) cls += ' is-correct';
                else if (answered && i === picked) cls += ' is-wrong';
                return (
                  <button key={opt} type="button" className={cls} disabled={answered} onClick={() => setPicked(i)}>
                    <span className="lp-db-letter">{'ABCD'[i]}</span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
            {answered ? (
              <div className="lp-db-explain" role="status">
                <strong>{picked === SAMPLE.correct ? 'Correct.' : 'Not quite.'}</strong> {SAMPLE.explanation}
                <button type="button" className="lp-link-btn" onClick={() => setPicked(null)}>Try again</button>
              </div>
            ) : (
              <div className="lp-db-hint">The explanation appears as soon as you answer.</div>
            )}
          </div>

          <div className="lp-db-ring-card">
            <div className="lp-db-card-head">
              <span className="lp-db-card-title">Last session</span>
              <span className="lp-ready"><i /> Saved</span>
            </div>
            <div className="lp-db-ring">
              <svg viewBox="0 0 120 120" aria-hidden="true">
                <circle className="lp-ring-track" cx="60" cy="60" r="52" fill="none" strokeWidth="6" />
                <circle className="lp-ring-fill" cx="60" cy="60" r="52" fill="none" strokeWidth="6" strokeDasharray="327" strokeDashoffset="98" strokeLinecap="round" transform="rotate(-90 60 60)" />
              </svg>
              <div className="lp-db-ring-text"><strong>7/10</strong><small>correct</small></div>
            </div>
            <div className="lp-db-ring-note">3 wrong answers moved to your mistake bank</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- feature demos ---------- */

const TIMER_CHIPS = ['5 min', '10 min', '15 min', '20 min', '30 min', 'Custom', 'No limit'];

function ChapterPracticeDemo() {
  const [active, setActive] = useState('10 min');
  return (
    <div className="lp-demo">
      <div className="lp-demo-label">Set a timer, or don’t</div>
      <div className="lp-chip-row" role="group" aria-label="Timer options">
        {TIMER_CHIPS.map((c) => (
          <button key={c} type="button" className={`lp-chip${active === c ? ' is-active' : ''}`} aria-pressed={active === c} onClick={() => setActive(c)}>{c}</button>
        ))}
      </div>
      <div className="lp-demo-label lp-gap-top">Question types in every chapter</div>
      <div className="lp-chip-row">
        {['MCQ', 'Assertion–Reason', 'Statement based', 'Matching', 'How many'].map((t) => <span key={t} className="lp-chip lp-chip-static">{t}</span>)}
      </div>
    </div>
  );
}

function MockDemo() {
  const [n, setN] = useState(20);
  return (
    <div className="lp-demo">
      <div className="lp-demo-label">Pick a length</div>
      <div className="lp-chip-row" role="group" aria-label="Mock test length">
        {[10, 20, 'All'].map((v) => (
          <button key={v} type="button" className={`lp-chip${n === v ? ' is-active' : ''}`} aria-pressed={n === v} onClick={() => setN(v)}>{v === 'All' ? 'All available' : `${v} questions`}</button>
        ))}
      </div>
      <div className="lp-demo-mix">
        {SUBJECT_DEFS.map((s) => (
          <div key={s.id} className="lp-mix-row">
            <span>{s.label}</span>
            <div className="lp-bar"><i className={`lp-fill lp-tone-${s.accent}`} style={{ width: `${Math.round((s.total / TOTAL_QUESTIONS) * 100)}%` }} /></div>
            <small>{fmt(s.total)}</small>
          </div>
        ))}
      </div>
      <div className="lp-demo-foot">Questions drawn at random from one subject’s chapters</div>
    </div>
  );
}

function MistakeDemo() {
  return (
    <div className="lp-demo">
      <div className="lp-mistake-count"><strong>3</strong><span>questions waiting for a rematch</span></div>
      <div className="lp-mini-list">
        {['Hardy–Weinberg principle', 'Sliding filament theory', 'Rutherford scattering'].map((t, i) => (
          <div key={t} className="lp-mini-row"><span className={`lp-dot lp-tone-${['green', 'green', 'purple'][i]}`} />{t}</div>
        ))}
      </div>
      <div className="lp-demo-foot">Answer it correctly and it leaves the list</div>
    </div>
  );
}

function BookmarkDemo() {
  const [marked, setMarked] = useState(true);
  return (
    <div className="lp-demo">
      <div className="lp-mini-q">
        <span>Which organelle is the site of oxidative phosphorylation?</span>
        <button type="button" className={`lp-star${marked ? ' is-on' : ''}`} aria-pressed={marked} aria-label={marked ? 'Remove bookmark' : 'Bookmark this question'} onClick={() => setMarked((m) => !m)}>
          <Icon name="star" size={16} />
        </button>
      </div>
      <div className="lp-demo-foot">{marked ? 'Marked — find it under Bookmarks for each subject' : 'Tap the star to mark it for later'}</div>
    </div>
  );
}

function ResumeDemo() {
  return (
    <div className="lp-demo lp-resume">
      <div className="lp-resume-row">
        <div>
          <div className="lp-demo-label">Interrupted session</div>
          <div className="lp-resume-title">Chemistry · Electrochemistry</div>
        </div>
        <div className="lp-resume-pos"><strong>34</strong><small>of 150</small></div>
      </div>
      <div className="lp-bar lp-bar-lg"><i className="lp-fill lp-tone-cyan" style={{ width: '23%' }} /></div>
      <div className="lp-demo-foot">Reload the page and you land back on question 34, answers intact</div>
    </div>
  );
}

const FEATURES = [
  { id: 'practice', tone: 'yellow', icon: 'clock', size: 'large', title: 'Chapter practice with an optional timer', desc: 'Work through one chapter at a time. Every answer shows its explanation right away, and you can skip, go back, or set a countdown for the session.', Demo: ChapterPracticeDemo, to: '/biology', link: 'Start a chapter' },
  { id: 'mock', tone: 'purple', icon: 'target', title: 'Mock tests', desc: 'A random mix across every chapter of a subject, in the length you choose.', Demo: MockDemo, to: '/physics/mock', link: 'Try a Physics mock' },
  { id: 'mistakes', tone: 'pink', icon: 'redo', title: 'Mistake bank', desc: 'Wrong and skipped questions collect themselves. Replay them all in one session.', Demo: MistakeDemo, to: '/biology/mistakes', link: 'Open mistake bank' },
  { id: 'marks', tone: 'green', icon: 'star', title: 'Bookmarks', desc: 'Star any question while you practise, then review only the ones you marked.', Demo: BookmarkDemo, to: '/chemistry/bookmarks', link: 'Open bookmarks' },
  { id: 'resume', tone: 'cyan', icon: 'resume', size: 'wide', title: 'Pick up exactly where you stopped', desc: 'Progress is saved as you answer. Close the tab mid-chapter and the next visit resumes on the same question with your answers intact. A timed session keeps its original end time, so the clock doesn’t pause while you’re away.', Demo: ResumeDemo, to: '/physics', link: 'Choose a chapter' },
];

/* ---------- live progress (read from this browser) ---------- */

function useProgressSummary() {
  const { state } = useProgress();
  return useMemo(() => {
    let seen = 0;
    let correct = 0;
    const perSubject = {};
    for (const s of SUBJECT_DEFS) {
      const attempts = state.attempts?.[s.id] || {};
      const rows = Object.values(attempts);
      const sSeen = rows.reduce((n, a) => n + (a.seen || 0), 0);
      const sCorrect = rows.reduce((n, a) => n + (a.correct || 0), 0);
      seen += sSeen;
      correct += sCorrect;
      perSubject[s.id] = { seen: sSeen, attempts };
    }
    const mistakes = SUBJECT_DEFS.reduce((n, s) => n + Object.keys(state.mistakes?.[s.id] || {}).length, 0);
    const marked = SUBJECT_DEFS.reduce((n, s) => n + Object.keys(state.bookmarks?.[s.id] || {}).length, 0);
    return { seen, accuracy: seen ? Math.round((correct / seen) * 100) : null, mistakes, marked, perSubject };
  }, [state]);
}

function SubjectCard({ s, progress }) {
  const attempts = progress.perSubject[s.id].attempts;
  const pct = s.total ? Math.min(100, Math.round((progress.perSubject[s.id].seen / s.total) * 100)) : 0;
  const shown = s.chapters.slice(0, 5);
  return (
    <div className={`lp-subject-card lp-accent-${s.accent}`}>
      <div className="lp-subj-head">
        <div className={`lp-subj-icon lp-tone-${s.accent}`}><Icon name={s.icon} size={24} /></div>
        <div>
          <h3 className="lp-subj-name">{s.label}</h3>
          <div className="lp-subj-meta">{s.chapterCount} chapters · {fmt(s.total)} questions</div>
        </div>
        <div className={`lp-subj-pct lp-text-${s.accent}`} title="Questions you have answered">{pct}%</div>
      </div>
      <div className="lp-bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${s.label} progress`}>
        <i className={`lp-fill lp-tone-${s.accent}`} style={{ width: `${pct}%` }} />
      </div>
      <ul className="lp-chapter-list">
        {shown.map((c) => {
          const a = attempts[c.id];
          const state = a?.lastScore ? 'done' : a?.seen ? 'started' : 'new';
          return (
            <li key={c.id} className={`lp-chapter-row is-${state}`}>
              <span className={`lp-chapter-mark lp-chapter-mark-${state}`} aria-hidden="true">{state === 'done' ? '✓' : state === 'started' ? '▶' : ''}</span>
              <span>{tidy(c.name)}</span>
              <span className="lp-sr-only">{state === 'done' ? ' (completed)' : state === 'started' ? ' (in progress)' : ''}</span>
            </li>
          );
        })}
      </ul>
      <div className="lp-subj-more">+ {Math.max(0, s.chapters.length - shown.length)} more chapters</div>
      <Link to={`/${s.id}`} className={`lp-subj-cta lp-tone-${s.accent}`}>{s.cta} →</Link>
    </div>
  );
}

const FAQ = [
  { q: 'Is this free?', a: 'Yes. There is no sign-up and nothing to pay for. Open a subject and start answering.' },
  { q: 'Which subjects and chapters are covered?', a: `Physics, Chemistry and Biology for Class 11 and 12. Every one of the ${TOTAL_CHAPTERS} chapters in the app has a question set.` },
  { q: 'How many questions are there?', a: `${fmt(TOTAL_QUESTIONS)} at the moment, in several formats: plain MCQs, assertion–reason, statement based, matching and “how many are correct” questions. More are added regularly.` },
  { q: 'Where is my progress saved?', a: 'In this browser, on this device. Scores, mistakes, bookmarks and half-finished sessions stay until you clear the site’s data. There are no accounts, so a different browser or phone starts fresh.' },
  { q: 'Do I see the answer explanation?', a: 'Yes, after every answer. Skipped questions go to the mistake bank, so you meet them again.' },
  { q: 'Does it work on a phone?', a: 'Yes. The layout adapts down to small screens and runs in any current mobile browser. You do need a connection to load a chapter the first time.' },
];

/* ---------- page ---------- */

export default function Home() {
  const [theme, toggleTheme] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useProgressSummary();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => { setMenuOpen(false); scrollToId(id); };
  const NAV = [['features', 'Features'], ['progress', 'Progress'], ['subjects', 'Subjects'], ['faq', 'FAQ']];
  const themeLabel = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <div className="lp" data-theme={theme}>
      {/* ---------- navigation ---------- */}
      <nav className={`lp-nav${scrolled || menuOpen ? ' is-scrolled' : ''}`} aria-label="Main">
        <div className="lp-nav-inner">
          <button type="button" className="lp-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="NEET Prep, back to top">
            <span className="lp-logo-icon"><Icon name="logo" /></span>
            <span className="lp-logo-text">NEET Prep</span>
          </button>
          <div className="lp-nav-links">
            {NAV.map(([id, label]) => <button key={id} type="button" className="lp-nav-link" onClick={() => go(id)}>{label}</button>)}
          </div>
          <div className="lp-nav-actions">
            <button type="button" className="lp-theme-btn" onClick={toggleTheme} aria-label={themeLabel} title={themeLabel}>
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
            </button>
            <a href={TRACKER_URL} target="_blank" rel="noreferrer" className="lp-btn-ghost lp-hide-sm">Study Tracker</a>
            <button type="button" className="lp-btn-primary" onClick={() => go('subjects')}>Start practicing</button>
          </div>
          <button type="button" className="lp-hamburger" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
            <span /><span /><span />
          </button>
        </div>
        {menuOpen && (
          <div className="lp-mobile-menu">
            {NAV.map(([id, label]) => <button key={id} type="button" className="lp-mobile-link" onClick={() => go(id)}>{label}</button>)}
            <a href={TRACKER_URL} target="_blank" rel="noreferrer" className="lp-mobile-link">Study Tracker</a>
            <button type="button" className="lp-mobile-link" onClick={toggleTheme}>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</button>
            <button type="button" className="lp-btn-primary lp-mobile-cta" onClick={() => go('subjects')}>Start practicing →</button>
          </div>
        )}
      </nav>

      <main>
        {/* ---------- hero ---------- */}
        <section className="lp-hero" id="home">
          <div className="lp-hero-bg" aria-hidden="true">
            <div className="lp-orb lp-orb-1" /><div className="lp-orb lp-orb-2" /><div className="lp-orb lp-orb-3" />
            <div className="lp-grid-overlay" />
          </div>

          <div className="lp-hero-content">
            <div className="lp-hero-badge"><span className="lp-badge-dot" />Built for NEET UG aspirants</div>
            <h1 className="lp-hero-title">
              Practice every<br />
              <span className="lp-gradient-text">NEET chapter</span><br />
              until it sticks
            </h1>
            <p className="lp-hero-desc">
              Chapter-wise questions with instant explanations, a mistake bank that remembers what tripped you up,
              and mock tests for Physics, Chemistry and Biology — all in one place.
            </p>
            <div className="lp-hero-actions">
              <button type="button" className="lp-btn-hero-primary" onClick={() => go('subjects')}>
                <Icon name="resume" size={18} />Start practicing — it’s free
              </button>
              <Link to="/biology/mock" className="lp-btn-hero-ghost">Take a mock test →</Link>
            </div>
            <div className="lp-hero-proof">
              <div className="lp-proof-item"><span className="lp-proof-num">{fmt(roundDown100(TOTAL_QUESTIONS))}+</span><span className="lp-proof-label">Questions</span></div>
              <div className="lp-proof-divider" />
              <div className="lp-proof-item"><span className="lp-proof-num">{TOTAL_CHAPTERS}</span><span className="lp-proof-label">Chapters, Class 11 &amp; 12</span></div>
              <div className="lp-proof-divider" />
              <div className="lp-proof-item"><span className="lp-proof-num">0</span><span className="lp-proof-label">Sign-ups needed</span></div>
            </div>
          </div>

          <HeroDemo />
        </section>

        {/* ---------- features ---------- */}
        <section className="lp-section" id="features">
          <div className="lp-container">
            <div className="lp-section-header">
              <div className="lp-section-tag">Everything you need</div>
              <h2 className="lp-section-title">Built for the <span className="lp-gradient-text">serious aspirant</span></h2>
              <p className="lp-section-desc">Everything you need to find your weak spots and fix them, without logging in to anything.</p>
            </div>
            <div className="lp-features-grid">
              {FEATURES.map(({ id, tone, icon, size, title, desc, Demo, to, link }) => (
                <article key={id} className={`lp-feature-card lp-accent-${tone}${size ? ` lp-feature-${size}` : ''}`}>
                  <div className={`lp-feature-icon lp-tone-${tone}`}><Icon name={icon} size={26} /></div>
                  <h3 className="lp-feature-title">{title}</h3>
                  <p className="lp-feature-desc">{desc}</p>
                  <Demo />
                  <Link to={to} className={`lp-feature-link lp-text-${tone}`}>{link} →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- progress ---------- */}
        <section className="lp-section lp-section-alt" id="progress">
          <div className="lp-container lp-stats-inner">
            <div className="lp-stats-text">
              <div className="lp-section-tag">Your numbers</div>
              <h2 className="lp-section-title">Track progress that <span className="lp-gradient-text-warm">actually matters</span></h2>
              <p className="lp-section-desc">Accuracy and mistakes tell you more than hours spent. Everything here is calculated from your own answers, in this browser.</p>
              <ul className="lp-stats-list">
                <li><span className="lp-dot lp-tone-yellow" />Questions answered, per subject</li>
                <li><span className="lp-dot lp-tone-yellow" />Accuracy across all your sessions</li>
                <li><span className="lp-dot lp-tone-yellow" />Mistakes still waiting for review</li>
                <li><span className="lp-dot lp-tone-yellow" />Questions you marked</li>
              </ul>
              <button type="button" className="lp-btn-primary" onClick={() => go('subjects')}>Pick a subject →</button>
            </div>

            <div className="lp-stats-visual">
              <div className="lp-stat-cards">
                <div className="lp-stat-card"><div className="lp-stat-value">{fmt(progress.seen)}</div><div className="lp-stat-label">Answered</div></div>
                <div className="lp-stat-card"><div className="lp-stat-value">{progress.accuracy === null ? '—' : `${progress.accuracy}%`}</div><div className="lp-stat-label">Accuracy</div></div>
                <div className="lp-stat-card"><div className="lp-stat-value">{fmt(progress.mistakes)}</div><div className="lp-stat-label">Mistakes to review</div></div>
                <div className="lp-stat-card"><div className="lp-stat-value">{fmt(progress.marked)}</div><div className="lp-stat-label">Marked</div></div>
              </div>
              <div className="lp-progress-panel">
                <div className="lp-panel-title">Answered, by subject</div>
                {SUBJECT_DEFS.map((s) => {
                  const seen = progress.perSubject[s.id].seen;
                  const pct = s.total ? Math.min(100, Math.round((seen / s.total) * 100)) : 0;
                  return (
                    <div key={s.id} className="lp-panel-row">
                      <span>{s.label}</span>
                      <div className="lp-bar"><i className={`lp-fill lp-tone-${s.accent}`} style={{ width: `${pct}%` }} /></div>
                      <small>{fmt(seen)} / {fmt(s.total)}</small>
                    </div>
                  );
                })}
                {progress.seen === 0 && <div className="lp-panel-empty">Nothing yet. Answer a question and your numbers show up here.</div>}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- subjects ---------- */}
        <section className="lp-section" id="subjects">
          <div className="lp-container">
            <div className="lp-section-header">
              <div className="lp-section-tag">Full NCERT coverage</div>
              <h2 className="lp-section-title">Every chapter. <span className="lp-gradient-text">All three subjects.</span></h2>
              <p className="lp-section-desc">Class 11 and 12 chapters, each with its own question set. Pick one and start.</p>
            </div>
            <div className="lp-subjects-grid">
              {SUBJECT_DEFS.map((s) => <SubjectCard key={s.id} s={s} progress={progress} />)}
            </div>
          </div>
        </section>

        {/* ---------- call to action ---------- */}
        <section className="lp-section lp-cta-section">
          <div className="lp-container">
            <div className="lp-cta-inner">
              <div className="lp-cta-orb lp-cta-orb-1" aria-hidden="true" /><div className="lp-cta-orb lp-cta-orb-2" aria-hidden="true" />
              <div className="lp-section-tag">Start today</div>
              <h2 className="lp-cta-title">Ready to crack <span className="lp-gradient-text">NEET?</span></h2>
              <p className="lp-cta-desc">No account, no setup. Open a chapter, answer ten questions, and see where you stand.</p>
              <div className="lp-cta-buttons">
                <button type="button" className="lp-btn-hero-primary lp-large" onClick={() => go('subjects')}>Choose a subject →</button>
                <a href={TRACKER_URL} target="_blank" rel="noreferrer" className="lp-btn-hero-ghost lp-large">Open the Study Tracker →</a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className="lp-section" id="faq">
          <div className="lp-container">
            <div className="lp-section-header">
              <div className="lp-section-tag">FAQ</div>
              <h2 className="lp-section-title">Common <span className="lp-gradient-text">questions</span></h2>
            </div>
            <div className="lp-faq-list">
              {FAQ.map((f) => (
                <details key={f.q} className="lp-faq-item">
                  <summary className="lp-faq-q">{f.q}<span className="lp-faq-arrow"><Icon name="chevron" size={18} /></span></summary>
                  <div className="lp-faq-a">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ---------- footer ---------- */}
      <footer className="lp-footer">
        <div className="lp-container lp-footer-inner">
          <div className="lp-logo lp-logo-static">
            <span className="lp-logo-icon lp-small"><Icon name="logo" size={16} /></span>
            <span className="lp-logo-text">NEET Prep</span>
          </div>
          <div className="lp-footer-links">
            <Link to="/biology" className="lp-footer-link">Biology</Link>
            <Link to="/physics" className="lp-footer-link">Physics</Link>
            <Link to="/chemistry" className="lp-footer-link">Chemistry</Link>
            <a href={TRACKER_URL} target="_blank" rel="noreferrer" className="lp-footer-link">Study Tracker</a>
          </div>
          <div className="lp-footer-copy">Built for NEET UG aspirants. Free to use.</div>
        </div>
      </footer>
    </div>
  );
}
