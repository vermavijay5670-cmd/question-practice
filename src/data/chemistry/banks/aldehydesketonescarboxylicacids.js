<<<<<<< HEAD
export const ALDEHYDES_KETONES_CARBOXYLICACIDES = [
  // ==================== MCQ (70) ====================
  {
    id: 'carbonyl-1',
    type: 'mcq',
    question: 'In an aldehyde or ketone, the carbonyl carbon atom is',
    options: ['not hybridised at all', 'sp hybridised', 'sp3 hybridised', 'sp2 hybridised, with a trigonal planar geometry'],
    correctIndex: 3,
    explanation: 'The carbonyl carbon in aldehydes and ketones is sp2 hybridised, giving it a trigonal planar geometry with bond angles close to 120°.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-2',
    type: 'mcq',
    question: 'The carbon-oxygen double bond in a carbonyl group is polarised such that',
    options: [
      'the carbon atom bears a partial negative charge and oxygen bears a partial positive charge',
      'the carbon atom bears a partial positive charge and oxygen bears a partial negative charge',
      'both atoms are completely neutral',
      'the bond is entirely non-polar'
    ],
    correctIndex: 1,
    explanation: 'Since oxygen is more electronegative than carbon, the carbonyl carbon carries a partial positive charge and oxygen carries a partial negative charge, making the carbon electrophilic.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-3',
    type: 'mcq',
    question: 'The electrophilic character of the carbonyl carbon is the primary reason why aldehydes and ketones readily undergo',
    options: ['electrophilic addition reactions', 'free radical substitution reactions', 'elimination reactions exclusively', 'nucleophilic addition reactions'],
    correctIndex: 3,
    explanation: 'Because the carbonyl carbon is electron-deficient (electrophilic), it is readily attacked by nucleophiles, making nucleophilic addition the characteristic reaction of the carbonyl group.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-4',
    type: 'mcq',
    question: 'Oxidation of a primary alcohol using a mild oxidising agent such as PCC gives',
    options: ['a carboxylic acid', 'an ether', 'a ketone', 'an aldehyde'],
    correctIndex: 3,
    explanation: 'PCC is a mild oxidant that stops the oxidation of a primary alcohol at the aldehyde stage, without further oxidation to the carboxylic acid.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-5',
    type: 'mcq',
    question: 'The Rosenmund reduction converts an acid chloride into an aldehyde using',
    options: [
      'sodium metal in dry ether',
      'concentrated sulphuric acid',
      'LiAlH4',
      'hydrogen gas in the presence of a palladium catalyst partially poisoned with barium sulphate'
    ],
    correctIndex: 3,
    explanation: 'The Rosenmund reduction uses H2 with a Pd catalyst on BaSO4 (a "poisoned" catalyst), which selectively reduces an acid chloride to an aldehyde without over-reduction to the alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-6',
    type: 'mcq',
    question: 'The catalyst used in the Rosenmund reduction is deliberately "poisoned" (partially deactivated) mainly to',
    options: [
      'speed up the reaction as much as possible',
      'prevent further reduction of the aldehyde product to the corresponding alcohol',
      'convert the acid chloride into a carboxylic acid instead',
      'ensure the reaction produces only carbon dioxide and water'
    ],
    correctIndex: 1,
    explanation: 'Partial poisoning of the palladium catalyst reduces its activity just enough to stop the reduction at the aldehyde stage, preventing over-reduction to the primary alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-7',
    type: 'mcq',
    question: 'The Stephen reaction converts a nitrile into an aldehyde using',
    options: [
      'hydrogen gas with a Pd catalyst',
      'concentrated nitric acid',
      'LiAlH4 at room temperature',
      'stannous chloride (SnCl2) and HCl, followed by hydrolysis'
    ],
    correctIndex: 3,
    explanation: 'The Stephen reaction reduces a nitrile to an imine intermediate using SnCl2/HCl, which is then hydrolysed to give the corresponding aldehyde.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-8',
    type: 'mcq',
    question: 'DIBAL-H (diisobutylaluminium hydride) is a reducing agent used, particularly at low temperature, to partially reduce esters or nitriles specifically to',
    options: ['amines', 'alkanes', 'carboxylic acids', 'aldehydes, stopping short of the fully reduced alcohol'],
    correctIndex: 3,
    explanation: 'DIBAL-H, when used at low temperature, forms a stable intermediate that, upon aqueous workup, yields the aldehyde rather than proceeding all the way to the alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-9',
    type: 'mcq',
    question: 'The Etard reaction converts toluene (or another methylbenzene) directly into benzaldehyde using',
    options: [
      'ozone, followed by zinc dust reduction',
      'sodium borohydride',
      'potassium permanganate',
      'chromyl chloride (CrO2Cl2), followed by hydrolysis'
    ],
    correctIndex: 3,
    explanation: 'The Etard reaction uses chromyl chloride to oxidise the methyl group of toluene directly to an aldehyde group (via an intermediate complex), avoiding over-oxidation to the carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-10',
    type: 'mcq',
    question: 'The Gattermann-Koch reaction converts benzene directly into benzaldehyde using',
    options: [
      'chromyl chloride',
      'ozone, followed by reductive workup',
      'sodium cyanide and hydrochloric acid',
      'carbon monoxide and hydrogen chloride gas, in the presence of anhydrous AlCl3 and CuCl'
    ],
    correctIndex: 3,
    explanation: 'The Gattermann-Koch reaction is a special Friedel-Crafts-type formylation, using CO and HCl with anhydrous AlCl3/CuCl catalysts to introduce a -CHO group directly onto benzene.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-11',
    type: 'mcq',
    question: 'Ozonolysis of an alkene, followed by reductive workup with zinc dust and water, gives',
    options: [
      'a single alcohol product',
      'aldehydes and/or ketones, depending on the substitution pattern of the original alkene',
      'only carboxylic acids',
      'only alkanes'
    ],
    correctIndex: 1,
    explanation: 'Ozonolysis cleaves the C=C double bond, and reductive workup (with Zn/H2O) gives aldehydes and/or ketones, depending on how substituted each original alkene carbon was.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-12',
    type: 'mcq',
    question: 'In the reductive workup of ozonolysis, zinc dust is specifically used to',
    options: [
      'add extra oxygen atoms to the product',
      'convert the alkene into an alkyne first',
      'convert the intermediate ozonide directly into a carboxylic acid',
      'prevent further oxidation of any aldehyde product that is formed, by reducing any oxidising species like H2O2'
    ],
    correctIndex: 3,
    explanation: 'Zinc dust reduces the intermediate hydrogen peroxide (or similar oxidising species) generated during ozonide hydrolysis, preventing over-oxidation of any aldehyde product to a carboxylic acid.',
    difficulty: 'hard'
  },
  {
    id: 'carbonyl-13',
    type: 'mcq',
    question: 'Lower molecular mass aldehydes and ketones show appreciable solubility in water mainly because',
    options: [
      'they are completely non-polar molecules',
      'the carbonyl oxygen can form hydrogen bonds by accepting a hydrogen bond from water molecules',
      'they react chemically with water to form new compounds',
      'they have extremely high molecular mass'
    ],
    correctIndex: 1,
    explanation: 'Although aldehydes and ketones lack an O-H group themselves, the lone pairs on the carbonyl oxygen allow them to accept hydrogen bonds from water, giving lower members appreciable water solubility.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-14',
    type: 'mcq',
    question: 'Aldehydes and ketones generally have higher boiling points than hydrocarbons or ethers of comparable molecular mass, mainly because of',
    options: [
      'their extremely large molecular size compared to hydrocarbons',
      'the absence of any polar bond',
      'the presence of an O-H bond, allowing hydrogen bonding',
      'the polar carbon-oxygen double bond, which allows for dipole-dipole interactions between molecules'
    ],
    correctIndex: 3,
    explanation: 'The polar C=O bond enables dipole-dipole interactions between aldehyde/ketone molecules, raising their boiling points above those of comparable non-polar hydrocarbons or ethers.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-15',
    type: 'mcq',
    question: 'Compared to alcohols of similar molecular mass, aldehydes and ketones generally have',
    options: [
      'much higher boiling points, since they can hydrogen bond with each other',
      'lower boiling points, since they cannot hydrogen bond with each other (lacking an O-H group)',
      'boiling points that are impossible to compare',
      'exactly the same boiling points'
    ],
    correctIndex: 1,
    explanation: 'Since aldehydes and ketones cannot hydrogen bond with each other (only dipole-dipole interactions are possible between them), they generally have lower boiling points than comparable alcohols, which can hydrogen bond.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-16',
    type: 'mcq',
    question: 'Addition of hydrogen cyanide (HCN) to an aldehyde or ketone gives',
    options: ['an ester', 'an amide', 'an alcohol', 'a cyanohydrin'],
    correctIndex: 3,
    explanation: 'Nucleophilic addition of HCN to a carbonyl compound gives a cyanohydrin, in which -CN and -OH are added across the C=O bond.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-17',
    type: 'mcq',
    question: 'Sodium bisulphite (NaHSO3) addition compounds are readily formed with',
    options: [
      'all ketones, regardless of steric bulk',
      'aldehydes and methyl ketones, but generally not with more sterically hindered ketones',
      'only tertiary alcohols',
      'only aromatic hydrocarbons'
    ],
    correctIndex: 1,
    explanation: 'Bisulphite addition compounds form readily with aldehydes and methyl ketones, since these are less sterically hindered; bulkier ketones react poorly or not at all due to steric hindrance.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-18',
    type: 'mcq',
    question: 'Reaction of an aldehyde or ketone with excess alcohol in the presence of an acid catalyst, via a hemiacetal intermediate, gives',
    options: ['an ester', 'an acetal (or ketal), which can serve to "protect" the carbonyl group', 'a carboxylic acid', 'an amide'],
    correctIndex: 1,
    explanation: 'Acid-catalysed reaction with excess alcohol converts the carbonyl compound first to a hemiacetal and then to an acetal (or ketal), a useful protecting group strategy for the carbonyl functionality.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-19',
    type: 'mcq',
    question: 'Reaction of an aldehyde or ketone with hydroxylamine (NH2OH) gives',
    options: ['an acetal', 'a semicarbazone', 'a hydrazone', 'an oxime'],
    correctIndex: 3,
    explanation: 'Hydroxylamine reacts with a carbonyl compound via condensation to form an oxime (>C=N-OH).',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-20',
    type: 'mcq',
    question: 'Reaction of an aldehyde or ketone with semicarbazide (NH2NHCONH2) gives a derivative called a',
    options: ['hydrazone', 'oxime', 'nitrile', 'semicarbazone, often used as a solid crystalline derivative for characterisation'],
    correctIndex: 3,
    explanation: 'Semicarbazide reacts with carbonyl compounds to form semicarbazones, which are often solid, easily purified derivatives useful for identifying and characterising aldehydes and ketones.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-21',
    type: 'mcq',
    question: 'Aldehydes are generally more reactive towards nucleophilic addition than ketones, mainly due to a combination of',
    options: [
      'aldehydes having a much larger molecular size than ketones',
      'less steric hindrance and less electron donation from alkyl/aryl substituents (making the carbonyl carbon more electrophilic) in aldehydes',
      'aldehydes lacking a carbonyl group entirely',
      'greater steric hindrance and greater electron donation from substituents in aldehydes'
    ],
    correctIndex: 1,
    explanation: 'Aldehydes are less hindered (bearing at most one bulky group and a hydrogen) and have less electron-donating alkyl substitution around the carbonyl carbon, making them more electrophilic and hence more reactive towards nucleophilic addition than ketones.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-22',
    type: 'mcq',
    question: 'Among aldehydes, formaldehyde (HCHO) is generally the most reactive towards nucleophilic addition because it',
    options: [
      'cannot undergo nucleophilic addition at all',
      'has the highest molecular mass among aldehydes',
      'is the least polar of all aldehydes',
      'has no alkyl or aryl substituents at all, minimising both steric hindrance and electron donation to the carbonyl carbon'
    ],
    correctIndex: 3,
    explanation: 'With no substituents other than hydrogen atoms, formaldehyde experiences minimal steric hindrance and no electron-donating alkyl group effects, making its carbonyl carbon the most electrophilic and reactive among aldehydes.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-23',
    type: 'mcq',
    question: 'The Clemmensen reduction converts a carbonyl group (C=O) directly into a methylene group (CH2) using',
    options: [
      'sodium borohydride',
      'zinc amalgam (Zn-Hg) and concentrated hydrochloric acid, under acidic conditions',
      'hydrazine and potassium hydroxide, under basic conditions',
      'lithium aluminium hydride'
    ],
    correctIndex: 1,
    explanation: 'The Clemmensen reduction uses zinc amalgam and concentrated HCl to fully reduce a carbonyl group to a methylene group, under strongly acidic conditions.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-24',
    type: 'mcq',
    question: 'The Wolff-Kishner reduction converts a carbonyl group (C=O) directly into a methylene group (CH2) using',
    options: [
      'zinc amalgam and hydrochloric acid',
      'hydrazine (NH2NH2) and a strong base (such as KOH), typically with heating',
      'lithium aluminium hydride',
      'sodium bisulphite'
    ],
    correctIndex: 1,
    explanation: 'The Wolff-Kishner reduction converts a carbonyl group to a methylene group using hydrazine to first form a hydrazone, which is then decomposed under strongly basic conditions with heat.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-25',
    type: 'mcq',
    question: 'For a substrate that is sensitive to strongly acidic conditions but stable under basic conditions, the preferred method to reduce a carbonyl group to a methylene group would be',
    options: [
      'Clemmensen reduction, since it uses acidic conditions',
      'Wolff-Kishner reduction, since it uses basic conditions',
      'neither method can be used under any circumstances',
      'catalytic hydrogenation only'
    ],
    correctIndex: 1,
    explanation: 'Since Wolff-Kishner reduction proceeds under basic conditions, it is the preferred choice for substrates that are stable to base but would be damaged by the strongly acidic conditions of Clemmensen reduction.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-26',
    type: 'mcq',
    question: 'Aldehydes are readily oxidised to carboxylic acids by mild oxidising agents, such as Tollens\' reagent, mainly because',
    options: [
      'aldehydes have no hydrogen atoms at all on the carbonyl carbon',
      'aldehydes are completely resistant to any form of oxidation',
      'ketones oxidise more readily than aldehydes under all conditions',
      'the aldehyde carbon still bears a hydrogen atom that can be removed relatively easily during oxidation'
    ],
    correctIndex: 3,
    explanation: 'The presence of a hydrogen atom directly on the carbonyl carbon of an aldehyde makes it susceptible to relatively easy oxidation to a carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-27',
    type: 'mcq',
    question: 'Ketones generally resist oxidation under mild conditions mainly because',
    options: [
      'ketones do not actually possess a carbonyl group',
      'ketones have too many hydrogen atoms on the carbonyl carbon',
      'ketones spontaneously decompose before any oxidation can occur',
      'the carbonyl carbon in a ketone has no hydrogen atom attached, so oxidation without breaking a C-C bond is not possible under mild conditions'
    ],
    correctIndex: 3,
    explanation: 'Since the carbonyl carbon of a ketone has no hydrogen attached, mild oxidation cannot proceed as it does for aldehydes; oxidative cleavage of a ketone requires much more vigorous conditions.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-28',
    type: 'mcq',
    question: 'A positive Tollens\' test is observed as',
    options: [
      'the formation of a brick-red precipitate',
      'the deposition of a shiny silver mirror on the inside of the test tube',
      'a yellow crystalline precipitate',
      'the evolution of a colourless gas'
    ],
    correctIndex: 1,
    explanation: 'In the Tollens\' test, an aldehyde reduces the ammoniacal silver nitrate reagent, depositing metallic silver as a characteristic silver mirror on the test tube.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-29',
    type: 'mcq',
    question: 'A positive Fehling\'s test is observed as the formation of',
    options: [
      'a colourless solution with no visible change',
      'a brick-red precipitate of cuprous oxide (Cu2O)',
      'a yellow precipitate of iodoform',
      'a shiny silver mirror'
    ],
    correctIndex: 1,
    explanation: 'A positive Fehling\'s test produces a brick-red precipitate of Cu2O, as the aldehyde reduces the alkaline copper(II) tartrate complex.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-30',
    type: 'mcq',
    question: 'Aromatic aldehydes, such as benzaldehyde, generally give a positive Tollens\' test but typically do NOT give a positive result with',
    options: ['sodium bisulphite addition', 'hydroxylamine condensation to form an oxime', 'the iodoform test', 'Fehling\'s solution'],
    correctIndex: 3,
    explanation: 'Aromatic aldehydes generally give a positive Tollens\' test, but they typically do not give a positive Fehling\'s test, which is more characteristic of aliphatic aldehydes.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-31',
    type: 'mcq',
    question: 'Ketones, unlike aldehydes, generally give a',
    options: [
      'positive test with both Tollens\' and Fehling\'s reagents',
      'negative Tollens\' test and negative Fehling\'s test, since they lack a readily removable hydrogen on the carbonyl carbon',
      'positive Fehling\'s test but negative Tollens\' test',
      'positive Tollens\' test'
    ],
    correctIndex: 1,
    explanation: 'Since ketones lack the readily removable hydrogen on the carbonyl carbon required for these mild oxidations, they generally give negative results with both Tollens\' and Fehling\'s reagents.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-32',
    type: 'mcq',
    question: 'The iodoform test gives a positive result (yellow precipitate of CHI3) specifically with compounds containing',
    options: [
      'any alcohol, regardless of its structure',
      'any aldehyde group, regardless of structure',
      'any carboxylic acid group',
      'a methyl ketone group (CH3-CO-) or a structural feature (like CH3-CH(OH)-) that can be oxidised in situ to a methyl ketone'
    ],
    correctIndex: 3,
    explanation: 'The iodoform test is specific to compounds bearing a methyl ketone group, or those (like certain secondary alcohols and acetaldehyde) that can be oxidised in situ under the reaction conditions to generate a methyl ketone-type structure.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-33',
    type: 'mcq',
    question: 'Among simple aldehydes, only acetaldehyde (CH3CHO) gives a positive iodoform test, mainly because',
    options: [
      'it is the only aldehyde that exists in nature',
      'it possesses the required CH3-CO- structural unit, unlike other aldehydes such as formaldehyde or propionaldehyde',
      'it has the highest molecular mass among aldehydes',
      'it cannot undergo any oxidation at all'
    ],
    correctIndex: 1,
    explanation: 'Acetaldehyde specifically has a methyl group directly attached to the carbonyl carbon (CH3-CHO), satisfying the structural requirement for a positive iodoform test, unlike most other aldehydes.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-34',
    type: 'mcq',
    question: 'Ethanol gives a positive iodoform test mainly because',
    options: [
      'ethanol has no relationship to the iodoform test at all',
      'ethanol is first oxidised in situ under the reaction conditions to acetaldehyde, which then gives the positive test',
      'ethanol itself directly reacts with iodine to give iodoform, without any oxidation step',
      'ethanol contains a methyl ketone group directly'
    ],
    correctIndex: 1,
    explanation: 'Under the alkaline hypoiodite conditions of the iodoform test, ethanol is oxidised in situ to acetaldehyde, which itself satisfies the structural requirement for a positive iodoform test.',
    difficulty: 'hard'
  },
  {
    id: 'carbonyl-35',
    type: 'mcq',
    question: 'A base-catalysed reaction in which two molecules of an aldehyde or ketone (each possessing an alpha-hydrogen) combine to give a beta-hydroxy carbonyl compound is called',
    options: ['Reimer-Tiemann reaction', 'Kolbe reaction', 'Cannizzaro reaction', 'aldol condensation'],
    correctIndex: 3,
    explanation: 'Aldol condensation involves the combination of two molecules of a carbonyl compound (each bearing at least one alpha-hydrogen) to form a beta-hydroxy aldehyde or ketone (the "aldol").',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-36',
    type: 'mcq',
    question: 'The beta-hydroxy carbonyl compound formed in aldol condensation can undergo dehydration (loss of water), giving',
    options: [
      'a saturated carboxylic acid',
      'an alpha,beta-unsaturated carbonyl compound',
      'an ether',
      'an alkane'
    ],
    correctIndex: 1,
    explanation: 'Loss of water from the aldol product generates an alpha,beta-unsaturated carbonyl compound (an enal or enone).',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-37',
    type: 'mcq',
    question: 'Aldol condensation specifically requires the reacting aldehyde or ketone to possess',
    options: [
      'no hydrogen atoms at all',
      'an aromatic ring',
      'a halogen substituent',
      'at least one alpha-hydrogen atom'
    ],
    correctIndex: 3,
    explanation: 'Aldol condensation depends on the presence of an alpha-hydrogen, which is removed by base to form the nucleophilic enolate that attacks another carbonyl molecule.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-38',
    type: 'mcq',
    question: 'A crossed aldol condensation between two different aldehydes or ketones, both of which possess alpha-hydrogens, generally gives',
    options: [
      'a single, clean crossed product with no side products',
      'a mixture of up to four possible products (two self-condensation products and two crossed products)',
      'no reaction occurs at all',
      'only carboxylic acid products'
    ],
    correctIndex: 1,
    explanation: 'When both carbonyl partners have alpha-hydrogens, self-condensation as well as crossed condensation can occur, typically producing a complex mixture of up to four different products.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-39',
    type: 'mcq',
    question: 'A clean, predominantly single-product crossed aldol condensation (Claisen-Schmidt reaction) can often be achieved when one of the carbonyl reactants is',
    options: [
      'a compound with no carbonyl group at all',
      'an aromatic aldehyde (like benzaldehyde) lacking alpha-hydrogens, reacting with an aliphatic carbonyl compound that has alpha-hydrogens',
      'a compound with multiple alpha-hydrogens',
      'a tertiary alcohol'
    ],
    correctIndex: 1,
    explanation: 'Using an aromatic aldehyde without alpha-hydrogens as one partner eliminates its ability to self-condense or act as the nucleophile, favouring clean formation of a single crossed aldol product.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-40',
    type: 'mcq',
    question: 'The Cannizzaro reaction is a disproportionation reaction observed specifically with',
    options: [
      'aldehydes possessing alpha-hydrogens',
      'ketones with multiple alpha-hydrogens',
      'carboxylic acids only',
      'aldehydes lacking any alpha-hydrogen atom, such as formaldehyde or benzaldehyde, when treated with concentrated alkali'
    ],
    correctIndex: 3,
    explanation: 'Since the Cannizzaro reaction requires the absence of alpha-hydrogens (so that no aldol pathway competes), it occurs with aldehydes like formaldehyde and benzaldehyde in the presence of concentrated alkali.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-41',
    type: 'mcq',
    question: 'In the Cannizzaro reaction, one molecule of the aldehyde is oxidised while another is simultaneously reduced, giving',
    options: [
      'a single molecule with no net change',
      'one molecule of the carboxylate salt and one molecule of the corresponding alcohol',
      'two molecules of the corresponding carboxylic acid',
      'two molecules of the corresponding alcohol'
    ],
    correctIndex: 1,
    explanation: 'In this self-disproportionation reaction, one aldehyde molecule is oxidised to the carboxylate salt, while another is simultaneously reduced to the corresponding alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-42',
    type: 'mcq',
    question: 'The carbonyl group (-CHO, -COR) attached to an aromatic ring generally acts, in electrophilic aromatic substitution reactions, as a',
    options: [
      'strongly activating and ortho/para-directing group',
      'strongly activating but meta-directing group',
      'group with no effect on the ring\'s reactivity',
      'deactivating and meta-directing group'
    ],
    correctIndex: 3,
    explanation: 'The electron-withdrawing carbonyl group deactivates the aromatic ring (via induction and resonance) and directs incoming electrophiles predominantly to the meta position.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-43',
    type: 'mcq',
    question: 'Nitration of benzaldehyde with a nitrating mixture gives predominantly',
    options: ['ortho-nitrobenzaldehyde', 'meta-nitrobenzaldehyde', 'para-nitrobenzaldehyde', 'an equal mixture of all three isomers'],
    correctIndex: 1,
    explanation: 'Since the -CHO group is meta-directing, nitration of benzaldehyde gives predominantly the meta-substituted product, meta-nitrobenzaldehyde.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-44',
    type: 'mcq',
    question: 'Oxidation of an alkylbenzene (such as toluene or ethylbenzene) with a strong oxidising agent such as KMnO4 or K2Cr2O7 gives, regardless of the length of the alkyl side chain,',
    options: [
      'a substituted phenol',
      'a nitrobenzene derivative',
      'a mixture of unpredictable products',
      'benzoic acid, since the oxidation always stops at the ring carbon bearing the side chain'
    ],
    correctIndex: 3,
    explanation: 'Regardless of the length of the alkyl side chain (as long as there is at least one benzylic hydrogen), strong oxidation of an alkylbenzene always cleaves the side chain down to give a carboxylic acid group directly on the ring, forming benzoic acid.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-45',
    type: 'mcq',
    question: 'Carboxylic acids can be prepared from nitriles by',
    options: [
      'reaction with hydrogen gas and a Pd catalyst',
      'acidic or basic hydrolysis, followed by acidification if a basic hydrolysis was used',
      'simple exposure to air with no other reagents',
      'reaction with sodium metal'
    ],
    correctIndex: 1,
    explanation: 'Hydrolysis of a nitrile, under either acidic or basic conditions (with subsequent acidification for basic hydrolysis), converts the -CN group into a -COOH group.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-46',
    type: 'mcq',
    question: 'Reaction of a Grignard reagent with dry ice (solid carbon dioxide), followed by acidic workup, gives',
    options: ['an alcohol', 'an aldehyde', 'an ether', 'a carboxylic acid, containing one more carbon atom than the original Grignard reagent'],
    correctIndex: 3,
    explanation: 'A Grignard reagent adds to carbon dioxide to form a magnesium carboxylate, which upon acidic workup gives a carboxylic acid with one additional carbon atom compared to the original alkyl/aryl group.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-47',
    type: 'mcq',
    question: 'Carboxylic acids are generally more acidic than phenols mainly because',
    options: [
      'phenols cannot lose a proton at all',
      'the carboxylate ion has two exactly equivalent resonance structures with the negative charge equally delocalised over both oxygen atoms, providing greater stabilisation than the phenoxide ion',
      'carboxylic acids have a much higher molecular mass than phenols',
      'carboxylic acids contain no oxygen atoms'
    ],
    correctIndex: 1,
    explanation: 'The two resonance structures of the carboxylate ion are exactly equivalent, allowing the negative charge to be shared equally between two electronegative oxygen atoms, providing more effective stabilisation than the resonance available to phenoxide (where the negative charge is partly delocalised onto less electronegative ring carbons).',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-48',
    type: 'mcq',
    question: 'The general order of acid strength among carboxylic acids, carbonic acid, phenols, and simple alcohols is best represented as',
    options: [
      'phenols > carboxylic acids > carbonic acid > alcohols',
      'alcohols > phenols > carbonic acid > carboxylic acids',
      'carbonic acid > carboxylic acids > alcohols > phenols',
      'carboxylic acids > carbonic acid > phenols > alcohols'
    ],
    correctIndex: 3,
    explanation: 'Carboxylic acids are generally the strongest of this group, followed by carbonic acid, then phenols, with simple alcohols being the weakest acids among them.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-49',
    type: 'mcq',
    question: 'The presence of an electron-withdrawing group, such as a halogen, on the carbon chain of a carboxylic acid generally',
    options: [
      'decreases the acidity of the carboxylic acid',
      'increases the acidity of the carboxylic acid, through an inductive electron-withdrawing effect that stabilises the carboxylate ion',
      'has no effect whatsoever on acidity',
      'converts the carboxylic acid into a base'
    ],
    correctIndex: 1,
    explanation: 'An electron-withdrawing substituent stabilises the negative charge on the carboxylate ion via an inductive effect, increasing the acidity of the carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-50',
    type: 'mcq',
    question: 'The inductive effect of an electron-withdrawing substituent on carboxylic acid acidity is generally strongest when the substituent is',
    options: [
      'located on a completely different, unconnected molecule',
      'located as far from the -COOH group as possible',
      'unrelated to distance from the -COOH group',
      'located close to the -COOH group (such as at the alpha-carbon), since the inductive effect weakens rapidly with increasing distance'
    ],
    correctIndex: 3,
    explanation: 'Since inductive effects are transmitted through sigma bonds and weaken rapidly with distance, a substituent located closer to the -COOH group (such as at the alpha-carbon) has the greatest effect on acidity.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-51',
    type: 'mcq',
    question: 'The presence of an electron-donating alkyl group on a carboxylic acid generally',
    options: [
      'increases the acidity of the carboxylic acid',
      'decreases the acidity of the carboxylic acid, since it destabilises the negative charge on the carboxylate ion',
      'converts the carboxylic acid into a strong base',
      'has no effect whatsoever'
    ],
    correctIndex: 1,
    explanation: 'Electron-donating alkyl groups intensify the negative charge on the carboxylate ion, destabilising it and thereby decreasing the acidity of the carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-52',
    type: 'mcq',
    question: 'Reaction of a carboxylic acid with thionyl chloride (SOCl2) gives',
    options: ['an ester', 'a carboxylate salt', 'an amide', 'an acid chloride, along with SO2 and HCl gases as by-products'],
    correctIndex: 3,
    explanation: 'Thionyl chloride converts a carboxylic acid into the corresponding acid chloride, with SO2 and HCl escaping as gaseous by-products, similar to its analogous use with alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-53',
    type: 'mcq',
    question: 'Reaction of a carboxylic acid with an alcohol, in the presence of an acid catalyst, is the basis of',
    options: [
      'the Cannizzaro reaction',
      'the Rosenmund reduction',
      'the Wolff-Kishner reduction',
      'Fischer esterification, giving an ester and water'
    ],
    correctIndex: 3,
    explanation: 'Fischer esterification is the acid-catalysed reaction between a carboxylic acid and an alcohol to give an ester and water, as also described in the alcohols chapter.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-54',
    type: 'mcq',
    question: 'Reduction of a carboxylic acid to a primary alcohol requires a strong reducing agent, typically',
    options: [
      'zinc amalgam and HCl',
      'lithium aluminium hydride (LiAlH4), since NaBH4 is generally not strong enough to reduce carboxylic acids under normal conditions',
      'PCC, an oxidising agent unrelated to reduction',
      'sodium borohydride (NaBH4), which readily accomplishes this reduction'
    ],
    correctIndex: 1,
    explanation: 'Carboxylic acids require the strong reducing agent LiAlH4 to be converted to primary alcohols; the milder NaBH4 is generally insufficient for this particular reduction.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-55',
    type: 'mcq',
    question: 'The Hell-Volhard-Zelinsky (HVZ) reaction introduces a halogen atom at the alpha-carbon of a carboxylic acid, using',
    options: [
      'sodium hypohalite alone',
      'a halogen (Cl2 or Br2) in the presence of red phosphorus',
      'concentrated sulphuric acid',
      'hydrogen gas with a Pd catalyst'
    ],
    correctIndex: 1,
    explanation: 'The HVZ reaction uses a halogen (typically Br2 or Cl2) with a catalytic amount of red phosphorus to selectively introduce a halogen at the alpha-position of a carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-56',
    type: 'mcq',
    question: 'Heating the sodium salt of a carboxylic acid with soda lime (a mixture of NaOH and CaO) leads to',
    options: [
      'reduction to the corresponding alcohol',
      'esterification',
      'oxidation to a dicarboxylic acid',
      'decarboxylation, giving an alkane with one carbon fewer than the parent acid'
    ],
    correctIndex: 3,
    explanation: 'Heating a sodium carboxylate with soda lime causes decarboxylation, releasing carbon dioxide and forming an alkane with one fewer carbon atom than the original acid.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-57',
    type: 'mcq',
    question: 'Which of the following correctly lists a series of carbonyl group derivatives (all formed by condensation of a carbonyl compound with a nitrogen nucleophile)?',
    options: [
      'ester, ether, acetal',
      'alkene, alkyne, alkane',
      'alkyl halide, alcohol, carboxylic acid',
      'oxime, hydrazone, semicarbazone'
    ],
    correctIndex: 3,
    explanation: 'Oximes, hydrazones, and semicarbazones are all condensation products formed between a carbonyl compound and a nitrogen-containing nucleophile (hydroxylamine, hydrazine derivatives, and semicarbazide, respectively).',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-58',
    type: 'mcq',
    question: 'Reduction of an aldehyde or ketone using a reagent such as NaBH4 or LiAlH4 gives, respectively,',
    options: [
      'a carboxylic acid or an ester',
      'a primary alcohol from an aldehyde, and a secondary alcohol from a ketone',
      'an alkane in both cases',
      'a hydrocarbon with no oxygen present'
    ],
    correctIndex: 1,
    explanation: 'Reduction of the carbonyl group in an aldehyde gives a primary alcohol, while reduction of a ketone gives a secondary alcohol, as covered previously in the alcohols chapter and revisited here for carbonyl compounds.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-59',
    type: 'mcq',
    question: 'Catalytic hydrogenation (H2 with a metal catalyst such as Pt, Pd, or Ni) of an aldehyde or ketone reduces the carbonyl group to give',
    options: [
      'the corresponding carboxylic acid',
      'the corresponding alcohol',
      'no reaction occurs at all',
      'the corresponding alkane, directly, in one step under mild conditions'
    ],
    correctIndex: 1,
    explanation: 'Catalytic hydrogenation of the carbonyl group in an aldehyde or ketone reduces it to the corresponding alcohol (primary from aldehyde, secondary from ketone).',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-60',
    type: 'mcq',
    question: 'The nucleophilic addition of a Grignard reagent to an aldehyde or ketone, followed by acidic hydrolysis, gives',
    options: ['an ester', 'a carboxylic acid', 'an ether', 'an alcohol'],
    correctIndex: 3,
    explanation: 'Grignard reagent addition to a carbonyl compound, followed by aqueous acidic workup, gives the corresponding alcohol, as covered earlier for both alcohols and now revisited in the context of carbonyl reactivity.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-61',
    type: 'mcq',
    question: 'The nomenclature suffix used for naming an aldehyde in IUPAC nomenclature is',
    options: ['-oic acid', '-al', '-ol', '-one'],
    correctIndex: 1,
    explanation: 'IUPAC nomenclature uses the suffix "-al" to indicate the presence of an aldehyde group in a compound.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-62',
    type: 'mcq',
    question: 'The nomenclature suffix used for naming a ketone in IUPAC nomenclature is',
    options: ['-al', '-one', '-oic acid', '-amine'],
    correctIndex: 1,
    explanation: 'IUPAC nomenclature uses the suffix "-one" to indicate the presence of a ketone group in a compound.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-63',
    type: 'mcq',
    question: 'The nomenclature suffix used for naming a carboxylic acid in IUPAC nomenclature is',
    options: ['-ol', '-al', '-one', '-oic acid'],
    correctIndex: 3,
    explanation: 'IUPAC nomenclature uses the suffix "-oic acid" to indicate the presence of a carboxylic acid group in a compound.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-64',
    type: 'mcq',
    question: 'When comparing carboxylic acids to aldehydes and ketones of similar molecular mass, carboxylic acids generally have',
    options: [
      'lower boiling points, since they cannot form hydrogen bonds',
      'higher boiling points, since carboxylic acid molecules can form strong intermolecular hydrogen bonds, often existing as dimers',
      'exactly the same boiling points',
      'boiling points that are impossible to compare due to different molecular formulas'
    ],
    correctIndex: 1,
    explanation: 'Carboxylic acids can form strong intermolecular hydrogen bonds (often existing as cyclic dimers in the vapour phase or in non-polar solvents), giving them significantly higher boiling points than aldehydes/ketones of similar molecular mass.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-65',
    type: 'mcq',
    question: 'Lower molecular mass carboxylic acids (such as formic and acetic acid) are generally',
    options: [
      'gases at room temperature',
      'completely insoluble in water',
      'insoluble in any solvent, polar or non-polar',
      'miscible with water in all proportions, due to their ability to hydrogen bond with water molecules'
    ],
    correctIndex: 3,
    explanation: 'Lower carboxylic acids, having small hydrocarbon portions and an -OH group capable of hydrogen bonding, are miscible with water in all proportions.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-66',
    type: 'mcq',
    question: 'Reaction of a carboxylic acid with ammonia, followed by heating (dehydration of the resulting ammonium salt), gives',
    options: ['an alcohol', 'an ester', 'a nitrile', 'an amide'],
    correctIndex: 3,
    explanation: 'Reaction of a carboxylic acid with ammonia first forms an ammonium carboxylate salt, which upon heating (dehydration) is converted into the corresponding amide.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-67',
    type: 'mcq',
    question: 'The alpha-halo carboxylic acid produced via the HVZ reaction is more acidic than the parent (unsubstituted) carboxylic acid mainly because',
    options: [
      'the halogen atom converts the compound into a base',
      'the electronegative halogen atom withdraws electron density inductively, stabilising the carboxylate ion',
      'the halogen atom donates electron density to the carboxylate ion',
      'halogens have no electronic effect on acidity whatsoever'
    ],
    correctIndex: 1,
    explanation: 'The inductive electron-withdrawing effect of the newly introduced halogen atom stabilises the resulting carboxylate ion, increasing the acidity of the alpha-halo acid compared to the parent acid.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-68',
    type: 'mcq',
    question: 'A key distinguishing chemical test that differentiates aldehydes from ketones, based on the ease of oxidation, is the',
    options: [
      'flame test',
      'litmus test',
      'bromine water test',
      'Tollens\' or Fehling\'s test, which give a positive result with (most) aldehydes but a negative result with ketones'
    ],
    correctIndex: 3,
    explanation: 'Since aldehydes are readily oxidised (having a hydrogen on the carbonyl carbon) while ketones generally are not under mild conditions, Tollens\' and Fehling\'s tests serve as reliable ways to distinguish between them.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-69',
    type: 'mcq',
    question: 'Under vigorous oxidative conditions (strong oxidants, high temperature), ketones can undergo oxidative cleavage of a carbon-carbon bond, giving',
    options: [
      'a single, pure alcohol product',
      'a mixture of carboxylic acids, generally with fewer carbon atoms than the original ketone',
      'the parent alkane, with no oxygen incorporated',
      'no reaction at all, since ketones cannot be oxidised under any conditions'
    ],
    correctIndex: 1,
    explanation: 'Under sufficiently vigorous conditions, ketones can undergo oxidative C-C bond cleavage on either side of the carbonyl group, yielding a mixture of carboxylic acids.',
    difficulty: 'hard'
  },
  {
    id: 'carbonyl-70',
    type: 'mcq',
    question: 'Overall, the chemistry of aldehydes, ketones, and carboxylic acids, as emphasised throughout this NCERT chapter, centres on',
    options: [
      'the electrophilic nature of the carbonyl carbon, governing nucleophilic addition, oxidation-reduction behaviour, condensation reactions, and (for carboxylic acids) acidity and derivative formation',
      'topics entirely unrelated to the carbonyl functional group',
      'only the physical appearance of these compounds',
      'only their industrial cost of manufacture'
    ],
    correctIndex: 0,
    explanation: 'The chapter integrates the structural and electronic basis of carbonyl reactivity with a wide range of chemical behaviours, from nucleophilic addition and redox reactions to condensation chemistry and the distinctive acidity and derivative chemistry of carboxylic acids.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'carbonyl-71',
    type: 'assertion-reason',
    question: 'Assertion (A): The carbonyl carbon in aldehydes and ketones is electrophilic.\nReason (R): Oxygen is more electronegative than carbon, polarising the C=O bond so that carbon bears a partial positive charge.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This electronegativity-driven polarisation is exactly why the carbonyl carbon carries a partial positive charge and behaves as an electrophile, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-72',
    type: 'assertion-reason',
    question: 'Assertion (A): The Rosenmund reduction uses a palladium catalyst that has been deliberately poisoned with barium sulphate.\nReason (R): Poisoning the catalyst reduces its activity just enough to stop the reduction at the aldehyde stage, preventing over-reduction to the alcohol.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This controlled reduction in catalyst activity is precisely why over-reduction is prevented, correctly explaining the purpose of catalyst poisoning stated in A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-73',
    type: 'assertion-reason',
    question: 'Assertion (A): DIBAL-H can be used to convert a nitrile or ester into an aldehyde.\nReason (R): At low temperature, DIBAL-H forms a stable intermediate that only releases the aldehyde upon aqueous workup, preventing further reduction to the alcohol.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The formation of this stable intermediate at low temperature is exactly why DIBAL-H achieves partial (rather than complete) reduction, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'carbonyl-74',
    type: 'assertion-reason',
    question: 'Assertion (A): Zinc dust is used during the workup of ozonolysis.\nReason (R): Zinc dust reduces any hydrogen peroxide (or similar oxidising species) generated, preventing over-oxidation of aldehyde products to carboxylic acids.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This reductive role of zinc dust, preventing unwanted over-oxidation, is exactly why it is included in the ozonolysis workup, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'carbonyl-75',
    type: 'assertion-reason',
    question: 'Assertion (A): Lower aldehydes and ketones are appreciably soluble in water.\nReason (R): The lone pairs on the carbonyl oxygen allow the molecule to accept hydrogen bonds from water, despite the carbonyl compound itself lacking an O-H group.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This ability to accept hydrogen bonds from water, despite lacking a donor O-H group, directly explains the observed water solubility of lower carbonyl compounds, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-76',
    type: 'assertion-reason',
    question: 'Assertion (A): Aldehydes and ketones have lower boiling points than alcohols of comparable molecular mass.\nReason (R): Aldehydes and ketones cannot form hydrogen bonds with each other, since they lack an O-H group.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The absence of hydrogen bonding capability between carbonyl compound molecules directly explains their lower boiling points compared to alcohols, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-77',
    type: 'assertion-reason',
    question: 'Assertion (A): Aldehydes are generally more reactive than ketones towards nucleophilic addition.\nReason (R): Ketones have two alkyl/aryl groups attached to the carbonyl carbon, which sterically hinder nucleophilic approach and electronically reduce the carbon\'s electrophilicity through electron donation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'These combined steric and electronic effects of the additional substituent in ketones directly account for their reduced reactivity compared to aldehydes, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-78',
    type: 'assertion-reason',
    question: 'Assertion (A): Formaldehyde is generally the most reactive carbonyl compound towards nucleophilic addition.\nReason (R): Formaldehyde has no alkyl or aryl substituents, minimising both steric hindrance and electron-donating effects on the carbonyl carbon.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The complete absence of substituents, and thus minimal steric/electronic deactivation, directly explains why formaldehyde is exceptionally reactive, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-79',
    type: 'assertion-reason',
    question: 'Assertion (A): Wolff-Kishner reduction is preferred over Clemmensen reduction for a substrate that is unstable under strongly acidic conditions.\nReason (R): Wolff-Kishner reduction is carried out under basic conditions, avoiding the strongly acidic environment used in Clemmensen reduction.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The use of basic rather than strongly acidic conditions is exactly why Wolff-Kishner reduction is chosen when a substrate cannot tolerate acid, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-80',
    type: 'assertion-reason',
    question: 'Assertion (A): Aldehydes are readily oxidised to carboxylic acids by mild oxidising agents.\nReason (R): The aldehyde carbon retains a hydrogen atom that can be removed relatively easily during the oxidation process.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The presence of this readily removable hydrogen atom on the carbonyl carbon is exactly why aldehydes are so easily oxidised, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-81',
    type: 'assertion-reason',
    question: 'Assertion (A): Ketones give a negative Tollens\' test.\nReason (R): Ketones lack a hydrogen atom on the carbonyl carbon, making the mild oxidation required for a positive Tollens\' test unfeasible under these conditions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The absence of the necessary carbonyl-carbon hydrogen directly explains why ketones cannot undergo this mild oxidation and therefore give a negative Tollens\' test, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-82',
    type: 'assertion-reason',
    question: 'Assertion (A): Acetaldehyde gives a positive iodoform test, but propionaldehyde does not.\nReason (R): Acetaldehyde has a methyl group directly attached to the carbonyl carbon (CH3-CHO), while propionaldehyde (CH3CH2CHO) does not have this specific structural feature.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This specific structural requirement for the iodoform test — a methyl group directly bonded to the carbonyl carbon — is exactly why acetaldehyde is positive while propionaldehyde is not, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-83',
    type: 'assertion-reason',
    question: 'Assertion (A): Ethanol gives a positive iodoform test.\nReason (R): Under the reaction conditions, ethanol is oxidised in situ to acetaldehyde, which then satisfies the structural requirement for a positive iodoform test.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This in situ oxidation pathway, converting ethanol to acetaldehyde before the iodoform reaction proceeds, directly explains the positive test result, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'carbonyl-84',
    type: 'assertion-reason',
    question: 'Assertion (A): Aldol condensation requires the presence of at least one alpha-hydrogen atom on the reacting carbonyl compound.\nReason (R): The alpha-hydrogen is removed by base to generate a nucleophilic enolate species, which then attacks the electrophilic carbon of another carbonyl molecule.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This mechanistic role of the alpha-hydrogen, enabling enolate formation, directly explains why it is a strict requirement for aldol condensation, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-85',
    type: 'assertion-reason',
    question: 'Assertion (A): A crossed aldol condensation between benzaldehyde and acetone gives a relatively clean, single major product.\nReason (R): Benzaldehyde has no alpha-hydrogens and therefore cannot undergo self-condensation or act as the enolate-forming nucleophile.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since benzaldehyde cannot form an enolate or self-condense, the only viable pathway is for acetone\'s enolate to attack benzaldehyde, giving a predominant single crossed product, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-86',
    type: 'assertion-reason',
    question: 'Assertion (A): Formaldehyde undergoes the Cannizzaro reaction when treated with concentrated alkali.\nReason (R): Formaldehyde has no alpha-hydrogen atoms, so it cannot undergo aldol condensation and instead undergoes self-disproportionation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The absence of an alternative aldol pathway (due to no alpha-hydrogen) is exactly what makes disproportionation via the Cannizzaro reaction the viable route for formaldehyde, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-87',
    type: 'assertion-reason',
    question: 'Assertion (A): The -CHO group on an aromatic ring is a meta-directing group in electrophilic aromatic substitution.\nReason (R): The carbonyl group withdraws electron density from the ring through both resonance and induction, deactivating the ortho and para positions relative to meta.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This electron withdrawal, which particularly destabilises positive charge at ortho and para positions in the arenium intermediate, is exactly why the carbonyl group directs substitution to the meta position, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-88',
    type: 'assertion-reason',
    question: 'Assertion (A): Oxidation of ethylbenzene with hot acidic KMnO4 gives benzoic acid, not phenylacetic acid.\nReason (R): Strong oxidation of an alkylbenzene side chain always stops at the ring carbon, cleaving away all additional carbons of the side chain, regardless of its original length.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This characteristic behaviour of side-chain oxidation, always yielding the carboxylic acid directly on the ring, correctly explains why ethylbenzene gives benzoic acid rather than a longer-chain acid, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-89',
    type: 'assertion-reason',
    question: 'Assertion (A): Carboxylic acids are more acidic than phenols.\nReason (R): The carboxylate ion has two exactly equivalent resonance structures, whereas the phenoxide ion\'s resonance structures involve delocalisation onto less electronegative ring carbons.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This more effective and symmetric charge delocalisation in the carboxylate ion, involving two equivalent, highly electronegative oxygen atoms, directly explains the greater acidity of carboxylic acids compared to phenols, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-90',
    type: 'assertion-reason',
    question: 'Assertion (A): Trichloroacetic acid (Cl3C-COOH) is significantly more acidic than acetic acid (CH3-COOH).\nReason (R): The three electronegative chlorine atoms withdraw electron density inductively, stabilising the corresponding carboxylate ion.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This strong inductive electron withdrawal by three chlorine atoms directly explains the substantially increased acidity of trichloroacetic acid relative to acetic acid, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-91',
    type: 'assertion-reason',
    question: 'Assertion (A): Reduction of a carboxylic acid to a primary alcohol requires LiAlH4 rather than NaBH4.\nReason (R): NaBH4 is a comparatively weaker reducing agent that is generally not strong enough to reduce the less electrophilic carboxylic acid carbonyl group under normal conditions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The comparatively weaker reducing power of NaBH4, insufficient for the less reactive carboxylic acid carbonyl, directly explains why the stronger LiAlH4 is required, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-92',
    type: 'assertion-reason',
    question: 'Assertion (A): The Hell-Volhard-Zelinsky reaction requires red phosphorus as a catalyst.\nReason (R): Red phosphorus reacts with the halogen to form a small amount of phosphorus trihalide, which converts the carboxylic acid into a more reactive acid halide intermediate, allowing enolisation and subsequent alpha-halogenation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This mechanistic role of red phosphorus, facilitating conversion to a more reactive acid halide intermediate, directly explains why it is required in the HVZ reaction, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'carbonyl-93',
    type: 'assertion-reason',
    question: 'Assertion (A): Carboxylic acids generally have higher boiling points than aldehydes or ketones of comparable molecular mass.\nReason (R): Carboxylic acid molecules can form strong intermolecular hydrogen bonds, often existing as stable dimers.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This strong intermolecular hydrogen bonding (including dimer formation) directly explains why carboxylic acids have notably higher boiling points than comparable aldehydes/ketones, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-94',
    type: 'assertion-reason',
    question: 'Assertion (A): Bisulphite addition compounds are readily formed with acetaldehyde but not with di-tert-butyl ketone.\nReason (R): Steric hindrance from the bulky tert-butyl groups in di-tert-butyl ketone prevents effective approach of the bisulphite nucleophile to the carbonyl carbon.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This steric hindrance from bulky substituents is exactly why bulkier ketones fail to form bisulphite addition compounds as readily as smaller aldehydes or methyl ketones, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-95',
    type: 'assertion-reason',
    question: 'Assertion (A): Aromatic aldehydes give a positive Tollens\' test but generally a negative Fehling\'s test.\nReason (R): Fehling\'s solution is not effective at oxidising aromatic aldehydes under the conditions typically used, unlike Tollens\' reagent.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This differing reactivity of the two mild oxidising reagents specifically towards aromatic aldehydes directly explains the observed distinction in test results, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-96',
    type: 'assertion-reason',
    question: 'Assertion (A): Semicarbazones are often used as solid derivatives to help characterise and identify aldehydes and ketones.\nReason (R): Semicarbazones typically form as crystalline solids with sharp, characteristic melting points, allowing convenient identification of the original carbonyl compound.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The crystalline nature and sharp melting points of semicarbazones directly explain their usefulness as identifiable, characterisable solid derivatives, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-97',
    type: 'assertion-reason',
    question: 'Assertion (A): A ketone cannot be readily oxidised to a carboxylic acid under mild conditions.\nReason (R): The carbonyl carbon of a ketone is bonded to two other carbon atoms and has no hydrogen attached, preventing simple oxidation of that carbon without breaking a C-C bond.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The absence of a hydrogen atom on the ketone carbonyl carbon is exactly why simple oxidation to a carboxylic acid is not feasible under mild conditions, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-98',
    type: 'assertion-reason',
    question: 'Assertion (A): Heating sodium acetate with soda lime gives methane.\nReason (R): This decarboxylation reaction removes the -COO- group as CO2, leaving behind an alkane with one carbon atom fewer than the original acid.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since sodium acetate has two carbons, decarboxylation (removing the -COO- as CO2) leaves a one-carbon alkane, methane, correctly explaining A via the mechanism described in R.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-99',
    type: 'assertion-reason',
    question: 'Assertion (A): Aldehydes and ketones can both be reduced to alcohols using sodium borohydride.\nReason (R): NaBH4 is a strong enough reducing agent to also readily reduce carboxylic acids to primary alcohols under the same conditions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 2,
    explanation: 'A is true — NaBH4 can indeed reduce both aldehydes and ketones to their respective alcohols. However, R is false — NaBH4 is generally not strong enough to reduce carboxylic acids under normal conditions; that requires the stronger LiAlH4.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-100',
    type: 'assertion-reason',
    question: 'Assertion (A): The reactivity and behaviour of aldehydes, ketones, and carboxylic acids can largely be traced back to the electronic and structural properties of the carbonyl group.\nReason (R): Variations in substituents around the carbonyl carbon (hydrogen, alkyl, aryl, or hydroxyl groups) directly determine reactivity patterns such as nucleophilic addition ease, oxidation behaviour, acidity, and derivative formation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'These structural variations around the shared carbonyl functional group, as detailed in R, directly account for the diverse but interconnected reactivity patterns observed across this class of compounds, correctly explaining A.',
    difficulty: 'medium'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'carbonyl-101',
    type: 'statement',
    question: 'Statement I: The carbonyl carbon in aldehydes and ketones is sp2 hybridised.\nStatement II: The carbonyl carbon is electrophilic due to the greater electronegativity of oxygen.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the hybridisation and electronic character of the carbonyl carbon.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-102',
    type: 'statement',
    question: 'Statement I: The Rosenmund reduction converts an acid chloride into an aldehyde.\nStatement II: The Stephen reaction converts a nitrile into an aldehyde using SnCl2/HCl.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe these standard methods for preparing aldehydes.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-103',
    type: 'statement',
    question: 'Statement I: DIBAL-H, used at low temperature, can reduce esters/nitriles to aldehydes.\nStatement II: DIBAL-H always fully reduces esters/nitriles all the way to primary alcohols, regardless of temperature.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the low-temperature control is specifically what allows DIBAL-H to stop at the aldehyde stage rather than proceeding to the alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-104',
    type: 'statement',
    question: 'Statement I: The Etard reaction converts toluene into benzaldehyde using chromyl chloride.\nStatement II: The Gattermann-Koch reaction converts benzene into benzaldehyde using CO and HCl with AlCl3/CuCl.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe these two named reactions for preparing benzaldehyde from different starting materials.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-105',
    type: 'statement',
    question: 'Statement I: Ozonolysis of an alkene followed by reductive workup (Zn/H2O) gives aldehydes and/or ketones.\nStatement II: Zinc dust in the ozonolysis workup helps prevent over-oxidation of any aldehyde product.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the ozonolysis reaction and the role of zinc dust in its workup.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-106',
    type: 'statement',
    question: 'Statement I: Aldehydes and ketones generally have higher boiling points than hydrocarbons of similar molecular mass.\nStatement II: Aldehydes and ketones generally have higher boiling points than alcohols of similar molecular mass.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct, due to dipole-dipole interactions from the polar C=O bond. Statement II is incorrect — alcohols, capable of hydrogen bonding, generally have higher boiling points than comparable aldehydes/ketones.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-107',
    type: 'statement',
    question: 'Statement I: Sodium bisulphite addition compounds form readily with aldehydes and methyl ketones.\nStatement II: Sodium bisulphite addition compounds form equally readily with all ketones, regardless of steric bulk.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — bulkier ketones generally do not form these addition compounds readily, due to steric hindrance.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-108',
    type: 'statement',
    question: 'Statement I: Aldehydes are generally more reactive than ketones towards nucleophilic addition.\nStatement II: This is due to a combination of lower steric hindrance and lower electron-donation from substituents in aldehydes compared to ketones.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe and explain the relative reactivity of aldehydes and ketones towards nucleophilic addition.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-109',
    type: 'statement',
    question: 'Statement I: Clemmensen reduction uses zinc amalgam and hydrochloric acid under acidic conditions.\nStatement II: Wolff-Kishner reduction uses hydrazine and a strong base under basic conditions.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe these two methods for reducing a carbonyl group directly to a methylene group.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-110',
    type: 'statement',
    question: 'Statement I: A positive Tollens\' test is indicated by the formation of a silver mirror.\nStatement II: A positive Fehling\'s test is indicated by the formation of a brick-red precipitate of Cu2O.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the visual indicators of a positive Tollens\' test and Fehling\'s test.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-111',
    type: 'statement',
    question: 'Statement I: Aromatic aldehydes generally give a positive Fehling\'s test.\nStatement II: Ketones generally give a positive Tollens\' test.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — aromatic aldehydes typically give a negative Fehling\'s test, and ketones generally give a negative (not positive) Tollens\' test.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-112',
    type: 'statement',
    question: 'Statement I: The iodoform test gives a positive result with acetaldehyde.\nStatement II: The iodoform test gives a positive result with ethanol, due to its in situ oxidation to acetaldehyde.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe positive results in the iodoform test for these specific compounds.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-113',
    type: 'statement',
    question: 'Statement I: Aldol condensation requires the presence of an alpha-hydrogen atom on the carbonyl compound.\nStatement II: The Cannizzaro reaction requires the absence of an alpha-hydrogen atom on the aldehyde.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the structural requirements for aldol condensation and the Cannizzaro reaction, respectively.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-114',
    type: 'statement',
    question: 'Statement I: The beta-hydroxy carbonyl compound formed in aldol condensation can dehydrate to give an alpha,beta-unsaturated carbonyl compound.\nStatement II: Crossed aldol condensation between two carbonyl compounds, both with alpha-hydrogens, generally gives a single clean product.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — such a crossed aldol condensation generally gives a mixture of up to four products, not a single clean product.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-115',
    type: 'statement',
    question: 'Statement I: In the Cannizzaro reaction, one molecule of aldehyde is oxidised to a carboxylate salt while another is reduced to an alcohol.\nStatement II: The Cannizzaro reaction is an example of a disproportionation reaction.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the mechanism and classification of the Cannizzaro reaction.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-116',
    type: 'statement',
    question: 'Statement I: The carbonyl group on an aromatic ring is an activating, ortho/para-directing group.\nStatement II: Nitration of benzaldehyde gives predominantly meta-nitrobenzaldehyde.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the carbonyl group is actually a deactivating, meta-directing group, not activating/ortho-para directing. Statement II correctly describes the outcome of benzaldehyde nitration.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-117',
    type: 'statement',
    question: 'Statement I: Oxidation of any alkylbenzene with strong oxidants always gives benzoic acid, regardless of the length of the alkyl side chain.\nStatement II: This occurs because the oxidation cleaves the side chain down to the ring carbon, regardless of chain length.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe and explain this characteristic outcome of strong oxidative side-chain degradation in alkylbenzenes.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-118',
    type: 'statement',
    question: 'Statement I: Carboxylic acids can be prepared from nitriles by hydrolysis.\nStatement II: Carboxylic acids can be prepared from Grignard reagents by reaction with carbon dioxide followed by acidic workup.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe standard methods for preparing carboxylic acids.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-119',
    type: 'statement',
    question: 'Statement I: Carboxylic acids are generally more acidic than phenols.\nStatement II: This is because the carboxylate ion has two equivalent resonance structures, providing more effective charge delocalisation than the phenoxide ion.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe and explain the greater acidity of carboxylic acids compared to phenols.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-120',
    type: 'statement',
    question: 'Statement I: Electron-withdrawing substituents on a carboxylic acid generally increase its acidity.\nStatement II: This inductive effect on acidity becomes stronger, not weaker, as the substituent is moved further away from the -COOH group.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the inductive effect actually weakens (not strengthens) as the substituent moves further from the -COOH group.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-121',
    type: 'statement',
    question: 'Statement I: Trichloroacetic acid is more acidic than acetic acid.\nStatement II: Electron-donating alkyl groups on a carboxylic acid generally increase its acidity.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — electron-donating alkyl groups actually decrease, not increase, carboxylic acid acidity.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-122',
    type: 'statement',
    question: 'Statement I: Carboxylic acids react with thionyl chloride to give an acid chloride.\nStatement II: Carboxylic acids react with alcohols in the presence of an acid catalyst (Fischer esterification) to give an ester.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe standard reactions used to convert carboxylic acids into important derivatives.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-123',
    type: 'statement',
    question: 'Statement I: NaBH4 is generally strong enough to reduce a carboxylic acid to a primary alcohol.\nStatement II: LiAlH4 is required to reduce a carboxylic acid to a primary alcohol under normal conditions.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — NaBH4 is generally not strong enough for this reduction. Statement II correctly identifies the stronger reducing agent required.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-124',
    type: 'statement',
    question: 'Statement I: The Hell-Volhard-Zelinsky reaction introduces a halogen at the alpha-carbon of a carboxylic acid.\nStatement II: This reaction requires red phosphorus as a catalyst.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the HVZ reaction and its catalytic requirement.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-125',
    type: 'statement',
    question: 'Statement I: Heating a sodium carboxylate salt with soda lime results in decarboxylation, giving an alkane.\nStatement II: The resulting alkane has one more carbon atom than the original carboxylic acid.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the resulting alkane has one fewer carbon atom, not one more, than the original acid, since the carboxyl carbon is lost as CO2.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-126',
    type: 'statement',
    question: 'Statement I: Carboxylic acids generally have higher boiling points than aldehydes and ketones of comparable molecular mass.\nStatement II: This is due to the ability of carboxylic acids to form strong intermolecular hydrogen bonds, often existing as dimers.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe and explain the elevated boiling points of carboxylic acids compared to aldehydes and ketones.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-127',
    type: 'statement',
    question: 'Statement I: Reaction of a carboxylic acid with ammonia, followed by heating, gives an amide.\nStatement II: This reaction proceeds through an intermediate ammonium carboxylate salt.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the mechanism and outcome of amide formation from a carboxylic acid and ammonia.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-128',
    type: 'statement',
    question: 'Statement I: Reduction of an aldehyde with NaBH4 or LiAlH4 gives a primary alcohol.\nStatement II: Reduction of a ketone with NaBH4 or LiAlH4 gives a secondary alcohol.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the outcome of hydride reduction of aldehydes and ketones.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-129',
    type: 'statement',
    question: 'Statement I: Ketones can never undergo any form of oxidative cleavage, regardless of the conditions used.\nStatement II: Under vigorous conditions with strong oxidants, ketones can undergo oxidative C-C bond cleavage to give a mixture of carboxylic acids.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — ketones can indeed undergo oxidative cleavage under sufficiently vigorous conditions. Statement II correctly describes this less common but real reaction pathway.',
    difficulty: 'hard'
  },
  {
    id: 'carbonyl-130',
    type: 'statement',
    question: 'Statement I: The reactivity of aldehydes, ketones, and carboxylic acids is largely governed by the electronic and structural properties of the carbonyl group.\nStatement II: Variations in substituents around the carbonyl carbon influence nucleophilic addition ease, oxidation behaviour, and acidity.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly summarise the central structure-reactivity relationships that unify this chapter\'s content.',
    difficulty: 'medium'
  },

  // ==================== HOW-MANY (20) ====================
  {
    id: 'carbonyl-131',
    type: 'how-many',
    question: 'How many of the following statements about the carbonyl group are correct?\n1. The carbonyl carbon is sp2 hybridised.\n2. The carbonyl carbon is electrophilic.\n3. The carbonyl oxygen bears a partial positive charge.\n4. Carbonyl compounds characteristically undergo nucleophilic addition reactions.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — the carbonyl oxygen bears a partial negative charge, not positive, since it is more electronegative than carbon.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-132',
    type: 'how-many',
    question: 'How many of the following methods correctly give an aldehyde as the product?\n1. Rosenmund reduction of an acid chloride\n2. Stephen reaction on a nitrile\n3. DIBAL-H reduction of an ester at low temperature\n4. Clemmensen reduction of a ketone',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 correctly describe methods for preparing aldehydes. Statement 4 is false — Clemmensen reduction of a ketone gives a hydrocarbon (methylene group), not an aldehyde.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-133',
    type: 'how-many',
    question: 'How many of the following statements about ozonolysis are correct?\n1. Ozonolysis cleaves the C=C double bond of an alkene.\n2. Reductive workup with Zn/H2O gives aldehydes and/or ketones.\n3. Zinc dust prevents over-oxidation of any aldehyde formed.\n4. Ozonolysis always gives only ketones, never aldehydes.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — ozonolysis can give aldehydes, ketones, or both, depending on the substitution of the original alkene.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-134',
    type: 'how-many',
    question: 'How many of the following statements about physical properties of aldehydes and ketones are correct?\n1. Lower members show appreciable water solubility due to hydrogen bond acceptance.\n2. Boiling points are generally higher than hydrocarbons of similar molecular mass.\n3. Boiling points are generally higher than alcohols of similar molecular mass.\n4. Aldehydes and ketones cannot form hydrogen bonds with each other.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — aldehydes/ketones generally have lower, not higher, boiling points than comparable alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-135',
    type: 'how-many',
    question: 'How many of the following statements about the reactivity of aldehydes versus ketones are correct?\n1. Aldehydes are generally more reactive towards nucleophilic addition.\n2. Ketones have greater steric hindrance around the carbonyl carbon.\n3. Alkyl groups on ketones donate electron density, reducing the electrophilicity of the carbonyl carbon.\n4. Formaldehyde is generally less reactive than acetone towards nucleophilic addition.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — formaldehyde is actually more reactive than acetone, since it has no substituents causing steric hindrance or electron donation.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-136',
    type: 'how-many',
    question: 'How many of the following statements about reduction methods for carbonyl compounds are correct?\n1. Clemmensen reduction uses acidic conditions (Zn-Hg/HCl).\n2. Wolff-Kishner reduction uses basic conditions (NH2NH2/KOH).\n3. Both methods convert a carbonyl group directly to a methylene group.\n4. Both methods are identical and interchangeable in all situations, regardless of substrate sensitivity.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the choice between the two methods depends specifically on whether the substrate is sensitive to acidic or basic conditions.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-137',
    type: 'how-many',
    question: 'How many of the following statements about oxidation tests for carbonyl compounds are correct?\n1. A positive Tollens\' test gives a silver mirror.\n2. A positive Fehling\'s test gives a brick-red Cu2O precipitate.\n3. Ketones generally give positive results in both Tollens\' and Fehling\'s tests.\n4. Aromatic aldehydes generally give a positive Tollens\' test but a negative Fehling\'s test.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — ketones generally give negative results in both tests, not positive.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-138',
    type: 'how-many',
    question: 'How many of the following compounds are correctly expected to give a positive iodoform test?\n1. Acetaldehyde (CH3CHO)\n2. Acetone (CH3COCH3)\n3. Ethanol (CH3CH2OH)\n4. Propionaldehyde (CH3CH2CHO)',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Acetaldehyde, acetone, and ethanol (statements 1, 2, and 3) all give a positive iodoform test. Propionaldehyde (statement 4) does not, since it lacks the required CH3-CO- structural feature.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-139',
    type: 'how-many',
    question: 'How many of the following statements about aldol condensation and the Cannizzaro reaction are correct?\n1. Aldol condensation requires the presence of an alpha-hydrogen.\n2. The Cannizzaro reaction requires the absence of an alpha-hydrogen.\n3. Crossed aldol condensation with two alpha-hydrogen-containing partners typically gives a clean single product.\n4. Benzaldehyde can act as the non-enolisable partner in a Claisen-Schmidt (crossed aldol) reaction.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — such a crossed aldol condensation typically gives a mixture of up to four products, not a single clean product.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-140',
    type: 'how-many',
    question: 'How many of the following statements about electrophilic aromatic substitution on aromatic carbonyl compounds are correct?\n1. The carbonyl group is a deactivating group.\n2. The carbonyl group is a meta-directing group.\n3. Nitration of benzaldehyde gives predominantly the meta isomer.\n4. The carbonyl group activates the ring towards electrophilic substitution.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the carbonyl group deactivates, rather than activates, the aromatic ring.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-141',
    type: 'how-many',
    question: 'How many of the following statements about carboxylic acid preparation are correct?\n1. Nitrile hydrolysis gives a carboxylic acid.\n2. Grignard reagents react with CO2, followed by acidic workup, to give a carboxylic acid.\n3. Oxidation of a primary alcohol with a strong oxidant can give a carboxylic acid.\n4. Oxidation of an alkylbenzene side chain always gives a carboxylic acid with the same number of carbons as the original side chain.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — oxidation of an alkylbenzene side chain, regardless of its original length, always cleaves down to give the carboxylic acid directly attached to the ring (benzoic acid), not one preserving the original side chain length.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-142',
    type: 'how-many',
    question: 'How many of the following statements about acidity of carboxylic acids are correct?\n1. Carboxylic acids are generally more acidic than phenols.\n2. The carboxylate ion has two equivalent resonance structures.\n3. Electron-withdrawing substituents increase carboxylic acid acidity.\n4. Electron-donating substituents increase carboxylic acid acidity.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — electron-donating substituents decrease, not increase, carboxylic acid acidity.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-143',
    type: 'how-many',
    question: 'How many of the following statements about carboxylic acid derivatives and reactions are correct?\n1. Reaction with SOCl2 gives an acid chloride.\n2. Fischer esterification gives an ester.\n3. Reaction with ammonia, followed by heating, gives an amide.\n4. LiAlH4 reduces a carboxylic acid to an aldehyde, stopping before the alcohol stage.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — LiAlH4 reduces a carboxylic acid all the way to a primary alcohol, not stopping at the aldehyde stage.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-144',
    type: 'how-many',
    question: 'How many of the following statements about the Hell-Volhard-Zelinsky (HVZ) reaction are correct?\n1. It introduces a halogen at the alpha-carbon of a carboxylic acid.\n2. It requires red phosphorus as a catalyst.\n3. The resulting alpha-halo acid is more acidic than the parent acid.\n4. The reaction can be carried out using Cl2 or Br2.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe the HVZ reaction, its reagents, mechanism, and the properties of its product.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-145',
    type: 'how-many',
    question: 'How many of the following statements about decarboxylation are correct?\n1. Heating a sodium carboxylate with soda lime gives an alkane.\n2. The resulting alkane has one fewer carbon atom than the original acid.\n3. Decarboxylation releases carbon dioxide gas.\n4. Decarboxylation always requires an oxidising agent, never a base like soda lime.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — decarboxylation via soda lime is a classic base-mediated reaction, and does not require an oxidising agent.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-146',
    type: 'how-many',
    question: 'How many of the following statements about IUPAC nomenclature suffixes are correctly matched?\n1. Aldehyde — "-al"\n2. Ketone — "-one"\n3. Carboxylic acid — "-oic acid"\n4. Alcohol — "-oic acid"',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correctly matched. Statement 4 is false — the correct suffix for an alcohol is "-ol", not "-oic acid".',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-147',
    type: 'how-many',
    question: 'How many of the following statements about nucleophilic addition derivatives of carbonyl compounds are correct?\n1. Reaction with HCN gives a cyanohydrin.\n2. Reaction with hydroxylamine gives an oxime.\n3. Reaction with semicarbazide gives a semicarbazone.\n4. Reaction with excess alcohol under acid catalysis gives an amide.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — reaction with excess alcohol under acid catalysis gives an acetal (or ketal), not an amide.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-148',
    type: 'how-many',
    question: 'How many of the following statements about ketone resistance to oxidation are correct?\n1. Ketones lack a hydrogen atom on the carbonyl carbon.\n2. Ketones generally resist mild oxidation.\n3. Under vigorous conditions, ketones can undergo oxidative C-C bond cleavage.\n4. Ketones can never be oxidised under any circumstances, no matter how vigorous the conditions.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — ketones can indeed undergo oxidative cleavage under sufficiently vigorous, strongly oxidising conditions.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-149',
    type: 'how-many',
    question: 'How many of the following statements about boiling points across functional groups (of comparable molecular mass) are correct?\n1. Carboxylic acids generally have higher boiling points than alcohols.\n2. Alcohols generally have higher boiling points than aldehydes/ketones.\n3. Aldehydes/ketones generally have higher boiling points than ethers or hydrocarbons.\n4. Ethers generally have higher boiling points than carboxylic acids.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct, reflecting the general trend of decreasing hydrogen-bonding/dipole strength across these functional groups. Statement 4 is false — carboxylic acids have much higher boiling points than ethers, not lower.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-150',
    type: 'how-many',
    question: 'How many of the following statements correctly summarise key themes of the aldehydes, ketones, and carboxylic acids chapter?\n1. The electrophilic carbonyl carbon underlies characteristic nucleophilic addition reactions.\n2. Oxidation state differences (aldehyde vs. ketone) explain differing reactivity towards mild oxidants like Tollens\' and Fehling\'s reagents.\n3. Aldol condensation and the Cannizzaro reaction both depend critically on the presence or absence of alpha-hydrogens.\n4. Carboxylic acid acidity and derivative chemistry (esters, amides, acid halides) stem from the properties of the -COOH group.\n5. Ethers are the most reactive functional group discussed in this chapter.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, 3, and 4 correctly summarise major themes of the chapter. Statement 5 is false — ethers are not even a primary focus of this chapter (they belong to a different chapter) and are known for being relatively unreactive, not the most reactive group discussed here.',
    difficulty: 'medium'
  }
];
=======
export const ALDEHYDES_KETONES_CARBOXYLICACIDES = [
  // ==================== MCQ (70) ====================
  {
    id: 'carbonyl-1',
    type: 'mcq',
    question: 'In an aldehyde or ketone, the carbonyl carbon atom is',
    options: ['sp hybridised', 'sp2 hybridised, with a trigonal planar geometry', 'sp3 hybridised', 'not hybridised at all'],
    correctIndex: 1,
    explanation: 'The carbonyl carbon in aldehydes and ketones is sp2 hybridised, giving it a trigonal planar geometry with bond angles close to 120°.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-2',
    type: 'mcq',
    question: 'The carbon-oxygen double bond in a carbonyl group is polarised such that',
    options: [
      'the carbon atom bears a partial negative charge and oxygen bears a partial positive charge',
      'the carbon atom bears a partial positive charge and oxygen bears a partial negative charge',
      'both atoms are completely neutral',
      'the bond is entirely non-polar'
    ],
    correctIndex: 1,
    explanation: 'Since oxygen is more electronegative than carbon, the carbonyl carbon carries a partial positive charge and oxygen carries a partial negative charge, making the carbon electrophilic.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-3',
    type: 'mcq',
    question: 'The electrophilic character of the carbonyl carbon is the primary reason why aldehydes and ketones readily undergo',
    options: ['electrophilic addition reactions', 'nucleophilic addition reactions', 'free radical substitution reactions', 'elimination reactions exclusively'],
    correctIndex: 1,
    explanation: 'Because the carbonyl carbon is electron-deficient (electrophilic), it is readily attacked by nucleophiles, making nucleophilic addition the characteristic reaction of the carbonyl group.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-4',
    type: 'mcq',
    question: 'Oxidation of a primary alcohol using a mild oxidising agent such as PCC gives',
    options: ['a ketone', 'an aldehyde', 'a carboxylic acid', 'an ether'],
    correctIndex: 1,
    explanation: 'PCC is a mild oxidant that stops the oxidation of a primary alcohol at the aldehyde stage, without further oxidation to the carboxylic acid.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-5',
    type: 'mcq',
    question: 'The Rosenmund reduction converts an acid chloride into an aldehyde using',
    options: [
      'LiAlH4',
      'hydrogen gas in the presence of a palladium catalyst partially poisoned with barium sulphate',
      'sodium metal in dry ether',
      'concentrated sulphuric acid'
    ],
    correctIndex: 1,
    explanation: 'The Rosenmund reduction uses H2 with a Pd catalyst on BaSO4 (a "poisoned" catalyst), which selectively reduces an acid chloride to an aldehyde without over-reduction to the alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-6',
    type: 'mcq',
    question: 'The catalyst used in the Rosenmund reduction is deliberately "poisoned" (partially deactivated) mainly to',
    options: [
      'speed up the reaction as much as possible',
      'prevent further reduction of the aldehyde product to the corresponding alcohol',
      'convert the acid chloride into a carboxylic acid instead',
      'ensure the reaction produces only carbon dioxide and water'
    ],
    correctIndex: 1,
    explanation: 'Partial poisoning of the palladium catalyst reduces its activity just enough to stop the reduction at the aldehyde stage, preventing over-reduction to the primary alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-7',
    type: 'mcq',
    question: 'The Stephen reaction converts a nitrile into an aldehyde using',
    options: [
      'stannous chloride (SnCl2) and HCl, followed by hydrolysis',
      'LiAlH4 at room temperature',
      'hydrogen gas with a Pd catalyst',
      'concentrated nitric acid'
    ],
    correctIndex: 0,
    explanation: 'The Stephen reaction reduces a nitrile to an imine intermediate using SnCl2/HCl, which is then hydrolysed to give the corresponding aldehyde.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-8',
    type: 'mcq',
    question: 'DIBAL-H (diisobutylaluminium hydride) is a reducing agent used, particularly at low temperature, to partially reduce esters or nitriles specifically to',
    options: ['carboxylic acids', 'aldehydes, stopping short of the fully reduced alcohol', 'alkanes', 'amines'],
    correctIndex: 1,
    explanation: 'DIBAL-H, when used at low temperature, forms a stable intermediate that, upon aqueous workup, yields the aldehyde rather than proceeding all the way to the alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-9',
    type: 'mcq',
    question: 'The Etard reaction converts toluene (or another methylbenzene) directly into benzaldehyde using',
    options: [
      'potassium permanganate',
      'chromyl chloride (CrO2Cl2), followed by hydrolysis',
      'sodium borohydride',
      'ozone, followed by zinc dust reduction'
    ],
    correctIndex: 1,
    explanation: 'The Etard reaction uses chromyl chloride to oxidise the methyl group of toluene directly to an aldehyde group (via an intermediate complex), avoiding over-oxidation to the carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-10',
    type: 'mcq',
    question: 'The Gattermann-Koch reaction converts benzene directly into benzaldehyde using',
    options: [
      'carbon monoxide and hydrogen chloride gas, in the presence of anhydrous AlCl3 and CuCl',
      'ozone, followed by reductive workup',
      'sodium cyanide and hydrochloric acid',
      'chromyl chloride'
    ],
    correctIndex: 0,
    explanation: 'The Gattermann-Koch reaction is a special Friedel-Crafts-type formylation, using CO and HCl with anhydrous AlCl3/CuCl catalysts to introduce a -CHO group directly onto benzene.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-11',
    type: 'mcq',
    question: 'Ozonolysis of an alkene, followed by reductive workup with zinc dust and water, gives',
    options: [
      'a single alcohol product',
      'aldehydes and/or ketones, depending on the substitution pattern of the original alkene',
      'only carboxylic acids',
      'only alkanes'
    ],
    correctIndex: 1,
    explanation: 'Ozonolysis cleaves the C=C double bond, and reductive workup (with Zn/H2O) gives aldehydes and/or ketones, depending on how substituted each original alkene carbon was.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-12',
    type: 'mcq',
    question: 'In the reductive workup of ozonolysis, zinc dust is specifically used to',
    options: [
      'convert the intermediate ozonide directly into a carboxylic acid',
      'prevent further oxidation of any aldehyde product that is formed, by reducing any oxidising species like H2O2',
      'add extra oxygen atoms to the product',
      'convert the alkene into an alkyne first'
    ],
    correctIndex: 1,
    explanation: 'Zinc dust reduces the intermediate hydrogen peroxide (or similar oxidising species) generated during ozonide hydrolysis, preventing over-oxidation of any aldehyde product to a carboxylic acid.',
    difficulty: 'hard'
  },
  {
    id: 'carbonyl-13',
    type: 'mcq',
    question: 'Lower molecular mass aldehydes and ketones show appreciable solubility in water mainly because',
    options: [
      'they are completely non-polar molecules',
      'the carbonyl oxygen can form hydrogen bonds by accepting a hydrogen bond from water molecules',
      'they react chemically with water to form new compounds',
      'they have extremely high molecular mass'
    ],
    correctIndex: 1,
    explanation: 'Although aldehydes and ketones lack an O-H group themselves, the lone pairs on the carbonyl oxygen allow them to accept hydrogen bonds from water, giving lower members appreciable water solubility.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-14',
    type: 'mcq',
    question: 'Aldehydes and ketones generally have higher boiling points than hydrocarbons or ethers of comparable molecular mass, mainly because of',
    options: [
      'the absence of any polar bond',
      'the polar carbon-oxygen double bond, which allows for dipole-dipole interactions between molecules',
      'the presence of an O-H bond, allowing hydrogen bonding',
      'their extremely large molecular size compared to hydrocarbons'
    ],
    correctIndex: 1,
    explanation: 'The polar C=O bond enables dipole-dipole interactions between aldehyde/ketone molecules, raising their boiling points above those of comparable non-polar hydrocarbons or ethers.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-15',
    type: 'mcq',
    question: 'Compared to alcohols of similar molecular mass, aldehydes and ketones generally have',
    options: [
      'much higher boiling points, since they can hydrogen bond with each other',
      'lower boiling points, since they cannot hydrogen bond with each other (lacking an O-H group)',
      'exactly the same boiling points',
      'boiling points that are impossible to compare'
    ],
    correctIndex: 1,
    explanation: 'Since aldehydes and ketones cannot hydrogen bond with each other (only dipole-dipole interactions are possible between them), they generally have lower boiling points than comparable alcohols, which can hydrogen bond.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-16',
    type: 'mcq',
    question: 'Addition of hydrogen cyanide (HCN) to an aldehyde or ketone gives',
    options: ['an alcohol', 'a cyanohydrin', 'an amide', 'an ester'],
    correctIndex: 1,
    explanation: 'Nucleophilic addition of HCN to a carbonyl compound gives a cyanohydrin, in which -CN and -OH are added across the C=O bond.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-17',
    type: 'mcq',
    question: 'Sodium bisulphite (NaHSO3) addition compounds are readily formed with',
    options: [
      'all ketones, regardless of steric bulk',
      'aldehydes and methyl ketones, but generally not with more sterically hindered ketones',
      'only tertiary alcohols',
      'only aromatic hydrocarbons'
    ],
    correctIndex: 1,
    explanation: 'Bisulphite addition compounds form readily with aldehydes and methyl ketones, since these are less sterically hindered; bulkier ketones react poorly or not at all due to steric hindrance.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-18',
    type: 'mcq',
    question: 'Reaction of an aldehyde or ketone with excess alcohol in the presence of an acid catalyst, via a hemiacetal intermediate, gives',
    options: ['an ester', 'an acetal (or ketal), which can serve to "protect" the carbonyl group', 'a carboxylic acid', 'an amide'],
    correctIndex: 1,
    explanation: 'Acid-catalysed reaction with excess alcohol converts the carbonyl compound first to a hemiacetal and then to an acetal (or ketal), a useful protecting group strategy for the carbonyl functionality.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-19',
    type: 'mcq',
    question: 'Reaction of an aldehyde or ketone with hydroxylamine (NH2OH) gives',
    options: ['a hydrazone', 'an oxime', 'a semicarbazone', 'an acetal'],
    correctIndex: 1,
    explanation: 'Hydroxylamine reacts with a carbonyl compound via condensation to form an oxime (>C=N-OH).',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-20',
    type: 'mcq',
    question: 'Reaction of an aldehyde or ketone with semicarbazide (NH2NHCONH2) gives a derivative called a',
    options: ['hydrazone', 'oxime', 'semicarbazone, often used as a solid crystalline derivative for characterisation', 'nitrile'],
    correctIndex: 2,
    explanation: 'Semicarbazide reacts with carbonyl compounds to form semicarbazones, which are often solid, easily purified derivatives useful for identifying and characterising aldehydes and ketones.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-21',
    type: 'mcq',
    question: 'Aldehydes are generally more reactive towards nucleophilic addition than ketones, mainly due to a combination of',
    options: [
      'greater steric hindrance and greater electron donation from substituents in aldehydes',
      'less steric hindrance and less electron donation from alkyl/aryl substituents (making the carbonyl carbon more electrophilic) in aldehydes',
      'aldehydes having a much larger molecular size than ketones',
      'aldehydes lacking a carbonyl group entirely'
    ],
    correctIndex: 1,
    explanation: 'Aldehydes are less hindered (bearing at most one bulky group and a hydrogen) and have less electron-donating alkyl substitution around the carbonyl carbon, making them more electrophilic and hence more reactive towards nucleophilic addition than ketones.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-22',
    type: 'mcq',
    question: 'Among aldehydes, formaldehyde (HCHO) is generally the most reactive towards nucleophilic addition because it',
    options: [
      'has the highest molecular mass among aldehydes',
      'has no alkyl or aryl substituents at all, minimising both steric hindrance and electron donation to the carbonyl carbon',
      'is the least polar of all aldehydes',
      'cannot undergo nucleophilic addition at all'
    ],
    correctIndex: 1,
    explanation: 'With no substituents other than hydrogen atoms, formaldehyde experiences minimal steric hindrance and no electron-donating alkyl group effects, making its carbonyl carbon the most electrophilic and reactive among aldehydes.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-23',
    type: 'mcq',
    question: 'The Clemmensen reduction converts a carbonyl group (C=O) directly into a methylene group (CH2) using',
    options: [
      'zinc amalgam (Zn-Hg) and concentrated hydrochloric acid, under acidic conditions',
      'hydrazine and potassium hydroxide, under basic conditions',
      'sodium borohydride',
      'lithium aluminium hydride'
    ],
    correctIndex: 0,
    explanation: 'The Clemmensen reduction uses zinc amalgam and concentrated HCl to fully reduce a carbonyl group to a methylene group, under strongly acidic conditions.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-24',
    type: 'mcq',
    question: 'The Wolff-Kishner reduction converts a carbonyl group (C=O) directly into a methylene group (CH2) using',
    options: [
      'zinc amalgam and hydrochloric acid',
      'hydrazine (NH2NH2) and a strong base (such as KOH), typically with heating',
      'lithium aluminium hydride',
      'sodium bisulphite'
    ],
    correctIndex: 1,
    explanation: 'The Wolff-Kishner reduction converts a carbonyl group to a methylene group using hydrazine to first form a hydrazone, which is then decomposed under strongly basic conditions with heat.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-25',
    type: 'mcq',
    question: 'For a substrate that is sensitive to strongly acidic conditions but stable under basic conditions, the preferred method to reduce a carbonyl group to a methylene group would be',
    options: [
      'Clemmensen reduction, since it uses acidic conditions',
      'Wolff-Kishner reduction, since it uses basic conditions',
      'neither method can be used under any circumstances',
      'catalytic hydrogenation only'
    ],
    correctIndex: 1,
    explanation: 'Since Wolff-Kishner reduction proceeds under basic conditions, it is the preferred choice for substrates that are stable to base but would be damaged by the strongly acidic conditions of Clemmensen reduction.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-26',
    type: 'mcq',
    question: 'Aldehydes are readily oxidised to carboxylic acids by mild oxidising agents, such as Tollens\' reagent, mainly because',
    options: [
      'the aldehyde carbon still bears a hydrogen atom that can be removed relatively easily during oxidation',
      'aldehydes have no hydrogen atoms at all on the carbonyl carbon',
      'aldehydes are completely resistant to any form of oxidation',
      'ketones oxidise more readily than aldehydes under all conditions'
    ],
    correctIndex: 0,
    explanation: 'The presence of a hydrogen atom directly on the carbonyl carbon of an aldehyde makes it susceptible to relatively easy oxidation to a carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-27',
    type: 'mcq',
    question: 'Ketones generally resist oxidation under mild conditions mainly because',
    options: [
      'the carbonyl carbon in a ketone has no hydrogen atom attached, so oxidation without breaking a C-C bond is not possible under mild conditions',
      'ketones have too many hydrogen atoms on the carbonyl carbon',
      'ketones do not actually possess a carbonyl group',
      'ketones spontaneously decompose before any oxidation can occur'
    ],
    correctIndex: 0,
    explanation: 'Since the carbonyl carbon of a ketone has no hydrogen attached, mild oxidation cannot proceed as it does for aldehydes; oxidative cleavage of a ketone requires much more vigorous conditions.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-28',
    type: 'mcq',
    question: 'A positive Tollens\' test is observed as',
    options: [
      'the formation of a brick-red precipitate',
      'the deposition of a shiny silver mirror on the inside of the test tube',
      'the evolution of a colourless gas',
      'a yellow crystalline precipitate'
    ],
    correctIndex: 1,
    explanation: 'In the Tollens\' test, an aldehyde reduces the ammoniacal silver nitrate reagent, depositing metallic silver as a characteristic silver mirror on the test tube.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-29',
    type: 'mcq',
    question: 'A positive Fehling\'s test is observed as the formation of',
    options: [
      'a shiny silver mirror',
      'a brick-red precipitate of cuprous oxide (Cu2O)',
      'a yellow precipitate of iodoform',
      'a colourless solution with no visible change'
    ],
    correctIndex: 1,
    explanation: 'A positive Fehling\'s test produces a brick-red precipitate of Cu2O, as the aldehyde reduces the alkaline copper(II) tartrate complex.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-30',
    type: 'mcq',
    question: 'Aromatic aldehydes, such as benzaldehyde, generally give a positive Tollens\' test but typically do NOT give a positive result with',
    options: ['the iodoform test', 'Fehling\'s solution', 'sodium bisulphite addition', 'hydroxylamine condensation to form an oxime'],
    correctIndex: 1,
    explanation: 'Aromatic aldehydes generally give a positive Tollens\' test, but they typically do not give a positive Fehling\'s test, which is more characteristic of aliphatic aldehydes.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-31',
    type: 'mcq',
    question: 'Ketones, unlike aldehydes, generally give a',
    options: [
      'positive Tollens\' test',
      'negative Tollens\' test and negative Fehling\'s test, since they lack a readily removable hydrogen on the carbonyl carbon',
      'positive Fehling\'s test but negative Tollens\' test',
      'positive test with both Tollens\' and Fehling\'s reagents'
    ],
    correctIndex: 1,
    explanation: 'Since ketones lack the readily removable hydrogen on the carbonyl carbon required for these mild oxidations, they generally give negative results with both Tollens\' and Fehling\'s reagents.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-32',
    type: 'mcq',
    question: 'The iodoform test gives a positive result (yellow precipitate of CHI3) specifically with compounds containing',
    options: [
      'any aldehyde group, regardless of structure',
      'a methyl ketone group (CH3-CO-) or a structural feature (like CH3-CH(OH)-) that can be oxidised in situ to a methyl ketone',
      'any carboxylic acid group',
      'any alcohol, regardless of its structure'
    ],
    correctIndex: 1,
    explanation: 'The iodoform test is specific to compounds bearing a methyl ketone group, or those (like certain secondary alcohols and acetaldehyde) that can be oxidised in situ under the reaction conditions to generate a methyl ketone-type structure.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-33',
    type: 'mcq',
    question: 'Among simple aldehydes, only acetaldehyde (CH3CHO) gives a positive iodoform test, mainly because',
    options: [
      'it is the only aldehyde that exists in nature',
      'it possesses the required CH3-CO- structural unit, unlike other aldehydes such as formaldehyde or propionaldehyde',
      'it has the highest molecular mass among aldehydes',
      'it cannot undergo any oxidation at all'
    ],
    correctIndex: 1,
    explanation: 'Acetaldehyde specifically has a methyl group directly attached to the carbonyl carbon (CH3-CHO), satisfying the structural requirement for a positive iodoform test, unlike most other aldehydes.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-34',
    type: 'mcq',
    question: 'Ethanol gives a positive iodoform test mainly because',
    options: [
      'ethanol itself directly reacts with iodine to give iodoform, without any oxidation step',
      'ethanol is first oxidised in situ under the reaction conditions to acetaldehyde, which then gives the positive test',
      'ethanol has no relationship to the iodoform test at all',
      'ethanol contains a methyl ketone group directly'
    ],
    correctIndex: 1,
    explanation: 'Under the alkaline hypoiodite conditions of the iodoform test, ethanol is oxidised in situ to acetaldehyde, which itself satisfies the structural requirement for a positive iodoform test.',
    difficulty: 'hard'
  },
  {
    id: 'carbonyl-35',
    type: 'mcq',
    question: 'A base-catalysed reaction in which two molecules of an aldehyde or ketone (each possessing an alpha-hydrogen) combine to give a beta-hydroxy carbonyl compound is called',
    options: ['Cannizzaro reaction', 'aldol condensation', 'Reimer-Tiemann reaction', 'Kolbe reaction'],
    correctIndex: 1,
    explanation: 'Aldol condensation involves the combination of two molecules of a carbonyl compound (each bearing at least one alpha-hydrogen) to form a beta-hydroxy aldehyde or ketone (the "aldol").',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-36',
    type: 'mcq',
    question: 'The beta-hydroxy carbonyl compound formed in aldol condensation can undergo dehydration (loss of water), giving',
    options: [
      'an alpha,beta-unsaturated carbonyl compound',
      'a saturated carboxylic acid',
      'an alkane',
      'an ether'
    ],
    correctIndex: 0,
    explanation: 'Loss of water from the aldol product generates an alpha,beta-unsaturated carbonyl compound (an enal or enone).',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-37',
    type: 'mcq',
    question: 'Aldol condensation specifically requires the reacting aldehyde or ketone to possess',
    options: [
      'at least one alpha-hydrogen atom',
      'no hydrogen atoms at all',
      'a halogen substituent',
      'an aromatic ring'
    ],
    correctIndex: 0,
    explanation: 'Aldol condensation depends on the presence of an alpha-hydrogen, which is removed by base to form the nucleophilic enolate that attacks another carbonyl molecule.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-38',
    type: 'mcq',
    question: 'A crossed aldol condensation between two different aldehydes or ketones, both of which possess alpha-hydrogens, generally gives',
    options: [
      'a single, clean crossed product with no side products',
      'a mixture of up to four possible products (two self-condensation products and two crossed products)',
      'no reaction occurs at all',
      'only carboxylic acid products'
    ],
    correctIndex: 1,
    explanation: 'When both carbonyl partners have alpha-hydrogens, self-condensation as well as crossed condensation can occur, typically producing a complex mixture of up to four different products.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-39',
    type: 'mcq',
    question: 'A clean, predominantly single-product crossed aldol condensation (Claisen-Schmidt reaction) can often be achieved when one of the carbonyl reactants is',
    options: [
      'a compound with multiple alpha-hydrogens',
      'an aromatic aldehyde (like benzaldehyde) lacking alpha-hydrogens, reacting with an aliphatic carbonyl compound that has alpha-hydrogens',
      'a compound with no carbonyl group at all',
      'a tertiary alcohol'
    ],
    correctIndex: 1,
    explanation: 'Using an aromatic aldehyde without alpha-hydrogens as one partner eliminates its ability to self-condense or act as the nucleophile, favouring clean formation of a single crossed aldol product.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-40',
    type: 'mcq',
    question: 'The Cannizzaro reaction is a disproportionation reaction observed specifically with',
    options: [
      'aldehydes possessing alpha-hydrogens',
      'aldehydes lacking any alpha-hydrogen atom, such as formaldehyde or benzaldehyde, when treated with concentrated alkali',
      'ketones with multiple alpha-hydrogens',
      'carboxylic acids only'
    ],
    correctIndex: 1,
    explanation: 'Since the Cannizzaro reaction requires the absence of alpha-hydrogens (so that no aldol pathway competes), it occurs with aldehydes like formaldehyde and benzaldehyde in the presence of concentrated alkali.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-41',
    type: 'mcq',
    question: 'In the Cannizzaro reaction, one molecule of the aldehyde is oxidised while another is simultaneously reduced, giving',
    options: [
      'two molecules of the corresponding carboxylic acid',
      'one molecule of the carboxylate salt and one molecule of the corresponding alcohol',
      'two molecules of the corresponding alcohol',
      'a single molecule with no net change'
    ],
    correctIndex: 1,
    explanation: 'In this self-disproportionation reaction, one aldehyde molecule is oxidised to the carboxylate salt, while another is simultaneously reduced to the corresponding alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-42',
    type: 'mcq',
    question: 'The carbonyl group (-CHO, -COR) attached to an aromatic ring generally acts, in electrophilic aromatic substitution reactions, as a',
    options: [
      'strongly activating and ortho/para-directing group',
      'deactivating and meta-directing group',
      'group with no effect on the ring\'s reactivity',
      'strongly activating but meta-directing group'
    ],
    correctIndex: 1,
    explanation: 'The electron-withdrawing carbonyl group deactivates the aromatic ring (via induction and resonance) and directs incoming electrophiles predominantly to the meta position.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-43',
    type: 'mcq',
    question: 'Nitration of benzaldehyde with a nitrating mixture gives predominantly',
    options: ['ortho-nitrobenzaldehyde', 'meta-nitrobenzaldehyde', 'para-nitrobenzaldehyde', 'an equal mixture of all three isomers'],
    correctIndex: 1,
    explanation: 'Since the -CHO group is meta-directing, nitration of benzaldehyde gives predominantly the meta-substituted product, meta-nitrobenzaldehyde.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-44',
    type: 'mcq',
    question: 'Oxidation of an alkylbenzene (such as toluene or ethylbenzene) with a strong oxidising agent such as KMnO4 or K2Cr2O7 gives, regardless of the length of the alkyl side chain,',
    options: [
      'a mixture of unpredictable products',
      'benzoic acid, since the oxidation always stops at the ring carbon bearing the side chain',
      'a substituted phenol',
      'a nitrobenzene derivative'
    ],
    correctIndex: 1,
    explanation: 'Regardless of the length of the alkyl side chain (as long as there is at least one benzylic hydrogen), strong oxidation of an alkylbenzene always cleaves the side chain down to give a carboxylic acid group directly on the ring, forming benzoic acid.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-45',
    type: 'mcq',
    question: 'Carboxylic acids can be prepared from nitriles by',
    options: [
      'acidic or basic hydrolysis, followed by acidification if a basic hydrolysis was used',
      'simple exposure to air with no other reagents',
      'reaction with sodium metal',
      'reaction with hydrogen gas and a Pd catalyst'
    ],
    correctIndex: 0,
    explanation: 'Hydrolysis of a nitrile, under either acidic or basic conditions (with subsequent acidification for basic hydrolysis), converts the -CN group into a -COOH group.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-46',
    type: 'mcq',
    question: 'Reaction of a Grignard reagent with dry ice (solid carbon dioxide), followed by acidic workup, gives',
    options: ['an alcohol', 'a carboxylic acid, containing one more carbon atom than the original Grignard reagent', 'an aldehyde', 'an ether'],
    correctIndex: 1,
    explanation: 'A Grignard reagent adds to carbon dioxide to form a magnesium carboxylate, which upon acidic workup gives a carboxylic acid with one additional carbon atom compared to the original alkyl/aryl group.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-47',
    type: 'mcq',
    question: 'Carboxylic acids are generally more acidic than phenols mainly because',
    options: [
      'the carboxylate ion has two exactly equivalent resonance structures with the negative charge equally delocalised over both oxygen atoms, providing greater stabilisation than the phenoxide ion',
      'carboxylic acids have a much higher molecular mass than phenols',
      'phenols cannot lose a proton at all',
      'carboxylic acids contain no oxygen atoms'
    ],
    correctIndex: 0,
    explanation: 'The two resonance structures of the carboxylate ion are exactly equivalent, allowing the negative charge to be shared equally between two electronegative oxygen atoms, providing more effective stabilisation than the resonance available to phenoxide (where the negative charge is partly delocalised onto less electronegative ring carbons).',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-48',
    type: 'mcq',
    question: 'The general order of acid strength among carboxylic acids, carbonic acid, phenols, and simple alcohols is best represented as',
    options: [
      'alcohols > phenols > carbonic acid > carboxylic acids',
      'carboxylic acids > carbonic acid > phenols > alcohols',
      'phenols > carboxylic acids > carbonic acid > alcohols',
      'carbonic acid > carboxylic acids > alcohols > phenols'
    ],
    correctIndex: 1,
    explanation: 'Carboxylic acids are generally the strongest of this group, followed by carbonic acid, then phenols, with simple alcohols being the weakest acids among them.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-49',
    type: 'mcq',
    question: 'The presence of an electron-withdrawing group, such as a halogen, on the carbon chain of a carboxylic acid generally',
    options: [
      'decreases the acidity of the carboxylic acid',
      'increases the acidity of the carboxylic acid, through an inductive electron-withdrawing effect that stabilises the carboxylate ion',
      'has no effect whatsoever on acidity',
      'converts the carboxylic acid into a base'
    ],
    correctIndex: 1,
    explanation: 'An electron-withdrawing substituent stabilises the negative charge on the carboxylate ion via an inductive effect, increasing the acidity of the carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-50',
    type: 'mcq',
    question: 'The inductive effect of an electron-withdrawing substituent on carboxylic acid acidity is generally strongest when the substituent is',
    options: [
      'located as far from the -COOH group as possible',
      'located close to the -COOH group (such as at the alpha-carbon), since the inductive effect weakens rapidly with increasing distance',
      'located on a completely different, unconnected molecule',
      'unrelated to distance from the -COOH group'
    ],
    correctIndex: 1,
    explanation: 'Since inductive effects are transmitted through sigma bonds and weaken rapidly with distance, a substituent located closer to the -COOH group (such as at the alpha-carbon) has the greatest effect on acidity.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-51',
    type: 'mcq',
    question: 'The presence of an electron-donating alkyl group on a carboxylic acid generally',
    options: [
      'increases the acidity of the carboxylic acid',
      'decreases the acidity of the carboxylic acid, since it destabilises the negative charge on the carboxylate ion',
      'has no effect whatsoever',
      'converts the carboxylic acid into a strong base'
    ],
    correctIndex: 1,
    explanation: 'Electron-donating alkyl groups intensify the negative charge on the carboxylate ion, destabilising it and thereby decreasing the acidity of the carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-52',
    type: 'mcq',
    question: 'Reaction of a carboxylic acid with thionyl chloride (SOCl2) gives',
    options: ['an ester', 'an acid chloride, along with SO2 and HCl gases as by-products', 'an amide', 'a carboxylate salt'],
    correctIndex: 1,
    explanation: 'Thionyl chloride converts a carboxylic acid into the corresponding acid chloride, with SO2 and HCl escaping as gaseous by-products, similar to its analogous use with alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-53',
    type: 'mcq',
    question: 'Reaction of a carboxylic acid with an alcohol, in the presence of an acid catalyst, is the basis of',
    options: [
      'Fischer esterification, giving an ester and water',
      'the Cannizzaro reaction',
      'the Rosenmund reduction',
      'the Wolff-Kishner reduction'
    ],
    correctIndex: 0,
    explanation: 'Fischer esterification is the acid-catalysed reaction between a carboxylic acid and an alcohol to give an ester and water, as also described in the alcohols chapter.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-54',
    type: 'mcq',
    question: 'Reduction of a carboxylic acid to a primary alcohol requires a strong reducing agent, typically',
    options: [
      'sodium borohydride (NaBH4), which readily accomplishes this reduction',
      'lithium aluminium hydride (LiAlH4), since NaBH4 is generally not strong enough to reduce carboxylic acids under normal conditions',
      'PCC, an oxidising agent unrelated to reduction',
      'zinc amalgam and HCl'
    ],
    correctIndex: 1,
    explanation: 'Carboxylic acids require the strong reducing agent LiAlH4 to be converted to primary alcohols; the milder NaBH4 is generally insufficient for this particular reduction.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-55',
    type: 'mcq',
    question: 'The Hell-Volhard-Zelinsky (HVZ) reaction introduces a halogen atom at the alpha-carbon of a carboxylic acid, using',
    options: [
      'a halogen (Cl2 or Br2) in the presence of red phosphorus',
      'sodium hypohalite alone',
      'concentrated sulphuric acid',
      'hydrogen gas with a Pd catalyst'
    ],
    correctIndex: 0,
    explanation: 'The HVZ reaction uses a halogen (typically Br2 or Cl2) with a catalytic amount of red phosphorus to selectively introduce a halogen at the alpha-position of a carboxylic acid.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-56',
    type: 'mcq',
    question: 'Heating the sodium salt of a carboxylic acid with soda lime (a mixture of NaOH and CaO) leads to',
    options: [
      'esterification',
      'decarboxylation, giving an alkane with one carbon fewer than the parent acid',
      'reduction to the corresponding alcohol',
      'oxidation to a dicarboxylic acid'
    ],
    correctIndex: 1,
    explanation: 'Heating a sodium carboxylate with soda lime causes decarboxylation, releasing carbon dioxide and forming an alkane with one fewer carbon atom than the original acid.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-57',
    type: 'mcq',
    question: 'Which of the following correctly lists a series of carbonyl group derivatives (all formed by condensation of a carbonyl compound with a nitrogen nucleophile)?',
    options: [
      'ester, ether, acetal',
      'oxime, hydrazone, semicarbazone',
      'alkyl halide, alcohol, carboxylic acid',
      'alkene, alkyne, alkane'
    ],
    correctIndex: 1,
    explanation: 'Oximes, hydrazones, and semicarbazones are all condensation products formed between a carbonyl compound and a nitrogen-containing nucleophile (hydroxylamine, hydrazine derivatives, and semicarbazide, respectively).',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-58',
    type: 'mcq',
    question: 'Reduction of an aldehyde or ketone using a reagent such as NaBH4 or LiAlH4 gives, respectively,',
    options: [
      'a carboxylic acid or an ester',
      'a primary alcohol from an aldehyde, and a secondary alcohol from a ketone',
      'an alkane in both cases',
      'a hydrocarbon with no oxygen present'
    ],
    correctIndex: 1,
    explanation: 'Reduction of the carbonyl group in an aldehyde gives a primary alcohol, while reduction of a ketone gives a secondary alcohol, as covered previously in the alcohols chapter and revisited here for carbonyl compounds.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-59',
    type: 'mcq',
    question: 'Catalytic hydrogenation (H2 with a metal catalyst such as Pt, Pd, or Ni) of an aldehyde or ketone reduces the carbonyl group to give',
    options: [
      'the corresponding alcohol',
      'the corresponding carboxylic acid',
      'the corresponding alkane, directly, in one step under mild conditions',
      'no reaction occurs at all'
    ],
    correctIndex: 0,
    explanation: 'Catalytic hydrogenation of the carbonyl group in an aldehyde or ketone reduces it to the corresponding alcohol (primary from aldehyde, secondary from ketone).',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-60',
    type: 'mcq',
    question: 'The nucleophilic addition of a Grignard reagent to an aldehyde or ketone, followed by acidic hydrolysis, gives',
    options: ['a carboxylic acid', 'an alcohol', 'an ester', 'an ether'],
    correctIndex: 1,
    explanation: 'Grignard reagent addition to a carbonyl compound, followed by aqueous acidic workup, gives the corresponding alcohol, as covered earlier for both alcohols and now revisited in the context of carbonyl reactivity.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-61',
    type: 'mcq',
    question: 'The nomenclature suffix used for naming an aldehyde in IUPAC nomenclature is',
    options: ['-ol', '-al', '-one', '-oic acid'],
    correctIndex: 1,
    explanation: 'IUPAC nomenclature uses the suffix "-al" to indicate the presence of an aldehyde group in a compound.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-62',
    type: 'mcq',
    question: 'The nomenclature suffix used for naming a ketone in IUPAC nomenclature is',
    options: ['-al', '-one', '-oic acid', '-amine'],
    correctIndex: 1,
    explanation: 'IUPAC nomenclature uses the suffix "-one" to indicate the presence of a ketone group in a compound.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-63',
    type: 'mcq',
    question: 'The nomenclature suffix used for naming a carboxylic acid in IUPAC nomenclature is',
    options: ['-al', '-one', '-oic acid', '-ol'],
    correctIndex: 2,
    explanation: 'IUPAC nomenclature uses the suffix "-oic acid" to indicate the presence of a carboxylic acid group in a compound.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-64',
    type: 'mcq',
    question: 'When comparing carboxylic acids to aldehydes and ketones of similar molecular mass, carboxylic acids generally have',
    options: [
      'lower boiling points, since they cannot form hydrogen bonds',
      'higher boiling points, since carboxylic acid molecules can form strong intermolecular hydrogen bonds, often existing as dimers',
      'exactly the same boiling points',
      'boiling points that are impossible to compare due to different molecular formulas'
    ],
    correctIndex: 1,
    explanation: 'Carboxylic acids can form strong intermolecular hydrogen bonds (often existing as cyclic dimers in the vapour phase or in non-polar solvents), giving them significantly higher boiling points than aldehydes/ketones of similar molecular mass.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-65',
    type: 'mcq',
    question: 'Lower molecular mass carboxylic acids (such as formic and acetic acid) are generally',
    options: [
      'completely insoluble in water',
      'miscible with water in all proportions, due to their ability to hydrogen bond with water molecules',
      'insoluble in any solvent, polar or non-polar',
      'gases at room temperature'
    ],
    correctIndex: 1,
    explanation: 'Lower carboxylic acids, having small hydrocarbon portions and an -OH group capable of hydrogen bonding, are miscible with water in all proportions.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-66',
    type: 'mcq',
    question: 'Reaction of a carboxylic acid with ammonia, followed by heating (dehydration of the resulting ammonium salt), gives',
    options: ['an ester', 'an amide', 'a nitrile', 'an alcohol'],
    correctIndex: 1,
    explanation: 'Reaction of a carboxylic acid with ammonia first forms an ammonium carboxylate salt, which upon heating (dehydration) is converted into the corresponding amide.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-67',
    type: 'mcq',
    question: 'The alpha-halo carboxylic acid produced via the HVZ reaction is more acidic than the parent (unsubstituted) carboxylic acid mainly because',
    options: [
      'the halogen atom donates electron density to the carboxylate ion',
      'the electronegative halogen atom withdraws electron density inductively, stabilising the carboxylate ion',
      'halogens have no electronic effect on acidity whatsoever',
      'the halogen atom converts the compound into a base'
    ],
    correctIndex: 1,
    explanation: 'The inductive electron-withdrawing effect of the newly introduced halogen atom stabilises the resulting carboxylate ion, increasing the acidity of the alpha-halo acid compared to the parent acid.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-68',
    type: 'mcq',
    question: 'A key distinguishing chemical test that differentiates aldehydes from ketones, based on the ease of oxidation, is the',
    options: [
      'Tollens\' or Fehling\'s test, which give a positive result with (most) aldehydes but a negative result with ketones',
      'litmus test',
      'bromine water test',
      'flame test'
    ],
    correctIndex: 0,
    explanation: 'Since aldehydes are readily oxidised (having a hydrogen on the carbonyl carbon) while ketones generally are not under mild conditions, Tollens\' and Fehling\'s tests serve as reliable ways to distinguish between them.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-69',
    type: 'mcq',
    question: 'Under vigorous oxidative conditions (strong oxidants, high temperature), ketones can undergo oxidative cleavage of a carbon-carbon bond, giving',
    options: [
      'no reaction at all, since ketones cannot be oxidised under any conditions',
      'a mixture of carboxylic acids, generally with fewer carbon atoms than the original ketone',
      'the parent alkane, with no oxygen incorporated',
      'a single, pure alcohol product'
    ],
    correctIndex: 1,
    explanation: 'Under sufficiently vigorous conditions, ketones can undergo oxidative C-C bond cleavage on either side of the carbonyl group, yielding a mixture of carboxylic acids.',
    difficulty: 'hard'
  },
  {
    id: 'carbonyl-70',
    type: 'mcq',
    question: 'Overall, the chemistry of aldehydes, ketones, and carboxylic acids, as emphasised throughout this NCERT chapter, centres on',
    options: [
      'the electrophilic nature of the carbonyl carbon, governing nucleophilic addition, oxidation-reduction behaviour, condensation reactions, and (for carboxylic acids) acidity and derivative formation',
      'only the physical appearance of these compounds',
      'only their industrial cost of manufacture',
      'topics entirely unrelated to the carbonyl functional group'
    ],
    correctIndex: 0,
    explanation: 'The chapter integrates the structural and electronic basis of carbonyl reactivity with a wide range of chemical behaviours, from nucleophilic addition and redox reactions to condensation chemistry and the distinctive acidity and derivative chemistry of carboxylic acids.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'carbonyl-71',
    type: 'assertion-reason',
    question: 'Assertion (A): The carbonyl carbon in aldehydes and ketones is electrophilic.\nReason (R): Oxygen is more electronegative than carbon, polarising the C=O bond so that carbon bears a partial positive charge.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This electronegativity-driven polarisation is exactly why the carbonyl carbon carries a partial positive charge and behaves as an electrophile, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-72',
    type: 'assertion-reason',
    question: 'Assertion (A): The Rosenmund reduction uses a palladium catalyst that has been deliberately poisoned with barium sulphate.\nReason (R): Poisoning the catalyst reduces its activity just enough to stop the reduction at the aldehyde stage, preventing over-reduction to the alcohol.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This controlled reduction in catalyst activity is precisely why over-reduction is prevented, correctly explaining the purpose of catalyst poisoning stated in A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-73',
    type: 'assertion-reason',
    question: 'Assertion (A): DIBAL-H can be used to convert a nitrile or ester into an aldehyde.\nReason (R): At low temperature, DIBAL-H forms a stable intermediate that only releases the aldehyde upon aqueous workup, preventing further reduction to the alcohol.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The formation of this stable intermediate at low temperature is exactly why DIBAL-H achieves partial (rather than complete) reduction, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'carbonyl-74',
    type: 'assertion-reason',
    question: 'Assertion (A): Zinc dust is used during the workup of ozonolysis.\nReason (R): Zinc dust reduces any hydrogen peroxide (or similar oxidising species) generated, preventing over-oxidation of aldehyde products to carboxylic acids.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This reductive role of zinc dust, preventing unwanted over-oxidation, is exactly why it is included in the ozonolysis workup, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'carbonyl-75',
    type: 'assertion-reason',
    question: 'Assertion (A): Lower aldehydes and ketones are appreciably soluble in water.\nReason (R): The lone pairs on the carbonyl oxygen allow the molecule to accept hydrogen bonds from water, despite the carbonyl compound itself lacking an O-H group.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This ability to accept hydrogen bonds from water, despite lacking a donor O-H group, directly explains the observed water solubility of lower carbonyl compounds, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-76',
    type: 'assertion-reason',
    question: 'Assertion (A): Aldehydes and ketones have lower boiling points than alcohols of comparable molecular mass.\nReason (R): Aldehydes and ketones cannot form hydrogen bonds with each other, since they lack an O-H group.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The absence of hydrogen bonding capability between carbonyl compound molecules directly explains their lower boiling points compared to alcohols, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-77',
    type: 'assertion-reason',
    question: 'Assertion (A): Aldehydes are generally more reactive than ketones towards nucleophilic addition.\nReason (R): Ketones have two alkyl/aryl groups attached to the carbonyl carbon, which sterically hinder nucleophilic approach and electronically reduce the carbon\'s electrophilicity through electron donation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'These combined steric and electronic effects of the additional substituent in ketones directly account for their reduced reactivity compared to aldehydes, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-78',
    type: 'assertion-reason',
    question: 'Assertion (A): Formaldehyde is generally the most reactive carbonyl compound towards nucleophilic addition.\nReason (R): Formaldehyde has no alkyl or aryl substituents, minimising both steric hindrance and electron-donating effects on the carbonyl carbon.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The complete absence of substituents, and thus minimal steric/electronic deactivation, directly explains why formaldehyde is exceptionally reactive, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-79',
    type: 'assertion-reason',
    question: 'Assertion (A): Wolff-Kishner reduction is preferred over Clemmensen reduction for a substrate that is unstable under strongly acidic conditions.\nReason (R): Wolff-Kishner reduction is carried out under basic conditions, avoiding the strongly acidic environment used in Clemmensen reduction.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The use of basic rather than strongly acidic conditions is exactly why Wolff-Kishner reduction is chosen when a substrate cannot tolerate acid, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-80',
    type: 'assertion-reason',
    question: 'Assertion (A): Aldehydes are readily oxidised to carboxylic acids by mild oxidising agents.\nReason (R): The aldehyde carbon retains a hydrogen atom that can be removed relatively easily during the oxidation process.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The presence of this readily removable hydrogen atom on the carbonyl carbon is exactly why aldehydes are so easily oxidised, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-81',
    type: 'assertion-reason',
    question: 'Assertion (A): Ketones give a negative Tollens\' test.\nReason (R): Ketones lack a hydrogen atom on the carbonyl carbon, making the mild oxidation required for a positive Tollens\' test unfeasible under these conditions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The absence of the necessary carbonyl-carbon hydrogen directly explains why ketones cannot undergo this mild oxidation and therefore give a negative Tollens\' test, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-82',
    type: 'assertion-reason',
    question: 'Assertion (A): Acetaldehyde gives a positive iodoform test, but propionaldehyde does not.\nReason (R): Acetaldehyde has a methyl group directly attached to the carbonyl carbon (CH3-CHO), while propionaldehyde (CH3CH2CHO) does not have this specific structural feature.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This specific structural requirement for the iodoform test — a methyl group directly bonded to the carbonyl carbon — is exactly why acetaldehyde is positive while propionaldehyde is not, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-83',
    type: 'assertion-reason',
    question: 'Assertion (A): Ethanol gives a positive iodoform test.\nReason (R): Under the reaction conditions, ethanol is oxidised in situ to acetaldehyde, which then satisfies the structural requirement for a positive iodoform test.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This in situ oxidation pathway, converting ethanol to acetaldehyde before the iodoform reaction proceeds, directly explains the positive test result, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'carbonyl-84',
    type: 'assertion-reason',
    question: 'Assertion (A): Aldol condensation requires the presence of at least one alpha-hydrogen atom on the reacting carbonyl compound.\nReason (R): The alpha-hydrogen is removed by base to generate a nucleophilic enolate species, which then attacks the electrophilic carbon of another carbonyl molecule.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This mechanistic role of the alpha-hydrogen, enabling enolate formation, directly explains why it is a strict requirement for aldol condensation, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-85',
    type: 'assertion-reason',
    question: 'Assertion (A): A crossed aldol condensation between benzaldehyde and acetone gives a relatively clean, single major product.\nReason (R): Benzaldehyde has no alpha-hydrogens and therefore cannot undergo self-condensation or act as the enolate-forming nucleophile.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since benzaldehyde cannot form an enolate or self-condense, the only viable pathway is for acetone\'s enolate to attack benzaldehyde, giving a predominant single crossed product, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-86',
    type: 'assertion-reason',
    question: 'Assertion (A): Formaldehyde undergoes the Cannizzaro reaction when treated with concentrated alkali.\nReason (R): Formaldehyde has no alpha-hydrogen atoms, so it cannot undergo aldol condensation and instead undergoes self-disproportionation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The absence of an alternative aldol pathway (due to no alpha-hydrogen) is exactly what makes disproportionation via the Cannizzaro reaction the viable route for formaldehyde, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-87',
    type: 'assertion-reason',
    question: 'Assertion (A): The -CHO group on an aromatic ring is a meta-directing group in electrophilic aromatic substitution.\nReason (R): The carbonyl group withdraws electron density from the ring through both resonance and induction, deactivating the ortho and para positions relative to meta.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This electron withdrawal, which particularly destabilises positive charge at ortho and para positions in the arenium intermediate, is exactly why the carbonyl group directs substitution to the meta position, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-88',
    type: 'assertion-reason',
    question: 'Assertion (A): Oxidation of ethylbenzene with hot acidic KMnO4 gives benzoic acid, not phenylacetic acid.\nReason (R): Strong oxidation of an alkylbenzene side chain always stops at the ring carbon, cleaving away all additional carbons of the side chain, regardless of its original length.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This characteristic behaviour of side-chain oxidation, always yielding the carboxylic acid directly on the ring, correctly explains why ethylbenzene gives benzoic acid rather than a longer-chain acid, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-89',
    type: 'assertion-reason',
    question: 'Assertion (A): Carboxylic acids are more acidic than phenols.\nReason (R): The carboxylate ion has two exactly equivalent resonance structures, whereas the phenoxide ion\'s resonance structures involve delocalisation onto less electronegative ring carbons.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This more effective and symmetric charge delocalisation in the carboxylate ion, involving two equivalent, highly electronegative oxygen atoms, directly explains the greater acidity of carboxylic acids compared to phenols, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-90',
    type: 'assertion-reason',
    question: 'Assertion (A): Trichloroacetic acid (Cl3C-COOH) is significantly more acidic than acetic acid (CH3-COOH).\nReason (R): The three electronegative chlorine atoms withdraw electron density inductively, stabilising the corresponding carboxylate ion.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This strong inductive electron withdrawal by three chlorine atoms directly explains the substantially increased acidity of trichloroacetic acid relative to acetic acid, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-91',
    type: 'assertion-reason',
    question: 'Assertion (A): Reduction of a carboxylic acid to a primary alcohol requires LiAlH4 rather than NaBH4.\nReason (R): NaBH4 is a comparatively weaker reducing agent that is generally not strong enough to reduce the less electrophilic carboxylic acid carbonyl group under normal conditions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The comparatively weaker reducing power of NaBH4, insufficient for the less reactive carboxylic acid carbonyl, directly explains why the stronger LiAlH4 is required, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-92',
    type: 'assertion-reason',
    question: 'Assertion (A): The Hell-Volhard-Zelinsky reaction requires red phosphorus as a catalyst.\nReason (R): Red phosphorus reacts with the halogen to form a small amount of phosphorus trihalide, which converts the carboxylic acid into a more reactive acid halide intermediate, allowing enolisation and subsequent alpha-halogenation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This mechanistic role of red phosphorus, facilitating conversion to a more reactive acid halide intermediate, directly explains why it is required in the HVZ reaction, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'carbonyl-93',
    type: 'assertion-reason',
    question: 'Assertion (A): Carboxylic acids generally have higher boiling points than aldehydes or ketones of comparable molecular mass.\nReason (R): Carboxylic acid molecules can form strong intermolecular hydrogen bonds, often existing as stable dimers.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This strong intermolecular hydrogen bonding (including dimer formation) directly explains why carboxylic acids have notably higher boiling points than comparable aldehydes/ketones, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-94',
    type: 'assertion-reason',
    question: 'Assertion (A): Bisulphite addition compounds are readily formed with acetaldehyde but not with di-tert-butyl ketone.\nReason (R): Steric hindrance from the bulky tert-butyl groups in di-tert-butyl ketone prevents effective approach of the bisulphite nucleophile to the carbonyl carbon.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This steric hindrance from bulky substituents is exactly why bulkier ketones fail to form bisulphite addition compounds as readily as smaller aldehydes or methyl ketones, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-95',
    type: 'assertion-reason',
    question: 'Assertion (A): Aromatic aldehydes give a positive Tollens\' test but generally a negative Fehling\'s test.\nReason (R): Fehling\'s solution is not effective at oxidising aromatic aldehydes under the conditions typically used, unlike Tollens\' reagent.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This differing reactivity of the two mild oxidising reagents specifically towards aromatic aldehydes directly explains the observed distinction in test results, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-96',
    type: 'assertion-reason',
    question: 'Assertion (A): Semicarbazones are often used as solid derivatives to help characterise and identify aldehydes and ketones.\nReason (R): Semicarbazones typically form as crystalline solids with sharp, characteristic melting points, allowing convenient identification of the original carbonyl compound.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The crystalline nature and sharp melting points of semicarbazones directly explain their usefulness as identifiable, characterisable solid derivatives, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-97',
    type: 'assertion-reason',
    question: 'Assertion (A): A ketone cannot be readily oxidised to a carboxylic acid under mild conditions.\nReason (R): The carbonyl carbon of a ketone is bonded to two other carbon atoms and has no hydrogen attached, preventing simple oxidation of that carbon without breaking a C-C bond.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The absence of a hydrogen atom on the ketone carbonyl carbon is exactly why simple oxidation to a carboxylic acid is not feasible under mild conditions, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-98',
    type: 'assertion-reason',
    question: 'Assertion (A): Heating sodium acetate with soda lime gives methane.\nReason (R): This decarboxylation reaction removes the -COO- group as CO2, leaving behind an alkane with one carbon atom fewer than the original acid.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since sodium acetate has two carbons, decarboxylation (removing the -COO- as CO2) leaves a one-carbon alkane, methane, correctly explaining A via the mechanism described in R.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-99',
    type: 'assertion-reason',
    question: 'Assertion (A): Aldehydes and ketones can both be reduced to alcohols using sodium borohydride.\nReason (R): NaBH4 is a strong enough reducing agent to also readily reduce carboxylic acids to primary alcohols under the same conditions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 2,
    explanation: 'A is true — NaBH4 can indeed reduce both aldehydes and ketones to their respective alcohols. However, R is false — NaBH4 is generally not strong enough to reduce carboxylic acids under normal conditions; that requires the stronger LiAlH4.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-100',
    type: 'assertion-reason',
    question: 'Assertion (A): The reactivity and behaviour of aldehydes, ketones, and carboxylic acids can largely be traced back to the electronic and structural properties of the carbonyl group.\nReason (R): Variations in substituents around the carbonyl carbon (hydrogen, alkyl, aryl, or hydroxyl groups) directly determine reactivity patterns such as nucleophilic addition ease, oxidation behaviour, acidity, and derivative formation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'These structural variations around the shared carbonyl functional group, as detailed in R, directly account for the diverse but interconnected reactivity patterns observed across this class of compounds, correctly explaining A.',
    difficulty: 'medium'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'carbonyl-101',
    type: 'statement',
    question: 'Statement I: The carbonyl carbon in aldehydes and ketones is sp2 hybridised.\nStatement II: The carbonyl carbon is electrophilic due to the greater electronegativity of oxygen.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the hybridisation and electronic character of the carbonyl carbon.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-102',
    type: 'statement',
    question: 'Statement I: The Rosenmund reduction converts an acid chloride into an aldehyde.\nStatement II: The Stephen reaction converts a nitrile into an aldehyde using SnCl2/HCl.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe these standard methods for preparing aldehydes.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-103',
    type: 'statement',
    question: 'Statement I: DIBAL-H, used at low temperature, can reduce esters/nitriles to aldehydes.\nStatement II: DIBAL-H always fully reduces esters/nitriles all the way to primary alcohols, regardless of temperature.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the low-temperature control is specifically what allows DIBAL-H to stop at the aldehyde stage rather than proceeding to the alcohol.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-104',
    type: 'statement',
    question: 'Statement I: The Etard reaction converts toluene into benzaldehyde using chromyl chloride.\nStatement II: The Gattermann-Koch reaction converts benzene into benzaldehyde using CO and HCl with AlCl3/CuCl.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe these two named reactions for preparing benzaldehyde from different starting materials.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-105',
    type: 'statement',
    question: 'Statement I: Ozonolysis of an alkene followed by reductive workup (Zn/H2O) gives aldehydes and/or ketones.\nStatement II: Zinc dust in the ozonolysis workup helps prevent over-oxidation of any aldehyde product.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the ozonolysis reaction and the role of zinc dust in its workup.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-106',
    type: 'statement',
    question: 'Statement I: Aldehydes and ketones generally have higher boiling points than hydrocarbons of similar molecular mass.\nStatement II: Aldehydes and ketones generally have higher boiling points than alcohols of similar molecular mass.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct, due to dipole-dipole interactions from the polar C=O bond. Statement II is incorrect — alcohols, capable of hydrogen bonding, generally have higher boiling points than comparable aldehydes/ketones.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-107',
    type: 'statement',
    question: 'Statement I: Sodium bisulphite addition compounds form readily with aldehydes and methyl ketones.\nStatement II: Sodium bisulphite addition compounds form equally readily with all ketones, regardless of steric bulk.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — bulkier ketones generally do not form these addition compounds readily, due to steric hindrance.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-108',
    type: 'statement',
    question: 'Statement I: Aldehydes are generally more reactive than ketones towards nucleophilic addition.\nStatement II: This is due to a combination of lower steric hindrance and lower electron-donation from substituents in aldehydes compared to ketones.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe and explain the relative reactivity of aldehydes and ketones towards nucleophilic addition.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-109',
    type: 'statement',
    question: 'Statement I: Clemmensen reduction uses zinc amalgam and hydrochloric acid under acidic conditions.\nStatement II: Wolff-Kishner reduction uses hydrazine and a strong base under basic conditions.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe these two methods for reducing a carbonyl group directly to a methylene group.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-110',
    type: 'statement',
    question: 'Statement I: A positive Tollens\' test is indicated by the formation of a silver mirror.\nStatement II: A positive Fehling\'s test is indicated by the formation of a brick-red precipitate of Cu2O.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the visual indicators of a positive Tollens\' test and Fehling\'s test.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-111',
    type: 'statement',
    question: 'Statement I: Aromatic aldehydes generally give a positive Fehling\'s test.\nStatement II: Ketones generally give a positive Tollens\' test.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — aromatic aldehydes typically give a negative Fehling\'s test, and ketones generally give a negative (not positive) Tollens\' test.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-112',
    type: 'statement',
    question: 'Statement I: The iodoform test gives a positive result with acetaldehyde.\nStatement II: The iodoform test gives a positive result with ethanol, due to its in situ oxidation to acetaldehyde.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe positive results in the iodoform test for these specific compounds.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-113',
    type: 'statement',
    question: 'Statement I: Aldol condensation requires the presence of an alpha-hydrogen atom on the carbonyl compound.\nStatement II: The Cannizzaro reaction requires the absence of an alpha-hydrogen atom on the aldehyde.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the structural requirements for aldol condensation and the Cannizzaro reaction, respectively.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-114',
    type: 'statement',
    question: 'Statement I: The beta-hydroxy carbonyl compound formed in aldol condensation can dehydrate to give an alpha,beta-unsaturated carbonyl compound.\nStatement II: Crossed aldol condensation between two carbonyl compounds, both with alpha-hydrogens, generally gives a single clean product.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — such a crossed aldol condensation generally gives a mixture of up to four products, not a single clean product.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-115',
    type: 'statement',
    question: 'Statement I: In the Cannizzaro reaction, one molecule of aldehyde is oxidised to a carboxylate salt while another is reduced to an alcohol.\nStatement II: The Cannizzaro reaction is an example of a disproportionation reaction.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the mechanism and classification of the Cannizzaro reaction.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-116',
    type: 'statement',
    question: 'Statement I: The carbonyl group on an aromatic ring is an activating, ortho/para-directing group.\nStatement II: Nitration of benzaldehyde gives predominantly meta-nitrobenzaldehyde.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the carbonyl group is actually a deactivating, meta-directing group, not activating/ortho-para directing. Statement II correctly describes the outcome of benzaldehyde nitration.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-117',
    type: 'statement',
    question: 'Statement I: Oxidation of any alkylbenzene with strong oxidants always gives benzoic acid, regardless of the length of the alkyl side chain.\nStatement II: This occurs because the oxidation cleaves the side chain down to the ring carbon, regardless of chain length.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe and explain this characteristic outcome of strong oxidative side-chain degradation in alkylbenzenes.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-118',
    type: 'statement',
    question: 'Statement I: Carboxylic acids can be prepared from nitriles by hydrolysis.\nStatement II: Carboxylic acids can be prepared from Grignard reagents by reaction with carbon dioxide followed by acidic workup.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe standard methods for preparing carboxylic acids.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-119',
    type: 'statement',
    question: 'Statement I: Carboxylic acids are generally more acidic than phenols.\nStatement II: This is because the carboxylate ion has two equivalent resonance structures, providing more effective charge delocalisation than the phenoxide ion.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe and explain the greater acidity of carboxylic acids compared to phenols.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-120',
    type: 'statement',
    question: 'Statement I: Electron-withdrawing substituents on a carboxylic acid generally increase its acidity.\nStatement II: This inductive effect on acidity becomes stronger, not weaker, as the substituent is moved further away from the -COOH group.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the inductive effect actually weakens (not strengthens) as the substituent moves further from the -COOH group.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-121',
    type: 'statement',
    question: 'Statement I: Trichloroacetic acid is more acidic than acetic acid.\nStatement II: Electron-donating alkyl groups on a carboxylic acid generally increase its acidity.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — electron-donating alkyl groups actually decrease, not increase, carboxylic acid acidity.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-122',
    type: 'statement',
    question: 'Statement I: Carboxylic acids react with thionyl chloride to give an acid chloride.\nStatement II: Carboxylic acids react with alcohols in the presence of an acid catalyst (Fischer esterification) to give an ester.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe standard reactions used to convert carboxylic acids into important derivatives.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-123',
    type: 'statement',
    question: 'Statement I: NaBH4 is generally strong enough to reduce a carboxylic acid to a primary alcohol.\nStatement II: LiAlH4 is required to reduce a carboxylic acid to a primary alcohol under normal conditions.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — NaBH4 is generally not strong enough for this reduction. Statement II correctly identifies the stronger reducing agent required.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-124',
    type: 'statement',
    question: 'Statement I: The Hell-Volhard-Zelinsky reaction introduces a halogen at the alpha-carbon of a carboxylic acid.\nStatement II: This reaction requires red phosphorus as a catalyst.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the HVZ reaction and its catalytic requirement.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-125',
    type: 'statement',
    question: 'Statement I: Heating a sodium carboxylate salt with soda lime results in decarboxylation, giving an alkane.\nStatement II: The resulting alkane has one more carbon atom than the original carboxylic acid.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the resulting alkane has one fewer carbon atom, not one more, than the original acid, since the carboxyl carbon is lost as CO2.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-126',
    type: 'statement',
    question: 'Statement I: Carboxylic acids generally have higher boiling points than aldehydes and ketones of comparable molecular mass.\nStatement II: This is due to the ability of carboxylic acids to form strong intermolecular hydrogen bonds, often existing as dimers.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe and explain the elevated boiling points of carboxylic acids compared to aldehydes and ketones.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-127',
    type: 'statement',
    question: 'Statement I: Reaction of a carboxylic acid with ammonia, followed by heating, gives an amide.\nStatement II: This reaction proceeds through an intermediate ammonium carboxylate salt.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the mechanism and outcome of amide formation from a carboxylic acid and ammonia.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-128',
    type: 'statement',
    question: 'Statement I: Reduction of an aldehyde with NaBH4 or LiAlH4 gives a primary alcohol.\nStatement II: Reduction of a ketone with NaBH4 or LiAlH4 gives a secondary alcohol.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the outcome of hydride reduction of aldehydes and ketones.',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-129',
    type: 'statement',
    question: 'Statement I: Ketones can never undergo any form of oxidative cleavage, regardless of the conditions used.\nStatement II: Under vigorous conditions with strong oxidants, ketones can undergo oxidative C-C bond cleavage to give a mixture of carboxylic acids.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — ketones can indeed undergo oxidative cleavage under sufficiently vigorous conditions. Statement II correctly describes this less common but real reaction pathway.',
    difficulty: 'hard'
  },
  {
    id: 'carbonyl-130',
    type: 'statement',
    question: 'Statement I: The reactivity of aldehydes, ketones, and carboxylic acids is largely governed by the electronic and structural properties of the carbonyl group.\nStatement II: Variations in substituents around the carbonyl carbon influence nucleophilic addition ease, oxidation behaviour, and acidity.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly summarise the central structure-reactivity relationships that unify this chapter\'s content.',
    difficulty: 'medium'
  },

  // ==================== HOW-MANY (20) ====================
  {
    id: 'carbonyl-131',
    type: 'how-many',
    question: 'How many of the following statements about the carbonyl group are correct?\n1. The carbonyl carbon is sp2 hybridised.\n2. The carbonyl carbon is electrophilic.\n3. The carbonyl oxygen bears a partial positive charge.\n4. Carbonyl compounds characteristically undergo nucleophilic addition reactions.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — the carbonyl oxygen bears a partial negative charge, not positive, since it is more electronegative than carbon.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-132',
    type: 'how-many',
    question: 'How many of the following methods correctly give an aldehyde as the product?\n1. Rosenmund reduction of an acid chloride\n2. Stephen reaction on a nitrile\n3. DIBAL-H reduction of an ester at low temperature\n4. Clemmensen reduction of a ketone',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 correctly describe methods for preparing aldehydes. Statement 4 is false — Clemmensen reduction of a ketone gives a hydrocarbon (methylene group), not an aldehyde.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-133',
    type: 'how-many',
    question: 'How many of the following statements about ozonolysis are correct?\n1. Ozonolysis cleaves the C=C double bond of an alkene.\n2. Reductive workup with Zn/H2O gives aldehydes and/or ketones.\n3. Zinc dust prevents over-oxidation of any aldehyde formed.\n4. Ozonolysis always gives only ketones, never aldehydes.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — ozonolysis can give aldehydes, ketones, or both, depending on the substitution of the original alkene.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-134',
    type: 'how-many',
    question: 'How many of the following statements about physical properties of aldehydes and ketones are correct?\n1. Lower members show appreciable water solubility due to hydrogen bond acceptance.\n2. Boiling points are generally higher than hydrocarbons of similar molecular mass.\n3. Boiling points are generally higher than alcohols of similar molecular mass.\n4. Aldehydes and ketones cannot form hydrogen bonds with each other.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — aldehydes/ketones generally have lower, not higher, boiling points than comparable alcohols.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-135',
    type: 'how-many',
    question: 'How many of the following statements about the reactivity of aldehydes versus ketones are correct?\n1. Aldehydes are generally more reactive towards nucleophilic addition.\n2. Ketones have greater steric hindrance around the carbonyl carbon.\n3. Alkyl groups on ketones donate electron density, reducing the electrophilicity of the carbonyl carbon.\n4. Formaldehyde is generally less reactive than acetone towards nucleophilic addition.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — formaldehyde is actually more reactive than acetone, since it has no substituents causing steric hindrance or electron donation.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-136',
    type: 'how-many',
    question: 'How many of the following statements about reduction methods for carbonyl compounds are correct?\n1. Clemmensen reduction uses acidic conditions (Zn-Hg/HCl).\n2. Wolff-Kishner reduction uses basic conditions (NH2NH2/KOH).\n3. Both methods convert a carbonyl group directly to a methylene group.\n4. Both methods are identical and interchangeable in all situations, regardless of substrate sensitivity.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the choice between the two methods depends specifically on whether the substrate is sensitive to acidic or basic conditions.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-137',
    type: 'how-many',
    question: 'How many of the following statements about oxidation tests for carbonyl compounds are correct?\n1. A positive Tollens\' test gives a silver mirror.\n2. A positive Fehling\'s test gives a brick-red Cu2O precipitate.\n3. Ketones generally give positive results in both Tollens\' and Fehling\'s tests.\n4. Aromatic aldehydes generally give a positive Tollens\' test but a negative Fehling\'s test.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — ketones generally give negative results in both tests, not positive.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-138',
    type: 'how-many',
    question: 'How many of the following compounds are correctly expected to give a positive iodoform test?\n1. Acetaldehyde (CH3CHO)\n2. Acetone (CH3COCH3)\n3. Ethanol (CH3CH2OH)\n4. Propionaldehyde (CH3CH2CHO)',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Acetaldehyde, acetone, and ethanol (statements 1, 2, and 3) all give a positive iodoform test. Propionaldehyde (statement 4) does not, since it lacks the required CH3-CO- structural feature.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-139',
    type: 'how-many',
    question: 'How many of the following statements about aldol condensation and the Cannizzaro reaction are correct?\n1. Aldol condensation requires the presence of an alpha-hydrogen.\n2. The Cannizzaro reaction requires the absence of an alpha-hydrogen.\n3. Crossed aldol condensation with two alpha-hydrogen-containing partners typically gives a clean single product.\n4. Benzaldehyde can act as the non-enolisable partner in a Claisen-Schmidt (crossed aldol) reaction.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — such a crossed aldol condensation typically gives a mixture of up to four products, not a single clean product.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-140',
    type: 'how-many',
    question: 'How many of the following statements about electrophilic aromatic substitution on aromatic carbonyl compounds are correct?\n1. The carbonyl group is a deactivating group.\n2. The carbonyl group is a meta-directing group.\n3. Nitration of benzaldehyde gives predominantly the meta isomer.\n4. The carbonyl group activates the ring towards electrophilic substitution.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the carbonyl group deactivates, rather than activates, the aromatic ring.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-141',
    type: 'how-many',
    question: 'How many of the following statements about carboxylic acid preparation are correct?\n1. Nitrile hydrolysis gives a carboxylic acid.\n2. Grignard reagents react with CO2, followed by acidic workup, to give a carboxylic acid.\n3. Oxidation of a primary alcohol with a strong oxidant can give a carboxylic acid.\n4. Oxidation of an alkylbenzene side chain always gives a carboxylic acid with the same number of carbons as the original side chain.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — oxidation of an alkylbenzene side chain, regardless of its original length, always cleaves down to give the carboxylic acid directly attached to the ring (benzoic acid), not one preserving the original side chain length.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-142',
    type: 'how-many',
    question: 'How many of the following statements about acidity of carboxylic acids are correct?\n1. Carboxylic acids are generally more acidic than phenols.\n2. The carboxylate ion has two equivalent resonance structures.\n3. Electron-withdrawing substituents increase carboxylic acid acidity.\n4. Electron-donating substituents increase carboxylic acid acidity.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — electron-donating substituents decrease, not increase, carboxylic acid acidity.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-143',
    type: 'how-many',
    question: 'How many of the following statements about carboxylic acid derivatives and reactions are correct?\n1. Reaction with SOCl2 gives an acid chloride.\n2. Fischer esterification gives an ester.\n3. Reaction with ammonia, followed by heating, gives an amide.\n4. LiAlH4 reduces a carboxylic acid to an aldehyde, stopping before the alcohol stage.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — LiAlH4 reduces a carboxylic acid all the way to a primary alcohol, not stopping at the aldehyde stage.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-144',
    type: 'how-many',
    question: 'How many of the following statements about the Hell-Volhard-Zelinsky (HVZ) reaction are correct?\n1. It introduces a halogen at the alpha-carbon of a carboxylic acid.\n2. It requires red phosphorus as a catalyst.\n3. The resulting alpha-halo acid is more acidic than the parent acid.\n4. The reaction can be carried out using Cl2 or Br2.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe the HVZ reaction, its reagents, mechanism, and the properties of its product.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-145',
    type: 'how-many',
    question: 'How many of the following statements about decarboxylation are correct?\n1. Heating a sodium carboxylate with soda lime gives an alkane.\n2. The resulting alkane has one fewer carbon atom than the original acid.\n3. Decarboxylation releases carbon dioxide gas.\n4. Decarboxylation always requires an oxidising agent, never a base like soda lime.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — decarboxylation via soda lime is a classic base-mediated reaction, and does not require an oxidising agent.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-146',
    type: 'how-many',
    question: 'How many of the following statements about IUPAC nomenclature suffixes are correctly matched?\n1. Aldehyde — "-al"\n2. Ketone — "-one"\n3. Carboxylic acid — "-oic acid"\n4. Alcohol — "-oic acid"',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correctly matched. Statement 4 is false — the correct suffix for an alcohol is "-ol", not "-oic acid".',
    difficulty: 'easy'
  },
  {
    id: 'carbonyl-147',
    type: 'how-many',
    question: 'How many of the following statements about nucleophilic addition derivatives of carbonyl compounds are correct?\n1. Reaction with HCN gives a cyanohydrin.\n2. Reaction with hydroxylamine gives an oxime.\n3. Reaction with semicarbazide gives a semicarbazone.\n4. Reaction with excess alcohol under acid catalysis gives an amide.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — reaction with excess alcohol under acid catalysis gives an acetal (or ketal), not an amide.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-148',
    type: 'how-many',
    question: 'How many of the following statements about ketone resistance to oxidation are correct?\n1. Ketones lack a hydrogen atom on the carbonyl carbon.\n2. Ketones generally resist mild oxidation.\n3. Under vigorous conditions, ketones can undergo oxidative C-C bond cleavage.\n4. Ketones can never be oxidised under any circumstances, no matter how vigorous the conditions.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — ketones can indeed undergo oxidative cleavage under sufficiently vigorous, strongly oxidising conditions.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-149',
    type: 'how-many',
    question: 'How many of the following statements about boiling points across functional groups (of comparable molecular mass) are correct?\n1. Carboxylic acids generally have higher boiling points than alcohols.\n2. Alcohols generally have higher boiling points than aldehydes/ketones.\n3. Aldehydes/ketones generally have higher boiling points than ethers or hydrocarbons.\n4. Ethers generally have higher boiling points than carboxylic acids.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct, reflecting the general trend of decreasing hydrogen-bonding/dipole strength across these functional groups. Statement 4 is false — carboxylic acids have much higher boiling points than ethers, not lower.',
    difficulty: 'medium'
  },
  {
    id: 'carbonyl-150',
    type: 'how-many',
    question: 'How many of the following statements correctly summarise key themes of the aldehydes, ketones, and carboxylic acids chapter?\n1. The electrophilic carbonyl carbon underlies characteristic nucleophilic addition reactions.\n2. Oxidation state differences (aldehyde vs. ketone) explain differing reactivity towards mild oxidants like Tollens\' and Fehling\'s reagents.\n3. Aldol condensation and the Cannizzaro reaction both depend critically on the presence or absence of alpha-hydrogens.\n4. Carboxylic acid acidity and derivative chemistry (esters, amides, acid halides) stem from the properties of the -COOH group.\n5. Ethers are the most reactive functional group discussed in this chapter.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, 3, and 4 correctly summarise major themes of the chapter. Statement 5 is false — ethers are not even a primary focus of this chapter (they belong to a different chapter) and are known for being relatively unreactive, not the most reactive group discussed here.',
    difficulty: 'medium'
  }
];
>>>>>>> 9e6ae6a5ea2181b313543ecdc8c39b664ed24496
