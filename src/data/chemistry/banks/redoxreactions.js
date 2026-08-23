export const REDOX_REACTIONS = [
  // ==================== MCQ (70) ====================
  {
    id: 'redox-1',
    type: 'mcq',
    question: 'According to the classical (oxygen-based) concept, oxidation is defined as',
    options: [
      'addition of hydrogen to a substance',
      'addition of oxygen or any electronegative element to a substance',
      'removal of oxygen from a substance',
      'gain of electrons by a substance'
    ],
    correctIndex: 1,
    explanation: 'In the classical concept, oxidation is the addition of oxygen or a more electronegative element (or removal of hydrogen/electropositive element) to a substance.',
    difficulty: 'easy'
  },
  {
    id: 'redox-2',
    type: 'mcq',
    question: 'According to the classical concept, reduction is defined as',
    options: [
      'addition of oxygen to a substance',
      'removal of hydrogen from a substance',
      'addition of hydrogen or an electropositive element, or removal of oxygen, from a substance',
      'loss of electrons by a substance'
    ],
    correctIndex: 2,
    explanation: 'Reduction, in the classical sense, is the addition of hydrogen or an electropositive element, or the removal of oxygen or an electronegative element, from a substance.',
    difficulty: 'easy'
  },
  {
    id: 'redox-3',
    type: 'mcq',
    question: 'In the electronic concept of redox reactions, oxidation is defined as a process involving',
    options: ['loss of electrons', 'gain of electrons', 'gain of protons', 'no change in electron count'],
    correctIndex: 0,
    explanation: 'The electronic concept defines oxidation as the loss of one or more electrons by an atom, ion, or molecule.',
    difficulty: 'easy'
  },
  {
    id: 'redox-4',
    type: 'mcq',
    question: 'In the electronic concept of redox reactions, reduction is defined as a process involving',
    options: ['loss of electrons', 'gain of electrons', 'loss of protons', 'gain of neutrons'],
    correctIndex: 1,
    explanation: 'Reduction, in the electronic concept, is the gain of one or more electrons by a species.',
    difficulty: 'easy'
  },
  {
    id: 'redox-5',
    type: 'mcq',
    question: 'A redox reaction is best described as a reaction in which',
    options: [
      'only oxidation occurs',
      'only reduction occurs',
      'oxidation and reduction occur simultaneously, since electrons lost by one species are gained by another',
      'no transfer of electrons takes place'
    ],
    correctIndex: 2,
    explanation: 'A redox reaction always involves oxidation and reduction occurring together, since electrons lost by the substance being oxidised must be gained by the substance being reduced.',
    difficulty: 'easy'
  },
  {
    id: 'redox-6',
    type: 'mcq',
    question: 'A substance that gains electrons and gets reduced during a redox reaction is called the',
    options: ['reducing agent', 'oxidising agent', 'catalyst', 'spectator species'],
    correctIndex: 1,
    explanation: 'The species that gains electrons (and is itself reduced) causes oxidation of the other species, and is therefore called the oxidising agent or oxidant.',
    difficulty: 'easy'
  },
  {
    id: 'redox-7',
    type: 'mcq',
    question: 'A substance that loses electrons and gets oxidised during a redox reaction is called the',
    options: ['oxidising agent', 'reducing agent', 'electrolyte', 'buffer'],
    correctIndex: 1,
    explanation: 'The species that loses electrons (and is itself oxidised) causes reduction of the other species, and is therefore called the reducing agent or reductant.',
    difficulty: 'easy'
  },
  {
    id: 'redox-8',
    type: 'mcq',
    question: 'The oxidation number of an atom is best described as',
    options: [
      'the actual charge present on that atom in a molecule',
      'a formal charge assigned to an atom assuming all bonds to be fully ionic',
      'always equal to its valency',
      'always a whole number, never fractional'
    ],
    correctIndex: 1,
    explanation: 'Oxidation number is a formal (hypothetical) charge assigned to an atom in a molecule or ion on the assumption that the bonding is completely ionic, following a set of assignment rules.',
    difficulty: 'medium'
  },
  {
    id: 'redox-9',
    type: 'mcq',
    question: 'The oxidation number of any atom in its free/elemental state (e.g. Na(s), O2(g), P4(s)) is',
    options: ['+1', '-1', 'zero', 'equal to its group number'],
    correctIndex: 2,
    explanation: 'By convention, the oxidation number of an atom in its free elemental form is always taken as zero.',
    difficulty: 'easy'
  },
  {
    id: 'redox-10',
    type: 'mcq',
    question: 'For a monoatomic ion, the oxidation number of the atom equals',
    options: ['zero always', 'the charge carried by the ion', 'twice the charge on the ion', 'its group number in the periodic table'],
    correctIndex: 1,
    explanation: 'For simple monoatomic ions, the oxidation number is taken as equal to the charge on the ion, e.g. Na+ has oxidation number +1, Cl- has oxidation number -1.',
    difficulty: 'easy'
  },
  {
    id: 'redox-11',
    type: 'mcq',
    question: 'The oxidation number of oxygen in most compounds (excluding peroxides, superoxides, and OF2) is',
    options: ['+2', '-1', '-2', '0'],
    correctIndex: 2,
    explanation: 'In the vast majority of its compounds, oxygen is assigned an oxidation number of -2, since it is highly electronegative except when bonded to fluorine.',
    difficulty: 'easy'
  },
  {
    id: 'redox-12',
    type: 'mcq',
    question: 'The oxidation number of oxygen in hydrogen peroxide (H2O2) is',
    options: ['-2', '-1', '0', '+1'],
    correctIndex: 1,
    explanation: 'In peroxides such as H2O2, each oxygen atom is assigned an oxidation number of -1, since the two oxygen atoms share the -2 charge equally between them via the O-O bond.',
    difficulty: 'medium'
  },
  {
    id: 'redox-13',
    type: 'mcq',
    question: 'The oxidation number of oxygen in OF2 is',
    options: ['-2', '-1', '+1', '+2'],
    correctIndex: 3,
    explanation: 'Since fluorine is more electronegative than oxygen, in OF2 the oxygen is assigned the positive oxidation number +2, an exception to the usual -2 rule.',
    difficulty: 'medium'
  },
  {
    id: 'redox-14',
    type: 'mcq',
    question: 'The oxidation number of hydrogen in most of its compounds (excluding metal hydrides) is',
    options: ['-1', '0', '+1', '+2'],
    correctIndex: 2,
    explanation: 'Hydrogen is usually assigned an oxidation number of +1 in most compounds, since it is generally less electronegative than the atoms it is bonded to.',
    difficulty: 'easy'
  },
  {
    id: 'redox-15',
    type: 'mcq',
    question: 'The oxidation number of hydrogen in metal hydrides such as NaH is',
    options: ['+1', '-1', '0', '+2'],
    correctIndex: 1,
    explanation: 'In metal hydrides, hydrogen is bonded to a less electronegative metal, so hydrogen is assigned an oxidation number of -1, an exception to its usual +1 value.',
    difficulty: 'medium'
  },
  {
    id: 'redox-16',
    type: 'mcq',
    question: 'The oxidation number of fluorine in all of its compounds is always',
    options: ['+1', '0', '-1', 'variable, depending on the compound'],
    correctIndex: 2,
    explanation: 'Fluorine, being the most electronegative element, always shows an oxidation number of -1 in all of its compounds, without exception.',
    difficulty: 'easy'
  },
  {
    id: 'redox-17',
    type: 'mcq',
    question: 'The oxidation numbers of alkali metals (Group 1) and alkaline earth metals (Group 2) in their compounds are, respectively,',
    options: ['+2 and +1', '+1 and +2', '-1 and -2', '+1 and +1'],
    correctIndex: 1,
    explanation: 'Alkali metals almost always show an oxidation number of +1, and alkaline earth metals almost always show +2, in their compounds.',
    difficulty: 'easy'
  },
  {
    id: 'redox-18',
    type: 'mcq',
    question: 'The sum of the oxidation numbers of all atoms in a neutral molecule is',
    options: ['always +1', 'always -1', 'zero', 'equal to the number of atoms present'],
    correctIndex: 2,
    explanation: 'For a neutral molecule, the algebraic sum of the oxidation numbers of all constituent atoms must add up to zero.',
    difficulty: 'easy'
  },
  {
    id: 'redox-19',
    type: 'mcq',
    question: 'The sum of the oxidation numbers of all atoms in a polyatomic ion is equal to',
    options: ['zero always', 'the net charge on the ion', 'the number of atoms in the ion', 'the molar mass of the ion'],
    correctIndex: 1,
    explanation: 'For a polyatomic ion, the sum of the oxidation numbers of the constituent atoms equals the net charge carried by that ion.',
    difficulty: 'easy'
  },
  {
    id: 'redox-20',
    type: 'mcq',
    question: 'The oxidation number of manganese in KMnO4 is',
    options: ['+2', '+4', '+6', '+7'],
    correctIndex: 3,
    explanation: 'Taking K as +1 and each O as -2: +1 + Mn + 4(-2) = 0, giving Mn = +7.',
    difficulty: 'medium'
  },
  {
    id: 'redox-21',
    type: 'mcq',
    question: 'The oxidation number of chromium in K2Cr2O7 is',
    options: ['+3', '+4', '+6', '+7'],
    correctIndex: 2,
    explanation: 'Taking K as +1 and O as -2: 2(+1) + 2Cr + 7(-2) = 0, giving 2Cr = +12, so Cr = +6.',
    difficulty: 'medium'
  },
  {
    id: 'redox-22',
    type: 'mcq',
    question: 'The oxidation number of sulphur in H2SO4 is',
    options: ['+2', '+4', '+6', '+8'],
    correctIndex: 2,
    explanation: 'Taking H as +1 and O as -2: 2(+1) + S + 4(-2) = 0, giving S = +6.',
    difficulty: 'medium'
  },
  {
    id: 'redox-23',
    type: 'mcq',
    question: 'The oxidation number of nitrogen in HNO3 is',
    options: ['+3', '+4', '+5', '+6'],
    correctIndex: 2,
    explanation: 'Taking H as +1 and O as -2: (+1) + N + 3(-2) = 0, giving N = +5.',
    difficulty: 'medium'
  },
  {
    id: 'redox-24',
    type: 'mcq',
    question: 'The oxidation number of chlorine in HClO4 (perchloric acid) is',
    options: ['+3', '+5', '+7', '+1'],
    correctIndex: 2,
    explanation: 'Taking H as +1 and O as -2: (+1) + Cl + 4(-2) = 0, giving Cl = +7.',
    difficulty: 'medium'
  },
  {
    id: 'redox-25',
    type: 'mcq',
    question: 'The oxidation number of carbon in methane (CH4) is',
    options: ['+4', '0', '-4', '+2'],
    correctIndex: 2,
    explanation: 'Taking H as +1: C + 4(+1) = 0, giving C = -4.',
    difficulty: 'medium'
  },
  {
    id: 'redox-26',
    type: 'mcq',
    question: 'The oxidation number of carbon in carbon dioxide (CO2) is',
    options: ['-4', '0', '+2', '+4'],
    correctIndex: 3,
    explanation: 'Taking O as -2: C + 2(-2) = 0, giving C = +4.',
    difficulty: 'medium'
  },
  {
    id: 'redox-27',
    type: 'mcq',
    question: 'The average oxidation number of iron in Fe3O4 (magnetite) is',
    options: ['+2', '+3', '+8/3', '+4'],
    correctIndex: 2,
    explanation: 'Taking O as -2: 3Fe + 4(-2) = 0, giving Fe = +8/3, an average value since Fe3O4 actually contains Fe in both +2 and +3 states in a 1:2 ratio.',
    difficulty: 'hard'
  },
  {
    id: 'redox-28',
    type: 'mcq',
    question: 'The concept of oxidation number was primarily developed to',
    options: [
      'replace the need for balancing chemical equations',
      'keep track of electron transfer/distribution and identify oxidation and reduction in a reaction',
      'calculate the molar mass of a compound',
      'determine the physical state of a compound'
    ],
    correctIndex: 1,
    explanation: 'Oxidation numbers provide a convenient bookkeeping method to track changes in electron distribution, allowing oxidation (increase in oxidation number) and reduction (decrease in oxidation number) to be identified systematically.',
    difficulty: 'medium'
  },
  {
    id: 'redox-29',
    type: 'mcq',
    question: 'In terms of oxidation number, oxidation corresponds to',
    options: [
      'a decrease in oxidation number of an element',
      'an increase in oxidation number of an element',
      'no change in oxidation number',
      'oxidation number becoming exactly zero'
    ],
    correctIndex: 1,
    explanation: 'Oxidation is defined, in terms of oxidation number, as an increase in the oxidation number of an element, consistent with loss of electrons.',
    difficulty: 'easy'
  },
  {
    id: 'redox-30',
    type: 'mcq',
    question: 'In terms of oxidation number, reduction corresponds to',
    options: [
      'an increase in oxidation number of an element',
      'a decrease in oxidation number of an element',
      'no change in oxidation number',
      'the element becoming a free element'
    ],
    correctIndex: 1,
    explanation: 'Reduction is defined, in terms of oxidation number, as a decrease in the oxidation number of an element, consistent with gain of electrons.',
    difficulty: 'easy'
  },
  {
    id: 'redox-31',
    type: 'mcq',
    question: 'Which of the following combination reactions is a redox reaction?',
    options: [
      'CaO(s) + CO2(g) → CaCO3(s)',
      'C(s) + O2(g) → CO2(g)',
      'NH3(g) + HCl(g) → NH4Cl(s)',
      'CaO(s) + H2O(l) → Ca(OH)2(aq)'
    ],
    correctIndex: 1,
    explanation: 'In C + O2 → CO2, carbon goes from oxidation number 0 to +4 and oxygen goes from 0 to -2, so this is a redox reaction. The other combination reactions listed involve no change in oxidation number of any element.',
    difficulty: 'medium'
  },
  {
    id: 'redox-32',
    type: 'mcq',
    question: 'Which statement about combination reactions and redox reactions is correct?',
    options: [
      'All combination reactions are redox reactions',
      'No combination reaction can be a redox reaction',
      'A combination reaction is a redox reaction only if the oxidation number of at least one element changes',
      'Combination reactions never involve elements in their free state'
    ],
    correctIndex: 2,
    explanation: 'Not all combination reactions are redox reactions; they are redox only when there is a change in oxidation number of at least one of the reacting species, as in C + O2 → CO2.',
    difficulty: 'medium'
  },
  {
    id: 'redox-33',
    type: 'mcq',
    question: 'Which of the following decomposition reactions is a redox reaction?',
    options: [
      'CaCO3(s) → CaO(s) + CO2(g)',
      '2KClO3(s) → 2KCl(s) + 3O2(g)',
      'NH4Cl(s) → NH3(g) + HCl(g)',
      '(NH4)2Cr2O7 decomposition producing only a colour change with no oxidation state change'
    ],
    correctIndex: 1,
    explanation: 'In 2KClO3 → 2KCl + 3O2, chlorine goes from +5 to -1 and oxygen goes from -2 to 0, making this a redox decomposition. CaCO3 decomposition, by contrast, involves no change in oxidation number of any element.',
    difficulty: 'medium'
  },
  {
    id: 'redox-34',
    type: 'mcq',
    question: 'A displacement reaction in which a more reactive metal displaces a less reactive metal from its salt solution, such as Zn(s) + CuSO4(aq) → ZnSO4(aq) + Cu(s), is classified as a',
    options: ['non-redox metathesis reaction', 'metal displacement redox reaction', 'disproportionation reaction', 'acid-base neutralisation reaction'],
    correctIndex: 1,
    explanation: 'Zinc is oxidised (0 to +2) while copper is reduced (+2 to 0), so this is a classic example of a metal displacement redox reaction.',
    difficulty: 'easy'
  },
  {
    id: 'redox-35',
    type: 'mcq',
    question: 'The reaction 2Na(s) + 2H2O(l) → 2NaOH(aq) + H2(g) is an example of',
    options: ['a metal displacement reaction', 'a non-metal (hydrogen) displacement reaction', 'a disproportionation reaction', 'a non-redox acid-base reaction'],
    correctIndex: 1,
    explanation: 'Sodium displaces hydrogen from water, releasing H2 gas; since hydrogen (a non-metal) is displaced, this is classified as a non-metal displacement (specifically hydrogen displacement) redox reaction.',
    difficulty: 'medium'
  },
  {
    id: 'redox-36',
    type: 'mcq',
    question: 'The reaction Cl2(g) + 2NaBr(aq) → 2NaCl(aq) + Br2(l) is an example of',
    options: ['metal displacement', 'halogen (non-metal) displacement', 'disproportionation', 'a non-redox precipitation reaction'],
    correctIndex: 1,
    explanation: 'Chlorine displaces bromine from sodium bromide because chlorine is more electronegative/reactive than bromine, making this a non-metal (halogen) displacement redox reaction.',
    difficulty: 'medium'
  },
  {
    id: 'redox-37',
    type: 'mcq',
    question: 'A disproportionation reaction is one in which',
    options: [
      'two different elements are simultaneously oxidised',
      'a single element in one oxidation state is simultaneously oxidised and reduced, forming two different oxidation states',
      'no element undergoes any change in oxidation state',
      'only reduction occurs without any accompanying oxidation'
    ],
    correctIndex: 1,
    explanation: 'In disproportionation, an element in an intermediate oxidation state is simultaneously oxidised to a higher state and reduced to a lower state, appearing in two different oxidation states among the products.',
    difficulty: 'medium'
  },
  {
    id: 'redox-38',
    type: 'mcq',
    question: 'In the reaction 2H2O2(aq) → 2H2O(l) + O2(g), the oxidation number of oxygen changes from',
    options: ['-1 to -2 and 0 (disproportionation)', '-2 to -1 only', '0 to -2 only', '+1 to -1 only'],
    correctIndex: 0,
    explanation: 'Oxygen in H2O2 is at oxidation state -1; in the products it becomes -2 in water (reduction) and 0 in O2 gas (oxidation), making this a classic disproportionation reaction.',
    difficulty: 'medium'
  },
  {
    id: 'redox-39',
    type: 'mcq',
    question: 'Which of the following reactions is an example of disproportionation?',
    options: [
      'Zn + CuSO4 → ZnSO4 + Cu',
      'Cl2 + 2NaOH(cold, dilute) → NaCl + NaOCl + H2O',
      'C + O2 → CO2',
      'CaCO3 → CaO + CO2'
    ],
    correctIndex: 1,
    explanation: 'In this reaction, chlorine (oxidation number 0) is simultaneously reduced to -1 in NaCl and oxidised to +1 in NaOCl, making it a disproportionation reaction.',
    difficulty: 'medium'
  },
  {
    id: 'redox-40',
    type: 'mcq',
    question: 'In the reaction P4 + 3NaOH + 3H2O → PH3 + 3NaH2PO2, phosphorus (initially at oxidation number 0) is converted to',
    options: [
      'only PH3, oxidation number -3',
      'only NaH2PO2, oxidation number +1',
      'both PH3 (oxidation number -3) and NaH2PO2 (oxidation number +1), a disproportionation',
      'no change in oxidation number for either product'
    ],
    correctIndex: 2,
    explanation: 'Phosphorus disproportionates: it is reduced to -3 in PH3 and oxidised to +1 in NaH2PO2, both starting from the elemental oxidation state of 0.',
    difficulty: 'hard'
  },
  {
    id: 'redox-41',
    type: 'mcq',
    question: 'The two general methods used to balance redox reactions, as covered in NCERT, are',
    options: [
      'the oxidation number method and the ion-electron (half-reaction) method',
      'the mole method and the equivalent method',
      'the graphical method and the empirical method',
      'the titration method and the gravimetric method'
    ],
    correctIndex: 0,
    explanation: 'NCERT describes two systematic approaches for balancing redox equations: the oxidation number method and the half-reaction (ion-electron) method.',
    difficulty: 'easy'
  },
  {
    id: 'redox-42',
    type: 'mcq',
    question: 'In the oxidation number method of balancing redox equations, the guiding principle is that',
    options: [
      'the total increase in oxidation number (oxidation) must equal the total decrease in oxidation number (reduction)',
      'the number of atoms of oxygen must always be doubled',
      'only hydrogen atoms need to be balanced',
      'charge balance is irrelevant'
    ],
    correctIndex: 0,
    explanation: 'The oxidation number method balances a redox equation by ensuring the total increase in oxidation number of the species oxidised equals the total decrease in oxidation number of the species reduced.',
    difficulty: 'medium'
  },
  {
    id: 'redox-43',
    type: 'mcq',
    question: 'In the ion-electron (half-reaction) method of balancing redox equations, the overall reaction is first split into',
    options: [
      'a precipitation half and a dissolution half',
      'an oxidation half-reaction and a reduction half-reaction, which are then balanced separately',
      'an acidic half and a basic half, without further steps',
      'a molecular half and an atomic half'
    ],
    correctIndex: 1,
    explanation: 'The half-reaction method splits the overall redox equation into an oxidation half-reaction and a reduction half-reaction, each balanced separately for atoms and charge before combining.',
    difficulty: 'medium'
  },
  {
    id: 'redox-44',
    type: 'mcq',
    question: 'While balancing a half-reaction in acidic medium by the ion-electron method, oxygen atoms are typically balanced by adding',
    options: ['OH- ions', 'H2O molecules', 'O2 molecules', 'H+ ions only'],
    correctIndex: 1,
    explanation: 'In acidic medium, oxygen atoms are balanced by adding H2O molecules to the side deficient in oxygen, and then hydrogen is balanced separately using H+ ions.',
    difficulty: 'medium'
  },
  {
    id: 'redox-45',
    type: 'mcq',
    question: 'While balancing a half-reaction in acidic medium by the ion-electron method, after oxygen is balanced with H2O, hydrogen atoms are balanced by adding',
    options: ['OH- ions', 'H+ ions', 'H2O molecules again', 'electrons only'],
    correctIndex: 1,
    explanation: 'After using H2O to balance oxygen atoms, hydrogen atoms are then balanced by adding H+ ions to the side deficient in hydrogen, appropriate for an acidic medium.',
    difficulty: 'medium'
  },
  {
    id: 'redox-46',
    type: 'mcq',
    question: 'When balancing a half-reaction by the ion-electron method in a basic medium, after balancing as in acidic medium, the equation is adjusted for basic conditions by adding',
    options: [
      'an equal number of OH- ions to both sides to neutralise the H+ ions present',
      'extra O2 molecules to both sides',
      'extra H+ ions to only one side',
      'nothing further is required'
    ],
    correctIndex: 0,
    explanation: 'For a basic medium, once the equation is balanced as though acidic, an equal number of OH- ions are added to both sides to neutralise H+ (forming H2O), converting the equation to a form valid in basic medium.',
    difficulty: 'hard'
  },
  {
    id: 'redox-47',
    type: 'mcq',
    question: 'After balancing atoms in each half-reaction, the final step before combining the two half-reactions is to',
    options: [
      'balance the charge on each side by adding the appropriate number of electrons',
      'multiply both half-reactions by 2 regardless of electron count',
      'remove all spectator ions',
      'convert the equation into ionic form'
    ],
    correctIndex: 0,
    explanation: 'Once atoms are balanced, electrons are added to whichever side is needed to balance the net charge, reflecting the number of electrons lost or gained in that half-reaction.',
    difficulty: 'medium'
  },
  {
    id: 'redox-48',
    type: 'mcq',
    question: 'Before adding the two balanced half-reactions together, it is necessary to',
    options: [
      'multiply each half-reaction so the number of electrons lost equals the number of electrons gained',
      'ensure both half-reactions have exactly the same number of oxygen atoms',
      'convert both half-reactions into molecular equations',
      'discard the half-reaction with fewer atoms'
    ],
    correctIndex: 0,
    explanation: 'Since electrons must cancel out when the two half-reactions are added, each is multiplied by an appropriate integer so that the number of electrons lost in oxidation equals the number gained in reduction.',
    difficulty: 'medium'
  },
  {
    id: 'redox-49',
    type: 'mcq',
    question: 'Potassium permanganate (KMnO4) is widely used as an oxidising agent in redox titrations mainly because it',
    options: [
      'is colourless in all its oxidation states',
      'acts as a self-indicator due to the distinct colour change on reduction',
      'cannot oxidise any species in acidic medium',
      'is insoluble in water'
    ],
    correctIndex: 1,
    explanation: 'KMnO4 solution is intensely purple, and upon reduction (e.g., to nearly colourless Mn2+ in acidic medium) the colour change is sharp, allowing it to act as its own indicator (self-indicator) in titrations.',
    difficulty: 'medium'
  },
  {
    id: 'redox-50',
    type: 'mcq',
    question: 'In acidic medium, potassium permanganate (MnO4-) is reduced to',
    options: ['Mn2+ (nearly colourless)', 'MnO2 (brown precipitate)', 'MnO4^2- (green)', 'Mn metal'],
    correctIndex: 0,
    explanation: 'In strongly acidic medium, permanganate is reduced all the way to the nearly colourless Mn2+ ion, which is why the endpoint (first permanent faint pink colour) is sharply visible.',
    difficulty: 'medium'
  },
  {
    id: 'redox-51',
    type: 'mcq',
    question: 'In neutral or faintly alkaline medium, potassium permanganate (MnO4-) is reduced to',
    options: ['Mn2+', 'MnO2, a brown precipitate', 'MnO4^2-, a green species', 'metallic manganese'],
    correctIndex: 1,
    explanation: 'In neutral or faintly alkaline conditions, permanganate is reduced only to MnO2, which appears as a brown precipitate, rather than being reduced all the way to Mn2+.',
    difficulty: 'hard'
  },
  {
    id: 'redox-52',
    type: 'mcq',
    question: 'In strongly alkaline medium, potassium permanganate (MnO4-) is reduced to',
    options: ['Mn2+', 'MnO2', 'the green manganate ion, MnO4^2-', 'Mn3+'],
    correctIndex: 2,
    explanation: 'Under strongly alkaline conditions, permanganate is reduced only to the green manganate ion MnO4^2-, rather than to lower oxidation states.',
    difficulty: 'hard'
  },
  {
    id: 'redox-53',
    type: 'mcq',
    question: 'Potassium dichromate (K2Cr2O7) is used in redox titrations and, upon reduction in acidic medium, changes colour from',
    options: ['colourless to purple', 'orange to green, as Cr(VI) is reduced to Cr(III)', 'green to orange', 'blue to yellow'],
    correctIndex: 1,
    explanation: 'The orange dichromate ion (Cr in +6 state) is reduced to the green Cr3+ ion in acidic medium, giving a characteristic orange-to-green colour change.',
    difficulty: 'medium'
  },
  {
    id: 'redox-54',
    type: 'mcq',
    question: 'Iodometric titrations, which involve titrating liberated iodine against sodium thiosulphate solution, typically use which indicator?',
    options: ['Phenolphthalein', 'Methyl orange', 'Starch, which gives a blue-black colour with iodine that disappears at the endpoint', 'Litmus'],
    correctIndex: 2,
    explanation: 'Starch forms an intense blue-black complex with iodine; as thiosulphate consumes the remaining iodine near the endpoint, this colour disappears sharply, marking the endpoint of an iodometric titration.',
    difficulty: 'medium'
  },
  {
    id: 'redox-55',
    type: 'mcq',
    question: 'The standard hydrogen electrode (SHE) is assigned a standard reduction potential of',
    options: ['+1.00 V', '-1.00 V', '0.00 V, by convention', 'undefined'],
    correctIndex: 2,
    explanation: 'By international convention, the standard hydrogen electrode is assigned a standard reduction potential of exactly 0.00 V, serving as the reference point for all other electrode potentials.',
    difficulty: 'easy'
  },
  {
    id: 'redox-56',
    type: 'mcq',
    question: 'A species with a higher (more positive) standard reduction potential compared to another species is generally a',
    options: ['stronger reducing agent', 'stronger oxidising agent, since it has a greater tendency to get reduced', 'weaker oxidising agent', 'chemically inert species'],
    correctIndex: 1,
    explanation: 'A more positive standard reduction potential indicates a greater tendency of that species to be reduced (gain electrons), making it a stronger oxidising agent.',
    difficulty: 'medium'
  },
  {
    id: 'redox-57',
    type: 'mcq',
    question: 'A species with a highly negative standard reduction potential is generally a',
    options: ['strong oxidising agent', 'strong reducing agent, since it readily loses electrons (is easily oxidised)', 'chemically unreactive species', 'weak acid'],
    correctIndex: 1,
    explanation: 'A very negative standard reduction potential indicates the species has little tendency to be reduced and instead readily loses electrons, making it a strong reducing agent.',
    difficulty: 'medium'
  },
  {
    id: 'redox-58',
    type: 'mcq',
    question: 'Among common oxidising agents, fluorine (F2) is regarded as one of the strongest because it has',
    options: ['the lowest standard reduction potential among halogens', 'a highly negative standard reduction potential', 'the highest (most positive) standard reduction potential among common oxidants', 'no tendency to accept electrons'],
    correctIndex: 2,
    explanation: 'Fluorine has one of the highest standard reduction potentials among commonly encountered species, reflecting its exceptionally strong tendency to be reduced (gain an electron), making it one of the strongest oxidising agents.',
    difficulty: 'medium'
  },
  {
    id: 'redox-59',
    type: 'mcq',
    question: 'Lithium is considered an exceptionally strong reducing agent in aqueous solution, despite its relatively unfavourable ionisation enthalpy compared to other alkali metals, mainly because of its',
    options: [
      'very low melting point',
      'exceptionally high enthalpy of hydration of Li+ ions',
      'large atomic radius',
      'high electron affinity'
    ],
    correctIndex: 1,
    explanation: 'Lithium\'s small ionic size gives Li+ a very high hydration enthalpy in water, which more than compensates for its relatively high ionisation enthalpy, making it the strongest reducing agent among alkali metals in aqueous medium.',
    difficulty: 'hard'
  },
  {
    id: 'redox-60',
    type: 'mcq',
    question: 'An electrochemical series arranges elements (or ions) in order of their',
    options: [
      'atomic radii',
      'standard reduction potentials',
      'electronegativity values only',
      'melting points'
    ],
    correctIndex: 1,
    explanation: 'The electrochemical series lists elements or half-reactions in order of increasing (or decreasing) standard reduction potential, allowing prediction of relative oxidising and reducing strength.',
    difficulty: 'easy'
  },
  {
    id: 'redox-61',
    type: 'mcq',
    question: 'One major limitation of the oxidation number concept is that',
    options: [
      'it always gives whole-number values, which is inconvenient',
      'it can give fractional or average values that do not represent the actual charge distribution in the molecule',
      'it cannot be applied to ionic compounds',
      'it applies only to organic compounds'
    ],
    correctIndex: 1,
    explanation: 'In some compounds, the oxidation number calculated is only an average across chemically non-equivalent atoms of the same element, which does not accurately depict the actual bonding or charge distribution.',
    difficulty: 'hard'
  },
  {
    id: 'redox-62',
    type: 'mcq',
    question: 'In sodium thiosulphate (Na2S2O3), the average oxidation number of sulphur is +2, but this is a limitation of the concept because',
    options: [
      'the actual two sulphur atoms exist in genuinely different oxidation states (approximately -1 and +5), not both at +2',
      'sulphur cannot show an oxidation number of +2 at all',
      'sodium thiosulphate does not actually contain sulphur',
      'the oxidation number of sulphur is always exactly +6 in every compound'
    ],
    correctIndex: 0,
    explanation: 'The two sulphur atoms in the thiosulphate ion are structurally non-equivalent, with actual oxidation states around -1 (terminal S) and +5 (central S); the calculated average of +2 masks this real difference, illustrating a key limitation of the oxidation number concept.',
    difficulty: 'hard'
  },
  {
    id: 'redox-63',
    type: 'mcq',
    question: 'Which of the following is a correct example illustrating a limitation of the oxidation number concept giving only an average value?',
    options: [
      'Oxidation number of Na in NaCl is +1',
      'Average oxidation number of Fe in Fe3O4, which actually contains a mixture of Fe2+ and Fe3+ ions',
      'Oxidation number of Cl in Cl2 is 0',
      'Oxidation number of O in H2O is -2'
    ],
    correctIndex: 1,
    explanation: 'Fe3O4 is a mixed oxide containing Fe2+ and Fe3+ ions in a 1:2 ratio; the calculated average oxidation number of +8/3 for iron does not represent an actual single oxidation state, exposing a limitation of the concept.',
    difficulty: 'hard'
  },
  {
    id: 'redox-64',
    type: 'mcq',
    question: 'The oxidation number of phosphorus in white phosphorus (P4), before it reacts, is',
    options: ['+3', '-3', '0, since it is in its elemental form', '+5'],
    correctIndex: 2,
    explanation: 'As an elemental (uncombined) form of phosphorus, P4 has each phosphorus atom at oxidation number zero.',
    difficulty: 'easy'
  },
  {
    id: 'redox-65',
    type: 'mcq',
    question: 'Which of the following pairs correctly identifies the oxidising agent and reducing agent, respectively, in the reaction Zn(s) + CuSO4(aq) → ZnSO4(aq) + Cu(s)?',
    options: [
      'Zn is the oxidising agent, Cu2+ is the reducing agent',
      'Cu2+ is the oxidising agent, Zn is the reducing agent',
      'Both Zn and Cu2+ act as oxidising agents',
      'Neither species acts as an oxidising or reducing agent'
    ],
    correctIndex: 1,
    explanation: 'Cu2+ gains electrons (is reduced to Cu), so it is the oxidising agent; Zn loses electrons (is oxidised to Zn2+), so it is the reducing agent.',
    difficulty: 'easy'
  },
  {
    id: 'redox-66',
    type: 'mcq',
    question: 'Which of the following statements about a species acting simultaneously as both an oxidising agent and reducing agent (disproportionation) is correct?',
    options: [
      'This can only happen for species already in their highest possible oxidation state',
      'This can only happen for species already in their lowest possible oxidation state',
      'This requires the element to be in an intermediate oxidation state, so it has scope to be both oxidised (to a higher state) and reduced (to a lower state)',
      'Disproportionation reactions never actually occur in nature'
    ],
    correctIndex: 2,
    explanation: 'For a species to disproportionate, it must be in an intermediate oxidation state so that some of it can be pushed to a higher oxidation state (oxidation) while the rest goes to a lower oxidation state (reduction).',
    difficulty: 'medium'
  },
  {
    id: 'redox-67',
    type: 'mcq',
    question: 'The oxidation number of nitrogen in ammonia (NH3) is',
    options: ['+3', '-3', '0', '+5'],
    correctIndex: 1,
    explanation: 'Taking H as +1: N + 3(+1) = 0, giving N = -3.',
    difficulty: 'easy'
  },
  {
    id: 'redox-68',
    type: 'mcq',
    question: 'The oxidation number of sulphur in sodium thiosulphate, Na2S2O3, calculated on an average basis, is',
    options: ['+2', '+4', '+6', '0'],
    correctIndex: 0,
    explanation: 'Taking Na as +1 and O as -2: 2(+1) + 2S + 3(-2) = 0, giving 2S = +4, so average S = +2 (though the two sulphur atoms are not actually chemically equivalent).',
    difficulty: 'hard'
  },
  {
    id: 'redox-69',
    type: 'mcq',
    question: 'In the reaction 3Cl2 + 6NaOH(hot, concentrated) → 5NaCl + NaClO3 + 3H2O, chlorine (oxidation number 0) disproportionates into',
    options: [
      'Cl- (oxidation number -1) and ClO3- (oxidation number +5)',
      'Cl- (oxidation number -1) only',
      'ClO3- (oxidation number +5) only',
      'Cl2 remains unreacted with no change in oxidation state'
    ],
    correctIndex: 0,
    explanation: 'In hot, concentrated alkali, chlorine disproportionates further than in cold dilute alkali, going to Cl- (-1) in NaCl and to ClO3- (+5) in NaClO3.',
    difficulty: 'hard'
  },
  {
    id: 'redox-70',
    type: 'mcq',
    question: 'Redox reactions form the chemical basis of titrations used to determine the concentration of an unknown solution because',
    options: [
      'the reaction between the oxidising and reducing agents proceeds in definite, stoichiometric electron-transfer proportions that can be tracked to an observable endpoint',
      'redox reactions never reach completion',
      'oxidising and reducing agents cannot react with each other in solution',
      'redox indicators change colour randomly, unrelated to concentration'
    ],
    correctIndex: 0,
    explanation: 'Because oxidising and reducing agents react in definite stoichiometric ratios based on electron transfer, and because this can often be monitored via a colour change (self-indicating or with an indicator), redox reactions are well suited as the basis for quantitative titrations.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'redox-71',
    type: 'assertion-reason',
    question: 'Assertion (A): In the reaction C(s) + O2(g) → CO2(g), carbon is oxidised.\nReason (R): The oxidation number of carbon increases from 0 to +4 in this reaction.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'An increase in oxidation number corresponds directly to oxidation, and this rise from 0 to +4 for carbon correctly explains why carbon is oxidised in this reaction.',
    difficulty: 'medium'
  },
  {
    id: 'redox-72',
    type: 'assertion-reason',
    question: 'Assertion (A): Oxidation number of oxygen is -1 in hydrogen peroxide.\nReason (R): In H2O2, the two oxygen atoms are directly bonded to each other, so the -2 charge conventionally assigned to oxygen is shared equally between the two oxygen atoms.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The O-O bond in the peroxide linkage means each oxygen shares the -2 total between both atoms, correctly giving each an oxidation number of -1 — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'redox-73',
    type: 'assertion-reason',
    question: 'Assertion (A): Fluorine always has an oxidation number of -1 in all its compounds.\nReason (R): Fluorine is the most electronegative element and therefore always attracts the shared electron pair(s) towards itself.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Because fluorine has the highest electronegativity of all elements, it always pulls bonding electrons toward itself in any compound, giving it a constant oxidation number of -1 — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'redox-74',
    type: 'assertion-reason',
    question: 'Assertion (A): Not all combination reactions are redox reactions.\nReason (R): In the reaction CaO(s) + CO2(g) → CaCO3(s), no element undergoes any change in oxidation number.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This specific example demonstrates a combination reaction that is not redox because oxidation numbers remain unchanged for all species, directly supporting the general assertion.',
    difficulty: 'medium'
  },
  {
    id: 'redox-75',
    type: 'assertion-reason',
    question: 'Assertion (A): The decomposition of CaCO3 into CaO and CO2 is not a redox reaction.\nReason (R): None of the elements (Ca, C, O) undergo any change in oxidation number during this decomposition.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since oxidation number remains unchanged for calcium, carbon, and oxygen throughout this decomposition, it correctly confirms and explains why this reaction is not classified as redox.',
    difficulty: 'medium'
  },
  {
    id: 'redox-76',
    type: 'assertion-reason',
    question: 'Assertion (A): The reaction 2KClO3(s) → 2KCl(s) + 3O2(g) is a redox reaction.\nReason (R): Chlorine changes from oxidation number +5 to -1, and oxygen changes from -2 to 0, during this decomposition.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'These clear changes in oxidation number for both chlorine and oxygen directly confirm that this decomposition reaction is indeed a redox reaction, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'redox-77',
    type: 'assertion-reason',
    question: 'Assertion (A): In Zn(s) + CuSO4(aq) → ZnSO4(aq) + Cu(s), zinc acts as the reducing agent.\nReason (R): Zinc loses electrons and its oxidation number increases from 0 to +2 in this reaction.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Because zinc loses electrons (is oxidised), it causes reduction of copper ions, making it the reducing agent, and the rise in its oxidation number correctly explains this role.',
    difficulty: 'easy'
  },
  {
    id: 'redox-78',
    type: 'assertion-reason',
    question: 'Assertion (A): A disproportionation reaction requires an element to be in one of its extreme (highest or lowest) possible oxidation states.\nReason (R): In disproportionation, the same element is simultaneously oxidised and reduced.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — an element must be in an intermediate oxidation state for disproportionation, not at an extreme state, since it needs the ability to go both up and down. R itself is a true general definition of disproportionation.',
    difficulty: 'hard'
  },
  {
    id: 'redox-79',
    type: 'assertion-reason',
    question: 'Assertion (A): In 2H2O2 → 2H2O + O2, hydrogen peroxide undergoes disproportionation.\nReason (R): Oxygen in H2O2 (oxidation number -1) is simultaneously reduced to -2 in water and oxidised to 0 in O2 gas.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The described simultaneous reduction and oxidation of oxygen atoms starting from the same intermediate oxidation state (-1) directly explains why this reaction is a disproportionation.',
    difficulty: 'medium'
  },
  {
    id: 'redox-80',
    type: 'assertion-reason',
    question: 'Assertion (A): The oxidation number method and the ion-electron method both give the same balanced redox equation for a given reaction.\nReason (R): Both methods are ultimately based on the principle of conservation of mass and charge, applied through different bookkeeping approaches.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since both methods enforce the same underlying conservation laws (mass and charge/electron balance), even though the mechanics differ, they must arrive at the same final balanced equation — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'redox-81',
    type: 'assertion-reason',
    question: 'Assertion (A): While balancing a redox half-reaction in acidic medium, oxygen atoms are balanced using H2O molecules.\nReason (R): H2O molecules provide a convenient source of oxygen atoms without introducing extra charged species initially.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'H2O is a neutral molecule, so adding it to balance oxygen does not disturb the charge balance at that stage, and only afterward is charge balanced separately using H+ and electrons, correctly explaining the method.',
    difficulty: 'medium'
  },
  {
    id: 'redox-82',
    type: 'assertion-reason',
    question: 'Assertion (A): For a half-reaction being balanced in basic medium, OH- ions are added after balancing the reaction as if it were in acidic medium.\nReason (R): Adding equal OH- ions to both sides neutralises the H+ ions present, converting them into water, making the equation valid for a basic environment.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Adding OH- to neutralise the H+ already present (forming H2O) is exactly the mechanism used to adapt an acid-balanced equation for basic medium, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'redox-83',
    type: 'assertion-reason',
    question: 'Assertion (A): Potassium permanganate acts as a self-indicator in redox titrations.\nReason (R): The intense purple colour of MnO4- disappears sharply on reduction, providing a visible endpoint without needing an external indicator.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The sharp colour change from deep purple to nearly colourless (in acidic medium) upon reduction of permanganate is exactly why it does not require a separate indicator — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'redox-84',
    type: 'assertion-reason',
    question: 'Assertion (A): In acidic medium, KMnO4 is reduced all the way to Mn2+.\nReason (R): In neutral or faintly alkaline medium, KMnO4 is also reduced all the way to Mn2+.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 2,
    explanation: 'A is true. R is false — in neutral or faintly alkaline medium, permanganate is reduced only to MnO2 (a brown precipitate), not all the way to Mn2+.',
    difficulty: 'hard'
  },
  {
    id: 'redox-85',
    type: 'assertion-reason',
    question: 'Assertion (A): The colour of K2Cr2O7 solution changes from orange to green during a redox titration in acidic medium.\nReason (R): Chromium is reduced from the +6 oxidation state (in Cr2O7^2-) to the +3 oxidation state (as Cr3+).',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This reduction of chromium from +6 to +3 is exactly what produces the characteristic orange-to-green colour change observed during dichromate titrations — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'redox-86',
    type: 'assertion-reason',
    question: 'Assertion (A): Starch is used as an indicator in iodometric titrations.\nReason (R): Starch forms an intense blue-black complex with iodine, which disappears once all the iodine has reacted, marking a sharp endpoint.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The disappearance of the deep blue-black starch-iodine complex provides a very sensitive and sharp visual endpoint, which is exactly why starch is the indicator of choice for iodometric titrations — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'redox-87',
    type: 'assertion-reason',
    question: 'Assertion (A): The standard hydrogen electrode is assigned a potential of exactly 0.00 V.\nReason (R): This value is a defined reference point, chosen by convention, against which all other standard electrode potentials are measured.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The 0.00 V value is not measured but assigned by international convention as a fixed reference, and this convention is exactly why all other electrode potentials are reported relative to it — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'redox-88',
    type: 'assertion-reason',
    question: 'Assertion (A): Fluorine is one of the strongest oxidising agents among common elements.\nReason (R): Fluorine has one of the most positive standard reduction potentials, indicating a strong tendency to accept electrons and get reduced.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'A high standard reduction potential directly indicates a strong drive to be reduced, which is the very definition of a strong oxidising agent — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'redox-89',
    type: 'assertion-reason',
    question: 'Assertion (A): Lithium metal is considered the strongest reducing agent among the alkali metals in aqueous solution.\nReason (R): Lithium has the lowest ionisation enthalpy among alkali metals, making it lose electrons most easily in the gas phase.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is true, but R is false — lithium actually has a relatively high (not the lowest) ionisation enthalpy among alkali metals; its exceptional reducing strength in water arises instead from the very high hydration enthalpy of the small Li+ ion.',
    difficulty: 'hard'
  },
  {
    id: 'redox-90',
    type: 'assertion-reason',
    question: 'Assertion (A): The oxidation number concept has certain limitations when applied to some compounds.\nReason (R): In compounds like Na2S2O3 and Fe3O4, calculated oxidation numbers represent only an average, not the actual, chemically distinct oxidation states present.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'These specific examples of averaged, non-representative oxidation numbers are the exact reason the oxidation number concept is considered to have limitations — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'redox-91',
    type: 'assertion-reason',
    question: 'Assertion (A): Redox reactions can serve as the basis for quantitative titrations.\nReason (R): Oxidising and reducing agents react with each other in stoichiometrically fixed ratios based on electron transfer, allowing concentration calculations from a measured endpoint.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The fixed stoichiometric relationship based on electron transfer is precisely what allows a redox titration to determine an unknown concentration from a measured volume at the endpoint — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'redox-92',
    type: 'assertion-reason',
    question: 'Assertion (A): The oxidation number of hydrogen is -1 in NaH.\nReason (R): Sodium is less electronegative than hydrogen, so hydrogen attracts the shared electron pair towards itself in this bond.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since sodium is less electronegative, hydrogen behaves as the more electronegative partner in NaH and is assigned the negative oxidation number of -1 — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'redox-93',
    type: 'assertion-reason',
    question: 'Assertion (A): In OF2, oxygen is assigned a positive oxidation number of +2.\nReason (R): Fluorine is more electronegative than oxygen, so oxygen effectively loses electron density to fluorine in this compound.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Because fluorine\'s higher electronegativity gives it priority in claiming the negative oxidation number, oxygen is left with a positive oxidation number in this specific compound — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'redox-94',
    type: 'assertion-reason',
    question: 'Assertion (A): The reaction Cl2 + 2NaOH(cold, dilute) → NaCl + NaOCl + H2O is a disproportionation reaction.\nReason (R): Chlorine, starting at oxidation number 0, is simultaneously reduced to -1 in NaCl and oxidised to +1 in NaOCl.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This simultaneous change of the same element (chlorine) to both a lower and a higher oxidation state is exactly the definition of disproportionation, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'redox-95',
    type: 'assertion-reason',
    question: 'Assertion (A): All displacement reactions are redox reactions.\nReason (R): In a displacement reaction, one element replaces another in a compound, and this always involves a change in oxidation number for the elements involved.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since a displacement reaction inherently involves one element (in free or combined form) taking the place of another, this replacement is always accompanied by oxidation number changes, confirming both A and R.',
    difficulty: 'medium'
  },
  {
    id: 'redox-96',
    type: 'assertion-reason',
    question: 'Assertion (A): Oxidation numbers are always whole numbers.\nReason (R): Oxidation numbers are calculated as an average across all atoms of the same element in a formula unit, and averaging chemically non-equivalent atoms can give a fractional value.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — oxidation numbers can indeed be fractional (e.g. +8/3 for Fe in Fe3O4). R is a true statement correctly explaining why such fractional values arise, even though A itself is incorrect.',
    difficulty: 'hard'
  },
  {
    id: 'redox-97',
    type: 'assertion-reason',
    question: 'Assertion (A): The sum of oxidation numbers of all atoms in the sulphate ion, SO4^2-, equals -2.\nReason (R): The sum of oxidation numbers of atoms in any polyatomic ion equals the net charge on that ion.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Applying the general rule stated in R directly to the sulphate ion (charge -2) gives exactly the result in A, so R correctly explains A.',
    difficulty: 'easy'
  },
  {
    id: 'redox-98',
    type: 'assertion-reason',
    question: 'Assertion (A): In the reaction Zn + 2HCl → ZnCl2 + H2, zinc acts as the reducing agent.\nReason (R): Hydrogen ions are reduced to hydrogen gas, and zinc metal is simultaneously oxidised to Zn2+ ions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since zinc is oxidised (losing electrons to reduce H+ to H2), it is by definition acting as the reducing agent, and this description in R directly explains A.',
    difficulty: 'easy'
  },
  {
    id: 'redox-99',
    type: 'assertion-reason',
    question: 'Assertion (A): The ion-electron method can be used to balance redox reactions occurring in basic medium, not just acidic medium.\nReason (R): The half-reaction is first balanced as though in acidic medium, and then equal numbers of OH- ions are added to both sides to neutralise any H+ present, adapting it for basic conditions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The described OH-/H2O adjustment step is exactly the standard technique that extends the ion-electron method to basic medium, correctly explaining why A is true.',
    difficulty: 'hard'
  },
  {
    id: 'redox-100',
    type: 'assertion-reason',
    question: 'Assertion (A): Disproportionation reactions are a special category of redox reactions.\nReason (R): They involve intermolecular electron transfer between two different elements rather than within the same element.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 2,
    explanation: 'A is true — disproportionation is indeed a special type of redox reaction. R is false, since disproportionation specifically involves the same element being both oxidised and reduced, not two different elements.',
    difficulty: 'medium'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'redox-101',
    type: 'statement',
    question: 'Statement I: Oxidation, in the electronic concept, involves loss of electrons.\nStatement II: Reduction, in the electronic concept, involves gain of electrons.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly define oxidation and reduction according to the electronic concept: oxidation is loss of electrons, reduction is gain of electrons.',
    difficulty: 'easy'
  },
  {
    id: 'redox-102',
    type: 'statement',
    question: 'Statement I: The oxidation number of hydrogen is always +1 in every compound.\nStatement II: The oxidation number of oxygen is always -2 in every compound.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect as absolute rules — hydrogen is -1 in metal hydrides, and oxygen deviates from -2 in peroxides (-1), superoxides, and OF2 (+2). These are well-known exceptions.',
    difficulty: 'medium'
  },
  {
    id: 'redox-103',
    type: 'statement',
    question: 'Statement I: The oxidation number of an atom in its free elemental state is always zero.\nStatement II: The oxidation number of a monoatomic ion equals the charge on that ion.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly state the standard rules for assigning oxidation numbers to free elements and to monoatomic ions.',
    difficulty: 'easy'
  },
  {
    id: 'redox-104',
    type: 'statement',
    question: 'Statement I: All combination reactions are necessarily redox reactions.\nStatement II: All decomposition reactions are necessarily redox reactions.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — combination reactions like CaO + CO2 → CaCO3, and decomposition reactions like CaCO3 → CaO + CO2, involve no change in oxidation number and are therefore not redox reactions.',
    difficulty: 'medium'
  },
  {
    id: 'redox-105',
    type: 'statement',
    question: 'Statement I: In a metal displacement reaction, a more reactive metal displaces a less reactive metal from its salt solution.\nStatement II: In a non-metal displacement reaction, one non-metal such as hydrogen or a halogen is displaced by a more reactive element.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the two categories of displacement reactions — metal displacement and non-metal (e.g. hydrogen or halogen) displacement.',
    difficulty: 'medium'
  },
  {
    id: 'redox-106',
    type: 'statement',
    question: 'Statement I: Disproportionation reactions require the element undergoing the change to be in an intermediate oxidation state.\nStatement II: In disproportionation, the same element is simultaneously oxidised and reduced.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and consistent — an intermediate oxidation state is needed precisely because the same element must be able to go both up and down in oxidation number during disproportionation.',
    difficulty: 'medium'
  },
  {
    id: 'redox-107',
    type: 'statement',
    question: 'Statement I: The oxidation number method balances redox reactions by equating the total increase and total decrease in oxidation number.\nStatement II: The ion-electron method balances redox reactions by first separating the reaction into oxidation and reduction half-reactions.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the two standard methods for balancing redox equations as taught in NCERT.',
    difficulty: 'easy'
  },
  {
    id: 'redox-108',
    type: 'statement',
    question: 'Statement I: In the ion-electron method for acidic medium, oxygen atoms are balanced first using H2O.\nStatement II: Hydrogen atoms are then balanced using H+ ions after oxygen has been balanced.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the sequential steps of balancing atoms (oxygen with H2O, then hydrogen with H+) in the ion-electron method for acidic medium.',
    difficulty: 'medium'
  },
  {
    id: 'redox-109',
    type: 'statement',
    question: 'Statement I: For a half-reaction in basic medium, OH- ions are added at the very start, before any other balancing is done.\nStatement II: The reaction is first balanced as though in acidic medium, and OH- ions are added only in the final step.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — OH- ions are not added first. Statement II correctly describes the standard procedure: balance as if in acidic medium, then neutralise any H+ present by adding equal OH- ions at the end.',
    difficulty: 'hard'
  },
  {
    id: 'redox-110',
    type: 'statement',
    question: 'Statement I: Potassium permanganate can act as a self-indicator in redox titrations.\nStatement II: Potassium dichromate can also act as a self-indicator, sharply and unambiguously, in the same way as potassium permanganate.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — KMnO4 shows a sharp, self-indicating colour change. Statement II is generally considered incorrect in the NCERT context, since dichromate titrations typically rely on an external indicator such as diphenylamine for a sharp endpoint.',
    difficulty: 'hard'
  },
  {
    id: 'redox-111',
    type: 'statement',
    question: 'Statement I: KMnO4 is reduced to Mn2+ in acidic medium.\nStatement II: KMnO4 is reduced to MnO2 in neutral or faintly alkaline medium.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the different reduction products of permanganate depending on the medium — Mn2+ in acidic medium, and MnO2 (brown) in neutral/faintly alkaline medium.',
    difficulty: 'medium'
  },
  {
    id: 'redox-112',
    type: 'statement',
    question: 'Statement I: Starch is added as an indicator near the end of an iodometric titration.\nStatement II: Starch is added at the very start of an iodometric titration for the sharpest possible endpoint.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — starch indicator is conventionally added near the end of the titration (when the iodine colour has faded to a pale yellow) for the sharpest colour-change endpoint. Statement II is incorrect for standard practice.',
    difficulty: 'hard'
  },
  {
    id: 'redox-113',
    type: 'statement',
    question: 'Statement I: The standard hydrogen electrode has a standard reduction potential of 0.00 V by convention.\nStatement II: All standard electrode potentials are measured relative to the standard hydrogen electrode.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the reference role of the standard hydrogen electrode in the electrochemical series.',
    difficulty: 'easy'
  },
  {
    id: 'redox-114',
    type: 'statement',
    question: 'Statement I: A species with a highly positive standard reduction potential is a strong oxidising agent.\nStatement II: A species with a highly negative standard reduction potential is a strong reducing agent.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct, following directly from the definitions of oxidising and reducing strength in relation to standard reduction potential.',
    difficulty: 'easy'
  },
  {
    id: 'redox-115',
    type: 'statement',
    question: 'Statement I: Lithium has the most favourable (least positive) ionisation enthalpy among alkali metals.\nStatement II: Lithium is nonetheless the strongest reducing agent among alkali metals in aqueous solution due to the very high hydration enthalpy of the small Li+ ion.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — lithium actually has a relatively high ionisation enthalpy among alkali metals, not the lowest. Statement II is correct — its exceptional reducing power in water is due to high hydration enthalpy compensating for this.',
    difficulty: 'hard'
  },
  {
    id: 'redox-116',
    type: 'statement',
    question: 'Statement I: Oxidation numbers can sometimes be fractional, representing an average over chemically distinct atoms of the same element.\nStatement II: This averaging is one of the recognised limitations of the oxidation number concept.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and connected — fractional/averaged oxidation numbers arising from chemically non-equivalent atoms of the same element is exactly why this is considered a limitation of the concept.',
    difficulty: 'medium'
  },
  {
    id: 'redox-117',
    type: 'statement',
    question: 'Statement I: In Fe3O4, the average oxidation number of iron is +8/3.\nStatement II: Fe3O4 actually contains iron only as Fe3+ ions, with no Fe2+ present.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I correctly gives the calculated average oxidation number. Statement II is incorrect — Fe3O4 actually contains a mixture of Fe2+ and Fe3+ ions, not exclusively Fe3+.',
    difficulty: 'hard'
  },
  {
    id: 'redox-118',
    type: 'statement',
    question: 'Statement I: In sodium thiosulphate, the two sulphur atoms are chemically equivalent, each genuinely at oxidation state +2.\nStatement II: The two sulphur atoms in thiosulphate actually exist at different oxidation states, roughly -1 and +5.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the two sulphur atoms are not chemically equivalent. Statement II correctly reflects the actual structure, where the average oxidation number of +2 masks two genuinely different sulphur environments.',
    difficulty: 'hard'
  },
  {
    id: 'redox-119',
    type: 'statement',
    question: 'Statement I: The oxidising agent in a redox reaction is itself reduced.\nStatement II: The reducing agent in a redox reaction is itself oxidised.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the fate of the oxidising agent (reduced) and reducing agent (oxidised) in any redox reaction.',
    difficulty: 'easy'
  },
  {
    id: 'redox-120',
    type: 'statement',
    question: 'Statement I: Redox titrations rely on measurable stoichiometric electron transfer between an oxidising agent and a reducing agent.\nStatement II: The endpoint of a redox titration can sometimes be identified by a colour change without adding a separate indicator, if one of the reagents itself changes colour on reaction.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the basis of redox titrations and the concept of self-indicating reagents such as KMnO4.',
    difficulty: 'medium'
  },
  {
    id: 'redox-121',
    type: 'statement',
    question: 'Statement I: The oxidation number of sulphur in H2SO4 is +6.\nStatement II: The oxidation number of nitrogen in HNO3 is +5.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct, obtained by applying the standard oxidation number rules with H at +1 and O at -2.',
    difficulty: 'medium'
  },
  {
    id: 'redox-122',
    type: 'statement',
    question: 'Statement I: In Cl2 + 2NaOH(cold, dilute) → NaCl + NaOCl + H2O, chlorine is both oxidised and reduced.\nStatement II: This reaction is an example of a metal displacement reaction.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — this is a disproportionation reaction where chlorine is simultaneously oxidised and reduced. Statement II is incorrect — no metal is being displaced here; this is not a displacement reaction.',
    difficulty: 'medium'
  },
  {
    id: 'redox-123',
    type: 'statement',
    question: 'Statement I: Oxidation numbers must always sum to zero for any chemical species, whether neutral or charged.\nStatement II: Oxidation numbers sum to the net charge of the species, which is zero only for neutral molecules.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect as a general rule, since charged species (ions) sum to their net charge, not zero. Statement II correctly generalises the rule for both neutral molecules and ions.',
    difficulty: 'medium'
  },
  {
    id: 'redox-124',
    type: 'statement',
    question: 'Statement I: A more reactive halogen can displace a less reactive halogen from its salt in solution.\nStatement II: This type of reaction is classified as a metal displacement reaction.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct, as seen in reactions like Cl2 + 2NaBr → 2NaCl + Br2. Statement II is incorrect — since halogens are non-metals, this is classified as a non-metal (halogen) displacement reaction, not a metal displacement reaction.',
    difficulty: 'medium'
  },
  {
    id: 'redox-125',
    type: 'statement',
    question: 'Statement I: The oxidation number method requires identifying which atoms undergo a change in oxidation number.\nStatement II: The ion-electron method requires writing separate balanced half-reactions before combining them.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe key procedural steps of the two standard redox-balancing methods.',
    difficulty: 'medium'
  },
  {
    id: 'redox-126',
    type: 'statement',
    question: 'Statement I: The oxidation number of oxygen in a superoxide ion (such as in KO2) is -1.\nStatement II: The oxidation number of oxygen in a superoxide ion is -1/2.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the -1 value applies to peroxides, not superoxides. Statement II is correct — in a superoxide ion (O2-), the net -1 charge is shared equally between the two oxygen atoms, giving each -1/2.',
    difficulty: 'hard'
  },
  {
    id: 'redox-127',
    type: 'statement',
    question: 'Statement I: A redox reaction always involves a net transfer of electrons from the reducing agent to the oxidising agent.\nStatement II: In terms of oxidation number, this corresponds to an increase in oxidation number for the reducing agent and a decrease for the oxidising agent.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly and consistently describe electron transfer in redox reactions and its representation via oxidation number changes.',
    difficulty: 'medium'
  },
  {
    id: 'redox-128',
    type: 'statement',
    question: 'Statement I: Elements in Group 1 (alkali metals) generally show only one common oxidation state, +1, in their compounds.\nStatement II: Elements in Group 2 (alkaline earth metals) generally show only one common oxidation state, +2, in their compounds.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the near-universal single oxidation states shown by alkali metals (+1) and alkaline earth metals (+2) in their compounds.',
    difficulty: 'easy'
  },
  {
    id: 'redox-129',
    type: 'statement',
    question: 'Statement I: The reaction P4 + 3NaOH + 3H2O → PH3 + 3NaH2PO2 is an example of disproportionation.\nStatement II: In this reaction, phosphorus is simultaneously reduced to -3 in PH3 and oxidised to +1 in NaH2PO2.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — this reaction is a well-known example of disproportionation in which elemental phosphorus (0) simultaneously undergoes reduction and oxidation to two different products.',
    difficulty: 'hard'
  },
  {
    id: 'redox-130',
    type: 'statement',
    question: 'Statement I: A displacement reaction always involves a change in the physical state of the elements involved.\nStatement II: A displacement reaction always involves a redox change, since one element takes the place of another based on relative reactivity.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — a change in physical state is not a defining requirement of displacement reactions. Statement II is correct — displacement inherently involves electron transfer as one element takes over a position from another.',
    difficulty: 'medium'
  },

  // ==================== HOW-MANY (20) ====================
  {
    id: 'redox-131',
    type: 'how-many',
    question: 'How many of the following statements about oxidation number assignment rules are correct?\n1. Oxidation number of an element in its free state is zero.\n2. Oxidation number of a monoatomic ion equals its charge.\n3. Oxidation number of oxygen is always exactly -2 in every compound without exception.\n4. Oxidation number of fluorine is always -1 in every compound.\n5. Sum of oxidation numbers in a neutral molecule is zero.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, 4, and 5 are correct standard rules. Statement 3 is false — oxygen shows exceptions in peroxides (-1), superoxides (-1/2), and OF2 (+2). So 4 statements are correct.',
    difficulty: 'medium'
  },
  {
    id: 'redox-132',
    type: 'how-many',
    question: 'How many of the following reactions are classified as redox reactions?\n1. C(s) + O2(g) → CO2(g)\n2. CaO(s) + CO2(g) → CaCO3(s)\n3. 2KClO3(s) → 2KCl(s) + 3O2(g)\n4. CaCO3(s) → CaO(s) + CO2(g)\n5. Zn(s) + CuSO4(aq) → ZnSO4(aq) + Cu(s)',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Reactions 1, 3, and 5 involve changes in oxidation number and are redox reactions. Reactions 2 and 4 involve no change in oxidation number of any element, so they are not redox reactions. 3 are correct.',
    difficulty: 'medium'
  },
  {
    id: 'redox-133',
    type: 'how-many',
    question: 'How many of the following statements about oxidising and reducing agents are correct?\n1. An oxidising agent gains electrons and is itself reduced.\n2. A reducing agent loses electrons and is itself oxidised.\n3. In Zn + CuSO4 → ZnSO4 + Cu, Cu2+ acts as the oxidising agent.\n4. In Zn + CuSO4 → ZnSO4 + Cu, zinc acts as the oxidising agent.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — zinc loses electrons and is oxidised, so it acts as the reducing agent, not the oxidising agent.',
    difficulty: 'medium'
  },
  {
    id: 'redox-134',
    type: 'how-many',
    question: 'How many of the following are correctly classified as disproportionation reactions?\n1. 2H2O2 → 2H2O + O2\n2. Cl2 + 2NaOH(cold, dilute) → NaCl + NaOCl + H2O\n3. Zn + CuSO4 → ZnSO4 + Cu\n4. P4 + 3NaOH + 3H2O → PH3 + 3NaH2PO2\n5. C + O2 → CO2',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Reactions 1, 2, and 4 are disproportionation reactions, since a single element is simultaneously oxidised and reduced in each. Reactions 3 and 5 involve two different elements changing oxidation state, not disproportionation. 3 are correct.',
    difficulty: 'hard'
  },
  {
    id: 'redox-135',
    type: 'how-many',
    question: 'How many of the following statements about balancing redox equations are correct?\n1. The oxidation number method balances by equating total increase and total decrease in oxidation number.\n2. The ion-electron method splits the reaction into an oxidation half and a reduction half.\n3. In acidic medium, oxygen atoms are balanced using OH- ions.\n4. Electrons are added to balance the charge on each half-reaction before combining them.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — in acidic medium, oxygen atoms are balanced using H2O, not OH- (which is used for basic medium adjustments).',
    difficulty: 'medium'
  },
  {
    id: 'redox-136',
    type: 'how-many',
    question: 'How many of the following statements about KMnO4 as a titrant are correct?\n1. It acts as a self-indicator.\n2. In acidic medium, it is reduced to Mn2+.\n3. In neutral/faintly alkaline medium, it is reduced to MnO2.\n4. In strongly alkaline medium, it is reduced to the green manganate ion, MnO4^2-.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe the self-indicating property of KMnO4 and its different reduction products depending on the medium.',
    difficulty: 'medium'
  },
  {
    id: 'redox-137',
    type: 'how-many',
    question: 'How many of the following statements about standard electrode potentials are correct?\n1. The standard hydrogen electrode is assigned a potential of 0.00 V.\n2. A more positive standard reduction potential indicates a stronger oxidising agent.\n3. A more negative standard reduction potential indicates a stronger reducing agent.\n4. Fluorine has one of the highest (most positive) standard reduction potentials among common elements.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements are correct and consistent with the standard treatment of electrode potentials and the electrochemical series.',
    difficulty: 'medium'
  },
  {
    id: 'redox-138',
    type: 'how-many',
    question: 'How many of the following are correctly cited as limitations of the oxidation number concept?\n1. It can give fractional oxidation numbers that are only averages, not real chemical states.\n2. The average oxidation number of Fe in Fe3O4 (+8/3) does not represent an actual single oxidation state of iron.\n3. Sulphur atoms in Na2S2O3 are actually at different oxidation states despite an average value of +2.\n4. The concept cannot be applied to any covalent compound.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 correctly describe recognised limitations. Statement 4 is false — the oxidation number concept is routinely applied to covalent compounds as well, not just ionic ones.',
    difficulty: 'hard'
  },
  {
    id: 'redox-139',
    type: 'how-many',
    question: 'How many of the following statements about types of displacement reactions are correct?\n1. Metal displacement involves a more reactive metal displacing a less reactive one from its salt solution.\n2. Non-metal displacement can involve hydrogen being displaced from water or acid by an active metal.\n3. Halogen displacement involves a more reactive halogen displacing a less reactive halogen from its salt.\n4. All displacement reactions necessarily produce a gas as one of the products.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 correctly describe categories of displacement reactions. Statement 4 is false — not all displacement reactions produce a gas (e.g., Zn + CuSO4 → ZnSO4 + Cu produces no gas).',
    difficulty: 'medium'
  },
  {
    id: 'redox-140',
    type: 'how-many',
    question: 'How many of the following oxidation number values are correctly assigned?\n1. Oxidation number of Mn in KMnO4 is +7.\n2. Oxidation number of Cr in K2Cr2O7 is +6.\n3. Oxidation number of S in H2SO4 is +6.\n4. Oxidation number of N in HNO3 is +3.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correctly assigned. Statement 4 is false — the oxidation number of N in HNO3 is +5, not +3.',
    difficulty: 'medium'
  },
  {
    id: 'redox-141',
    type: 'how-many',
    question: 'How many of the following statements about redox titrations and indicators are correct?\n1. KMnO4 is self-indicating due to its intense purple colour.\n2. K2Cr2O7 titrations commonly use an external indicator such as diphenylamine.\n3. Starch is used as an indicator in iodometric titrations, added near the endpoint.\n4. All redox titrations require an external indicator, with no exceptions.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — KMnO4 titrations are a clear exception, since KMnO4 itself acts as a self-indicator without needing an external one.',
    difficulty: 'medium'
  },
  {
    id: 'redox-142',
    type: 'how-many',
    question: 'How many of the following statements about the electronic concept of redox reactions are correct?\n1. Oxidation is loss of electrons.\n2. Reduction is gain of electrons.\n3. A redox reaction can occur with only oxidation and no accompanying reduction.\n4. Electrons lost by the reducing agent are gained by the oxidising agent.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — oxidation and reduction must occur together in a redox reaction, since electrons cannot simply vanish; they must be transferred to another species.',
    difficulty: 'easy'
  },
  {
    id: 'redox-143',
    type: 'how-many',
    question: 'How many of the following are examples of oxygen showing an oxidation number other than -2?\n1. Oxygen in H2O2 (peroxide), oxidation number -1\n2. Oxygen in KO2 (superoxide), oxidation number -1/2\n3. Oxygen in OF2, oxidation number +2\n4. Oxygen in H2O, oxidation number -2 (this is the normal case, not an exception)',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 correctly describe exceptions where oxygen has an oxidation number other than -2. Statement 4 describes the normal case (-2), not an exception, so only 3 statements describe actual exceptions.',
    difficulty: 'hard'
  },
  {
    id: 'redox-144',
    type: 'how-many',
    question: 'How many of the following statements about the ion-electron method for basic medium are correct?\n1. The half-reaction is first balanced as though it were in acidic medium.\n2. Equal numbers of OH- ions are then added to both sides to neutralise any H+ present.\n3. This converts the H+ into H2O on the side where OH- was added to cancel it.\n4. This method cannot be used for basic medium at all, only for acidic medium.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 correctly describe the standard basic-medium adaptation of the ion-electron method. Statement 4 is false — the method is specifically adaptable to basic medium using this procedure.',
    difficulty: 'hard'
  },
  {
    id: 'redox-145',
    type: 'how-many',
    question: 'How many of the following statements about lithium\'s behaviour as a reducing agent are correct?\n1. Lithium has a relatively high ionisation enthalpy among alkali metals.\n2. Lithium\'s small ionic size gives Li+ a very high hydration enthalpy.\n3. The high hydration enthalpy compensates for the relatively unfavourable ionisation enthalpy.\n4. As a net result, lithium is the strongest reducing agent among alkali metals in aqueous solution.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements are correct and represent the standard NCERT explanation for lithium\'s exceptional reducing strength in aqueous solution.',
    difficulty: 'hard'
  },
  {
    id: 'redox-146',
    type: 'how-many',
    question: 'How many of the following statements about the sum of oxidation numbers are correct?\n1. Sum of oxidation numbers in a neutral compound is zero.\n2. Sum of oxidation numbers in a polyatomic ion equals its net charge.\n3. Sum of oxidation numbers of atoms in Cl2 gas is zero.\n4. Sum of oxidation numbers in the nitrate ion, NO3-, equals -1.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements are correct — each follows directly from the standard rules for assigning and summing oxidation numbers.',
    difficulty: 'medium'
  },
  {
    id: 'redox-147',
    type: 'how-many',
    question: 'How many of the following statements about combination and decomposition reactions are correct?\n1. NH3(g) + HCl(g) → NH4Cl(s) is not a redox reaction.\n2. 2KClO3(s) → 2KCl(s) + 3O2(g) is a redox reaction.\n3. CaCO3(s) → CaO(s) + CO2(g) is a redox reaction.\n4. C(s) + O2(g) → CO2(g) is a redox reaction.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — the decomposition of CaCO3 involves no change in oxidation number of any element, so it is not a redox reaction.',
    difficulty: 'medium'
  },
  {
    id: 'redox-148',
    type: 'how-many',
    question: 'How many of the following statements about electrode potentials and oxidising/reducing strength are correct?\n1. A species with a very negative standard reduction potential is easily oxidised.\n2. A species with a very positive standard reduction potential is easily reduced.\n3. The electrochemical series lists species in order of standard reduction potential.\n4. A stronger oxidising agent has a weaker tendency to gain electrons compared to a weaker oxidising agent.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a stronger oxidising agent has a greater (not weaker) tendency to gain electrons.',
    difficulty: 'medium'
  },
  {
    id: 'redox-149',
    type: 'how-many',
    question: 'How many of the following statements about disproportionation reactions of chlorine in alkali are correct?\n1. In cold, dilute alkali, chlorine disproportionates to Cl- (-1) and OCl- (+1).\n2. In hot, concentrated alkali, chlorine disproportionates to Cl- (-1) and ClO3- (+5).\n3. In both cases, chlorine starts from oxidation number 0 as Cl2 gas.\n4. Chlorine disproportionation in alkali never actually occurs; it always yields only Cl- as a single product.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct, matching known reactions of chlorine with alkali under different conditions. Statement 4 is false, since disproportionation reactions of chlorine in alkali are well documented and give two distinct chlorine-containing products.',
    difficulty: 'hard'
  },
  {
    id: 'redox-150',
    type: 'how-many',
    question: 'How many of the following statements correctly describe oxidation numbers in specific NCERT-cited compounds?\n1. Oxidation number of carbon in CH4 is -4.\n2. Oxidation number of carbon in CO2 is +4.\n3. Oxidation number of nitrogen in NH3 is -3.\n4. Oxidation number of phosphorus in P4 (elemental) is 0.\n5. Average oxidation number of iron in Fe3O4 is +3 exactly, with no averaging involved.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, 3, and 4 are correct. Statement 5 is false — the oxidation number of Fe in Fe3O4 is an average of +8/3, not an exact +3, since it reflects a mixture of Fe2+ and Fe3+.',
    difficulty: 'hard'
  }
];
