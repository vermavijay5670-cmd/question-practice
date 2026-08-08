// Question schema:
// { id, type: 'mcq'|'assertion-reason'|'statement', question, options[4], correctIndex, explanation, difficulty }
//
// Chapters below marked with real sample sets are the launch set. Every other chapter
// exists in the app with an empty state until you supply the chapter PDF, or ask Claude
// to generate a practice set for it.

import { BIOLOGICAL_CLASSIFICATION } from './banks/biologicalClassification';
import { LIVING_WORLD } from './banks/livingWorld';
import { RESPIRATION_PLANTS } from './banks/respirationPlants';
import { PHOTOSYNTHESIS } from './banks/photosynthesis';
import { ECOSYSTEM } from './banks/ecosystem';
import { EVOLUTION } from './banks/evolution';
import { BIOTECH_PRINCIPLES } from './banks/biotechPrinciples';
import { BIOTECH_APPLICATIONS } from './banks/biotechApplications';
import { CELL_UNIT_OF_LIFE } from './banks/cellUnitOfLife';
import { CELL_CYCLE_DIVISION } from './banks/cellCycleDivision';
import { ANIMAL_KINGDOM } from './banks/animalKingdom';
import { BIODIVERSITY_CONSERVATION } from './banks/biodiversityConservation';
import { PLANT_KINGDOM } from './banks/plantKingdom';
import { HUMAN_REPRODUCTION } from './banks/humanReproduction';
import { REPRODUCTIVE_HEALTH } from './banks/reproductiveHealth';
import { LOCOMOTION_MOVEMENT } from './banks/locomotionMovement';
import { BREATHING_EXCHANGE_GASES } from './banks/breathingExchangeGases';
import { BODY_FLUIDS_CIRCULATION } from './banks/BodyFluidsCirculation';
import { EXCRETORY_PRODUCTS_ELIMINATION } from './banks/excretoryProductsElimination';
import { NEURAL_CONTROL_COORDINATION } from './banks/neuralControlCoordination';

