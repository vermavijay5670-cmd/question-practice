import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ALL_CHAPTERS as BIO } from '../data/biology/chapters';
import { ALL_CHAPTERS as PHYSICS } from '../data/physics/chapters';
import { ALL_CHAPTERS as CHEM } from '../data/chemistry/chapters';
import { useChapterQuestions } from '../hooks/useChapterQuestions';
import QuizEngine from '../components/practice/QuizEngine';
import '../styles/Practice.css';

const SUBJECTS = {
  biology: { chapters: BIO, label: 'Biology', fallbackTitle: 'Chapter', backTo: '/biology' },
  physics: { chapters: PHYSICS, label: 'Physics', fallbackTitle: 'Physics Chapter', backTo: '/physics' },
  chemistry: { chapters: CHEM, label: 'Chemistry', fallbackTitle: 'Chemistry Chapter', backTo: '/chemistry' },
};

export default function SubjectChapterPractice({ subject }) {
  const { chapterId } = useParams();
  const { chapters, label, fallbackTitle, backTo } = SUBJECTS[subject];
  const [attempt, setAttempt] = useState(0);
  const { questions, error } = useChapterQuestions(subject, chapterId, attempt);
  const chapter = chapters.find(c => c.id === chapterId);

  if (!questions) {
    return (
      <main className="practice">
        <div className="practice-shell">
          <Link to={backTo} className="back-link">← {label} chapters</Link>
          <p style={{ marginTop: '1.5rem' }}>{error ? "Couldn't load this chapter — check your connection." : 'Loading questions…'}</p>
          {error && <button className="pill-btn" onClick={() => setAttempt(a => a + 1)}>Try again</button>}
        </div>
      </main>
    );
  }

  return (
    <QuizEngine
      key={chapterId}
      subject={subject}
      chapterId={chapterId}
      title={chapter?.name || fallbackTitle}
      questions={questions}
      backTo={backTo}
      backLabel={`${label} chapters`}
    />
  );
}
