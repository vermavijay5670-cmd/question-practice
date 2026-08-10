import { SOME_BASICS_CHEMISTRY } from './banks/someBasicsOfChemistry';
import { STRUCTURE_ATOM } from './banks/structureOfAtom';
import { SOLUTIONS } from './banks/solutions';
import { ELECTROCHEMISTRY } from './banks/electrochemistry';

export const QUESTION_BANK = {
    'some-basics-chemistry': SOME_BASICS_CHEMISTRY,
    'structure-atom': STRUCTURE_ATOM,
    'solutions': SOLUTIONS,
    'electrochemistry': ELECTROCHEMISTRY,


    'basics-of-chemistry': [
    {
      id: 'boc',
      type: 'mcq',
      question: 'numbers of fundamental units:',
      options: [
        '5',
        '6',
        '7',
        '8',
      ],
      correctIndex: 2,
      explanation: 'Length(L), Time(S), Mass(KG), Temperature(K), Current(A), Amount of substance(mol), Luminous intensity(Cd).',
      difficulty: 'medium',
    },
  ],
};



export function getChapterQuestions(chapterId){
    return QUESTION_BANK[chapterId] || [];
}