import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.css';

const SUBJECTS = [
  { key: 'bio', label: 'Biology', short: 'BIO', icon: '🧬', copy: 'NCERT-first practice across every chapter.', path: '/biology', accent: 'green' },
  { key: 'chem', label: 'Chemistry', short: 'CHEM', icon: '⚗', copy: 'Concepts, reactions and calculations in one place.', path: '/chemistry', accent: 'purple' },
  { key: 'phy', label: 'Physics', short: 'PHY', icon: 'ϟ', copy: 'Build accuracy with chapter-wise problem solving.', path: '/physics', accent: 'cyan' },
];

const FEATURES = [
  { num: '01', icon: '◈', title: 'Chapter-wise Practice', copy: 'Go straight to the chapter you need. Practice focused sets and see your accuracy without the noise.', accent: 'yellow' },
  { num: '02', icon: '↯', title: 'Mistake Bank', copy: 'Wrong answers are remembered automatically, so revision targets the gaps that actually cost you marks.', accent: 'pink' },
  { num: '03', icon: '◷', title: 'NEET-style Mock Tests', copy: 'Timed full-length tests with a familiar exam rhythm, scoring and review flow.', accent: 'cyan' },
  { num: '04', icon: '☆', title: 'Bookmarks', copy: 'Save questions worth revisiting and build a personal revision queue across subjects.', accent: 'purple' },
  { num: '05', icon: '✓', title: 'Instant Explanations', copy: 'Understand why an option is right instead of memorising a letter. Every question has context.', accent: 'green' },
  { num: '06', icon: '⌁', title: 'Progress Tracking', copy: 'Your practice history stays in the browser. Return later and continue from where you stopped.', accent: 'orange' },
];

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.lp-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function MiniQuestion() {
  const [selected, setSelected] = useState(1);
  const options = ['Xylem', 'Phloem', 'Cambium', 'Epidermis'];
  return (
    <div className="lp-mini-question">
      <div className="lp-mini-qtop"><span>QUESTION 14</span><span className="lp-qpill">BIOLOGY</span></div>
      <p>Which tissue is mainly responsible for the transport of food in plants?</p>
      <div className="lp-options">
        {options.map((option, i) => (
          <button key={option} className={`lp-option ${selected === i ? 'is-selected' : ''}`} onClick={() => setSelected(i)}>
            <span>{String.fromCharCode(65 + i)}</span>{option}
          </button>
        ))}
      </div>
      <div className="lp-answer-row"><span className="lp-correct">✓ Correct answer</span><span>Instant explanation</span></div>
    </div>
  );
}

