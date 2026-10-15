import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { RESOURCES } from '../data/resources';
import '../styles/SubjectLibrary.css';

/* ---------- small helpers ---------- */

// Chapter names in the data have uneven capitals ("laws Of Motion"); tidy them for display only.
const SMALL_WORDS = new Set(['and', 'of', 'in', 'a', 'an', 'the', 'to', 'for', 'their']);
function displayName(name) {
  return name
    .trim()
    .split(/\s+/)
    .map((w, i, words) => {
      const lower = w.toLowerCase();
      // keep small words lower-case, except at the start or right after a colon ("Cell: The Unit")
      if (i > 0 && !words[i - 1].endsWith(':') && SMALL_WORDS.has(lower)) return lower;
      // capitalise each part of hyphenated words too ("chem-Basic" -> "Chem-Basic")
      return lower.split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join('-');
    })
    .join(' ');
}

const pad = (n) => String(n).padStart(2, '0');

/* ---------- icons (stroke style, 24px grid) ---------- */

const ICONS = {
  home: <path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10" />,
  book: <path d="M2 4h7a3 3 0 013 3v13a2 2 0 00-2-2H2zM22 4h-7a3 3 0 00-3 3v13a2 2 0 012-2h8z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </>
  ),
  doc: <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8zM14 3v5h5M9 13h6M9 17h6" />,
  cards: (
    <>
      <rect x="3" y="7" width="18" height="14" rx="2" />
      <path d="M7 7V4.5h10V7" />
    </>
  ),
  flag: <path d="M5 21V4M5 4h11l-2 4 2 4H5" />,
  bookmark: <path d="M6 3h12v18l-6-4-6 4z" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  chart: <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />,
  leaf: <path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10zM2 21c0-3 1.9-5.8 5-8" />,
  flask: <path d="M9 3h6M10 3v6L4.5 19a2 2 0 001.8 3h11.4a2 2 0 001.8-3L14 9V3M7.5 15h9" />,
  atom: (
    <>
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </>
  ),
};

function Icon({ name, size = 18 }) {
  return (
    <svg
      className="sl-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="sl-icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path d="M10 8l6 4-6 4z" fill="#0a0a0a" />
    </svg>
  );
}

/* ---------- chapter card ---------- */

