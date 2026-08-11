export const CLASS_11 = [
  {
    id: 'some-basics-chemistry',
    name: 'Some Basic Concepts of Chemistry',
  },
  {
    id: 'structure-atom',
    name: 'Structure of Atom',
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