import { SOME_BASICS_CHEMISTRY } from './banks/someBasicsOfChemistry';
import { STRUCTURE_ATOM } from './banks/structureOfAtom';
import { SOLUTIONS } from './banks/solutions';
import { ELECTROCHEMISTRY } from './banks/electrochemistry';

export const QUESTION_BANK = {
  'some-basics-chemistry': SOME_BASICS_CHEMISTRY,
  'structure-atom': STRUCTURE_ATOM,
  'solutions': SOLUTIONS,
  'electrochemistry': ELECTROCHEMISTRY,
};

export function getChapterQuestions(chapterId) {
  return QUESTION_BANK[chapterId] || [];
}