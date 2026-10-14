<<<<<<< HEAD
export const COORDINATION_COMPOUNDS = [
  // ==================== MCQ (70) ====================
  {
    id: 'coord-1',
    type: 'mcq',
    question: 'According to Werner\'s theory, the primary valency of a metal in a coordination compound corresponds to its',
    options: [
      'atomic number',
      'coordination number',
      'molecular mass',
      'oxidation state, and is satisfied by ionisable (negative) ions'
    ],
    correctIndex: 3,
    explanation: 'Werner proposed that primary valency is ionisable and corresponds to the oxidation state of the metal, satisfied typically by negative ions.',
    difficulty: 'medium'
  },
  {
    id: 'coord-2',
    type: 'mcq',
    question: 'According to Werner\'s theory, the secondary valency of a metal in a coordination compound',
    options: [
      'is always equal to the primary valency',
      'has no relation to the geometry of the complex',
      'is ionisable and corresponds to oxidation state',
      'is non-ionisable, corresponds to the coordination number, and has a fixed spatial arrangement in space'
    ],
    correctIndex: 3,
    explanation: 'Secondary valency, as proposed by Werner, is non-ionisable, corresponds to the coordination number of the metal, and is directed in space, giving the complex its characteristic geometry.',
    difficulty: 'medium'
  },
  {
    id: 'coord-3',
    type: 'mcq',
    question: 'A key experimental difference between a double salt and a coordination compound is that, in aqueous solution, a double salt',
    options: [
      'retains its complex ion identity, unlike a coordination compound',
      'never dissolves in water at all',
      'behaves identically to a coordination compound in every respect',
      'dissociates completely into its constituent simple ions, each of which can be detected by usual chemical tests'
    ],
    correctIndex: 3,
    explanation: 'Double salts, such as Mohr\'s salt or potash alum, dissociate completely into their constituent simple ions in solution, and each ion can be individually detected, unlike the complex ions of coordination compounds.',
    difficulty: 'medium'
  },
  {
    id: 'coord-4',
    type: 'mcq',
    question: 'Potassium ferrocyanide, K4[Fe(CN)6], does NOT give the usual chemical test for Fe2+ or free CN- ions in solution because',
    options: [
      'it does not actually contain iron or cyanide at all',
      'it is not soluble in water',
      'iron and cyanide react to form a completely different compound upon dissolution',
      'the complex ion [Fe(CN)6]4- retains its identity in solution and does not dissociate into free Fe2+ and CN- ions'
    ],
    correctIndex: 3,
    explanation: 'The complex ion [Fe(CN)6]4- is a coordination entity that remains intact in solution, so the individual Fe2+ and CN- ions are not present as free ions and cannot be detected by standard tests.',
    difficulty: 'medium'
  },
  {
    id: 'coord-5',
    type: 'mcq',
    question: 'A ligand is best described as',
    options: [
      'the central metal atom or ion in a coordination compound',
      'a counter ion balancing the charge of the complex',
      'the overall coordination compound itself',
      'an ion or molecule that can donate a pair of electrons to the central metal atom/ion, forming a coordinate bond'
    ],
    correctIndex: 3,
    explanation: 'A ligand is an ion or molecule capable of donating a lone pair of electrons to the central metal atom or ion, forming a coordinate (dative) bond within the coordination entity.',
    difficulty: 'easy'
  },
  {
    id: 'coord-6',
    type: 'mcq',
    question: 'The coordination number of a metal in a coordination entity is defined as the',
    options: [
      'number of counter ions present outside the coordination sphere',
      'total number of electrons in the metal atom',
      'oxidation state of the metal',
      'number of ligand donor atoms directly bonded to the central metal atom/ion via coordinate bonds'
    ],
    correctIndex: 3,
    explanation: 'Coordination number refers to the number of sigma bonds (donor atoms of ligands) directly bonded to the central metal atom or ion.',
    difficulty: 'easy'
  },
  {
    id: 'coord-7',
    type: 'mcq',
    question: 'A ligand that can bind to the central metal atom through only one donor atom is called a',
    options: ['polydentate ligand', 'bidentate ligand', 'ambidentate ligand', 'unidentate (monodentate) ligand'],
    correctIndex: 3,
    explanation: 'A unidentate (or monodentate) ligand has only one donor atom available to bind to the central metal atom.',
    difficulty: 'easy'
  },
  {
    id: 'coord-8',
    type: 'mcq',
    question: 'A ligand that has two donor atoms and can simultaneously bind to the same metal atom through both, forming a ring, is called a',
    options: ['counter ligand', 'bidentate (chelating) ligand', 'unidentate ligand', 'ambidentate ligand'],
    correctIndex: 1,
    explanation: 'A bidentate ligand has two donor atoms that can bind simultaneously to a single metal centre, forming a ring structure; such ligands are also called chelating ligands.',
    difficulty: 'easy'
  },
  {
    id: 'coord-9',
    type: 'mcq',
    question: 'An ambidentate ligand is one that',
    options: [
      'always binds through exactly two atoms simultaneously',
      'is always negatively charged and monodentate',
      'has no donor atoms at all',
      'can bind to the metal through two different donor atoms, but only one at a time'
    ],
    correctIndex: 3,
    explanation: 'An ambidentate ligand possesses two different potential donor atoms but can coordinate to the metal through only one of them at a given time, giving rise to linkage isomerism.',
    difficulty: 'medium'
  },
  {
    id: 'coord-10',
    type: 'mcq',
    question: 'Which of the following is a classic example of an ambidentate ligand?',
    options: ['Ethylenediamine (en)', 'Nitrito ion, NO2- (can bind via N or O)', 'Water (H2O)', 'Ammonia (NH3)'],
    correctIndex: 1,
    explanation: 'The nitrite ion (NO2-) is a well-known ambidentate ligand, capable of binding to the metal either through the nitrogen atom (nitro) or through an oxygen atom (nitrito).',
    difficulty: 'medium'
  },
  {
    id: 'coord-11',
    type: 'mcq',
    question: 'The thiocyanate ion, SCN-, is another classic example of an ambidentate ligand, since it can bind to the metal through',
    options: [
      'only the carbon atom, never through sulphur or nitrogen',
      'exactly two atoms simultaneously, always',
      'oxygen atoms only',
      'the sulphur atom (thiocyanato-S) or the nitrogen atom (thiocyanato-N/isothiocyanato)'
    ],
    correctIndex: 3,
    explanation: 'The thiocyanate ion can coordinate through either its sulphur atom or its nitrogen atom, making it a classic ambidentate ligand.',
    difficulty: 'medium'
  },
  {
    id: 'coord-12',
    type: 'mcq',
    question: 'A polydentate ligand that has six donor atoms and can occupy all six coordination positions of an octahedral metal centre is',
    options: ['ethylenediamine', 'ethylenediaminetetraacetate (EDTA4-)', 'chloride ion', 'ammonia'],
    correctIndex: 1,
    explanation: 'EDTA4- (ethylenediaminetetraacetate) is a hexadentate ligand, possessing six donor atoms (two nitrogen and four oxygen atoms) capable of occupying all six coordination positions of an octahedral metal ion.',
    difficulty: 'medium'
  },
  {
    id: 'coord-13',
    type: 'mcq',
    question: 'A chelate complex, formed when a di- or polydentate ligand binds to a single metal centre forming one or more rings, is generally',
    options: [
      'less stable than a similar complex formed with unidentate ligands',
      'more stable than a similar complex formed with unidentate ligands, a phenomenon known as the chelate effect',
      'unrelated to overall complex stability',
      'exactly equal in stability to a comparable non-chelate complex'
    ],
    correctIndex: 1,
    explanation: 'Chelate complexes are generally more stable than analogous complexes formed with comparable unidentate ligands, an effect known as the chelate effect.',
    difficulty: 'medium'
  },
  {
    id: 'coord-14',
    type: 'mcq',
    question: 'A homoleptic complex is one in which',
    options: [
      'the complex has no defined coordination number',
      'there are no ligands present at all',
      'the metal is bound to more than one kind of ligand',
      'the metal is bound to only one kind of ligand throughout'
    ],
    correctIndex: 3,
    explanation: 'A homoleptic complex has the central metal bound to only a single type of ligand, e.g. [Co(NH3)6]3+.',
    difficulty: 'easy'
  },
  {
    id: 'coord-15',
    type: 'mcq',
    question: 'A heteroleptic complex is one in which',
    options: [
      'the complex ion has no charge',
      'the metal is bound to more than one kind of ligand',
      'there is no central metal atom present',
      'the metal is bound to only one kind of ligand'
    ],
    correctIndex: 1,
    explanation: 'A heteroleptic complex has the central metal bound to two or more different kinds of ligands, e.g. [Co(NH3)4Cl2]+.',
    difficulty: 'easy'
  },
  {
    id: 'coord-16',
    type: 'mcq',
    question: 'According to IUPAC nomenclature rules, within the name of a coordination compound, the names of ligands are arranged in',
    options: [
      'decreasing order of molecular mass',
      'the order in which they were historically discovered',
      'increasing order of their charge',
      'alphabetical order, regardless of the number of each ligand present or their charge'
    ],
    correctIndex: 3,
    explanation: 'IUPAC rules specify that ligand names within a coordination compound name are listed in alphabetical order, ignoring any multiplying prefixes and regardless of the ligand\'s charge.',
    difficulty: 'medium'
  },
  {
    id: 'coord-17',
    type: 'mcq',
    question: 'According to IUPAC nomenclature, names of anionic ligands typically end with the suffix',
    options: ['-yl', '-ate', '-ium', '-o'],
    correctIndex: 3,
    explanation: 'Anionic ligand names conventionally end in "-o", such as chloro (Cl-), cyano (CN-), and oxalato (C2O4^2-).',
    difficulty: 'medium'
  },
  {
    id: 'coord-18',
    type: 'mcq',
    question: 'In IUPAC nomenclature, the neutral ligand H2O is named as',
    options: ['oxo', 'aqua', 'hydroxo', 'water'],
    correctIndex: 1,
    explanation: 'The neutral ligand water is given the special name "aqua" in coordination compound nomenclature.',
    difficulty: 'easy'
  },
  {
    id: 'coord-19',
    type: 'mcq',
    question: 'In IUPAC nomenclature, the neutral ligand NH3 is named as',
    options: ['ammonium', 'nitrido', 'amine', 'ammine'],
    correctIndex: 3,
    explanation: 'The neutral ligand ammonia is named "ammine" (with a double m) in coordination nomenclature, distinct from the organic term "amine".',
    difficulty: 'easy'
  },
  {
    id: 'coord-20',
    type: 'mcq',
    question: 'In IUPAC nomenclature, the neutral ligand CO is named as',
    options: ['oxocarbon', 'carbonyl', 'carbonido', 'carbonate'],
    correctIndex: 1,
    explanation: 'The neutral ligand carbon monoxide is named "carbonyl" when acting as a ligand in coordination compounds.',
    difficulty: 'easy'
  },
  {
    id: 'coord-21',
    type: 'mcq',
    question: 'For simple monodentate ligands, the number of each ligand present in a complex is indicated using the prefixes',
    options: [
      'mono, dual, triple',
      'di, tri, tetra, penta, hexa',
      'sub, super, hyper',
      'bis, tris, tetrakis'
    ],
    correctIndex: 1,
    explanation: 'Simple monodentate ligands use the standard multiplying prefixes di, tri, tetra, and so on to indicate their number in the complex.',
    difficulty: 'easy'
  },
  {
    id: 'coord-22',
    type: 'mcq',
    question: 'When naming a complex containing multiple polydentate or complex-named ligands (such as ethylenediamine), the prefixes used to indicate their number are',
    options: [
      'no prefix is ever used for such ligands',
      'di, tri, tetra',
      'mono, sub, hyper',
      'bis, tris, tetrakis, with the ligand name enclosed in parentheses'
    ],
    correctIndex: 3,
    explanation: 'To avoid ambiguity, ligands whose names already contain prefixes like "di" (such as ethylenediamine) use "bis", "tris", "tetrakis" instead, with the ligand name enclosed in parentheses.',
    difficulty: 'medium'
  },
  {
    id: 'coord-23',
    type: 'mcq',
    question: 'In the IUPAC name of a coordination compound, the oxidation state of the central metal atom is indicated by',
    options: [
      'a subscript after the ligand name',
      'a Roman numeral placed in parentheses immediately after the name of the metal',
      'a superscript immediately before the metal name',
      'the oxidation state is never indicated in the name'
    ],
    correctIndex: 1,
    explanation: 'IUPAC rules require the oxidation state of the central metal to be shown as a Roman numeral in parentheses, placed immediately after the metal\'s name, with no space in between.',
    difficulty: 'medium'
  },
  {
    id: 'coord-24',
    type: 'mcq',
    question: 'If the overall complex ion is an anion, the name of the central metal typically',
    options: [
      'remains completely unchanged',
      'is dropped entirely from the name',
      'is replaced with the ligand name',
      'is modified with the suffix "-ate" added to the metal name (or its Latin root)'
    ],
    correctIndex: 3,
    explanation: 'When the complex ion carries an overall negative charge, the metal name is modified by adding the suffix "-ate" (e.g., ferrate for iron, cobaltate for cobalt).',
    difficulty: 'medium'
  },
  {
    id: 'coord-25',
    type: 'mcq',
    question: 'The correct IUPAC name for the complex ion [Fe(CN)6]4- is',
    options: ['ironhexacyanide(II) ion', 'hexacyanoferrate(II) ion', 'hexacyanidoferrium ion', 'hexacyanoiron(II) ion'],
    correctIndex: 1,
    explanation: 'Since the complex is an anion, the metal name "ferrate" (derived from the Latin "ferrum") is used, with the oxidation state (+2) shown in Roman numerals: hexacyanoferrate(II) ion.',
    difficulty: 'hard'
  },
  {
    id: 'coord-26',
    type: 'mcq',
    question: 'In writing the formula of a coordination compound, the coordination entity (complex ion or molecule) is enclosed within',
    options: ['curly braces { }', 'parentheses ( )', 'angle brackets < >', 'square brackets [ ]'],
    correctIndex: 3,
    explanation: 'By convention, the entire coordination entity, including the central metal and its directly bonded ligands, is enclosed within square brackets in the formula.',
    difficulty: 'easy'
  },
  {
    id: 'coord-27',
    type: 'mcq',
    question: 'Linkage isomerism in coordination compounds arises specifically due to the presence of a(n)',
    options: ['unidentate ligand', 'ambidentate ligand, which can attach through either of its two possible donor atoms', 'polydentate ligand only', 'counter ion outside the coordination sphere'],
    correctIndex: 1,
    explanation: 'Linkage isomerism occurs when an ambidentate ligand, capable of binding through two different donor atoms, attaches via one atom in one isomer and via the other atom in a different isomer.',
    difficulty: 'medium'
  },
  {
    id: 'coord-28',
    type: 'mcq',
    question: 'The pair [Co(NH3)5(NO2)]2+ and [Co(NH3)5(ONO)]2+ is a classic example of which type of isomerism?',
    options: ['Coordination isomerism', 'Linkage isomerism', 'Geometrical isomerism', 'Ionisation isomerism'],
    correctIndex: 1,
    explanation: 'These two complexes differ only in whether the ambidentate nitrite ligand is bound through nitrogen (nitro) or oxygen (nitrito), a classic example of linkage isomerism.',
    difficulty: 'medium'
  },
  {
    id: 'coord-29',
    type: 'mcq',
    question: 'Ionisation isomerism in coordination compounds arises when',
    options: [
      'a ligand simply changes its donor atom',
      'two complexes have entirely different molecular formulas',
      'water molecules move between being coordinated and being water of crystallisation',
      'a counter ion outside the coordination sphere and a ligand inside the coordination sphere are interchanged, giving different ions in solution'
    ],
    correctIndex: 3,
    explanation: 'Ionisation isomers have the same overall molecular formula but differ in which ion (a ligand or a counter ion) is inside versus outside the coordination sphere, producing different ions upon dissociation in water.',
    difficulty: 'medium'
  },
  {
    id: 'coord-30',
    type: 'mcq',
    question: 'The pair [Co(NH3)5Br]SO4 and [Co(NH3)5SO4]Br is a classic example of which type of isomerism?',
    options: ['Optical isomerism', 'Ionisation isomerism', 'Linkage isomerism', 'Coordination isomerism'],
    correctIndex: 1,
    explanation: 'In this pair, the bromide and sulphate groups exchange positions between being a ligand (inside the coordination sphere) and a counter ion (outside), giving different ions in solution — this is ionisation isomerism.',
    difficulty: 'medium'
  },
  {
    id: 'coord-31',
    type: 'mcq',
    question: 'Hydrate (solvate) isomerism arises when',
    options: [
      'water molecules are either directly coordinated to the metal or present as water of crystallisation outside the coordination sphere, giving isomers with the same overall formula',
      'two ligands simply swap their charges',
      'the metal changes its oxidation state',
      'the coordination number of the complex changes'
    ],
    correctIndex: 0,
    explanation: 'Hydrate isomers differ in whether water molecules are coordinated directly to the metal (inside the coordination sphere) or exist as water of crystallisation outside it, while sharing the same overall molecular formula.',
    difficulty: 'medium'
  },
  {
    id: 'coord-32',
    type: 'mcq',
    question: 'The set [Cr(H2O)6]Cl3, [Cr(H2O)5Cl]Cl2.H2O, and [Cr(H2O)4Cl2]Cl.2H2O is a classic illustration of',
    options: ['linkage isomerism', 'optical isomerism', 'geometrical isomerism', 'hydrate (solvate) isomerism'],
    correctIndex: 3,
    explanation: 'These three complexes have the same overall formula but differ in how many water molecules are coordinated directly to chromium versus present as water of crystallisation, a classic example of hydrate isomerism.',
    difficulty: 'medium'
  },
  {
    id: 'coord-33',
    type: 'mcq',
    question: 'Coordination isomerism occurs in compounds containing both a complex cation and a complex anion, and arises from',
    options: [
      'the presence of water of crystallisation',
      'a different distribution of ligands between the cationic and anionic complexes',
      'a change in the ambidentate ligand\'s point of attachment',
      'the exchange of a counter ion with a coordinated ligand'
    ],
    correctIndex: 1,
    explanation: 'Coordination isomerism arises in compounds with both a complex cation and complex anion, when the distribution of ligands between the two complex ions differs between isomers, such as [Co(NH3)6][Cr(CN)6] and [Cr(NH3)6][Co(CN)6].',
    difficulty: 'medium'
  },
  {
    id: 'coord-34',
    type: 'mcq',
    question: 'Geometrical (cis-trans) isomerism is commonly observed in square planar complexes with the general formula',
    options: ['MA6', 'MA4', 'MABCD only', 'MA2B2'],
    correctIndex: 3,
    explanation: 'Square planar complexes of the type MA2B2 (two pairs of different ligands) show cis (adjacent) and trans (opposite) geometrical isomers.',
    difficulty: 'medium'
  },
  {
    id: 'coord-35',
    type: 'mcq',
    question: 'In the cis isomer of a square planar MA2B2 complex, the two identical ligands (A) are positioned',
    options: [
      'adjacent to each other, at a 90° angle',
      'directly opposite each other, at a 180° angle',
      'in a random, undefined arrangement',
      'always above and below the plane'
    ],
    correctIndex: 0,
    explanation: 'In the cis isomer, the two identical ligands occupy adjacent positions relative to each other in the square plane, at a 90° angle.',
    difficulty: 'medium'
  },
  {
    id: 'coord-36',
    type: 'mcq',
    question: 'For an octahedral complex of the general formula MA3B3, the two geometrical isomers possible are called',
    options: ['cis and trans', 'left and right', 'axial and equatorial only', 'facial (fac) and meridional (mer)'],
    correctIndex: 3,
    explanation: 'Octahedral complexes of type MA3B3 exhibit facial (fac, where the three identical ligands occupy one triangular face) and meridional (mer, where the three identical ligands lie in a plane through the metal) isomers.',
    difficulty: 'medium'
  },
  {
    id: 'coord-37',
    type: 'mcq',
    question: 'Optical isomerism in coordination compounds arises when two structures',
    options: [
      'are identical in every way',
      'are non-superimposable mirror images of each other, i.e. chiral, like left and right hands',
      'differ only in oxidation state of the metal',
      'differ only in the counter ion present'
    ],
    correctIndex: 1,
    explanation: 'Optical isomers (enantiomers) are non-superimposable mirror images of each other, a form of chirality analogous to left and right hands.',
    difficulty: 'medium'
  },
  {
    id: 'coord-38',
    type: 'mcq',
    question: 'The octahedral complex [Co(en)3]3+, with three bidentate ethylenediamine ligands, is a well-known example that shows',
    options: ['ionisation isomerism only', 'optical isomerism, existing as a pair of non-superimposable mirror-image enantiomers', 'no isomerism at all', 'linkage isomerism only'],
    correctIndex: 1,
    explanation: '[Co(en)3]3+ is chiral and exists as a pair of optical isomers (enantiomers) that are non-superimposable mirror images of one another.',
    difficulty: 'medium'
  },
  {
    id: 'coord-39',
    type: 'mcq',
    question: 'Cisplatin, cis-[PtCl2(NH3)2], a square planar platinum complex used as an anticancer drug, shows biological activity mainly in its',
    options: [
      'trans isomeric form only',
      'cis isomeric form; the trans isomer is generally not effective as an anticancer agent',
      'both cis and trans forms equally',
      'neither isomeric form; the free platinum ion alone is active'
    ],
    correctIndex: 1,
    explanation: 'Only the cis isomer of [PtCl2(NH3)2] shows significant anticancer activity, while the trans isomer is essentially ineffective, illustrating the biological importance of geometrical isomerism.',
    difficulty: 'medium'
  },
  {
    id: 'coord-40',
    type: 'mcq',
    question: 'According to Valence Bond Theory (VBT), the geometry of a coordination complex is explained on the basis of',
    options: [
      'the melting point of the compound',
      'purely electrostatic interactions between the metal and ligands',
      'the number of counter ions present',
      'the type of hybridisation adopted by the central metal atom/ion'
    ],
    correctIndex: 3,
    explanation: 'Valence Bond Theory attributes the geometry of a coordination complex to the specific type of hybrid orbitals (such as sp3, sp3d2, or d2sp3) adopted by the central metal atom or ion.',
    difficulty: 'medium'
  },
  {
    id: 'coord-41',
    type: 'mcq',
    question: 'According to VBT, an octahedral complex formed using inner d orbitals ((n-1)d orbitals), giving a d2sp3 hybridisation, is generally associated with',
    options: [
      'weak field ligands and a high spin arrangement',
      'strong field ligands and a low spin arrangement',
      'a tetrahedral geometry instead of octahedral',
      'no ligands at all'
    ],
    correctIndex: 1,
    explanation: 'Complexes using inner (n-1)d orbitals in a d2sp3 hybridisation are typically formed with strong field ligands and result in a low spin arrangement (fewer unpaired electrons, since pairing is favoured).',
    difficulty: 'hard'
  },
  {
    id: 'coord-42',
    type: 'mcq',
    question: 'According to VBT, an octahedral complex formed using outer nd orbitals, giving an sp3d2 hybridisation, is generally associated with',
    options: [
      'strong field ligands and a low spin arrangement',
      'exclusively negative oxidation states',
      'square planar geometry instead of octahedral',
      'weak field ligands and a high spin arrangement'
    ],
    correctIndex: 3,
    explanation: 'Complexes using outer nd orbitals in an sp3d2 hybridisation are typically formed with weak field ligands, resulting in a high spin arrangement (more unpaired electrons retained, following Hund\'s rule).',
    difficulty: 'hard'
  },
  {
    id: 'coord-43',
    type: 'mcq',
    question: 'A major limitation of Valence Bond Theory in explaining coordination compounds is that it',
    options: [
      'fails to explain the geometry of any complex',
      'does not provide a quantitative or satisfactory explanation for the colour of coordination compounds',
      'cannot be applied to any octahedral complex',
      'only applies to organic molecules'
    ],
    correctIndex: 1,
    explanation: 'One of the key limitations of VBT is its inability to satisfactorily and quantitatively explain the colour exhibited by many coordination compounds.',
    difficulty: 'medium'
  },
  {
    id: 'coord-44',
    type: 'mcq',
    question: 'Crystal Field Theory (CFT) treats the interaction between the central metal ion and the surrounding ligands as being purely',
    options: [
      'metallic in nature',
      'electrostatic (ionic) in nature, with ligands treated as point charges or dipoles',
      'covalent in nature',
      'nuclear in nature'
    ],
    correctIndex: 1,
    explanation: 'Crystal Field Theory models the metal-ligand interaction as a purely electrostatic (ionic) attraction, treating ligands as point negative charges or dipoles.',
    difficulty: 'medium'
  },
  {
    id: 'coord-45',
    type: 'mcq',
    question: 'In an octahedral crystal field, the five d orbitals of the metal ion split into two sets: a lower-energy set and a higher-energy set, called respectively',
    options: [
      'eg (lower) and t2g (higher)',
      't2g (lower) and eg (higher)',
      't2 (lower) and e (higher)',
      'e (lower) and t2 (higher)'
    ],
    correctIndex: 1,
    explanation: 'In an octahedral crystal field, the d orbitals split into a lower-energy triply degenerate t2g set (dxy, dyz, dxz) and a higher-energy doubly degenerate eg set (dz2, dx2-y2).',
    difficulty: 'medium'
  },
  {
    id: 'coord-46',
    type: 'mcq',
    question: 'The energy difference between the t2g and eg sets of d orbitals in an octahedral crystal field is called',
    options: ['crystal field stabilisation energy only', 'hydration energy', 'pairing energy', 'crystal field splitting energy, Δo (or 10Dq)'],
    correctIndex: 3,
    explanation: 'This energy gap between the split d orbital sets is called the crystal field splitting energy, commonly denoted Δo (or 10Dq) for an octahedral field.',
    difficulty: 'medium'
  },
  {
    id: 'coord-47',
    type: 'mcq',
    question: 'In a tetrahedral crystal field, the splitting pattern of the d orbitals compared to an octahedral field is',
    options: [
      'reversed in energy order, but larger in magnitude than octahedral splitting',
      'not applicable, since d orbitals never split in a tetrahedral field',
      'identical in every way, with no difference at all',
      'reversed in energy order (e set lower, t2 set higher), and generally smaller in magnitude'
    ],
    correctIndex: 3,
    explanation: 'In a tetrahedral field, the splitting pattern is reversed compared to octahedral (e set at lower energy, t2 set at higher energy), and the overall splitting magnitude (Δt) is smaller than the corresponding octahedral splitting (Δo).',
    difficulty: 'hard'
  },
  {
    id: 'coord-48',
    type: 'mcq',
    question: 'Because the crystal field splitting in a tetrahedral field (Δt) is generally quite small compared to typical pairing energies, tetrahedral complexes are almost always',
    options: [
      'unstable and do not exist',
      'high spin complexes',
      'completely diamagnetic, regardless of the metal',
      'low spin complexes'
    ],
    correctIndex: 1,
    explanation: 'Since Δt is usually too small to overcome the pairing energy, electrons tend to remain unpaired as much as possible (following Hund\'s rule), making tetrahedral complexes generally high spin.',
    difficulty: 'hard'
  },
  {
    id: 'coord-49',
    type: 'mcq',
    question: 'A "strong field" ligand, as described in Crystal Field Theory, is one that',
    options: [
      'never interacts with the metal d orbitals at all',
      'causes a large crystal field splitting, often exceeding the pairing energy and favouring a low spin configuration',
      'always forms a tetrahedral complex',
      'causes a small crystal field splitting, favouring a high spin configuration'
    ],
    correctIndex: 1,
    explanation: 'A strong field ligand produces a large crystal field splitting (Δo), which, if greater than the pairing energy, favours electron pairing in the lower-energy orbitals, giving a low spin complex.',
    difficulty: 'medium'
  },
  {
    id: 'coord-50',
    type: 'mcq',
    question: 'In the spectrochemical series, ligands are arranged in order of',
    options: [
      'their solubility in water',
      'their molecular mass',
      'their colour when free (uncoordinated)',
      'increasing crystal field splitting ability (field strength)'
    ],
    correctIndex: 3,
    explanation: 'The spectrochemical series ranks ligands according to their ability to cause crystal field splitting, from weak field ligands to strong field ligands.',
    difficulty: 'medium'
  },
  {
    id: 'coord-51',
    type: 'mcq',
    question: 'In the approximate spectrochemical series, which of the following is generally regarded as a weak field ligand, causing relatively small crystal field splitting?',
    options: ['CO (carbonyl)', 'I- (iodide)', 'en (ethylenediamine)', 'CN- (cyanide)'],
    correctIndex: 1,
    explanation: 'Iodide is towards the weak end of the spectrochemical series, causing relatively small crystal field splitting compared to strong field ligands like CN- and CO.',
    difficulty: 'medium'
  },
  {
    id: 'coord-52',
    type: 'mcq',
    question: 'In the approximate spectrochemical series, which of the following is generally regarded as a strong field ligand, causing large crystal field splitting and favouring low spin complexes?',
    options: ['F- (fluoride)', 'H2O (aqua)', 'I- (iodide)', 'CN- (cyanide)'],
    correctIndex: 3,
    explanation: 'Cyanide (CN-) is one of the strongest field ligands in the spectrochemical series, causing large crystal field splitting and typically favouring low spin complexes.',
    difficulty: 'medium'
  },
  {
    id: 'coord-53',
    type: 'mcq',
    question: 'Crystal Field Theory successfully explains the colour of coordination compounds primarily on the basis of',
    options: [
      'the total number of ligands present, regardless of their identity',
      'd-d electronic transitions between the split d orbital sets, which absorb visible light of an energy roughly equal to the crystal field splitting',
      'the boiling point of the ligands',
      'the mass of the metal ion'
    ],
    correctIndex: 1,
    explanation: 'Colour arises from d-d transitions, where an electron absorbs visible light of energy equal to the crystal field splitting energy to move from the lower-energy to the higher-energy set of d orbitals.',
    difficulty: 'medium'
  },
  {
    id: 'coord-54',
    type: 'mcq',
    question: 'A coordination complex with a d0 or d10 metal ion configuration is generally',
    options: [
      'intensely coloured, due to strong d-d transitions',
      'always paramagnetic',
      'unstable and does not exist',
      'colourless, since no d-d transition is possible with no or fully filled d electrons'
    ],
    correctIndex: 3,
    explanation: 'With either no d electrons (d0) or a completely filled d subshell (d10), there are no possible d-d transitions, so such complexes are typically colourless.',
    difficulty: 'medium'
  },
  {
    id: 'coord-55',
    type: 'mcq',
    question: 'The complex ion [Sc(H2O)6]3+ is colourless because scandium in the +3 state has the electronic configuration',
    options: ['d5', 'd1', 'd10', 'd0, with no d electrons present'],
    correctIndex: 3,
    explanation: 'Sc3+ has a d0 configuration, meaning no d electrons are present at all, so no d-d transition is possible, making the complex colourless.',
    difficulty: 'medium'
  },
  {
    id: 'coord-56',
    type: 'mcq',
    question: 'One major limitation of Crystal Field Theory is that it',
    options: [
      'perfectly and completely accounts for all aspects of metal-ligand bonding, including covalent character',
      'considers only electrostatic interactions and ignores the covalent character of the metal-ligand bond, such as orbital overlap',
      'cannot explain colour or magnetic properties at all',
      'applies exclusively to organic molecules'
    ],
    correctIndex: 1,
    explanation: 'Since CFT treats the metal-ligand interaction as purely electrostatic, it does not account for the covalent character (orbital overlap) present in many metal-ligand bonds, which is a recognised limitation.',
    difficulty: 'medium'
  },
  {
    id: 'coord-57',
    type: 'mcq',
    question: 'In metal carbonyl complexes, the bonding between the metal and CO ligand is best described as',
    options: [
      'a bond formed only through hydrogen bonding',
      'synergic bonding, involving both sigma donation from CO to the metal and pi back-donation from the metal to CO',
      'no bonding at all; CO is merely physically adsorbed',
      'a purely ionic bond with no covalent character'
    ],
    correctIndex: 1,
    explanation: 'Metal carbonyls exhibit synergic bonding: CO donates a lone pair to the metal via a sigma bond, while the metal simultaneously back-donates electron density from filled d orbitals into the empty π* antibonding orbital of CO, strengthening the overall bond.',
    difficulty: 'hard'
  },
  {
    id: 'coord-58',
    type: 'mcq',
    question: 'As a consequence of synergic (M→L back-donation) bonding in metal carbonyls, compared to free CO, the metal-carbon bond generally',
    options: [
      'breaks apart entirely',
      'weakens, while the C-O bond strengthens',
      'remains completely unaffected',
      'strengthens, while the C-O bond weakens, since electron density is added to the antibonding orbital of CO'
    ],
    correctIndex: 3,
    explanation: 'Back-donation from the metal into the antibonding π* orbital of CO strengthens the metal-carbon bond (increasing its bond order) while correspondingly weakening the C-O bond, compared to free carbon monoxide.',
    difficulty: 'hard'
  },
  {
    id: 'coord-59',
    type: 'mcq',
    question: 'The stability of a coordination compound in solution is quantitatively described by its',
    options: [
      'molecular mass',
      'boiling point',
      'melting point',
      'stability constant (formation constant)'
    ],
    correctIndex: 3,
    explanation: 'The stability constant (or formation constant) is the equilibrium constant that quantifies the extent to which a coordination complex forms in solution, and higher values indicate greater stability.',
    difficulty: 'medium'
  },
  {
    id: 'coord-60',
    type: 'mcq',
    question: 'Coordination compounds play an important role in the extraction of silver and gold, which are typically leached from their ores using',
    options: [
      'water alone',
      'a cyanide solution, forming soluble complexes such as [Ag(CN)2]- and [Au(CN)2]-',
      'concentrated sulphuric acid',
      'concentrated hydrochloric acid'
    ],
    correctIndex: 1,
    explanation: 'Silver and gold ores are commonly treated with cyanide solutions, which form soluble dicyanoargentate(I) and dicyanoaurate(I) complexes, allowing the precious metals to be extracted.',
    difficulty: 'medium'
  },
  {
    id: 'coord-61',
    type: 'mcq',
    question: 'In the Mond process for the purification of nickel, impure nickel metal is converted into a volatile coordination compound,',
    options: ['NiCl2', 'Ni(CO)4', 'NiSO4', 'Ni(OH)2'],
    correctIndex: 1,
    explanation: 'In the Mond process, impure nickel reacts with carbon monoxide to form the volatile complex nickel tetracarbonyl, Ni(CO)4, which is then decomposed by heating to yield pure nickel.',
    difficulty: 'medium'
  },
  {
    id: 'coord-62',
    type: 'mcq',
    question: 'Haemoglobin, the oxygen-carrying protein in blood, contains a coordination complex of which metal?',
    options: ['Zinc', 'Cobalt', 'Magnesium', 'Iron'],
    correctIndex: 3,
    explanation: 'Haemoglobin contains an iron(II)-porphyrin complex that reversibly binds oxygen molecules for transport in the blood.',
    difficulty: 'easy'
  },
  {
    id: 'coord-63',
    type: 'mcq',
    question: 'Chlorophyll, the pigment essential for photosynthesis in plants, contains a coordination complex of which metal?',
    options: ['Copper', 'Magnesium', 'Cobalt', 'Iron'],
    correctIndex: 1,
    explanation: 'Chlorophyll contains a magnesium-porphyrin complex, essential for capturing light energy during photosynthesis.',
    difficulty: 'easy'
  },
  {
    id: 'coord-64',
    type: 'mcq',
    question: 'Vitamin B12 (cobalamin) contains a coordination complex of which metal?',
    options: ['Magnesium', 'Iron', 'Zinc', 'Cobalt'],
    correctIndex: 3,
    explanation: 'Vitamin B12 (cobalamin) contains a coordination complex of cobalt and plays a crucial role in various metabolic processes.',
    difficulty: 'medium'
  },
  {
    id: 'coord-65',
    type: 'mcq',
    question: 'EDTA (ethylenediaminetetraacetic acid) is used clinically as a chelating agent to treat',
    options: ['vitamin B12 deficiency', 'calcium deficiency', 'iron deficiency', 'lead poisoning, by forming a stable, soluble complex with Pb2+ ions that can be excreted'],
    correctIndex: 3,
    explanation: 'EDTA is administered in cases of lead poisoning as it forms a stable, water-soluble chelate complex with Pb2+ ions, facilitating their excretion from the body.',
    difficulty: 'medium'
  },
  {
    id: 'coord-66',
    type: 'mcq',
    question: 'The ligand dimethylglyoxime (DMG) is used in analytical chemistry for the qualitative and quantitative detection of',
    options: ['nickel, forming a characteristic bright red/pink precipitate', 'iron', 'sodium', 'chlorine'],
    correctIndex: 0,
    explanation: 'DMG selectively forms a distinctive bright red (pink) chelate precipitate with nickel(II) ions, making it a valuable reagent for the gravimetric estimation of nickel.',
    difficulty: 'medium'
  },
  {
    id: 'coord-67',
    type: 'mcq',
    question: 'The hardness of water is commonly estimated in analytical chemistry using a titration involving',
    options: ['potassium permanganate', 'EDTA, which forms stable complexes with the Ca2+ and Mg2+ ions responsible for hardness', 'sodium hydroxide', 'silver nitrate'],
    correctIndex: 1,
    explanation: 'EDTA titrations are commonly used to determine water hardness by complexing with the Ca2+ and Mg2+ ions responsible for hardness.',
    difficulty: 'medium'
  },
  {
    id: 'coord-68',
    type: 'mcq',
    question: 'Wilkinson\'s catalyst, [RhCl(PPh3)3], is an important coordination compound used industrially as a catalyst for',
    options: [
      'the hydrogenation of alkenes',
      'the decomposition of hydrogen peroxide',
      'the manufacture of ammonia',
      'sulphuric acid manufacture'
    ],
    correctIndex: 0,
    explanation: 'Wilkinson\'s catalyst, a rhodium complex, is widely used as a homogeneous catalyst for the hydrogenation of alkenes.',
    difficulty: 'medium'
  },
  {
    id: 'coord-69',
    type: 'mcq',
    question: 'Complexes of silver and gold are used in electroplating processes because',
    options: [
      'they have no relevance to electroplating whatsoever',
      'they release the metal ions too quickly, causing rough deposition',
      'they help maintain a low, controlled concentration of free metal ions, allowing for a smooth, uniform metal deposit',
      'they prevent any metal deposition from occurring at all'
    ],
    correctIndex: 2,
    explanation: 'By keeping the concentration of free metal ions low and controlled, complexation allows for a more uniform and smooth deposition of metal during electroplating.',
    difficulty: 'medium'
  },
  {
    id: 'coord-70',
    type: 'mcq',
    question: 'Overall, the wide-ranging importance of coordination compounds, as emphasised in this NCERT chapter, spans applications in',
    options: [
      'metallurgy (extraction/purification), biological systems (haemoglobin, chlorophyll, vitamin B12), medicine (cisplatin, EDTA chelation therapy), analytical chemistry, and catalysis',
      'only decorative and ornamental uses, with no practical applications',
      'only theoretical chemistry with no real-world relevance',
      'exclusively in radioactive decay processes'
    ],
    correctIndex: 0,
    explanation: 'Coordination compounds have diverse and significant applications across metallurgy, biology, medicine, analytical chemistry, and industrial catalysis, as highlighted throughout the chapter.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'coord-71',
    type: 'assertion-reason',
    question: 'Assertion (A): A double salt like Mohr\'s salt loses its identity in aqueous solution.\nReason (R): Mohr\'s salt dissociates completely into its constituent simple ions, each of which can be detected by usual qualitative tests.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The complete dissociation into detectable simple ions, as described in R, is exactly why Mohr\'s salt (and other double salts) lose their distinct identity in solution, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-72',
    type: 'assertion-reason',
    question: 'Assertion (A): K4[Fe(CN)6] does not give the standard test for free Fe2+ ions in solution.\nReason (R): The complex ion [Fe(CN)6]4- retains its identity in solution rather than dissociating into free Fe2+ and CN- ions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since the complex ion stays intact rather than releasing free Fe2+ ions, the standard qualitative test for Fe2+ fails, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-73',
    type: 'assertion-reason',
    question: 'Assertion (A): Ethylenediamine (en) is classified as a bidentate ligand.\nReason (R): Ethylenediamine has two nitrogen donor atoms that can simultaneously bind to the same metal centre, forming a five-membered ring.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The presence of two donor nitrogen atoms capable of simultaneous coordination is exactly what defines ethylenediamine as bidentate, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-74',
    type: 'assertion-reason',
    question: 'Assertion (A): Chelate complexes are generally more stable than similar complexes formed with comparable unidentate ligands.\nReason (R): The formation of a ring structure in a chelate complex leads to greater thermodynamic stability, a phenomenon known as the chelate effect.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The stabilising effect of ring formation, known as the chelate effect, is precisely the reason chelate complexes exhibit enhanced stability, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-75',
    type: 'assertion-reason',
    question: 'Assertion (A): The nitrite ion, NO2-, can give rise to linkage isomerism in coordination compounds.\nReason (R): NO2- is an ambidentate ligand, capable of coordinating to the metal through either its nitrogen atom or one of its oxygen atoms.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The dual bonding capability of the nitrite ion described in R is exactly what allows two different linkage isomers to form, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-76',
    type: 'assertion-reason',
    question: 'Assertion (A): [Co(NH3)5Br]SO4 and [Co(NH3)5SO4]Br are ionisation isomers of each other.\nReason (R): In these two compounds, the bromide and sulphate groups exchange their positions between being a coordinated ligand and being a counter ion, producing different ions upon dissolution in water.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This exchange of positions between ligand and counter ion, giving different ions in solution, is precisely the defining feature of ionisation isomerism, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-77',
    type: 'assertion-reason',
    question: 'Assertion (A): [Cr(H2O)6]Cl3 and [Cr(H2O)5Cl]Cl2.H2O are examples of hydrate (solvate) isomerism.\nReason (R): These compounds have the same overall molecular formula but differ in whether a water molecule is coordinated directly to chromium or present as water of crystallisation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This difference in the location of a water molecule, while maintaining the same overall formula, is exactly the hallmark of hydrate isomerism, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-78',
    type: 'assertion-reason',
    question: 'Assertion (A): [Co(en)3]3+ exhibits optical isomerism.\nReason (R): This octahedral complex, with three bidentate ethylenediamine ligands, is chiral and exists as a pair of non-superimposable mirror-image forms.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The chirality resulting from the specific arrangement of the three chelating ethylenediamine ligands is exactly why [Co(en)3]3+ shows optical isomerism, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-79',
    type: 'assertion-reason',
    question: 'Assertion (A): Only the cis isomer of [PtCl2(NH3)2] (cisplatin) shows significant anticancer activity.\nReason (R): The trans isomer of [PtCl2(NH3)2] is generally ineffective as an anticancer agent.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 1,
    explanation: 'Both statements are individually true and factually consistent, but R simply restates the corresponding fact about the trans isomer rather than explaining the underlying reason why the cis geometry specifically confers anticancer activity.',
    difficulty: 'hard'
  },
  {
    id: 'coord-80',
    type: 'assertion-reason',
    question: 'Assertion (A): Valence Bond Theory cannot satisfactorily explain the colour of coordination compounds.\nReason (R): VBT focuses on the type of hybridisation and geometry adopted by the metal, but does not provide a framework for describing the energy levels involved in electronic transitions responsible for colour.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The absence of a detailed energy-level framework in VBT, as described in R, directly explains its inability to satisfactorily account for the colours observed in coordination compounds, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'coord-81',
    type: 'assertion-reason',
    question: 'Assertion (A): In an octahedral crystal field, the d orbitals split into two energy sets, t2g and eg.\nReason (R): The ligands approaching along the axes in an octahedral geometry interact more strongly with the eg orbitals (dz2, dx2-y2), raising their energy relative to the t2g set.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Because the eg orbitals point directly along the axes where the ligands approach in an octahedral field, they experience greater repulsion, raising their energy relative to t2g, correctly explaining the observed splitting pattern in A.',
    difficulty: 'hard'
  },
  {
    id: 'coord-82',
    type: 'assertion-reason',
    question: 'Assertion (A): Strong field ligands tend to favour low spin complexes.\nReason (R): Strong field ligands cause a large crystal field splitting energy (Δo), which, if it exceeds the pairing energy, makes it energetically favourable for electrons to pair up in the lower-energy orbitals rather than occupy higher-energy orbitals singly.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The comparison between crystal field splitting energy and pairing energy, as described in R, is exactly the basis for determining whether a complex adopts a low spin or high spin configuration, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'coord-83',
    type: 'assertion-reason',
    question: 'Assertion (A): Tetrahedral complexes are almost always high spin.\nReason (R): The crystal field splitting in a tetrahedral field (Δt) is generally much smaller than in an octahedral field, and is usually too small to exceed the pairing energy.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since Δt rarely exceeds the pairing energy, electrons tend to remain unpaired (following Hund\'s rule) rather than pair up, which directly explains the high spin nature of most tetrahedral complexes, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'coord-84',
    type: 'assertion-reason',
    question: 'Assertion (A): [Ti(H2O)6]3+ is coloured.\nReason (R): Ti3+ has a d1 electronic configuration, allowing a d-d electronic transition to occur upon absorption of visible light.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The single d electron in Ti3+ can be promoted from the t2g to the eg level upon absorbing visible light, and this d-d transition is exactly what gives the complex its characteristic colour, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-85',
    type: 'assertion-reason',
    question: 'Assertion (A): [Sc(H2O)6]3+ is colourless.\nReason (R): Sc3+ has a d0 configuration, so no d-d electronic transition is possible.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'With zero d electrons present, there is no possibility of a d-d electronic transition, directly explaining why this complex is colourless.',
    difficulty: 'medium'
  },
  {
    id: 'coord-86',
    type: 'assertion-reason',
    question: 'Assertion (A): Crystal Field Theory has limitations in fully describing the metal-ligand bond in coordination compounds.\nReason (R): CFT considers only electrostatic interactions and does not account for the covalent character arising from orbital overlap between metal and ligand.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The exclusion of covalent bonding character, as described in R, is precisely the recognised shortfall of CFT, correctly explaining the limitation mentioned in A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-87',
    type: 'assertion-reason',
    question: 'Assertion (A): In metal carbonyl complexes, the metal-carbon bond is stronger, and the C-O bond weaker, compared to free carbon monoxide.\nReason (R): The metal back-donates electron density from its filled d orbitals into the empty antibonding π* orbital of CO, strengthening the M-C bond and weakening the C-O bond.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The synergic back-donation mechanism described in R is exactly what causes the strengthening of the M-C bond and weakening of the C-O bond relative to free CO, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'coord-88',
    type: 'assertion-reason',
    question: 'Assertion (A): Silver and gold are extracted from their ores using a cyanide solution.\nReason (R): Silver and gold ions form stable, soluble dicyanide complexes such as [Ag(CN)2]- and [Au(CN)2]- with cyanide ions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The formation of stable, soluble cyanide complexes is exactly the chemical basis for using cyanide leaching in the extraction of silver and gold, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-89',
    type: 'assertion-reason',
    question: 'Assertion (A): Impure nickel can be purified using the Mond process.\nReason (R): Nickel reacts with carbon monoxide to form the volatile complex Ni(CO)4, which can be decomposed on heating to obtain pure nickel.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The formation and subsequent thermal decomposition of volatile Ni(CO)4 is exactly the mechanism by which the Mond process purifies nickel, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-90',
    type: 'assertion-reason',
    question: 'Assertion (A): EDTA is used in the treatment of lead poisoning.\nReason (R): EDTA forms a stable, water-soluble chelate complex with Pb2+ ions, facilitating their removal from the body via excretion.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The ability of EDTA to chelate and solubilise Pb2+ for excretion is exactly the mechanism underlying its clinical use in treating lead poisoning, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-91',
    type: 'assertion-reason',
    question: 'Assertion (A): Haemoglobin and chlorophyll both contain porphyrin-based coordination complexes.\nReason (R): Haemoglobin contains an iron-porphyrin complex, while chlorophyll contains a magnesium-porphyrin complex.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The specific identification of the respective metals (iron and magnesium) within the shared porphyrin framework directly explains and supports the general statement in A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-92',
    type: 'assertion-reason',
    question: 'Assertion (A): Dimethylglyoxime (DMG) is used for the gravimetric estimation of nickel.\nReason (R): DMG forms a characteristic, insoluble, bright red/pink chelate complex specifically with nickel(II) ions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The formation of a distinctive, insoluble, easily identifiable chelate specifically with nickel is exactly the property that makes DMG useful for gravimetric nickel estimation, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-93',
    type: 'assertion-reason',
    question: 'Assertion (A): Wilkinson\'s catalyst is used industrially for the hydrogenation of alkenes.\nReason (R): Wilkinson\'s catalyst is a coordination complex of platinum, [PtCl(PPh3)3].',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 2,
    explanation: 'A is true — Wilkinson\'s catalyst is indeed used for alkene hydrogenation. However, R is false — Wilkinson\'s catalyst is a rhodium complex, [RhCl(PPh3)3], not a platinum complex.',
    difficulty: 'medium'
  },
  {
    id: 'coord-94',
    type: 'assertion-reason',
    question: 'Assertion (A): The name "hexaamminecobalt(III) chloride" correctly identifies the ligands in alphabetical order followed by the metal and its oxidation state.\nReason (R): IUPAC nomenclature rules require the ligand names to be listed alphabetically (ignoring multiplying prefixes) before the metal name, with the oxidation state indicated by a Roman numeral in parentheses.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This naming convention, exactly as described in R, is the reason the given name follows the pattern shown in A, correctly explaining it.',
    difficulty: 'medium'
  },
  {
    id: 'coord-95',
    type: 'assertion-reason',
    question: 'Assertion (A): The complex ion [Fe(CN)6]4- is named "hexacyanoferrate(II) ion".\nReason (R): Since the complex ion carries a negative overall charge, the metal name is modified with the suffix "-ate", using the Latin-derived name for iron.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The rule requiring the "-ate" suffix for anionic complexes, using the appropriate metal root, directly explains why iron becomes "ferrate" in this anionic complex name, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'coord-96',
    type: 'assertion-reason',
    question: 'Assertion (A): Ligands such as ethylenediamine use the prefixes "bis", "tris", "tetrakis" rather than "di", "tri", "tetra" when indicating their number in a complex name.\nReason (R): Since the ligand name "ethylenediamine" already contains the prefix "di" within it, using "di" again to indicate multiple ligands would create ambiguity.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The potential confusion arising from the ligand\'s own internal "di" prefix is exactly why the alternative "bis/tris/tetrakis" system is used to avoid ambiguity, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-97',
    type: 'assertion-reason',
    question: 'Assertion (A): Coordination number and oxidation state of a metal in a complex are always numerically identical to each other.\nReason (R): Coordination number counts the number of donor atoms bonded to the metal, while oxidation state reflects the metal\'s formal charge, and these are conceptually independent quantities.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — coordination number and oxidation state are generally different and unrelated quantities (e.g., [Co(NH3)6]3+ has coordination number 6 but oxidation state +3). R correctly explains why these two concepts are distinct.',
    difficulty: 'medium'
  },
  {
    id: 'coord-98',
    type: 'assertion-reason',
    question: 'Assertion (A): Square planar complexes of the type MA2B2 can show cis and trans geometrical isomerism.\nReason (R): In the cis isomer, the two identical ligands (A) are adjacent to each other, while in the trans isomer, they are positioned directly opposite each other.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This precise description of the relative spatial arrangement of identical ligands is exactly what defines and explains the existence of cis and trans isomers in such complexes, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-99',
    type: 'assertion-reason',
    question: 'Assertion (A): Octahedral complexes of type MA3B3 can exist as facial (fac) and meridional (mer) isomers.\nReason (R): In the facial isomer, the three identical ligands occupy positions on one triangular face of the octahedron, while in the meridional isomer, they lie along a plane passing through the metal centre.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This precise geometric description of the fac and mer arrangements is exactly what defines and explains the existence of these two isomeric forms, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-100',
    type: 'assertion-reason',
    question: 'Assertion (A): Coordination compounds have significant importance in analytical chemistry, medicine, metallurgy, and biology.\nReason (R): The wide-ranging examples of EDTA (chelation therapy, water hardness estimation), cisplatin (anticancer drug), cyanide complexation (metal extraction), and porphyrin complexes (haemoglobin, chlorophyll) all illustrate the diverse applications of coordination chemistry.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'These specific, wide-ranging examples given in R collectively support and directly explain the broad statement of importance made in A.',
    difficulty: 'medium'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'coord-101',
    type: 'statement',
    question: 'Statement I: Primary valency, according to Werner\'s theory, is ionisable and corresponds to the oxidation state of the metal.\nStatement II: Secondary valency, according to Werner\'s theory, is non-ionisable and corresponds to the coordination number of the metal.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the two types of valency proposed in Werner\'s theory of coordination compounds.',
    difficulty: 'easy'
  },
  {
    id: 'coord-102',
    type: 'statement',
    question: 'Statement I: A double salt retains its identity in aqueous solution, similar to a coordination compound.\nStatement II: A coordination compound dissociates completely into its simple constituent ions in solution.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — the situation is reversed: a double salt loses its identity and fully dissociates, while a coordination compound retains the identity of its complex ion in solution.',
    difficulty: 'medium'
  },
  {
    id: 'coord-103',
    type: 'statement',
    question: 'Statement I: A unidentate ligand has only one donor atom.\nStatement II: A bidentate ligand has two donor atoms that can bind simultaneously to the same metal centre, forming a ring.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly define unidentate and bidentate ligands respectively.',
    difficulty: 'easy'
  },
  {
    id: 'coord-104',
    type: 'statement',
    question: 'Statement I: NO2- (nitrite) is a classic example of an ambidentate ligand.\nStatement II: SCN- (thiocyanate) is also a classic example of an ambidentate ligand.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both nitrite and thiocyanate are well-known ambidentate ligands, each capable of coordinating through two different donor atoms.',
    difficulty: 'medium'
  },
  {
    id: 'coord-105',
    type: 'statement',
    question: 'Statement I: EDTA4- is a hexadentate ligand.\nStatement II: EDTA4- can occupy all six coordination positions of an octahedral metal centre.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe EDTA4- as a hexadentate ligand capable of fully occupying an octahedral coordination sphere.',
    difficulty: 'medium'
  },
  {
    id: 'coord-106',
    type: 'statement',
    question: 'Statement I: Chelate complexes are generally less stable than similar complexes formed with unidentate ligands.\nStatement II: This reduced stability is known as the chelate effect.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — chelate complexes are actually more stable, not less stable, than comparable unidentate complexes, and this increased stability (not reduced) is what is termed the chelate effect.',
    difficulty: 'medium'
  },
  {
    id: 'coord-107',
    type: 'statement',
    question: 'Statement I: In IUPAC nomenclature, ligand names are listed alphabetically within the complex name.\nStatement II: Anionic ligand names typically end with the suffix "-o".',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe fundamental IUPAC nomenclature rules for coordination compounds.',
    difficulty: 'easy'
  },
  {
    id: 'coord-108',
    type: 'statement',
    question: 'Statement I: Water, as a ligand, is named "aqua".\nStatement II: Ammonia, as a ligand, is named "ammonium".',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — ammonia as a ligand is named "ammine" (with double m), not "ammonium".',
    difficulty: 'medium'
  },
  {
    id: 'coord-109',
    type: 'statement',
    question: 'Statement I: If a complex ion is an anion, the metal name is modified by adding the suffix "-ate".\nStatement II: If a complex is a cation or neutral, the metal name typically remains unchanged.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe how the metal name is treated in IUPAC nomenclature depending on whether the complex is anionic, cationic, or neutral.',
    difficulty: 'medium'
  },
  {
    id: 'coord-110',
    type: 'statement',
    question: 'Statement I: Linkage isomerism arises due to the presence of an ambidentate ligand.\nStatement II: Ionisation isomerism arises due to an interchange between a coordinated ligand and a counter ion.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the causes of linkage isomerism and ionisation isomerism, respectively.',
    difficulty: 'medium'
  },
  {
    id: 'coord-111',
    type: 'statement',
    question: 'Statement I: Coordination isomerism occurs in compounds containing both a complex cation and a complex anion.\nStatement II: Coordination isomerism arises from a different distribution of ligands between the two complex ions.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the requirements and cause of coordination isomerism.',
    difficulty: 'medium'
  },
  {
    id: 'coord-112',
    type: 'statement',
    question: 'Statement I: [Cr(H2O)6]Cl3 and [Cr(H2O)4Cl2]Cl.2H2O are examples of hydrate isomerism.\nStatement II: These compounds differ in whether water molecules are coordinated directly to the metal or present as water of crystallisation.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe this classic example of hydrate (solvate) isomerism.',
    difficulty: 'medium'
  },
  {
    id: 'coord-113',
    type: 'statement',
    question: 'Statement I: Cis and trans geometrical isomers are possible for square planar complexes of type MA2B2.\nStatement II: Facial and meridional isomers are possible for octahedral complexes of type MA3B3.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly identify the types of geometrical isomerism possible for these specific complex formulas.',
    difficulty: 'medium'
  },
  {
    id: 'coord-114',
    type: 'statement',
    question: 'Statement I: Optical isomers are non-superimposable mirror images of each other.\nStatement II: [Co(en)3]3+ is a well-known example of a complex that shows optical isomerism.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe optical isomerism and provide a well-known example of a coordination compound that exhibits it.',
    difficulty: 'medium'
  },
  {
    id: 'coord-115',
    type: 'statement',
    question: 'Statement I: Only the cis isomer of cisplatin, [PtCl2(NH3)2], shows significant anticancer activity.\nStatement II: The trans isomer of [PtCl2(NH3)2] shows equally strong anticancer activity as the cis isomer.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the trans isomer is generally ineffective as an anticancer agent, unlike the cis isomer.',
    difficulty: 'medium'
  },
  {
    id: 'coord-116',
    type: 'statement',
    question: 'Statement I: According to Valence Bond Theory, octahedral complexes can be classified as inner orbital (d2sp3) or outer orbital (sp3d2) complexes.\nStatement II: Inner orbital complexes are generally associated with weak field ligands and high spin arrangements.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — inner orbital complexes are actually associated with strong field ligands and low spin arrangements, not weak field/high spin.',
    difficulty: 'medium'
  },
  {
    id: 'coord-117',
    type: 'statement',
    question: 'Statement I: In an octahedral crystal field, the eg set of orbitals is at higher energy than the t2g set.\nStatement II: This is because the eg orbitals point directly towards the approaching ligands, experiencing greater repulsion.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the octahedral crystal field splitting pattern and the reason behind it.',
    difficulty: 'medium'
  },
  {
    id: 'coord-118',
    type: 'statement',
    question: 'Statement I: CN- is generally considered a strong field ligand.\nStatement II: I- is generally considered a strong field ligand.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — CN- is a strong field ligand. Statement II is incorrect — I- is generally a weak field ligand in the spectrochemical series.',
    difficulty: 'medium'
  },
  {
    id: 'coord-119',
    type: 'statement',
    question: 'Statement I: Colour in coordination compounds generally arises from d-d electronic transitions.\nStatement II: Complexes with d0 or d10 configurations are typically colourless, since d-d transitions are not possible.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the origin of colour in coordination compounds and the exception for d0/d10 configurations.',
    difficulty: 'easy'
  },
  {
    id: 'coord-120',
    type: 'statement',
    question: 'Statement I: Crystal Field Theory treats the metal-ligand bond as being entirely covalent in nature.\nStatement II: This is one of the recognised strengths of Crystal Field Theory, since it accurately represents the true nature of metal-ligand bonding in all complexes.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — CFT actually treats the bond as purely electrostatic (ionic), not covalent, and this is regarded as a limitation of the theory, not a strength, since real metal-ligand bonds often have covalent character.',
    difficulty: 'medium'
  },
  {
    id: 'coord-121',
    type: 'statement',
    question: 'Statement I: In metal carbonyls, CO acts purely as a sigma donor, with no back-donation from the metal.\nStatement II: Synergic bonding in metal carbonyls involves both sigma donation from CO and pi back-donation from the metal.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — CO does not act purely as a sigma donor; back-donation from the metal is a key feature. Statement II correctly describes the synergic bonding mechanism in metal carbonyls.',
    difficulty: 'medium'
  },
  {
    id: 'coord-122',
    type: 'statement',
    question: 'Statement I: Back-donation in metal carbonyls strengthens the metal-carbon bond.\nStatement II: Back-donation in metal carbonyls weakens the carbon-oxygen bond, compared to free CO.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the consequences of back-donation on the metal-carbon and carbon-oxygen bonds in metal carbonyl complexes.',
    difficulty: 'medium'
  },
  {
    id: 'coord-123',
    type: 'statement',
    question: 'Statement I: Coordination compounds play a role in the extraction of silver and gold via cyanide complex formation.\nStatement II: The Mond process for nickel purification relies on the formation of the volatile complex Ni(CO)4.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe important metallurgical applications of coordination chemistry.',
    difficulty: 'medium'
  },
  {
    id: 'coord-124',
    type: 'statement',
    question: 'Statement I: Haemoglobin contains an iron-porphyrin complex.\nStatement II: Chlorophyll contains a cobalt-porphyrin complex.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — chlorophyll contains a magnesium-porphyrin complex, not cobalt.',
    difficulty: 'medium'
  },
  {
    id: 'coord-125',
    type: 'statement',
    question: 'Statement I: Vitamin B12 contains a coordination complex of cobalt.\nStatement II: EDTA is used clinically for the treatment of lead poisoning.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe important biological and medicinal applications of coordination chemistry.',
    difficulty: 'medium'
  },
  {
    id: 'coord-126',
    type: 'statement',
    question: 'Statement I: Dimethylglyoxime is used for the analytical detection and estimation of nickel.\nStatement II: EDTA titrations are commonly used to estimate the hardness of water.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe standard analytical chemistry applications of coordination compounds.',
    difficulty: 'medium'
  },
  {
    id: 'coord-127',
    type: 'statement',
    question: 'Statement I: Wilkinson\'s catalyst is used for the hydrogenation of alkenes.\nStatement II: Wilkinson\'s catalyst is a coordination complex of rhodium.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly identify the application and composition of Wilkinson\'s catalyst.',
    difficulty: 'medium'
  },
  {
    id: 'coord-128',
    type: 'statement',
    question: 'Statement I: Coordination number of a metal is always numerically equal to its oxidation state.\nStatement II: Coordination number refers to the number of donor atoms bonded to the central metal, which is conceptually distinct from oxidation state.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — coordination number and oxidation state are generally different quantities (e.g., in [Co(NH3)6]3+, coordination number is 6 but oxidation state is +3). Statement II correctly clarifies their distinction.',
    difficulty: 'medium'
  },
  {
    id: 'coord-129',
    type: 'statement',
    question: 'Statement I: A homoleptic complex has the metal bound to only one type of ligand.\nStatement II: A heteroleptic complex has the metal bound to more than one type of ligand.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly define homoleptic and heteroleptic complexes.',
    difficulty: 'easy'
  },
  {
    id: 'coord-130',
    type: 'statement',
    question: 'Statement I: The stability of a coordination compound in solution is described by its stability (formation) constant.\nStatement II: A higher stability constant indicates a less stable complex.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — a higher stability constant actually indicates a more stable complex, not a less stable one.',
    difficulty: 'medium'
  },

  // ==================== HOW-MANY (20) ====================
  {
    id: 'coord-131',
    type: 'how-many',
    question: 'How many of the following statements about Werner\'s theory are correct?\n1. Primary valency is ionisable.\n2. Secondary valency is non-ionisable.\n3. Secondary valency corresponds to the oxidation state of the metal.\n4. Primary valency has a fixed spatial arrangement in space.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    explanation: 'Statements 1 and 2 are correct. Statement 3 is false — primary (not secondary) valency corresponds to oxidation state. Statement 4 is false — it is secondary (not primary) valency that has a fixed spatial arrangement.',
    difficulty: 'medium'
  },
  {
    id: 'coord-132',
    type: 'how-many',
    question: 'How many of the following are correctly identified as ambidentate ligands?\n1. Nitrite ion, NO2-\n2. Thiocyanate ion, SCN-\n3. Ethylenediamine\n4. Ethylenediaminetetraacetate (EDTA4-)',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    explanation: 'Statements 1 and 2 correctly identify classic ambidentate ligands. Ethylenediamine (3) is a bidentate (not ambidentate) ligand, and EDTA4- (4) is a hexadentate (not ambidentate) ligand.',
    difficulty: 'medium'
  },
  {
    id: 'coord-133',
    type: 'how-many',
    question: 'How many of the following statements about IUPAC nomenclature of coordination compounds are correct?\n1. Ligand names are listed alphabetically in the complex name.\n2. Anionic ligand names typically end in "-o".\n3. Neutral ligand H2O is named "aqua".\n4. The oxidation state of the metal is never indicated in the name.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the oxidation state is indicated using Roman numerals in parentheses after the metal name.',
    difficulty: 'medium'
  },
  {
    id: 'coord-134',
    type: 'how-many',
    question: 'How many of the following ligand names are correctly matched with their formulas?\n1. Aqua — H2O\n2. Ammine — NH3\n3. Carbonyl — CO\n4. Nitrosyl — NO2-',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correctly matched. Statement 4 is false — "nitrosyl" refers to NO (nitric oxide), not NO2- (which is named nitro or nitrito).',
    difficulty: 'medium'
  },
  {
    id: 'coord-135',
    type: 'how-many',
    question: 'How many of the following pairs of coordination compounds correctly illustrate the specified type of isomerism?\n1. [Co(NH3)5(NO2)]2+ and [Co(NH3)5(ONO)]2+ — linkage isomerism\n2. [Co(NH3)5Br]SO4 and [Co(NH3)5SO4]Br — ionisation isomerism\n3. [Co(NH3)6][Cr(CN)6] and [Cr(NH3)6][Co(CN)6] — coordination isomerism\n4. [Cr(H2O)6]Cl3 and [Cr(H2O)5Cl]Cl2.H2O — geometrical isomerism',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 correctly identify the type of isomerism. Statement 4 is false — this pair illustrates hydrate (solvate) isomerism, not geometrical isomerism.',
    difficulty: 'hard'
  },
  {
    id: 'coord-136',
    type: 'how-many',
    question: 'How many of the following statements about geometrical isomerism are correct?\n1. Square planar MA2B2 complexes can show cis and trans isomers.\n2. Octahedral MA3B3 complexes can show facial and meridional isomers.\n3. In the cis isomer of a square planar MA2B2 complex, the identical ligands are at a 180° angle to each other.\n4. Cisplatin refers to the cis isomer of [PtCl2(NH3)2].',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — in the cis isomer, identical ligands are at a 90° angle (adjacent), not 180°.',
    difficulty: 'medium'
  },
  {
    id: 'coord-137',
    type: 'how-many',
    question: 'How many of the following statements about optical isomerism are correct?\n1. Optical isomers are non-superimposable mirror images.\n2. [Co(en)3]3+ shows optical isomerism.\n3. Optical isomerism is unrelated to chirality.\n4. Optical isomers are also called enantiomers.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — optical isomerism is directly related to chirality, since it arises specifically from chiral (non-superimposable mirror-image) structures.',
    difficulty: 'medium'
  },
  {
    id: 'coord-138',
    type: 'how-many',
    question: 'How many of the following statements about Valence Bond Theory (VBT) are correct?\n1. It explains complex geometry based on the type of hybridisation adopted by the metal.\n2. Inner orbital (d2sp3) complexes are associated with strong field ligands and low spin.\n3. Outer orbital (sp3d2) complexes are associated with weak field ligands and high spin.\n4. VBT provides a fully satisfactory explanation for the colour of coordination compounds.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — VBT is limited in its ability to satisfactorily explain colour in coordination compounds.',
    difficulty: 'medium'
  },
  {
    id: 'coord-139',
    type: 'how-many',
    question: 'How many of the following statements about Crystal Field Theory (CFT) are correct?\n1. It treats the metal-ligand bond as purely electrostatic.\n2. In an octahedral field, d orbitals split into t2g (lower) and eg (higher) sets.\n3. In a tetrahedral field, splitting is generally larger than in an octahedral field.\n4. CFT successfully explains the colour and magnetic properties of many complexes.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — tetrahedral splitting (Δt) is generally smaller, not larger, than octahedral splitting (Δo).',
    difficulty: 'hard'
  },
  {
    id: 'coord-140',
    type: 'how-many',
    question: 'How many of the following ligands are generally classified as strong field ligands in the spectrochemical series?\n1. CN- (cyanide)\n2. CO (carbonyl)\n3. I- (iodide)\n4. F- (fluoride)',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    explanation: 'CN- and CO (statements 1 and 2) are classic strong field ligands. I- and F- (statements 3 and 4) are generally considered weak to moderately weak field ligands in the spectrochemical series.',
    difficulty: 'medium'
  },
  {
    id: 'coord-141',
    type: 'how-many',
    question: 'How many of the following statements about colour in coordination compounds are correct?\n1. Colour generally arises from d-d electronic transitions.\n2. Complexes with d0 configuration are typically colourless.\n3. Complexes with d10 configuration are typically colourless.\n4. [Ti(H2O)6]3+, with a d1 configuration, is colourless.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — [Ti(H2O)6]3+ is coloured (violet), since its d1 configuration allows a d-d transition to occur.',
    difficulty: 'medium'
  },
  {
    id: 'coord-142',
    type: 'how-many',
    question: 'How many of the following statements about bonding in metal carbonyls are correct?\n1. CO acts as a sigma donor to the metal.\n2. The metal back-donates electron density into the antibonding π* orbital of CO.\n3. This synergic bonding weakens the metal-carbon bond.\n4. This synergic bonding weakens the carbon-oxygen bond compared to free CO.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — synergic bonding strengthens (not weakens) the metal-carbon bond.',
    difficulty: 'hard'
  },
  {
    id: 'coord-143',
    type: 'how-many',
    question: 'How many of the following metals are correctly matched with their biologically important coordination compound?\n1. Iron — haemoglobin\n2. Magnesium — chlorophyll\n3. Cobalt — vitamin B12\n4. Zinc — chlorophyll',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correctly matched. Statement 4 is false — chlorophyll contains magnesium, not zinc.',
    difficulty: 'medium'
  },
  {
    id: 'coord-144',
    type: 'how-many',
    question: 'How many of the following statements about applications of coordination compounds are correct?\n1. Cyanide complexes are used in the extraction of silver and gold.\n2. Ni(CO)4 is used in the Mond process for nickel purification.\n3. EDTA is used to treat lead poisoning.\n4. DMG is used for the analytical detection of iron.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — DMG is used for the detection and estimation of nickel, not iron.',
    difficulty: 'medium'
  },
  {
    id: 'coord-145',
    type: 'how-many',
    question: 'How many of the following statements about cisplatin are correct?\n1. Cisplatin is the cis isomer of [PtCl2(NH3)2].\n2. Cisplatin is used as an anticancer drug.\n3. The trans isomer of [PtCl2(NH3)2] is equally effective as an anticancer drug.\n4. Only the cis geometry confers significant biological activity in this system.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — the trans isomer is generally ineffective as an anticancer agent, unlike the cis isomer.',
    difficulty: 'medium'
  },
  {
    id: 'coord-146',
    type: 'how-many',
    question: 'How many of the following statements about double salts and coordination compounds are correct?\n1. A double salt dissociates completely into its constituent ions in solution.\n2. A coordination compound\'s complex ion retains its identity in solution.\n3. Mohr\'s salt is an example of a double salt.\n4. K4[Fe(CN)6] behaves exactly like a double salt in solution.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — K4[Fe(CN)6] is a coordination compound, and its complex ion does not dissociate like a double salt would.',
    difficulty: 'medium'
  },
  {
    id: 'coord-147',
    type: 'how-many',
    question: 'How many of the following statements about ligand denticity are correct?\n1. A unidentate ligand has one donor atom.\n2. A bidentate ligand has two donor atoms.\n3. EDTA4- is a hexadentate ligand.\n4. All ambidentate ligands are also classified as polydentate ligands.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — ambidentate ligands typically bind through only one donor atom at a time (from two possible options), so they are not classified as polydentate in the usual sense.',
    difficulty: 'medium'
  },
  {
    id: 'coord-148',
    type: 'how-many',
    question: 'How many of the following statements about chelate complexes are correct?\n1. Chelate complexes are formed by di- or polydentate ligands.\n2. Chelate formation typically increases the stability of a complex.\n3. Ethylenediamine and EDTA are both examples of chelating ligands.\n4. Chelate complexes are always less stable than unidentate complexes.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and contradicts the well-established chelate effect, which shows increased, not decreased, stability.',
    difficulty: 'medium'
  },
  {
    id: 'coord-149',
    type: 'how-many',
    question: 'How many of the following statements about crystal field splitting are correct?\n1. Δo refers to the splitting energy in an octahedral field.\n2. Δt refers to the splitting energy in a tetrahedral field.\n3. Δt is generally larger than Δo for comparable ligands and metal ions.\n4. Strong field ligands generally produce a larger Δo than weak field ligands.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — Δt is generally smaller, not larger, than Δo for a given metal and ligand set.',
    difficulty: 'hard'
  },
  {
    id: 'coord-150',
    type: 'how-many',
    question: 'How many of the following statements correctly summarise key themes of the coordination compounds chapter?\n1. Werner\'s theory distinguishes between primary and secondary valency.\n2. IUPAC nomenclature follows specific rules for naming ligands, indicating oxidation states, and forming anionic complex names.\n3. Various types of structural and stereoisomerism (linkage, ionisation, coordination, hydrate, geometrical, optical) can occur in coordination compounds.\n4. Crystal Field Theory and Valence Bond Theory each have their own strengths and limitations in explaining bonding, colour, and magnetism.\n5. Coordination compounds have no practical relevance outside of theoretical chemistry.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, 3, and 4 correctly summarise major themes of the chapter. Statement 5 is false, since coordination compounds have extensive practical applications in metallurgy, medicine, biology, and analytical chemistry.',
    difficulty: 'medium'
  }
=======
export const COORDINATION_COMPOUNDS = [
  // ==================== MCQ (70) ====================
  {
    id: 'coord-1',
    type: 'mcq',
    question: 'According to Werner\'s theory, the primary valency of a metal in a coordination compound corresponds to its',
    options: [
      'coordination number',
      'oxidation state, and is satisfied by ionisable (negative) ions',
      'atomic number',
      'molecular mass'
    ],
    correctIndex: 1,
    explanation: 'Werner proposed that primary valency is ionisable and corresponds to the oxidation state of the metal, satisfied typically by negative ions.',
    difficulty: 'medium'
  },
  {
    id: 'coord-2',
    type: 'mcq',
    question: 'According to Werner\'s theory, the secondary valency of a metal in a coordination compound',
    options: [
      'is ionisable and corresponds to oxidation state',
      'is non-ionisable, corresponds to the coordination number, and has a fixed spatial arrangement in space',
      'is always equal to the primary valency',
      'has no relation to the geometry of the complex'
    ],
    correctIndex: 1,
    explanation: 'Secondary valency, as proposed by Werner, is non-ionisable, corresponds to the coordination number of the metal, and is directed in space, giving the complex its characteristic geometry.',
    difficulty: 'medium'
  },
  {
    id: 'coord-3',
    type: 'mcq',
    question: 'A key experimental difference between a double salt and a coordination compound is that, in aqueous solution, a double salt',
    options: [
      'retains its complex ion identity, unlike a coordination compound',
      'dissociates completely into its constituent simple ions, each of which can be detected by usual chemical tests',
      'never dissolves in water at all',
      'behaves identically to a coordination compound in every respect'
    ],
    correctIndex: 1,
    explanation: 'Double salts, such as Mohr\'s salt or potash alum, dissociate completely into their constituent simple ions in solution, and each ion can be individually detected, unlike the complex ions of coordination compounds.',
    difficulty: 'medium'
  },
  {
    id: 'coord-4',
    type: 'mcq',
    question: 'Potassium ferrocyanide, K4[Fe(CN)6], does NOT give the usual chemical test for Fe2+ or free CN- ions in solution because',
    options: [
      'it does not actually contain iron or cyanide at all',
      'the complex ion [Fe(CN)6]4- retains its identity in solution and does not dissociate into free Fe2+ and CN- ions',
      'it is not soluble in water',
      'iron and cyanide react to form a completely different compound upon dissolution'
    ],
    correctIndex: 1,
    explanation: 'The complex ion [Fe(CN)6]4- is a coordination entity that remains intact in solution, so the individual Fe2+ and CN- ions are not present as free ions and cannot be detected by standard tests.',
    difficulty: 'medium'
  },
  {
    id: 'coord-5',
    type: 'mcq',
    question: 'A ligand is best described as',
    options: [
      'the central metal atom or ion in a coordination compound',
      'an ion or molecule that can donate a pair of electrons to the central metal atom/ion, forming a coordinate bond',
      'a counter ion balancing the charge of the complex',
      'the overall coordination compound itself'
    ],
    correctIndex: 1,
    explanation: 'A ligand is an ion or molecule capable of donating a lone pair of electrons to the central metal atom or ion, forming a coordinate (dative) bond within the coordination entity.',
    difficulty: 'easy'
  },
  {
    id: 'coord-6',
    type: 'mcq',
    question: 'The coordination number of a metal in a coordination entity is defined as the',
    options: [
      'total number of electrons in the metal atom',
      'number of ligand donor atoms directly bonded to the central metal atom/ion via coordinate bonds',
      'oxidation state of the metal',
      'number of counter ions present outside the coordination sphere'
    ],
    correctIndex: 1,
    explanation: 'Coordination number refers to the number of sigma bonds (donor atoms of ligands) directly bonded to the central metal atom or ion.',
    difficulty: 'easy'
  },
  {
    id: 'coord-7',
    type: 'mcq',
    question: 'A ligand that can bind to the central metal atom through only one donor atom is called a',
    options: ['bidentate ligand', 'polydentate ligand', 'unidentate (monodentate) ligand', 'ambidentate ligand'],
    correctIndex: 2,
    explanation: 'A unidentate (or monodentate) ligand has only one donor atom available to bind to the central metal atom.',
    difficulty: 'easy'
  },
  {
    id: 'coord-8',
    type: 'mcq',
    question: 'A ligand that has two donor atoms and can simultaneously bind to the same metal atom through both, forming a ring, is called a',
    options: ['unidentate ligand', 'bidentate (chelating) ligand', 'ambidentate ligand', 'counter ligand'],
    correctIndex: 1,
    explanation: 'A bidentate ligand has two donor atoms that can bind simultaneously to a single metal centre, forming a ring structure; such ligands are also called chelating ligands.',
    difficulty: 'easy'
  },
  {
    id: 'coord-9',
    type: 'mcq',
    question: 'An ambidentate ligand is one that',
    options: [
      'can bind to the metal through two different donor atoms, but only one at a time',
      'always binds through exactly two atoms simultaneously',
      'has no donor atoms at all',
      'is always negatively charged and monodentate'
    ],
    correctIndex: 0,
    explanation: 'An ambidentate ligand possesses two different potential donor atoms but can coordinate to the metal through only one of them at a given time, giving rise to linkage isomerism.',
    difficulty: 'medium'
  },
  {
    id: 'coord-10',
    type: 'mcq',
    question: 'Which of the following is a classic example of an ambidentate ligand?',
    options: ['Ethylenediamine (en)', 'Nitrito ion, NO2- (can bind via N or O)', 'Water (H2O)', 'Ammonia (NH3)'],
    correctIndex: 1,
    explanation: 'The nitrite ion (NO2-) is a well-known ambidentate ligand, capable of binding to the metal either through the nitrogen atom (nitro) or through an oxygen atom (nitrito).',
    difficulty: 'medium'
  },
  {
    id: 'coord-11',
    type: 'mcq',
    question: 'The thiocyanate ion, SCN-, is another classic example of an ambidentate ligand, since it can bind to the metal through',
    options: [
      'the sulphur atom (thiocyanato-S) or the nitrogen atom (thiocyanato-N/isothiocyanato)',
      'only the carbon atom, never through sulphur or nitrogen',
      'exactly two atoms simultaneously, always',
      'oxygen atoms only'
    ],
    correctIndex: 0,
    explanation: 'The thiocyanate ion can coordinate through either its sulphur atom or its nitrogen atom, making it a classic ambidentate ligand.',
    difficulty: 'medium'
  },
  {
    id: 'coord-12',
    type: 'mcq',
    question: 'A polydentate ligand that has six donor atoms and can occupy all six coordination positions of an octahedral metal centre is',
    options: ['ammonia', 'ethylenediamine', 'ethylenediaminetetraacetate (EDTA4-)', 'chloride ion'],
    correctIndex: 2,
    explanation: 'EDTA4- (ethylenediaminetetraacetate) is a hexadentate ligand, possessing six donor atoms (two nitrogen and four oxygen atoms) capable of occupying all six coordination positions of an octahedral metal ion.',
    difficulty: 'medium'
  },
  {
    id: 'coord-13',
    type: 'mcq',
    question: 'A chelate complex, formed when a di- or polydentate ligand binds to a single metal centre forming one or more rings, is generally',
    options: [
      'less stable than a similar complex formed with unidentate ligands',
      'more stable than a similar complex formed with unidentate ligands, a phenomenon known as the chelate effect',
      'exactly equal in stability to a comparable non-chelate complex',
      'unrelated to overall complex stability'
    ],
    correctIndex: 1,
    explanation: 'Chelate complexes are generally more stable than analogous complexes formed with comparable unidentate ligands, an effect known as the chelate effect.',
    difficulty: 'medium'
  },
  {
    id: 'coord-14',
    type: 'mcq',
    question: 'A homoleptic complex is one in which',
    options: [
      'the metal is bound to more than one kind of ligand',
      'the metal is bound to only one kind of ligand throughout',
      'there are no ligands present at all',
      'the complex has no defined coordination number'
    ],
    correctIndex: 1,
    explanation: 'A homoleptic complex has the central metal bound to only a single type of ligand, e.g. [Co(NH3)6]3+.',
    difficulty: 'easy'
  },
  {
    id: 'coord-15',
    type: 'mcq',
    question: 'A heteroleptic complex is one in which',
    options: [
      'the metal is bound to more than one kind of ligand',
      'the metal is bound to only one kind of ligand',
      'the complex ion has no charge',
      'there is no central metal atom present'
    ],
    correctIndex: 0,
    explanation: 'A heteroleptic complex has the central metal bound to two or more different kinds of ligands, e.g. [Co(NH3)4Cl2]+.',
    difficulty: 'easy'
  },
  {
    id: 'coord-16',
    type: 'mcq',
    question: 'According to IUPAC nomenclature rules, within the name of a coordination compound, the names of ligands are arranged in',
    options: [
      'increasing order of their charge',
      'alphabetical order, regardless of the number of each ligand present or their charge',
      'decreasing order of molecular mass',
      'the order in which they were historically discovered'
    ],
    correctIndex: 1,
    explanation: 'IUPAC rules specify that ligand names within a coordination compound name are listed in alphabetical order, ignoring any multiplying prefixes and regardless of the ligand\'s charge.',
    difficulty: 'medium'
  },
  {
    id: 'coord-17',
    type: 'mcq',
    question: 'According to IUPAC nomenclature, names of anionic ligands typically end with the suffix',
    options: ['-ium', '-ate', '-o', '-yl'],
    correctIndex: 2,
    explanation: 'Anionic ligand names conventionally end in "-o", such as chloro (Cl-), cyano (CN-), and oxalato (C2O4^2-).',
    difficulty: 'medium'
  },
  {
    id: 'coord-18',
    type: 'mcq',
    question: 'In IUPAC nomenclature, the neutral ligand H2O is named as',
    options: ['hydroxo', 'aqua', 'water', 'oxo'],
    correctIndex: 1,
    explanation: 'The neutral ligand water is given the special name "aqua" in coordination compound nomenclature.',
    difficulty: 'easy'
  },
  {
    id: 'coord-19',
    type: 'mcq',
    question: 'In IUPAC nomenclature, the neutral ligand NH3 is named as',
    options: ['ammonium', 'amine', 'ammine', 'nitrido'],
    correctIndex: 2,
    explanation: 'The neutral ligand ammonia is named "ammine" (with a double m) in coordination nomenclature, distinct from the organic term "amine".',
    difficulty: 'easy'
  },
  {
    id: 'coord-20',
    type: 'mcq',
    question: 'In IUPAC nomenclature, the neutral ligand CO is named as',
    options: ['carbonate', 'carbonyl', 'oxocarbon', 'carbonido'],
    correctIndex: 1,
    explanation: 'The neutral ligand carbon monoxide is named "carbonyl" when acting as a ligand in coordination compounds.',
    difficulty: 'easy'
  },
  {
    id: 'coord-21',
    type: 'mcq',
    question: 'For simple monodentate ligands, the number of each ligand present in a complex is indicated using the prefixes',
    options: [
      'bis, tris, tetrakis',
      'di, tri, tetra, penta, hexa',
      'sub, super, hyper',
      'mono, dual, triple'
    ],
    correctIndex: 1,
    explanation: 'Simple monodentate ligands use the standard multiplying prefixes di, tri, tetra, and so on to indicate their number in the complex.',
    difficulty: 'easy'
  },
  {
    id: 'coord-22',
    type: 'mcq',
    question: 'When naming a complex containing multiple polydentate or complex-named ligands (such as ethylenediamine), the prefixes used to indicate their number are',
    options: [
      'di, tri, tetra',
      'bis, tris, tetrakis, with the ligand name enclosed in parentheses',
      'mono, sub, hyper',
      'no prefix is ever used for such ligands'
    ],
    correctIndex: 1,
    explanation: 'To avoid ambiguity, ligands whose names already contain prefixes like "di" (such as ethylenediamine) use "bis", "tris", "tetrakis" instead, with the ligand name enclosed in parentheses.',
    difficulty: 'medium'
  },
  {
    id: 'coord-23',
    type: 'mcq',
    question: 'In the IUPAC name of a coordination compound, the oxidation state of the central metal atom is indicated by',
    options: [
      'a superscript immediately before the metal name',
      'a Roman numeral placed in parentheses immediately after the name of the metal',
      'a subscript after the ligand name',
      'the oxidation state is never indicated in the name'
    ],
    correctIndex: 1,
    explanation: 'IUPAC rules require the oxidation state of the central metal to be shown as a Roman numeral in parentheses, placed immediately after the metal\'s name, with no space in between.',
    difficulty: 'medium'
  },
  {
    id: 'coord-24',
    type: 'mcq',
    question: 'If the overall complex ion is an anion, the name of the central metal typically',
    options: [
      'remains completely unchanged',
      'is modified with the suffix "-ate" added to the metal name (or its Latin root)',
      'is dropped entirely from the name',
      'is replaced with the ligand name'
    ],
    correctIndex: 1,
    explanation: 'When the complex ion carries an overall negative charge, the metal name is modified by adding the suffix "-ate" (e.g., ferrate for iron, cobaltate for cobalt).',
    difficulty: 'medium'
  },
  {
    id: 'coord-25',
    type: 'mcq',
    question: 'The correct IUPAC name for the complex ion [Fe(CN)6]4- is',
    options: ['hexacyanoiron(II) ion', 'hexacyanoferrate(II) ion', 'hexacyanidoferrium ion', 'ironhexacyanide(II) ion'],
    correctIndex: 1,
    explanation: 'Since the complex is an anion, the metal name "ferrate" (derived from the Latin "ferrum") is used, with the oxidation state (+2) shown in Roman numerals: hexacyanoferrate(II) ion.',
    difficulty: 'hard'
  },
  {
    id: 'coord-26',
    type: 'mcq',
    question: 'In writing the formula of a coordination compound, the coordination entity (complex ion or molecule) is enclosed within',
    options: ['curly braces { }', 'square brackets [ ]', 'parentheses ( )', 'angle brackets < >'],
    correctIndex: 1,
    explanation: 'By convention, the entire coordination entity, including the central metal and its directly bonded ligands, is enclosed within square brackets in the formula.',
    difficulty: 'easy'
  },
  {
    id: 'coord-27',
    type: 'mcq',
    question: 'Linkage isomerism in coordination compounds arises specifically due to the presence of a(n)',
    options: ['unidentate ligand', 'ambidentate ligand, which can attach through either of its two possible donor atoms', 'polydentate ligand only', 'counter ion outside the coordination sphere'],
    correctIndex: 1,
    explanation: 'Linkage isomerism occurs when an ambidentate ligand, capable of binding through two different donor atoms, attaches via one atom in one isomer and via the other atom in a different isomer.',
    difficulty: 'medium'
  },
  {
    id: 'coord-28',
    type: 'mcq',
    question: 'The pair [Co(NH3)5(NO2)]2+ and [Co(NH3)5(ONO)]2+ is a classic example of which type of isomerism?',
    options: ['Ionisation isomerism', 'Linkage isomerism', 'Coordination isomerism', 'Geometrical isomerism'],
    correctIndex: 1,
    explanation: 'These two complexes differ only in whether the ambidentate nitrite ligand is bound through nitrogen (nitro) or oxygen (nitrito), a classic example of linkage isomerism.',
    difficulty: 'medium'
  },
  {
    id: 'coord-29',
    type: 'mcq',
    question: 'Ionisation isomerism in coordination compounds arises when',
    options: [
      'a counter ion outside the coordination sphere and a ligand inside the coordination sphere are interchanged, giving different ions in solution',
      'two complexes have entirely different molecular formulas',
      'a ligand simply changes its donor atom',
      'water molecules move between being coordinated and being water of crystallisation'
    ],
    correctIndex: 0,
    explanation: 'Ionisation isomers have the same overall molecular formula but differ in which ion (a ligand or a counter ion) is inside versus outside the coordination sphere, producing different ions upon dissociation in water.',
    difficulty: 'medium'
  },
  {
    id: 'coord-30',
    type: 'mcq',
    question: 'The pair [Co(NH3)5Br]SO4 and [Co(NH3)5SO4]Br is a classic example of which type of isomerism?',
    options: ['Linkage isomerism', 'Coordination isomerism', 'Ionisation isomerism', 'Optical isomerism'],
    correctIndex: 2,
    explanation: 'In this pair, the bromide and sulphate groups exchange positions between being a ligand (inside the coordination sphere) and a counter ion (outside), giving different ions in solution — this is ionisation isomerism.',
    difficulty: 'medium'
  },
  {
    id: 'coord-31',
    type: 'mcq',
    question: 'Hydrate (solvate) isomerism arises when',
    options: [
      'water molecules are either directly coordinated to the metal or present as water of crystallisation outside the coordination sphere, giving isomers with the same overall formula',
      'two ligands simply swap their charges',
      'the metal changes its oxidation state',
      'the coordination number of the complex changes'
    ],
    correctIndex: 0,
    explanation: 'Hydrate isomers differ in whether water molecules are coordinated directly to the metal (inside the coordination sphere) or exist as water of crystallisation outside it, while sharing the same overall molecular formula.',
    difficulty: 'medium'
  },
  {
    id: 'coord-32',
    type: 'mcq',
    question: 'The set [Cr(H2O)6]Cl3, [Cr(H2O)5Cl]Cl2.H2O, and [Cr(H2O)4Cl2]Cl.2H2O is a classic illustration of',
    options: ['linkage isomerism', 'hydrate (solvate) isomerism', 'geometrical isomerism', 'optical isomerism'],
    correctIndex: 1,
    explanation: 'These three complexes have the same overall formula but differ in how many water molecules are coordinated directly to chromium versus present as water of crystallisation, a classic example of hydrate isomerism.',
    difficulty: 'medium'
  },
  {
    id: 'coord-33',
    type: 'mcq',
    question: 'Coordination isomerism occurs in compounds containing both a complex cation and a complex anion, and arises from',
    options: [
      'a different distribution of ligands between the cationic and anionic complexes',
      'a change in the ambidentate ligand\'s point of attachment',
      'the exchange of a counter ion with a coordinated ligand',
      'the presence of water of crystallisation'
    ],
    correctIndex: 0,
    explanation: 'Coordination isomerism arises in compounds with both a complex cation and complex anion, when the distribution of ligands between the two complex ions differs between isomers, such as [Co(NH3)6][Cr(CN)6] and [Cr(NH3)6][Co(CN)6].',
    difficulty: 'medium'
  },
  {
    id: 'coord-34',
    type: 'mcq',
    question: 'Geometrical (cis-trans) isomerism is commonly observed in square planar complexes with the general formula',
    options: ['MA4', 'MA2B2', 'MABCD only', 'MA6'],
    correctIndex: 1,
    explanation: 'Square planar complexes of the type MA2B2 (two pairs of different ligands) show cis (adjacent) and trans (opposite) geometrical isomers.',
    difficulty: 'medium'
  },
  {
    id: 'coord-35',
    type: 'mcq',
    question: 'In the cis isomer of a square planar MA2B2 complex, the two identical ligands (A) are positioned',
    options: [
      'adjacent to each other, at a 90° angle',
      'directly opposite each other, at a 180° angle',
      'in a random, undefined arrangement',
      'always above and below the plane'
    ],
    correctIndex: 0,
    explanation: 'In the cis isomer, the two identical ligands occupy adjacent positions relative to each other in the square plane, at a 90° angle.',
    difficulty: 'medium'
  },
  {
    id: 'coord-36',
    type: 'mcq',
    question: 'For an octahedral complex of the general formula MA3B3, the two geometrical isomers possible are called',
    options: ['cis and trans', 'facial (fac) and meridional (mer)', 'left and right', 'axial and equatorial only'],
    correctIndex: 1,
    explanation: 'Octahedral complexes of type MA3B3 exhibit facial (fac, where the three identical ligands occupy one triangular face) and meridional (mer, where the three identical ligands lie in a plane through the metal) isomers.',
    difficulty: 'medium'
  },
  {
    id: 'coord-37',
    type: 'mcq',
    question: 'Optical isomerism in coordination compounds arises when two structures',
    options: [
      'are identical in every way',
      'are non-superimposable mirror images of each other, i.e. chiral, like left and right hands',
      'differ only in oxidation state of the metal',
      'differ only in the counter ion present'
    ],
    correctIndex: 1,
    explanation: 'Optical isomers (enantiomers) are non-superimposable mirror images of each other, a form of chirality analogous to left and right hands.',
    difficulty: 'medium'
  },
  {
    id: 'coord-38',
    type: 'mcq',
    question: 'The octahedral complex [Co(en)3]3+, with three bidentate ethylenediamine ligands, is a well-known example that shows',
    options: ['linkage isomerism only', 'optical isomerism, existing as a pair of non-superimposable mirror-image enantiomers', 'no isomerism at all', 'ionisation isomerism only'],
    correctIndex: 1,
    explanation: '[Co(en)3]3+ is chiral and exists as a pair of optical isomers (enantiomers) that are non-superimposable mirror images of one another.',
    difficulty: 'medium'
  },
  {
    id: 'coord-39',
    type: 'mcq',
    question: 'Cisplatin, cis-[PtCl2(NH3)2], a square planar platinum complex used as an anticancer drug, shows biological activity mainly in its',
    options: [
      'trans isomeric form only',
      'cis isomeric form; the trans isomer is generally not effective as an anticancer agent',
      'both cis and trans forms equally',
      'neither isomeric form; the free platinum ion alone is active'
    ],
    correctIndex: 1,
    explanation: 'Only the cis isomer of [PtCl2(NH3)2] shows significant anticancer activity, while the trans isomer is essentially ineffective, illustrating the biological importance of geometrical isomerism.',
    difficulty: 'medium'
  },
  {
    id: 'coord-40',
    type: 'mcq',
    question: 'According to Valence Bond Theory (VBT), the geometry of a coordination complex is explained on the basis of',
    options: [
      'purely electrostatic interactions between the metal and ligands',
      'the type of hybridisation adopted by the central metal atom/ion',
      'the number of counter ions present',
      'the melting point of the compound'
    ],
    correctIndex: 1,
    explanation: 'Valence Bond Theory attributes the geometry of a coordination complex to the specific type of hybrid orbitals (such as sp3, sp3d2, or d2sp3) adopted by the central metal atom or ion.',
    difficulty: 'medium'
  },
  {
    id: 'coord-41',
    type: 'mcq',
    question: 'According to VBT, an octahedral complex formed using inner d orbitals ((n-1)d orbitals), giving a d2sp3 hybridisation, is generally associated with',
    options: [
      'weak field ligands and a high spin arrangement',
      'strong field ligands and a low spin arrangement',
      'no ligands at all',
      'a tetrahedral geometry instead of octahedral'
    ],
    correctIndex: 1,
    explanation: 'Complexes using inner (n-1)d orbitals in a d2sp3 hybridisation are typically formed with strong field ligands and result in a low spin arrangement (fewer unpaired electrons, since pairing is favoured).',
    difficulty: 'hard'
  },
  {
    id: 'coord-42',
    type: 'mcq',
    question: 'According to VBT, an octahedral complex formed using outer nd orbitals, giving an sp3d2 hybridisation, is generally associated with',
    options: [
      'strong field ligands and a low spin arrangement',
      'weak field ligands and a high spin arrangement',
      'square planar geometry instead of octahedral',
      'exclusively negative oxidation states'
    ],
    correctIndex: 1,
    explanation: 'Complexes using outer nd orbitals in an sp3d2 hybridisation are typically formed with weak field ligands, resulting in a high spin arrangement (more unpaired electrons retained, following Hund\'s rule).',
    difficulty: 'hard'
  },
  {
    id: 'coord-43',
    type: 'mcq',
    question: 'A major limitation of Valence Bond Theory in explaining coordination compounds is that it',
    options: [
      'fails to explain the geometry of any complex',
      'does not provide a quantitative or satisfactory explanation for the colour of coordination compounds',
      'cannot be applied to any octahedral complex',
      'only applies to organic molecules'
    ],
    correctIndex: 1,
    explanation: 'One of the key limitations of VBT is its inability to satisfactorily and quantitatively explain the colour exhibited by many coordination compounds.',
    difficulty: 'medium'
  },
  {
    id: 'coord-44',
    type: 'mcq',
    question: 'Crystal Field Theory (CFT) treats the interaction between the central metal ion and the surrounding ligands as being purely',
    options: [
      'covalent in nature',
      'electrostatic (ionic) in nature, with ligands treated as point charges or dipoles',
      'metallic in nature',
      'nuclear in nature'
    ],
    correctIndex: 1,
    explanation: 'Crystal Field Theory models the metal-ligand interaction as a purely electrostatic (ionic) attraction, treating ligands as point negative charges or dipoles.',
    difficulty: 'medium'
  },
  {
    id: 'coord-45',
    type: 'mcq',
    question: 'In an octahedral crystal field, the five d orbitals of the metal ion split into two sets: a lower-energy set and a higher-energy set, called respectively',
    options: [
      't2g (lower) and eg (higher)',
      'eg (lower) and t2g (higher)',
      'e (lower) and t2 (higher)',
      't2 (lower) and e (higher)'
    ],
    correctIndex: 0,
    explanation: 'In an octahedral crystal field, the d orbitals split into a lower-energy triply degenerate t2g set (dxy, dyz, dxz) and a higher-energy doubly degenerate eg set (dz2, dx2-y2).',
    difficulty: 'medium'
  },
  {
    id: 'coord-46',
    type: 'mcq',
    question: 'The energy difference between the t2g and eg sets of d orbitals in an octahedral crystal field is called',
    options: ['pairing energy', 'crystal field stabilisation energy only', 'crystal field splitting energy, Δo (or 10Dq)', 'hydration energy'],
    correctIndex: 2,
    explanation: 'This energy gap between the split d orbital sets is called the crystal field splitting energy, commonly denoted Δo (or 10Dq) for an octahedral field.',
    difficulty: 'medium'
  },
  {
    id: 'coord-47',
    type: 'mcq',
    question: 'In a tetrahedral crystal field, the splitting pattern of the d orbitals compared to an octahedral field is',
    options: [
      'identical in every way, with no difference at all',
      'reversed in energy order (e set lower, t2 set higher), and generally smaller in magnitude',
      'reversed in energy order, but larger in magnitude than octahedral splitting',
      'not applicable, since d orbitals never split in a tetrahedral field'
    ],
    correctIndex: 1,
    explanation: 'In a tetrahedral field, the splitting pattern is reversed compared to octahedral (e set at lower energy, t2 set at higher energy), and the overall splitting magnitude (Δt) is smaller than the corresponding octahedral splitting (Δo).',
    difficulty: 'hard'
  },
  {
    id: 'coord-48',
    type: 'mcq',
    question: 'Because the crystal field splitting in a tetrahedral field (Δt) is generally quite small compared to typical pairing energies, tetrahedral complexes are almost always',
    options: [
      'low spin complexes',
      'high spin complexes',
      'completely diamagnetic, regardless of the metal',
      'unstable and do not exist'
    ],
    correctIndex: 1,
    explanation: 'Since Δt is usually too small to overcome the pairing energy, electrons tend to remain unpaired as much as possible (following Hund\'s rule), making tetrahedral complexes generally high spin.',
    difficulty: 'hard'
  },
  {
    id: 'coord-49',
    type: 'mcq',
    question: 'A "strong field" ligand, as described in Crystal Field Theory, is one that',
    options: [
      'causes a small crystal field splitting, favouring a high spin configuration',
      'causes a large crystal field splitting, often exceeding the pairing energy and favouring a low spin configuration',
      'never interacts with the metal d orbitals at all',
      'always forms a tetrahedral complex'
    ],
    correctIndex: 1,
    explanation: 'A strong field ligand produces a large crystal field splitting (Δo), which, if greater than the pairing energy, favours electron pairing in the lower-energy orbitals, giving a low spin complex.',
    difficulty: 'medium'
  },
  {
    id: 'coord-50',
    type: 'mcq',
    question: 'In the spectrochemical series, ligands are arranged in order of',
    options: [
      'their molecular mass',
      'increasing crystal field splitting ability (field strength)',
      'their colour when free (uncoordinated)',
      'their solubility in water'
    ],
    correctIndex: 1,
    explanation: 'The spectrochemical series ranks ligands according to their ability to cause crystal field splitting, from weak field ligands to strong field ligands.',
    difficulty: 'medium'
  },
  {
    id: 'coord-51',
    type: 'mcq',
    question: 'In the approximate spectrochemical series, which of the following is generally regarded as a weak field ligand, causing relatively small crystal field splitting?',
    options: ['CN- (cyanide)', 'CO (carbonyl)', 'I- (iodide)', 'en (ethylenediamine)'],
    correctIndex: 2,
    explanation: 'Iodide is towards the weak end of the spectrochemical series, causing relatively small crystal field splitting compared to strong field ligands like CN- and CO.',
    difficulty: 'medium'
  },
  {
    id: 'coord-52',
    type: 'mcq',
    question: 'In the approximate spectrochemical series, which of the following is generally regarded as a strong field ligand, causing large crystal field splitting and favouring low spin complexes?',
    options: ['I- (iodide)', 'F- (fluoride)', 'CN- (cyanide)', 'H2O (aqua)'],
    correctIndex: 2,
    explanation: 'Cyanide (CN-) is one of the strongest field ligands in the spectrochemical series, causing large crystal field splitting and typically favouring low spin complexes.',
    difficulty: 'medium'
  },
  {
    id: 'coord-53',
    type: 'mcq',
    question: 'Crystal Field Theory successfully explains the colour of coordination compounds primarily on the basis of',
    options: [
      'the mass of the metal ion',
      'd-d electronic transitions between the split d orbital sets, which absorb visible light of an energy roughly equal to the crystal field splitting',
      'the total number of ligands present, regardless of their identity',
      'the boiling point of the ligands'
    ],
    correctIndex: 1,
    explanation: 'Colour arises from d-d transitions, where an electron absorbs visible light of energy equal to the crystal field splitting energy to move from the lower-energy to the higher-energy set of d orbitals.',
    difficulty: 'medium'
  },
  {
    id: 'coord-54',
    type: 'mcq',
    question: 'A coordination complex with a d0 or d10 metal ion configuration is generally',
    options: [
      'intensely coloured, due to strong d-d transitions',
      'colourless, since no d-d transition is possible with no or fully filled d electrons',
      'always paramagnetic',
      'unstable and does not exist'
    ],
    correctIndex: 1,
    explanation: 'With either no d electrons (d0) or a completely filled d subshell (d10), there are no possible d-d transitions, so such complexes are typically colourless.',
    difficulty: 'medium'
  },
  {
    id: 'coord-55',
    type: 'mcq',
    question: 'The complex ion [Sc(H2O)6]3+ is colourless because scandium in the +3 state has the electronic configuration',
    options: ['d1', 'd5', 'd0, with no d electrons present', 'd10'],
    correctIndex: 2,
    explanation: 'Sc3+ has a d0 configuration, meaning no d electrons are present at all, so no d-d transition is possible, making the complex colourless.',
    difficulty: 'medium'
  },
  {
    id: 'coord-56',
    type: 'mcq',
    question: 'One major limitation of Crystal Field Theory is that it',
    options: [
      'perfectly and completely accounts for all aspects of metal-ligand bonding, including covalent character',
      'considers only electrostatic interactions and ignores the covalent character of the metal-ligand bond, such as orbital overlap',
      'cannot explain colour or magnetic properties at all',
      'applies exclusively to organic molecules'
    ],
    correctIndex: 1,
    explanation: 'Since CFT treats the metal-ligand interaction as purely electrostatic, it does not account for the covalent character (orbital overlap) present in many metal-ligand bonds, which is a recognised limitation.',
    difficulty: 'medium'
  },
  {
    id: 'coord-57',
    type: 'mcq',
    question: 'In metal carbonyl complexes, the bonding between the metal and CO ligand is best described as',
    options: [
      'a purely ionic bond with no covalent character',
      'synergic bonding, involving both sigma donation from CO to the metal and pi back-donation from the metal to CO',
      'a bond formed only through hydrogen bonding',
      'no bonding at all; CO is merely physically adsorbed'
    ],
    correctIndex: 1,
    explanation: 'Metal carbonyls exhibit synergic bonding: CO donates a lone pair to the metal via a sigma bond, while the metal simultaneously back-donates electron density from filled d orbitals into the empty π* antibonding orbital of CO, strengthening the overall bond.',
    difficulty: 'hard'
  },
  {
    id: 'coord-58',
    type: 'mcq',
    question: 'As a consequence of synergic (M→L back-donation) bonding in metal carbonyls, compared to free CO, the metal-carbon bond generally',
    options: [
      'weakens, while the C-O bond strengthens',
      'strengthens, while the C-O bond weakens, since electron density is added to the antibonding orbital of CO',
      'remains completely unaffected',
      'breaks apart entirely'
    ],
    correctIndex: 1,
    explanation: 'Back-donation from the metal into the antibonding π* orbital of CO strengthens the metal-carbon bond (increasing its bond order) while correspondingly weakening the C-O bond, compared to free carbon monoxide.',
    difficulty: 'hard'
  },
  {
    id: 'coord-59',
    type: 'mcq',
    question: 'The stability of a coordination compound in solution is quantitatively described by its',
    options: [
      'melting point',
      'stability constant (formation constant)',
      'molecular mass',
      'boiling point'
    ],
    correctIndex: 1,
    explanation: 'The stability constant (or formation constant) is the equilibrium constant that quantifies the extent to which a coordination complex forms in solution, and higher values indicate greater stability.',
    difficulty: 'medium'
  },
  {
    id: 'coord-60',
    type: 'mcq',
    question: 'Coordination compounds play an important role in the extraction of silver and gold, which are typically leached from their ores using',
    options: [
      'concentrated sulphuric acid',
      'a cyanide solution, forming soluble complexes such as [Ag(CN)2]- and [Au(CN)2]-',
      'concentrated hydrochloric acid',
      'water alone'
    ],
    correctIndex: 1,
    explanation: 'Silver and gold ores are commonly treated with cyanide solutions, which form soluble dicyanoargentate(I) and dicyanoaurate(I) complexes, allowing the precious metals to be extracted.',
    difficulty: 'medium'
  },
  {
    id: 'coord-61',
    type: 'mcq',
    question: 'In the Mond process for the purification of nickel, impure nickel metal is converted into a volatile coordination compound,',
    options: ['NiCl2', 'Ni(CO)4', 'NiSO4', 'Ni(OH)2'],
    correctIndex: 1,
    explanation: 'In the Mond process, impure nickel reacts with carbon monoxide to form the volatile complex nickel tetracarbonyl, Ni(CO)4, which is then decomposed by heating to yield pure nickel.',
    difficulty: 'medium'
  },
  {
    id: 'coord-62',
    type: 'mcq',
    question: 'Haemoglobin, the oxygen-carrying protein in blood, contains a coordination complex of which metal?',
    options: ['Magnesium', 'Iron', 'Cobalt', 'Zinc'],
    correctIndex: 1,
    explanation: 'Haemoglobin contains an iron(II)-porphyrin complex that reversibly binds oxygen molecules for transport in the blood.',
    difficulty: 'easy'
  },
  {
    id: 'coord-63',
    type: 'mcq',
    question: 'Chlorophyll, the pigment essential for photosynthesis in plants, contains a coordination complex of which metal?',
    options: ['Iron', 'Magnesium', 'Cobalt', 'Copper'],
    correctIndex: 1,
    explanation: 'Chlorophyll contains a magnesium-porphyrin complex, essential for capturing light energy during photosynthesis.',
    difficulty: 'easy'
  },
  {
    id: 'coord-64',
    type: 'mcq',
    question: 'Vitamin B12 (cobalamin) contains a coordination complex of which metal?',
    options: ['Iron', 'Magnesium', 'Cobalt', 'Zinc'],
    correctIndex: 2,
    explanation: 'Vitamin B12 (cobalamin) contains a coordination complex of cobalt and plays a crucial role in various metabolic processes.',
    difficulty: 'medium'
  },
  {
    id: 'coord-65',
    type: 'mcq',
    question: 'EDTA (ethylenediaminetetraacetic acid) is used clinically as a chelating agent to treat',
    options: ['iron deficiency', 'lead poisoning, by forming a stable, soluble complex with Pb2+ ions that can be excreted', 'vitamin B12 deficiency', 'calcium deficiency'],
    correctIndex: 1,
    explanation: 'EDTA is administered in cases of lead poisoning as it forms a stable, water-soluble chelate complex with Pb2+ ions, facilitating their excretion from the body.',
    difficulty: 'medium'
  },
  {
    id: 'coord-66',
    type: 'mcq',
    question: 'The ligand dimethylglyoxime (DMG) is used in analytical chemistry for the qualitative and quantitative detection of',
    options: ['iron', 'nickel, forming a characteristic bright red/pink precipitate', 'sodium', 'chlorine'],
    correctIndex: 1,
    explanation: 'DMG selectively forms a distinctive bright red (pink) chelate precipitate with nickel(II) ions, making it a valuable reagent for the gravimetric estimation of nickel.',
    difficulty: 'medium'
  },
  {
    id: 'coord-67',
    type: 'mcq',
    question: 'The hardness of water is commonly estimated in analytical chemistry using a titration involving',
    options: ['potassium permanganate', 'EDTA, which forms stable complexes with the Ca2+ and Mg2+ ions responsible for hardness', 'sodium hydroxide', 'silver nitrate'],
    correctIndex: 1,
    explanation: 'EDTA titrations are commonly used to determine water hardness by complexing with the Ca2+ and Mg2+ ions responsible for hardness.',
    difficulty: 'medium'
  },
  {
    id: 'coord-68',
    type: 'mcq',
    question: 'Wilkinson\'s catalyst, [RhCl(PPh3)3], is an important coordination compound used industrially as a catalyst for',
    options: [
      'sulphuric acid manufacture',
      'the hydrogenation of alkenes',
      'the manufacture of ammonia',
      'the decomposition of hydrogen peroxide'
    ],
    correctIndex: 1,
    explanation: 'Wilkinson\'s catalyst, a rhodium complex, is widely used as a homogeneous catalyst for the hydrogenation of alkenes.',
    difficulty: 'medium'
  },
  {
    id: 'coord-69',
    type: 'mcq',
    question: 'Complexes of silver and gold are used in electroplating processes because',
    options: [
      'they release the metal ions too quickly, causing rough deposition',
      'they help maintain a low, controlled concentration of free metal ions, allowing for a smooth, uniform metal deposit',
      'they prevent any metal deposition from occurring at all',
      'they have no relevance to electroplating whatsoever'
    ],
    correctIndex: 1,
    explanation: 'By keeping the concentration of free metal ions low and controlled, complexation allows for a more uniform and smooth deposition of metal during electroplating.',
    difficulty: 'medium'
  },
  {
    id: 'coord-70',
    type: 'mcq',
    question: 'Overall, the wide-ranging importance of coordination compounds, as emphasised in this NCERT chapter, spans applications in',
    options: [
      'metallurgy (extraction/purification), biological systems (haemoglobin, chlorophyll, vitamin B12), medicine (cisplatin, EDTA chelation therapy), analytical chemistry, and catalysis',
      'only decorative and ornamental uses, with no practical applications',
      'only theoretical chemistry with no real-world relevance',
      'exclusively in radioactive decay processes'
    ],
    correctIndex: 0,
    explanation: 'Coordination compounds have diverse and significant applications across metallurgy, biology, medicine, analytical chemistry, and industrial catalysis, as highlighted throughout the chapter.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'coord-71',
    type: 'assertion-reason',
    question: 'Assertion (A): A double salt like Mohr\'s salt loses its identity in aqueous solution.\nReason (R): Mohr\'s salt dissociates completely into its constituent simple ions, each of which can be detected by usual qualitative tests.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The complete dissociation into detectable simple ions, as described in R, is exactly why Mohr\'s salt (and other double salts) lose their distinct identity in solution, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-72',
    type: 'assertion-reason',
    question: 'Assertion (A): K4[Fe(CN)6] does not give the standard test for free Fe2+ ions in solution.\nReason (R): The complex ion [Fe(CN)6]4- retains its identity in solution rather than dissociating into free Fe2+ and CN- ions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since the complex ion stays intact rather than releasing free Fe2+ ions, the standard qualitative test for Fe2+ fails, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-73',
    type: 'assertion-reason',
    question: 'Assertion (A): Ethylenediamine (en) is classified as a bidentate ligand.\nReason (R): Ethylenediamine has two nitrogen donor atoms that can simultaneously bind to the same metal centre, forming a five-membered ring.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The presence of two donor nitrogen atoms capable of simultaneous coordination is exactly what defines ethylenediamine as bidentate, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-74',
    type: 'assertion-reason',
    question: 'Assertion (A): Chelate complexes are generally more stable than similar complexes formed with comparable unidentate ligands.\nReason (R): The formation of a ring structure in a chelate complex leads to greater thermodynamic stability, a phenomenon known as the chelate effect.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The stabilising effect of ring formation, known as the chelate effect, is precisely the reason chelate complexes exhibit enhanced stability, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-75',
    type: 'assertion-reason',
    question: 'Assertion (A): The nitrite ion, NO2-, can give rise to linkage isomerism in coordination compounds.\nReason (R): NO2- is an ambidentate ligand, capable of coordinating to the metal through either its nitrogen atom or one of its oxygen atoms.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The dual bonding capability of the nitrite ion described in R is exactly what allows two different linkage isomers to form, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-76',
    type: 'assertion-reason',
    question: 'Assertion (A): [Co(NH3)5Br]SO4 and [Co(NH3)5SO4]Br are ionisation isomers of each other.\nReason (R): In these two compounds, the bromide and sulphate groups exchange their positions between being a coordinated ligand and being a counter ion, producing different ions upon dissolution in water.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This exchange of positions between ligand and counter ion, giving different ions in solution, is precisely the defining feature of ionisation isomerism, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-77',
    type: 'assertion-reason',
    question: 'Assertion (A): [Cr(H2O)6]Cl3 and [Cr(H2O)5Cl]Cl2.H2O are examples of hydrate (solvate) isomerism.\nReason (R): These compounds have the same overall molecular formula but differ in whether a water molecule is coordinated directly to chromium or present as water of crystallisation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This difference in the location of a water molecule, while maintaining the same overall formula, is exactly the hallmark of hydrate isomerism, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-78',
    type: 'assertion-reason',
    question: 'Assertion (A): [Co(en)3]3+ exhibits optical isomerism.\nReason (R): This octahedral complex, with three bidentate ethylenediamine ligands, is chiral and exists as a pair of non-superimposable mirror-image forms.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The chirality resulting from the specific arrangement of the three chelating ethylenediamine ligands is exactly why [Co(en)3]3+ shows optical isomerism, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-79',
    type: 'assertion-reason',
    question: 'Assertion (A): Only the cis isomer of [PtCl2(NH3)2] (cisplatin) shows significant anticancer activity.\nReason (R): The trans isomer of [PtCl2(NH3)2] is generally ineffective as an anticancer agent.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 1,
    explanation: 'Both statements are individually true and factually consistent, but R simply restates the corresponding fact about the trans isomer rather than explaining the underlying reason why the cis geometry specifically confers anticancer activity.',
    difficulty: 'hard'
  },
  {
    id: 'coord-80',
    type: 'assertion-reason',
    question: 'Assertion (A): Valence Bond Theory cannot satisfactorily explain the colour of coordination compounds.\nReason (R): VBT focuses on the type of hybridisation and geometry adopted by the metal, but does not provide a framework for describing the energy levels involved in electronic transitions responsible for colour.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The absence of a detailed energy-level framework in VBT, as described in R, directly explains its inability to satisfactorily account for the colours observed in coordination compounds, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'coord-81',
    type: 'assertion-reason',
    question: 'Assertion (A): In an octahedral crystal field, the d orbitals split into two energy sets, t2g and eg.\nReason (R): The ligands approaching along the axes in an octahedral geometry interact more strongly with the eg orbitals (dz2, dx2-y2), raising their energy relative to the t2g set.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Because the eg orbitals point directly along the axes where the ligands approach in an octahedral field, they experience greater repulsion, raising their energy relative to t2g, correctly explaining the observed splitting pattern in A.',
    difficulty: 'hard'
  },
  {
    id: 'coord-82',
    type: 'assertion-reason',
    question: 'Assertion (A): Strong field ligands tend to favour low spin complexes.\nReason (R): Strong field ligands cause a large crystal field splitting energy (Δo), which, if it exceeds the pairing energy, makes it energetically favourable for electrons to pair up in the lower-energy orbitals rather than occupy higher-energy orbitals singly.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The comparison between crystal field splitting energy and pairing energy, as described in R, is exactly the basis for determining whether a complex adopts a low spin or high spin configuration, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'coord-83',
    type: 'assertion-reason',
    question: 'Assertion (A): Tetrahedral complexes are almost always high spin.\nReason (R): The crystal field splitting in a tetrahedral field (Δt) is generally much smaller than in an octahedral field, and is usually too small to exceed the pairing energy.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since Δt rarely exceeds the pairing energy, electrons tend to remain unpaired (following Hund\'s rule) rather than pair up, which directly explains the high spin nature of most tetrahedral complexes, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'coord-84',
    type: 'assertion-reason',
    question: 'Assertion (A): [Ti(H2O)6]3+ is coloured.\nReason (R): Ti3+ has a d1 electronic configuration, allowing a d-d electronic transition to occur upon absorption of visible light.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The single d electron in Ti3+ can be promoted from the t2g to the eg level upon absorbing visible light, and this d-d transition is exactly what gives the complex its characteristic colour, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-85',
    type: 'assertion-reason',
    question: 'Assertion (A): [Sc(H2O)6]3+ is colourless.\nReason (R): Sc3+ has a d0 configuration, so no d-d electronic transition is possible.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'With zero d electrons present, there is no possibility of a d-d electronic transition, directly explaining why this complex is colourless.',
    difficulty: 'medium'
  },
  {
    id: 'coord-86',
    type: 'assertion-reason',
    question: 'Assertion (A): Crystal Field Theory has limitations in fully describing the metal-ligand bond in coordination compounds.\nReason (R): CFT considers only electrostatic interactions and does not account for the covalent character arising from orbital overlap between metal and ligand.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The exclusion of covalent bonding character, as described in R, is precisely the recognised shortfall of CFT, correctly explaining the limitation mentioned in A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-87',
    type: 'assertion-reason',
    question: 'Assertion (A): In metal carbonyl complexes, the metal-carbon bond is stronger, and the C-O bond weaker, compared to free carbon monoxide.\nReason (R): The metal back-donates electron density from its filled d orbitals into the empty antibonding π* orbital of CO, strengthening the M-C bond and weakening the C-O bond.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The synergic back-donation mechanism described in R is exactly what causes the strengthening of the M-C bond and weakening of the C-O bond relative to free CO, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'coord-88',
    type: 'assertion-reason',
    question: 'Assertion (A): Silver and gold are extracted from their ores using a cyanide solution.\nReason (R): Silver and gold ions form stable, soluble dicyanide complexes such as [Ag(CN)2]- and [Au(CN)2]- with cyanide ions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The formation of stable, soluble cyanide complexes is exactly the chemical basis for using cyanide leaching in the extraction of silver and gold, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-89',
    type: 'assertion-reason',
    question: 'Assertion (A): Impure nickel can be purified using the Mond process.\nReason (R): Nickel reacts with carbon monoxide to form the volatile complex Ni(CO)4, which can be decomposed on heating to obtain pure nickel.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The formation and subsequent thermal decomposition of volatile Ni(CO)4 is exactly the mechanism by which the Mond process purifies nickel, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-90',
    type: 'assertion-reason',
    question: 'Assertion (A): EDTA is used in the treatment of lead poisoning.\nReason (R): EDTA forms a stable, water-soluble chelate complex with Pb2+ ions, facilitating their removal from the body via excretion.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The ability of EDTA to chelate and solubilise Pb2+ for excretion is exactly the mechanism underlying its clinical use in treating lead poisoning, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-91',
    type: 'assertion-reason',
    question: 'Assertion (A): Haemoglobin and chlorophyll both contain porphyrin-based coordination complexes.\nReason (R): Haemoglobin contains an iron-porphyrin complex, while chlorophyll contains a magnesium-porphyrin complex.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The specific identification of the respective metals (iron and magnesium) within the shared porphyrin framework directly explains and supports the general statement in A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-92',
    type: 'assertion-reason',
    question: 'Assertion (A): Dimethylglyoxime (DMG) is used for the gravimetric estimation of nickel.\nReason (R): DMG forms a characteristic, insoluble, bright red/pink chelate complex specifically with nickel(II) ions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The formation of a distinctive, insoluble, easily identifiable chelate specifically with nickel is exactly the property that makes DMG useful for gravimetric nickel estimation, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-93',
    type: 'assertion-reason',
    question: 'Assertion (A): Wilkinson\'s catalyst is used industrially for the hydrogenation of alkenes.\nReason (R): Wilkinson\'s catalyst is a coordination complex of platinum, [PtCl(PPh3)3].',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 2,
    explanation: 'A is true — Wilkinson\'s catalyst is indeed used for alkene hydrogenation. However, R is false — Wilkinson\'s catalyst is a rhodium complex, [RhCl(PPh3)3], not a platinum complex.',
    difficulty: 'medium'
  },
  {
    id: 'coord-94',
    type: 'assertion-reason',
    question: 'Assertion (A): The name "hexaamminecobalt(III) chloride" correctly identifies the ligands in alphabetical order followed by the metal and its oxidation state.\nReason (R): IUPAC nomenclature rules require the ligand names to be listed alphabetically (ignoring multiplying prefixes) before the metal name, with the oxidation state indicated by a Roman numeral in parentheses.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This naming convention, exactly as described in R, is the reason the given name follows the pattern shown in A, correctly explaining it.',
    difficulty: 'medium'
  },
  {
    id: 'coord-95',
    type: 'assertion-reason',
    question: 'Assertion (A): The complex ion [Fe(CN)6]4- is named "hexacyanoferrate(II) ion".\nReason (R): Since the complex ion carries a negative overall charge, the metal name is modified with the suffix "-ate", using the Latin-derived name for iron.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The rule requiring the "-ate" suffix for anionic complexes, using the appropriate metal root, directly explains why iron becomes "ferrate" in this anionic complex name, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'coord-96',
    type: 'assertion-reason',
    question: 'Assertion (A): Ligands such as ethylenediamine use the prefixes "bis", "tris", "tetrakis" rather than "di", "tri", "tetra" when indicating their number in a complex name.\nReason (R): Since the ligand name "ethylenediamine" already contains the prefix "di" within it, using "di" again to indicate multiple ligands would create ambiguity.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The potential confusion arising from the ligand\'s own internal "di" prefix is exactly why the alternative "bis/tris/tetrakis" system is used to avoid ambiguity, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-97',
    type: 'assertion-reason',
    question: 'Assertion (A): Coordination number and oxidation state of a metal in a complex are always numerically identical to each other.\nReason (R): Coordination number counts the number of donor atoms bonded to the metal, while oxidation state reflects the metal\'s formal charge, and these are conceptually independent quantities.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — coordination number and oxidation state are generally different and unrelated quantities (e.g., [Co(NH3)6]3+ has coordination number 6 but oxidation state +3). R correctly explains why these two concepts are distinct.',
    difficulty: 'medium'
  },
  {
    id: 'coord-98',
    type: 'assertion-reason',
    question: 'Assertion (A): Square planar complexes of the type MA2B2 can show cis and trans geometrical isomerism.\nReason (R): In the cis isomer, the two identical ligands (A) are adjacent to each other, while in the trans isomer, they are positioned directly opposite each other.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This precise description of the relative spatial arrangement of identical ligands is exactly what defines and explains the existence of cis and trans isomers in such complexes, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-99',
    type: 'assertion-reason',
    question: 'Assertion (A): Octahedral complexes of type MA3B3 can exist as facial (fac) and meridional (mer) isomers.\nReason (R): In the facial isomer, the three identical ligands occupy positions on one triangular face of the octahedron, while in the meridional isomer, they lie along a plane passing through the metal centre.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This precise geometric description of the fac and mer arrangements is exactly what defines and explains the existence of these two isomeric forms, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'coord-100',
    type: 'assertion-reason',
    question: 'Assertion (A): Coordination compounds have significant importance in analytical chemistry, medicine, metallurgy, and biology.\nReason (R): The wide-ranging examples of EDTA (chelation therapy, water hardness estimation), cisplatin (anticancer drug), cyanide complexation (metal extraction), and porphyrin complexes (haemoglobin, chlorophyll) all illustrate the diverse applications of coordination chemistry.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'These specific, wide-ranging examples given in R collectively support and directly explain the broad statement of importance made in A.',
    difficulty: 'medium'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'coord-101',
    type: 'statement',
    question: 'Statement I: Primary valency, according to Werner\'s theory, is ionisable and corresponds to the oxidation state of the metal.\nStatement II: Secondary valency, according to Werner\'s theory, is non-ionisable and corresponds to the coordination number of the metal.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the two types of valency proposed in Werner\'s theory of coordination compounds.',
    difficulty: 'easy'
  },
  {
    id: 'coord-102',
    type: 'statement',
    question: 'Statement I: A double salt retains its identity in aqueous solution, similar to a coordination compound.\nStatement II: A coordination compound dissociates completely into its simple constituent ions in solution.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — the situation is reversed: a double salt loses its identity and fully dissociates, while a coordination compound retains the identity of its complex ion in solution.',
    difficulty: 'medium'
  },
  {
    id: 'coord-103',
    type: 'statement',
    question: 'Statement I: A unidentate ligand has only one donor atom.\nStatement II: A bidentate ligand has two donor atoms that can bind simultaneously to the same metal centre, forming a ring.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly define unidentate and bidentate ligands respectively.',
    difficulty: 'easy'
  },
  {
    id: 'coord-104',
    type: 'statement',
    question: 'Statement I: NO2- (nitrite) is a classic example of an ambidentate ligand.\nStatement II: SCN- (thiocyanate) is also a classic example of an ambidentate ligand.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both nitrite and thiocyanate are well-known ambidentate ligands, each capable of coordinating through two different donor atoms.',
    difficulty: 'medium'
  },
  {
    id: 'coord-105',
    type: 'statement',
    question: 'Statement I: EDTA4- is a hexadentate ligand.\nStatement II: EDTA4- can occupy all six coordination positions of an octahedral metal centre.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe EDTA4- as a hexadentate ligand capable of fully occupying an octahedral coordination sphere.',
    difficulty: 'medium'
  },
  {
    id: 'coord-106',
    type: 'statement',
    question: 'Statement I: Chelate complexes are generally less stable than similar complexes formed with unidentate ligands.\nStatement II: This reduced stability is known as the chelate effect.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — chelate complexes are actually more stable, not less stable, than comparable unidentate complexes, and this increased stability (not reduced) is what is termed the chelate effect.',
    difficulty: 'medium'
  },
  {
    id: 'coord-107',
    type: 'statement',
    question: 'Statement I: In IUPAC nomenclature, ligand names are listed alphabetically within the complex name.\nStatement II: Anionic ligand names typically end with the suffix "-o".',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe fundamental IUPAC nomenclature rules for coordination compounds.',
    difficulty: 'easy'
  },
  {
    id: 'coord-108',
    type: 'statement',
    question: 'Statement I: Water, as a ligand, is named "aqua".\nStatement II: Ammonia, as a ligand, is named "ammonium".',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — ammonia as a ligand is named "ammine" (with double m), not "ammonium".',
    difficulty: 'medium'
  },
  {
    id: 'coord-109',
    type: 'statement',
    question: 'Statement I: If a complex ion is an anion, the metal name is modified by adding the suffix "-ate".\nStatement II: If a complex is a cation or neutral, the metal name typically remains unchanged.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe how the metal name is treated in IUPAC nomenclature depending on whether the complex is anionic, cationic, or neutral.',
    difficulty: 'medium'
  },
  {
    id: 'coord-110',
    type: 'statement',
    question: 'Statement I: Linkage isomerism arises due to the presence of an ambidentate ligand.\nStatement II: Ionisation isomerism arises due to an interchange between a coordinated ligand and a counter ion.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the causes of linkage isomerism and ionisation isomerism, respectively.',
    difficulty: 'medium'
  },
  {
    id: 'coord-111',
    type: 'statement',
    question: 'Statement I: Coordination isomerism occurs in compounds containing both a complex cation and a complex anion.\nStatement II: Coordination isomerism arises from a different distribution of ligands between the two complex ions.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the requirements and cause of coordination isomerism.',
    difficulty: 'medium'
  },
  {
    id: 'coord-112',
    type: 'statement',
    question: 'Statement I: [Cr(H2O)6]Cl3 and [Cr(H2O)4Cl2]Cl.2H2O are examples of hydrate isomerism.\nStatement II: These compounds differ in whether water molecules are coordinated directly to the metal or present as water of crystallisation.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe this classic example of hydrate (solvate) isomerism.',
    difficulty: 'medium'
  },
  {
    id: 'coord-113',
    type: 'statement',
    question: 'Statement I: Cis and trans geometrical isomers are possible for square planar complexes of type MA2B2.\nStatement II: Facial and meridional isomers are possible for octahedral complexes of type MA3B3.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly identify the types of geometrical isomerism possible for these specific complex formulas.',
    difficulty: 'medium'
  },
  {
    id: 'coord-114',
    type: 'statement',
    question: 'Statement I: Optical isomers are non-superimposable mirror images of each other.\nStatement II: [Co(en)3]3+ is a well-known example of a complex that shows optical isomerism.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe optical isomerism and provide a well-known example of a coordination compound that exhibits it.',
    difficulty: 'medium'
  },
  {
    id: 'coord-115',
    type: 'statement',
    question: 'Statement I: Only the cis isomer of cisplatin, [PtCl2(NH3)2], shows significant anticancer activity.\nStatement II: The trans isomer of [PtCl2(NH3)2] shows equally strong anticancer activity as the cis isomer.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the trans isomer is generally ineffective as an anticancer agent, unlike the cis isomer.',
    difficulty: 'medium'
  },
  {
    id: 'coord-116',
    type: 'statement',
    question: 'Statement I: According to Valence Bond Theory, octahedral complexes can be classified as inner orbital (d2sp3) or outer orbital (sp3d2) complexes.\nStatement II: Inner orbital complexes are generally associated with weak field ligands and high spin arrangements.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — inner orbital complexes are actually associated with strong field ligands and low spin arrangements, not weak field/high spin.',
    difficulty: 'medium'
  },
  {
    id: 'coord-117',
    type: 'statement',
    question: 'Statement I: In an octahedral crystal field, the eg set of orbitals is at higher energy than the t2g set.\nStatement II: This is because the eg orbitals point directly towards the approaching ligands, experiencing greater repulsion.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the octahedral crystal field splitting pattern and the reason behind it.',
    difficulty: 'medium'
  },
  {
    id: 'coord-118',
    type: 'statement',
    question: 'Statement I: CN- is generally considered a strong field ligand.\nStatement II: I- is generally considered a strong field ligand.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — CN- is a strong field ligand. Statement II is incorrect — I- is generally a weak field ligand in the spectrochemical series.',
    difficulty: 'medium'
  },
  {
    id: 'coord-119',
    type: 'statement',
    question: 'Statement I: Colour in coordination compounds generally arises from d-d electronic transitions.\nStatement II: Complexes with d0 or d10 configurations are typically colourless, since d-d transitions are not possible.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the origin of colour in coordination compounds and the exception for d0/d10 configurations.',
    difficulty: 'easy'
  },
  {
    id: 'coord-120',
    type: 'statement',
    question: 'Statement I: Crystal Field Theory treats the metal-ligand bond as being entirely covalent in nature.\nStatement II: This is one of the recognised strengths of Crystal Field Theory, since it accurately represents the true nature of metal-ligand bonding in all complexes.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — CFT actually treats the bond as purely electrostatic (ionic), not covalent, and this is regarded as a limitation of the theory, not a strength, since real metal-ligand bonds often have covalent character.',
    difficulty: 'medium'
  },
  {
    id: 'coord-121',
    type: 'statement',
    question: 'Statement I: In metal carbonyls, CO acts purely as a sigma donor, with no back-donation from the metal.\nStatement II: Synergic bonding in metal carbonyls involves both sigma donation from CO and pi back-donation from the metal.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — CO does not act purely as a sigma donor; back-donation from the metal is a key feature. Statement II correctly describes the synergic bonding mechanism in metal carbonyls.',
    difficulty: 'medium'
  },
  {
    id: 'coord-122',
    type: 'statement',
    question: 'Statement I: Back-donation in metal carbonyls strengthens the metal-carbon bond.\nStatement II: Back-donation in metal carbonyls weakens the carbon-oxygen bond, compared to free CO.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the consequences of back-donation on the metal-carbon and carbon-oxygen bonds in metal carbonyl complexes.',
    difficulty: 'medium'
  },
  {
    id: 'coord-123',
    type: 'statement',
    question: 'Statement I: Coordination compounds play a role in the extraction of silver and gold via cyanide complex formation.\nStatement II: The Mond process for nickel purification relies on the formation of the volatile complex Ni(CO)4.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe important metallurgical applications of coordination chemistry.',
    difficulty: 'medium'
  },
  {
    id: 'coord-124',
    type: 'statement',
    question: 'Statement I: Haemoglobin contains an iron-porphyrin complex.\nStatement II: Chlorophyll contains a cobalt-porphyrin complex.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — chlorophyll contains a magnesium-porphyrin complex, not cobalt.',
    difficulty: 'medium'
  },
  {
    id: 'coord-125',
    type: 'statement',
    question: 'Statement I: Vitamin B12 contains a coordination complex of cobalt.\nStatement II: EDTA is used clinically for the treatment of lead poisoning.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe important biological and medicinal applications of coordination chemistry.',
    difficulty: 'medium'
  },
  {
    id: 'coord-126',
    type: 'statement',
    question: 'Statement I: Dimethylglyoxime is used for the analytical detection and estimation of nickel.\nStatement II: EDTA titrations are commonly used to estimate the hardness of water.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe standard analytical chemistry applications of coordination compounds.',
    difficulty: 'medium'
  },
  {
    id: 'coord-127',
    type: 'statement',
    question: 'Statement I: Wilkinson\'s catalyst is used for the hydrogenation of alkenes.\nStatement II: Wilkinson\'s catalyst is a coordination complex of rhodium.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly identify the application and composition of Wilkinson\'s catalyst.',
    difficulty: 'medium'
  },
  {
    id: 'coord-128',
    type: 'statement',
    question: 'Statement I: Coordination number of a metal is always numerically equal to its oxidation state.\nStatement II: Coordination number refers to the number of donor atoms bonded to the central metal, which is conceptually distinct from oxidation state.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — coordination number and oxidation state are generally different quantities (e.g., in [Co(NH3)6]3+, coordination number is 6 but oxidation state is +3). Statement II correctly clarifies their distinction.',
    difficulty: 'medium'
  },
  {
    id: 'coord-129',
    type: 'statement',
    question: 'Statement I: A homoleptic complex has the metal bound to only one type of ligand.\nStatement II: A heteroleptic complex has the metal bound to more than one type of ligand.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly define homoleptic and heteroleptic complexes.',
    difficulty: 'easy'
  },
  {
    id: 'coord-130',
    type: 'statement',
    question: 'Statement I: The stability of a coordination compound in solution is described by its stability (formation) constant.\nStatement II: A higher stability constant indicates a less stable complex.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — a higher stability constant actually indicates a more stable complex, not a less stable one.',
    difficulty: 'medium'
  },

  // ==================== HOW-MANY (20) ====================
  {
    id: 'coord-131',
    type: 'how-many',
    question: 'How many of the following statements about Werner\'s theory are correct?\n1. Primary valency is ionisable.\n2. Secondary valency is non-ionisable.\n3. Secondary valency corresponds to the oxidation state of the metal.\n4. Primary valency has a fixed spatial arrangement in space.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    explanation: 'Statements 1 and 2 are correct. Statement 3 is false — primary (not secondary) valency corresponds to oxidation state. Statement 4 is false — it is secondary (not primary) valency that has a fixed spatial arrangement.',
    difficulty: 'medium'
  },
  {
    id: 'coord-132',
    type: 'how-many',
    question: 'How many of the following are correctly identified as ambidentate ligands?\n1. Nitrite ion, NO2-\n2. Thiocyanate ion, SCN-\n3. Ethylenediamine\n4. Ethylenediaminetetraacetate (EDTA4-)',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    explanation: 'Statements 1 and 2 correctly identify classic ambidentate ligands. Ethylenediamine (3) is a bidentate (not ambidentate) ligand, and EDTA4- (4) is a hexadentate (not ambidentate) ligand.',
    difficulty: 'medium'
  },
  {
    id: 'coord-133',
    type: 'how-many',
    question: 'How many of the following statements about IUPAC nomenclature of coordination compounds are correct?\n1. Ligand names are listed alphabetically in the complex name.\n2. Anionic ligand names typically end in "-o".\n3. Neutral ligand H2O is named "aqua".\n4. The oxidation state of the metal is never indicated in the name.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the oxidation state is indicated using Roman numerals in parentheses after the metal name.',
    difficulty: 'medium'
  },
  {
    id: 'coord-134',
    type: 'how-many',
    question: 'How many of the following ligand names are correctly matched with their formulas?\n1. Aqua — H2O\n2. Ammine — NH3\n3. Carbonyl — CO\n4. Nitrosyl — NO2-',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correctly matched. Statement 4 is false — "nitrosyl" refers to NO (nitric oxide), not NO2- (which is named nitro or nitrito).',
    difficulty: 'medium'
  },
  {
    id: 'coord-135',
    type: 'how-many',
    question: 'How many of the following pairs of coordination compounds correctly illustrate the specified type of isomerism?\n1. [Co(NH3)5(NO2)]2+ and [Co(NH3)5(ONO)]2+ — linkage isomerism\n2. [Co(NH3)5Br]SO4 and [Co(NH3)5SO4]Br — ionisation isomerism\n3. [Co(NH3)6][Cr(CN)6] and [Cr(NH3)6][Co(CN)6] — coordination isomerism\n4. [Cr(H2O)6]Cl3 and [Cr(H2O)5Cl]Cl2.H2O — geometrical isomerism',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 correctly identify the type of isomerism. Statement 4 is false — this pair illustrates hydrate (solvate) isomerism, not geometrical isomerism.',
    difficulty: 'hard'
  },
  {
    id: 'coord-136',
    type: 'how-many',
    question: 'How many of the following statements about geometrical isomerism are correct?\n1. Square planar MA2B2 complexes can show cis and trans isomers.\n2. Octahedral MA3B3 complexes can show facial and meridional isomers.\n3. In the cis isomer of a square planar MA2B2 complex, the identical ligands are at a 180° angle to each other.\n4. Cisplatin refers to the cis isomer of [PtCl2(NH3)2].',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — in the cis isomer, identical ligands are at a 90° angle (adjacent), not 180°.',
    difficulty: 'medium'
  },
  {
    id: 'coord-137',
    type: 'how-many',
    question: 'How many of the following statements about optical isomerism are correct?\n1. Optical isomers are non-superimposable mirror images.\n2. [Co(en)3]3+ shows optical isomerism.\n3. Optical isomerism is unrelated to chirality.\n4. Optical isomers are also called enantiomers.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — optical isomerism is directly related to chirality, since it arises specifically from chiral (non-superimposable mirror-image) structures.',
    difficulty: 'medium'
  },
  {
    id: 'coord-138',
    type: 'how-many',
    question: 'How many of the following statements about Valence Bond Theory (VBT) are correct?\n1. It explains complex geometry based on the type of hybridisation adopted by the metal.\n2. Inner orbital (d2sp3) complexes are associated with strong field ligands and low spin.\n3. Outer orbital (sp3d2) complexes are associated with weak field ligands and high spin.\n4. VBT provides a fully satisfactory explanation for the colour of coordination compounds.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — VBT is limited in its ability to satisfactorily explain colour in coordination compounds.',
    difficulty: 'medium'
  },
  {
    id: 'coord-139',
    type: 'how-many',
    question: 'How many of the following statements about Crystal Field Theory (CFT) are correct?\n1. It treats the metal-ligand bond as purely electrostatic.\n2. In an octahedral field, d orbitals split into t2g (lower) and eg (higher) sets.\n3. In a tetrahedral field, splitting is generally larger than in an octahedral field.\n4. CFT successfully explains the colour and magnetic properties of many complexes.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — tetrahedral splitting (Δt) is generally smaller, not larger, than octahedral splitting (Δo).',
    difficulty: 'hard'
  },
  {
    id: 'coord-140',
    type: 'how-many',
    question: 'How many of the following ligands are generally classified as strong field ligands in the spectrochemical series?\n1. CN- (cyanide)\n2. CO (carbonyl)\n3. I- (iodide)\n4. F- (fluoride)',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    explanation: 'CN- and CO (statements 1 and 2) are classic strong field ligands. I- and F- (statements 3 and 4) are generally considered weak to moderately weak field ligands in the spectrochemical series.',
    difficulty: 'medium'
  },
  {
    id: 'coord-141',
    type: 'how-many',
    question: 'How many of the following statements about colour in coordination compounds are correct?\n1. Colour generally arises from d-d electronic transitions.\n2. Complexes with d0 configuration are typically colourless.\n3. Complexes with d10 configuration are typically colourless.\n4. [Ti(H2O)6]3+, with a d1 configuration, is colourless.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — [Ti(H2O)6]3+ is coloured (violet), since its d1 configuration allows a d-d transition to occur.',
    difficulty: 'medium'
  },
  {
    id: 'coord-142',
    type: 'how-many',
    question: 'How many of the following statements about bonding in metal carbonyls are correct?\n1. CO acts as a sigma donor to the metal.\n2. The metal back-donates electron density into the antibonding π* orbital of CO.\n3. This synergic bonding weakens the metal-carbon bond.\n4. This synergic bonding weakens the carbon-oxygen bond compared to free CO.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — synergic bonding strengthens (not weakens) the metal-carbon bond.',
    difficulty: 'hard'
  },
  {
    id: 'coord-143',
    type: 'how-many',
    question: 'How many of the following metals are correctly matched with their biologically important coordination compound?\n1. Iron — haemoglobin\n2. Magnesium — chlorophyll\n3. Cobalt — vitamin B12\n4. Zinc — chlorophyll',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correctly matched. Statement 4 is false — chlorophyll contains magnesium, not zinc.',
    difficulty: 'medium'
  },
  {
    id: 'coord-144',
    type: 'how-many',
    question: 'How many of the following statements about applications of coordination compounds are correct?\n1. Cyanide complexes are used in the extraction of silver and gold.\n2. Ni(CO)4 is used in the Mond process for nickel purification.\n3. EDTA is used to treat lead poisoning.\n4. DMG is used for the analytical detection of iron.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — DMG is used for the detection and estimation of nickel, not iron.',
    difficulty: 'medium'
  },
  {
    id: 'coord-145',
    type: 'how-many',
    question: 'How many of the following statements about cisplatin are correct?\n1. Cisplatin is the cis isomer of [PtCl2(NH3)2].\n2. Cisplatin is used as an anticancer drug.\n3. The trans isomer of [PtCl2(NH3)2] is equally effective as an anticancer drug.\n4. Only the cis geometry confers significant biological activity in this system.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — the trans isomer is generally ineffective as an anticancer agent, unlike the cis isomer.',
    difficulty: 'medium'
  },
  {
    id: 'coord-146',
    type: 'how-many',
    question: 'How many of the following statements about double salts and coordination compounds are correct?\n1. A double salt dissociates completely into its constituent ions in solution.\n2. A coordination compound\'s complex ion retains its identity in solution.\n3. Mohr\'s salt is an example of a double salt.\n4. K4[Fe(CN)6] behaves exactly like a double salt in solution.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — K4[Fe(CN)6] is a coordination compound, and its complex ion does not dissociate like a double salt would.',
    difficulty: 'medium'
  },
  {
    id: 'coord-147',
    type: 'how-many',
    question: 'How many of the following statements about ligand denticity are correct?\n1. A unidentate ligand has one donor atom.\n2. A bidentate ligand has two donor atoms.\n3. EDTA4- is a hexadentate ligand.\n4. All ambidentate ligands are also classified as polydentate ligands.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — ambidentate ligands typically bind through only one donor atom at a time (from two possible options), so they are not classified as polydentate in the usual sense.',
    difficulty: 'medium'
  },
  {
    id: 'coord-148',
    type: 'how-many',
    question: 'How many of the following statements about chelate complexes are correct?\n1. Chelate complexes are formed by di- or polydentate ligands.\n2. Chelate formation typically increases the stability of a complex.\n3. Ethylenediamine and EDTA are both examples of chelating ligands.\n4. Chelate complexes are always less stable than unidentate complexes.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and contradicts the well-established chelate effect, which shows increased, not decreased, stability.',
    difficulty: 'medium'
  },
  {
    id: 'coord-149',
    type: 'how-many',
    question: 'How many of the following statements about crystal field splitting are correct?\n1. Δo refers to the splitting energy in an octahedral field.\n2. Δt refers to the splitting energy in a tetrahedral field.\n3. Δt is generally larger than Δo for comparable ligands and metal ions.\n4. Strong field ligands generally produce a larger Δo than weak field ligands.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — Δt is generally smaller, not larger, than Δo for a given metal and ligand set.',
    difficulty: 'hard'
  },
  {
    id: 'coord-150',
    type: 'how-many',
    question: 'How many of the following statements correctly summarise key themes of the coordination compounds chapter?\n1. Werner\'s theory distinguishes between primary and secondary valency.\n2. IUPAC nomenclature follows specific rules for naming ligands, indicating oxidation states, and forming anionic complex names.\n3. Various types of structural and stereoisomerism (linkage, ionisation, coordination, hydrate, geometrical, optical) can occur in coordination compounds.\n4. Crystal Field Theory and Valence Bond Theory each have their own strengths and limitations in explaining bonding, colour, and magnetism.\n5. Coordination compounds have no practical relevance outside of theoretical chemistry.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, 3, and 4 correctly summarise major themes of the chapter. Statement 5 is false, since coordination compounds have extensive practical applications in metallurgy, medicine, biology, and analytical chemistry.',
    difficulty: 'medium'
  }
>>>>>>> 9e6ae6a5ea2181b313543ecdc8c39b664ed24496
];