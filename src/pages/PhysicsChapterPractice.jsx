import { useParams } from 'react-router-dom';
import { ALL_CHAPTERS } from '../data/physics/chapters';
import { getChapterQuestions } from '../data/physics/questions';
import QuizEngine from '../components/practice/QuizEngine';

export default function PhysicsChapterPractice() {
  const { chapterId } = useParams();

  const chapter = ALL_CHAPTERS.find(c => c.id === chapterId);
  const questions = getChapterQuestions(chapterId);

  return (
    <QuizEngine
      subject="physics"
      chapterId={chapterId}
      title={chapter?.name || 'Physics Chapter'}
      questions={questions}
      backTo="/physics"
      backLabel="Physics chapters"
    />
  );
}