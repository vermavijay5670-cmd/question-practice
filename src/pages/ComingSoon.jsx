import { Link } from 'react-router-dom';

export default function ComingSoon({ subject }) {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '2rem', textAlign: 'center' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-dim)' }}>Phase in progress</span>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', margin: 0 }}>{subject} is next</h1>
      <p style={{ color: 'var(--ink-dim)', maxWidth: '40ch' }}>
        Biology is live first. {subject} gets its own distinct home and question engine once we move on to it.
      </p>
      <Link to="/" className="pill-btn">← Back to subjects</Link>
    </main>
  );
}
