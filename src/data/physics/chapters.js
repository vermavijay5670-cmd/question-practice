export const CLASS_11 = [
    { id: 'unit-dimensions', name: 'Unit and Dimensions' },
    { id: 'motion-straight-line', name: 'Motion in Straight Line'},
];

export const CLASS_12 = [
    { id: 'electric-charge-fields', name: 'Electric charges and Fields' },
    { id: 'electrostatics-potential-capacitance', name: 'Electrostatics Potential and capacitance',}
];

export const ALL_CHAPTERS= [
    ...CLASS_11.map(c=> ({...c, classLevel: 11})),
    ...CLASS_12.map(c=> ({...c, classlevel: 12}))
];