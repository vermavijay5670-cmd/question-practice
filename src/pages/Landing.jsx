import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.css';

/* ── Theme toggle ──────────────────────────────────────────── */
function useTheme() {
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const stored = localStorage.getItem('lp-theme');
  const [dark, setDark] = useState(stored ? stored === 'dark' : systemDark);

  useEffect(() => {
    document.documentElement.setAttribute('data-lp-theme', dark ? 'dark' : 'light');
    localStorage.setItem('lp-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return [dark, () => setDark(d => !d)];
}

/* ── Features data ─────────────────────────────────────────── */
const FEATURES = [
  {
    num: '01',
    title: 'Chapter-wise Practice',
    body: 'Drill each chapter in isolation. Track exactly how many questions you\'ve seen and your correct rate — at a glance.',
  },
  {
    num: '02',
    title: 'Mistake Bank',
    body: 'Every wrong answer is logged automatically. Revisit them in one focused session to close your weakest gaps.',
  },
  {
    num: '03',
    title: 'Mock Tests',
    body: 'Full-length mocks in the real NEET pattern — timed, scored, and analysed.',
  },
  {
    num: '04',
    title: 'Bookmarks',
    body: 'Pin any question for later. Build your own revision list across all three subjects.',
  },
  {
    num: '05',
    title: 'Instant Explanations',
    body: 'Every question ships with a clear explanation so you understand the why, not just the answer.',
  },
  {
    num: '06',
    title: 'Progress Tracking',
    body: 'Your data lives in the browser. No account, no cloud — just pick up where you left off.',
  },
];

/* ── Subjects data ─────────────────────────────────────────── */
const SUBJECTS = [
  { label: 'Biology',   tag: 'Living systems, mapped and tested',    path: '/biology',   key: 'bio' },
  { label: 'Chemistry', tag: 'Reactions, mechanisms, structure',      path: '/chemistry', key: 'chem' },
  { label: 'Physics',   tag: 'Forces, fields, and the maths between', path: '/physics',   key: 'phy' },
];

/* ── Landing ───────────────────────────────────────────────── */
export default function Landing() {
  const [dark, toggleTheme] = useTheme();

  return (
    <div className="lp">

      {/* ── NAV ─────────────────────────────────────────────── */}
      <header className="lp-nav">
        <span className="lp-brand">NP</span>

        <nav className="lp-nav-links">
          <a href="#features" className="lp-nav-link">Features</a>
          <a href="#subjects" className="lp-nav-link">Subjects</a>
          <Link to="/app" className="lp-nav-link">App</Link>
        </nav>

        <div className="lp-nav-right">
          <button
            className="lp-theme-btn"
            onClick={toggleTheme}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? '○' : '●'}
          </button>
          <Link to="/app" className="lp-cta-btn">
            Start →
          </Link>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="lp-hero">
        <p className="lp-label">NEET UG 2026 · FREE</p>

        <h1 className="lp-hero-title">
          Find your gaps.<br />
          Before the<br />
          exam does.
        </h1>

        <div className="lp-hero-right">
          <p className="lp-hero-desc">
            Chapter-wise question sets across Biology, Chemistry and Physics.
            A mistake bank that remembers what tripped you up.
            Mock tests in the real exam pattern.
            No login. No cost. Ever.
          </p>

          <div className="lp-hero-actions">
            <Link to="/app" className="lp-btn-solid">Start practising</Link>
            <a href="#features" className="lp-btn-text">See how it works ↓</a>
          </div>

          <div className="lp-stats">
            <div className="lp-stat">
              <span className="lp-stat-n">3</span>
              <span className="lp-stat-l">Subjects</span>
            </div>
            <div className="lp-stat-sep" />
            <div className="lp-stat">
              <span className="lp-stat-n">100+</span>
              <span className="lp-stat-l">Chapters</span>
            </div>
            <div className="lp-stat-sep" />
            <div className="lp-stat">
              <span className="lp-stat-n">1 k+</span>
              <span className="lp-stat-l">Questions</span>
            </div>
            <div className="lp-stat-sep" />
            <div className="lp-stat">
              <span className="lp-stat-n">Free</span>
              <span className="lp-stat-l">Always</span>
            </div>
          </div>
        </div>
      </section>

      <div className="lp-rule" />

      {/* ── SUBJECTS ────────────────────────────────────────── */}
      <section className="lp-subjects" id="subjects">
        <p className="lp-label">SUBJECTS</p>

        <div className="lp-subj-list">
          {SUBJECTS.map((s, i) => (
            <Link key={s.key} to={s.path} className={`lp-subj-row lp-subj-${s.key}`}>
              <span className="lp-subj-idx">0{i + 1}</span>
              <span className="lp-subj-name">{s.label}</span>
              <span className="lp-subj-tag">{s.tag}</span>
              <span className="lp-subj-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="lp-rule" />

      {/* ── FEATURES ────────────────────────────────────────── */}
      <section className="lp-features" id="features">
        <p className="lp-label">FEATURES</p>

        <div className="lp-feat-grid">
          {FEATURES.map(f => (
            <div key={f.num} className="lp-feat">
              <span className="lp-feat-num">{f.num}</span>
              <h3 className="lp-feat-title">{f.title}</h3>
              <p className="lp-feat-body">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="lp-rule" />

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="lp-bottom-cta">
        <h2 className="lp-cta-title">Ready to close the gap?</h2>
        <Link to="/app" className="lp-btn-solid lp-btn-lg">Open the practice engine →</Link>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="lp-footer">
        <span className="lp-brand">NP</span>
        <span className="lp-footer-note">
          NEET UG 2026 · Free forever · No account needed
        </span>
      </footer>

    </div>
  );
}