export default function Landing() {
  const [dark, setDark] = useState(() => localStorage.getItem('np-theme') !== 'light');
  const [faq, setFaq] = useState(null);
  useReveal();

  useEffect(() => {
    document.documentElement.setAttribute('data-np-theme', dark ? 'dark' : 'light');
    localStorage.setItem('np-theme', dark ? 'dark' : 'light');
  }, [dark]);

  const progress = useMemo(() => ({ bio: 72, chem: 54, phy: 41 }), []);

  const faqs = [
    ['Do I need an account?', 'No. The practice experience is designed to work without an account. Your progress is stored locally in the browser.'],
    ['Which subjects are available?', 'Biology, Chemistry and Physics are available with chapter-wise practice routes.'],
    ['Can I review my mistakes?', 'Yes. Wrong answers can be collected in the Mistake Bank so revision stays focused.'],
    ['Is it free?', 'Yes. The landing page and practice engine are designed as a free NEET practice experience.'],
  ];

  return (
    <div className="lp">
      <div className="lp-noise" />
      <header className="lp-nav">
        <Link to="/" className="lp-logo"><span className="lp-logo-mark">NP</span><span>NEET<span className="lp-logo-muted">Practice</span></span></Link>
        <nav>
          <a href="#features">Features</a><a href="#subjects">Subjects</a><a href="#progress">Progress</a><a href="#faq">FAQ</a>
        </nav>
        <div className="lp-nav-actions">
          <button className="lp-theme" onClick={() => setDark(v => !v)} aria-label="Toggle theme">{dark ? '☼' : '◐'}</button>
          <Link to="/app" className="lp-nav-cta">Open practice →</Link>
        </div>
      </header>

      <main>
        <section className="lp-hero">
          <div className="lp-orb lp-orb-a" /><div className="lp-orb lp-orb-b" />
          <div className="lp-hero-copy lp-reveal">
            <div className="lp-eyebrow"><span /> NEET UG · QUESTION PRACTICE ENGINE</div>
            <h1>Practice with a plan.<br /><em>Revise with purpose.</em></h1>
            <p>Chapter-wise NEET questions, a mistake bank, mock tests and progress tracking — wrapped in one focused practice workspace.</p>
            <div className="lp-actions"><Link to="/app" className="lp-primary">Start practising <span>↗</span></Link><a href="#features" className="lp-secondary">Explore the system ↓</a></div>
            <div className="lp-trust"><span><b>3</b> subjects</span><i /> <span><b>100+</b> chapters</span><i /> <span><b>1k+</b> questions</span><i /> <span><b>Free</b> forever</span></div>
          </div>

          <div className="lp-hero-product lp-reveal">
            <div className="lp-window-glow" />
            <div className="lp-window">
              <div className="lp-window-bar"><div className="lp-dots"><i/><i/><i/></div><span>NEET PRACTICE / DASHBOARD</span><b>LIVE</b></div>
              <div className="lp-window-body">
                <aside className="lp-sidebar"><div className="lp-side-brand">NP</div><span className="active">⌂</span><span>◈</span><span>✓</span><span>☆</span><span>⚙</span></aside>
                <div className="lp-dashboard">
                  <div className="lp-dash-head"><div><small>GOOD FOCUS</small><h3>Ready for today?</h3></div><div className="lp-date">WED · 14 OCT</div></div>
                  <div className="lp-count-card"><div><small>NEET UG COUNTDOWN</small><strong>200 <small>DAYS</small></strong><span>Keep the streak alive. One focused set at a time.</span></div><div className="lp-count-ring"><b>74%</b><span>weekly goal</span></div></div>
                  <div className="lp-dashboard-grid">
                    <div className="lp-panel"><div className="lp-panel-head"><span>Today’s progress</span><b>4.8h</b></div><div className="lp-bars"><span style={{height:'58%'}}/><span style={{height:'82%'}}/><span style={{height:'42%'}}/><span style={{height:'92%'}}/><span style={{height:'67%'}}/><span style={{height:'100%'}}/><span style={{height:'76%'}}/></div><div className="lp-days"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div></div>
                    <div className="lp-panel lp-goals"><div className="lp-panel-head"><span>Quick queue</span><b>3 / 7</b></div><p><i className="done">✓</i> Work, Energy &amp; Power</p><p><i /> Neural Control &amp; Coordination</p><p><i /> Plant Kingdom revision</p><p><i /> Electrostatics MCQs</p></div>
                  </div>
                  <div className="lp-dashboard-foot"><span>STREAK <b>23 DAYS</b></span><span>ACCURACY <b>81%</b></span><span>QUESTIONS <b>1,284</b></span><Link to="/app">Continue →</Link></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lp-subject-strip" id="subjects">
          <div className="lp-section-head lp-reveal"><span className="lp-kicker">01 · SUBJECTS</span><h2>Everything you need to <em>keep moving.</em></h2><p>Pick a subject and go straight into chapter-wise practice.</p></div>
          <div className="lp-subject-grid">
            {SUBJECTS.map((s, i) => <Link key={s.key} to={s.path} className={`lp-subject-card ${s.accent} lp-reveal`}><div className="lp-subj-top"><span className="lp-subj-icon">{s.icon}</span><span>0{i + 1}</span></div><h3>{s.label}</h3><p>{s.copy}</p><div className="lp-progress"><span style={{width:`${progress[s.key]}%`}} /></div><div className="lp-subj-bottom"><span>{progress[s.key]}% sample progress</span><b>Open →</b></div></Link>)}
          </div>
        </section>

        <section className="lp-features" id="features">
          <div className="lp-section-head lp-reveal"><span className="lp-kicker">02 · THE TOOLKIT</span><h2>A cleaner way to <em>prepare.</em></h2><p>Built around the moments that matter: practice, mistakes, review and repeat.</p></div>
          <div className="lp-feature-grid">{FEATURES.map(f => <article key={f.num} className={`lp-feature-card ${f.accent} lp-reveal`}><div className="lp-feature-top"><span>{f.num}</span><b>{f.icon}</b></div><h3>{f.title}</h3><p>{f.copy}</p><span className="lp-feature-line" /></article>)}</div>
        </section>

        <section className="lp-practice-demo">
          <div className="lp-demo-copy lp-reveal"><span className="lp-kicker">03 · PRACTICE FLOW</span><h2>Less hunting.<br /><em>More answering.</em></h2><p>Jump from a chapter to a question set, answer, review the explanation and keep the useful mistakes in one place.</p><Link to="/app" className="lp-primary">Open the engine →</Link></div>
          <div className="lp-demo-window lp-reveal"><div className="lp-demo-top"><span>CHAPTER PRACTICE</span><b>14 / 30</b></div><MiniQuestion /></div>
        </section>

        <section className="lp-progress-section" id="progress">
          <div className="lp-progress-copy lp-reveal"><span className="lp-kicker">04 · PROGRESS</span><h2>Make your weak spots <em>visible.</em></h2><p>Accuracy is useful. Knowing where it breaks is better. Keep chapter progress, mistakes and saved questions close to the practice flow.</p><ul><li>● Chapter-level progress</li><li>● Mistake-focused revision</li><li>● Saved questions for later</li><li>● Browser-local continuity</li></ul></div>
          <div className="lp-analytics lp-reveal"><div className="lp-analytics-head"><span>WEEKLY ACCURACY</span><b>81.4%</b></div><div className="lp-line-chart"><span style={{height:'35%'}}/><span style={{height:'48%'}}/><span style={{height:'43%'}}/><span style={{height:'61%'}}/><span style={{height:'56%'}}/><span style={{height:'76%'}}/><span style={{height:'81%'}}/><span style={{height:'74%'}}/><span style={{height:'88%'}}/><span style={{height:'81%'}}/></div><div className="lp-analytics-foot"><span>7 days ago</span><b>+12.8%</b><span>today</span></div></div>
        </section>

        <section className="lp-cta"><div className="lp-cta-glow" /><span className="lp-kicker">05 · START HERE</span><h2>Close the gap<br /><em>one question at a time.</em></h2><p>No login wall. No clutter. Just open the practice engine and begin.</p><Link to="/app" className="lp-primary lp-large">Start practising →</Link></section>

        <section className="lp-faq" id="faq"><div className="lp-section-head lp-reveal"><span className="lp-kicker">06 · FAQ</span><h2>Questions, <em>answered.</em></h2></div><div className="lp-faq-list">{faqs.map(([q,a], i) => <button key={q} className={`lp-faq-item ${faq === i ? 'open' : ''}`} onClick={() => setFaq(faq === i ? null : i)}><span>{q}</span><b>{faq === i ? '−' : '+'}</b><p>{a}</p></button>)}</div></section>
      </main>

      <footer className="lp-footer"><Link to="/" className="lp-logo"><span className="lp-logo-mark">NP</span><span>NEET<span className="lp-logo-muted">Practice</span></span></Link><span>NEET UG · Free practice · Built for focused revision</span><div><a href="#features">Features</a><a href="#subjects">Subjects</a><Link to="/app">Practice</Link></div></footer>
    </div>
  );
}
