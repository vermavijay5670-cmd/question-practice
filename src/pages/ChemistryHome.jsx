import SubjectLibrary from '../components/SubjectLibrary';
import { CLASS_11, CLASS_12 } from '../data/chemistry/chapters';
import { getChapterQuestionCount } from '../data/chemistry/questions';

export default function ChemistryHome() {
  return (
    <SubjectLibrary
      subject="chemistry"
      label="Chemistry"
      class11={CLASS_11}
      class12={CLASS_12}
      getCount={getChapterQuestionCount}
      footIcon="flask"
      footLines={['Chemistry', 'Is Everywhere']}
    />
  );
}
