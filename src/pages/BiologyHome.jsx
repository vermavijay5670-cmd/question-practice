import SubjectLibrary from '../components/SubjectLibrary';
import { CLASS_11, CLASS_12 } from '../data/biology/chapters';
import { getChapterQuestionCount } from '../data/biology/questions';

export default function BiologyHome() {
  return (
    <SubjectLibrary
      subject="biology"
      label="Biology"
      class11={CLASS_11}
      class12={CLASS_12}
      getCount={getChapterQuestionCount}
      footIcon="leaf"
      footLines={['Biology', 'Is Life']}
    />
  );
}
