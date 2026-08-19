import { SOME_BASICS_CHEMISTRY } from './banks/someBasicsOfChemistry';
import { STRUCTURE_ATOM } from './banks/structureOfAtom';
import { SOLUTIONS } from './banks/solutions';
import { ELECTROCHEMISTRY } from './banks/electrochemistry';
import { CHEMICAL_KINETICS } from './banks/chemicalKinetics';
import { MOLECULAR_STRUCTURE } from './banks/molecularstructure';
import { THERMODYNAMICS } from './banks/thermodynamics';
import { EQUILIBRIUM } from './banks/equilibrium';
import { REDOX_REACTIONS } from './banks/redoxreactions';
import { ORGANIC_CHEM_PRINCIPLES_TECHNIQUES } from './banks/organicChemBasicsPrinciplesTechniques';


export const QUESTION_BANK = {
  'some-basics-chemistry': SOME_BASICS_CHEMISTRY,
  'structure-atom': STRUCTURE_ATOM,
  'solutions': SOLUTIONS,
  'electrochemistry': ELECTROCHEMISTRY,
  'chemical-kinetics': CHEMICAL_KINETICS,
  'chemical-bonding-molecular-structure': MOLECULAR_STRUCTURE,
  'thermodynamics': THERMODYNAMICS,
  'equilibrium': EQUILIBRIUM,
  'redox-reactions': REDOX_REACTIONS,
  'organic-chem-basic-principles-techniques': ORGANIC_CHEM_PRINCIPLES_TECHNIQUES,

};

export function getChapterQuestions(chapterId) {
  return QUESTION_BANK[chapterId] || [];
}