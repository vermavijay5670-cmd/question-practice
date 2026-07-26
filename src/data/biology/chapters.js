export const CLASS_11 = [
  { id: 'living-world', name: 'The Living World' },
  { id: 'biological-classification', name: 'Biological Classification' },
  { id: 'plant-kingdom', name: 'Plant Kingdom' },
  { id: 'animal-kingdom', name: 'Animal Kingdom' },
  { id: 'morphology-flowering-plants', name: 'Morphology of Flowering Plants' },
  { id: 'anatomy-flowering-plants', name: 'Anatomy of Flowering Plants' },
  { id: 'structural-organisation-animals', name: 'Structural Organisation in Animals' },
  { id: 'cell-unit-of-life', name: 'Cell: The Unit of Life' },
  { id: 'biomolecules', name: 'Biomolecules' },
  { id: 'cell-cycle-division', name: 'Cell Cycle and Cell Division' },
  { id: 'photosynthesis', name: 'Photosynthesis in Higher Plants' },
  { id: 'respiration-plants', name: 'Respiration in Plants' },
  { id: 'plant-growth-development', name: 'Plant Growth and Development' },
];

export const CLASS_12 = [
  { id: 'sexual-reproduction-plants', name: 'Sexual Reproduction in Flowering Plants' },
  { id: 'human-reproduction', name: 'Human Reproduction' },
  { id: 'reproductive-health', name: 'Reproductive Health' },
  { id: 'inheritance-variation', name: 'Principles of Inheritance and Variation' },
  { id: 'molecular-basis-inheritance', name: 'Molecular Basis of Inheritance' },
  { id: 'evolution', name: 'Evolution' },
  { id: 'human-health-disease', name: 'Human Health and Disease' },
  { id: 'microbes-human-welfare', name: 'Microbes in Human Welfare' },
  { id: 'biotech-principles', name: 'Biotechnology: Principles and Processes' },
  { id: 'biotech-applications', name: 'Biotechnology and Its Applications' },
  { id: 'organisms-populations', name: 'Organisms and Populations' },
  { id: 'ecosystem', name: 'Ecosystem' },
  { id: 'biodiversity-conservation', name: 'Biodiversity and Conservation' },
];

export const ALL_CHAPTERS = [
  ...CLASS_11.map(c => ({ ...c, classLevel: 11 })),
  ...CLASS_12.map(c => ({ ...c, classLevel: 12 })),
];
