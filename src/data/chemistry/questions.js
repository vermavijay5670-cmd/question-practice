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
import { ELEMENTS_PERIODIC_PROPERTIES } from './banks/periodictable';
import { HYDROCARBONS } from './banks/hydrocarbons';
import { D_F_BLOCK_ELEMENTS } from './banks/DandFblockElements';
import { COORDINATION_COMPOUNDS } from './banks/coordinationCompounds';
import { HALOALKANES_HALOARENES } from './banks/haloalkanesHaloarenes';
import { ALCOHOLS_PHENOLS_ETHERS } from './banks/alcoholsPhenolsEthers';
import { ALDEHYDES_KETONES_CARBOXYLICACIDES } from './banks/aldehydesketonescarboxylicacids';
import { AMINES } from './banks/amines';
import { BIOMOLECULES } from './banks/biomolecules';

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
  'periodic-table': ELEMENTS_PERIODIC_PROPERTIES,
  'hydrocarbons': HYDROCARBONS,
  'd-f-elements': D_F_BLOCK_ELEMENTS,
  'coordination-compounds': COORDINATION_COMPOUNDS,
  'haloalkanes-haloarenes': HALOALKANES_HALOARENES,
  'alcohols-phenols-ethers': ALCOHOLS_PHENOLS_ETHERS,
  'aldehydes-ketones-carboxylicacids': ALDEHYDES_KETONES_CARBOXYLICACIDES,
  'amines': AMINES,
  'biomolecules': BIOMOLECULES,

};

export function getChapterQuestions(chapterId) {
  return QUESTION_BANK[chapterId] || [];
}