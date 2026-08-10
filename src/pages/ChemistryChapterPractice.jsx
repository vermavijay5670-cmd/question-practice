import { useParams } from 'react-router-dom';
import { ALL_CHAPTERS } from '../data/chemistry/chapters';
import { getChapterQuestions } from '../data/chemistry/questions';
import QuizEngine from '../components/practice/QuizEngine';

export default function chemistryChapterPractice() {
  const { chapterId } = useParams();

  const chapter = ALL_CHAPTERS.find(c => c.id === chapterId);
  const questions = getChapterQuestions(chapterId);

  return (
    <QuizEngine
      subject="chemistry"
      chapterId={chapterId}
      title={chapter?.name || 'chemistry Chapter'}
      questions={questions}
      backTo="/chemistry"
      backLabel="chemistry chapters"
    />
  );
}