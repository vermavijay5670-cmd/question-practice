<<<<<<< HEAD
export const ALCOHOLS_PHENOLS_ETHERS = [
  // ==================== MCQ (70) ====================
  {
    id: 'alcohol-1',
    type: 'mcq',
    question: 'Alcohols containing one, two, and three hydroxyl (-OH) groups are respectively classified as',
    options: [
      'primary, secondary, and tertiary alcohols',
      'saturated, unsaturated, and aromatic alcohols',
      'allylic, benzylic, and vinylic alcohols',
      'monohydric, dihydric, and trihydric alcohols'
    ],
    correctIndex: 3,
    explanation: 'Alcohols are classified as monohydric, dihydric, or trihydric based on whether they contain one, two, or three hydroxyl groups, respectively.',
    difficulty: 'easy'
  },
  {
    id: 'alcohol-2',
    type: 'mcq',
    question: 'Alcohols are classified as primary, secondary, or tertiary based on',
    options: [
      'the number of -OH groups present',
      'the boiling point of the alcohol',
      'the molecular mass of the alcohol',
      'the nature of the carbon atom (primary, secondary, or tertiary) to which the -OH group is attached'
    ],
    correctIndex: 3,
    explanation: 'This classification depends on whether the carbon bearing the -OH group is attached to one, two, or three other carbon atoms.',
    difficulty: 'easy'
  },
  {
    id: 'alcohol-3',
    type: 'mcq',
    question: 'An allylic alcohol is one in which the -OH group is attached to',
    options: [
      'an sp2 carbon that is part of a carbon-carbon double bond',
      'an sp3 carbon directly attached to an aromatic ring',
      'a carbon atom bonded to a halogen',
      'an sp3 carbon atom next to (allylic to) a carbon-carbon double bond'
    ],
    correctIndex: 3,
    explanation: 'An allylic alcohol has the hydroxyl group on an sp3 carbon adjacent to a C=C double bond.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-4',
    type: 'mcq',
    question: 'A benzylic alcohol is one in which the -OH group is attached to',
    options: [
      'a carbon atom that is part of the aromatic ring itself',
      'an sp3 carbon adjacent to a carbon-carbon double bond',
      'a carbon atom bonded to two aromatic rings only',
      'an sp3 carbon atom directly attached to an aromatic ring'
    ],
    correctIndex: 3,
    explanation: 'A benzylic alcohol has the hydroxyl group on an sp3 carbon that is directly bonded to (but not part of) an aromatic ring.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-5',
    type: 'mcq',
    question: 'In alcohols, the oxygen atom of the -OH group is',
    options: ['not hybridised at all', 'sp hybridised', 'sp2 hybridised', 'sp3 hybridised'],
    correctIndex: 3,
    explanation: 'The oxygen atom in an alcohol is sp3 hybridised, with two hybrid orbitals forming sigma bonds (to carbon and hydrogen) and two holding lone pairs.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-6',
    type: 'mcq',
    question: 'The C-O-H bond angle in a simple alcohol like methanol is generally found to be',
    options: [
      'exactly 180°, since alcohols have a linear geometry at oxygen',
      'exactly 90°',
      'exactly equal to the bond angle in water',
      'slightly greater than the ideal tetrahedral angle, due to repulsion between the bulky alkyl group and lone pairs on oxygen'
    ],
    correctIndex: 3,
    explanation: 'The C-O-H bond angle in alcohols is slightly larger than the ideal tetrahedral angle (109.5°) because the bulkier alkyl group causes greater repulsion than a hydrogen atom would, as in water.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-7',
    type: 'mcq',
    question: 'The C-O-C bond angle in a simple ether like dimethyl ether is generally',
    options: [
      'exactly 90°',
      'smaller than the C-O-H angle in alcohols',
      'exactly the same as the bond angle in water',
      'larger than the C-O-H angle in alcohols, due to greater steric repulsion between the two bulky alkyl groups'
    ],
    correctIndex: 3,
    explanation: 'Since ethers have two alkyl groups attached to oxygen (compared to one alkyl group and one hydrogen in alcohols), the greater steric repulsion results in a larger C-O-C bond angle than the C-O-H angle in alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-8',
    type: 'mcq',
    question: 'Acid-catalysed hydration of an alkene to form an alcohol generally follows',
    options: [
      'anti-Markovnikov addition',
      'Zaitsev\'s rule',
      'no particular regioselectivity',
      'Markovnikov\'s rule, with the -OH group adding to the more substituted carbon'
    ],
    correctIndex: 3,
    explanation: 'Acid-catalysed hydration proceeds via a carbocation intermediate, so it follows Markovnikov\'s rule, with the hydroxyl group ending up on the more substituted carbon (which formed the more stable carbocation).',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-9',
    type: 'mcq',
    question: 'The hydroboration-oxidation method for converting an alkene to an alcohol gives an overall result that is',
    options: [
      'formation of an ether, not an alcohol',
      'Markovnikov addition of water, similar to acid-catalysed hydration',
      'formation of an alkyl halide, not an alcohol',
      'anti-Markovnikov addition of water, with syn (same-face) stereochemistry'
    ],
    correctIndex: 3,
    explanation: 'Hydroboration-oxidation gives an anti-Markovnikov alcohol product, with the boron (and hence eventually the -OH group) adding to the less substituted carbon, via a concerted syn-addition mechanism.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-10',
    type: 'mcq',
    question: 'Reduction of an aldehyde using a reagent such as NaBH4 or LiAlH4 gives',
    options: ['a secondary alcohol', 'a tertiary alcohol', 'a carboxylic acid', 'a primary alcohol'],
    correctIndex: 3,
    explanation: 'Reduction of an aldehyde adds hydrogen across the carbonyl group, converting it into a primary alcohol.',
    difficulty: 'easy'
  },
  {
    id: 'alcohol-11',
    type: 'mcq',
    question: 'Reduction of a ketone using a reagent such as NaBH4 or LiAlH4 gives',
    options: ['a carboxylic acid', 'a primary alcohol', 'a tertiary alcohol', 'a secondary alcohol'],
    correctIndex: 3,
    explanation: 'Reduction of a ketone converts the carbonyl group into a secondary alcohol, since the carbonyl carbon in a ketone is already attached to two other carbon groups.',
    difficulty: 'easy'
  },
  {
    id: 'alcohol-12',
    type: 'mcq',
    question: 'Reaction of a Grignard reagent with formaldehyde (HCHO), followed by acidic hydrolysis, gives',
    options: ['a secondary alcohol', 'a primary alcohol', 'a ketone', 'a tertiary alcohol'],
    correctIndex: 1,
    explanation: 'Since formaldehyde has no alkyl substituents on the carbonyl carbon, reaction with a Grignard reagent gives a primary alcohol upon hydrolysis.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-13',
    type: 'mcq',
    question: 'Reaction of a Grignard reagent with a ketone, followed by acidic hydrolysis, gives',
    options: ['an aldehyde', 'a tertiary alcohol', 'a secondary alcohol', 'a primary alcohol'],
    correctIndex: 1,
    explanation: 'Since a ketone carbonyl carbon already bears two alkyl/aryl groups, addition of a Grignard reagent followed by hydrolysis gives a tertiary alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-14',
    type: 'mcq',
    question: 'The industrial Dow\'s process for preparing phenol involves',
    options: [
      'reduction of nitrobenzene',
      'direct oxidation of benzene with air',
      'the cumene hydroperoxide process only',
      'fusion of a haloarene with NaOH at high temperature and pressure, followed by acidification'
    ],
    correctIndex: 3,
    explanation: 'The Dow\'s process converts a haloarene (such as chlorobenzene) into phenol by fusion with sodium hydroxide under high temperature and pressure, followed by acidification.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-15',
    type: 'mcq',
    question: 'The industrially important cumene process for phenol production starts from cumene (isopropylbenzene), which is first oxidised by air to form',
    options: ['benzaldehyde', 'cumene hydroperoxide', 'benzene sulphonic acid', 'chlorobenzene'],
    correctIndex: 1,
    explanation: 'In the cumene process, cumene is first oxidised by atmospheric oxygen to form cumene hydroperoxide, which is then treated with dilute acid to give phenol and acetone.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-16',
    type: 'mcq',
    question: 'In the cumene process, treatment of cumene hydroperoxide with dilute acid gives phenol along with which valuable by-product?',
    options: ['ethanol', 'formaldehyde', 'acetic acid', 'acetone'],
    correctIndex: 3,
    explanation: 'Acid-catalysed rearrangement and cleavage of cumene hydroperoxide produces both phenol and acetone as valuable products.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-17',
    type: 'mcq',
    question: 'Phenol can be prepared by fusing sodium benzenesulphonate with',
    options: ['sulphuric acid', 'sodium chloride', 'sodium metal', 'sodium hydroxide (NaOH) at high temperature'],
    correctIndex: 3,
    explanation: 'Fusion of sodium benzenesulphonate with NaOH at high temperature, followed by acidification, gives phenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-18',
    type: 'mcq',
    question: 'Phenol can also be prepared by warming an aqueous solution of a benzene diazonium salt with',
    options: ['concentrated hydrochloric acid only', 'water, causing hydrolysis to give phenol and nitrogen gas', 'no reaction occurs under these conditions', 'sodium metal'],
    correctIndex: 1,
    explanation: 'Warming an aqueous solution of a benzenediazonium salt causes hydrolysis, replacing the diazonium group with a hydroxyl group and releasing nitrogen gas, giving phenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-19',
    type: 'mcq',
    question: 'Alcohols generally have higher boiling points than alkanes or haloalkanes of comparable molecular mass mainly because',
    options: [
      'alcohols are more polar but cannot form hydrogen bonds',
      'alcohols can form intermolecular hydrogen bonds due to the -OH group',
      'alcohols have lower molecular mass than corresponding alkanes',
      'alcohols exist only as gases at room temperature'
    ],
    correctIndex: 1,
    explanation: 'The ability of alcohols to form intermolecular hydrogen bonds via their -OH group significantly raises their boiling points compared to non-hydrogen-bonding compounds of similar molecular mass.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-20',
    type: 'mcq',
    question: 'Ethers generally have lower boiling points than isomeric alcohols mainly because',
    options: [
      'ethers are always gases at room temperature',
      'ethers have a much higher molecular mass',
      'ethers have stronger covalent bonds than alcohols',
      'ether molecules cannot form hydrogen bonds with each other, lacking an O-H group'
    ],
    correctIndex: 3,
    explanation: 'Since ethers lack an -OH group, they cannot hydrogen bond with each other, resulting in weaker intermolecular forces and lower boiling points than isomeric alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-21',
    type: 'mcq',
    question: 'As the size of the hydrocarbon (alkyl) part of an alcohol increases, its solubility in water generally',
    options: [
      'increases steadily',
      'decreases, since the hydrophobic (non-polar) character becomes more dominant relative to the single hydrogen-bonding -OH group',
      'becomes completely independent of molecular structure',
      'remains completely unaffected'
    ],
    correctIndex: 1,
    explanation: 'As the non-polar hydrocarbon portion of an alcohol grows larger relative to the single polar -OH group, the overall hydrophobic character increases, decreasing water solubility.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-22',
    type: 'mcq',
    question: 'The Lucas test, used to distinguish primary, secondary, and tertiary alcohols, uses a reagent consisting of',
    options: [
      'aqueous sodium hydroxide',
      'anhydrous zinc chloride dissolved in concentrated hydrochloric acid',
      'dilute sulphuric acid',
      'potassium permanganate solution'
    ],
    correctIndex: 1,
    explanation: 'The Lucas reagent is a mixture of anhydrous ZnCl2 and concentrated HCl, used to distinguish alcohols based on the rate at which they react to form an insoluble alkyl chloride (observed as turbidity).',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-23',
    type: 'mcq',
    question: 'In the Lucas test, a tertiary alcohol generally shows',
    options: [
      'no reaction at all, even after heating',
      'immediate turbidity (cloudiness), due to rapid formation of the relatively stable tertiary carbocation',
      'turbidity only after 5-10 minutes',
      'a colour change, but no turbidity'
    ],
    correctIndex: 1,
    explanation: 'Tertiary alcohols react almost immediately with the Lucas reagent at room temperature, since they readily form a relatively stable tertiary carbocation via an SN1-type mechanism, producing immediate turbidity.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-24',
    type: 'mcq',
    question: 'In the Lucas test, a primary alcohol generally shows',
    options: [
      'no visible reaction at room temperature, requiring heating to react',
      'immediate turbidity',
      'turbidity only after 5-10 minutes at room temperature',
      'an instantaneous colour change to green'
    ],
    correctIndex: 0,
    explanation: 'Primary alcohols react very slowly with the Lucas reagent and typically show no visible turbidity at room temperature, requiring heating for the reaction to proceed.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-25',
    type: 'mcq',
    question: 'Dehydration of alcohols to form alkenes, typically using concentrated sulphuric or phosphoric acid, generally follows the order of ease',
    options: [
      'dehydration ease is unrelated to alcohol classification',
      'primary > secondary > tertiary',
      'all alcohols dehydrate equally easily',
      'tertiary > secondary > primary, paralleling the stability of the intermediate carbocation'
    ],
    correctIndex: 3,
    explanation: 'Since acid-catalysed dehydration typically proceeds via an E1 mechanism through a carbocation intermediate, tertiary alcohols dehydrate most easily, followed by secondary, then primary alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-26',
    type: 'mcq',
    question: 'Oxidation of a primary alcohol using a strong oxidising agent such as acidified potassium dichromate generally gives, upon complete oxidation,',
    options: ['a ketone', 'no reaction occurs', 'an aldehyde only, which cannot be oxidised further', 'a carboxylic acid, via an intermediate aldehyde'],
    correctIndex: 3,
    explanation: 'Strong oxidising agents oxidise a primary alcohol first to an aldehyde and then further to a carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-27',
    type: 'mcq',
    question: 'Oxidation of a primary alcohol can be selectively stopped at the aldehyde stage by using a milder oxidising agent such as',
    options: [
      'acidified potassium permanganate',
      'pyridinium chlorochromate (PCC)',
      'acidified potassium dichromate under reflux',
      'concentrated nitric acid'
    ],
    correctIndex: 1,
    explanation: 'PCC (pyridinium chlorochromate) is a mild oxidising agent that selectively oxidises a primary alcohol only to the aldehyde stage, without further oxidation to the carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-28',
    type: 'mcq',
    question: 'Oxidation of a secondary alcohol using an oxidising agent such as acidified potassium dichromate generally gives',
    options: ['a carboxylic acid', 'no reaction occurs', 'an aldehyde', 'a ketone'],
    correctIndex: 3,
    explanation: 'Secondary alcohols are oxidised to ketones, since the resulting carbonyl carbon still bears two other carbon substituents and cannot be oxidised further under these conditions.',
    difficulty: 'easy'
  },
  {
    id: 'alcohol-29',
    type: 'mcq',
    question: 'Tertiary alcohols generally resist oxidation by common oxidising agents under normal conditions mainly because',
    options: [
      'they have too many hydrogen atoms on the carbon bearing the -OH group',
      'the carbon bearing the -OH group has no hydrogen atom attached to it, so oxidation without breaking a C-C bond is not possible under mild conditions',
      'tertiary alcohols do not actually exist as stable compounds',
      'tertiary alcohols are always insoluble in the oxidising medium'
    ],
    correctIndex: 1,
    explanation: 'Oxidation of an alcohol to a carbonyl compound normally requires removal of a hydrogen from the carbon bearing the -OH group; since a tertiary alcohol has no such hydrogen, it resists oxidation under normal, mild conditions.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-30',
    type: 'mcq',
    question: 'The reaction of an alcohol with a carboxylic acid in the presence of an acid catalyst, forming an ester and water, is known as',
    options: ['Wurtz reaction', 'Fischer esterification', 'Kolbe reaction', 'Cannizzaro reaction'],
    correctIndex: 1,
    explanation: 'Fischer esterification is the acid-catalysed, reversible reaction between an alcohol and a carboxylic acid to form an ester and water.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-31',
    type: 'mcq',
    question: 'Reaction of an alcohol with sodium metal produces',
    options: [
      'no reaction occurs, since sodium is unreactive towards alcohols',
      'sodium alkoxide and oxygen gas',
      'an alkyl halide and sodium hydroxide',
      'sodium alkoxide and hydrogen gas'
    ],
    correctIndex: 3,
    explanation: 'Alcohols react with sodium metal, releasing hydrogen gas and forming the corresponding sodium alkoxide.',
    difficulty: 'easy'
  },
  {
    id: 'alcohol-32',
    type: 'mcq',
    question: 'Phenols are generally more acidic than alcohols mainly because',
    options: [
      'phenols have a much higher molecular mass',
      'phenols contain a stronger O-H bond than alcohols',
      'alcohols cannot lose a proton at all under any conditions',
      'the phenoxide ion formed after loss of a proton is stabilised by resonance delocalisation of the negative charge into the aromatic ring'
    ],
    correctIndex: 3,
    explanation: 'Resonance stabilisation of the phenoxide ion, by delocalising the negative charge into the aromatic ring, makes phenol a stronger acid than a simple alcohol, whose corresponding alkoxide ion has no such stabilisation.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-33',
    type: 'mcq',
    question: 'Despite being more acidic than alcohols, phenol is generally',
    options: [
      'a stronger acid than carbonic acid, and therefore reacts readily with NaHCO3 to liberate CO2',
      'a weaker acid than carbonic acid, and therefore does NOT react appreciably with sodium bicarbonate (NaHCO3)',
      'completely non-acidic',
      'a much stronger acid than any carboxylic acid'
    ],
    correctIndex: 1,
    explanation: 'Phenol is a weaker acid than carbonic acid, so unlike carboxylic acids, it does not react appreciably with sodium bicarbonate to release carbon dioxide gas.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-34',
    type: 'mcq',
    question: 'The presence of an electron-withdrawing group, such as a nitro group, on the aromatic ring of a phenol generally',
    options: [
      'converts the phenol into a base',
      'decreases the acidity of the phenol',
      'has no effect whatsoever on acidity',
      'increases the acidity of the phenol, by further stabilising the phenoxide ion through additional resonance/inductive effects'
    ],
    correctIndex: 3,
    explanation: 'Electron-withdrawing groups, especially at ortho or para positions, stabilise the negative charge on the phenoxide ion through resonance and inductive effects, increasing the acidity of the phenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-35',
    type: 'mcq',
    question: 'The presence of an electron-donating group, such as a methyl group, on the aromatic ring of a phenol generally',
    options: [
      'has no effect whatsoever on acidity',
      'decreases the acidity of the phenol, by destabilising the phenoxide ion',
      'increases the acidity of the phenol',
      'converts phenol into an alcohol'
    ],
    correctIndex: 1,
    explanation: 'Electron-donating groups intensify the negative charge on the phenoxide ion, destabilising it and thereby decreasing the acidity of the phenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-36',
    type: 'mcq',
    question: 'The Kolbe reaction converts sodium phenoxide, when treated with carbon dioxide under pressure followed by acidification, into',
    options: ['salicylaldehyde', 'salicylic acid (ortho-hydroxybenzoic acid)', 'phenol itself, unchanged', 'benzoic acid'],
    correctIndex: 1,
    explanation: 'In the Kolbe reaction, sodium phenoxide reacts with carbon dioxide under pressure, and subsequent acidification gives salicylic acid (2-hydroxybenzoic acid).',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-37',
    type: 'mcq',
    question: 'The Reimer-Tiemann reaction converts phenol, when treated with chloroform and aqueous sodium hydroxide, into',
    options: ['benzaldehyde', 'phenyl acetate', 'salicylic acid', 'salicylaldehyde (ortho-hydroxybenzaldehyde), via a dichlorocarbene intermediate'],
    correctIndex: 3,
    explanation: 'The Reimer-Tiemann reaction generates a dichlorocarbene intermediate from chloroform and base, which reacts with phenol to ultimately give salicylaldehyde after hydrolysis.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-38',
    type: 'mcq',
    question: 'The reactive electrophilic species generated in the Reimer-Tiemann reaction, from chloroform and a strong base, is',
    options: ['a diazonium ion', 'a carbanion', 'a phenoxide radical', 'dichlorocarbene, :CCl2'],
    correctIndex: 3,
    explanation: 'Treatment of chloroform with a strong base generates dichlorocarbene (:CCl2), a highly reactive electrophilic species that is central to the mechanism of the Reimer-Tiemann reaction.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-39',
    type: 'mcq',
    question: 'Acetylation of phenol, using acetic anhydride or acetyl chloride, gives',
    options: [
      'salicylic acid',
      'phenyl acetate, via esterification of the -OH group',
      'anisole',
      'sodium phenoxide'
    ],
    correctIndex: 1,
    explanation: 'Reaction of phenol with acetic anhydride or acetyl chloride esterifies the -OH group, forming phenyl acetate.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-40',
    type: 'mcq',
    question: 'Reduction of phenol using zinc dust (heating phenol with zinc dust) gives',
    options: ['cyclohexanol', 'benzene, via removal of the -OH group', 'benzaldehyde', 'toluene'],
    correctIndex: 1,
    explanation: 'Heating phenol with zinc dust reduces it, removing the hydroxyl group and giving benzene as the product.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-41',
    type: 'mcq',
    question: 'In electrophilic aromatic substitution reactions, the -OH group of phenol acts as',
    options: [
      'a group that has no influence on the ring\'s reactivity at all',
      'a deactivating and meta-directing group',
      'a deactivating but ortho/para-directing group',
      'a strongly activating and ortho/para-directing group, due to resonance donation of a lone pair into the ring'
    ],
    correctIndex: 3,
    explanation: 'The -OH group is a strong activator and ortho/para director, since one of the lone pairs on oxygen delocalises into the ring, increasing electron density especially at the ortho and para positions.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-42',
    type: 'mcq',
    question: 'Nitration of phenol with dilute nitric acid generally gives a mixture of',
    options: [
      'only para-nitrophenol, exclusively',
      'meta- and para-nitrophenol only',
      'ortho- and meta-nitrophenol',
      'ortho- and para-nitrophenol'
    ],
    correctIndex: 3,
    explanation: 'Since -OH is an ortho/para director, nitration of phenol with dilute nitric acid gives a mixture predominantly consisting of ortho- and para-nitrophenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-43',
    type: 'mcq',
    question: 'ortho-Nitrophenol is more volatile (steam-volatile) than para-nitrophenol mainly because',
    options: [
      'para-nitrophenol has no hydrogen bonding at all',
      'ortho-nitrophenol has intramolecular hydrogen bonding, reducing intermolecular association, while para-nitrophenol has intermolecular hydrogen bonding, raising its effective boiling point',
      'ortho-nitrophenol is ionic while para-nitrophenol is covalent',
      'ortho-nitrophenol has a much higher molecular mass'
    ],
    correctIndex: 1,
    explanation: 'In ortho-nitrophenol, intramolecular hydrogen bonding occurs between the adjacent -OH and -NO2 groups, reducing intermolecular association and making it more volatile; para-nitrophenol instead forms intermolecular hydrogen bonds, resulting in a higher effective boiling point and lower volatility.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-44',
    type: 'mcq',
    question: 'Bromination of phenol with bromine water (without any catalyst) readily gives',
    options: [
      'no reaction at all, since phenol is unreactive towards bromine',
      'a mixture of mono-brominated products only, similar to benzene',
      'a meta-substituted bromophenol',
      '2,4,6-tribromophenol as a white precipitate, due to the highly activating nature of the -OH group'
    ],
    correctIndex: 3,
    explanation: 'Because the -OH group strongly activates the aromatic ring, phenol reacts readily with bromine water even without a catalyst, giving 2,4,6-tribromophenol as a white precipitate.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-45',
    type: 'mcq',
    question: 'The Williamson ether synthesis involves reacting an alkyl halide with',
    options: [
      'sodium metal in dry ether',
      'a sodium or potassium alkoxide, via an SN2 mechanism',
      'concentrated sulphuric acid',
      'a Grignard reagent'
    ],
    correctIndex: 1,
    explanation: 'The Williamson synthesis reacts an alkyl halide with a metal alkoxide (or aryloxide) via an SN2 mechanism to form an ether.',
    difficulty: 'easy'
  },
  {
    id: 'alcohol-46',
    type: 'mcq',
    question: 'For preparing an unsymmetrical ether by the Williamson synthesis, it is generally best to use',
    options: [
      'a tertiary alkyl halide with a primary alkoxide, to maximise yield',
      'a primary (or methyl) alkyl halide with the appropriately substituted alkoxide, to minimise competing elimination',
      'either combination gives identical results, since the choice does not matter',
      'only aryl halides can be used in this synthesis'
    ],
    correctIndex: 1,
    explanation: 'Since bulky or tertiary alkyl halides favour elimination (E2) over substitution when reacted with a strongly basic alkoxide, using a primary or methyl alkyl halide minimises this competing side reaction and maximises the ether yield.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-47',
    type: 'mcq',
    question: 'Acid-catalysed intermolecular dehydration of two molecules of a primary alcohol, under controlled (relatively lower) temperature conditions, gives predominantly',
    options: [
      'an aldehyde',
      'an alkene',
      'a carboxylic acid',
      'a symmetrical ether'
    ],
    correctIndex: 3,
    explanation: 'At relatively lower temperatures, acid-catalysed dehydration of two molecules of a primary alcohol proceeds via intermolecular loss of water, favouring formation of a symmetrical ether over the alkene (which requires higher temperature).',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-48',
    type: 'mcq',
    question: 'Ethers are generally considered relatively unreactive (inert) compounds, but they can undergo cleavage of the C-O bond when treated with',
    options: [
      'a mild oxidising agent like PCC',
      'concentrated hydrogen halide acids (such as HI or HBr), especially with heating or excess reagent',
      'dilute sodium hydroxide',
      'water alone at room temperature'
    ],
    correctIndex: 1,
    explanation: 'Despite their general inertness, ethers can be cleaved by strong hydrogen halide acids like HI or HBr, particularly under more vigorous conditions such as heating or using an excess of the acid.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-49',
    type: 'mcq',
    question: 'When a mixed alkyl aryl ether such as anisole is treated with excess hydroiodic acid (HI), cleavage typically occurs at the',
    options: [
      'aryl-oxygen bond, giving an alkyl aryl compound and an alcohol',
      'alkyl-oxygen bond, giving phenol and an alkyl iodide, since the aryl-oxygen bond has partial double bond character and is much stronger',
      'both bonds simultaneously and equally, with no preference',
      'oxygen-hydrogen bond, since ethers contain such a bond'
    ],
    correctIndex: 1,
    explanation: 'Because the aryl-oxygen bond in an alkyl aryl ether has partial double bond character (due to resonance with the ring) and is significantly stronger, cleavage preferentially occurs at the weaker alkyl-oxygen bond, giving phenol and the corresponding alkyl iodide.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-50',
    type: 'mcq',
    question: 'When ether cleavage by HI occurs with a primary or methyl alkyl group, the mechanism generally proceeds via',
    options: [
      'a radical mechanism only',
      'an SN2 pathway, via backside attack of the iodide nucleophile',
      'an SN1 pathway, through a stable carbocation intermediate',
      'no mechanism is possible, since cleavage does not occur with primary groups'
    ],
    correctIndex: 1,
    explanation: 'Cleavage of ethers bearing primary or methyl alkyl groups typically proceeds via an SN2 mechanism, since primary carbocations are unstable and unlikely to form.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-51',
    type: 'mcq',
    question: 'When ether cleavage by HI occurs with a tertiary, benzylic, or allylic alkyl group, the mechanism generally proceeds via',
    options: [
      'a purely radical chain mechanism',
      'no reaction occurs under any conditions',
      'an SN2 pathway, via backside attack',
      'an SN1 pathway, through formation of a relatively stable carbocation intermediate'
    ],
    correctIndex: 3,
    explanation: 'When the alkyl group is tertiary, benzylic, or allylic, the corresponding carbocation is relatively stable, favouring cleavage via an SN1 mechanism.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-52',
    type: 'mcq',
    question: 'In electrophilic aromatic substitution reactions, the alkoxy (-OR) group of an aryl alkyl ether (such as anisole) behaves similarly to the -OH group of phenol, acting as',
    options: [
      'a group that completely deactivates the ring towards any substitution',
      'an activating and ortho/para-directing group',
      'a deactivating and meta-directing group',
      'a group with no directing influence at all'
    ],
    correctIndex: 1,
    explanation: 'Like the -OH group in phenol, the alkoxy group in aryl alkyl ethers donates electron density into the ring via resonance, acting as an activator and directing electrophilic substitution to the ortho and para positions.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-53',
    type: 'mcq',
    question: 'Ethers can act as weak hydrogen bond acceptors with water molecules, which explains why',
    options: [
      'ethers cannot interact with water in any way',
      'ethers are completely insoluble in water',
      'ethers are more soluble in water than alcohols of the same molecular mass',
      'lower ethers show appreciable solubility in water, comparable to alcohols of similar molecular mass in some cases'
    ],
    correctIndex: 3,
    explanation: 'Although ethers cannot donate hydrogen bonds (lacking O-H), the lone pairs on their oxygen atom allow them to accept hydrogen bonds from water, giving lower ethers reasonable water solubility, even though it is generally somewhat less than that of comparable alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-54',
    type: 'mcq',
    question: 'Which of the following correctly ranks the typical boiling points of an alcohol, ether, and alkane, all of comparable molecular mass?',
    options: [
      'alkane > alcohol > ether',
      'ether > alcohol > alkane',
      'alkane > ether > alcohol',
      'alcohol > ether > alkane'
    ],
    correctIndex: 3,
    explanation: 'Alcohols, capable of hydrogen bonding, have the highest boiling point; ethers, though polar, cannot hydrogen bond with themselves and have intermediate boiling points; alkanes, being non-polar, have the lowest boiling points among these comparable-mass compounds.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-55',
    type: 'mcq',
    question: 'Vicinal diols (glycols), such as ethylene glycol, are typically prepared from alkenes by',
    options: [
      'reaction with cold, dilute alkaline potassium permanganate (syn-dihydroxylation)',
      'reaction with sodium metal',
      'complete combustion of the alkene',
      'reaction with hydrogen halide acids'
    ],
    correctIndex: 0,
    explanation: 'Reaction of an alkene with cold, dilute alkaline KMnO4 is a classic method for syn-dihydroxylation, converting the alkene into a vicinal diol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-56',
    type: 'mcq',
    question: 'Complete oxidative cleavage of a vicinal diol using an oxidising agent such as periodic acid (HIO4) typically gives',
    options: [
      'two carboxylic acids exclusively',
      'a mixture of aldehydes and/or ketones, depending on the substitution at each carbon, with cleavage of the C-C bond between the two -OH groups',
      'a single alcohol product with no cleavage at all',
      'a single alkene product'
    ],
    correctIndex: 1,
    explanation: 'Periodic acid selectively cleaves the C-C bond between the two hydroxyl groups of a vicinal diol, giving two carbonyl compounds (aldehydes and/or ketones, depending on substitution).',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-57',
    type: 'mcq',
    question: 'Among primary, secondary, and tertiary alcohols of similar molecular mass, boiling points generally follow the trend',
    options: [
      'all three types show identical boiling points',
      'boiling point is completely unrelated to the degree of branching',
      'primary > secondary > tertiary, since increased branching reduces surface area available for intermolecular contact',
      'tertiary > secondary > primary'
    ],
    correctIndex: 2,
    explanation: 'As with other classes of organic compounds, increased branching (as in tertiary alcohols compared to primary) reduces the surface area available for van der Waals interactions, generally lowering the boiling point.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-58',
    type: 'mcq',
    question: 'Phenols, like alcohols, can undergo hydrogen bonding, and this contributes to their',
    options: [
      'complete insolubility in any solvent',
      'relatively high boiling points and appreciable, though limited, water solubility',
      'unusually low boiling points compared to similarly sized hydrocarbons',
      'complete lack of any intermolecular interactions'
    ],
    correctIndex: 1,
    explanation: 'The hydrogen-bonding capability of the -OH group in phenols contributes to their comparatively high boiling points and limited but appreciable solubility in water.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-59',
    type: 'mcq',
    question: 'Reaction of phenol with excess bromine water occurs readily without a catalyst because',
    options: [
      'phenol is a strongly deactivated aromatic ring',
      'bromine is an extremely weak electrophile that reacts with any aromatic compound easily',
      'phenol contains no aromatic ring at all',
      'the -OH group strongly activates the aromatic ring, increasing its electron density and reactivity towards electrophiles'
    ],
    correctIndex: 3,
    explanation: 'The strong activation of the ring by the -OH group increases electron density sufficiently that phenol reacts readily with bromine water, without requiring a Lewis acid catalyst (unlike benzene).',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-60',
    type: 'mcq',
    question: 'Which of the following statements correctly compares the two industrial phenol-producing methods discussed in NCERT?',
    options: [
      'The Dow\'s process uses a haloarene as starting material, while the cumene process uses cumene, which is oxidised via a hydroperoxide intermediate',
      'The Dow\'s process gives acetone as its main by-product',
      'The cumene process does not produce any valuable by-product',
      'Both processes use exactly the same starting material and reagents'
    ],
    correctIndex: 0,
    explanation: 'The Dow\'s process starts from a haloarene and uses NaOH fusion, whereas the cumene process starts from cumene and proceeds through a hydroperoxide intermediate, ultimately giving phenol and acetone.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-61',
    type: 'mcq',
    question: 'The general order of acid strength among water, alcohols, and phenols is best represented as',
    options: [
      'alcohols > phenols > water',
      'phenols > water > alcohols',
      'water > phenols > alcohols',
      'alcohols > water > phenols'
    ],
    correctIndex: 1,
    explanation: 'Phenols are more acidic than water due to resonance stabilisation of the phenoxide ion, while simple alcohols are generally less acidic than water, giving the order phenols > water > alcohols.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-62',
    type: 'mcq',
    question: 'Phenol reacts with aqueous sodium hydroxide to form',
    options: [
      'sodium phenoxide and water',
      'anisole',
      'no reaction, since phenol is not acidic enough to react with NaOH',
      'phenyl acetate'
    ],
    correctIndex: 0,
    explanation: 'Being weakly acidic, phenol readily reacts with aqueous sodium hydroxide to form sodium phenoxide and water.',
    difficulty: 'easy'
  },
  {
    id: 'alcohol-63',
    type: 'mcq',
    question: 'In terms of general reactivity, phenols undergo electrophilic aromatic substitution reactions',
    options: [
      'only under forcing conditions with strong catalysts, similar to benzene',
      'at exactly the same rate as benzene, with no difference at all',
      'much more slowly than benzene, due to deactivation by the -OH group',
      'much more readily than benzene, due to strong activation by the -OH group'
    ],
    correctIndex: 3,
    explanation: 'Since the -OH group strongly activates the aromatic ring by resonance donation, phenols undergo electrophilic aromatic substitution much more readily than benzene itself.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-64',
    type: 'mcq',
    question: 'Anisole (methoxybenzene) can be conveniently prepared using the Williamson synthesis from phenol by reaction with',
    options: [
      'concentrated sulphuric acid',
      'acetic anhydride',
      'sodium hydroxide, followed by treatment with methyl iodide (or another suitable methylating agent)',
      'sodium metal alone'
    ],
    correctIndex: 2,
    explanation: 'Phenol is first converted to sodium phenoxide using a base, which then reacts with methyl iodide (or dimethyl sulphate) via the Williamson synthesis to give anisole.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-65',
    type: 'mcq',
    question: 'The general trend in acidity of substituted phenols shows that para-nitrophenol is generally',
    options: [
      'less acidic than unsubstituted phenol',
      'not acidic at all',
      'exactly as acidic as unsubstituted phenol',
      'more acidic than unsubstituted phenol, due to the electron-withdrawing effect of the nitro group at the para position'
    ],
    correctIndex: 3,
    explanation: 'The strongly electron-withdrawing nitro group at the para position stabilises the phenoxide ion through resonance, making para-nitrophenol significantly more acidic than unsubstituted phenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-66',
    type: 'mcq',
    question: 'para-Cresol (4-methylphenol) is generally',
    options: [
      'exactly as acidic as phenol',
      'a stronger acid than any nitrophenol',
      'less acidic than phenol, since the electron-donating methyl group destabilises the phenoxide ion',
      'more acidic than phenol, due to the electron-donating methyl group'
    ],
    correctIndex: 2,
    explanation: 'The electron-donating methyl group in para-cresol destabilises the negative charge on the phenoxide ion, making it a weaker acid than unsubstituted phenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-67',
    type: 'mcq',
    question: 'Aromatic rings in phenols and aryl ethers are activated for electrophilic substitution primarily because the attached oxygen atom',
    options: [
      'donates one of its lone pairs into the ring through resonance, increasing electron density at ortho and para positions',
      'has no lone pairs available for donation',
      'forms a triple bond with the ring carbon',
      'withdraws electron density from the ring inductively, with no resonance effect'
    ],
    correctIndex: 0,
    explanation: 'The oxygen atom in both phenol and aryl ethers donates a lone pair into the aromatic ring system through resonance, significantly increasing electron density (especially at ortho and para positions) and activating the ring.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-68',
    type: 'mcq',
    question: 'Which classic laboratory test can be used to help distinguish primary, secondary, and tertiary alcohols based on differing reaction rates?',
    options: ['Tollens\' test', 'Lucas test', 'Iodoform test only', 'Fehling\'s test'],
    correctIndex: 1,
    explanation: 'The Lucas test, using ZnCl2/HCl, distinguishes alcohols based on the differing rates at which primary, secondary, and tertiary alcohols react to form an insoluble alkyl chloride.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-69',
    type: 'mcq',
    question: 'The dehydration of alcohols to form alkenes generally follows Zaitsev\'s rule, meaning the major product is typically the',
    options: [
      'more substituted (more stable) alkene',
      'the original alcohol, unreacted',
      'least substituted (least stable) alkene',
      'ether, rather than an alkene'
    ],
    correctIndex: 0,
    explanation: 'In accordance with Zaitsev\'s rule, elimination reactions (including alcohol dehydration) generally favour formation of the more substituted, more thermodynamically stable alkene as the major product.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-70',
    type: 'mcq',
    question: 'Overall, the chemistry of alcohols, phenols, and ethers, as emphasised throughout this NCERT chapter, centres on understanding',
    options: [
      'topics entirely unrelated to functional group chemistry',
      'only their crystal structure in the solid state',
      'the structure, preparation, physical properties, and reactivity (acidity, substitution, oxidation, cleavage) arising from the presence of the hydroxyl or ether oxygen functional group',
      'only their use as industrial fuels'
    ],
    correctIndex: 2,
    explanation: 'The chapter integrates the structural features, preparation methods, physical behaviour, and diverse chemical reactivity that arise specifically from the hydroxyl group (in alcohols/phenols) or the ether oxygen linkage.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'alcohol-71',
    type: 'assertion-reason',
    question: 'Assertion (A): The C-O-H bond angle in methanol is slightly greater than the ideal tetrahedral angle.\nReason (R): The bulkier methyl group causes greater repulsion with the lone pairs on oxygen than a hydrogen atom would, widening the bond angle compared to water.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The increased steric repulsion from the bulkier methyl group compared to a hydrogen atom in water is exactly why the bond angle in methanol widens beyond the ideal tetrahedral value, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-72',
    type: 'assertion-reason',
    question: 'Assertion (A): The C-O-C bond angle in ethers is generally larger than the C-O-H bond angle in alcohols.\nReason (R): Ethers have two alkyl groups attached to oxygen, causing greater steric repulsion than the single alkyl group and one hydrogen atom found in alcohols.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The greater steric bulk of two alkyl groups compared to one alkyl group and one hydrogen is exactly why the C-O-C angle in ethers exceeds the C-O-H angle in alcohols, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-73',
    type: 'assertion-reason',
    question: 'Assertion (A): Acid-catalysed hydration of an unsymmetrical alkene gives the Markovnikov product.\nReason (R): The reaction proceeds via a carbocation intermediate, which forms preferentially at the more substituted carbon due to its greater stability.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The preferential formation of the more stable carbocation, followed by nucleophilic attack of water at that position, directly explains the Markovnikov selectivity, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-74',
    type: 'assertion-reason',
    question: 'Assertion (A): Hydroboration-oxidation gives the anti-Markovnikov alcohol product.\nReason (R): The mechanism does not proceed via a carbocation intermediate, and boron preferentially adds to the less hindered (less substituted) carbon.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The absence of a carbocation intermediate and the preferential addition of boron to the less hindered carbon directly account for the anti-Markovnikov regioselectivity, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-75',
    type: 'assertion-reason',
    question: 'Assertion (A): Reaction of a Grignard reagent with formaldehyde gives a primary alcohol, while reaction with a ketone gives a tertiary alcohol.\nReason (R): Formaldehyde has no alkyl/aryl substituents on its carbonyl carbon, while a ketone carbonyl carbon already bears two such substituents before the Grignard addition.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The differing number of substituents already present on the carbonyl carbon before Grignard addition directly determines whether a primary, secondary, or tertiary alcohol results, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-76',
    type: 'assertion-reason',
    question: 'Assertion (A): The cumene process for phenol production is industrially favoured over the Dow\'s process in many contexts.\nReason (R): The cumene process gives both phenol and acetone as valuable products, improving the overall economics of the process.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The generation of a second valuable co-product (acetone) alongside phenol makes the cumene process more economically attractive, correctly explaining the industrial preference stated in A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-77',
    type: 'assertion-reason',
    question: 'Assertion (A): Alcohols have significantly higher boiling points than alkanes of comparable molecular mass.\nReason (R): Alcohols can form intermolecular hydrogen bonds due to their -OH group, while alkanes cannot.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The presence of intermolecular hydrogen bonding in alcohols, absent in alkanes, is exactly why alcohols show significantly elevated boiling points, correctly explaining A.',
    difficulty: 'easy'
  },
  {
    id: 'alcohol-78',
    type: 'assertion-reason',
    question: 'Assertion (A): Ethers have lower boiling points than isomeric alcohols.\nReason (R): Ether molecules lack an O-H group and therefore cannot form hydrogen bonds with each other.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The absence of hydrogen bonding capability between ether molecules directly explains their lower boiling points compared to isomeric alcohols, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-79',
    type: 'assertion-reason',
    question: 'Assertion (A): The Lucas test can distinguish between primary, secondary, and tertiary alcohols.\nReason (R): Tertiary alcohols form the most stable carbocation and therefore react fastest with the Lucas reagent, while primary alcohols react the slowest.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The differing rates of carbocation formation, correlating with alcohol classification, directly explain why the Lucas test can distinguish between primary, secondary, and tertiary alcohols, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-80',
    type: 'assertion-reason',
    question: 'Assertion (A): Tertiary alcohols dehydrate more easily than primary alcohols under acid-catalysed conditions.\nReason (R): Tertiary alcohols form more stable carbocation intermediates, in line with an E1-type dehydration mechanism.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The greater stability of tertiary carbocations, central to the E1 dehydration mechanism, directly explains why tertiary alcohols dehydrate more readily than primary alcohols, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-81',
    type: 'assertion-reason',
    question: 'Assertion (A): PCC is used to selectively oxidise a primary alcohol to an aldehyde without further oxidation to a carboxylic acid.\nReason (R): PCC is a comparatively mild oxidising agent, unlike stronger oxidants such as acidified potassium dichromate under reflux.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The comparatively mild oxidising strength of PCC is exactly why it stops the oxidation at the aldehyde stage rather than proceeding further to the carboxylic acid, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-82',
    type: 'assertion-reason',
    question: 'Assertion (A): Tertiary alcohols resist oxidation by common oxidising agents under normal conditions.\nReason (R): The carbon bearing the -OH group in a tertiary alcohol has no hydrogen atom attached to it, preventing straightforward oxidation to a carbonyl compound.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The absence of a hydrogen atom on the hydroxyl-bearing carbon is exactly why tertiary alcohols cannot undergo the usual oxidation to a carbonyl compound, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-83',
    type: 'assertion-reason',
    question: 'Assertion (A): Phenol is a stronger acid than a simple aliphatic alcohol.\nReason (R): The phenoxide ion, formed after phenol loses a proton, is stabilised by resonance delocalisation of the negative charge into the aromatic ring, unlike a simple alkoxide ion.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The resonance stabilisation available to the phenoxide ion, but not to a simple alkoxide ion, is exactly why phenol is significantly more acidic than an aliphatic alcohol, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-84',
    type: 'assertion-reason',
    question: 'Assertion (A): Phenol does not react appreciably with aqueous sodium bicarbonate to liberate carbon dioxide.\nReason (R): Phenol is a weaker acid than carbonic acid.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since phenol is weaker than carbonic acid, it cannot displace CO2 from bicarbonate, which requires a stronger acid than carbonic acid — this directly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-85',
    type: 'assertion-reason',
    question: 'Assertion (A): para-Nitrophenol is more acidic than phenol.\nReason (R): The nitro group at the para position withdraws electron density and stabilises the phenoxide ion through resonance.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The additional resonance stabilisation of the phenoxide ion provided by the electron-withdrawing para-nitro group is exactly why para-nitrophenol is more acidic than phenol, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-86',
    type: 'assertion-reason',
    question: 'Assertion (A): para-Cresol (4-methylphenol) is less acidic than phenol.\nReason (R): The electron-donating methyl group destabilises the phenoxide ion by intensifying the negative charge, making deprotonation less favourable.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The destabilisation of the phenoxide ion by the electron-donating methyl group is exactly why para-cresol is a weaker acid than phenol, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-87',
    type: 'assertion-reason',
    question: 'Assertion (A): Phenol reacts readily with bromine water without any catalyst, forming 2,4,6-tribromophenol.\nReason (R): The -OH group strongly activates the aromatic ring towards electrophilic substitution by donating electron density via resonance.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The strong ring activation provided by the -OH group is exactly why phenol reacts so readily with bromine water, without needing a Lewis acid catalyst, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-88',
    type: 'assertion-reason',
    question: 'Assertion (A): ortho-Nitrophenol is more volatile (steam-volatile) than para-nitrophenol.\nReason (R): ortho-Nitrophenol exhibits intramolecular hydrogen bonding, reducing its tendency to associate intermolecularly, unlike para-nitrophenol, which forms intermolecular hydrogen bonds.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This difference in hydrogen bonding pattern (intramolecular vs intermolecular) directly explains the difference in volatility between the ortho and para isomers, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-89',
    type: 'assertion-reason',
    question: 'Assertion (A): The Reimer-Tiemann reaction converts phenol into salicylaldehyde.\nReason (R): The reaction proceeds via generation of dichlorocarbene from chloroform and base, which reacts electrophilically with the phenoxide ring, predominantly at the ortho position.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This mechanistic pathway, involving dichlorocarbene attack predominantly at the ortho position, directly explains the formation of salicylaldehyde in the Reimer-Tiemann reaction, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-90',
    type: 'assertion-reason',
    question: 'Assertion (A): The Kolbe reaction gives salicylic acid rather than a meta- or para-substituted benzoic acid derivative.\nReason (R): The reaction of sodium phenoxide with CO2 proceeds through an intermediate that favours attachment of the carboxyl group specifically at the ortho position relative to the oxygen.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The described mechanistic preference for ortho attachment directly explains why the Kolbe reaction selectively gives salicylic acid, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-91',
    type: 'assertion-reason',
    question: 'Assertion (A): The Williamson synthesis is best carried out using a primary or methyl alkyl halide when preparing an unsymmetrical ether.\nReason (R): Bulkier secondary or tertiary alkyl halides tend to favour competing elimination reactions with the strongly basic alkoxide, reducing ether yield.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The tendency of bulkier alkyl halides to undergo elimination instead of substitution with a strongly basic alkoxide directly explains why primary/methyl halides are preferred in the Williamson synthesis, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-92',
    type: 'assertion-reason',
    question: 'Assertion (A): Cleavage of anisole by excess HI gives phenol and methyl iodide, rather than iodobenzene and methanol.\nReason (R): The aryl-oxygen bond has partial double bond character due to resonance and is much stronger than the alkyl-oxygen bond, so cleavage preferentially occurs at the weaker alkyl-oxygen bond.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The greater strength of the resonance-stabilised aryl-oxygen bond compared to the alkyl-oxygen bond directly explains why cleavage occurs at the alkyl-oxygen bond, giving phenol and methyl iodide, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-93',
    type: 'assertion-reason',
    question: 'Assertion (A): Cleavage of an ether bearing a tertiary alkyl group by HI generally proceeds via an SN1 mechanism.\nReason (R): The tertiary carbocation formed as an intermediate is comparatively stable, favouring an SN1 pathway over SN2.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The relative stability of the tertiary carbocation intermediate is exactly why cleavage of ethers with tertiary alkyl groups favours an SN1 pathway, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-94',
    type: 'assertion-reason',
    question: 'Assertion (A): Ethers, despite lacking an O-H group, show appreciable solubility in water for lower molecular mass members.\nReason (R): The lone pairs on the ether oxygen allow it to act as a hydrogen bond acceptor with water molecules.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The ability of the ether oxygen to accept hydrogen bonds from water molecules, despite the ether itself lacking O-H, is exactly why lower ethers still show meaningful water solubility, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-95',
    type: 'assertion-reason',
    question: 'Assertion (A): The alkoxy (-OR) group in anisole activates the aromatic ring towards electrophilic substitution.\nReason (R): The oxygen atom donates one of its lone pairs into the ring through resonance, increasing electron density at the ortho and para positions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This resonance donation of electron density into the ring, particularly at ortho and para positions, is exactly why the alkoxy group activates the ring, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-96',
    type: 'assertion-reason',
    question: 'Assertion (A): Periodic acid (HIO4) selectively cleaves the carbon-carbon bond of a vicinal diol.\nReason (R): This oxidative cleavage occurs specifically at the bond connecting the two carbons bearing the hydroxyl groups, giving two carbonyl products.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This specific cleavage site, restated in R, is exactly the mechanistic detail that explains the selectivity described in A.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-97',
    type: 'assertion-reason',
    question: 'Assertion (A): Alcohols generally show decreasing water solubility as the size of the alkyl (hydrocarbon) group increases.\nReason (R): A larger hydrocarbon portion increases the hydrophobic character of the molecule relative to the single hydrogen-bonding hydroxyl group.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The growing dominance of the hydrophobic hydrocarbon portion over the single polar -OH group directly explains the decreasing water solubility with increasing alkyl chain length, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-98',
    type: 'assertion-reason',
    question: 'Assertion (A): Fischer esterification is a reversible reaction.\nReason (R): The ester product can, under appropriate conditions (such as excess water and acid), be hydrolysed back into the corresponding alcohol and carboxylic acid.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The possibility of hydrolysing the ester product back to the starting materials is exactly what makes Fischer esterification a reversible, equilibrium reaction, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-99',
    type: 'assertion-reason',
    question: 'Assertion (A): Alcohols always show greater acidity than phenols in aqueous solution.\nReason (R): The alkoxide ion formed from an alcohol is destabilised relative to the phenoxide ion, since there is no resonance delocalisation of the negative charge in the alkoxide.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — phenols are generally more acidic than alcohols, not the other way around. R correctly describes why phenoxide is more stable than alkoxide, which is exactly why the assertion in A (claiming alcohols are more acidic) is incorrect.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-100',
    type: 'assertion-reason',
    question: 'Assertion (A): The study of alcohols, phenols, and ethers integrates structural, physical, and mechanistic aspects of organic chemistry.\nReason (R): Their reactivity patterns — such as acidity, oxidation, elimination, and nucleophilic substitution/cleavage — all trace back to the properties of the hydroxyl or ether oxygen functional group.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The shared dependence of these diverse reaction types on the properties of the hydroxyl/ether oxygen group is exactly what unifies and explains the integrated study of this chapter, correctly explaining A.',
    difficulty: 'medium'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'alcohol-101',
    type: 'statement',
    question: 'Statement I: Alcohols are classified as monohydric, dihydric, or trihydric based on the number of -OH groups present.\nStatement II: Alcohols are classified as primary, secondary, or tertiary based on the nature of the carbon bearing the -OH group.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe two independent classification schemes used for alcohols.',
    difficulty: 'easy'
  },
  {
    id: 'alcohol-102',
    type: 'statement',
    question: 'Statement I: The C-O-H bond angle in alcohols is smaller than the bond angle in water.\nStatement II: The C-O-C bond angle in ethers is larger than the C-O-H bond angle in alcohols.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the bond angle in alcohols is actually slightly larger than in water, not smaller. Statement II correctly describes the further increase in bond angle for ethers.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-103',
    type: 'statement',
    question: 'Statement I: Acid-catalysed hydration of alkenes gives the Markovnikov alcohol product.\nStatement II: Hydroboration-oxidation gives the anti-Markovnikov alcohol product.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the regiochemical outcomes of these two important methods for converting alkenes to alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-104',
    type: 'statement',
    question: 'Statement I: Reduction of an aldehyde gives a secondary alcohol.\nStatement II: Reduction of a ketone gives a tertiary alcohol.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — reduction of an aldehyde actually gives a primary alcohol, and reduction of a ketone gives a secondary alcohol, not a tertiary one.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-105',
    type: 'statement',
    question: 'Statement I: Reaction of a Grignard reagent with formaldehyde gives a primary alcohol.\nStatement II: Reaction of a Grignard reagent with a ketone gives a tertiary alcohol.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the outcome of Grignard reagent reactions with formaldehyde and ketones, respectively.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-106',
    type: 'statement',
    question: 'Statement I: The Dow\'s process prepares phenol from a haloarene via fusion with NaOH.\nStatement II: The cumene process prepares phenol via cumene hydroperoxide, also giving acetone as a by-product.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe these two important industrial methods for producing phenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-107',
    type: 'statement',
    question: 'Statement I: Phenol can be prepared by hydrolysis of a diazonium salt.\nStatement II: Phenol can be prepared by fusion of sodium benzenesulphonate with NaOH.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe additional standard methods for preparing phenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-108',
    type: 'statement',
    question: 'Statement I: Alcohols generally have lower boiling points than alkanes of similar molecular mass.\nStatement II: This is because alcohols cannot form hydrogen bonds with each other.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — alcohols actually have higher boiling points than comparable alkanes precisely because they can form hydrogen bonds, which alkanes cannot.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-109',
    type: 'statement',
    question: 'Statement I: The Lucas reagent consists of anhydrous ZnCl2 dissolved in concentrated HCl.\nStatement II: Tertiary alcohols react with the Lucas reagent much more slowly than primary alcohols.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — tertiary alcohols actually react much faster (often immediately) compared to primary alcohols, which react very slowly.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-110',
    type: 'statement',
    question: 'Statement I: Dehydration of alcohols follows the ease order tertiary > secondary > primary.\nStatement II: This order parallels the relative stability of the carbocation intermediate formed during dehydration.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the ease of dehydration and its underlying mechanistic basis.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-111',
    type: 'statement',
    question: 'Statement I: PCC is a strong oxidising agent used to oxidise a primary alcohol all the way to a carboxylic acid.\nStatement II: Acidified potassium dichromate under reflux can oxidise a primary alcohol to a carboxylic acid.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — PCC is a mild oxidant that stops oxidation at the aldehyde stage. Statement II correctly describes a strong oxidant capable of taking a primary alcohol all the way to a carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-112',
    type: 'statement',
    question: 'Statement I: Tertiary alcohols readily undergo oxidation to ketones under mild conditions.\nStatement II: Secondary alcohols are oxidised to ketones under mild oxidation conditions.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — tertiary alcohols resist oxidation under mild/normal conditions, since they lack a hydrogen on the hydroxyl-bearing carbon. Statement II correctly describes the oxidation of secondary alcohols to ketones.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-113',
    type: 'statement',
    question: 'Statement I: Phenol is more acidic than a simple aliphatic alcohol.\nStatement II: Phenol is more acidic than carbonic acid.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — phenol is actually a weaker acid than carbonic acid, which is why it does not react appreciably with sodium bicarbonate.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-114',
    type: 'statement',
    question: 'Statement I: Electron-withdrawing substituents on the phenol ring generally increase acidity.\nStatement II: Electron-donating substituents on the phenol ring generally increase acidity as well.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — electron-donating substituents actually decrease acidity, not increase it, by destabilising the phenoxide ion.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-115',
    type: 'statement',
    question: 'Statement I: The Kolbe reaction converts sodium phenoxide, via reaction with CO2 and subsequent acidification, into salicylic acid.\nStatement II: The Reimer-Tiemann reaction converts phenol, via reaction with chloroform and base, into salicylaldehyde.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe these two important named reactions of phenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-116',
    type: 'statement',
    question: 'Statement I: The dichlorocarbene intermediate is central to the mechanism of the Reimer-Tiemann reaction.\nStatement II: Dichlorocarbene is generated by treating chloroform with a strong base.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the generation and role of dichlorocarbene in the Reimer-Tiemann reaction.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-117',
    type: 'statement',
    question: 'Statement I: The -OH group of phenol is a deactivating and meta-directing group in electrophilic aromatic substitution.\nStatement II: Nitration of phenol with dilute nitric acid gives predominantly ortho- and para-nitrophenol.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the -OH group is actually a strongly activating and ortho/para-directing group, not deactivating or meta-directing. Statement II correctly describes the outcome of phenol nitration.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-118',
    type: 'statement',
    question: 'Statement I: ortho-Nitrophenol shows intramolecular hydrogen bonding.\nStatement II: para-Nitrophenol shows intermolecular hydrogen bonding, contributing to its lower volatility compared to the ortho isomer.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the differing hydrogen bonding patterns of the ortho and para nitrophenol isomers.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-119',
    type: 'statement',
    question: 'Statement I: Phenol reacts with bromine water only in the presence of a Lewis acid catalyst, similar to benzene.\nStatement II: Phenol reacts readily with bromine water without any catalyst, giving 2,4,6-tribromophenol.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — unlike benzene, phenol does not require a catalyst for bromination due to strong ring activation. Statement II correctly describes this readily occurring reaction.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-120',
    type: 'statement',
    question: 'Statement I: The Williamson synthesis is best carried out using a primary or methyl alkyl halide to avoid competing elimination.\nStatement II: The Williamson synthesis proceeds via an SN2 mechanism.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe key practical and mechanistic features of the Williamson ether synthesis.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-121',
    type: 'statement',
    question: 'Statement I: Ethers are generally very reactive compounds, readily undergoing numerous chemical transformations.\nStatement II: Ethers can be cleaved by strong acids such as HI, especially with heating or excess reagent.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — ethers are generally quite unreactive (inert) compounds. Statement II correctly describes one of the few reactions ethers do undergo.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-122',
    type: 'statement',
    question: 'Statement I: Cleavage of anisole with excess HI gives phenol and methyl iodide.\nStatement II: This occurs because the alkyl-oxygen bond is weaker than the resonance-stabilised aryl-oxygen bond.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the outcome and underlying reason for the selective cleavage observed in this reaction.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-123',
    type: 'statement',
    question: 'Statement I: Cleavage of ethers with primary alkyl groups by HI generally proceeds via an SN1 mechanism.\nStatement II: Cleavage of ethers with tertiary alkyl groups by HI generally proceeds via an SN1 mechanism.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — primary alkyl group cleavage generally proceeds via SN2, not SN1, since primary carbocations are unstable. Statement II correctly describes the SN1 pathway favoured for tertiary alkyl groups.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-124',
    type: 'statement',
    question: 'Statement I: The alkoxy group in anisole is a deactivating group for electrophilic aromatic substitution.\nStatement II: The alkoxy group in anisole directs incoming electrophiles to the ortho and para positions.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the alkoxy group is actually an activating group, not deactivating. Statement II correctly describes its ortho/para-directing effect.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-125',
    type: 'statement',
    question: 'Statement I: Cold, dilute alkaline KMnO4 can convert an alkene into a vicinal diol.\nStatement II: Periodic acid can selectively cleave the C-C bond of a vicinal diol.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe standard methods for the preparation and oxidative cleavage of vicinal diols.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-126',
    type: 'statement',
    question: 'Statement I: As the alkyl chain of an alcohol becomes longer, its water solubility generally increases.\nStatement II: Lower molecular mass alcohols such as methanol and ethanol are miscible with water in all proportions.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — water solubility of alcohols generally decreases, not increases, with a longer alkyl chain. Statement II correctly describes the high water miscibility of the smallest alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-127',
    type: 'statement',
    question: 'Statement I: Acetylation of phenol using acetic anhydride gives phenyl acetate.\nStatement II: Reduction of phenol with zinc dust gives benzene.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe standard reactions of phenol: esterification of the -OH group and reductive removal of the -OH group, respectively.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-128',
    type: 'statement',
    question: 'Statement I: Alcohols react with sodium metal to release hydrogen gas and form a sodium alkoxide.\nStatement II: This reaction demonstrates the weakly acidic character of the -OH group in alcohols.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the reaction of alcohols with sodium metal and its significance in illustrating the mild acidity of the -OH group.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-129',
    type: 'statement',
    question: 'Statement I: Boiling points of primary, secondary, and tertiary alcohols of similar molecular mass typically follow the order primary > secondary > tertiary.\nStatement II: This trend arises due to decreasing surface area available for van der Waals interactions with increasing branching.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the general boiling point trend among isomeric alcohols and its underlying structural explanation.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-130',
    type: 'statement',
    question: 'Statement I: The chemistry of alcohols, phenols, and ethers is unrelated to the properties of the oxygen-containing functional group.\nStatement II: Reactivity patterns such as acidity, oxidation, and substitution/cleavage in these compounds all trace back to the hydroxyl or ether oxygen functional group.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect and directly contradicted by the well-established structure-reactivity relationships in this chapter. Statement II correctly summarises this central theme.',
    difficulty: 'medium'
  },

  // ==================== HOW-MANY (20) ====================
  {
    id: 'alcohol-131',
    type: 'how-many',
    question: 'How many of the following statements about classification of alcohols are correct?\n1. Monohydric alcohols have one -OH group.\n2. Dihydric alcohols have two -OH groups.\n3. Primary, secondary, and tertiary classification is based on the carbon bearing the -OH group.\n4. Allylic alcohols have -OH directly on the double-bond carbon.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — allylic alcohols have the -OH on the sp3 carbon adjacent to the double bond, not directly on the double-bond carbon (that describes vinylic alcohols).',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-132',
    type: 'how-many',
    question: 'How many of the following statements about the preparation of alcohols are correct?\n1. Acid-catalysed hydration of alkenes gives the Markovnikov product.\n2. Hydroboration-oxidation gives the anti-Markovnikov product.\n3. Reduction of an aldehyde gives a primary alcohol.\n4. Reduction of a ketone gives a tertiary alcohol.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — reduction of a ketone gives a secondary alcohol, not a tertiary alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-133',
    type: 'how-many',
    question: 'How many of the following statements about Grignard reagent reactions are correct?\n1. Reaction with formaldehyde gives a primary alcohol.\n2. Reaction with other aldehydes (not formaldehyde) gives a secondary alcohol.\n3. Reaction with a ketone gives a tertiary alcohol.\n4. Reaction with any carbonyl compound always gives the same type of alcohol, regardless of substitution.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the type of alcohol formed depends specifically on the substitution pattern of the carbonyl compound used.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-134',
    type: 'how-many',
    question: 'How many of the following statements about industrial preparation of phenol are correct?\n1. The Dow\'s process uses a haloarene and NaOH fusion.\n2. The cumene process converts cumene to cumene hydroperoxide, then to phenol and acetone.\n3. Phenol can be prepared from a diazonium salt by hydrolysis.\n4. Phenol can be prepared directly from benzene by simple oxidation with air, with no other steps required.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — phenol is not prepared by simple direct oxidation of benzene with air; the cumene process requires the intermediate hydroperoxide step and starts from cumene, not benzene directly.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-135',
    type: 'how-many',
    question: 'How many of the following statements about physical properties of alcohols, phenols, and ethers are correct?\n1. Alcohols have higher boiling points than alkanes of similar molecular mass.\n2. Ethers have lower boiling points than isomeric alcohols.\n3. Alcohol solubility in water decreases with increasing alkyl chain length.\n4. Ethers cannot act as hydrogen bond acceptors with water under any circumstances.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — ethers can indeed act as weak hydrogen bond acceptors with water, despite lacking an O-H group themselves.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-136',
    type: 'how-many',
    question: 'How many of the following statements about the Lucas test are correct?\n1. The Lucas reagent is a mixture of anhydrous ZnCl2 and concentrated HCl.\n2. Tertiary alcohols show immediate turbidity.\n3. Secondary alcohols typically show turbidity within about 5-10 minutes.\n4. Primary alcohols typically show no visible reaction at room temperature.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe the standard observations and reagent composition of the Lucas test for distinguishing alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-137',
    type: 'how-many',
    question: 'How many of the following statements about oxidation of alcohols are correct?\n1. Primary alcohols can be oxidised fully to carboxylic acids with strong oxidants.\n2. PCC selectively stops oxidation of a primary alcohol at the aldehyde stage.\n3. Secondary alcohols are oxidised to ketones.\n4. Tertiary alcohols are easily oxidised to ketones under mild conditions.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — tertiary alcohols resist oxidation under mild conditions, since they lack a hydrogen on the hydroxyl-bearing carbon.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-138',
    type: 'how-many',
    question: 'How many of the following statements about acidity of phenols are correct?\n1. Phenol is more acidic than a simple aliphatic alcohol.\n2. Phenol is a stronger acid than carbonic acid.\n3. Electron-withdrawing groups on the ring generally increase phenol acidity.\n4. Electron-donating groups on the ring generally decrease phenol acidity.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 3, and 4 are correct. Statement 2 is false — phenol is actually a weaker acid than carbonic acid.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-139',
    type: 'how-many',
    question: 'How many of the following named reactions of phenol are correctly matched with their product?\n1. Kolbe reaction — salicylic acid\n2. Reimer-Tiemann reaction — salicylaldehyde\n3. Acetylation with acetic anhydride — phenyl acetate\n4. Reduction with zinc dust — cyclohexanol',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correctly matched. Statement 4 is false — reduction of phenol with zinc dust gives benzene, not cyclohexanol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-140',
    type: 'how-many',
    question: 'How many of the following statements about electrophilic substitution reactions of phenol are correct?\n1. The -OH group is activating and ortho/para-directing.\n2. Nitration with dilute HNO3 gives predominantly ortho- and para-nitrophenol.\n3. Bromination with bromine water requires a Lewis acid catalyst, similar to benzene.\n4. ortho-Nitrophenol shows intramolecular hydrogen bonding, making it more steam-volatile than the para isomer.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — phenol reacts readily with bromine water without needing a catalyst, unlike benzene.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-141',
    type: 'how-many',
    question: 'How many of the following statements about the Williamson ether synthesis are correct?\n1. It involves an alkyl halide reacting with a metal alkoxide.\n2. It proceeds via an SN2 mechanism.\n3. Bulky/tertiary alkyl halides are preferred for preparing unsymmetrical ethers to maximise yield.\n4. Primary or methyl alkyl halides are generally preferred to minimise competing elimination.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — bulky/tertiary alkyl halides are actually avoided in this synthesis, since they favour elimination over substitution.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-142',
    type: 'how-many',
    question: 'How many of the following statements about cleavage of ethers are correct?\n1. Ethers can be cleaved by strong acids such as HI, especially with heating.\n2. Cleavage of ethers with primary/methyl alkyl groups generally proceeds via SN2.\n3. Cleavage of ethers with tertiary/benzylic/allylic alkyl groups generally proceeds via SN1.\n4. Cleavage of anisole with excess HI gives iodobenzene and methanol.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — cleavage of anisole with excess HI actually gives phenol and methyl iodide, since the aryl-oxygen bond is stronger and resists cleavage.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-143',
    type: 'how-many',
    question: 'How many of the following statements about bond angles in alcohols and ethers are correct?\n1. The C-O-H bond angle in alcohols is slightly greater than the tetrahedral angle.\n2. The C-O-C bond angle in ethers is greater than the C-O-H bond angle in alcohols.\n3. This trend arises due to increasing steric repulsion from bulkier groups attached to oxygen.\n4. Bond angles at the ether/alcohol oxygen are completely unrelated to the size of attached groups.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts the established relationship between bond angle and steric bulk of attached groups.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-144',
    type: 'how-many',
    question: 'How many of the following statements about dehydration and elimination reactions of alcohols are correct?\n1. Dehydration ease follows the order tertiary > secondary > primary.\n2. Dehydration typically follows Zaitsev\'s rule, favouring the more substituted alkene.\n3. Dehydration of alcohols always proceeds via an SN2-type mechanism.\n4. Dehydration mechanism generally parallels carbocation stability.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — acid-catalysed alcohol dehydration typically proceeds via an E1 (carbocation-based) mechanism, not SN2.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-145',
    type: 'how-many',
    question: 'How many of the following statements about vicinal diols are correct?\n1. They can be prepared from alkenes using cold, dilute alkaline KMnO4.\n2. Periodic acid can cleave the C-C bond between the two hydroxyl-bearing carbons.\n3. Oxidative cleavage of a vicinal diol gives carbonyl compounds.\n4. Vicinal diols cannot be cleaved by any oxidising agent.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts the well-established periodic acid cleavage reaction of vicinal diols.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-146',
    type: 'how-many',
    question: 'How many of the following statements about substituent effects on phenol acidity are correct?\n1. para-Nitrophenol is more acidic than phenol.\n2. para-Cresol is more acidic than phenol.\n3. Electron-withdrawing groups stabilise the phenoxide ion.\n4. Electron-donating groups destabilise the phenoxide ion.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 3, and 4 are correct. Statement 2 is false — para-cresol is actually less acidic than phenol, since the electron-donating methyl group destabilises the phenoxide ion.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-147',
    type: 'how-many',
    question: 'How many of the following statements about esterification and related reactions are correct?\n1. Fischer esterification is a reversible, acid-catalysed reaction between an alcohol and a carboxylic acid.\n2. Acetylation of phenol with acetic anhydride gives phenyl acetate.\n3. Alcohols react with sodium metal to release hydrogen gas.\n4. Esters, once formed from Fischer esterification, can never be hydrolysed back to the alcohol and acid.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — esters can indeed be hydrolysed back to the alcohol and acid, which is exactly why Fischer esterification is described as reversible.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-148',
    type: 'how-many',
    question: 'How many of the following statements about industrial and laboratory preparation methods are correct?\n1. The Williamson synthesis is a general method for preparing ethers.\n2. Intermolecular dehydration of primary alcohols at controlled lower temperature gives symmetrical ethers.\n3. The Dow\'s process and cumene process are both methods for preparing phenol.\n4. The Kolbe reaction and Reimer-Tiemann reaction are both methods for preparing ethers.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the Kolbe and Reimer-Tiemann reactions are methods for functionalising phenol (giving salicylic acid and salicylaldehyde respectively), not for preparing ethers.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-149',
    type: 'how-many',
    question: 'How many of the following statements about the alkoxy group in aryl ethers (such as anisole) are correct?\n1. It behaves similarly to the -OH group of phenol in electrophilic aromatic substitution.\n2. It is an activating and ortho/para-directing group.\n3. It donates electron density into the ring via resonance.\n4. It deactivates the ring and directs substitution to the meta position.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts the well-established activating, ortho/para-directing behaviour of the alkoxy group.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-150',
    type: 'how-many',
    question: 'How many of the following statements correctly summarise key themes of the alcohols, phenols, and ethers chapter?\n1. Classification of alcohols is based on the number of -OH groups and the nature of the hydroxyl-bearing carbon.\n2. Preparation methods include hydration/hydroboration of alkenes, reduction of carbonyls, Grignard reactions, and (for phenols) the Dow\'s and cumene processes.\n3. Reactivity of alcohols (dehydration, oxidation, esterification) and phenols (acidity, electrophilic substitution, Kolbe/Reimer-Tiemann reactions) both trace back to the hydroxyl functional group.\n4. Ethers are generally reactive and undergo frequent spontaneous decomposition at room temperature.\n5. Cleavage of unsymmetrical ethers by HI depends on whether the alkyl group favours an SN1 or SN2 pathway.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, 3, and 5 correctly summarise major themes of the chapter. Statement 4 is false — ethers are generally quite unreactive (inert) and stable at room temperature, not prone to spontaneous decomposition.',
    difficulty: 'medium'
  }
];
=======
export const ALCOHOLS_PHENOLS_ETHERS = [
  // ==================== MCQ (70) ====================
  {
    id: 'alcohol-1',
    type: 'mcq',
    question: 'Alcohols containing one, two, and three hydroxyl (-OH) groups are respectively classified as',
    options: [
      'monohydric, dihydric, and trihydric alcohols',
      'primary, secondary, and tertiary alcohols',
      'allylic, benzylic, and vinylic alcohols',
      'saturated, unsaturated, and aromatic alcohols'
    ],
    correctIndex: 0,
    explanation: 'Alcohols are classified as monohydric, dihydric, or trihydric based on whether they contain one, two, or three hydroxyl groups, respectively.',
    difficulty: 'easy'
  },
  {
    id: 'alcohol-2',
    type: 'mcq',
    question: 'Alcohols are classified as primary, secondary, or tertiary based on',
    options: [
      'the number of -OH groups present',
      'the nature of the carbon atom (primary, secondary, or tertiary) to which the -OH group is attached',
      'the molecular mass of the alcohol',
      'the boiling point of the alcohol'
    ],
    correctIndex: 1,
    explanation: 'This classification depends on whether the carbon bearing the -OH group is attached to one, two, or three other carbon atoms.',
    difficulty: 'easy'
  },
  {
    id: 'alcohol-3',
    type: 'mcq',
    question: 'An allylic alcohol is one in which the -OH group is attached to',
    options: [
      'an sp3 carbon directly attached to an aromatic ring',
      'an sp3 carbon atom next to (allylic to) a carbon-carbon double bond',
      'an sp2 carbon that is part of a carbon-carbon double bond',
      'a carbon atom bonded to a halogen'
    ],
    correctIndex: 1,
    explanation: 'An allylic alcohol has the hydroxyl group on an sp3 carbon adjacent to a C=C double bond.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-4',
    type: 'mcq',
    question: 'A benzylic alcohol is one in which the -OH group is attached to',
    options: [
      'an sp3 carbon atom directly attached to an aromatic ring',
      'a carbon atom that is part of the aromatic ring itself',
      'an sp3 carbon adjacent to a carbon-carbon double bond',
      'a carbon atom bonded to two aromatic rings only'
    ],
    correctIndex: 0,
    explanation: 'A benzylic alcohol has the hydroxyl group on an sp3 carbon that is directly bonded to (but not part of) an aromatic ring.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-5',
    type: 'mcq',
    question: 'In alcohols, the oxygen atom of the -OH group is',
    options: ['sp hybridised', 'sp2 hybridised', 'sp3 hybridised', 'not hybridised at all'],
    correctIndex: 2,
    explanation: 'The oxygen atom in an alcohol is sp3 hybridised, with two hybrid orbitals forming sigma bonds (to carbon and hydrogen) and two holding lone pairs.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-6',
    type: 'mcq',
    question: 'The C-O-H bond angle in a simple alcohol like methanol is generally found to be',
    options: [
      'exactly 90°',
      'slightly greater than the ideal tetrahedral angle, due to repulsion between the bulky alkyl group and lone pairs on oxygen',
      'exactly 180°, since alcohols have a linear geometry at oxygen',
      'exactly equal to the bond angle in water'
    ],
    correctIndex: 1,
    explanation: 'The C-O-H bond angle in alcohols is slightly larger than the ideal tetrahedral angle (109.5°) because the bulkier alkyl group causes greater repulsion than a hydrogen atom would, as in water.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-7',
    type: 'mcq',
    question: 'The C-O-C bond angle in a simple ether like dimethyl ether is generally',
    options: [
      'smaller than the C-O-H angle in alcohols',
      'larger than the C-O-H angle in alcohols, due to greater steric repulsion between the two bulky alkyl groups',
      'exactly the same as the bond angle in water',
      'exactly 90°'
    ],
    correctIndex: 1,
    explanation: 'Since ethers have two alkyl groups attached to oxygen (compared to one alkyl group and one hydrogen in alcohols), the greater steric repulsion results in a larger C-O-C bond angle than the C-O-H angle in alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-8',
    type: 'mcq',
    question: 'Acid-catalysed hydration of an alkene to form an alcohol generally follows',
    options: [
      'anti-Markovnikov addition',
      'Markovnikov\'s rule, with the -OH group adding to the more substituted carbon',
      'no particular regioselectivity',
      'Zaitsev\'s rule'
    ],
    correctIndex: 1,
    explanation: 'Acid-catalysed hydration proceeds via a carbocation intermediate, so it follows Markovnikov\'s rule, with the hydroxyl group ending up on the more substituted carbon (which formed the more stable carbocation).',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-9',
    type: 'mcq',
    question: 'The hydroboration-oxidation method for converting an alkene to an alcohol gives an overall result that is',
    options: [
      'Markovnikov addition of water, similar to acid-catalysed hydration',
      'anti-Markovnikov addition of water, with syn (same-face) stereochemistry',
      'formation of an alkyl halide, not an alcohol',
      'formation of an ether, not an alcohol'
    ],
    correctIndex: 1,
    explanation: 'Hydroboration-oxidation gives an anti-Markovnikov alcohol product, with the boron (and hence eventually the -OH group) adding to the less substituted carbon, via a concerted syn-addition mechanism.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-10',
    type: 'mcq',
    question: 'Reduction of an aldehyde using a reagent such as NaBH4 or LiAlH4 gives',
    options: ['a secondary alcohol', 'a primary alcohol', 'a tertiary alcohol', 'a carboxylic acid'],
    correctIndex: 1,
    explanation: 'Reduction of an aldehyde adds hydrogen across the carbonyl group, converting it into a primary alcohol.',
    difficulty: 'easy'
  },
  {
    id: 'alcohol-11',
    type: 'mcq',
    question: 'Reduction of a ketone using a reagent such as NaBH4 or LiAlH4 gives',
    options: ['a primary alcohol', 'a secondary alcohol', 'a tertiary alcohol', 'a carboxylic acid'],
    correctIndex: 1,
    explanation: 'Reduction of a ketone converts the carbonyl group into a secondary alcohol, since the carbonyl carbon in a ketone is already attached to two other carbon groups.',
    difficulty: 'easy'
  },
  {
    id: 'alcohol-12',
    type: 'mcq',
    question: 'Reaction of a Grignard reagent with formaldehyde (HCHO), followed by acidic hydrolysis, gives',
    options: ['a secondary alcohol', 'a primary alcohol', 'a tertiary alcohol', 'a ketone'],
    correctIndex: 1,
    explanation: 'Since formaldehyde has no alkyl substituents on the carbonyl carbon, reaction with a Grignard reagent gives a primary alcohol upon hydrolysis.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-13',
    type: 'mcq',
    question: 'Reaction of a Grignard reagent with a ketone, followed by acidic hydrolysis, gives',
    options: ['a primary alcohol', 'a secondary alcohol', 'a tertiary alcohol', 'an aldehyde'],
    correctIndex: 2,
    explanation: 'Since a ketone carbonyl carbon already bears two alkyl/aryl groups, addition of a Grignard reagent followed by hydrolysis gives a tertiary alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-14',
    type: 'mcq',
    question: 'The industrial Dow\'s process for preparing phenol involves',
    options: [
      'fusion of a haloarene with NaOH at high temperature and pressure, followed by acidification',
      'direct oxidation of benzene with air',
      'the cumene hydroperoxide process only',
      'reduction of nitrobenzene'
    ],
    correctIndex: 0,
    explanation: 'The Dow\'s process converts a haloarene (such as chlorobenzene) into phenol by fusion with sodium hydroxide under high temperature and pressure, followed by acidification.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-15',
    type: 'mcq',
    question: 'The industrially important cumene process for phenol production starts from cumene (isopropylbenzene), which is first oxidised by air to form',
    options: ['cumene hydroperoxide', 'benzene sulphonic acid', 'chlorobenzene', 'benzaldehyde'],
    correctIndex: 0,
    explanation: 'In the cumene process, cumene is first oxidised by atmospheric oxygen to form cumene hydroperoxide, which is then treated with dilute acid to give phenol and acetone.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-16',
    type: 'mcq',
    question: 'In the cumene process, treatment of cumene hydroperoxide with dilute acid gives phenol along with which valuable by-product?',
    options: ['acetone', 'formaldehyde', 'acetic acid', 'ethanol'],
    correctIndex: 0,
    explanation: 'Acid-catalysed rearrangement and cleavage of cumene hydroperoxide produces both phenol and acetone as valuable products.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-17',
    type: 'mcq',
    question: 'Phenol can be prepared by fusing sodium benzenesulphonate with',
    options: ['sodium chloride', 'sodium hydroxide (NaOH) at high temperature', 'sulphuric acid', 'sodium metal'],
    correctIndex: 1,
    explanation: 'Fusion of sodium benzenesulphonate with NaOH at high temperature, followed by acidification, gives phenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-18',
    type: 'mcq',
    question: 'Phenol can also be prepared by warming an aqueous solution of a benzene diazonium salt with',
    options: ['water, causing hydrolysis to give phenol and nitrogen gas', 'sodium metal', 'concentrated hydrochloric acid only', 'no reaction occurs under these conditions'],
    correctIndex: 0,
    explanation: 'Warming an aqueous solution of a benzenediazonium salt causes hydrolysis, replacing the diazonium group with a hydroxyl group and releasing nitrogen gas, giving phenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-19',
    type: 'mcq',
    question: 'Alcohols generally have higher boiling points than alkanes or haloalkanes of comparable molecular mass mainly because',
    options: [
      'alcohols are more polar but cannot form hydrogen bonds',
      'alcohols can form intermolecular hydrogen bonds due to the -OH group',
      'alcohols have lower molecular mass than corresponding alkanes',
      'alcohols exist only as gases at room temperature'
    ],
    correctIndex: 1,
    explanation: 'The ability of alcohols to form intermolecular hydrogen bonds via their -OH group significantly raises their boiling points compared to non-hydrogen-bonding compounds of similar molecular mass.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-20',
    type: 'mcq',
    question: 'Ethers generally have lower boiling points than isomeric alcohols mainly because',
    options: [
      'ethers have a much higher molecular mass',
      'ether molecules cannot form hydrogen bonds with each other, lacking an O-H group',
      'ethers are always gases at room temperature',
      'ethers have stronger covalent bonds than alcohols'
    ],
    correctIndex: 1,
    explanation: 'Since ethers lack an -OH group, they cannot hydrogen bond with each other, resulting in weaker intermolecular forces and lower boiling points than isomeric alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-21',
    type: 'mcq',
    question: 'As the size of the hydrocarbon (alkyl) part of an alcohol increases, its solubility in water generally',
    options: [
      'increases steadily',
      'decreases, since the hydrophobic (non-polar) character becomes more dominant relative to the single hydrogen-bonding -OH group',
      'remains completely unaffected',
      'becomes completely independent of molecular structure'
    ],
    correctIndex: 1,
    explanation: 'As the non-polar hydrocarbon portion of an alcohol grows larger relative to the single polar -OH group, the overall hydrophobic character increases, decreasing water solubility.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-22',
    type: 'mcq',
    question: 'The Lucas test, used to distinguish primary, secondary, and tertiary alcohols, uses a reagent consisting of',
    options: [
      'dilute sulphuric acid',
      'anhydrous zinc chloride dissolved in concentrated hydrochloric acid',
      'aqueous sodium hydroxide',
      'potassium permanganate solution'
    ],
    correctIndex: 1,
    explanation: 'The Lucas reagent is a mixture of anhydrous ZnCl2 and concentrated HCl, used to distinguish alcohols based on the rate at which they react to form an insoluble alkyl chloride (observed as turbidity).',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-23',
    type: 'mcq',
    question: 'In the Lucas test, a tertiary alcohol generally shows',
    options: [
      'no reaction at all, even after heating',
      'immediate turbidity (cloudiness), due to rapid formation of the relatively stable tertiary carbocation',
      'turbidity only after 5-10 minutes',
      'a colour change, but no turbidity'
    ],
    correctIndex: 1,
    explanation: 'Tertiary alcohols react almost immediately with the Lucas reagent at room temperature, since they readily form a relatively stable tertiary carbocation via an SN1-type mechanism, producing immediate turbidity.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-24',
    type: 'mcq',
    question: 'In the Lucas test, a primary alcohol generally shows',
    options: [
      'no visible reaction at room temperature, requiring heating to react',
      'immediate turbidity',
      'turbidity only after 5-10 minutes at room temperature',
      'an instantaneous colour change to green'
    ],
    correctIndex: 0,
    explanation: 'Primary alcohols react very slowly with the Lucas reagent and typically show no visible turbidity at room temperature, requiring heating for the reaction to proceed.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-25',
    type: 'mcq',
    question: 'Dehydration of alcohols to form alkenes, typically using concentrated sulphuric or phosphoric acid, generally follows the order of ease',
    options: [
      'primary > secondary > tertiary',
      'tertiary > secondary > primary, paralleling the stability of the intermediate carbocation',
      'all alcohols dehydrate equally easily',
      'dehydration ease is unrelated to alcohol classification'
    ],
    correctIndex: 1,
    explanation: 'Since acid-catalysed dehydration typically proceeds via an E1 mechanism through a carbocation intermediate, tertiary alcohols dehydrate most easily, followed by secondary, then primary alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-26',
    type: 'mcq',
    question: 'Oxidation of a primary alcohol using a strong oxidising agent such as acidified potassium dichromate generally gives, upon complete oxidation,',
    options: ['a ketone', 'an aldehyde only, which cannot be oxidised further', 'a carboxylic acid, via an intermediate aldehyde', 'no reaction occurs'],
    correctIndex: 2,
    explanation: 'Strong oxidising agents oxidise a primary alcohol first to an aldehyde and then further to a carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-27',
    type: 'mcq',
    question: 'Oxidation of a primary alcohol can be selectively stopped at the aldehyde stage by using a milder oxidising agent such as',
    options: [
      'acidified potassium permanganate',
      'pyridinium chlorochromate (PCC)',
      'concentrated nitric acid',
      'acidified potassium dichromate under reflux'
    ],
    correctIndex: 1,
    explanation: 'PCC (pyridinium chlorochromate) is a mild oxidising agent that selectively oxidises a primary alcohol only to the aldehyde stage, without further oxidation to the carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-28',
    type: 'mcq',
    question: 'Oxidation of a secondary alcohol using an oxidising agent such as acidified potassium dichromate generally gives',
    options: ['an aldehyde', 'a ketone', 'a carboxylic acid', 'no reaction occurs'],
    correctIndex: 1,
    explanation: 'Secondary alcohols are oxidised to ketones, since the resulting carbonyl carbon still bears two other carbon substituents and cannot be oxidised further under these conditions.',
    difficulty: 'easy'
  },
  {
    id: 'alcohol-29',
    type: 'mcq',
    question: 'Tertiary alcohols generally resist oxidation by common oxidising agents under normal conditions mainly because',
    options: [
      'they have too many hydrogen atoms on the carbon bearing the -OH group',
      'the carbon bearing the -OH group has no hydrogen atom attached to it, so oxidation without breaking a C-C bond is not possible under mild conditions',
      'tertiary alcohols do not actually exist as stable compounds',
      'tertiary alcohols are always insoluble in the oxidising medium'
    ],
    correctIndex: 1,
    explanation: 'Oxidation of an alcohol to a carbonyl compound normally requires removal of a hydrogen from the carbon bearing the -OH group; since a tertiary alcohol has no such hydrogen, it resists oxidation under normal, mild conditions.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-30',
    type: 'mcq',
    question: 'The reaction of an alcohol with a carboxylic acid in the presence of an acid catalyst, forming an ester and water, is known as',
    options: ['Wurtz reaction', 'Fischer esterification', 'Kolbe reaction', 'Cannizzaro reaction'],
    correctIndex: 1,
    explanation: 'Fischer esterification is the acid-catalysed, reversible reaction between an alcohol and a carboxylic acid to form an ester and water.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-31',
    type: 'mcq',
    question: 'Reaction of an alcohol with sodium metal produces',
    options: [
      'sodium alkoxide and hydrogen gas',
      'sodium alkoxide and oxygen gas',
      'an alkyl halide and sodium hydroxide',
      'no reaction occurs, since sodium is unreactive towards alcohols'
    ],
    correctIndex: 0,
    explanation: 'Alcohols react with sodium metal, releasing hydrogen gas and forming the corresponding sodium alkoxide.',
    difficulty: 'easy'
  },
  {
    id: 'alcohol-32',
    type: 'mcq',
    question: 'Phenols are generally more acidic than alcohols mainly because',
    options: [
      'phenols have a much higher molecular mass',
      'the phenoxide ion formed after loss of a proton is stabilised by resonance delocalisation of the negative charge into the aromatic ring',
      'alcohols cannot lose a proton at all under any conditions',
      'phenols contain a stronger O-H bond than alcohols'
    ],
    correctIndex: 1,
    explanation: 'Resonance stabilisation of the phenoxide ion, by delocalising the negative charge into the aromatic ring, makes phenol a stronger acid than a simple alcohol, whose corresponding alkoxide ion has no such stabilisation.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-33',
    type: 'mcq',
    question: 'Despite being more acidic than alcohols, phenol is generally',
    options: [
      'a stronger acid than carbonic acid, and therefore reacts readily with NaHCO3 to liberate CO2',
      'a weaker acid than carbonic acid, and therefore does NOT react appreciably with sodium bicarbonate (NaHCO3)',
      'completely non-acidic',
      'a much stronger acid than any carboxylic acid'
    ],
    correctIndex: 1,
    explanation: 'Phenol is a weaker acid than carbonic acid, so unlike carboxylic acids, it does not react appreciably with sodium bicarbonate to release carbon dioxide gas.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-34',
    type: 'mcq',
    question: 'The presence of an electron-withdrawing group, such as a nitro group, on the aromatic ring of a phenol generally',
    options: [
      'decreases the acidity of the phenol',
      'increases the acidity of the phenol, by further stabilising the phenoxide ion through additional resonance/inductive effects',
      'has no effect whatsoever on acidity',
      'converts the phenol into a base'
    ],
    correctIndex: 1,
    explanation: 'Electron-withdrawing groups, especially at ortho or para positions, stabilise the negative charge on the phenoxide ion through resonance and inductive effects, increasing the acidity of the phenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-35',
    type: 'mcq',
    question: 'The presence of an electron-donating group, such as a methyl group, on the aromatic ring of a phenol generally',
    options: [
      'increases the acidity of the phenol',
      'decreases the acidity of the phenol, by destabilising the phenoxide ion',
      'has no effect whatsoever on acidity',
      'converts phenol into an alcohol'
    ],
    correctIndex: 1,
    explanation: 'Electron-donating groups intensify the negative charge on the phenoxide ion, destabilising it and thereby decreasing the acidity of the phenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-36',
    type: 'mcq',
    question: 'The Kolbe reaction converts sodium phenoxide, when treated with carbon dioxide under pressure followed by acidification, into',
    options: ['benzoic acid', 'salicylic acid (ortho-hydroxybenzoic acid)', 'salicylaldehyde', 'phenol itself, unchanged'],
    correctIndex: 1,
    explanation: 'In the Kolbe reaction, sodium phenoxide reacts with carbon dioxide under pressure, and subsequent acidification gives salicylic acid (2-hydroxybenzoic acid).',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-37',
    type: 'mcq',
    question: 'The Reimer-Tiemann reaction converts phenol, when treated with chloroform and aqueous sodium hydroxide, into',
    options: ['salicylic acid', 'salicylaldehyde (ortho-hydroxybenzaldehyde), via a dichlorocarbene intermediate', 'benzaldehyde', 'phenyl acetate'],
    correctIndex: 1,
    explanation: 'The Reimer-Tiemann reaction generates a dichlorocarbene intermediate from chloroform and base, which reacts with phenol to ultimately give salicylaldehyde after hydrolysis.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-38',
    type: 'mcq',
    question: 'The reactive electrophilic species generated in the Reimer-Tiemann reaction, from chloroform and a strong base, is',
    options: ['a carbanion', 'dichlorocarbene, :CCl2', 'a diazonium ion', 'a phenoxide radical'],
    correctIndex: 1,
    explanation: 'Treatment of chloroform with a strong base generates dichlorocarbene (:CCl2), a highly reactive electrophilic species that is central to the mechanism of the Reimer-Tiemann reaction.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-39',
    type: 'mcq',
    question: 'Acetylation of phenol, using acetic anhydride or acetyl chloride, gives',
    options: [
      'phenyl acetate, via esterification of the -OH group',
      'salicylic acid',
      'anisole',
      'sodium phenoxide'
    ],
    correctIndex: 0,
    explanation: 'Reaction of phenol with acetic anhydride or acetyl chloride esterifies the -OH group, forming phenyl acetate.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-40',
    type: 'mcq',
    question: 'Reduction of phenol using zinc dust (heating phenol with zinc dust) gives',
    options: ['cyclohexanol', 'benzene, via removal of the -OH group', 'benzaldehyde', 'toluene'],
    correctIndex: 1,
    explanation: 'Heating phenol with zinc dust reduces it, removing the hydroxyl group and giving benzene as the product.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-41',
    type: 'mcq',
    question: 'In electrophilic aromatic substitution reactions, the -OH group of phenol acts as',
    options: [
      'a deactivating and meta-directing group',
      'a strongly activating and ortho/para-directing group, due to resonance donation of a lone pair into the ring',
      'a group that has no influence on the ring\'s reactivity at all',
      'a deactivating but ortho/para-directing group'
    ],
    correctIndex: 1,
    explanation: 'The -OH group is a strong activator and ortho/para director, since one of the lone pairs on oxygen delocalises into the ring, increasing electron density especially at the ortho and para positions.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-42',
    type: 'mcq',
    question: 'Nitration of phenol with dilute nitric acid generally gives a mixture of',
    options: [
      'ortho- and meta-nitrophenol',
      'ortho- and para-nitrophenol',
      'meta- and para-nitrophenol only',
      'only para-nitrophenol, exclusively'
    ],
    correctIndex: 1,
    explanation: 'Since -OH is an ortho/para director, nitration of phenol with dilute nitric acid gives a mixture predominantly consisting of ortho- and para-nitrophenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-43',
    type: 'mcq',
    question: 'ortho-Nitrophenol is more volatile (steam-volatile) than para-nitrophenol mainly because',
    options: [
      'ortho-nitrophenol has intramolecular hydrogen bonding, reducing intermolecular association, while para-nitrophenol has intermolecular hydrogen bonding, raising its effective boiling point',
      'ortho-nitrophenol has a much higher molecular mass',
      'para-nitrophenol has no hydrogen bonding at all',
      'ortho-nitrophenol is ionic while para-nitrophenol is covalent'
    ],
    correctIndex: 0,
    explanation: 'In ortho-nitrophenol, intramolecular hydrogen bonding occurs between the adjacent -OH and -NO2 groups, reducing intermolecular association and making it more volatile; para-nitrophenol instead forms intermolecular hydrogen bonds, resulting in a higher effective boiling point and lower volatility.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-44',
    type: 'mcq',
    question: 'Bromination of phenol with bromine water (without any catalyst) readily gives',
    options: [
      'a mixture of mono-brominated products only, similar to benzene',
      '2,4,6-tribromophenol as a white precipitate, due to the highly activating nature of the -OH group',
      'no reaction at all, since phenol is unreactive towards bromine',
      'a meta-substituted bromophenol'
    ],
    correctIndex: 1,
    explanation: 'Because the -OH group strongly activates the aromatic ring, phenol reacts readily with bromine water even without a catalyst, giving 2,4,6-tribromophenol as a white precipitate.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-45',
    type: 'mcq',
    question: 'The Williamson ether synthesis involves reacting an alkyl halide with',
    options: [
      'a sodium or potassium alkoxide, via an SN2 mechanism',
      'a Grignard reagent',
      'sodium metal in dry ether',
      'concentrated sulphuric acid'
    ],
    correctIndex: 0,
    explanation: 'The Williamson synthesis reacts an alkyl halide with a metal alkoxide (or aryloxide) via an SN2 mechanism to form an ether.',
    difficulty: 'easy'
  },
  {
    id: 'alcohol-46',
    type: 'mcq',
    question: 'For preparing an unsymmetrical ether by the Williamson synthesis, it is generally best to use',
    options: [
      'a tertiary alkyl halide with a primary alkoxide, to maximise yield',
      'a primary (or methyl) alkyl halide with the appropriately substituted alkoxide, to minimise competing elimination',
      'either combination gives identical results, since the choice does not matter',
      'only aryl halides can be used in this synthesis'
    ],
    correctIndex: 1,
    explanation: 'Since bulky or tertiary alkyl halides favour elimination (E2) over substitution when reacted with a strongly basic alkoxide, using a primary or methyl alkyl halide minimises this competing side reaction and maximises the ether yield.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-47',
    type: 'mcq',
    question: 'Acid-catalysed intermolecular dehydration of two molecules of a primary alcohol, under controlled (relatively lower) temperature conditions, gives predominantly',
    options: [
      'an alkene',
      'a symmetrical ether',
      'an aldehyde',
      'a carboxylic acid'
    ],
    correctIndex: 1,
    explanation: 'At relatively lower temperatures, acid-catalysed dehydration of two molecules of a primary alcohol proceeds via intermolecular loss of water, favouring formation of a symmetrical ether over the alkene (which requires higher temperature).',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-48',
    type: 'mcq',
    question: 'Ethers are generally considered relatively unreactive (inert) compounds, but they can undergo cleavage of the C-O bond when treated with',
    options: [
      'dilute sodium hydroxide',
      'concentrated hydrogen halide acids (such as HI or HBr), especially with heating or excess reagent',
      'water alone at room temperature',
      'a mild oxidising agent like PCC'
    ],
    correctIndex: 1,
    explanation: 'Despite their general inertness, ethers can be cleaved by strong hydrogen halide acids like HI or HBr, particularly under more vigorous conditions such as heating or using an excess of the acid.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-49',
    type: 'mcq',
    question: 'When a mixed alkyl aryl ether such as anisole is treated with excess hydroiodic acid (HI), cleavage typically occurs at the',
    options: [
      'aryl-oxygen bond, giving an alkyl aryl compound and an alcohol',
      'alkyl-oxygen bond, giving phenol and an alkyl iodide, since the aryl-oxygen bond has partial double bond character and is much stronger',
      'both bonds simultaneously and equally, with no preference',
      'oxygen-hydrogen bond, since ethers contain such a bond'
    ],
    correctIndex: 1,
    explanation: 'Because the aryl-oxygen bond in an alkyl aryl ether has partial double bond character (due to resonance with the ring) and is significantly stronger, cleavage preferentially occurs at the weaker alkyl-oxygen bond, giving phenol and the corresponding alkyl iodide.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-50',
    type: 'mcq',
    question: 'When ether cleavage by HI occurs with a primary or methyl alkyl group, the mechanism generally proceeds via',
    options: [
      'an SN1 pathway, through a stable carbocation intermediate',
      'an SN2 pathway, via backside attack of the iodide nucleophile',
      'a radical mechanism only',
      'no mechanism is possible, since cleavage does not occur with primary groups'
    ],
    correctIndex: 1,
    explanation: 'Cleavage of ethers bearing primary or methyl alkyl groups typically proceeds via an SN2 mechanism, since primary carbocations are unstable and unlikely to form.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-51',
    type: 'mcq',
    question: 'When ether cleavage by HI occurs with a tertiary, benzylic, or allylic alkyl group, the mechanism generally proceeds via',
    options: [
      'an SN2 pathway, via backside attack',
      'an SN1 pathway, through formation of a relatively stable carbocation intermediate',
      'no reaction occurs under any conditions',
      'a purely radical chain mechanism'
    ],
    correctIndex: 1,
    explanation: 'When the alkyl group is tertiary, benzylic, or allylic, the corresponding carbocation is relatively stable, favouring cleavage via an SN1 mechanism.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-52',
    type: 'mcq',
    question: 'In electrophilic aromatic substitution reactions, the alkoxy (-OR) group of an aryl alkyl ether (such as anisole) behaves similarly to the -OH group of phenol, acting as',
    options: [
      'a deactivating and meta-directing group',
      'an activating and ortho/para-directing group',
      'a group with no directing influence at all',
      'a group that completely deactivates the ring towards any substitution'
    ],
    correctIndex: 1,
    explanation: 'Like the -OH group in phenol, the alkoxy group in aryl alkyl ethers donates electron density into the ring via resonance, acting as an activator and directing electrophilic substitution to the ortho and para positions.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-53',
    type: 'mcq',
    question: 'Ethers can act as weak hydrogen bond acceptors with water molecules, which explains why',
    options: [
      'ethers are completely insoluble in water',
      'lower ethers show appreciable solubility in water, comparable to alcohols of similar molecular mass in some cases',
      'ethers are more soluble in water than alcohols of the same molecular mass',
      'ethers cannot interact with water in any way'
    ],
    correctIndex: 1,
    explanation: 'Although ethers cannot donate hydrogen bonds (lacking O-H), the lone pairs on their oxygen atom allow them to accept hydrogen bonds from water, giving lower ethers reasonable water solubility, even though it is generally somewhat less than that of comparable alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-54',
    type: 'mcq',
    question: 'Which of the following correctly ranks the typical boiling points of an alcohol, ether, and alkane, all of comparable molecular mass?',
    options: [
      'alkane > ether > alcohol',
      'alcohol > ether > alkane',
      'ether > alcohol > alkane',
      'alkane > alcohol > ether'
    ],
    correctIndex: 1,
    explanation: 'Alcohols, capable of hydrogen bonding, have the highest boiling point; ethers, though polar, cannot hydrogen bond with themselves and have intermediate boiling points; alkanes, being non-polar, have the lowest boiling points among these comparable-mass compounds.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-55',
    type: 'mcq',
    question: 'Vicinal diols (glycols), such as ethylene glycol, are typically prepared from alkenes by',
    options: [
      'reaction with cold, dilute alkaline potassium permanganate (syn-dihydroxylation)',
      'reaction with hydrogen halide acids',
      'reaction with sodium metal',
      'complete combustion of the alkene'
    ],
    correctIndex: 0,
    explanation: 'Reaction of an alkene with cold, dilute alkaline KMnO4 is a classic method for syn-dihydroxylation, converting the alkene into a vicinal diol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-56',
    type: 'mcq',
    question: 'Complete oxidative cleavage of a vicinal diol using an oxidising agent such as periodic acid (HIO4) typically gives',
    options: [
      'two carboxylic acids exclusively',
      'a mixture of aldehydes and/or ketones, depending on the substitution at each carbon, with cleavage of the C-C bond between the two -OH groups',
      'a single alkene product',
      'a single alcohol product with no cleavage at all'
    ],
    correctIndex: 1,
    explanation: 'Periodic acid selectively cleaves the C-C bond between the two hydroxyl groups of a vicinal diol, giving two carbonyl compounds (aldehydes and/or ketones, depending on substitution).',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-57',
    type: 'mcq',
    question: 'Among primary, secondary, and tertiary alcohols of similar molecular mass, boiling points generally follow the trend',
    options: [
      'tertiary > secondary > primary',
      'primary > secondary > tertiary, since increased branching reduces surface area available for intermolecular contact',
      'all three types show identical boiling points',
      'boiling point is completely unrelated to the degree of branching'
    ],
    correctIndex: 1,
    explanation: 'As with other classes of organic compounds, increased branching (as in tertiary alcohols compared to primary) reduces the surface area available for van der Waals interactions, generally lowering the boiling point.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-58',
    type: 'mcq',
    question: 'Phenols, like alcohols, can undergo hydrogen bonding, and this contributes to their',
    options: [
      'unusually low boiling points compared to similarly sized hydrocarbons',
      'relatively high boiling points and appreciable, though limited, water solubility',
      'complete insolubility in any solvent',
      'complete lack of any intermolecular interactions'
    ],
    correctIndex: 1,
    explanation: 'The hydrogen-bonding capability of the -OH group in phenols contributes to their comparatively high boiling points and limited but appreciable solubility in water.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-59',
    type: 'mcq',
    question: 'Reaction of phenol with excess bromine water occurs readily without a catalyst because',
    options: [
      'phenol is a strongly deactivated aromatic ring',
      'the -OH group strongly activates the aromatic ring, increasing its electron density and reactivity towards electrophiles',
      'bromine is an extremely weak electrophile that reacts with any aromatic compound easily',
      'phenol contains no aromatic ring at all'
    ],
    correctIndex: 1,
    explanation: 'The strong activation of the ring by the -OH group increases electron density sufficiently that phenol reacts readily with bromine water, without requiring a Lewis acid catalyst (unlike benzene).',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-60',
    type: 'mcq',
    question: 'Which of the following statements correctly compares the two industrial phenol-producing methods discussed in NCERT?',
    options: [
      'The Dow\'s process uses a haloarene as starting material, while the cumene process uses cumene, which is oxidised via a hydroperoxide intermediate',
      'Both processes use exactly the same starting material and reagents',
      'The cumene process does not produce any valuable by-product',
      'The Dow\'s process gives acetone as its main by-product'
    ],
    correctIndex: 0,
    explanation: 'The Dow\'s process starts from a haloarene and uses NaOH fusion, whereas the cumene process starts from cumene and proceeds through a hydroperoxide intermediate, ultimately giving phenol and acetone.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-61',
    type: 'mcq',
    question: 'The general order of acid strength among water, alcohols, and phenols is best represented as',
    options: [
      'alcohols > phenols > water',
      'phenols > water > alcohols',
      'water > phenols > alcohols',
      'alcohols > water > phenols'
    ],
    correctIndex: 1,
    explanation: 'Phenols are more acidic than water due to resonance stabilisation of the phenoxide ion, while simple alcohols are generally less acidic than water, giving the order phenols > water > alcohols.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-62',
    type: 'mcq',
    question: 'Phenol reacts with aqueous sodium hydroxide to form',
    options: [
      'sodium phenoxide and water',
      'no reaction, since phenol is not acidic enough to react with NaOH',
      'phenyl acetate',
      'anisole'
    ],
    correctIndex: 0,
    explanation: 'Being weakly acidic, phenol readily reacts with aqueous sodium hydroxide to form sodium phenoxide and water.',
    difficulty: 'easy'
  },
  {
    id: 'alcohol-63',
    type: 'mcq',
    question: 'In terms of general reactivity, phenols undergo electrophilic aromatic substitution reactions',
    options: [
      'much more slowly than benzene, due to deactivation by the -OH group',
      'much more readily than benzene, due to strong activation by the -OH group',
      'at exactly the same rate as benzene, with no difference at all',
      'only under forcing conditions with strong catalysts, similar to benzene'
    ],
    correctIndex: 1,
    explanation: 'Since the -OH group strongly activates the aromatic ring by resonance donation, phenols undergo electrophilic aromatic substitution much more readily than benzene itself.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-64',
    type: 'mcq',
    question: 'Anisole (methoxybenzene) can be conveniently prepared using the Williamson synthesis from phenol by reaction with',
    options: [
      'sodium metal alone',
      'sodium hydroxide, followed by treatment with methyl iodide (or another suitable methylating agent)',
      'concentrated sulphuric acid',
      'acetic anhydride'
    ],
    correctIndex: 1,
    explanation: 'Phenol is first converted to sodium phenoxide using a base, which then reacts with methyl iodide (or dimethyl sulphate) via the Williamson synthesis to give anisole.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-65',
    type: 'mcq',
    question: 'The general trend in acidity of substituted phenols shows that para-nitrophenol is generally',
    options: [
      'less acidic than unsubstituted phenol',
      'more acidic than unsubstituted phenol, due to the electron-withdrawing effect of the nitro group at the para position',
      'exactly as acidic as unsubstituted phenol',
      'not acidic at all'
    ],
    correctIndex: 1,
    explanation: 'The strongly electron-withdrawing nitro group at the para position stabilises the phenoxide ion through resonance, making para-nitrophenol significantly more acidic than unsubstituted phenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-66',
    type: 'mcq',
    question: 'para-Cresol (4-methylphenol) is generally',
    options: [
      'more acidic than phenol, due to the electron-donating methyl group',
      'less acidic than phenol, since the electron-donating methyl group destabilises the phenoxide ion',
      'exactly as acidic as phenol',
      'a stronger acid than any nitrophenol'
    ],
    correctIndex: 1,
    explanation: 'The electron-donating methyl group in para-cresol destabilises the negative charge on the phenoxide ion, making it a weaker acid than unsubstituted phenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-67',
    type: 'mcq',
    question: 'Aromatic rings in phenols and aryl ethers are activated for electrophilic substitution primarily because the attached oxygen atom',
    options: [
      'withdraws electron density from the ring inductively, with no resonance effect',
      'donates one of its lone pairs into the ring through resonance, increasing electron density at ortho and para positions',
      'has no lone pairs available for donation',
      'forms a triple bond with the ring carbon'
    ],
    correctIndex: 1,
    explanation: 'The oxygen atom in both phenol and aryl ethers donates a lone pair into the aromatic ring system through resonance, significantly increasing electron density (especially at ortho and para positions) and activating the ring.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-68',
    type: 'mcq',
    question: 'Which classic laboratory test can be used to help distinguish primary, secondary, and tertiary alcohols based on differing reaction rates?',
    options: ['Tollens\' test', 'Lucas test', 'Fehling\'s test', 'Iodoform test only'],
    correctIndex: 1,
    explanation: 'The Lucas test, using ZnCl2/HCl, distinguishes alcohols based on the differing rates at which primary, secondary, and tertiary alcohols react to form an insoluble alkyl chloride.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-69',
    type: 'mcq',
    question: 'The dehydration of alcohols to form alkenes generally follows Zaitsev\'s rule, meaning the major product is typically the',
    options: [
      'least substituted (least stable) alkene',
      'more substituted (more stable) alkene',
      'ether, rather than an alkene',
      'the original alcohol, unreacted'
    ],
    correctIndex: 1,
    explanation: 'In accordance with Zaitsev\'s rule, elimination reactions (including alcohol dehydration) generally favour formation of the more substituted, more thermodynamically stable alkene as the major product.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-70',
    type: 'mcq',
    question: 'Overall, the chemistry of alcohols, phenols, and ethers, as emphasised throughout this NCERT chapter, centres on understanding',
    options: [
      'the structure, preparation, physical properties, and reactivity (acidity, substitution, oxidation, cleavage) arising from the presence of the hydroxyl or ether oxygen functional group',
      'only their use as industrial fuels',
      'only their crystal structure in the solid state',
      'topics entirely unrelated to functional group chemistry'
    ],
    correctIndex: 0,
    explanation: 'The chapter integrates the structural features, preparation methods, physical behaviour, and diverse chemical reactivity that arise specifically from the hydroxyl group (in alcohols/phenols) or the ether oxygen linkage.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'alcohol-71',
    type: 'assertion-reason',
    question: 'Assertion (A): The C-O-H bond angle in methanol is slightly greater than the ideal tetrahedral angle.\nReason (R): The bulkier methyl group causes greater repulsion with the lone pairs on oxygen than a hydrogen atom would, widening the bond angle compared to water.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The increased steric repulsion from the bulkier methyl group compared to a hydrogen atom in water is exactly why the bond angle in methanol widens beyond the ideal tetrahedral value, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-72',
    type: 'assertion-reason',
    question: 'Assertion (A): The C-O-C bond angle in ethers is generally larger than the C-O-H bond angle in alcohols.\nReason (R): Ethers have two alkyl groups attached to oxygen, causing greater steric repulsion than the single alkyl group and one hydrogen atom found in alcohols.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The greater steric bulk of two alkyl groups compared to one alkyl group and one hydrogen is exactly why the C-O-C angle in ethers exceeds the C-O-H angle in alcohols, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-73',
    type: 'assertion-reason',
    question: 'Assertion (A): Acid-catalysed hydration of an unsymmetrical alkene gives the Markovnikov product.\nReason (R): The reaction proceeds via a carbocation intermediate, which forms preferentially at the more substituted carbon due to its greater stability.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The preferential formation of the more stable carbocation, followed by nucleophilic attack of water at that position, directly explains the Markovnikov selectivity, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-74',
    type: 'assertion-reason',
    question: 'Assertion (A): Hydroboration-oxidation gives the anti-Markovnikov alcohol product.\nReason (R): The mechanism does not proceed via a carbocation intermediate, and boron preferentially adds to the less hindered (less substituted) carbon.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The absence of a carbocation intermediate and the preferential addition of boron to the less hindered carbon directly account for the anti-Markovnikov regioselectivity, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-75',
    type: 'assertion-reason',
    question: 'Assertion (A): Reaction of a Grignard reagent with formaldehyde gives a primary alcohol, while reaction with a ketone gives a tertiary alcohol.\nReason (R): Formaldehyde has no alkyl/aryl substituents on its carbonyl carbon, while a ketone carbonyl carbon already bears two such substituents before the Grignard addition.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The differing number of substituents already present on the carbonyl carbon before Grignard addition directly determines whether a primary, secondary, or tertiary alcohol results, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-76',
    type: 'assertion-reason',
    question: 'Assertion (A): The cumene process for phenol production is industrially favoured over the Dow\'s process in many contexts.\nReason (R): The cumene process gives both phenol and acetone as valuable products, improving the overall economics of the process.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The generation of a second valuable co-product (acetone) alongside phenol makes the cumene process more economically attractive, correctly explaining the industrial preference stated in A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-77',
    type: 'assertion-reason',
    question: 'Assertion (A): Alcohols have significantly higher boiling points than alkanes of comparable molecular mass.\nReason (R): Alcohols can form intermolecular hydrogen bonds due to their -OH group, while alkanes cannot.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The presence of intermolecular hydrogen bonding in alcohols, absent in alkanes, is exactly why alcohols show significantly elevated boiling points, correctly explaining A.',
    difficulty: 'easy'
  },
  {
    id: 'alcohol-78',
    type: 'assertion-reason',
    question: 'Assertion (A): Ethers have lower boiling points than isomeric alcohols.\nReason (R): Ether molecules lack an O-H group and therefore cannot form hydrogen bonds with each other.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The absence of hydrogen bonding capability between ether molecules directly explains their lower boiling points compared to isomeric alcohols, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-79',
    type: 'assertion-reason',
    question: 'Assertion (A): The Lucas test can distinguish between primary, secondary, and tertiary alcohols.\nReason (R): Tertiary alcohols form the most stable carbocation and therefore react fastest with the Lucas reagent, while primary alcohols react the slowest.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The differing rates of carbocation formation, correlating with alcohol classification, directly explain why the Lucas test can distinguish between primary, secondary, and tertiary alcohols, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-80',
    type: 'assertion-reason',
    question: 'Assertion (A): Tertiary alcohols dehydrate more easily than primary alcohols under acid-catalysed conditions.\nReason (R): Tertiary alcohols form more stable carbocation intermediates, in line with an E1-type dehydration mechanism.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The greater stability of tertiary carbocations, central to the E1 dehydration mechanism, directly explains why tertiary alcohols dehydrate more readily than primary alcohols, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-81',
    type: 'assertion-reason',
    question: 'Assertion (A): PCC is used to selectively oxidise a primary alcohol to an aldehyde without further oxidation to a carboxylic acid.\nReason (R): PCC is a comparatively mild oxidising agent, unlike stronger oxidants such as acidified potassium dichromate under reflux.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The comparatively mild oxidising strength of PCC is exactly why it stops the oxidation at the aldehyde stage rather than proceeding further to the carboxylic acid, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-82',
    type: 'assertion-reason',
    question: 'Assertion (A): Tertiary alcohols resist oxidation by common oxidising agents under normal conditions.\nReason (R): The carbon bearing the -OH group in a tertiary alcohol has no hydrogen atom attached to it, preventing straightforward oxidation to a carbonyl compound.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The absence of a hydrogen atom on the hydroxyl-bearing carbon is exactly why tertiary alcohols cannot undergo the usual oxidation to a carbonyl compound, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-83',
    type: 'assertion-reason',
    question: 'Assertion (A): Phenol is a stronger acid than a simple aliphatic alcohol.\nReason (R): The phenoxide ion, formed after phenol loses a proton, is stabilised by resonance delocalisation of the negative charge into the aromatic ring, unlike a simple alkoxide ion.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The resonance stabilisation available to the phenoxide ion, but not to a simple alkoxide ion, is exactly why phenol is significantly more acidic than an aliphatic alcohol, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-84',
    type: 'assertion-reason',
    question: 'Assertion (A): Phenol does not react appreciably with aqueous sodium bicarbonate to liberate carbon dioxide.\nReason (R): Phenol is a weaker acid than carbonic acid.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since phenol is weaker than carbonic acid, it cannot displace CO2 from bicarbonate, which requires a stronger acid than carbonic acid — this directly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-85',
    type: 'assertion-reason',
    question: 'Assertion (A): para-Nitrophenol is more acidic than phenol.\nReason (R): The nitro group at the para position withdraws electron density and stabilises the phenoxide ion through resonance.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The additional resonance stabilisation of the phenoxide ion provided by the electron-withdrawing para-nitro group is exactly why para-nitrophenol is more acidic than phenol, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-86',
    type: 'assertion-reason',
    question: 'Assertion (A): para-Cresol (4-methylphenol) is less acidic than phenol.\nReason (R): The electron-donating methyl group destabilises the phenoxide ion by intensifying the negative charge, making deprotonation less favourable.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The destabilisation of the phenoxide ion by the electron-donating methyl group is exactly why para-cresol is a weaker acid than phenol, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-87',
    type: 'assertion-reason',
    question: 'Assertion (A): Phenol reacts readily with bromine water without any catalyst, forming 2,4,6-tribromophenol.\nReason (R): The -OH group strongly activates the aromatic ring towards electrophilic substitution by donating electron density via resonance.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The strong ring activation provided by the -OH group is exactly why phenol reacts so readily with bromine water, without needing a Lewis acid catalyst, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-88',
    type: 'assertion-reason',
    question: 'Assertion (A): ortho-Nitrophenol is more volatile (steam-volatile) than para-nitrophenol.\nReason (R): ortho-Nitrophenol exhibits intramolecular hydrogen bonding, reducing its tendency to associate intermolecularly, unlike para-nitrophenol, which forms intermolecular hydrogen bonds.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This difference in hydrogen bonding pattern (intramolecular vs intermolecular) directly explains the difference in volatility between the ortho and para isomers, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-89',
    type: 'assertion-reason',
    question: 'Assertion (A): The Reimer-Tiemann reaction converts phenol into salicylaldehyde.\nReason (R): The reaction proceeds via generation of dichlorocarbene from chloroform and base, which reacts electrophilically with the phenoxide ring, predominantly at the ortho position.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This mechanistic pathway, involving dichlorocarbene attack predominantly at the ortho position, directly explains the formation of salicylaldehyde in the Reimer-Tiemann reaction, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-90',
    type: 'assertion-reason',
    question: 'Assertion (A): The Kolbe reaction gives salicylic acid rather than a meta- or para-substituted benzoic acid derivative.\nReason (R): The reaction of sodium phenoxide with CO2 proceeds through an intermediate that favours attachment of the carboxyl group specifically at the ortho position relative to the oxygen.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The described mechanistic preference for ortho attachment directly explains why the Kolbe reaction selectively gives salicylic acid, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-91',
    type: 'assertion-reason',
    question: 'Assertion (A): The Williamson synthesis is best carried out using a primary or methyl alkyl halide when preparing an unsymmetrical ether.\nReason (R): Bulkier secondary or tertiary alkyl halides tend to favour competing elimination reactions with the strongly basic alkoxide, reducing ether yield.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The tendency of bulkier alkyl halides to undergo elimination instead of substitution with a strongly basic alkoxide directly explains why primary/methyl halides are preferred in the Williamson synthesis, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-92',
    type: 'assertion-reason',
    question: 'Assertion (A): Cleavage of anisole by excess HI gives phenol and methyl iodide, rather than iodobenzene and methanol.\nReason (R): The aryl-oxygen bond has partial double bond character due to resonance and is much stronger than the alkyl-oxygen bond, so cleavage preferentially occurs at the weaker alkyl-oxygen bond.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The greater strength of the resonance-stabilised aryl-oxygen bond compared to the alkyl-oxygen bond directly explains why cleavage occurs at the alkyl-oxygen bond, giving phenol and methyl iodide, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-93',
    type: 'assertion-reason',
    question: 'Assertion (A): Cleavage of an ether bearing a tertiary alkyl group by HI generally proceeds via an SN1 mechanism.\nReason (R): The tertiary carbocation formed as an intermediate is comparatively stable, favouring an SN1 pathway over SN2.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The relative stability of the tertiary carbocation intermediate is exactly why cleavage of ethers with tertiary alkyl groups favours an SN1 pathway, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-94',
    type: 'assertion-reason',
    question: 'Assertion (A): Ethers, despite lacking an O-H group, show appreciable solubility in water for lower molecular mass members.\nReason (R): The lone pairs on the ether oxygen allow it to act as a hydrogen bond acceptor with water molecules.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The ability of the ether oxygen to accept hydrogen bonds from water molecules, despite the ether itself lacking O-H, is exactly why lower ethers still show meaningful water solubility, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-95',
    type: 'assertion-reason',
    question: 'Assertion (A): The alkoxy (-OR) group in anisole activates the aromatic ring towards electrophilic substitution.\nReason (R): The oxygen atom donates one of its lone pairs into the ring through resonance, increasing electron density at the ortho and para positions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This resonance donation of electron density into the ring, particularly at ortho and para positions, is exactly why the alkoxy group activates the ring, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-96',
    type: 'assertion-reason',
    question: 'Assertion (A): Periodic acid (HIO4) selectively cleaves the carbon-carbon bond of a vicinal diol.\nReason (R): This oxidative cleavage occurs specifically at the bond connecting the two carbons bearing the hydroxyl groups, giving two carbonyl products.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This specific cleavage site, restated in R, is exactly the mechanistic detail that explains the selectivity described in A.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-97',
    type: 'assertion-reason',
    question: 'Assertion (A): Alcohols generally show decreasing water solubility as the size of the alkyl (hydrocarbon) group increases.\nReason (R): A larger hydrocarbon portion increases the hydrophobic character of the molecule relative to the single hydrogen-bonding hydroxyl group.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The growing dominance of the hydrophobic hydrocarbon portion over the single polar -OH group directly explains the decreasing water solubility with increasing alkyl chain length, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-98',
    type: 'assertion-reason',
    question: 'Assertion (A): Fischer esterification is a reversible reaction.\nReason (R): The ester product can, under appropriate conditions (such as excess water and acid), be hydrolysed back into the corresponding alcohol and carboxylic acid.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The possibility of hydrolysing the ester product back to the starting materials is exactly what makes Fischer esterification a reversible, equilibrium reaction, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-99',
    type: 'assertion-reason',
    question: 'Assertion (A): Alcohols always show greater acidity than phenols in aqueous solution.\nReason (R): The alkoxide ion formed from an alcohol is destabilised relative to the phenoxide ion, since there is no resonance delocalisation of the negative charge in the alkoxide.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — phenols are generally more acidic than alcohols, not the other way around. R correctly describes why phenoxide is more stable than alkoxide, which is exactly why the assertion in A (claiming alcohols are more acidic) is incorrect.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-100',
    type: 'assertion-reason',
    question: 'Assertion (A): The study of alcohols, phenols, and ethers integrates structural, physical, and mechanistic aspects of organic chemistry.\nReason (R): Their reactivity patterns — such as acidity, oxidation, elimination, and nucleophilic substitution/cleavage — all trace back to the properties of the hydroxyl or ether oxygen functional group.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The shared dependence of these diverse reaction types on the properties of the hydroxyl/ether oxygen group is exactly what unifies and explains the integrated study of this chapter, correctly explaining A.',
    difficulty: 'medium'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'alcohol-101',
    type: 'statement',
    question: 'Statement I: Alcohols are classified as monohydric, dihydric, or trihydric based on the number of -OH groups present.\nStatement II: Alcohols are classified as primary, secondary, or tertiary based on the nature of the carbon bearing the -OH group.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe two independent classification schemes used for alcohols.',
    difficulty: 'easy'
  },
  {
    id: 'alcohol-102',
    type: 'statement',
    question: 'Statement I: The C-O-H bond angle in alcohols is smaller than the bond angle in water.\nStatement II: The C-O-C bond angle in ethers is larger than the C-O-H bond angle in alcohols.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the bond angle in alcohols is actually slightly larger than in water, not smaller. Statement II correctly describes the further increase in bond angle for ethers.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-103',
    type: 'statement',
    question: 'Statement I: Acid-catalysed hydration of alkenes gives the Markovnikov alcohol product.\nStatement II: Hydroboration-oxidation gives the anti-Markovnikov alcohol product.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the regiochemical outcomes of these two important methods for converting alkenes to alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-104',
    type: 'statement',
    question: 'Statement I: Reduction of an aldehyde gives a secondary alcohol.\nStatement II: Reduction of a ketone gives a tertiary alcohol.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — reduction of an aldehyde actually gives a primary alcohol, and reduction of a ketone gives a secondary alcohol, not a tertiary one.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-105',
    type: 'statement',
    question: 'Statement I: Reaction of a Grignard reagent with formaldehyde gives a primary alcohol.\nStatement II: Reaction of a Grignard reagent with a ketone gives a tertiary alcohol.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the outcome of Grignard reagent reactions with formaldehyde and ketones, respectively.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-106',
    type: 'statement',
    question: 'Statement I: The Dow\'s process prepares phenol from a haloarene via fusion with NaOH.\nStatement II: The cumene process prepares phenol via cumene hydroperoxide, also giving acetone as a by-product.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe these two important industrial methods for producing phenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-107',
    type: 'statement',
    question: 'Statement I: Phenol can be prepared by hydrolysis of a diazonium salt.\nStatement II: Phenol can be prepared by fusion of sodium benzenesulphonate with NaOH.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe additional standard methods for preparing phenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-108',
    type: 'statement',
    question: 'Statement I: Alcohols generally have lower boiling points than alkanes of similar molecular mass.\nStatement II: This is because alcohols cannot form hydrogen bonds with each other.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — alcohols actually have higher boiling points than comparable alkanes precisely because they can form hydrogen bonds, which alkanes cannot.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-109',
    type: 'statement',
    question: 'Statement I: The Lucas reagent consists of anhydrous ZnCl2 dissolved in concentrated HCl.\nStatement II: Tertiary alcohols react with the Lucas reagent much more slowly than primary alcohols.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — tertiary alcohols actually react much faster (often immediately) compared to primary alcohols, which react very slowly.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-110',
    type: 'statement',
    question: 'Statement I: Dehydration of alcohols follows the ease order tertiary > secondary > primary.\nStatement II: This order parallels the relative stability of the carbocation intermediate formed during dehydration.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the ease of dehydration and its underlying mechanistic basis.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-111',
    type: 'statement',
    question: 'Statement I: PCC is a strong oxidising agent used to oxidise a primary alcohol all the way to a carboxylic acid.\nStatement II: Acidified potassium dichromate under reflux can oxidise a primary alcohol to a carboxylic acid.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — PCC is a mild oxidant that stops oxidation at the aldehyde stage. Statement II correctly describes a strong oxidant capable of taking a primary alcohol all the way to a carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-112',
    type: 'statement',
    question: 'Statement I: Tertiary alcohols readily undergo oxidation to ketones under mild conditions.\nStatement II: Secondary alcohols are oxidised to ketones under mild oxidation conditions.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — tertiary alcohols resist oxidation under mild/normal conditions, since they lack a hydrogen on the hydroxyl-bearing carbon. Statement II correctly describes the oxidation of secondary alcohols to ketones.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-113',
    type: 'statement',
    question: 'Statement I: Phenol is more acidic than a simple aliphatic alcohol.\nStatement II: Phenol is more acidic than carbonic acid.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — phenol is actually a weaker acid than carbonic acid, which is why it does not react appreciably with sodium bicarbonate.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-114',
    type: 'statement',
    question: 'Statement I: Electron-withdrawing substituents on the phenol ring generally increase acidity.\nStatement II: Electron-donating substituents on the phenol ring generally increase acidity as well.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — electron-donating substituents actually decrease acidity, not increase it, by destabilising the phenoxide ion.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-115',
    type: 'statement',
    question: 'Statement I: The Kolbe reaction converts sodium phenoxide, via reaction with CO2 and subsequent acidification, into salicylic acid.\nStatement II: The Reimer-Tiemann reaction converts phenol, via reaction with chloroform and base, into salicylaldehyde.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe these two important named reactions of phenol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-116',
    type: 'statement',
    question: 'Statement I: The dichlorocarbene intermediate is central to the mechanism of the Reimer-Tiemann reaction.\nStatement II: Dichlorocarbene is generated by treating chloroform with a strong base.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the generation and role of dichlorocarbene in the Reimer-Tiemann reaction.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-117',
    type: 'statement',
    question: 'Statement I: The -OH group of phenol is a deactivating and meta-directing group in electrophilic aromatic substitution.\nStatement II: Nitration of phenol with dilute nitric acid gives predominantly ortho- and para-nitrophenol.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the -OH group is actually a strongly activating and ortho/para-directing group, not deactivating or meta-directing. Statement II correctly describes the outcome of phenol nitration.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-118',
    type: 'statement',
    question: 'Statement I: ortho-Nitrophenol shows intramolecular hydrogen bonding.\nStatement II: para-Nitrophenol shows intermolecular hydrogen bonding, contributing to its lower volatility compared to the ortho isomer.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the differing hydrogen bonding patterns of the ortho and para nitrophenol isomers.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-119',
    type: 'statement',
    question: 'Statement I: Phenol reacts with bromine water only in the presence of a Lewis acid catalyst, similar to benzene.\nStatement II: Phenol reacts readily with bromine water without any catalyst, giving 2,4,6-tribromophenol.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — unlike benzene, phenol does not require a catalyst for bromination due to strong ring activation. Statement II correctly describes this readily occurring reaction.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-120',
    type: 'statement',
    question: 'Statement I: The Williamson synthesis is best carried out using a primary or methyl alkyl halide to avoid competing elimination.\nStatement II: The Williamson synthesis proceeds via an SN2 mechanism.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe key practical and mechanistic features of the Williamson ether synthesis.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-121',
    type: 'statement',
    question: 'Statement I: Ethers are generally very reactive compounds, readily undergoing numerous chemical transformations.\nStatement II: Ethers can be cleaved by strong acids such as HI, especially with heating or excess reagent.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — ethers are generally quite unreactive (inert) compounds. Statement II correctly describes one of the few reactions ethers do undergo.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-122',
    type: 'statement',
    question: 'Statement I: Cleavage of anisole with excess HI gives phenol and methyl iodide.\nStatement II: This occurs because the alkyl-oxygen bond is weaker than the resonance-stabilised aryl-oxygen bond.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the outcome and underlying reason for the selective cleavage observed in this reaction.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-123',
    type: 'statement',
    question: 'Statement I: Cleavage of ethers with primary alkyl groups by HI generally proceeds via an SN1 mechanism.\nStatement II: Cleavage of ethers with tertiary alkyl groups by HI generally proceeds via an SN1 mechanism.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — primary alkyl group cleavage generally proceeds via SN2, not SN1, since primary carbocations are unstable. Statement II correctly describes the SN1 pathway favoured for tertiary alkyl groups.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-124',
    type: 'statement',
    question: 'Statement I: The alkoxy group in anisole is a deactivating group for electrophilic aromatic substitution.\nStatement II: The alkoxy group in anisole directs incoming electrophiles to the ortho and para positions.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the alkoxy group is actually an activating group, not deactivating. Statement II correctly describes its ortho/para-directing effect.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-125',
    type: 'statement',
    question: 'Statement I: Cold, dilute alkaline KMnO4 can convert an alkene into a vicinal diol.\nStatement II: Periodic acid can selectively cleave the C-C bond of a vicinal diol.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe standard methods for the preparation and oxidative cleavage of vicinal diols.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-126',
    type: 'statement',
    question: 'Statement I: As the alkyl chain of an alcohol becomes longer, its water solubility generally increases.\nStatement II: Lower molecular mass alcohols such as methanol and ethanol are miscible with water in all proportions.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — water solubility of alcohols generally decreases, not increases, with a longer alkyl chain. Statement II correctly describes the high water miscibility of the smallest alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-127',
    type: 'statement',
    question: 'Statement I: Acetylation of phenol using acetic anhydride gives phenyl acetate.\nStatement II: Reduction of phenol with zinc dust gives benzene.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe standard reactions of phenol: esterification of the -OH group and reductive removal of the -OH group, respectively.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-128',
    type: 'statement',
    question: 'Statement I: Alcohols react with sodium metal to release hydrogen gas and form a sodium alkoxide.\nStatement II: This reaction demonstrates the weakly acidic character of the -OH group in alcohols.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the reaction of alcohols with sodium metal and its significance in illustrating the mild acidity of the -OH group.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-129',
    type: 'statement',
    question: 'Statement I: Boiling points of primary, secondary, and tertiary alcohols of similar molecular mass typically follow the order primary > secondary > tertiary.\nStatement II: This trend arises due to decreasing surface area available for van der Waals interactions with increasing branching.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the general boiling point trend among isomeric alcohols and its underlying structural explanation.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-130',
    type: 'statement',
    question: 'Statement I: The chemistry of alcohols, phenols, and ethers is unrelated to the properties of the oxygen-containing functional group.\nStatement II: Reactivity patterns such as acidity, oxidation, and substitution/cleavage in these compounds all trace back to the hydroxyl or ether oxygen functional group.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect and directly contradicted by the well-established structure-reactivity relationships in this chapter. Statement II correctly summarises this central theme.',
    difficulty: 'medium'
  },

  // ==================== HOW-MANY (20) ====================
  {
    id: 'alcohol-131',
    type: 'how-many',
    question: 'How many of the following statements about classification of alcohols are correct?\n1. Monohydric alcohols have one -OH group.\n2. Dihydric alcohols have two -OH groups.\n3. Primary, secondary, and tertiary classification is based on the carbon bearing the -OH group.\n4. Allylic alcohols have -OH directly on the double-bond carbon.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — allylic alcohols have the -OH on the sp3 carbon adjacent to the double bond, not directly on the double-bond carbon (that describes vinylic alcohols).',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-132',
    type: 'how-many',
    question: 'How many of the following statements about the preparation of alcohols are correct?\n1. Acid-catalysed hydration of alkenes gives the Markovnikov product.\n2. Hydroboration-oxidation gives the anti-Markovnikov product.\n3. Reduction of an aldehyde gives a primary alcohol.\n4. Reduction of a ketone gives a tertiary alcohol.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — reduction of a ketone gives a secondary alcohol, not a tertiary alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-133',
    type: 'how-many',
    question: 'How many of the following statements about Grignard reagent reactions are correct?\n1. Reaction with formaldehyde gives a primary alcohol.\n2. Reaction with other aldehydes (not formaldehyde) gives a secondary alcohol.\n3. Reaction with a ketone gives a tertiary alcohol.\n4. Reaction with any carbonyl compound always gives the same type of alcohol, regardless of substitution.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the type of alcohol formed depends specifically on the substitution pattern of the carbonyl compound used.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-134',
    type: 'how-many',
    question: 'How many of the following statements about industrial preparation of phenol are correct?\n1. The Dow\'s process uses a haloarene and NaOH fusion.\n2. The cumene process converts cumene to cumene hydroperoxide, then to phenol and acetone.\n3. Phenol can be prepared from a diazonium salt by hydrolysis.\n4. Phenol can be prepared directly from benzene by simple oxidation with air, with no other steps required.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — phenol is not prepared by simple direct oxidation of benzene with air; the cumene process requires the intermediate hydroperoxide step and starts from cumene, not benzene directly.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-135',
    type: 'how-many',
    question: 'How many of the following statements about physical properties of alcohols, phenols, and ethers are correct?\n1. Alcohols have higher boiling points than alkanes of similar molecular mass.\n2. Ethers have lower boiling points than isomeric alcohols.\n3. Alcohol solubility in water decreases with increasing alkyl chain length.\n4. Ethers cannot act as hydrogen bond acceptors with water under any circumstances.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — ethers can indeed act as weak hydrogen bond acceptors with water, despite lacking an O-H group themselves.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-136',
    type: 'how-many',
    question: 'How many of the following statements about the Lucas test are correct?\n1. The Lucas reagent is a mixture of anhydrous ZnCl2 and concentrated HCl.\n2. Tertiary alcohols show immediate turbidity.\n3. Secondary alcohols typically show turbidity within about 5-10 minutes.\n4. Primary alcohols typically show no visible reaction at room temperature.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe the standard observations and reagent composition of the Lucas test for distinguishing alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-137',
    type: 'how-many',
    question: 'How many of the following statements about oxidation of alcohols are correct?\n1. Primary alcohols can be oxidised fully to carboxylic acids with strong oxidants.\n2. PCC selectively stops oxidation of a primary alcohol at the aldehyde stage.\n3. Secondary alcohols are oxidised to ketones.\n4. Tertiary alcohols are easily oxidised to ketones under mild conditions.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — tertiary alcohols resist oxidation under mild conditions, since they lack a hydrogen on the hydroxyl-bearing carbon.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-138',
    type: 'how-many',
    question: 'How many of the following statements about acidity of phenols are correct?\n1. Phenol is more acidic than a simple aliphatic alcohol.\n2. Phenol is a stronger acid than carbonic acid.\n3. Electron-withdrawing groups on the ring generally increase phenol acidity.\n4. Electron-donating groups on the ring generally decrease phenol acidity.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 3, and 4 are correct. Statement 2 is false — phenol is actually a weaker acid than carbonic acid.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-139',
    type: 'how-many',
    question: 'How many of the following named reactions of phenol are correctly matched with their product?\n1. Kolbe reaction — salicylic acid\n2. Reimer-Tiemann reaction — salicylaldehyde\n3. Acetylation with acetic anhydride — phenyl acetate\n4. Reduction with zinc dust — cyclohexanol',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correctly matched. Statement 4 is false — reduction of phenol with zinc dust gives benzene, not cyclohexanol.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-140',
    type: 'how-many',
    question: 'How many of the following statements about electrophilic substitution reactions of phenol are correct?\n1. The -OH group is activating and ortho/para-directing.\n2. Nitration with dilute HNO3 gives predominantly ortho- and para-nitrophenol.\n3. Bromination with bromine water requires a Lewis acid catalyst, similar to benzene.\n4. ortho-Nitrophenol shows intramolecular hydrogen bonding, making it more steam-volatile than the para isomer.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — phenol reacts readily with bromine water without needing a catalyst, unlike benzene.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-141',
    type: 'how-many',
    question: 'How many of the following statements about the Williamson ether synthesis are correct?\n1. It involves an alkyl halide reacting with a metal alkoxide.\n2. It proceeds via an SN2 mechanism.\n3. Bulky/tertiary alkyl halides are preferred for preparing unsymmetrical ethers to maximise yield.\n4. Primary or methyl alkyl halides are generally preferred to minimise competing elimination.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — bulky/tertiary alkyl halides are actually avoided in this synthesis, since they favour elimination over substitution.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-142',
    type: 'how-many',
    question: 'How many of the following statements about cleavage of ethers are correct?\n1. Ethers can be cleaved by strong acids such as HI, especially with heating.\n2. Cleavage of ethers with primary/methyl alkyl groups generally proceeds via SN2.\n3. Cleavage of ethers with tertiary/benzylic/allylic alkyl groups generally proceeds via SN1.\n4. Cleavage of anisole with excess HI gives iodobenzene and methanol.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — cleavage of anisole with excess HI actually gives phenol and methyl iodide, since the aryl-oxygen bond is stronger and resists cleavage.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-143',
    type: 'how-many',
    question: 'How many of the following statements about bond angles in alcohols and ethers are correct?\n1. The C-O-H bond angle in alcohols is slightly greater than the tetrahedral angle.\n2. The C-O-C bond angle in ethers is greater than the C-O-H bond angle in alcohols.\n3. This trend arises due to increasing steric repulsion from bulkier groups attached to oxygen.\n4. Bond angles at the ether/alcohol oxygen are completely unrelated to the size of attached groups.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts the established relationship between bond angle and steric bulk of attached groups.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-144',
    type: 'how-many',
    question: 'How many of the following statements about dehydration and elimination reactions of alcohols are correct?\n1. Dehydration ease follows the order tertiary > secondary > primary.\n2. Dehydration typically follows Zaitsev\'s rule, favouring the more substituted alkene.\n3. Dehydration of alcohols always proceeds via an SN2-type mechanism.\n4. Dehydration mechanism generally parallels carbocation stability.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — acid-catalysed alcohol dehydration typically proceeds via an E1 (carbocation-based) mechanism, not SN2.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-145',
    type: 'how-many',
    question: 'How many of the following statements about vicinal diols are correct?\n1. They can be prepared from alkenes using cold, dilute alkaline KMnO4.\n2. Periodic acid can cleave the C-C bond between the two hydroxyl-bearing carbons.\n3. Oxidative cleavage of a vicinal diol gives carbonyl compounds.\n4. Vicinal diols cannot be cleaved by any oxidising agent.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts the well-established periodic acid cleavage reaction of vicinal diols.',
    difficulty: 'hard'
  },
  {
    id: 'alcohol-146',
    type: 'how-many',
    question: 'How many of the following statements about substituent effects on phenol acidity are correct?\n1. para-Nitrophenol is more acidic than phenol.\n2. para-Cresol is more acidic than phenol.\n3. Electron-withdrawing groups stabilise the phenoxide ion.\n4. Electron-donating groups destabilise the phenoxide ion.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 3, and 4 are correct. Statement 2 is false — para-cresol is actually less acidic than phenol, since the electron-donating methyl group destabilises the phenoxide ion.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-147',
    type: 'how-many',
    question: 'How many of the following statements about esterification and related reactions are correct?\n1. Fischer esterification is a reversible, acid-catalysed reaction between an alcohol and a carboxylic acid.\n2. Acetylation of phenol with acetic anhydride gives phenyl acetate.\n3. Alcohols react with sodium metal to release hydrogen gas.\n4. Esters, once formed from Fischer esterification, can never be hydrolysed back to the alcohol and acid.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — esters can indeed be hydrolysed back to the alcohol and acid, which is exactly why Fischer esterification is described as reversible.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-148',
    type: 'how-many',
    question: 'How many of the following statements about industrial and laboratory preparation methods are correct?\n1. The Williamson synthesis is a general method for preparing ethers.\n2. Intermolecular dehydration of primary alcohols at controlled lower temperature gives symmetrical ethers.\n3. The Dow\'s process and cumene process are both methods for preparing phenol.\n4. The Kolbe reaction and Reimer-Tiemann reaction are both methods for preparing ethers.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the Kolbe and Reimer-Tiemann reactions are methods for functionalising phenol (giving salicylic acid and salicylaldehyde respectively), not for preparing ethers.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-149',
    type: 'how-many',
    question: 'How many of the following statements about the alkoxy group in aryl ethers (such as anisole) are correct?\n1. It behaves similarly to the -OH group of phenol in electrophilic aromatic substitution.\n2. It is an activating and ortho/para-directing group.\n3. It donates electron density into the ring via resonance.\n4. It deactivates the ring and directs substitution to the meta position.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts the well-established activating, ortho/para-directing behaviour of the alkoxy group.',
    difficulty: 'medium'
  },
  {
    id: 'alcohol-150',
    type: 'how-many',
    question: 'How many of the following statements correctly summarise key themes of the alcohols, phenols, and ethers chapter?\n1. Classification of alcohols is based on the number of -OH groups and the nature of the hydroxyl-bearing carbon.\n2. Preparation methods include hydration/hydroboration of alkenes, reduction of carbonyls, Grignard reactions, and (for phenols) the Dow\'s and cumene processes.\n3. Reactivity of alcohols (dehydration, oxidation, esterification) and phenols (acidity, electrophilic substitution, Kolbe/Reimer-Tiemann reactions) both trace back to the hydroxyl functional group.\n4. Ethers are generally reactive and undergo frequent spontaneous decomposition at room temperature.\n5. Cleavage of unsymmetrical ethers by HI depends on whether the alkyl group favours an SN1 or SN2 pathway.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, 3, and 5 correctly summarise major themes of the chapter. Statement 4 is false — ethers are generally quite unreactive (inert) and stable at room temperature, not prone to spontaneous decomposition.',
    difficulty: 'medium'
  }
];
>>>>>>> 9e6ae6a5ea2181b313543ecdc8c39b664ed24496
