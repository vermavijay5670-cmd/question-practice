import { Link } from 'react-router-dom';
import { SUBJECTS } from '../data/subjects';
import '../styles/Home.css';

function BioStage() {
  return (
    <svg className="stage" viewBox="0 0 320 320" preserveAspectRatio="none" aria-hidden="true">
      <path className="bio-vine" d="M20,300 C 60,220 40,180 90,140 C 130,108 110,70 150,20" />
      <circle className="bio-leaf" cx="90" cy="140" r="9" />
      <circle className="bio-leaf" cx="150" cy="20" r="7" />
      <circle className="bio-leaf" cx="45" cy="205" r="6" />
    </svg>
  );
}

function ChemStage() {
  return (
    <svg className="stage" viewBox="0 0 320 320" preserveAspectRatio="none" aria-hidden="true">
      <line className="chem-bond" x1="60" y1="250" x2="150" y2="200" />
      <line className="chem-bond" x1="150" y1="200" x2="230" y2="240" />
      <line className="chem-bond" x1="150" y1="200" x2="140" y2="110" />
      <circle className="chem-atom" cx="60" cy="250" r="8" />
      <circle className="chem-atom" cx="150" cy="200" r="10" />
      <circle className="chem-atom" cx="230" cy="240" r="8" />
      <circle className="chem-atom" cx="140" cy="110" r="7" />
    </svg>
  );
}

function PhyStage() {
  return (
    <svg className="stage" viewBox="0 0 320 320" preserveAspectRatio="none" aria-hidden="true">
      <ellipse className="phy-orbit" cx="160" cy="160" rx="120" ry="60" />
      <circle className="phy-particle" r="6" cx="0" cy="0" />
    </svg>
  );
}

const STAGES = { biology: BioStage, chemistry: ChemStage, physics: PhyStage };

export default function Home() {
  return (
    <main className="home">
      <div className="home-header">
        <span className="home-eyebrow">NEET UG 2026 · Practice Engine</span>
        <h1 className="home-title">Pick a subject, start finding your gaps</h1>
        <p className="home-sub">
          Chapter-wise question sets with instant explanations, a mistake bank that remembers
          what tripped you up, and mock tests in the real exam pattern.
        </p>
      </div>

      <div className="subject-grid">
        {SUBJECTS.map((s) => {
          const Stage = STAGES[s.id];
          const locked = s.status !== 'live';
          const cardStyle = {
            '--card-deep': s.theme.deep,
            '--card-mid': s.theme.mid,
            '--card-bright': s.theme.bright,
          };
          const CardInner = (
            <>
              <Stage />
              <div className="content">
                <span className="subject-status-pill">
                  {locked ? 'Coming soon' : 'Live now'}
                </span>
                <h2 className="subject-name">{s.label}</h2>
                <p className="subject-tagline">{s.tagline}</p>
              </div>
              <div className="subject-footer">
                <span>{locked ? 'Notify me later' : 'Enter'}</span>
                <span>→</span>
              </div>
            </>
          );
          return locked ? (
            <div key={s.id} className="subject-card locked" style={cardStyle}>
              {CardInner}
            </div>
          ) : (
            <Link key={s.id} to={s.path} className="subject-card" style={cardStyle}>
              {CardInner}
            </Link>
          );
        })}
      </div>

      <p className="home-footer-note">
        Biology is live with sample chapter sets. Chemistry and Physics open up next —
        each gets its own subject-specific practice experience, not a reskin of this one.
      </p>
    </main>
  );
}