export const QUESTION_BANK = {
  'biological-classification': BIOLOGICAL_CLASSIFICATION,
  'living-world': LIVING_WORLD,
  'respiration-plants': RESPIRATION_PLANTS,
  photosynthesis: PHOTOSYNTHESIS,
  ecosystem: ECOSYSTEM,
  evolution: EVOLUTION,
  'biotech-principles': BIOTECH_PRINCIPLES,
  'biotech-applications': BIOTECH_APPLICATIONS,
  'cell-unit-of-life': CELL_UNIT_OF_LIFE,
  'cell-cycle-division': CELL_CYCLE_DIVISION,
  'animal-kingdom': ANIMAL_KINGDOM,
  'biodiversity-conservation': BIODIVERSITY_CONSERVATION,
  'plant-kingdom': PLANT_KINGDOM,
  'human-reproduction': HUMAN_REPRODUCTION,
  'reproductive-health': REPRODUCTIVE_HEALTH,
  'locomotion-movement': LOCOMOTION_MOVEMENT,
  'breathing-exchange-gases': BREATHING_EXCHANGE_GASES,
  'body-fluids-circulation': BODY_FLUIDS_CIRCULATION,
  'excretory-products-elimination': EXCRETORY_PRODUCTS_ELIMINATION,
  'neural-control-coordination': NEURAL_CONTROL_COORDINATION,

  biomolecules: [
    {
      id: 'biomol-1',
      type: 'mcq',
      question: 'Which of the following is a reducing sugar?',
      options: ['Sucrose', 'Glucose', 'Starch', 'Cellulose'],
      correctIndex: 1,
      explanation: 'Glucose has a free aldehyde group that can reduce Fehling\'s/Tollens\' reagent, making it a reducing sugar. Sucrose is a non-reducing disaccharide since both anomeric carbons are involved in the glycosidic bond.',
      difficulty: 'easy',
    },
    {
      id: 'biomol-2',
      type: 'mcq',
      question: 'The peptide bond formed between two amino acids is best described as:',
      options: [
        'An ionic bond between R groups',
        'A covalent bond formed by dehydration (loss of water)',
        'A hydrogen bond between amino groups',
        'A disulfide bond between cysteine residues',
      ],
      correctIndex: 1,
      explanation: 'A peptide bond forms via a condensation (dehydration) reaction between the carboxyl group of one amino acid and the amino group of another, releasing a water molecule.',
      difficulty: 'easy',
    },
    {
      id: 'biomol-3',
      type: 'assertion-reason',
      question: 'Assertion (A): Enzymes lower the activation energy of a reaction. Reason (R): Enzymes alter the equilibrium constant of the reaction they catalyse.',
      options: [
        'Both A and R are true, and R is the correct explanation of A',
        'Both A and R are true, but R is NOT the correct explanation of A',
        'A is true, but R is false',
        'A is false, but R is true',
      ],
      correctIndex: 2,
      explanation: 'Enzymes speed up reactions by lowering activation energy (A is true), but they do NOT change the equilibrium constant or the free energy difference between reactants and products (R is false).',
      difficulty: 'medium',
    },
    {
      id: 'biomol-4',
      type: 'mcq',
      question: 'Which secondary structure of proteins is stabilised primarily by hydrogen bonds between the C=O and N-H groups of the peptide backbone?',
      options: ['Alpha helix', 'Quaternary structure', 'Primary structure', 'Prosthetic group binding'],
      correctIndex: 0,
      explanation: 'The alpha helix is a coiled secondary structure stabilised by regular intramolecular hydrogen bonding between backbone C=O and N-H groups, typically every 4th residue.',
      difficulty: 'medium',
    },
    {
      id: 'biomol-5',
      type: 'mcq',
      question: 'Km (Michaelis constant) of an enzyme indicates:',
      options: [
        'The maximum velocity of the reaction',
        'The substrate concentration at which reaction velocity is half of Vmax',
        'The total amount of enzyme present',
        'The optimum pH for enzyme activity',
      ],
      correctIndex: 1,
      explanation: 'Km is the substrate concentration at which the reaction velocity reaches half of Vmax. A lower Km indicates higher enzyme-substrate affinity.',
      difficulty: 'hard',
    },
    {
      id: 'biomol-6',
      type: 'mcq',
      question: 'Which of these is NOT a nitrogenous base found in RNA?',
      options: ['Adenine', 'Uracil', 'Thymine', 'Cytosine'],
      correctIndex: 2,
      explanation: 'Thymine is found in DNA, not RNA. RNA contains uracil in place of thymine, pairing with adenine.',
      difficulty: 'easy',
    },
  ],

  'inheritance-variation': [
    {
      id: 'inherit-1',
      type: 'mcq',
      question: 'In a dihybrid cross between two heterozygous individuals (RrYy x RrYy), what is the phenotypic ratio in the F2 generation, assuming independent assortment?',
      options: ['3:1', '1:2:1', '9:3:3:1', '1:1:1:1'],
      correctIndex: 2,
      explanation: 'For two independently assorting genes, the classic dihybrid F2 phenotypic ratio is 9:3:3:1 (both dominant : one dominant one recessive : other combination : both recessive), as demonstrated by Mendel.',
      difficulty: 'easy',
    },
    {
      id: 'inherit-2',
      type: 'mcq',
      question: 'A colour-blind father and a homozygous normal mother will have:',
      options: [
        'All colour-blind sons',
        'All daughters who are carriers, no colour-blind children',
        'All colour-blind daughters',
        'Half of sons colour-blind',
      ],
      correctIndex: 1,
      explanation: 'Colour blindness is X-linked recessive. The father contributes his X (carrying the allele) to daughters (making them carriers, phenotypically normal) and Y to sons (who get their X from mother, who is homozygous normal) — so no child is colour-blind.',
      difficulty: 'medium',
    },
    {
      id: 'inherit-3',
      type: 'mcq',
      question: 'Which of the following best describes co-dominance, as seen in the ABO blood group system?',
      options: [
        'One allele completely masks the other',
        'Both alleles express themselves fully and independently in the heterozygote',
        'The heterozygote shows a blended intermediate phenotype',
        'One allele is lethal in the homozygous state',
      ],
      correctIndex: 1,
      explanation: 'In co-dominance (e.g., IA and IB alleles), both alleles are expressed fully and simultaneously in the heterozygote (IAIB gives AB blood group), unlike blending (incomplete dominance).',
      difficulty: 'medium',
    },
    {
      id: 'inherit-4',
      type: 'assertion-reason',
      question: 'Assertion (A): Linked genes do not show independent assortment. Reason (R): Genes located far apart on the same chromosome show a higher frequency of recombination than genes located close together.',
      options: [
        'Both A and R are true, and R is the correct explanation of A',
        'Both A and R are true, but R is NOT the correct explanation of A',
        'A is true, but R is false',
        'A is false, but R is true',
      ],
      correctIndex: 1,
      explanation: 'Both statements are independently true: linked genes on the same chromosome tend to be inherited together (A), and recombination frequency increases with distance between genes (R) — but R explains recombination frequency, not directly why linked genes fail to assort independently, so it is not the correct explanation of A.',
      difficulty: 'hard',
    },
    {
      id: 'inherit-5',
      type: 'mcq',
      question: 'A cross showing a 1:1 phenotypic ratio in the progeny is an example of:',
      options: ['A monohybrid F2 cross', 'A test cross', 'A dihybrid F2 cross', 'Self-pollination of F1'],
      correctIndex: 1,
      explanation: 'A test cross (heterozygote x homozygous recessive) produces offspring in a 1:1 ratio, used to determine the genotype of an individual showing the dominant phenotype.',
      difficulty: 'easy',
    },
    {
      id: 'inherit-6',
      type: 'mcq',
      question: 'Down syndrome is caused by:',
      options: [
        'Deletion of a part of chromosome 21',
        'Trisomy of chromosome 21',
        'Monosomy of the X chromosome',
        'Trisomy of chromosome 18',
      ],
      correctIndex: 1,
      explanation: 'Down syndrome results from trisomy 21 — the presence of an extra copy (three copies) of chromosome 21, typically due to non-disjunction during meiosis.',
      difficulty: 'easy',
    },
  ],


};

export function getChapterQuestions(chapterId) {
  return QUESTION_BANK[chapterId] || [];
}
