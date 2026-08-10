export const CLASS_11 = [
    { id: 'unit-dimensions', name: 'Unit and Dimensions' },
];

export const CLASS_12 = [
    { id: 'electric-charge-fields', name: 'Electric charges and Fields' },
];

export const ALL_CHAPTERS= [
    ...CLASS_11.map(c=> ({...c, classLevel: 11})),
    ...CLASS_12.map(c=> ({...c, classlevel: 12}))
];