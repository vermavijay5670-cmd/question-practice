import SubjectLibrary from '../components/SubjectLibrary';
import { CLASS_11, CLASS_12 } from '../data/physics/chapters';
import { getChapterQuestionCount } from '../data/physics/questions';

export default function PhysicsHome() {
  return (
    <SubjectLibrary
      subject="physics"
      label="Physics"
      class11={CLASS_11}
      class12={CLASS_12}
      getCount={getChapterQuestionCount}
      footIcon="atom"
      footLines={['Physics', 'Makes Sense']}
    />
  );
}
