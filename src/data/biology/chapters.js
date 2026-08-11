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
  { id: 'locomotion-movement', name: 'Locomotion and Movement' },
  { id: 'breathing-exchange-gases', name: 'Breathing and Exchange of Gases',
     resources: {
    shortnotes: 'https://notebook.google.com/notebook/7d11822a-2997-4e81-b094-6de042470478/artifact/20ea724c-b7db-49f7-868b-3ebb7161c8c3?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_1&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_1_' ,
    flashcards: 'https://notebook.google.com/notebook/7d11822a-2997-4e81-b094-6de042470478/artifact/edeba718-2188-49f9-869e-24a14161720b?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_1&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_1_' ,
  },
},
  { id: 'body-fluids-circulation', name: 'Body Fluids and Circulation' },
  { id: 'excretory-products-elimination', name: 'Excretory Products and their Elimination' },
  { id: 'neural-control-coordination', name: 'Neural Control and Coordination'},
  { id: 'chemical-coordination-integration', name: 'Chemical Coordination and Integration'},
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
