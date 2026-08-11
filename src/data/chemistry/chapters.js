export const CLASS_11 = [
  {
    id: 'some-basics-chemistry',
    name: 'Some Basic Concepts of Chemistry',
  },
  {
    id: 'structure-atom',
    name: 'Structure of Atom',
  },
  {
    id: 'periodic-table',
    name: 'Classification Of Elements and periodicity in Properties'
  },
  {
    id: 'chemical-bonding-molecular-structure',
    name: 'Chemical Bonding and Molecular Structure',
  },
  {
    id: 'thermodynamics',
    name: 'Thermodynamics',
  },
  {
    id: 'equilibrium',
    name: 'Equilibrium',
  },
  {
    id: 'redox-reactions',
    name: 'redox reaction',
  },
  {
    id: 'organic-chem-basic-principles-techniques',
    name: 'Organic chem-Basic Principles and Techniques',
  },
  {
    id: 'hydrocarbons',
    name: 'Hydrocarbons',
  },
];

export const CLASS_12 = [
  {
    id: 'solutions',
    name: 'Solutions',
  },
  {
    id: 'electrochemistry',
    name: 'Electrochemistry',
  },
  {
    id: 'chemical-kinetics',
    name: 'Chemical Kinetics',
  },
  { 
    id: 'd-f-elements',
    name: 'the D and F Block Elements',
  },
  {
    id: 'coordination-compounds',
    name: 'Coordination Compounds',
  },
  {
    id: 'haloalkanes-haloarenes',
    name: 'Haloalkanes and Haloarenes',
  },
  {
    id: 'alcohols-phenols-ethers',
    name: 'Alcohols, Phenols and Ethers',
  },
  {
    id: 'aldehydes-ketones-carboxylicacids',
    name: 'Aldehydes, Ketones and carboxylic Acids',
  },
  {
    id: 'amines',
    name: 'Amines',
  },
  {
    id: 'biomolecules',
    name: 'Biomolecules',
  },

];

export const ALL_CHAPTERS = [
  ...CLASS_11.map(c => ({
    ...c,
    classLevel: 11,
  })),

  ...CLASS_12.map(c => ({
    ...c,
    classLevel: 12,
  })),
];