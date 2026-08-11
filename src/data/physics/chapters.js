export const CLASS_11 = [
    { id: 'unit-dimensions', name: 'Unit and Dimensions' },
    { id: 'motion-straight-line', name: 'Motion in Straight Line'},
    { id: 'motion-plane', name: 'Motion in plane'},
    { id: 'laws-motion', name: 'laws Of Motion'},
    { id: 'work-energy-power', name: 'Work, Energy and power'},
    { id: 'system-particles-rotational-motion',
        name: 'System Of particles and Rotational Motion'
    },
    { id: 'gravitation', name: 'Gravitation'},
    { id: 'mechanical-properties-solids', name: 'Mechanical Properties Of Solids'},
    { id: 'mechanical-properties-fluids', name: 'Mechanical Properties Of Fluids'},
    { id: 'thermal-properties-matter', name: 'Thermal Properties Of Matter'},
    { id: 'thermodynamics', name: 'Thermodynamics'},
    { id: 'kinetic-theory', name: 'Kinetics Theory'},
    { id: 'oscillations', name: 'Oscillations'},
    { id: 'waves' name: 'Waves'},
];

export const CLASS_12 = [
    { id: 'electric-charge-fields', name: 'Electric charges and Fields' },
    { id: 'electrostatics-potential-capacitance', name: 'Electrostatics Potential and capacitance'},
    { id: 'current-electricity', name: 'Current Electricity'},
    { id: 'moving-charges-magnetism', name: 'Moving Charges and Magnetism'},
    { id: 'magnetism-matters', name: 'Magnetism and Matters'},
    { id: 'electromagnetic-induction', name: 'Electromagnetic Induction'},
    { id: 'alternating-current', name: 'Alternating Current'},
    { id: 'electromagnetic-waves', name: 'Electromagnetic Waves'},
    { id: 'ray-optics-optical-instruments', name: 'Ray Optics and Optical Instruments'},
    { id: 'wave-optics', name: 'Wave Optics'},
    { id: 'dual-nature-radiations-matter', name: 'Dual Nature and Radiations and Matter'},
    { id: 'atoms', name: 'Atoms'},
    { id: 'nuclei', name: 'Nuclei'},
    { id: 'semiconductor-electronics', name: 'SemiConductor and Electronic Devices'},

];

export const ALL_CHAPTERS= [
    ...CLASS_11.map(c=> ({...c, classLevel: 11})),
    ...CLASS_12.map(c=> ({...c, classlevel: 12})),
];