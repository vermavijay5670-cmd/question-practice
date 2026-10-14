export const AMINES = [
  // ==================== MCQ (70) ====================
  {
    id: 'amine-1',
    type: 'mcq',
    question: 'Amines are classified as primary, secondary, or tertiary based on',
    options: [
      'the number of carbon atoms in the molecule',
      'the number of hydrogen atoms of ammonia that have been replaced by alkyl or aryl groups',
      'the molecular mass of the amine',
      'whether the amine is aromatic or aliphatic only'
    ],
    correctIndex: 1,
    explanation: 'Amines are classified based on how many of the three hydrogen atoms of ammonia have been substituted by alkyl or aryl groups: one substitution gives a primary amine, two gives secondary, and three gives tertiary.',
    difficulty: 'easy'
  },
  {
    id: 'amine-2',
    type: 'mcq',
    question: 'A quaternary ammonium salt is formed when',
    options: [
      'a primary amine reacts with water',
      'all four bonds of nitrogen are to carbon atoms (or hydrogen replaced by four organic groups), giving a positively charged nitrogen with no lone pair available',
      'a tertiary amine loses one of its alkyl groups',
      'ammonia is simply dissolved in water'
    ],
    correctIndex: 1,
    explanation: 'A quaternary ammonium salt forms when all four positions around nitrogen are occupied by organic (alkyl/aryl) groups, giving a permanently positively charged nitrogen with no remaining lone pair.',
    difficulty: 'medium'
  },
  {
    id: 'amine-3',
    type: 'mcq',
    question: 'In a simple aliphatic amine, the nitrogen atom is generally',
    options: [
      'sp2 hybridised, with a trigonal planar geometry',
      'sp3 hybridised, with a pyramidal shape and a lone pair occupying the fourth position',
      'sp hybridised, with a linear geometry',
      'not hybridised at all'
    ],
    correctIndex: 1,
    explanation: 'The nitrogen atom in aliphatic amines is sp3 hybridised, adopting a pyramidal shape similar to ammonia, with the lone pair occupying one of the four tetrahedral positions.',
    difficulty: 'medium'
  },
  {
    id: 'amine-4',
    type: 'mcq',
    question: 'In aniline, the lone pair on the nitrogen atom is',
    options: [
      'completely localised on nitrogen, with no interaction with the aromatic ring',
      'partially delocalised into the aromatic ring through resonance, giving the C-N bond partial double bond character',
      'completely transferred to the ring, leaving nitrogen with a formal positive charge at all times',
      'unavailable for any chemical interaction whatsoever'
    ],
    correctIndex: 1,
    explanation: 'The nitrogen lone pair in aniline is delocalised into the aromatic ring via resonance, giving the C-N bond some double bond character and making the nitrogen geometry flatter than in a simple aliphatic amine.',
    difficulty: 'medium'
  },
  {
    id: 'amine-5',
    type: 'mcq',
    question: 'Reduction of a nitro compound using hydrogen gas with a catalyst (or using Fe/HCl or Sn/HCl) gives',
    options: ['an amide', 'a primary amine', 'a secondary amine', 'a nitrile'],
    correctIndex: 1,
    explanation: 'Reduction of a nitro group (-NO2) converts it into a primary amine (-NH2), a widely used method especially for preparing aromatic amines such as aniline from nitrobenzene.',
    difficulty: 'easy'
  },
  {
    id: 'amine-6',
    type: 'mcq',
    question: 'The ammonolysis of an alkyl halide with excess ammonia is generally considered a less-than-ideal method for preparing a pure primary amine because',
    options: [
      'no reaction occurs between alkyl halides and ammonia',
      'the initially formed primary amine can itself act as a nucleophile and react further with more alkyl halide, giving a mixture of primary, secondary, tertiary amines, and a quaternary ammonium salt',
      'ammonolysis only ever produces tertiary amines',
      'ammonolysis destroys the alkyl halide without forming any nitrogen-containing product'
    ],
    correctIndex: 1,
    explanation: 'Since the primary amine product is itself nucleophilic, it can react with additional alkyl halide, leading to a mixture of differently substituted amines and quaternary ammonium salt, making this method impractical for obtaining a single pure amine.',
    difficulty: 'medium'
  },
  {
    id: 'amine-7',
    type: 'mcq',
    question: 'Reduction of a nitrile using LiAlH4 or catalytic hydrogenation gives',
    options: [
      'a primary amine with one more carbon atom than the original nitrile',
      'a secondary amine',
      'a carboxylic acid',
      'an alcohol'
    ],
    correctIndex: 0,
    explanation: 'Reduction of a nitrile (R-C≡N) adds hydrogen across the triple bond, giving a primary amine (R-CH2-NH2) that retains the extra carbon originally present in the nitrile group.',
    difficulty: 'medium'
  },
  {
    id: 'amine-8',
    type: 'mcq',
    question: 'The Gabriel phthalimide synthesis is a method used specifically to prepare',
    options: [
      'pure aromatic (aryl) primary amines',
      'pure primary aliphatic amines, avoiding the formation of secondary or tertiary amine by-products',
      'secondary amines exclusively',
      'quaternary ammonium salts exclusively'
    ],
    correctIndex: 1,
    explanation: 'The Gabriel synthesis allows the clean preparation of a pure primary aliphatic amine, avoiding the over-alkylation problem seen with direct ammonolysis of alkyl halides.',
    difficulty: 'medium'
  },
  {
    id: 'amine-9',
    type: 'mcq',
    question: 'The Gabriel phthalimide synthesis cannot be used to prepare aromatic (aryl) primary amines mainly because',
    options: [
      'phthalimide does not exist as a compound',
      'aryl halides do not readily undergo the nucleophilic substitution reaction with the phthalimide anion required in this synthesis',
      'aromatic amines cannot exist under any circumstances',
      'the reaction produces only secondary amines when aryl halides are used'
    ],
    correctIndex: 1,
    explanation: 'Since aryl halides are generally unreactive towards nucleophilic substitution (as covered in the haloalkanes/haloarenes chapter), they cannot react with the phthalimide anion in the way required for this synthesis, limiting the method to aliphatic primary amines.',
    difficulty: 'medium'
  },
  {
    id: 'amine-10',
    type: 'mcq',
    question: 'The Hofmann bromamide degradation reaction converts an amide into',
    options: [
      'a primary amine with one more carbon atom than the original amide',
      'a primary amine with one carbon atom fewer than the original amide',
      'a secondary amine with the same number of carbon atoms',
      'a nitrile'
    ],
    correctIndex: 1,
    explanation: 'The Hofmann bromamide degradation converts an amide (RCONH2) into a primary amine (RNH2) with one fewer carbon atom, since the carbonyl carbon is lost as carbon dioxide during the reaction sequence.',
    difficulty: 'medium'
  },
  {
    id: 'amine-11',
    type: 'mcq',
    question: 'The Hofmann bromamide degradation reaction uses which combination of reagents to treat the starting amide?',
    options: [
      'concentrated sulphuric acid',
      'bromine and sodium hydroxide (NaOH)',
      'lithium aluminium hydride',
      'ammonia and heat'
    ],
    correctIndex: 1,
    explanation: 'The Hofmann bromamide degradation treats an amide with bromine in the presence of sodium (or potassium) hydroxide, proceeding via an isocyanate intermediate to give the shortened primary amine.',
    difficulty: 'medium'
  },
  {
    id: 'amine-12',
    type: 'mcq',
    question: 'In the mechanism of the Hofmann bromamide degradation reaction, the alkyl (or aryl) group migrates from the carbonyl carbon to the adjacent nitrogen atom in a step best described as',
    options: [
      'a free radical chain process',
      'a concerted 1,2-shift (migration), occurring with retention of configuration at the migrating carbon if it is a stereocentre',
      'a simple acid-base proton transfer with no group migration at all',
      'a random, non-stereospecific rearrangement'
    ],
    correctIndex: 1,
    explanation: 'The key mechanistic step of the Hofmann rearrangement is a concerted migration of the alkyl/aryl group from carbon to nitrogen, which proceeds with retention of configuration at the migrating group if it is chiral.',
    difficulty: 'hard'
  },
  {
    id: 'amine-13',
    type: 'mcq',
    question: 'Reduction of an amide using LiAlH4 gives',
    options: ['a carboxylic acid', 'an amine', 'a nitrile', 'an alcohol'],
    correctIndex: 1,
    explanation: 'LiAlH4 reduces the carbonyl group of an amide, converting it into the corresponding amine.',
    difficulty: 'medium'
  },
  {
    id: 'amine-14',
    type: 'mcq',
    question: 'Primary and secondary amines can form intermolecular hydrogen bonds with each other because they possess',
    options: [
      'a C-H bond',
      'an N-H bond',
      'a lone pair on carbon',
      'no polar bonds at all'
    ],
    correctIndex: 1,
    explanation: 'Since primary and secondary amines retain at least one N-H bond, they can hydrogen bond with each other; tertiary amines, lacking N-H, cannot hydrogen bond in this way.',
    difficulty: 'easy'
  },
  {
    id: 'amine-15',
    type: 'mcq',
    question: 'For isomeric amines of similar molecular mass, boiling points generally follow the order',
    options: [
      'tertiary > secondary > primary',
      'primary > secondary > tertiary',
      'all three types show identical boiling points',
      'tertiary amines always have the highest boiling point due to their larger size'
    ],
    correctIndex: 1,
    explanation: 'Since primary amines have two N-H bonds (allowing more extensive hydrogen bonding) and tertiary amines have none, the boiling point order for isomeric amines is generally primary > secondary > tertiary.',
    difficulty: 'medium'
  },
  {
    id: 'amine-16',
    type: 'mcq',
    question: 'The N-H...N hydrogen bond in amines is generally weaker than the O-H...O hydrogen bond in alcohols mainly because',
    options: [
      'nitrogen is more electronegative than oxygen',
      'nitrogen is less electronegative than oxygen, resulting in a less polarised (and therefore weaker) hydrogen bond',
      'amines do not actually contain any hydrogen atoms',
      'alcohols cannot form hydrogen bonds at all'
    ],
    correctIndex: 1,
    explanation: 'Since nitrogen is less electronegative than oxygen, the N-H bond is less polarised than the O-H bond, resulting in weaker hydrogen bonding in amines compared to alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'amine-17',
    type: 'mcq',
    question: 'Consequently, for comparable molecular mass, amines generally have boiling points that are',
    options: [
      'higher than alcohols but lower than alkanes',
      'lower than alcohols, since the N-H hydrogen bond is weaker than the O-H hydrogen bond, but generally higher than corresponding alkanes',
      'identical to those of alkanes',
      'always higher than alcohols under all conditions'
    ],
    correctIndex: 1,
    explanation: 'Amines generally have boiling points intermediate between alkanes (no hydrogen bonding) and alcohols (stronger O-H hydrogen bonding), owing to the comparatively weaker N-H hydrogen bonding.',
    difficulty: 'medium'
  },
  {
    id: 'amine-18',
    type: 'mcq',
    question: 'Even tertiary amines, which cannot hydrogen bond with each other, show appreciable solubility in water because',
    options: [
      'they can accept hydrogen bonds from water via the lone pair on nitrogen',
      'they undergo complete ionisation in water',
      'they contain an O-H group',
      'they are completely non-polar and dissolve for that reason'
    ],
    correctIndex: 0,
    explanation: 'Even without N-H bonds of their own, tertiary amines can still accept hydrogen bonds from water molecules via the nitrogen lone pair, giving them reasonable water solubility, particularly for smaller amines.',
    difficulty: 'medium'
  },
  {
    id: 'amine-19',
    type: 'mcq',
    question: 'Amines act as bases mainly because of the',
    options: [
      'presence of a lone pair of electrons on the nitrogen atom, available for donation or protonation',
      'presence of a positive charge on nitrogen at all times',
      'absence of any nitrogen atom in their structure',
      'strong acidity of the N-H bond'
    ],
    correctIndex: 0,
    explanation: 'The lone pair of electrons on nitrogen makes amines both Lewis bases (able to donate the lone pair) and Bronsted bases (able to accept a proton), accounting for their characteristic basicity.',
    difficulty: 'easy'
  },
  {
    id: 'amine-20',
    type: 'mcq',
    question: 'Aliphatic amines are generally more basic than ammonia mainly because',
    options: [
      'alkyl groups withdraw electron density from nitrogen',
      'alkyl groups donate electron density towards nitrogen via the inductive (+I) effect, increasing the availability of the lone pair for protonation',
      'aliphatic amines have no lone pair at all',
      'ammonia is not actually basic'
    ],
    correctIndex: 1,
    explanation: 'The electron-donating inductive effect of alkyl groups increases electron density on nitrogen, making the lone pair more available for protonation and hence increasing basicity relative to ammonia.',
    difficulty: 'medium'
  },
  {
    id: 'amine-21',
    type: 'mcq',
    question: 'Aromatic amines such as aniline are generally',
    options: [
      'much more basic than aliphatic amines and ammonia',
      'much less basic than aliphatic amines and ammonia, due to delocalisation of the nitrogen lone pair into the aromatic ring',
      'exactly as basic as aliphatic amines',
      'completely non-basic, with no ability to be protonated at all'
    ],
    correctIndex: 1,
    explanation: 'Since the lone pair on the nitrogen of aniline is significantly delocalised into the aromatic ring through resonance, it is much less available for protonation, making aniline considerably less basic than aliphatic amines or ammonia.',
    difficulty: 'medium'
  },
  {
    id: 'amine-22',
    type: 'mcq',
    question: 'When aniline is protonated to form the anilinium ion, the resulting cation',
    options: [
      'retains the same resonance stabilisation as the free amine, since protonation does not affect resonance',
      'loses the resonance stabilisation associated with the delocalised lone pair, since that lone pair is now used to bond the proton',
      'becomes more stable than the free amine',
      'has no relationship to resonance at all'
    ],
    correctIndex: 1,
    explanation: 'Once the nitrogen lone pair is used to bond the incoming proton, it is no longer available for delocalisation into the ring, so the anilinium ion loses this stabilisation, making protonation of aniline less energetically favourable overall.',
    difficulty: 'hard'
  },
  {
    id: 'amine-23',
    type: 'mcq',
    question: 'An electron-donating substituent (such as -CH3) on the aromatic ring of aniline generally',
    options: [
      'decreases the basicity of the amine',
      'increases the basicity of the amine, by further increasing electron density on nitrogen',
      'has no effect whatsoever on basicity',
      'converts the amine into an acid'
    ],
    correctIndex: 1,
    explanation: 'Electron-donating substituents increase electron density on nitrogen (partially offsetting the delocalisation into the ring), generally increasing the basicity of the substituted aniline compared to aniline itself.',
    difficulty: 'medium'
  },
  {
    id: 'amine-24',
    type: 'mcq',
    question: 'An electron-withdrawing substituent (such as -NO2) on the aromatic ring of aniline generally',
    options: [
      'increases the basicity of the amine',
      'decreases the basicity of the amine, by further withdrawing electron density from nitrogen',
      'has no effect whatsoever on basicity',
      'converts the amine into a much stronger base than ammonia'
    ],
    correctIndex: 1,
    explanation: 'Electron-withdrawing substituents further reduce electron density on nitrogen (via resonance and/or induction), decreasing the basicity of the substituted aniline compared to aniline itself.',
    difficulty: 'medium'
  },
  {
    id: 'amine-25',
    type: 'mcq',
    question: 'In aqueous solution, the basicity order commonly cited in NCERT for simple lower aliphatic (methyl) amines is',
    options: [
      'tertiary > secondary > primary > ammonia',
      'secondary > primary > tertiary > ammonia, reflecting a balance between inductive effects, steric hindrance, and solvation of the resulting ammonium ion',
      'ammonia > primary > secondary > tertiary',
      'primary > tertiary > secondary > ammonia'
    ],
    correctIndex: 1,
    explanation: 'In aqueous solution, the interplay of inductive effects, steric hindrance around nitrogen, and solvation of the ammonium cation typically results in the order secondary > primary > tertiary > ammonia for simple methylamines.',
    difficulty: 'hard'
  },
  {
    id: 'amine-26',
    type: 'mcq',
    question: 'Amines react with acid chlorides or acid anhydrides in a nucleophilic acyl substitution reaction, known as acylation, to give',
    options: ['an alcohol', 'an amide', 'a nitrile', 'an alkene'],
    correctIndex: 1,
    explanation: 'The nucleophilic nitrogen of an amine attacks an acid chloride or anhydride, displacing the leaving group and forming an amide.',
    difficulty: 'easy'
  },
  {
    id: 'amine-27',
    type: 'mcq',
    question: 'The carbylamine (isocyanide) test involves treating an amine with chloroform and alcoholic KOH; a positive result (an offensive-smelling isocyanide) is given specifically by',
    options: [
      'tertiary amines only',
      'primary amines only (both aliphatic and aromatic)',
      'secondary amines only',
      'all classes of amines equally'
    ],
    correctIndex: 1,
    explanation: 'The carbylamine test is specific to primary amines, which react with chloroform and base to form an isocyanide with a characteristic unpleasant odour; secondary and tertiary amines do not give this reaction.',
    difficulty: 'medium'
  },
  {
    id: 'amine-28',
    type: 'mcq',
    question: 'When a primary aliphatic amine reacts with nitrous acid (generated in situ from NaNO2/HCl), the typical observation is',
    options: [
      'formation of a stable, isolable diazonium salt',
      'vigorous effervescence, as nitrogen gas is released while the amine is converted (via an unstable diazonium intermediate) mainly into an alcohol',
      'formation of a yellow oily liquid',
      'no reaction of any kind is observed'
    ],
    correctIndex: 1,
    explanation: 'Primary aliphatic amines form highly unstable diazonium salts with nitrous acid that decompose immediately, releasing nitrogen gas and giving primarily an alcohol as the major organic product.',
    difficulty: 'medium'
  },
  {
    id: 'amine-29',
    type: 'mcq',
    question: 'When a primary aromatic amine (such as aniline) reacts with nitrous acid at low temperature (0-5°C), the product formed is',
    options: [
      'an unstable species that decomposes immediately',
      'a diazonium salt that is reasonably stable at this low temperature',
      'an isocyanide',
      'a secondary amine'
    ],
    correctIndex: 1,
    explanation: 'Primary aromatic amines form diazonium salts with nitrous acid at low temperature that are stabilised (in part by the aromatic ring) and can be kept and used for further reactions as long as the temperature remains low.',
    difficulty: 'medium'
  },
  {
    id: 'amine-30',
    type: 'mcq',
    question: 'When a secondary amine (aliphatic or aromatic) reacts with nitrous acid, the characteristic product formed is',
    options: [
      'a diazonium salt',
      'an N-nitrosamine, typically observed as a yellow oily liquid',
      'an isocyanide',
      'no reaction occurs at all'
    ],
    correctIndex: 1,
    explanation: 'Secondary amines react with nitrous acid to give N-nitrosamines, characteristically observed as yellow oily liquids, distinguishing them from primary and tertiary amines in this test.',
    difficulty: 'medium'
  },
  {
    id: 'amine-31',
    type: 'mcq',
    question: 'When a tertiary aromatic amine such as N,N-dimethylaniline reacts with nitrous acid, since there is no N-H available for typical nitrogen substitution, the reaction instead occurs',
    options: [
      'at the nitrogen atom regardless, forming a diazonium salt',
      'on the aromatic ring, giving a para-substituted C-nitroso compound (since the ring is strongly activated)',
      'nowhere at all; no reaction of any kind occurs',
      'exclusively at the methyl groups attached to nitrogen'
    ],
    correctIndex: 1,
    explanation: 'Since tertiary aromatic amines have no available N-H, the highly activated ring instead undergoes electrophilic substitution with the nitrosating species, typically giving a para-nitroso product.',
    difficulty: 'hard'
  },
  {
    id: 'amine-32',
    type: 'mcq',
    question: 'The -NH2 group in aniline acts, in electrophilic aromatic substitution reactions, as a',
    options: [
      'deactivating and meta-directing group',
      'strongly activating and ortho/para-directing group, due to resonance donation of the nitrogen lone pair into the ring',
      'group with no directing influence at all',
      'weakly activating but meta-directing group'
    ],
    correctIndex: 1,
    explanation: 'Like the -OH group in phenol, the -NH2 group in aniline strongly activates the aromatic ring and directs electrophiles to the ortho and para positions, via resonance donation of the nitrogen lone pair.',
    difficulty: 'medium'
  },
  {
    id: 'amine-33',
    type: 'mcq',
    question: 'Direct nitration of aniline using a nitrating mixture (conc. HNO3/H2SO4) tends to give a significant amount of meta-nitroaniline as a by-product, in addition to the expected ortho/para products, mainly because',
    options: [
      'the -NH2 group is always a meta-director',
      'under the strongly acidic conditions, aniline is protonated to form the anilinium ion, which is deactivating and meta-directing, unlike the free amine',
      'nitric acid reacts only at the meta position of any aromatic ring',
      'aniline does not react with nitrating mixtures at all'
    ],
    correctIndex: 1,
    explanation: 'Since the strongly acidic nitration conditions protonate a significant fraction of aniline into the anilinium ion (which is deactivating and meta-directing), some meta product forms alongside the expected ortho/para products from the small amount of unprotonated aniline.',
    difficulty: 'hard'
  },
  {
    id: 'amine-34',
    type: 'mcq',
    question: 'To achieve a cleaner nitration of aniline favouring ortho/para products, the amino group is typically first "protected" by',
    options: [
      'converting it into a nitro group',
      'acetylation (using acetic anhydride) to form acetanilide, which is then nitrated and later hydrolysed to regenerate the amine',
      'reducing it further to an alkane',
      'converting it into a Grignard reagent'
    ],
    correctIndex: 1,
    explanation: 'Acetylating the amino group to form acetanilide reduces its basicity (making it resistant to protonation under acidic nitration conditions) while still allowing it to activate and direct the ring towards ortho/para substitution; hydrolysis afterward regenerates the free amine.',
    difficulty: 'medium'
  },
  {
    id: 'amine-35',
    type: 'mcq',
    question: 'Bromination of aniline with bromine water (without any catalyst) gives',
    options: [
      'a mixture of mono-brominated products, similar to benzene',
      '2,4,6-tribromoaniline as a white precipitate, due to the strongly activating -NH2 group',
      'no reaction, since aniline is unreactive towards bromine',
      'a meta-substituted bromoaniline'
    ],
    correctIndex: 1,
    explanation: 'Since the -NH2 group strongly activates the aromatic ring, aniline reacts readily with bromine water without a catalyst, giving 2,4,6-tribromoaniline as a white precipitate, similar to the analogous reaction of phenol.',
    difficulty: 'medium'
  },
  {
    id: 'amine-36',
    type: 'mcq',
    question: 'A diazonium salt is prepared by treating a primary aromatic amine with sodium nitrite and hydrochloric acid at a temperature of about',
    options: ['80-100°C', '40-50°C', '0-5°C, since diazonium salts are unstable at higher temperatures', 'exactly 25°C, room temperature'],
    correctIndex: 2,
    explanation: 'Diazotisation is carried out at a low temperature (0-5°C) since diazonium salts decompose readily as temperature increases.',
    difficulty: 'medium'
  },
  {
    id: 'amine-37',
    type: 'mcq',
    question: 'A diazonium salt can undergo a coupling reaction with a phenol or an aromatic amine under mildly alkaline (or neutral) conditions to give',
    options: [
      'an azo compound, containing the characteristic -N=N- linkage, which is often intensely coloured',
      'an alcohol',
      'a nitro compound',
      'no reaction occurs under these conditions'
    ],
    correctIndex: 0,
    explanation: 'Diazonium coupling with phenols or aromatic amines produces azo compounds, characterised by the -N=N- linkage, which are typically intensely coloured and form the basis of many azo dyes.',
    difficulty: 'medium'
  },
  {
    id: 'amine-38',
    type: 'mcq',
    question: 'In diazonium coupling reactions, the new bond generally forms predominantly at the',
    options: ['ortho position of the coupling partner', 'para position of the coupling partner (unless blocked, in which case ortho is favoured)', 'meta position exclusively', 'ipso position, replacing an existing substituent, in all cases'],
    correctIndex: 1,
    explanation: 'Coupling generally occurs predominantly at the para position of the phenol or aromatic amine partner, unless that position is already occupied, in which case ortho coupling becomes favoured instead.',
    difficulty: 'medium'
  },
  {
    id: 'amine-39',
    type: 'mcq',
    question: 'Treatment of a diazonium salt with hypophosphorus acid (H3PO2) or ethanol brings about',
    options: [
      'conversion of the diazonium group into a hydroxyl group',
      'replacement of the diazonium group (-N2+) by hydrogen, a process known as deamination',
      'conversion of the diazonium group into a nitro group',
      'formation of an azo dye'
    ],
    correctIndex: 1,
    explanation: 'Reaction with H3PO2 (or ethanol, which itself gets oxidised in the process) reduces the diazonium group, replacing it with hydrogen — a reaction useful for removing an amino group after it has served its purpose in directing a synthesis.',
    difficulty: 'medium'
  },
  {
    id: 'amine-40',
    type: 'mcq',
    question: 'The strategy of introducing an amino group temporarily (via nitro group reduction), using it to direct another substitution reaction, and then removing it via diazotisation and reduction with H3PO2, is a useful synthetic tactic because',
    options: [
      'the amino group is a permanent, unremovable feature of any synthesis',
      '-NH2 is such a strongly activating and directing group that it can be exploited to control the position of another substituent, then removed once it has served its purpose',
      'amino groups have no effect on aromatic substitution reactions',
      'this strategy is never actually used in real synthetic chemistry'
    ],
    correctIndex: 1,
    explanation: 'Because -NH2 so strongly directs electrophilic substitution, chemists can install it temporarily to control regiochemistry, and then remove it via diazotisation/deamination once its directing role is complete.',
    difficulty: 'hard'
  },
  {
    id: 'amine-41',
    type: 'mcq',
    question: 'Which of the following named reactions is used to convert a diazonium salt into an aryl chloride or bromide, as detailed in the haloalkanes/haloarenes chapter but also relevant here?',
    options: ['Hofmann degradation', 'Sandmeyer reaction', 'Gabriel synthesis', 'Cannizzaro reaction'],
    correctIndex: 1,
    explanation: 'The Sandmeyer reaction converts a diazonium salt into an aryl chloride or bromide using cuprous halides, a reaction relevant to both the haloarenes and amines chapters.',
    difficulty: 'medium'
  },
  {
    id: 'amine-42',
    type: 'mcq',
    question: 'A diazonium salt can be hydrolysed by simply warming its aqueous solution, giving',
    options: ['an alkyl halide', 'phenol, with loss of nitrogen gas', 'an amine', 'a nitrile'],
    correctIndex: 1,
    explanation: 'Warming an aqueous solution of a diazonium salt causes hydrolysis, replacing the diazonium group with a hydroxyl group and releasing nitrogen gas, giving phenol.',
    difficulty: 'medium'
  },
  {
    id: 'amine-43',
    type: 'mcq',
    question: 'The molecular formula of aniline shows it to be a primary aromatic amine with the amino group attached',
    options: [
      'directly to a carbon of the benzene ring',
      'to an sp3 carbon that is itself attached to the ring (benzylic position)',
      'to an alkene carbon',
      'to a carbon bearing a halogen'
    ],
    correctIndex: 0,
    explanation: 'Aniline has the -NH2 group attached directly to a ring carbon of benzene, making it an aromatic (aryl) primary amine.',
    difficulty: 'easy'
  },
  {
    id: 'amine-44',
    type: 'mcq',
    question: 'Amines can act as alkylating agents\' targets — that is, amines react with alkyl halides in a substitution reaction, forming a more highly substituted amine, since amines are generally',
    options: ['poor nucleophiles', 'good nucleophiles, due to the available lone pair on nitrogen', 'completely unreactive towards electrophiles', 'only capable of acting as electrophiles themselves'],
    correctIndex: 1,
    explanation: 'The lone pair on nitrogen makes amines good nucleophiles, capable of displacing a leaving group from an alkyl halide to form a new C-N bond.',
    difficulty: 'medium'
  },
  {
    id: 'amine-45',
    type: 'mcq',
    question: 'The solubility of amines in water generally decreases as',
    options: [
      'the size of the alkyl/aryl group attached to nitrogen increases',
      'the size of the alkyl/aryl group attached to nitrogen decreases',
      'the number of nitrogen atoms increases, with no relation to alkyl group size',
      'solubility is completely independent of molecular structure'
    ],
    correctIndex: 0,
    explanation: 'As with alcohols, increasing the hydrophobic (alkyl/aryl) portion of an amine reduces its overall water solubility, since the hydrocarbon part becomes more dominant relative to the polar amino group.',
    difficulty: 'medium'
  },
  {
    id: 'amine-46',
    type: 'mcq',
    question: 'Which of the following is the correct general order of relative reactivity of amines as nucleophiles compared to alcohols, when reacting with a given electrophile, largely due to nitrogen being less electronegative (and hence holding its lone pair less tightly) than oxygen?',
    options: [
      'Amines are generally weaker nucleophiles than alcohols',
      'Amines are generally stronger nucleophiles than alcohols',
      'Amines and alcohols show identical nucleophilicity in every case',
      'Neither amines nor alcohols can act as nucleophiles'
    ],
    correctIndex: 1,
    explanation: 'Since nitrogen is less electronegative than oxygen, it holds its lone pair less tightly, generally making amines stronger nucleophiles than the corresponding alcohols.',
    difficulty: 'hard'
  },
  {
    id: 'amine-47',
    type: 'mcq',
    question: 'Aromatic primary amines like aniline give a positive carbylamine test, similar to aliphatic primary amines, forming',
    options: [
      'phenyl isocyanide, with a characteristic offensive odour',
      'phenol',
      'benzaldehyde',
      'nitrobenzene'
    ],
    correctIndex: 0,
    explanation: 'Aniline, being a primary amine, reacts with chloroform and alcoholic KOH to form phenyl isocyanide, giving the same characteristic offensive odour seen with aliphatic primary amines.',
    difficulty: 'medium'
  },
  {
    id: 'amine-48',
    type: 'mcq',
    question: 'An amide (RCONH2), unlike an amine, is generally',
    options: [
      'a much stronger base than a comparable amine',
      'a much weaker base than a comparable amine, since the nitrogen lone pair is delocalised into the adjacent carbonyl group by resonance',
      'exactly as basic as the corresponding amine',
      'unrelated in structure to amines'
    ],
    correctIndex: 1,
    explanation: 'The delocalisation of the nitrogen lone pair into the carbonyl group of an amide (similar in spirit to aniline\'s ring delocalisation) significantly reduces its availability for protonation, making amides much weaker bases than comparable amines.',
    difficulty: 'medium'
  },
  {
    id: 'amine-49',
    type: 'mcq',
    question: 'Which classical laboratory test can help distinguish primary, secondary, and tertiary amines from one another, based on differing observations with nitrous acid and with the carbylamine reaction?',
    options: [
      'Tollens\' test alone',
      'A combination of the nitrous acid (diazotisation) test and the carbylamine (isocyanide) test',
      'Fehling\'s test alone',
      'The iodoform test alone'
    ],
    correctIndex: 1,
    explanation: 'Using nitrous acid and the carbylamine test together, since each amine class behaves differently, allows for the systematic distinction between primary, secondary, and tertiary amines.',
    difficulty: 'medium'
  },
  {
    id: 'amine-50',
    type: 'mcq',
    question: 'Alkyl isocyanides (carbylamines), formed in the carbylamine test, are notable for their',
    options: [
      'pleasant, fragrant odour',
      'extremely unpleasant, offensive odour, which is used diagnostically to identify a positive test',
      'complete lack of any smell',
      'explosive nature under all conditions'
    ],
    correctIndex: 1,
    explanation: 'Isocyanides are characteristically foul-smelling compounds, and this offensive odour is precisely what is used to identify a positive carbylamine test.',
    difficulty: 'medium'
  },
  {
    id: 'amine-51',
    type: 'mcq',
    question: 'The nitrogen atom in a tertiary aliphatic amine, unlike in a primary or secondary amine, has',
    options: [
      'two N-H bonds',
      'no N-H bonds at all, since all three positions (besides the lone pair) are occupied by alkyl/aryl groups',
      'one N-H bond',
      'four N-H bonds'
    ],
    correctIndex: 1,
    explanation: 'A tertiary amine has all three substituent positions on nitrogen occupied by alkyl or aryl groups, leaving no N-H bonds at all (only the lone pair remains available).',
    difficulty: 'easy'
  },
  {
    id: 'amine-52',
    type: 'mcq',
    question: 'Comparing amines, alcohols, and alkanes of similar molecular mass, the general boiling point order is best represented as',
    options: [
      'alkanes > amines > alcohols',
      'alcohols > amines > alkanes',
      'amines > alcohols > alkanes',
      'alkanes > alcohols > amines'
    ],
    correctIndex: 1,
    explanation: 'Alcohols, with the strongest hydrogen bonding (O-H), have the highest boiling points; amines, with weaker N-H hydrogen bonding, are intermediate; alkanes, with no hydrogen bonding, have the lowest boiling points among these comparable-mass compounds.',
    difficulty: 'medium'
  },
  {
    id: 'amine-53',
    type: 'mcq',
    question: 'The reaction of an amine with excess methyl iodide, proceeding through successive alkylation steps, can ultimately give a',
    options: [
      'primary amine, regardless of how much methyl iodide is used',
      'quaternary ammonium salt, if enough methyl iodide is used',
      'carboxylic acid',
      'nitrile'
    ],
    correctIndex: 1,
    explanation: 'Successive alkylation of an amine by excess alkyl halide can proceed all the way to exhaustive methylation, ultimately forming a quaternary ammonium salt.',
    difficulty: 'medium'
  },
  {
    id: 'amine-54',
    type: 'mcq',
    question: 'The reaction of aniline with acetic anhydride, giving acetanilide, is an example of',
    options: [
      'a nucleophilic addition reaction',
      'an acylation reaction, in which the amine nitrogen acts as a nucleophile towards the acid anhydride',
      'a diazotisation reaction',
      'an electrophilic aromatic substitution reaction on the ring'
    ],
    correctIndex: 1,
    explanation: 'Aniline\'s nitrogen lone pair attacks the electrophilic carbonyl carbon of acetic anhydride, displacing acetate and forming the amide (acetanilide) via an acylation reaction.',
    difficulty: 'medium'
  },
  {
    id: 'amine-55',
    type: 'mcq',
    question: 'Acetanilide, compared to aniline, is generally',
    options: [
      'a much stronger base',
      'a much weaker base, due to delocalisation of the nitrogen lone pair into the adjacent carbonyl group',
      'exactly as basic as aniline',
      'a much stronger acid than aniline, with no basic character at all'
    ],
    correctIndex: 1,
    explanation: 'Since the nitrogen lone pair of acetanilide is delocalised into the carbonyl group of the acetyl substituent (similar to any amide), acetanilide is significantly less basic than the free amine aniline.',
    difficulty: 'medium'
  },
  {
    id: 'amine-56',
    type: 'mcq',
    question: 'Amines are generally considered good nucleophiles primarily because of the',
    options: [
      'high electronegativity of nitrogen, which pulls electron density away strongly',
      'availability of the lone pair of electrons on nitrogen for donation to an electrophilic centre',
      'complete absence of any lone pair on nitrogen',
      'positive charge that amines always carry'
    ],
    correctIndex: 1,
    explanation: 'The availability of the nitrogen lone pair for donation to an electrophile is exactly what makes amines effective nucleophiles in a wide range of reactions.',
    difficulty: 'easy'
  },
  {
    id: 'amine-57',
    type: 'mcq',
    question: 'Among the various methods for preparing amines, reduction of an amide with LiAlH4 gives',
    options: [
      'an amine with the same number of carbon atoms as the parent amide',
      'an amine with one carbon atom fewer than the parent amide',
      'an amine with one carbon atom more than the parent amide',
      'a nitrile, not an amine'
    ],
    correctIndex: 0,
    explanation: 'LiAlH4 reduction of an amide simply reduces the C=O to CH2, retaining the same carbon skeleton and giving an amine with the same number of carbon atoms as the starting amide.',
    difficulty: 'medium'
  },
  {
    id: 'amine-58',
    type: 'mcq',
    question: 'The Hofmann bromamide degradation is particularly useful synthetically because it allows conversion of an amide into',
    options: [
      'a longer-chain amine, adding a carbon atom',
      'a shorter-chain (one carbon fewer) primary amine, providing a controlled route to specific amines that might be difficult to prepare by other methods',
      'a completely different functional group unrelated to amines',
      'a symmetrical dimeric product'
    ],
    correctIndex: 1,
    explanation: 'The Hofmann degradation offers a reliable, controlled route to primary amines with one fewer carbon than the starting amide, useful in synthetic planning where this specific chain-shortening transformation is needed.',
    difficulty: 'medium'
  },
  {
    id: 'amine-59',
    type: 'mcq',
    question: 'Which of the following best describes the relative basicity comparison between an amine and an amide (both bearing similar alkyl/aryl substituents)?',
    options: [
      'The amine is generally more basic, since the amide nitrogen lone pair is delocalised into the carbonyl group, reducing its availability',
      'The amide is generally more basic than the amine',
      'Both are equally basic in all cases',
      'Neither amines nor amides show any basic character'
    ],
    correctIndex: 0,
    explanation: 'Because the amide nitrogen lone pair is significantly delocalised into the adjacent carbonyl group (reducing its availability for protonation), amines are generally more basic than structurally comparable amides.',
    difficulty: 'medium'
  },
  {
    id: 'amine-60',
    type: 'mcq',
    question: 'The reaction sequence: nitrobenzene → (reduction) → aniline → (acetylation) → acetanilide → (nitration) → nitroacetanilide → (hydrolysis) → nitroaniline, illustrates the general synthetic strategy of',
    options: [
      'randomly modifying a molecule with no particular purpose',
      'protecting a reactive amino group before a subsequent reaction step, then deprotecting it afterward to reveal the free amine',
      'converting an amine permanently into an amide with no possibility of reversal',
      'a purely hypothetical sequence with no real synthetic application'
    ],
    correctIndex: 1,
    explanation: 'This exact sequence demonstrates the standard protecting-group strategy: acetylating the amine before nitration to control reactivity and regiochemistry, then hydrolysing the resulting amide afterward to regenerate the free amine.',
    difficulty: 'medium'
  },
  {
    id: 'amine-61',
    type: 'mcq',
    question: 'The nomenclature suffix commonly used for naming an amine in IUPAC nomenclature is',
    options: ['-ol', '-amine', '-one', '-oic acid'],
    correctIndex: 1,
    explanation: 'IUPAC nomenclature uses the suffix "-amine" to indicate the presence of an amino group in a compound.',
    difficulty: 'easy'
  },
  {
    id: 'amine-62',
    type: 'mcq',
    question: 'Which of the following amines would be expected to give a negative result with both the carbylamine test and the typical nitrous acid tests characteristic of primary/secondary amines (aside from possible ring nitrosation for an aromatic case)?',
    options: [
      'A primary amine',
      'A secondary amine',
      'A tertiary amine',
      'All classes of amines give identical results'
    ],
    correctIndex: 2,
    explanation: 'A tertiary amine gives a negative carbylamine test (specific to primary amines) and does not form a diazonium salt or N-nitrosamine like primary or secondary amines; aliphatic tertiary amines simply form an unstable salt with nitrous acid, showing no easily visible characteristic reaction.',
    difficulty: 'medium'
  },
  {
    id: 'amine-63',
    type: 'mcq',
    question: 'Amines are widely used as intermediates in the synthesis of dyes, drugs, and other important compounds mainly because of their',
    options: [
      'complete chemical inertness',
      'nucleophilic nitrogen atom, which readily participates in a wide range of substitution, addition, and coupling reactions',
      'inability to react with any other functional group',
      'lack of any biological or industrial relevance'
    ],
    correctIndex: 1,
    explanation: 'The versatile nucleophilic nitrogen of amines allows them to participate in numerous synthetic transformations, making them valuable and widely used intermediates in industrial and pharmaceutical chemistry.',
    difficulty: 'medium'
  },
  {
    id: 'amine-64',
    type: 'mcq',
    question: 'A diazonium salt, once formed, is generally handled and used',
    options: [
      'at room temperature or higher, since it is completely stable under all conditions',
      'immediately in solution at low temperature, since it decomposes readily as temperature increases',
      'only in the solid, dry state, since it cannot exist in solution',
      'only after complete removal of all water from the reaction mixture'
    ],
    correctIndex: 1,
    explanation: 'Since diazonium salts are only stable at low temperature in solution, they are typically prepared and used immediately under cold conditions rather than isolated or stored at higher temperatures.',
    difficulty: 'medium'
  },
  {
    id: 'amine-65',
    type: 'mcq',
    question: 'Which of the following pairs correctly matches an amine preparation method with a key limitation or feature of that method?',
    options: [
      'Ammonolysis of alkyl halides — gives a clean, single pure primary amine with no side products',
      'Gabriel synthesis — limited to aliphatic primary amines, since aryl halides do not undergo the required substitution',
      'Reduction of nitriles — gives an amine with one fewer carbon than the nitrile',
      'Hofmann degradation — gives an amine with one more carbon than the starting amide'
    ],
    correctIndex: 1,
    explanation: 'The Gabriel synthesis is specifically limited to aliphatic primary amines due to the unreactivity of aryl halides towards the required nucleophilic substitution step, correctly matching this pairing.',
    difficulty: 'medium'
  },
  {
    id: 'amine-66',
    type: 'mcq',
    question: 'Which statement correctly compares diazonium salts of aliphatic versus aromatic primary amines?',
    options: [
      'Aliphatic diazonium salts are highly stable, while aromatic ones decompose immediately',
      'Aromatic diazonium salts are comparatively more stable (especially at low temperature) than aliphatic diazonium salts, which decompose almost immediately even at low temperatures',
      'Both types show identical stability under all conditions',
      'Neither aliphatic nor aromatic amines can form diazonium salts'
    ],
    correctIndex: 1,
    explanation: 'Aromatic diazonium salts benefit from some stabilisation (partly due to the adjacent aromatic ring) and can be kept briefly at low temperature, whereas aliphatic diazonium salts are far less stable and decompose essentially immediately.',
    difficulty: 'hard'
  },
  {
    id: 'amine-67',
    type: 'mcq',
    question: 'The intense colours often associated with azo compounds (formed via diazonium coupling reactions) are primarily due to',
    options: [
      'the presence of the -N=N- linkage, which is part of an extended conjugated system that absorbs visible light',
      'random chance, with no structural basis for the colour',
      'the presence of a carbonyl group, unrelated to the azo linkage',
      'the presence of halogen atoms in the molecule'
    ],
    correctIndex: 0,
    explanation: 'The -N=N- azo linkage, conjugated with the attached aromatic rings, creates an extended system capable of absorbing visible light, giving azo compounds their characteristic and often intense colours.',
    difficulty: 'medium'
  },
  {
    id: 'amine-68',
    type: 'mcq',
    question: 'Which of the following best summarises the overall relationship between amine basicity, structure, and steric/electronic effects, as emphasised in this chapter?',
    options: [
      'Basicity is a simple, single-factor property depending only on molecular mass',
      'Basicity depends on a combination of inductive effects, resonance/delocalisation effects (especially for aromatic amines), steric hindrance, and solvation of the resulting cation',
      'Basicity is completely unrelated to the structure of the amine',
      'All amines, regardless of structure, show identical basicity'
    ],
    correctIndex: 1,
    explanation: 'Amine basicity is a multifactorial property, shaped by the combined influence of inductive effects, resonance delocalisation, steric factors, and solvation, as emphasised throughout the discussion of aliphatic versus aromatic amine basicity.',
    difficulty: 'medium'
  },
  {
    id: 'amine-69',
    type: 'mcq',
    question: 'Which of the following amine-related reactions is correctly classified as an example of electrophilic aromatic substitution, rather than a reaction occurring at the nitrogen atom itself?',
    options: [
      'Acylation of aniline with acetic anhydride',
      'Bromination of aniline with bromine water, giving 2,4,6-tribromoaniline',
      'Reaction of a primary amine with nitrous acid to form a diazonium salt',
      'Reaction of a primary amine with chloroform and KOH (carbylamine reaction)'
    ],
    correctIndex: 1,
    explanation: 'Bromination of aniline occurs on the aromatic ring itself (an electrophilic aromatic substitution), unlike acylation, diazotisation, and the carbylamine reaction, which all involve the nitrogen atom directly.',
    difficulty: 'medium'
  },
  {
    id: 'amine-70',
    type: 'mcq',
    question: 'Overall, the chemistry of amines, as emphasised throughout this NCERT chapter, centres on understanding',
    options: [
      'the nucleophilic and basic character of the nitrogen lone pair, its influence on structure and basicity (particularly the aliphatic vs. aromatic distinction), preparation methods, and the important synthetic role of diazonium salts',
      'only the physical appearance and smell of amine compounds',
      'only their industrial cost of manufacture',
      'topics entirely unrelated to the amino functional group'
    ],
    correctIndex: 0,
    explanation: 'The chapter integrates structural features, basicity trends (especially the aliphatic-aromatic contrast), diverse preparation methods, characteristic reactions, and the synthetically valuable chemistry of diazonium salts, all stemming from the nitrogen lone pair.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'amine-71',
    type: 'assertion-reason',
    question: 'Assertion (A): The nitrogen atom in aniline is described as having a flatter geometry than in a simple aliphatic amine.\nReason (R): Delocalisation of the nitrogen lone pair into the aromatic ring favours a more planar arrangement around nitrogen, closer to sp2 character.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This tendency towards a more planar, conjugation-favouring geometry due to resonance delocalisation directly explains the flatter nitrogen geometry observed in aniline, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'amine-72',
    type: 'assertion-reason',
    question: 'Assertion (A): Ammonolysis of an alkyl halide with excess ammonia is not an ideal method for preparing a pure primary amine.\nReason (R): The primary amine product can act as a nucleophile and react further with unreacted alkyl halide, giving a mixture of amines and a quaternary ammonium salt.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This further reaction of the initially formed amine with more alkyl halide is exactly why the method produces a mixture rather than a single clean product, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'amine-73',
    type: 'assertion-reason',
    question: 'Assertion (A): The Gabriel phthalimide synthesis cannot be used to prepare aniline.\nReason (R): Aryl halides do not readily undergo the nucleophilic substitution reaction with the phthalimide anion required in this synthesis.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This inherent unreactivity of aryl halides towards the required substitution step directly explains why aromatic primary amines cannot be prepared by this method, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'amine-74',
    type: 'assertion-reason',
    question: 'Assertion (A): The Hofmann bromamide degradation converts an amide into an amine with one fewer carbon atom.\nReason (R): The mechanism involves loss of the original carbonyl carbon as carbon dioxide, with migration of the remaining alkyl/aryl group to nitrogen.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The specific mechanistic pathway described in R, involving loss of the carbonyl carbon, directly explains the one-carbon reduction seen in A.',
    difficulty: 'medium'
  },
  {
    id: 'amine-75',
    type: 'assertion-reason',
    question: 'Assertion (A): Primary amines generally have higher boiling points than isomeric tertiary amines.\nReason (R): Primary amines have two N-H bonds available for intermolecular hydrogen bonding, while tertiary amines have none.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The greater hydrogen-bonding capacity of primary amines, due to their two N-H bonds, directly explains their higher boiling point compared to isomeric tertiary amines, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'amine-76',
    type: 'assertion-reason',
    question: 'Assertion (A): Amines generally have lower boiling points than alcohols of comparable molecular mass.\nReason (R): The N-H hydrogen bond is weaker than the O-H hydrogen bond, since nitrogen is less electronegative than oxygen.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The lower electronegativity of nitrogen, resulting in weaker hydrogen bonding compared to oxygen in alcohols, directly explains why amines have comparatively lower boiling points, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'amine-77',
    type: 'assertion-reason',
    question: 'Assertion (A): Tertiary amines show appreciable solubility in water, despite lacking any N-H bonds.\nReason (R): The lone pair on nitrogen allows a tertiary amine to accept hydrogen bonds from water molecules.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This ability to accept hydrogen bonds via the nitrogen lone pair, despite the absence of N-H, directly explains the observed water solubility of tertiary amines, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'amine-78',
    type: 'assertion-reason',
    question: 'Assertion (A): Aliphatic amines are generally more basic than ammonia.\nReason (R): Alkyl groups exert an electron-donating inductive (+I) effect, increasing the electron density (and hence availability) of the nitrogen lone pair.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This increased electron density from the inductive effect of alkyl groups directly explains why aliphatic amines are more basic than ammonia, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'amine-79',
    type: 'assertion-reason',
    question: 'Assertion (A): Aniline is significantly less basic than cyclohexylamine (a saturated cyclic aliphatic amine of similar size).\nReason (R): In aniline, the nitrogen lone pair is delocalised into the aromatic ring via resonance, making it much less available for protonation than in a purely aliphatic amine.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This resonance delocalisation, absent in a purely aliphatic amine like cyclohexylamine, directly explains the much lower basicity of aniline, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'amine-80',
    type: 'assertion-reason',
    question: 'Assertion (A): Protonation of aniline to form the anilinium ion is less energetically favourable than might be expected based on inductive effects alone.\nReason (R): The anilinium ion loses the resonance stabilisation available to the free amine, since the lone pair used to bond the proton is no longer available for delocalisation into the ring.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This loss of resonance stabilisation upon protonation directly explains why protonating aniline is less favourable than expected, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'amine-81',
    type: 'assertion-reason',
    question: 'Assertion (A): para-Nitroaniline is less basic than aniline.\nReason (R): The electron-withdrawing nitro group further reduces electron density on nitrogen, both by induction and by resonance, decreasing the availability of the lone pair for protonation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This combined inductive and resonance electron withdrawal by the nitro group directly explains the reduced basicity of para-nitroaniline compared to aniline, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'amine-82',
    type: 'assertion-reason',
    question: 'Assertion (A): para-Toluidine (4-methylaniline) is more basic than aniline.\nReason (R): The electron-donating methyl group increases electron density on nitrogen, partially offsetting the ring\'s delocalisation effect.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The increased electron density from the electron-donating methyl group directly explains the enhanced basicity of para-toluidine relative to aniline, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'amine-83',
    type: 'assertion-reason',
    question: 'Assertion (A): In aqueous solution, the observed basicity order for simple methylamines often does not simply follow the order predicted by inductive effects alone.\nReason (R): Solvation of the resulting ammonium cation and steric hindrance around nitrogen also significantly influence basicity in aqueous solution.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'These additional solvation and steric factors, beyond the simple inductive effect, are exactly why the aqueous basicity order deviates from what would be predicted by induction alone, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'amine-84',
    type: 'assertion-reason',
    question: 'Assertion (A): The carbylamine test gives a positive result with primary amines but a negative result with secondary and tertiary amines.\nReason (R): Formation of the isocyanide in this test specifically requires an amine with two available N-H bonds, which only secondary amines possess.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 2,
    explanation: 'A is true — the carbylamine test is indeed specific to primary amines. However, R is false — the mechanism specifically requires a primary amine (with its particular structural features), not "two N-H bonds", which actually describes a primary amine having just one N-H less than stated (a primary amine has two N-H bonds and one N-C bond, but the reasoning as stated misattributes the requirement to secondary amines, which do not give this reaction).',
    difficulty: 'hard'
  },
  {
    id: 'amine-85',
    type: 'assertion-reason',
    question: 'Assertion (A): A primary aliphatic amine treated with nitrous acid shows vigorous effervescence.\nReason (R): The unstable aliphatic diazonium salt formed decomposes almost immediately, releasing nitrogen gas.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This immediate decomposition of the unstable aliphatic diazonium intermediate, releasing nitrogen gas, is exactly what produces the observed effervescence, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'amine-86',
    type: 'assertion-reason',
    question: 'Assertion (A): A primary aromatic amine treated with nitrous acid at 0-5°C gives a diazonium salt that can be kept for some time and used in further reactions.\nReason (R): Aromatic diazonium salts benefit from some stabilisation, in part due to the adjacent aromatic ring, compared to aliphatic diazonium salts.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This relative stabilisation of aromatic diazonium salts, particularly at low temperature, is exactly why they can be used practically in subsequent reactions, unlike their aliphatic counterparts, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'amine-87',
    type: 'assertion-reason',
    question: 'Assertion (A): Secondary amines react with nitrous acid to give a yellow oily N-nitrosamine.\nReason (R): The nitrogen of a secondary amine still has one available N-H that participates in the substitution reaction with nitrous acid to form the nitrosamine.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This available N-H bond, which participates directly in nitrosamine formation, is exactly why secondary amines give this characteristic product, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'amine-88',
    type: 'assertion-reason',
    question: 'Assertion (A): N,N-dimethylaniline reacts with nitrous acid to give a ring-substituted product rather than a nitrogen-substituted product.\nReason (R): Since the tertiary nitrogen has no N-H available, the reaction instead occurs on the highly activated aromatic ring, predominantly at the para position.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The absence of an available N-H, combined with the strongly activated ring, directly explains why the reaction occurs at the ring rather than at nitrogen, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'amine-89',
    type: 'assertion-reason',
    question: 'Assertion (A): Direct nitration of aniline with a nitrating mixture gives a substantial amount of meta-nitroaniline, in addition to ortho and para products.\nReason (R): Under the strongly acidic conditions, aniline is significantly protonated to the anilinium ion, which is deactivating and meta-directing.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This protonation-induced shift in directing behaviour is exactly why meta product forms alongside the expected ortho/para products, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'amine-90',
    type: 'assertion-reason',
    question: 'Assertion (A): Aniline is typically acetylated before undergoing nitration in a controlled synthesis.\nReason (R): Acetylation reduces the basicity of the nitrogen (preventing protonation under acidic conditions) while still allowing the ring to be activated for ortho/para-directed electrophilic substitution.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This dual effect of reduced basicity (preventing protonation) while retaining ring activation is exactly why acetylation before nitration gives cleaner ortho/para product formation, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'amine-91',
    type: 'assertion-reason',
    question: 'Assertion (A): Aniline reacts readily with bromine water without requiring a catalyst.\nReason (R): The -NH2 group strongly activates the aromatic ring, increasing its reactivity towards electrophilic substitution.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The strong activation of the ring by the -NH2 group directly explains why aniline reacts so readily with bromine water without a catalyst, analogous to phenol, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'amine-92',
    type: 'assertion-reason',
    question: 'Assertion (A): Diazonium salts are generally prepared and used immediately in solution, rather than being isolated and stored.\nReason (R): Diazonium salts are unstable and decompose readily as temperature increases above about 5°C.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This temperature-dependent instability is exactly why diazonium salts are typically used immediately rather than being isolated and stored for later use, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'amine-93',
    type: 'assertion-reason',
    question: 'Assertion (A): Diazonium salts react with phenols and aromatic amines to give intensely coloured azo compounds.\nReason (R): The -N=N- azo linkage, conjugated with the aromatic rings on either side, creates an extended system capable of absorbing visible light.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This extended conjugated system, capable of absorbing visible light, is exactly why azo compounds display their characteristic and often intense colours, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'amine-94',
    type: 'assertion-reason',
    question: 'Assertion (A): Treatment of a diazonium salt with hypophosphorus acid (H3PO2) replaces the diazonium group with a hydrogen atom.\nReason (R): This deamination reaction is useful for removing an amino group that was introduced temporarily to control the regiochemistry of an earlier synthetic step.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 1,
    explanation: 'Both statements are correct, but R describes a useful application/motivation for the reaction rather than explaining the actual chemical mechanism by which H3PO2 achieves the replacement described in A.',
    difficulty: 'hard'
  },
  {
    id: 'amine-95',
    type: 'assertion-reason',
    question: 'Assertion (A): Amides are generally weaker bases than comparable amines.\nReason (R): The nitrogen lone pair of an amide is significantly delocalised into the adjacent carbonyl group by resonance, reducing its availability for protonation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This resonance delocalisation into the carbonyl group is exactly why amides show much reduced basicity compared to structurally similar amines, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'amine-96',
    type: 'assertion-reason',
    question: 'Assertion (A): Amines are generally stronger nucleophiles than comparable alcohols.\nReason (R): Nitrogen is less electronegative than oxygen, so it holds its lone pair less tightly, making that lone pair more available for donation to an electrophile.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This looser hold on the lone pair by the less electronegative nitrogen atom directly explains the generally greater nucleophilicity of amines compared to alcohols, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'amine-97',
    type: 'assertion-reason',
    question: 'Assertion (A): Reduction of a nitrile with LiAlH4 gives a primary amine with the same number of carbon atoms as the amine formed by Hofmann degradation of the corresponding one-carbon-longer amide.\nReason (R): Both reactions ultimately deliver a primary amine, though via entirely different mechanisms and starting materials.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 1,
    explanation: 'Both statements happen to be factually consistent for appropriately chosen starting materials, but R merely restates that both are amine-forming reactions rather than explaining the specific carbon-count relationship asserted in A.',
    difficulty: 'hard'
  },
  {
    id: 'amine-98',
    type: 'assertion-reason',
    question: 'Assertion (A): Reduction of nitrobenzene is the standard method used to prepare aniline.\nReason (R): This reduction can be carried out using catalytic hydrogenation, or using metal/acid combinations such as Fe/HCl or Sn/HCl.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The availability of these effective reduction methods for converting the nitro group to an amine is exactly why this route is the standard method for preparing aniline, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'amine-99',
    type: 'assertion-reason',
    question: 'Assertion (A): All classes of amines (primary, secondary, and tertiary) give a positive carbylamine test.\nReason (R): The carbylamine reaction proceeds via a mechanism that requires the presence of at least one N-H bond on the amine nitrogen.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — only primary amines give a positive carbylamine test, not all classes. R correctly describes the mechanistic requirement, which explains why secondary and tertiary amines (lacking the necessary structural feature for this specific reaction) do not give a positive result, contrary to the false claim in A.',
    difficulty: 'medium'
  },
  {
    id: 'amine-100',
    type: 'assertion-reason',
    question: 'Assertion (A): The chemistry of amines integrates concepts of nucleophilicity, basicity, resonance, and aromatic substitution.\nReason (R): The behaviour of amines in reactions such as acylation, diazotisation, the carbylamine test, and electrophilic aromatic substitution on aniline all trace back to the properties and availability of the nitrogen lone pair.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This shared dependence of diverse reaction types on the nitrogen lone pair, as detailed in R, directly explains why amine chemistry integrates so many different chemical concepts, correctly explaining A.',
    difficulty: 'medium'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'amine-101',
    type: 'statement',
    question: 'Statement I: A primary amine has one alkyl/aryl group attached to nitrogen.\nStatement II: A quaternary ammonium salt has four organic groups attached to a positively charged nitrogen.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the structural features of primary amines and quaternary ammonium salts.',
    difficulty: 'easy'
  },
  {
    id: 'amine-102',
    type: 'statement',
    question: 'Statement I: In aliphatic amines, the nitrogen atom is sp3 hybridised.\nStatement II: In aniline, the nitrogen is exactly the same in geometry as in a simple aliphatic amine, with no difference in hybridisation character.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — aniline\'s nitrogen adopts a flatter geometry (closer to sp2 character) due to resonance delocalisation into the ring, unlike a simple aliphatic amine.',
    difficulty: 'medium'
  },
  {
    id: 'amine-103',
    type: 'statement',
    question: 'Statement I: Reduction of a nitro compound gives a primary amine.\nStatement II: Reduction of a nitrile gives a primary amine with one more carbon than the nitrile.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe standard methods for preparing primary amines.',
    difficulty: 'medium'
  },
  {
    id: 'amine-104',
    type: 'statement',
    question: 'Statement I: Ammonolysis of an alkyl halide with excess ammonia gives a clean, single pure primary amine with no side products.\nStatement II: The Gabriel synthesis provides a cleaner route to a pure primary aliphatic amine, avoiding over-alkylation issues.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — ammonolysis typically gives a mixture of products due to over-alkylation. Statement II correctly describes the advantage of the Gabriel synthesis.',
    difficulty: 'medium'
  },
  {
    id: 'amine-105',
    type: 'statement',
    question: 'Statement I: The Gabriel synthesis can be used to prepare both aliphatic and aromatic primary amines equally well.\nStatement II: The Gabriel synthesis is limited to aliphatic primary amines, since aryl halides do not undergo the required nucleophilic substitution.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the Gabriel synthesis cannot be used for aromatic amines. Statement II correctly explains this limitation.',
    difficulty: 'medium'
  },
  {
    id: 'amine-106',
    type: 'statement',
    question: 'Statement I: The Hofmann bromamide degradation converts an amide into an amine with one fewer carbon atom.\nStatement II: This reaction uses bromine and sodium hydroxide as reagents.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the outcome and reagents of the Hofmann bromamide degradation reaction.',
    difficulty: 'medium'
  },
  {
    id: 'amine-107',
    type: 'statement',
    question: 'Statement I: The alkyl/aryl group migration in the Hofmann degradation occurs via a concerted mechanism, with retention of configuration at the migrating group.\nStatement II: This migration proceeds via a free, planar carbocation intermediate at the migrating carbon.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the migration is concerted, without formation of a free carbocation intermediate, which is precisely why the stereochemistry at the migrating carbon is retained.',
    difficulty: 'hard'
  },
  {
    id: 'amine-108',
    type: 'statement',
    question: 'Statement I: Primary and secondary amines can form intermolecular hydrogen bonds due to their N-H bonds.\nStatement II: Tertiary amines cannot form hydrogen bonds with each other, lacking any N-H bonds.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the hydrogen-bonding capability (or lack thereof) among different classes of amines.',
    difficulty: 'easy'
  },
  {
    id: 'amine-109',
    type: 'statement',
    question: 'Statement I: For isomeric amines, boiling point generally follows the order tertiary > secondary > primary.\nStatement II: The N-H hydrogen bond in amines is generally stronger than the O-H hydrogen bond in alcohols.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — the boiling point order is actually primary > secondary > tertiary, and the N-H hydrogen bond is weaker (not stronger) than the O-H hydrogen bond, since nitrogen is less electronegative than oxygen.',
    difficulty: 'medium'
  },
  {
    id: 'amine-110',
    type: 'statement',
    question: 'Statement I: Aliphatic amines are generally more basic than ammonia due to the electron-donating inductive effect of alkyl groups.\nStatement II: Aromatic amines like aniline are generally less basic than ammonia and aliphatic amines, due to resonance delocalisation of the nitrogen lone pair.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the relative basicity trends among ammonia, aliphatic amines, and aromatic amines.',
    difficulty: 'medium'
  },
  {
    id: 'amine-111',
    type: 'statement',
    question: 'Statement I: Protonation of aniline results in loss of the resonance stabilisation available to the free amine.\nStatement II: This loss of resonance stabilisation makes protonation of aniline more energetically favourable than expected.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — this loss of resonance stabilisation actually makes protonation less (not more) energetically favourable, contributing to aniline\'s reduced basicity.',
    difficulty: 'hard'
  },
  {
    id: 'amine-112',
    type: 'statement',
    question: 'Statement I: Electron-donating substituents on the aniline ring generally increase basicity.\nStatement II: Electron-withdrawing substituents on the aniline ring generally increase basicity as well.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — electron-withdrawing substituents actually decrease, not increase, the basicity of substituted anilines.',
    difficulty: 'medium'
  },
  {
    id: 'amine-113',
    type: 'statement',
    question: 'Statement I: In aqueous solution, the basicity order for simple methylamines commonly cited is secondary > primary > tertiary > ammonia.\nStatement II: This order reflects a balance between inductive effects, steric hindrance, and solvation of the resulting ammonium ion.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe this nuanced aqueous basicity order and its underlying causes.',
    difficulty: 'hard'
  },
  {
    id: 'amine-114',
    type: 'statement',
    question: 'Statement I: The carbylamine test is positive for primary amines.\nStatement II: The carbylamine test is also positive for secondary and tertiary amines.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the carbylamine test is specific to primary amines and gives negative results with secondary and tertiary amines.',
    difficulty: 'medium'
  },
  {
    id: 'amine-115',
    type: 'statement',
    question: 'Statement I: A primary aliphatic amine reacting with nitrous acid gives a stable, isolable diazonium salt.\nStatement II: A primary aromatic amine reacting with nitrous acid at 0-5°C gives a diazonium salt with some degree of stability.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — aliphatic diazonium salts are highly unstable and decompose almost immediately. Statement II correctly describes the greater (though still limited) stability of aromatic diazonium salts.',
    difficulty: 'medium'
  },
  {
    id: 'amine-116',
    type: 'statement',
    question: 'Statement I: Secondary amines react with nitrous acid to give an N-nitrosamine.\nStatement II: Tertiary aliphatic amines react with nitrous acid to give a stable diazonium salt.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — tertiary aliphatic amines simply form an unstable salt with nitrous acid, without any characteristic, easily observed reaction like diazonium salt formation.',
    difficulty: 'medium'
  },
  {
    id: 'amine-117',
    type: 'statement',
    question: 'Statement I: N,N-dimethylaniline reacts with nitrous acid at the nitrogen atom, since it has an available N-H bond.\nStatement II: N,N-dimethylaniline reacts with nitrous acid predominantly at the para position of the ring.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — N,N-dimethylaniline has no N-H bond, since both remaining positions on nitrogen are occupied by methyl groups. Statement II correctly describes the observed ring nitrosation.',
    difficulty: 'medium'
  },
  {
    id: 'amine-118',
    type: 'statement',
    question: 'Statement I: The -NH2 group in aniline is a deactivating, meta-directing group in electrophilic aromatic substitution.\nStatement II: Direct nitration of aniline can give a significant amount of meta product due to protonation of aniline under the strongly acidic conditions.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the free -NH2 group is actually a strongly activating, ortho/para-directing group. Statement II correctly describes why meta product still forms under acidic nitration conditions, due to protonation.',
    difficulty: 'medium'
  },
  {
    id: 'amine-119',
    type: 'statement',
    question: 'Statement I: Acetylation of aniline before nitration helps achieve cleaner ortho/para product formation.\nStatement II: Acetanilide is more basic than aniline, since the acetyl group donates electron density strongly to nitrogen.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — acetanilide is actually less basic than aniline, since the amide nitrogen lone pair is delocalised into the adjacent carbonyl group.',
    difficulty: 'medium'
  },
  {
    id: 'amine-120',
    type: 'statement',
    question: 'Statement I: Aniline reacts with bromine water without requiring a catalyst.\nStatement II: This reaction gives 2,4,6-tribromoaniline as a white precipitate.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe this characteristic reaction of aniline with bromine water.',
    difficulty: 'medium'
  },
  {
    id: 'amine-121',
    type: 'statement',
    question: 'Statement I: Diazonium salts are prepared and used at 0-5°C, since they are unstable at higher temperatures.\nStatement II: Diazonium salts can be isolated as stable solids and stored indefinitely at room temperature.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — diazonium salts are generally not stable enough to be isolated and stored at room temperature; they are typically used immediately in solution.',
    difficulty: 'medium'
  },
  {
    id: 'amine-122',
    type: 'statement',
    question: 'Statement I: Diazonium coupling with phenols or aromatic amines gives azo compounds.\nStatement II: This coupling occurs predominantly at the para position, unless it is already occupied, in which case ortho coupling is favoured.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the product and regiochemistry of diazonium coupling reactions.',
    difficulty: 'medium'
  },
  {
    id: 'amine-123',
    type: 'statement',
    question: 'Statement I: Treatment of a diazonium salt with H3PO2 replaces the diazonium group with a hydroxyl group.\nStatement II: This deamination reaction can be useful for removing an amino group that was introduced temporarily to control the regiochemistry of an earlier step.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — H3PO2 replaces the diazonium group with hydrogen, not a hydroxyl group (that would be simple hydrolysis instead). Statement II correctly describes the synthetic usefulness of this deamination reaction.',
    difficulty: 'medium'
  },
  {
    id: 'amine-124',
    type: 'statement',
    question: 'Statement I: Amides are generally more basic than comparable amines.\nStatement II: This is because the amide nitrogen lone pair is delocalised into the carbonyl group, increasing its availability for protonation.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — amides are actually less basic than comparable amines, and the delocalisation described actually decreases (not increases) the lone pair\'s availability for protonation.',
    difficulty: 'medium'
  },
  {
    id: 'amine-125',
    type: 'statement',
    question: 'Statement I: Amines are generally stronger nucleophiles than comparable alcohols.\nStatement II: This is because nitrogen, being less electronegative than oxygen, holds its lone pair less tightly.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe and explain the relative nucleophilicity of amines compared to alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'amine-126',
    type: 'statement',
    question: 'Statement I: Amines react with acid chlorides/anhydrides to form amides via an acylation reaction.\nStatement II: This reaction demonstrates the nucleophilic character of the amine nitrogen.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the acylation reaction of amines and its underlying nucleophilic basis.',
    difficulty: 'easy'
  },
  {
    id: 'amine-127',
    type: 'statement',
    question: 'Statement I: The intense colours of azo compounds are due to their extended conjugated -N=N- system.\nStatement II: This conjugation allows azo compounds to absorb visible light.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe and explain the origin of colour in azo compounds.',
    difficulty: 'medium'
  },
  {
    id: 'amine-128',
    type: 'statement',
    question: 'Statement I: Excess reaction of an amine with an alkyl halide can eventually give a quaternary ammonium salt.\nStatement II: A quaternary ammonium salt retains a lone pair on nitrogen, available for further reaction.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — a quaternary ammonium salt has no lone pair remaining on nitrogen, since all four positions (previously three plus the lone pair) are occupied by organic groups, leaving nitrogen permanently positively charged.',
    difficulty: 'medium'
  },
  {
    id: 'amine-129',
    type: 'statement',
    question: 'Statement I: Reduction of an amide with LiAlH4 gives an amine with the same number of carbon atoms as the starting amide.\nStatement II: The Hofmann bromamide degradation gives an amine with one fewer carbon atom than the starting amide.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly distinguish the outcomes of these two different amide-to-amine transformations.',
    difficulty: 'medium'
  },
  {
    id: 'amine-130',
    type: 'statement',
    question: 'Statement I: The chemistry of amines depends heavily on the nucleophilic and basic character of the nitrogen lone pair.\nStatement II: Aromatic amine basicity, preparation methods, and diazonium salt chemistry are all unrelated aspects of amine chemistry with no shared underlying theme.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — these topics are, in fact, closely interconnected, all tracing back to the properties and behaviour of the nitrogen lone pair.',
    difficulty: 'medium'
  },

  // ==================== HOW-MANY (20) ====================
  {
    id: 'amine-131',
    type: 'how-many',
    question: 'How many of the following statements about classification and structure of amines are correct?\n1. Primary, secondary, and tertiary amines are classified by the number of H atoms of ammonia replaced.\n2. A quaternary ammonium salt has nitrogen bonded to four organic groups.\n3. Nitrogen in aliphatic amines is sp3 hybridised.\n4. Nitrogen in aniline has exactly the same geometry as in a simple aliphatic amine.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — aniline\'s nitrogen has a flatter geometry due to resonance delocalisation into the ring, unlike a simple aliphatic amine.',
    difficulty: 'medium'
  },
  {
    id: 'amine-132',
    type: 'how-many',
    question: 'How many of the following methods correctly give a primary amine as the product?\n1. Reduction of a nitro compound\n2. Reduction of a nitrile\n3. Gabriel phthalimide synthesis\n4. Hofmann bromamide degradation of an amide',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four methods correctly result in a primary amine as the final product, via their respective distinct mechanisms.',
    difficulty: 'medium'
  },
  {
    id: 'amine-133',
    type: 'how-many',
    question: 'How many of the following statements about the Gabriel synthesis and Hofmann degradation are correct?\n1. The Gabriel synthesis is limited to aliphatic primary amines.\n2. The Hofmann degradation gives an amine with one fewer carbon than the starting amide.\n3. The Hofmann degradation proceeds via a free carbocation intermediate at the migrating carbon.\n4. The Gabriel synthesis avoids the over-alkylation problem seen with direct ammonolysis.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — the Hofmann degradation proceeds via a concerted mechanism, not a free carbocation intermediate.',
    difficulty: 'hard'
  },
  {
    id: 'amine-134',
    type: 'how-many',
    question: 'How many of the following statements about physical properties of amines are correct?\n1. Primary and secondary amines can hydrogen bond with each other via N-H.\n2. Tertiary amines cannot hydrogen bond with each other.\n3. For isomeric amines, boiling point order is primary > secondary > tertiary.\n4. Amines generally have higher boiling points than comparable alcohols.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — amines generally have lower boiling points than comparable alcohols, due to weaker N-H hydrogen bonding.',
    difficulty: 'medium'
  },
  {
    id: 'amine-135',
    type: 'how-many',
    question: 'How many of the following statements about basicity of amines are correct?\n1. Aliphatic amines are generally more basic than ammonia.\n2. Aromatic amines like aniline are generally less basic than ammonia.\n3. Protonation of aniline results in loss of resonance stabilisation.\n4. Electron-withdrawing groups on the aniline ring generally increase its basicity.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — electron-withdrawing groups actually decrease, not increase, the basicity of substituted anilines.',
    difficulty: 'medium'
  },
  {
    id: 'amine-136',
    type: 'how-many',
    question: 'How many of the following statements about the aqueous basicity of amines are correct?\n1. In aqueous solution, basicity depends on inductive effects, steric hindrance, and solvation.\n2. The commonly cited order for methylamines in water is secondary > primary > tertiary > ammonia.\n3. In the gas phase (without solvation effects), basicity often follows a different order than in water.\n4. Basicity of amines is a simple, single-factor property depending only on the number of alkyl groups.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and oversimplifies what is actually a multifactorial property influenced by several competing effects.',
    difficulty: 'hard'
  },
  {
    id: 'amine-137',
    type: 'how-many',
    question: 'How many of the following statements about the carbylamine test are correct?\n1. It uses chloroform and alcoholic KOH.\n2. It gives a positive result (foul-smelling isocyanide) specifically with primary amines.\n3. Secondary and tertiary amines give a negative result.\n4. Both aliphatic and aromatic primary amines give a positive result.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe the reagents, mechanism, and scope of the carbylamine (isocyanide) test.',
    difficulty: 'medium'
  },
  {
    id: 'amine-138',
    type: 'how-many',
    question: 'How many of the following statements about reactions of amines with nitrous acid are correct?\n1. Primary aliphatic amines show vigorous effervescence, releasing nitrogen gas.\n2. Primary aromatic amines give a diazonium salt at low temperature.\n3. Secondary amines give an N-nitrosamine.\n4. Tertiary aliphatic amines give a stable, isolable diazonium salt.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — tertiary aliphatic amines simply form an unstable salt, with no visible characteristic reaction like diazonium salt formation.',
    difficulty: 'medium'
  },
  {
    id: 'amine-139',
    type: 'how-many',
    question: 'How many of the following statements about N,N-dimethylaniline\'s reaction with nitrous acid are correct?\n1. It lacks an available N-H bond for nitrogen substitution.\n2. It reacts on the aromatic ring instead of at nitrogen.\n3. The product is typically a para-substituted C-nitroso compound.\n4. This reaction demonstrates that all tertiary amines, whether aliphatic or aromatic, always react identically with nitrous acid.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — tertiary aliphatic and tertiary aromatic amines actually behave differently with nitrous acid (unreactive salt formation vs. ring nitrosation, respectively).',
    difficulty: 'hard'
  },
  {
    id: 'amine-140',
    type: 'how-many',
    question: 'How many of the following statements about electrophilic aromatic substitution reactions of aniline are correct?\n1. The free -NH2 group is a strongly activating, ortho/para-directing group.\n2. Direct nitration of aniline gives some meta product due to protonation under acidic conditions.\n3. Acetylation of aniline before nitration helps achieve cleaner ortho/para product formation.\n4. Bromination of aniline with bromine water requires a Lewis acid catalyst.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — aniline reacts readily with bromine water without needing a catalyst, due to the strong activation of the ring.',
    difficulty: 'medium'
  },
  {
    id: 'amine-141',
    type: 'how-many',
    question: 'How many of the following statements about diazonium salts are correct?\n1. They are prepared by treating a primary aromatic amine with NaNO2/HCl at 0-5°C.\n2. They can undergo coupling reactions with phenols or aromatic amines to give azo compounds.\n3. They can be hydrolysed by warming, giving phenol.\n4. They are generally stable at room temperature and can be stored indefinitely.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — diazonium salts are unstable and decompose readily above low temperatures, so they are not suitable for long-term storage.',
    difficulty: 'medium'
  },
  {
    id: 'amine-142',
    type: 'how-many',
    question: 'How many of the following statements about diazonium salt coupling reactions are correct?\n1. Coupling occurs predominantly at the para position of the coupling partner.\n2. If the para position is already occupied, ortho coupling becomes favoured.\n3. Coupling produces an azo compound with a -N=N- linkage.\n4. Azo compounds are typically colourless.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — azo compounds are typically intensely coloured, not colourless, due to their extended conjugated system.',
    difficulty: 'medium'
  },
  {
    id: 'amine-143',
    type: 'how-many',
    question: 'How many of the following statements about diazonium salt deamination are correct?\n1. Treatment with H3PO2 replaces the diazonium group with hydrogen.\n2. Ethanol can also be used to bring about this replacement.\n3. This reaction is used to remove an amino group introduced temporarily to control a synthesis.\n4. This reaction is called hydrolysis, giving phenol as the product.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — this is a deamination (reductive replacement with H), not hydrolysis, and it does not give phenol.',
    difficulty: 'medium'
  },
  {
    id: 'amine-144',
    type: 'how-many',
    question: 'How many of the following statements comparing amines and amides are correct?\n1. Amines are generally more basic than comparable amides.\n2. Amide nitrogen lone pairs are delocalised into the adjacent carbonyl group.\n3. This delocalisation reduces the amide nitrogen\'s availability for protonation.\n4. Amides are generally stronger bases than amines due to the carbonyl group.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts the well-established lower basicity of amides compared to amines.',
    difficulty: 'medium'
  },
  {
    id: 'amine-145',
    type: 'how-many',
    question: 'How many of the following statements about amine nucleophilicity and reactions are correct?\n1. Amines are generally stronger nucleophiles than comparable alcohols.\n2. Amines react with acid chlorides/anhydrides to give amides (acylation).\n3. Amines can react with alkyl halides, potentially leading to over-alkylation.\n4. Amines cannot act as nucleophiles under any circumstances.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts the well-established nucleophilic character of amines.',
    difficulty: 'medium'
  },
  {
    id: 'amine-146',
    type: 'how-many',
    question: 'How many of the following statements about substituent effects on aniline basicity are correct?\n1. Electron-donating groups (like -CH3) generally increase basicity relative to aniline.\n2. Electron-withdrawing groups (like -NO2) generally decrease basicity relative to aniline.\n3. Substituent position (ortho, meta, para) can influence the exact magnitude of the effect.\n4. Substituents never have any measurable effect on aniline\'s basicity.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts the well-documented substituent effects on aniline basicity.',
    difficulty: 'medium'
  },
  {
    id: 'amine-147',
    type: 'how-many',
    question: 'How many of the following statements about the protecting-group strategy in aniline chemistry are correct?\n1. Acetylation of aniline reduces its basicity, preventing protonation under acidic nitration conditions.\n2. Acetanilide still activates the ring for ortho/para-directed substitution, though less strongly than free aniline.\n3. Hydrolysis of the nitrated acetanilide product regenerates the free amine.\n4. This overall strategy has no practical use in real organic synthesis.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — this protecting-group strategy is a genuinely useful and commonly cited synthetic tactic.',
    difficulty: 'medium'
  },
  {
    id: 'amine-148',
    type: 'how-many',
    question: 'How many of the following statements about the reactivity differences between aliphatic and aromatic diazonium salts are correct?\n1. Aromatic diazonium salts are comparatively more stable than aliphatic ones.\n2. Aliphatic diazonium salts decompose almost immediately, even at low temperature.\n3. Aromatic diazonium salts can be used for further synthetic transformations, such as Sandmeyer reactions or coupling.\n4. Aliphatic diazonium salts are routinely isolated as stable solids for long-term storage.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — aliphatic diazonium salts are far too unstable to be isolated and stored; they decompose essentially immediately.',
    difficulty: 'hard'
  },
  {
    id: 'amine-149',
    type: 'how-many',
    question: 'How many of the following statements about IUPAC nomenclature and general amine chemistry are correct?\n1. The suffix "-amine" is used in IUPAC nomenclature for amines.\n2. Aniline has the amino group attached directly to a ring carbon of benzene.\n3. Amines are widely used as intermediates in dye and drug synthesis due to their nucleophilic nitrogen.\n4. Amines have no relevance to azo dye chemistry.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — amines (via diazonium salts derived from aromatic amines) are directly relevant and central to azo dye chemistry.',
    difficulty: 'medium'
  },
  {
    id: 'amine-150',
    type: 'how-many',
    question: 'How many of the following statements correctly summarise key themes of the amines chapter?\n1. Amine classification and basicity depend on the availability and stabilisation of the nitrogen lone pair.\n2. Preparation methods include nitro/nitrile/amide reduction, Gabriel synthesis, and Hofmann degradation, each with specific scopes and limitations.\n3. Aromatic amine chemistry (basicity, electrophilic substitution, protecting-group strategies) differs meaningfully from aliphatic amine chemistry due to resonance effects.\n4. Diazonium salts serve as versatile synthetic intermediates for introducing various substituents onto an aromatic ring.\n5. Amines show no relationship whatsoever to the chemistry of amides or carboxylic acid derivatives.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, 3, and 4 correctly summarise major themes of the amines chapter. Statement 5 is false — amines are, in fact, closely related to amides (e.g., via amide reduction, Hofmann degradation, and comparative basicity discussions).',
    difficulty: 'medium'
  }
];