function ChapterCard({ subject, getCount, chapter, number }) {
  const { state } = useProgress();
  const total = getCount(chapter.id);
  const seen = state.attempts[subject]?.[chapter.id]?.seen || 0;
  const pct = total ? Math.min(100, Math.round((seen / total) * 100)) : 0;
  const resources = RESOURCES[subject]?.[chapter.id];
  const href = `/${subject}/chapter/${chapter.id}`;
  const name = displayName(chapter.name);
  const hasQuestions = total > 0;

  return (
    <article className={`sl-card${hasQuestions ? '' : ' is-empty'}`}>
      <div className="sl-card-top">
        <span className="sl-num">{pad(number)}</span>
        {hasQuestions ? (
          <Link to={href} className="sl-card-title">{name}</Link>
        ) : (
          <span className="sl-card-title">{name}</span>
        )}
        {hasQuestions && (
          <Link to={href} className="sl-card-arrow" aria-label={`Practice ${name}`} tabIndex={-1}>
            <Icon name="arrow" size={16} />
          </Link>
        )}
      </div>

      <div className="sl-card-actions">
        {hasQuestions ? (
          <Link to={href} className="sl-act sl-act-practice" title={`${total} questions`}>
            <PlayIcon /> Practice
          </Link>
        ) : (
          <span className="sl-act is-off" title="No questions yet">
            <PlayIcon /> Soon
          </span>
        )}

        {resources?.shortnotes ? (
          <a href={resources.shortnotes} target="_blank" rel="noopener noreferrer" className="sl-act">
            <Icon name="doc" size={15} /> Notes
          </a>
        ) : (
          <span className="sl-act is-off" title="Notes not added yet">
            <Icon name="doc" size={15} /> Notes
          </span>
        )}

        {resources?.flashcards ? (
          <a href={resources.flashcards} target="_blank" rel="noopener noreferrer" className="sl-act">
            <Icon name="cards" size={15} /> Flashcards
          </a>
        ) : (
          <span className="sl-act is-off" title="Flashcards not added yet">
            <Icon name="cards" size={15} /> Flashcards
          </span>
        )}
      </div>

      {hasQuestions && (
        <div
          className="sl-card-bar"
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} progress`}
        >
          <i style={{ width: `${pct}%` }} />
        </div>
      )}
    </article>
  );
}

/* ---------- page ---------- */

/**
 * Chapter library page shared by Physics, Chemistry and Biology.
 *   subject   'physics' | 'chemistry' | 'biology'  (routes, progress and resources are keyed by this)
 *   label     display name, e.g. 'Physics'
 *   class11 / class12   chapter lists ({ id, name })
 *   getCount  (chapterId) => number of questions
 *   footIcon / footLines   sidebar sign-off
 */
export default function SubjectLibrary({
  subject,
  label,
  class11: CLASS_11,
  class12: CLASS_12,
  getCount: getChapterQuestionCount,
  footIcon = 'atom',
  footLines = [label, 'Made Clear'],
}) {
  const { state } = useProgress();
  const subjectAttempts = state.attempts[subject];
  const mistakeCount = Object.keys(state.mistakes[subject] || {}).length;
  const bookmarkCount = Object.keys(state.bookmarks[subject] || {}).length;

  const [query, setQuery] = useState('');
  const [activeClass, setActiveClass] = useState(11);

  // Numbering runs straight through both classes (01..N), as in the reference.
  const numbered11 = useMemo(() => CLASS_11.map((c, i) => ({ chapter: c, number: i + 1 })), [CLASS_11]);
  const numbered12 = useMemo(
    () => CLASS_12.map((c, i) => ({ chapter: c, number: CLASS_11.length + i + 1 })),
    [CLASS_11, CLASS_12]
  );

  const stats = useMemo(() => {
    const all = [...CLASS_11, ...CLASS_12];
    let totalQuestions = 0;
    let seenCapped = 0;
    let seenRaw = 0;
    let completed = 0;
    all.forEach((c) => {
      const total = getChapterQuestionCount(c.id);
      const seen = subjectAttempts?.[c.id]?.seen || 0;
      totalQuestions += total;
      seenCapped += Math.min(seen, total);
      seenRaw += seen;
      if (total > 0 && seen >= total) completed += 1;
    });
    return {
      chapters: all.length,
      completed,
      done: seenRaw,
      progress: totalQuestions ? Math.round((seenCapped / totalQuestions) * 100) : 0,
    };
  }, [subjectAttempts, CLASS_11, CLASS_12, getChapterQuestionCount]);

  const q = query.trim().toLowerCase();
  const filter = (list) =>
    q ? list.filter(({ chapter }) => displayName(chapter.name).toLowerCase().includes(q)) : list;
  const list11 = filter(numbered11);
  const list12 = filter(numbered12);

  // Highlight the class that's currently in view in the sidebar.
  useEffect(() => {
    const onScroll = () => {
      const s11 = document.getElementById('sl-class-11');
      const s12 = document.getElementById('sl-class-12');
      if (!s11) return setActiveClass(12);
      if (!s12) return setActiveClass(11);
      // On short pages Class 12 can never reach the top, so treat "scrolled to the end" as Class 12.
      const atEnd = window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      setActiveClass(atEnd || s12.getBoundingClientRect().top < window.innerHeight * 0.45 ? 12 : 11);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [q]);

  const goToClass = (n) => {
    setActiveClass(n);
    document.getElementById(`sl-class-${n}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="sl" data-subject={subject}>
      {/* ---------- top bar ---------- */}
      <header className="sl-top">
        <Link to="/" className="sl-brand" aria-label="All subjects">
          <span className="sl-brand-mark" />
          {label.toUpperCase()}
        </Link>
        <span className="sl-top-sep sl-hide-sm" />
        <span className="sl-top-meta sl-hide-sm">CLASS 11 + 12</span>
        <span className="sl-top-sep sl-hide-sm" />
        <span className="sl-top-meta sl-top-accent sl-hide-sm">CHAPTER LIBRARY</span>

        <label className="sl-search">
          <Icon name="search" size={16} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search chapters..."
            aria-label="Search chapters"
          />
        </label>
      </header>

      {/* ---------- sidebar ---------- */}
      <aside className="sl-side">
        <nav className="sl-nav" aria-label={label}>
          <Link to="/" className="sl-nav-item">
            <Icon name="home" size={20} /> <span>Dashboard</span>
          </Link>
          <span className="sl-nav-item is-active" aria-current="page">
            <Icon name="book" size={20} /> <span>Chapter Library</span>
          </span>
          <Link to={`/${subject}/mock`} className="sl-nav-item">
            <Icon name="target" size={20} /> <span>Mock Test</span>
          </Link>
          <Link to={`/${subject}/mistakes`} className="sl-nav-item">
            <Icon name="flag" size={20} /> <span>Mistake Bank</span>
            {mistakeCount > 0 && <b className="sl-count">{mistakeCount}</b>}
          </Link>
          <Link to={`/${subject}/bookmarks`} className="sl-nav-item">
            <Icon name="bookmark" size={20} /> <span>Bookmarks</span>
            {bookmarkCount > 0 && <b className="sl-count">{bookmarkCount}</b>}
          </Link>
        </nav>

        <div className="sl-side-rule" />
        <div className="sl-side-label">CLASS</div>
        <div className="sl-class-nav">
          {[11, 12].map((n) => (
            <button
              key={n}
              type="button"
              className={`sl-class-btn${activeClass === n ? ' is-active' : ''}`}
              onClick={() => goToClass(n)}
            >
              <i className="sl-radio" /> Class {n}
            </button>
          ))}
        </div>

        <div className="sl-side-spacer" />

        <div className="sl-quote" aria-hidden="true">
          <span>SMALL STEPS</span>
          <span>BUILD</span>
          <span>BIG RESULTS.</span>
          <em />
        </div>

        <div className="sl-side-foot" aria-hidden="true">
          <Icon name={footIcon} size={40} />
          <span>{footLines[0]}<br />{footLines[1]}</span>
        </div>
      </aside>

      {/* ---------- main ---------- */}
      <main className="sl-main">
        <section className="sl-banner">
          <div className="sl-banner-title">
            <div className="sl-kicker">{label.toUpperCase()}</div>
            <h1>Chapter Library</h1>
            <p>Master all {stats.chapters} chapters of {label} (Class 11 + 12). Study. Practice. Grow.</p>
          </div>

          <div className="sl-stats">
            <div className="sl-stat">
              <Icon name="book" size={26} />
              <strong>{stats.chapters}</strong>
              <span>TOTAL CHAPTERS</span>
            </div>
            <div className="sl-stat">
              <Icon name="target" size={26} />
              <strong>{stats.progress}%</strong>
              <span>PROGRESS</span>
            </div>
            <div className="sl-stat">
              <Icon name="chart" size={26} />
              <strong>{stats.completed}/{stats.chapters}</strong>
              <span>COMPLETED</span>
            </div>
            <div className="sl-stat">
              <Icon name="bolt" size={26} />
              <strong>{stats.done}</strong>
              <span>QUESTIONS DONE</span>
            </div>
          </div>

          <div className="sl-tagline" aria-hidden="true">
            <span>LEARN</span>
            <span>PRACTICE</span>
            <span>IMPROVE</span>
            <span>EXCEL</span>
            <i />
          </div>
        </section>

        {list11.length > 0 && (
          <section className="sl-section" id="sl-class-11">
            <div className="sl-section-head">
              <h2>Class 11</h2>
              <span className="sl-rule" />
              <span className="sl-section-count">{list11.length} CHAPTERS</span>
              <i className="sl-dash" />
            </div>
            <div className="sl-grid">
              {list11.map(({ chapter, number }) => (
                <ChapterCard key={chapter.id} subject={subject} getCount={getChapterQuestionCount} chapter={chapter} number={number} />
              ))}
            </div>
          </section>
        )}

        {list12.length > 0 && (
          <section className="sl-section" id="sl-class-12">
            <div className="sl-section-head">
              <h2>Class 12</h2>
              <span className="sl-rule" />
              <span className="sl-section-count">{list12.length} CHAPTERS</span>
              <i className="sl-dash" />
            </div>
            <div className="sl-grid">
              {list12.map(({ chapter, number }) => (
                <ChapterCard key={chapter.id} subject={subject} getCount={getChapterQuestionCount} chapter={chapter} number={number} />
              ))}
            </div>
          </section>
        )}

        {list11.length === 0 && list12.length === 0 && (
          <p className="sl-none">No chapters match “{query}”.</p>
        )}
      </main>
    </div>
  );
}
