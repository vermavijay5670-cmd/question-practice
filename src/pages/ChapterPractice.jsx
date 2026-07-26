import { useParams } from 'react-router-dom';
import { ALL_CHAPTERS } from '../data/biology/chapters';
import { getChapterQuestions } from '../data/biology/questions';
import QuizEngine from '../components/practice/QuizEngine';

export default function ChapterPractice() {
  const { chapterId } = useParams();
  const chapter = ALL_CHAPTERS.find(c => c.id === chapterId);
  const questions = getChapterQuestions(chapterId);

  return (
    <QuizEngine
      subject="biology"
      chapterId={chapterId}
      title={chapter?.name || 'Chapter'}
      questions={questions}
      backTo="/biology"
      backLabel="Biology chapters"
    />
  );
}
