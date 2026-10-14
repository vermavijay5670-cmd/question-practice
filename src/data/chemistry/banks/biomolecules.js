<<<<<<< HEAD
export const BIOMOLECULES = [
  // ==================== MCQ (70) ====================
  {
    id: 'biomol-1',
    type: 'mcq',
    question: 'Carbohydrates that cannot be further hydrolysed into simpler polyhydroxy compounds are called',
    options: ['disaccharides', 'oligosaccharides', 'polysaccharides', 'monosaccharides'],
    correctIndex: 3,
    explanation: 'Monosaccharides are the simplest carbohydrates, such as glucose and fructose, that cannot be broken down further by hydrolysis into simpler sugar units.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-2',
    type: 'mcq',
    question: 'Carbohydrates that, on hydrolysis, give two to ten monosaccharide units linked together are classified as',
    options: ['monosaccharides', 'proteins', 'nucleic acids', 'oligosaccharides'],
    correctIndex: 3,
    explanation: 'Oligosaccharides yield between two and ten monosaccharide units upon hydrolysis; the most common and biologically important oligosaccharides are the disaccharides.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-3',
    type: 'mcq',
    question: 'A carbohydrate that contains a free aldehyde or ketone group, allowing it to reduce Tollens\' or Fehling\'s reagent, is called a',
    options: ['zwitterion', 'polysaccharide only', 'non-reducing sugar', 'reducing sugar'],
    correctIndex: 3,
    explanation: 'A reducing sugar has a free (or readily accessible) aldehyde or ketone group capable of reducing mild oxidising agents such as Tollens\' or Fehling\'s reagent.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-4',
    type: 'mcq',
    question: 'All monosaccharides, including ketoses such as fructose, are classified as reducing sugars mainly because',
    options: [
      'they never have any carbonyl group at all',
      'monosaccharides are incapable of any chemical reaction',
      'monosaccharides always exist exclusively in their open-chain aldehyde form',
      'even a ketose can tautomerise under the basic reaction conditions to a structure containing an oxidisable group'
    ],
    correctIndex: 3,
    explanation: 'Under the basic conditions of tests like Fehling\'s or Tollens\', a ketose such as fructose can tautomerise to give a structure capable of reducing the reagent, so all monosaccharides are classified as reducing sugars.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-5',
    type: 'mcq',
    question: 'Among the common disaccharides, sucrose is classified as a non-reducing sugar because',
    options: [
      'it contains no glycosidic bond at all',
      'both anomeric carbons of its constituent monosaccharides are involved in the glycosidic linkage, leaving no free aldehyde or ketone group',
      'sucrose does not actually contain any monosaccharide units',
      'sucrose is not soluble in water'
    ],
    correctIndex: 1,
    explanation: 'In sucrose, both anomeric carbons (of glucose and fructose) are joined together in the glycosidic bond, so no free carbonyl-derived (hemiacetal/hemiketal) group remains to act as a reducing agent.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-6',
    type: 'mcq',
    question: 'Maltose and lactose are classified as reducing sugars because',
    options: [
      'they contain no monosaccharide units at all',
      'one of the two anomeric carbons in each disaccharide remains free, retaining a hemiacetal group capable of reduction',
      'both anomeric carbons in each disaccharide are always involved in the glycosidic bond',
      'they are completely insoluble in water'
    ],
    correctIndex: 1,
    explanation: 'In maltose and lactose, only one of the two possible anomeric carbons is involved in the glycosidic linkage, leaving the other free to act as a reducing group.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-7',
    type: 'mcq',
    question: 'The open-chain structure of glucose is established, in part, by its reaction with hydroxylamine to form an oxime, which confirms the presence of a',
    options: ['carboxylic acid group', 'ester linkage', 'ether linkage', 'carbonyl (aldehyde) group'],
    correctIndex: 3,
    explanation: 'The formation of an oxime with hydroxylamine is a classic test confirming the presence of a carbonyl group, supporting the open-chain aldehyde structure of glucose.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-8',
    type: 'mcq',
    question: 'Acetylation of glucose with acetic anhydride gives glucose pentaacetate, a result that confirms the presence of',
    options: ['no oxygen atoms in glucose', 'five hydroxyl groups in the glucose molecule', 'a benzene ring in glucose', 'a single carboxylic acid group'],
    correctIndex: 1,
    explanation: 'The formation of a pentaacetate derivative indicates that glucose contains five hydroxyl (-OH) groups, each of which is acetylated.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-9',
    type: 'mcq',
    question: 'Oxidation of glucose with a mild oxidising agent such as bromine water gives gluconic acid, a six-carbon monocarboxylic acid, indicating that',
    options: [
      'glucose has no oxidisable functional group at all',
      'both the aldehyde and primary alcohol groups are oxidised',
      'glucose contains an aromatic ring',
      'only the aldehyde group of glucose is oxidised, while the primary alcohol group remains unaffected'
    ],
    correctIndex: 3,
    explanation: 'Bromine water is a mild oxidant that selectively oxidises the aldehyde group of glucose to a carboxylic acid, without affecting the primary alcohol group, giving gluconic acid.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-10',
    type: 'mcq',
    question: 'Oxidation of glucose with a stronger oxidising agent such as concentrated nitric acid gives saccharic acid (glucaric acid), a dicarboxylic acid, which shows that',
    options: [
      'glucose contains only one oxidisable group',
      'nitric acid oxidises both the terminal aldehyde group and the terminal primary alcohol group to carboxylic acid groups',
      'nitric acid has no effect on glucose whatsoever',
      'glucose is not a six-carbon compound'
    ],
    correctIndex: 1,
    explanation: 'Concentrated nitric acid is a stronger oxidant that oxidises both the aldehyde group and the terminal -CH2OH group of glucose to carboxylic acid groups, giving the dicarboxylic saccharic acid and confirming the positions of these terminal groups on a straight six-carbon chain.',
    difficulty: 'hard'
  },
  {
    id: 'biomol-11',
    type: 'mcq',
    question: 'Despite having a free aldehyde group in its open-chain form, glucose does not give a strongly positive Schiff\'s test, mainly because',
    options: [
      'glucose contains no carbon atoms at all',
      'glucose exists predominantly in a cyclic hemiacetal form in solution, with only a very small amount of the open-chain aldehyde form present at equilibrium',
      'the Schiff\'s test reagent does not exist',
      'glucose reacts violently and explosively with Schiff\'s reagent'
    ],
    correctIndex: 1,
    explanation: 'Since glucose exists mainly as the cyclic hemiacetal, only a minute fraction of the open-chain aldehyde form is present at any time, which is why glucose does not give a strongly positive Schiff\'s test, consistent with its cyclic structure.',
    difficulty: 'hard'
  },
  {
    id: 'biomol-12',
    type: 'mcq',
    question: 'The predominant cyclic form of glucose in solution is a six-membered ring, formed by reaction between the -OH group at C5 and the aldehyde group at C1, and is known as the',
    options: ['zwitterionic form', 'aromatic form', 'furanose form', 'pyranose form'],
    correctIndex: 3,
    explanation: 'Glucose predominantly adopts a six-membered ring structure called the pyranose form, formed by the intramolecular reaction between the C5 hydroxyl group and the C1 aldehyde.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-13',
    type: 'mcq',
    question: 'Fructose, a ketohexose, predominantly forms a five-membered cyclic ring structure known as the',
    options: ['pyranose form', 'furanose form', 'aromatic form', 'acyclic form only'],
    correctIndex: 1,
    explanation: 'Fructose forms a five-membered ring (furanose form) through reaction between the C5 hydroxyl group and the C2 ketone group.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-14',
    type: 'mcq',
    question: 'In the cyclic form of glucose, the new stereocentre created at C1 (the carbon originally bearing the aldehyde group) is called the',
    options: ['terminal carbon', 'quaternary carbon', 'chiral centre only', 'anomeric carbon'],
    correctIndex: 3,
    explanation: 'The carbon at which the new stereocentre is generated upon ring closure (C1 in glucose) is called the anomeric carbon.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-15',
    type: 'mcq',
    question: 'The two cyclic forms of glucose, alpha-D-glucose and beta-D-glucose, are called anomers because they differ from each other',
    options: [
      'in molecular formula',
      'only in the configuration at the anomeric carbon (C1)',
      'in every stereocentre of the molecule',
      'in the number of carbon atoms present'
    ],
    correctIndex: 1,
    explanation: 'Anomers are a special type of stereoisomer that differ specifically in configuration at the anomeric carbon, while all other stereocentres remain the same.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-16',
    type: 'mcq',
    question: 'The spontaneous change in specific rotation observed when a pure sample of either the alpha or beta anomer of glucose is dissolved in water, as the solution reaches an equilibrium mixture of both anomers, is called',
    options: ['denaturation', 'mutarotation', 'racemisation', 'saponification'],
    correctIndex: 1,
    explanation: 'Mutarotation refers to the gradual change in optical rotation observed as a pure anomer of glucose equilibrates (via the open-chain form) with the other anomer in solution.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-17',
    type: 'mcq',
    question: 'Sucrose, upon hydrolysis, gives one molecule each of',
    options: ['fructose and galactose', 'glucose and fructose', 'glucose and galactose', 'two molecules of glucose'],
    correctIndex: 1,
    explanation: 'Hydrolysis of sucrose gives an equimolar mixture of glucose and fructose.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-18',
    type: 'mcq',
    question: 'Maltose, upon hydrolysis, gives',
    options: ['glucose and galactose', 'a single molecule of glucose', 'glucose and fructose', 'two molecules of glucose, linked in the intact disaccharide by an alpha-1,4-glycosidic bond'],
    correctIndex: 3,
    explanation: 'Maltose is composed of two glucose units joined by an alpha-1,4-glycosidic linkage, and hydrolysis releases two glucose molecules.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-19',
    type: 'mcq',
    question: 'Lactose, upon hydrolysis, gives one molecule each of',
    options: ['galactose and fructose', 'galactose and glucose', 'two molecules of fructose', 'glucose and fructose'],
    correctIndex: 1,
    explanation: 'Lactose (milk sugar) is composed of galactose and glucose joined by a beta-1,4-glycosidic linkage, and hydrolysis releases these two monosaccharides.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-20',
    type: 'mcq',
    question: 'Starch, an important storage polysaccharide in plants, is composed of two structural components, namely',
    options: [
      'ribose and deoxyribose',
      'cellulose and glycogen',
      'glucose and galactose only, in a 1:1 disaccharide',
      'amylose (linear) and amylopectin (branched)'
    ],
    correctIndex: 3,
    explanation: 'Starch consists of two components: amylose, a linear polymer of glucose, and amylopectin, a highly branched polymer of glucose.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-21',
    type: 'mcq',
    question: 'Amylose, the linear component of starch, is composed of glucose units linked by',
    options: [
      'beta-1,4-glycosidic bonds',
      'peptide bonds',
      'alpha-1,6-glycosidic bonds exclusively',
      'alpha-1,4-glycosidic bonds, forming a helical/coiled structure'
    ],
    correctIndex: 3,
    explanation: 'Amylose consists of glucose units connected via alpha-1,4-glycosidic linkages, which allow the chain to adopt a characteristic helical structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-22',
    type: 'mcq',
    question: 'Amylopectin, the branched component of starch, contains both alpha-1,4-glycosidic linkages along the chain and',
    options: [
      'beta-1,4-glycosidic branch points',
      'alpha-1,6-glycosidic linkages at the branch points',
      'no branch points at all',
      'peptide bond branch points'
    ],
    correctIndex: 1,
    explanation: 'Amylopectin has a branched structure, with alpha-1,4-glycosidic linkages along the main chains and alpha-1,6-glycosidic linkages at the branch points.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-23',
    type: 'mcq',
    question: 'Cellulose, a structural polysaccharide found in plant cell walls, is composed of glucose units linked by',
    options: ['alpha-1,6-glycosidic bonds', 'beta-1,4-glycosidic bonds', 'alpha-1,4-glycosidic bonds', 'peptide bonds'],
    correctIndex: 1,
    explanation: 'Cellulose consists of glucose units joined by beta-1,4-glycosidic linkages, giving it a linear, rigid structure suited to its structural role in plant cell walls.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-24',
    type: 'mcq',
    question: 'Humans cannot digest cellulose mainly because',
    options: [
      'cellulose is toxic to humans',
      'cellulose does not exist in any food source',
      'cellulose is not made of glucose units',
      'the human digestive system lacks the enzyme needed to hydrolyse the beta-1,4-glycosidic linkage'
    ],
    correctIndex: 3,
    explanation: 'Since humans lack the enzyme capable of hydrolysing beta-1,4-glycosidic bonds, cellulose passes through the digestive system largely undigested, unlike starch (alpha-1,4-linked), which is digestible.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-25',
    type: 'mcq',
    question: 'Glycogen, often referred to as "animal starch", is a highly branched polysaccharide that serves as',
    options: [
      'a component of nucleic acids',
      'the storage form of glucose in animals, analogous to starch in plants',
      'the primary structural component of animal connective tissue',
      'a type of protein'
    ],
    correctIndex: 1,
    explanation: 'Glycogen is the storage polysaccharide found in animals (particularly in liver and muscle), serving a role analogous to starch in plants.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-26',
    type: 'mcq',
    question: 'An alpha-amino acid is defined as an amino acid in which',
    options: [
      'the amino group and carboxyl group are attached to different, distant carbon atoms',
      'no carboxyl group is present at all',
      'no amino group is present at all',
      'both the amino group and the carboxyl group are attached to the same (alpha) carbon atom'
    ],
    correctIndex: 3,
    explanation: 'In an alpha-amino acid, both the amino group and the carboxyl group are attached to the same carbon atom, designated the alpha-carbon.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-27',
    type: 'mcq',
    question: 'Amino acids that cannot be synthesised by the human body and must be obtained through the diet are called',
    options: ['acidic amino acids', 'zwitterionic amino acids', 'non-essential amino acids', 'essential amino acids'],
    correctIndex: 3,
    explanation: 'Essential amino acids cannot be synthesised by the body in sufficient quantities and must therefore be supplied through the diet.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-28',
    type: 'mcq',
    question: 'In the solid state and in aqueous solution, amino acids exist predominantly as',
    options: [
      'purely cationic species with no negative charge anywhere',
      'zwitterions (dipolar ions), with a protonated amino group (-NH3+) and a deprotonated carboxyl group (-COO-)',
      'purely anionic species with no positive charge anywhere',
      'neutral, fully uncharged molecules'
    ],
    correctIndex: 1,
    explanation: 'Amino acids exist predominantly as zwitterions, in which an internal proton transfer generates a positively charged ammonium group and a negatively charged carboxylate group, while the overall molecule can remain net neutral.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-29',
    type: 'mcq',
    question: 'The zwitterionic nature of amino acids helps explain their',
    options: [
      'lack of any acidic or basic character',
      'complete inability to dissolve in any solvent',
      'unusually low melting points and poor solubility in water',
      'relatively high melting points and salt-like solubility behaviour'
    ],
    correctIndex: 3,
    explanation: 'Since zwitterions behave somewhat like ionic (salt-like) species, amino acids typically show relatively high melting points and solubility characteristics similar to ionic compounds.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-30',
    type: 'mcq',
    question: 'A peptide bond is formed between two amino acids through',
    options: [
      'an ester linkage between two carboxyl groups',
      'an amide linkage formed between the -COOH group of one amino acid and the -NH2 group of another, with loss of a water molecule',
      'a glycosidic linkage between two hydroxyl groups',
      'a disulfide linkage between two thiol groups'
    ],
    correctIndex: 1,
    explanation: 'A peptide bond is an amide linkage formed by condensation between the carboxyl group of one amino acid and the amino group of another, releasing a molecule of water.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-31',
    type: 'mcq',
    question: 'The primary structure of a protein refers to',
    options: [
      'the overall three-dimensional folding of the protein',
      'the type of secondary structure (alpha-helix or beta-sheet) present',
      'the arrangement of multiple polypeptide subunits',
      'the specific linear sequence of amino acids in the polypeptide chain'
    ],
    correctIndex: 3,
    explanation: 'Primary structure refers simply to the sequence in which amino acids are linked together in the polypeptide chain.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-32',
    type: 'mcq',
    question: 'The secondary structure of a protein refers to the',
    options: [
      'assembly of multiple polypeptide chains into a functional complex',
      'regular, repeating local folding patterns, such as the alpha-helix and beta-pleated sheet',
      'chemical composition of the amino acid side chains only',
      'linear sequence of amino acids'
    ],
    correctIndex: 1,
    explanation: 'Secondary structure describes regular, repeating local structural motifs within a polypeptide chain, most notably the alpha-helix and beta-pleated sheet.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-33',
    type: 'mcq',
    question: 'The alpha-helix, a common protein secondary structure, is a right-handed coiled/spiral arrangement stabilised primarily by',
    options: [
      'ionic bonds between charged side chains',
      'covalent bonds between adjacent amino acids other than the peptide bond',
      'disulfide bonds between distant cysteine residues',
      'intramolecular hydrogen bonds between the C=O and N-H groups of the peptide backbone'
    ],
    correctIndex: 3,
    explanation: 'The alpha-helix is stabilised by a regular, repeating pattern of intramolecular hydrogen bonds between the carbonyl oxygen and amide hydrogen of the peptide backbone, spaced along the helix.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-34',
    type: 'mcq',
    question: 'The beta-pleated sheet, another common protein secondary structure, is typically stabilised by',
    options: [
      'ionic interactions exclusively',
      'intermolecular (or interchain) hydrogen bonds between adjacent, extended polypeptide strands arranged side by side',
      'no hydrogen bonding of any kind',
      'intramolecular hydrogen bonds within a single, tightly coiled chain'
    ],
    correctIndex: 1,
    explanation: 'The beta-pleated sheet involves extended polypeptide strands lying alongside one another, held together by hydrogen bonds formed between adjacent strands (interchain, or between distant regions of a single folded chain).',
    difficulty: 'medium'
  },
  {
    id: 'biomol-35',
    type: 'mcq',
    question: 'The tertiary structure of a protein refers to the',
    options: [
      'exclusive presence of alpha-helices with no other structural motifs',
      'overall three-dimensional folding of a single polypeptide chain, giving it its specific compact shape',
      'sequence of amino acids only',
      'arrangement of multiple separate polypeptide chains'
    ],
    correctIndex: 1,
    explanation: 'Tertiary structure describes the overall three-dimensional shape adopted by a single polypeptide chain as it folds into its functional (often globular) conformation.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-36',
    type: 'mcq',
    question: 'The quaternary structure of a protein refers to',
    options: [
      'a type of secondary structure motif',
      'the process by which a protein is denatured',
      'the sequence of amino acids in a chain',
      'the spatial arrangement of two or more polypeptide subunits into a single functional protein complex'
    ],
    correctIndex: 3,
    explanation: 'Quaternary structure describes how multiple individual polypeptide subunits assemble together to form a single, functional multi-subunit protein, such as haemoglobin.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-37',
    type: 'mcq',
    question: 'Denaturation of a protein refers to the',
    options: [
      'complete destruction of all covalent bonds in the molecule',
      'loss of the native secondary and tertiary structure (and associated biological activity), while the primary structure (amino acid sequence) remains intact',
      'breaking of the peptide bonds that form the primary structure',
      'process by which an amino acid becomes a zwitterion'
    ],
    correctIndex: 1,
    explanation: 'Denaturation disrupts the weaker interactions (hydrogen bonds, ionic bonds, hydrophobic interactions) responsible for secondary and tertiary structure, typically causing loss of biological activity, while the primary sequence of amino acids remains unchanged.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-38',
    type: 'mcq',
    question: 'The coagulation of egg white upon boiling is a classic example of',
    options: [
      'mutarotation',
      'protein synthesis',
      'a glycosidic bond formation reaction',
      'protein denaturation, caused by heat disrupting the native protein structure'
    ],
    correctIndex: 3,
    explanation: 'Heating disrupts the weak intramolecular interactions maintaining egg albumin\'s native structure, causing it to denature and coagulate, a well-known example of heat-induced denaturation.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-39',
    type: 'mcq',
    question: 'Fibrous proteins, such as keratin and collagen, are generally characterised by',
    options: [
      'a complete absence of any secondary structure',
      'elongated, thread-like polypeptide chains lying roughly parallel to one another, and generally poor water solubility',
      'being composed entirely of carbohydrate, not protein',
      'a compact, spherical shape and good water solubility'
    ],
    correctIndex: 1,
    explanation: 'Fibrous proteins consist of elongated, parallel polypeptide chains, held together by hydrogen and disulfide bonds, and are generally insoluble in water, in contrast to globular proteins.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-40',
    type: 'mcq',
    question: 'Globular proteins, such as insulin and albumins, are generally characterised by',
    options: [
      'elongated, thread-like chains with no folding at all',
      'complete insolubility in any solvent',
      'the complete absence of any amino acid sequence',
      'a compact, roughly spherical shape formed by extensive chain folding, and generally good water solubility'
    ],
    correctIndex: 3,
    explanation: 'Globular proteins fold into compact, roughly spherical shapes and are generally soluble in water, distinguishing them from fibrous proteins.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-41',
    type: 'mcq',
    question: 'Enzymes are best described as',
    options: [
      'a type of carbohydrate',
      'inorganic catalysts with no relationship to proteins',
      'substances that always slow down biochemical reactions',
      'biological catalysts, most of which are proteins, that increase the rate of biochemical reactions'
    ],
    correctIndex: 3,
    explanation: 'Enzymes are biological catalysts, predominantly proteins, that dramatically increase the rate of specific biochemical reactions without being consumed in the process.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-42',
    type: 'mcq',
    question: 'A key characteristic feature of enzymes is their',
    options: [
      'exclusive occurrence outside of living organisms',
      'high specificity for a particular substrate or type of reaction',
      'complete lack of specificity, catalysing any and all reactions equally',
      'inability to increase reaction rate at all'
    ],
    correctIndex: 1,
    explanation: 'Enzymes are highly specific, typically catalysing only one particular reaction or a narrow range of closely related substrates, often described using models such as the lock-and-key or induced-fit model.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-43',
    type: 'mcq',
    question: 'Vitamins are broadly classified into two categories, fat-soluble and water-soluble, based mainly on their',
    options: [
      'ability to act as enzymes',
      'colour when isolated in pure form',
      'atomic composition, with fat-soluble vitamins containing no carbon',
      'solubility behaviour, which correlates with whether the body stores them or requires regular dietary intake'
    ],
    correctIndex: 3,
    explanation: 'Vitamins are classified as fat-soluble or water-soluble based on their solubility properties, which in turn relates to whether the body can store them (fat-soluble, in liver and fatty tissue) or must obtain them regularly through diet (water-soluble, generally not stored, with excess excreted in urine).',
    difficulty: 'medium'
  },
  {
    id: 'biomol-44',
    type: 'mcq',
    question: 'Which of the following is classified as a fat-soluble vitamin?',
    options: ['Vitamin B12', 'Vitamin A', 'Vitamin C', 'Vitamin B1'],
    correctIndex: 1,
    explanation: 'Vitamin A, along with vitamins D, E, and K, is a fat-soluble vitamin, stored in the body\'s liver and adipose tissue.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-45',
    type: 'mcq',
    question: 'Which of the following is classified as a water-soluble vitamin?',
    options: ['Vitamin K', 'Vitamin A', 'Vitamin D', 'Vitamin C'],
    correctIndex: 3,
    explanation: 'Vitamin C, along with the B-complex vitamins, is water-soluble; excess amounts are generally not stored and are excreted in the urine.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-46',
    type: 'mcq',
    question: 'Deficiency of vitamin A in the diet is classically associated with',
    options: ['beriberi', 'night blindness (and xerophthalmia)', 'scurvy', 'rickets'],
    correctIndex: 1,
    explanation: 'Vitamin A deficiency is classically associated with night blindness and, in more severe cases, xerophthalmia (dryness and damage to the cornea).',
    difficulty: 'medium'
  },
  {
    id: 'biomol-47',
    type: 'mcq',
    question: 'Deficiency of vitamin B1 (thiamine) is classically associated with the disease',
    options: ['rickets', 'beriberi', 'scurvy', 'pernicious anaemia'],
    correctIndex: 1,
    explanation: 'A deficiency of thiamine (vitamin B1) leads to beriberi, a disease affecting the nervous and cardiovascular systems.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-48',
    type: 'mcq',
    question: 'Deficiency of vitamin C (ascorbic acid) is classically associated with the disease',
    options: ['beriberi', 'rickets', 'night blindness', 'scurvy'],
    correctIndex: 3,
    explanation: 'A deficiency of vitamin C leads to scurvy, characterised by bleeding gums and poor wound healing.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-49',
    type: 'mcq',
    question: 'Deficiency of vitamin D is classically associated with',
    options: ['scurvy', 'night blindness', 'beriberi', 'rickets in children (and osteomalacia in adults)'],
    correctIndex: 3,
    explanation: 'A deficiency of vitamin D leads to rickets in children (soft, weak bones) and osteomalacia in adults, both related to impaired calcium metabolism/bone mineralisation.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-50',
    type: 'mcq',
    question: 'Deficiency of vitamin K is classically associated with',
    options: [
      'scurvy',
      'increased blood clotting time, due to its essential role in the blood clotting process',
      'rickets',
      'night blindness'
    ],
    correctIndex: 1,
    explanation: 'Vitamin K is essential for proper blood clotting, and its deficiency leads to increased clotting time, potentially causing excessive bleeding.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-51',
    type: 'mcq',
    question: 'Deficiency of vitamin B12 (cobalamin) is classically associated with',
    options: ['rickets', 'scurvy', 'beriberi', 'pernicious anaemia'],
    correctIndex: 3,
    explanation: 'A deficiency of vitamin B12 leads to pernicious anaemia, a condition affecting red blood cell production.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-52',
    type: 'mcq',
    question: 'Nucleic acids, such as DNA and RNA, are polymers built from repeating units called',
    options: ['monosaccharides', 'nucleotides', 'amino acids', 'fatty acids'],
    correctIndex: 1,
    explanation: 'Nucleic acids are polymers of nucleotides, each composed of a nitrogenous base, a pentose sugar, and a phosphate group.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-53',
    type: 'mcq',
    question: 'A nucleoside differs from a nucleotide in that a nucleoside',
    options: [
      'lacks the phosphate group, consisting only of the nitrogenous base and the pentose sugar',
      'is a much larger polymer than a nucleotide',
      'contains no nitrogenous base at all',
      'contains a phosphate group, while a nucleotide does not'
    ],
    correctIndex: 0,
    explanation: 'A nucleoside is composed of a nitrogenous base linked to a pentose sugar, without the phosphate group that is present in a full nucleotide.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-54',
    type: 'mcq',
    question: 'The pentose sugar present in DNA is',
    options: ['2-deoxyribose, lacking a hydroxyl group at the 2\' position', 'fructose', 'ribose', 'galactose'],
    correctIndex: 0,
    explanation: 'DNA contains 2-deoxyribose, which lacks the hydroxyl group at the 2\' carbon that is present in the ribose found in RNA.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-55',
    type: 'mcq',
    question: 'The pentose sugar present in RNA is',
    options: ['2-deoxyribose', 'glucose', 'fructose', 'ribose, which retains a hydroxyl group at the 2\' position'],
    correctIndex: 3,
    explanation: 'RNA contains ribose, which has a hydroxyl group at the 2\' carbon, distinguishing it from the deoxyribose found in DNA.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-56',
    type: 'mcq',
    question: 'The nitrogenous bases adenine and guanine belong to the class of compounds known as',
    options: ['amino acids', 'purines', 'pyrimidines', 'pentoses'],
    correctIndex: 1,
    explanation: 'Adenine and guanine are purine bases, characterised by a fused double-ring structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-57',
    type: 'mcq',
    question: 'The nitrogenous bases cytosine, thymine, and uracil belong to the class of compounds known as',
    options: ['monosaccharides', 'purines', 'pyrimidines, characterised by a single-ring structure', 'fatty acids'],
    correctIndex: 2,
    explanation: 'Cytosine, thymine, and uracil are pyrimidine bases, characterised by a single-ring structure, in contrast to the fused double-ring purines.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-58',
    type: 'mcq',
    question: 'Thymine is found specifically in',
    options: ['RNA only', 'DNA only', 'both DNA and RNA equally', 'neither DNA nor RNA'],
    correctIndex: 1,
    explanation: 'Thymine is a pyrimidine base found specifically in DNA, where it replaces the uracil found in RNA.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-59',
    type: 'mcq',
    question: 'Uracil is found specifically in',
    options: ['DNA only', 'RNA only, in place of the thymine found in DNA', 'both DNA and RNA equally', 'neither DNA nor RNA'],
    correctIndex: 1,
    explanation: 'Uracil is a pyrimidine base found specifically in RNA, replacing the thymine found in DNA.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-60',
    type: 'mcq',
    question: 'In the Watson-Crick double helix model of DNA, adenine specifically pairs with',
    options: ['uracil, via three hydrogen bonds', 'guanine, via three hydrogen bonds', 'cytosine, via two hydrogen bonds', 'thymine, via two hydrogen bonds'],
    correctIndex: 3,
    explanation: 'In DNA, adenine pairs specifically with thymine through two hydrogen bonds, a key feature of the complementary base pairing central to the double helix structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-61',
    type: 'mcq',
    question: 'In the Watson-Crick double helix model of DNA, guanine specifically pairs with',
    options: ['cytosine, via three hydrogen bonds', 'adenine, via two hydrogen bonds', 'uracil, via three hydrogen bonds', 'thymine, via two hydrogen bonds'],
    correctIndex: 0,
    explanation: 'Guanine pairs specifically with cytosine through three hydrogen bonds, another key feature of the complementary base pairing in DNA.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-62',
    type: 'mcq',
    question: 'The two strands of the DNA double helix are described as running',
    options: [
      'parallel to each other, in the same 5\' to 3\' direction',
      'in no particular consistent direction at all',
      'antiparallel to each other, with one strand running 5\' to 3\' and the other running 3\' to 5\'',
      'perpendicular to each other'
    ],
    correctIndex: 2,
    explanation: 'The two strands of the DNA double helix are antiparallel, running in opposite directions relative to each other, an essential structural feature of the double helix.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-63',
    type: 'mcq',
    question: 'The sugar-phosphate backbone of a DNA (or RNA) strand is held together by',
    options: [
      'glycosidic bonds between adjacent nitrogenous bases',
      'phosphodiester linkages between the 3\' and 5\' carbons of adjacent sugar units',
      'hydrogen bonds only',
      'peptide bonds'
    ],
    correctIndex: 1,
    explanation: 'The backbone of a nucleic acid strand is formed by phosphodiester bonds, which link the 3\' carbon of one sugar to the 5\' carbon of the next sugar via a phosphate group.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-64',
    type: 'mcq',
    question: 'The functional role of DNA in the cell is primarily to',
    options: [
      'store and transmit genetic information, which is replicated and passed on during cell division',
      'directly catalyse metabolic reactions as an enzyme',
      'act as an energy storage molecule, like glycogen',
      'act as a structural component of the cell membrane'
    ],
    correctIndex: 0,
    explanation: 'DNA serves as the primary repository of genetic information, which is faithfully replicated and passed on to daughter cells during cell division.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-65',
    type: 'mcq',
    question: 'Messenger RNA (mRNA) functions to',
    options: [
      'store long-term genetic information in place of DNA',
      'form the structural and catalytic core of the ribosome',
      'carry the genetic code from DNA to the ribosome for protein synthesis',
      'carry amino acids to the ribosome during translation'
    ],
    correctIndex: 2,
    explanation: 'mRNA carries the genetic information transcribed from DNA to the ribosome, where it serves as the template for protein synthesis.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-66',
    type: 'mcq',
    question: 'Transfer RNA (tRNA) functions to',
    options: [
      'store the complete genetic blueprint of the organism',
      'carry specific amino acids to the ribosome during translation, matching them to the corresponding codon on mRNA',
      'form the structural framework of the entire ribosome',
      'carry the genetic code from DNA to the ribosome'
    ],
    correctIndex: 1,
    explanation: 'tRNA molecules recognise specific codons on the mRNA and deliver the corresponding amino acids to the ribosome during the process of translation (protein synthesis).',
    difficulty: 'medium'
  },
  {
    id: 'biomol-67',
    type: 'mcq',
    question: 'Ribosomal RNA (rRNA) functions as',
    options: [
      'a molecule with no role in protein synthesis at all',
      'a molecule that stores long-term genetic information exclusively',
      'a molecule that carries amino acids to the ribosome',
      'a structural and catalytic component of the ribosome, the site of protein synthesis'
    ],
    correctIndex: 3,
    explanation: 'rRNA forms an integral structural and catalytic part of the ribosome, the cellular machinery responsible for protein synthesis.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-68',
    type: 'mcq',
    question: 'Hormones are best described as',
    options: [
      'chemical messengers secreted by endocrine glands that regulate various physiological processes',
      'a type of nucleic acid',
      'structural components of cell membranes only',
      'compounds with no biological role at all'
    ],
    correctIndex: 0,
    explanation: 'Hormones are chemical messengers, secreted directly into the bloodstream by endocrine glands, that regulate diverse physiological processes throughout the body.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-69',
    type: 'mcq',
    question: 'Insulin, a hormone that helps regulate blood glucose levels, is chemically classified as a',
    options: ['carbohydrate', 'nucleic acid', 'steroid', 'protein (polypeptide hormone)'],
    correctIndex: 3,
    explanation: 'Insulin is a protein hormone, composed of polypeptide chains, that plays a central role in regulating blood glucose levels.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-70',
    type: 'mcq',
    question: 'Overall, the study of biomolecules, as emphasised throughout this NCERT chapter, integrates the structure and function of',
    options: [
      'carbohydrates, proteins, enzymes, vitamins, nucleic acids, and hormones, all central to the chemistry of living systems',
      'only inorganic minerals found in the human body',
      'only synthetic polymers unrelated to biology',
      'topics entirely unrelated to chemical structure or function'
    ],
    correctIndex: 0,
    explanation: 'This chapter surveys the major classes of biomolecules — carbohydrates, proteins, enzymes, vitamins, nucleic acids, and hormones — highlighting how their chemical structures underpin their essential biological functions.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'biomol-71',
    type: 'assertion-reason',
    question: 'Assertion (A): All monosaccharides, including ketoses like fructose, are classified as reducing sugars.\nReason (R): Under the basic conditions of tests like Fehling\'s solution, a ketose can tautomerise to a structure capable of reducing the reagent.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This tautomerisation pathway available under basic conditions is exactly why even a ketose like fructose behaves as a reducing sugar, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-72',
    type: 'assertion-reason',
    question: 'Assertion (A): Sucrose is a non-reducing sugar.\nReason (R): Both anomeric carbons of the glucose and fructose units in sucrose are involved in the glycosidic linkage, leaving no free hemiacetal or hemiketal group.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The involvement of both anomeric carbons in the glycosidic bond, leaving no free reducing group, is exactly why sucrose is non-reducing, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-73',
    type: 'assertion-reason',
    question: 'Assertion (A): Oxidation of glucose with bromine water gives gluconic acid rather than saccharic acid.\nReason (R): Bromine water is a mild oxidising agent that selectively oxidises the aldehyde group without affecting the primary alcohol group of glucose.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This selectivity of bromine water, oxidising only the aldehyde group, is exactly why the product is the monocarboxylic gluconic acid rather than the dicarboxylic saccharic acid, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-74',
    type: 'assertion-reason',
    question: 'Assertion (A): Glucose does not give a strongly positive Schiff\'s test.\nReason (R): Glucose exists predominantly in a cyclic hemiacetal form in solution, with only a very small equilibrium concentration of the open-chain aldehyde form present.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This predominance of the cyclic form, minimising the amount of free aldehyde available, directly explains why glucose does not react strongly in the Schiff\'s test, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'biomol-75',
    type: 'assertion-reason',
    question: 'Assertion (A): A freshly dissolved sample of pure alpha-D-glucose shows a gradual change in optical rotation over time.\nReason (R): This phenomenon, called mutarotation, occurs as the alpha anomer equilibrates with the beta anomer via the open-chain form.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This interconversion between anomers, reaching an equilibrium mixture with a different net optical rotation, is exactly what causes the gradual change described in A, correctly explaining it.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-76',
    type: 'assertion-reason',
    question: 'Assertion (A): Cellulose cannot be digested by humans, while starch can be.\nReason (R): Cellulose contains beta-1,4-glycosidic linkages, which the human digestive system lacks the enzyme to hydrolyse, whereas starch contains alpha-1,4-glycosidic linkages, which human enzymes can hydrolyse.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This difference in glycosidic linkage type, and the corresponding enzyme specificity of the human digestive system, directly explains why starch is digestible but cellulose is not, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-77',
    type: 'assertion-reason',
    question: 'Assertion (A): Amino acids generally have relatively high melting points compared to other organic molecules of similar size.\nReason (R): Amino acids exist predominantly as zwitterions, behaving somewhat like ionic compounds, which typically have stronger intermolecular forces than simple neutral organic molecules.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This ionic (zwitterionic) character, resulting in strong electrostatic intermolecular attractions, directly explains the relatively high melting points of amino acids, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-78',
    type: 'assertion-reason',
    question: 'Assertion (A): The alpha-helix secondary structure of proteins is stabilised by hydrogen bonds.\nReason (R): These hydrogen bonds form between the C=O group of one peptide bond and the N-H group of another peptide bond further along the same chain, within the coiled structure.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This specific pattern of intramolecular hydrogen bonding along the coiled backbone is exactly what stabilises and maintains the alpha-helical structure, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-79',
    type: 'assertion-reason',
    question: 'Assertion (A): Denaturation of a protein typically results in loss of its biological activity.\nReason (R): Denaturation disrupts the secondary and tertiary structure of the protein, which are often essential for its correct three-dimensional shape and function.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This disruption of the structural features essential for proper protein function directly explains why denaturation typically leads to loss of biological activity, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-80',
    type: 'assertion-reason',
    question: 'Assertion (A): Denaturation of a protein does not change its primary structure.\nReason (R): Denaturation primarily disrupts weaker, non-covalent interactions (such as hydrogen bonds), while the covalent peptide bonds forming the amino acid sequence remain intact.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since denaturation targets the weaker interactions rather than the strong covalent peptide bonds, the amino acid sequence (primary structure) is preserved, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-81',
    type: 'assertion-reason',
    question: 'Assertion (A): Fibrous proteins are generally insoluble in water, unlike globular proteins.\nReason (R): Fibrous proteins have elongated, parallel chains held together by extensive hydrogen and disulfide bonding, minimising exposure of polar groups to water.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This structural arrangement, minimising interaction with water, directly explains the general insolubility of fibrous proteins compared to the more water-accessible globular proteins, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-82',
    type: 'assertion-reason',
    question: 'Assertion (A): Enzymes are highly specific for their substrates.\nReason (R): The three-dimensional structure of an enzyme\'s active site is precisely shaped to interact with a particular substrate (or a small range of related substrates).',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This precise structural complementarity between the active site and substrate is exactly what accounts for enzyme specificity, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-83',
    type: 'assertion-reason',
    question: 'Assertion (A): Fat-soluble vitamins can lead to toxicity if taken in excess, more so than water-soluble vitamins.\nReason (R): Fat-soluble vitamins are stored in the body\'s fatty tissue and liver, allowing them to accumulate to potentially harmful levels over time, unlike water-soluble vitamins, whose excess is generally excreted in urine.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This tendency of fat-soluble vitamins to accumulate in body tissue, unlike readily excreted water-soluble vitamins, directly explains their greater potential for toxicity from excessive intake, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-84',
    type: 'assertion-reason',
    question: 'Assertion (A): Vitamin C deficiency needs to be addressed more urgently through regular dietary intake compared to vitamin A deficiency.\nReason (R): Vitamin C, being water-soluble, is not significantly stored in the body, so deficiency symptoms can develop relatively quickly without regular intake, unlike fat-soluble vitamin A.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The lack of significant storage of water-soluble vitamins like vitamin C directly explains why regular dietary intake is more urgently needed compared to stored fat-soluble vitamins, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-85',
    type: 'assertion-reason',
    question: 'Assertion (A): DNA contains thymine, while RNA contains uracil instead.\nReason (R): This is one of several structural differences between DNA and RNA, alongside the difference in pentose sugar (deoxyribose versus ribose).',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 1,
    explanation: 'Both statements are factually correct, but R merely places this base difference alongside another structural distinction rather than explaining the underlying chemical reason for why thymine and uracil specifically differ between DNA and RNA.',
    difficulty: 'hard'
  },
  {
    id: 'biomol-86',
    type: 'assertion-reason',
    question: 'Assertion (A): In DNA, adenine always pairs with thymine, and guanine always pairs with cytosine.\nReason (R): This specific complementary base pairing arises from the particular hydrogen-bonding patterns and molecular geometry that allow these specific pairs to fit together within the double helix.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'These specific structural and hydrogen-bonding compatibilities are exactly why only these particular base pairs form reliably within the DNA double helix, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-87',
    type: 'assertion-reason',
    question: 'Assertion (A): The two strands of the DNA double helix run in opposite (antiparallel) directions.\nReason (R): This antiparallel arrangement is essential to the specific geometry required for proper complementary base pairing and helix formation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The geometric requirements for stable base pairing and helix formation are exactly why the two DNA strands must run antiparallel to each other, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-88',
    type: 'assertion-reason',
    question: 'Assertion (A): mRNA, tRNA, and rRNA each play distinct roles in the overall process of protein synthesis.\nReason (R): mRNA carries genetic information from DNA, tRNA delivers specific amino acids to the ribosome, and rRNA forms the structural and catalytic core of the ribosome itself.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This clear division of labour among the three RNA types is exactly what allows them to collectively carry out the process of protein synthesis, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-89',
    type: 'assertion-reason',
    question: 'Assertion (A): Amylose adopts a helical structure, while cellulose adopts a more extended, linear structure.\nReason (R): Amylose is composed of glucose units joined by alpha-1,4-glycosidic linkages, while cellulose is composed of glucose units joined by beta-1,4-glycosidic linkages, which allow for different overall chain geometries.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This difference in glycosidic linkage type (alpha vs. beta) directly accounts for the differing overall chain geometries (helical vs. extended/linear) of amylose and cellulose, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-90',
    type: 'assertion-reason',
    question: 'Assertion (A): Insulin is classified as a protein hormone.\nReason (R): Insulin is composed of polypeptide chains, giving it the structural characteristics of a protein.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The presence of polypeptide chains, characteristic of proteins, is exactly why insulin is classified as a protein hormone, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-91',
    type: 'assertion-reason',
    question: 'Assertion (A): The pentaacetate derivative of glucose provides evidence for the presence of five hydroxyl groups.\nReason (R): Each hydroxyl group present in glucose is individually converted to an acetate ester during the acetylation reaction.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This one-to-one conversion of each hydroxyl group into an acetate ester is exactly why the observed pentaacetate product confirms the presence of five hydroxyl groups, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-92',
    type: 'assertion-reason',
    question: 'Assertion (A): Peptide bond formation between two amino acids is accompanied by the release of a water molecule.\nReason (R): The peptide bond is an amide linkage, formed by condensation between the carboxyl group of one amino acid and the amino group of another.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This condensation mechanism, which characteristically releases water upon amide bond formation, is exactly why peptide bond formation is accompanied by loss of a water molecule, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-93',
    type: 'assertion-reason',
    question: 'Assertion (A): Haemoglobin\'s function depends on its quaternary structure.\nReason (R): Haemoglobin is composed of four separate polypeptide subunits that must assemble correctly into a single functional complex for proper oxygen-binding activity.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The proper assembly of these four subunits, described in R, is exactly why haemoglobin\'s functional oxygen-binding activity depends on maintaining its correct quaternary structure, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-94',
    type: 'assertion-reason',
    question: 'Assertion (A): DNA replication relies on complementary base pairing.\nReason (R): Each strand of the original DNA double helix can serve as a template, since the specific pairing rules (A-T, G-C) ensure that a new complementary strand can be accurately synthesised.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This templating mechanism, made possible by the specific and predictable base-pairing rules, is exactly why complementary base pairing underlies accurate DNA replication, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-95',
    type: 'assertion-reason',
    question: 'Assertion (A): A zwitterion of an amino acid carries no net electrical charge overall, even though it has both positively and negatively charged groups.\nReason (R): The positive charge on the protonated amino group (-NH3+) exactly balances the negative charge on the deprotonated carboxylate group (-COO-).',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This exact charge balance between the two oppositely charged groups is precisely why the overall zwitterion carries no net charge, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-96',
    type: 'assertion-reason',
    question: 'Assertion (A): Vitamin K deficiency can lead to excessive or prolonged bleeding.\nReason (R): Vitamin K is essential for the proper functioning of the blood clotting process.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The essential role of vitamin K in blood clotting is exactly why its deficiency leads to prolonged bleeding due to impaired clotting ability, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-97',
    type: 'assertion-reason',
    question: 'Assertion (A): Reducing sugars are always monosaccharides, and disaccharides are always non-reducing.\nReason (R): Maltose and lactose are disaccharides that give a positive test with Tollens\' or Fehling\'s reagent.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — some disaccharides, such as maltose and lactose, are also reducing sugars, since they retain a free anomeric hydroxyl group. R correctly identifies these exceptions to the false claim made in A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-98',
    type: 'assertion-reason',
    question: 'Assertion (A): The alpha-1,6-glycosidic linkages found in amylopectin and glycogen are structurally identical in their role.\nReason (R): Both alpha-1,6-linkages serve as branch points within their respective glucose polymer structures.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This shared structural role as branch points in both amylopectin and glycogen directly explains why these alpha-1,6-linkages serve an analogous function in each polymer, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-99',
    type: 'assertion-reason',
    question: 'Assertion (A): All proteins have exactly the same secondary structure, regardless of amino acid sequence.\nReason (R): Secondary structure motifs like the alpha-helix and beta-pleated sheet are determined by the specific pattern of hydrogen bonding possible along a given polypeptide backbone, which depends on the amino acid sequence.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — different proteins can have varying combinations and amounts of alpha-helix, beta-sheet, and other structural motifs, depending on their specific sequence. R correctly explains why secondary structure is sequence-dependent, contrary to the false uniform claim in A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-100',
    type: 'assertion-reason',
    question: 'Assertion (A): The chemistry of biomolecules integrates concepts from carbohydrate, protein, and nucleic acid structure with broader themes of molecular recognition and biological function.\nReason (R): Features such as glycosidic bonds, peptide bonds, hydrogen bonding patterns, and complementary base pairing all contribute to the specific structures that underlie the diverse biological roles of these molecules.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'These specific structural features, shared across the different classes of biomolecules discussed in R, directly explain the integrated, cross-cutting themes highlighted in A.',
    difficulty: 'medium'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'biomol-101',
    type: 'statement',
    question: 'Statement I: Monosaccharides cannot be hydrolysed into simpler carbohydrate units.\nStatement II: Oligosaccharides give two to ten monosaccharide units upon hydrolysis.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the definitions of monosaccharides and oligosaccharides.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-102',
    type: 'statement',
    question: 'Statement I: Sucrose is a reducing sugar.\nStatement II: Maltose and lactose are non-reducing sugars.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — sucrose is actually a non-reducing sugar, while maltose and lactose are reducing sugars, the opposite of what is stated.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-103',
    type: 'statement',
    question: 'Statement I: Oxidation of glucose with bromine water gives gluconic acid.\nStatement II: Oxidation of glucose with concentrated nitric acid gives saccharic (glucaric) acid.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the products of these two different oxidation reactions used to establish glucose\'s open-chain structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-104',
    type: 'statement',
    question: 'Statement I: Glucose exists predominantly as a five-membered ring (furanose) in solution.\nStatement II: Fructose exists predominantly as a five-membered ring (furanose) in solution.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — glucose predominantly forms a six-membered pyranose ring, not a furanose ring. Statement II correctly describes fructose\'s predominant furanose form.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-105',
    type: 'statement',
    question: 'Statement I: Mutarotation refers to the interconversion of glucose anomers via the open-chain form.\nStatement II: Mutarotation results in a change in the observed optical rotation of a freshly dissolved sample of a pure anomer.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the mechanism and observable consequence of mutarotation.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-106',
    type: 'statement',
    question: 'Statement I: Amylose is a linear polymer of glucose with alpha-1,4-glycosidic linkages.\nStatement II: Amylopectin is a branched polymer of glucose, with alpha-1,6-linkages at the branch points.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the structures of amylose and amylopectin, the two components of starch.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-107',
    type: 'statement',
    question: 'Statement I: Cellulose is composed of glucose units linked by alpha-1,4-glycosidic bonds, similar to starch.\nStatement II: Humans can readily digest cellulose using the same enzymes used to digest starch.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — cellulose is actually linked by beta-1,4-glycosidic bonds (not alpha-1,4), and humans lack the enzyme needed to hydrolyse these beta-linkages, so cellulose is not digestible.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-108',
    type: 'statement',
    question: 'Statement I: Glycogen is the storage polysaccharide found in animals.\nStatement II: Glycogen has a highly branched structure, similar in principle to amylopectin.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe glycogen and its structural similarity to amylopectin.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-109',
    type: 'statement',
    question: 'Statement I: Amino acids exist predominantly as zwitterions in solution.\nStatement II: This zwitterionic character contributes to their relatively high melting points.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the zwitterionic nature of amino acids and its effect on their physical properties.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-110',
    type: 'statement',
    question: 'Statement I: Essential amino acids can be synthesised by the human body in sufficient quantities.\nStatement II: Non-essential amino acids must be obtained entirely from the diet.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — the definitions are reversed. Essential amino acids cannot be synthesised by the body (must come from diet), while non-essential amino acids can be synthesised by the body.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-111',
    type: 'statement',
    question: 'Statement I: A peptide bond is an amide linkage formed between two amino acids.\nStatement II: Peptide bond formation is accompanied by the loss of a water molecule.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the nature and mechanism of peptide bond formation.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-112',
    type: 'statement',
    question: 'Statement I: Primary structure refers to the amino acid sequence of a protein.\nStatement II: Secondary structure refers to the overall three-dimensional folding of the entire protein.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — this description actually applies to tertiary structure, not secondary structure, which instead refers to local, regular folding patterns like alpha-helices and beta-sheets.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-113',
    type: 'statement',
    question: 'Statement I: The alpha-helix is stabilised by intramolecular hydrogen bonds.\nStatement II: The beta-pleated sheet is typically stabilised by intermolecular (or interchain) hydrogen bonds.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly distinguish the hydrogen-bonding patterns that stabilise these two secondary structure motifs.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-114',
    type: 'statement',
    question: 'Statement I: Quaternary structure describes the sequence of amino acids within a single polypeptide chain.\nStatement II: Quaternary structure describes the assembly of multiple polypeptide subunits into a functional complex.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — this describes primary structure, not quaternary structure. Statement II correctly describes quaternary structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-115',
    type: 'statement',
    question: 'Statement I: Denaturation of a protein disrupts its secondary and tertiary structure.\nStatement II: Denaturation typically breaks the peptide bonds that form the primary structure of the protein.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — denaturation does not typically break the peptide bonds of the primary structure, which remains intact.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-116',
    type: 'statement',
    question: 'Statement I: Fibrous proteins are generally soluble in water.\nStatement II: Globular proteins are generally soluble in water.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — fibrous proteins are generally insoluble in water, not soluble. Statement II correctly describes the general water solubility of globular proteins.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-117',
    type: 'statement',
    question: 'Statement I: Enzymes are biological catalysts, most of which are proteins.\nStatement II: Enzymes generally show high specificity for their substrates.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the nature and characteristic specificity of enzymes.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-118',
    type: 'statement',
    question: 'Statement I: Fat-soluble vitamins are generally stored in the body\'s liver and adipose tissue.\nStatement II: Water-soluble vitamins are generally stored extensively in the body for long periods.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — water-soluble vitamins are generally not stored extensively, with excess typically excreted in urine.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-119',
    type: 'statement',
    question: 'Statement I: Vitamin A deficiency is associated with night blindness.\nStatement II: Vitamin D deficiency is associated with scurvy.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — vitamin D deficiency is associated with rickets/osteomalacia, not scurvy (which is caused by vitamin C deficiency).',
    difficulty: 'medium'
  },
  {
    id: 'biomol-120',
    type: 'statement',
    question: 'Statement I: Vitamin B1 deficiency is associated with beriberi.\nStatement II: Vitamin B12 deficiency is associated with pernicious anaemia.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly match these specific vitamin deficiencies with their associated diseases.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-121',
    type: 'statement',
    question: 'Statement I: A nucleotide is composed of a nitrogenous base, a pentose sugar, and a phosphate group.\nStatement II: A nucleoside lacks the phosphate group found in a nucleotide.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly define the composition of nucleotides and nucleosides.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-122',
    type: 'statement',
    question: 'Statement I: DNA contains ribose as its pentose sugar.\nStatement II: RNA contains 2-deoxyribose as its pentose sugar.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — the sugars are swapped. DNA contains 2-deoxyribose, and RNA contains ribose.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-123',
    type: 'statement',
    question: 'Statement I: Adenine and guanine are purine bases.\nStatement II: Cytosine, thymine, and uracil are pyrimidine bases.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly classify these nitrogenous bases into the purine and pyrimidine categories.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-124',
    type: 'statement',
    question: 'Statement I: Thymine is found exclusively in DNA.\nStatement II: Uracil is found exclusively in RNA.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the exclusive occurrence of thymine in DNA and uracil in RNA.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-125',
    type: 'statement',
    question: 'Statement I: In DNA, adenine pairs with thymine via two hydrogen bonds.\nStatement II: In DNA, guanine pairs with cytosine via three hydrogen bonds.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the specific hydrogen-bonding patterns of the two complementary base pairs in DNA.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-126',
    type: 'statement',
    question: 'Statement I: The two strands of the DNA double helix run parallel to each other, in the same direction.\nStatement II: The sugar-phosphate backbone of DNA is held together by phosphodiester linkages.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the two DNA strands run antiparallel (opposite directions), not parallel. Statement II correctly describes the phosphodiester backbone linkage.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-127',
    type: 'statement',
    question: 'Statement I: mRNA carries the genetic code from DNA to the ribosome.\nStatement II: tRNA carries specific amino acids to the ribosome during translation.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the distinct functional roles of mRNA and tRNA in protein synthesis.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-128',
    type: 'statement',
    question: 'Statement I: rRNA forms a structural and catalytic component of the ribosome.\nStatement II: rRNA has no role at all in protein synthesis.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II directly contradicts Statement I and is incorrect — rRNA plays a central role in protein synthesis as part of the ribosome.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-129',
    type: 'statement',
    question: 'Statement I: Hormones are chemical messengers secreted by endocrine glands.\nStatement II: Insulin, a hormone, is chemically classified as a protein.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the general nature of hormones and the specific chemical classification of insulin.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-130',
    type: 'statement',
    question: 'Statement I: The chemistry of biomolecules covers only carbohydrates and proteins, with no connection to nucleic acids or vitamins.\nStatement II: Biomolecule chemistry integrates carbohydrates, proteins, enzymes, vitamins, nucleic acids, and hormones as interconnected topics central to living systems.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect and understates the scope of the chapter. Statement II correctly captures the full, integrated scope of biomolecule chemistry as covered in this chapter.',
    difficulty: 'medium'
  },

  // ==================== HOW-MANY (20) ====================
  {
    id: 'biomol-131',
    type: 'how-many',
    question: 'How many of the following statements about carbohydrate classification are correct?\n1. Monosaccharides cannot be hydrolysed further.\n2. Oligosaccharides give two to ten monosaccharide units on hydrolysis.\n3. Polysaccharides give many monosaccharide units on hydrolysis.\n4. All carbohydrates, regardless of class, are classified as reducing sugars.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — not all carbohydrates are reducing sugars; sucrose, for example, is non-reducing.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-132',
    type: 'how-many',
    question: 'How many of the following statements about the structural evidence for glucose\'s open-chain form are correct?\n1. Glucose forms an oxime with hydroxylamine, confirming a carbonyl group.\n2. Glucose forms a pentaacetate, confirming five hydroxyl groups.\n3. Oxidation with bromine water gives saccharic acid.\n4. Oxidation with concentrated nitric acid gives a dicarboxylic acid (saccharic/glucaric acid).',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — bromine water gives the monocarboxylic gluconic acid, not the dicarboxylic saccharic acid (which requires the stronger oxidant, nitric acid).',
    difficulty: 'medium'
  },
  {
    id: 'biomol-133',
    type: 'how-many',
    question: 'How many of the following statements about the cyclic structure of glucose are correct?\n1. Glucose predominantly forms a six-membered pyranose ring.\n2. The anomeric carbon is the new stereocentre created upon ring closure.\n3. Alpha and beta anomers differ in configuration at every stereocentre in the molecule.\n4. Mutarotation is the interconversion between anomers via the open-chain form.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — anomers differ specifically at only the anomeric carbon, not at every stereocentre.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-134',
    type: 'how-many',
    question: 'How many of the following statements about disaccharides are correct?\n1. Sucrose hydrolyses to give glucose and fructose.\n2. Maltose hydrolyses to give two glucose units.\n3. Lactose hydrolyses to give galactose and glucose.\n4. Sucrose is a reducing sugar.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — sucrose is a non-reducing sugar.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-135',
    type: 'how-many',
    question: 'How many of the following statements about polysaccharides are correct?\n1. Amylose has alpha-1,4-glycosidic linkages and a helical structure.\n2. Amylopectin is branched, with alpha-1,6-linkages at branch points.\n3. Cellulose has beta-1,4-glycosidic linkages.\n4. Glycogen is the storage polysaccharide in plants, analogous to starch in animals.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — glycogen is the storage polysaccharide in animals, not plants; starch serves this role in plants.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-136',
    type: 'how-many',
    question: 'How many of the following statements about amino acids are correct?\n1. Alpha-amino acids have both the amino and carboxyl groups on the same carbon.\n2. Essential amino acids can be synthesised by the body in sufficient amounts.\n3. Amino acids exist predominantly as zwitterions.\n4. Zwitterionic character contributes to relatively high melting points of amino acids.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 3, and 4 are correct. Statement 2 is false — essential amino acids cannot be synthesised by the body and must be obtained from the diet.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-137',
    type: 'how-many',
    question: 'How many of the following statements about protein structure levels are correct?\n1. Primary structure refers to amino acid sequence.\n2. Secondary structure includes the alpha-helix and beta-pleated sheet.\n3. Tertiary structure refers to the overall 3D folding of a single polypeptide chain.\n4. Quaternary structure refers to the assembly of multiple polypeptide subunits.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe the four hierarchical levels of protein structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-138',
    type: 'how-many',
    question: 'How many of the following statements about protein denaturation are correct?\n1. Denaturation disrupts secondary and tertiary structure.\n2. Denaturation typically results in loss of biological activity.\n3. Denaturation breaks the peptide bonds forming the primary structure.\n4. Coagulation of egg white on boiling is an example of denaturation.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — denaturation does not typically break the peptide bonds of the primary structure, which remains intact.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-139',
    type: 'how-many',
    question: 'How many of the following statements about fibrous and globular proteins are correct?\n1. Fibrous proteins have elongated, parallel chains.\n2. Fibrous proteins are generally insoluble in water.\n3. Globular proteins fold into compact, spherical shapes.\n4. Globular proteins are generally insoluble in water, similar to fibrous proteins.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — globular proteins are generally soluble in water, unlike fibrous proteins.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-140',
    type: 'how-many',
    question: 'How many of the following statements about enzymes are correct?\n1. Enzymes are biological catalysts, mostly proteins.\n2. Enzymes show high specificity for their substrates.\n3. Enzymes are consumed and destroyed during the reactions they catalyse.\n4. Enzymes increase reaction rate by lowering the activation energy.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — like other catalysts, enzymes are not consumed in the reactions they catalyse.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-141',
    type: 'how-many',
    question: 'How many of the following vitamin-deficiency disease pairs are correctly matched?\n1. Vitamin A — night blindness\n2. Vitamin B1 — beriberi\n3. Vitamin C — scurvy\n4. Vitamin D — pernicious anaemia',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correctly matched. Statement 4 is false — vitamin D deficiency causes rickets/osteomalacia, not pernicious anaemia (which is caused by vitamin B12 deficiency).',
    difficulty: 'medium'
  },
  {
    id: 'biomol-142',
    type: 'how-many',
    question: 'How many of the following statements about fat-soluble and water-soluble vitamins are correct?\n1. Fat-soluble vitamins are stored in the liver and adipose tissue.\n2. Water-soluble vitamins are generally not stored extensively in the body.\n3. Excess water-soluble vitamins are typically excreted in urine.\n4. Fat-soluble vitamins include vitamins A, D, E, and K.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe the classification and storage behaviour of fat-soluble and water-soluble vitamins.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-143',
    type: 'how-many',
    question: 'How many of the following statements about nucleotides and nucleosides are correct?\n1. A nucleotide contains a nitrogenous base, a pentose sugar, and a phosphate group.\n2. A nucleoside lacks the phosphate group found in a nucleotide.\n3. DNA and RNA are polymers of nucleotides.\n4. A nucleoside contains a phosphate group but no pentose sugar.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a nucleoside contains a pentose sugar but lacks the phosphate group, the opposite of what is stated.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-144',
    type: 'how-many',
    question: 'How many of the following statements about DNA and RNA structural differences are correct?\n1. DNA contains 2-deoxyribose; RNA contains ribose.\n2. DNA contains thymine; RNA contains uracil.\n3. DNA is generally double-stranded; RNA is often single-stranded.\n4. DNA and RNA both contain identical sets of nitrogenous bases with no differences.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — DNA and RNA differ specifically in one base (thymine vs. uracil), so their base sets are not identical.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-145',
    type: 'how-many',
    question: 'How many of the following statements about DNA base pairing are correct?\n1. Adenine pairs with thymine via two hydrogen bonds.\n2. Guanine pairs with cytosine via three hydrogen bonds.\n3. This specific pairing is essential for accurate DNA replication.\n4. Adenine can pair equally well with either thymine or cytosine.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — adenine specifically pairs with thymine, not cytosine, due to the specific hydrogen-bonding and geometric compatibility required.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-146',
    type: 'how-many',
    question: 'How many of the following statements about the functions of different RNA types are correct?\n1. mRNA carries genetic information from DNA to the ribosome.\n2. tRNA carries specific amino acids to the ribosome during translation.\n3. rRNA forms a structural/catalytic component of the ribosome.\n4. All three RNA types perform exactly the same function, with no distinction between them.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts the well-established distinct roles of mRNA, tRNA, and rRNA.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-147',
    type: 'how-many',
    question: 'How many of the following statements about hormones are correct?\n1. Hormones are chemical messengers secreted by endocrine glands.\n2. Insulin is a protein hormone.\n3. Hormones play a role in regulating various physiological processes.\n4. All hormones are chemically classified as carbohydrates.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — hormones can be proteins, steroids, or amino acid derivatives, not exclusively carbohydrates.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-148',
    type: 'how-many',
    question: 'How many of the following statements about glycosidic linkages in different polysaccharides are correct?\n1. Amylose has alpha-1,4-linkages.\n2. Cellulose has beta-1,4-linkages.\n3. Amylopectin has alpha-1,4-linkages along chains and alpha-1,6-linkages at branches.\n4. Glycogen has exclusively beta-glycosidic linkages, similar to cellulose.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — glycogen, like amylopectin, has alpha-glycosidic linkages (both 1,4 and 1,6), not beta-linkages like cellulose.',
    difficulty: 'hard'
  },
  {
    id: 'biomol-149',
    type: 'how-many',
    question: 'How many of the following statements about protein secondary structure are correct?\n1. The alpha-helix is a right-handed coiled structure.\n2. The alpha-helix is stabilised by intramolecular hydrogen bonds.\n3. The beta-pleated sheet involves extended chains held together by interchain hydrogen bonds.\n4. Both the alpha-helix and beta-pleated sheet are examples of tertiary, not secondary, structure.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the alpha-helix and beta-pleated sheet are both classic examples of secondary structure, not tertiary structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-150',
    type: 'how-many',
    question: 'How many of the following statements correctly summarise key themes of the biomolecules chapter?\n1. Carbohydrate structure and reactivity (reducing/non-reducing sugars, cyclic forms) underlie the chemistry of sugars and polysaccharides.\n2. Protein structure is organised hierarchically into primary, secondary, tertiary, and quaternary levels.\n3. Vitamins are classified by solubility, which relates to storage and deficiency onset.\n4. Nucleic acid structure (base pairing, sugar-phosphate backbone) underlies genetic information storage and protein synthesis.\n5. Hormones have no chemical relationship to proteins, carbohydrates, or steroids.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, 3, and 4 correctly summarise major themes of the biomolecules chapter. Statement 5 is false — hormones are, in fact, chemically classified as proteins (e.g. insulin), amino acid derivatives, or steroids, so they are directly related to these other biomolecule classes.',
    difficulty: 'medium'
  }
];
=======
export const BIOMOLECULES = [
  // ==================== MCQ (70) ====================
  {
    id: 'biomol-1',
    type: 'mcq',
    question: 'Carbohydrates that cannot be further hydrolysed into simpler polyhydroxy compounds are called',
    options: ['oligosaccharides', 'monosaccharides', 'polysaccharides', 'disaccharides'],
    correctIndex: 1,
    explanation: 'Monosaccharides are the simplest carbohydrates, such as glucose and fructose, that cannot be broken down further by hydrolysis into simpler sugar units.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-2',
    type: 'mcq',
    question: 'Carbohydrates that, on hydrolysis, give two to ten monosaccharide units linked together are classified as',
    options: ['monosaccharides', 'oligosaccharides', 'proteins', 'nucleic acids'],
    correctIndex: 1,
    explanation: 'Oligosaccharides yield between two and ten monosaccharide units upon hydrolysis; the most common and biologically important oligosaccharides are the disaccharides.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-3',
    type: 'mcq',
    question: 'A carbohydrate that contains a free aldehyde or ketone group, allowing it to reduce Tollens\' or Fehling\'s reagent, is called a',
    options: ['non-reducing sugar', 'reducing sugar', 'polysaccharide only', 'zwitterion'],
    correctIndex: 1,
    explanation: 'A reducing sugar has a free (or readily accessible) aldehyde or ketone group capable of reducing mild oxidising agents such as Tollens\' or Fehling\'s reagent.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-4',
    type: 'mcq',
    question: 'All monosaccharides, including ketoses such as fructose, are classified as reducing sugars mainly because',
    options: [
      'they never have any carbonyl group at all',
      'even a ketose can tautomerise under the basic reaction conditions to a structure containing an oxidisable group',
      'monosaccharides always exist exclusively in their open-chain aldehyde form',
      'monosaccharides are incapable of any chemical reaction'
    ],
    correctIndex: 1,
    explanation: 'Under the basic conditions of tests like Fehling\'s or Tollens\', a ketose such as fructose can tautomerise to give a structure capable of reducing the reagent, so all monosaccharides are classified as reducing sugars.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-5',
    type: 'mcq',
    question: 'Among the common disaccharides, sucrose is classified as a non-reducing sugar because',
    options: [
      'it contains no glycosidic bond at all',
      'both anomeric carbons of its constituent monosaccharides are involved in the glycosidic linkage, leaving no free aldehyde or ketone group',
      'sucrose does not actually contain any monosaccharide units',
      'sucrose is not soluble in water'
    ],
    correctIndex: 1,
    explanation: 'In sucrose, both anomeric carbons (of glucose and fructose) are joined together in the glycosidic bond, so no free carbonyl-derived (hemiacetal/hemiketal) group remains to act as a reducing agent.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-6',
    type: 'mcq',
    question: 'Maltose and lactose are classified as reducing sugars because',
    options: [
      'they contain no monosaccharide units at all',
      'one of the two anomeric carbons in each disaccharide remains free, retaining a hemiacetal group capable of reduction',
      'both anomeric carbons in each disaccharide are always involved in the glycosidic bond',
      'they are completely insoluble in water'
    ],
    correctIndex: 1,
    explanation: 'In maltose and lactose, only one of the two possible anomeric carbons is involved in the glycosidic linkage, leaving the other free to act as a reducing group.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-7',
    type: 'mcq',
    question: 'The open-chain structure of glucose is established, in part, by its reaction with hydroxylamine to form an oxime, which confirms the presence of a',
    options: ['carboxylic acid group', 'carbonyl (aldehyde) group', 'ether linkage', 'ester linkage'],
    correctIndex: 1,
    explanation: 'The formation of an oxime with hydroxylamine is a classic test confirming the presence of a carbonyl group, supporting the open-chain aldehyde structure of glucose.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-8',
    type: 'mcq',
    question: 'Acetylation of glucose with acetic anhydride gives glucose pentaacetate, a result that confirms the presence of',
    options: ['five hydroxyl groups in the glucose molecule', 'a single carboxylic acid group', 'no oxygen atoms in glucose', 'a benzene ring in glucose'],
    correctIndex: 0,
    explanation: 'The formation of a pentaacetate derivative indicates that glucose contains five hydroxyl (-OH) groups, each of which is acetylated.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-9',
    type: 'mcq',
    question: 'Oxidation of glucose with a mild oxidising agent such as bromine water gives gluconic acid, a six-carbon monocarboxylic acid, indicating that',
    options: [
      'only the aldehyde group of glucose is oxidised, while the primary alcohol group remains unaffected',
      'both the aldehyde and primary alcohol groups are oxidised',
      'glucose has no oxidisable functional group at all',
      'glucose contains an aromatic ring'
    ],
    correctIndex: 0,
    explanation: 'Bromine water is a mild oxidant that selectively oxidises the aldehyde group of glucose to a carboxylic acid, without affecting the primary alcohol group, giving gluconic acid.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-10',
    type: 'mcq',
    question: 'Oxidation of glucose with a stronger oxidising agent such as concentrated nitric acid gives saccharic acid (glucaric acid), a dicarboxylic acid, which shows that',
    options: [
      'nitric acid oxidises both the terminal aldehyde group and the terminal primary alcohol group to carboxylic acid groups',
      'nitric acid has no effect on glucose whatsoever',
      'glucose contains only one oxidisable group',
      'glucose is not a six-carbon compound'
    ],
    correctIndex: 0,
    explanation: 'Concentrated nitric acid is a stronger oxidant that oxidises both the aldehyde group and the terminal -CH2OH group of glucose to carboxylic acid groups, giving the dicarboxylic saccharic acid and confirming the positions of these terminal groups on a straight six-carbon chain.',
    difficulty: 'hard'
  },
  {
    id: 'biomol-11',
    type: 'mcq',
    question: 'Despite having a free aldehyde group in its open-chain form, glucose does not give a strongly positive Schiff\'s test, mainly because',
    options: [
      'glucose contains no carbon atoms at all',
      'glucose exists predominantly in a cyclic hemiacetal form in solution, with only a very small amount of the open-chain aldehyde form present at equilibrium',
      'the Schiff\'s test reagent does not exist',
      'glucose reacts violently and explosively with Schiff\'s reagent'
    ],
    correctIndex: 1,
    explanation: 'Since glucose exists mainly as the cyclic hemiacetal, only a minute fraction of the open-chain aldehyde form is present at any time, which is why glucose does not give a strongly positive Schiff\'s test, consistent with its cyclic structure.',
    difficulty: 'hard'
  },
  {
    id: 'biomol-12',
    type: 'mcq',
    question: 'The predominant cyclic form of glucose in solution is a six-membered ring, formed by reaction between the -OH group at C5 and the aldehyde group at C1, and is known as the',
    options: ['furanose form', 'pyranose form', 'aromatic form', 'zwitterionic form'],
    correctIndex: 1,
    explanation: 'Glucose predominantly adopts a six-membered ring structure called the pyranose form, formed by the intramolecular reaction between the C5 hydroxyl group and the C1 aldehyde.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-13',
    type: 'mcq',
    question: 'Fructose, a ketohexose, predominantly forms a five-membered cyclic ring structure known as the',
    options: ['pyranose form', 'furanose form', 'aromatic form', 'acyclic form only'],
    correctIndex: 1,
    explanation: 'Fructose forms a five-membered ring (furanose form) through reaction between the C5 hydroxyl group and the C2 ketone group.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-14',
    type: 'mcq',
    question: 'In the cyclic form of glucose, the new stereocentre created at C1 (the carbon originally bearing the aldehyde group) is called the',
    options: ['chiral centre only', 'anomeric carbon', 'quaternary carbon', 'terminal carbon'],
    correctIndex: 1,
    explanation: 'The carbon at which the new stereocentre is generated upon ring closure (C1 in glucose) is called the anomeric carbon.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-15',
    type: 'mcq',
    question: 'The two cyclic forms of glucose, alpha-D-glucose and beta-D-glucose, are called anomers because they differ from each other',
    options: [
      'in molecular formula',
      'only in the configuration at the anomeric carbon (C1)',
      'in every stereocentre of the molecule',
      'in the number of carbon atoms present'
    ],
    correctIndex: 1,
    explanation: 'Anomers are a special type of stereoisomer that differ specifically in configuration at the anomeric carbon, while all other stereocentres remain the same.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-16',
    type: 'mcq',
    question: 'The spontaneous change in specific rotation observed when a pure sample of either the alpha or beta anomer of glucose is dissolved in water, as the solution reaches an equilibrium mixture of both anomers, is called',
    options: ['racemisation', 'mutarotation', 'denaturation', 'saponification'],
    correctIndex: 1,
    explanation: 'Mutarotation refers to the gradual change in optical rotation observed as a pure anomer of glucose equilibrates (via the open-chain form) with the other anomer in solution.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-17',
    type: 'mcq',
    question: 'Sucrose, upon hydrolysis, gives one molecule each of',
    options: ['glucose and galactose', 'glucose and fructose', 'two molecules of glucose', 'fructose and galactose'],
    correctIndex: 1,
    explanation: 'Hydrolysis of sucrose gives an equimolar mixture of glucose and fructose.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-18',
    type: 'mcq',
    question: 'Maltose, upon hydrolysis, gives',
    options: ['two molecules of glucose, linked in the intact disaccharide by an alpha-1,4-glycosidic bond', 'glucose and fructose', 'glucose and galactose', 'a single molecule of glucose'],
    correctIndex: 0,
    explanation: 'Maltose is composed of two glucose units joined by an alpha-1,4-glycosidic linkage, and hydrolysis releases two glucose molecules.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-19',
    type: 'mcq',
    question: 'Lactose, upon hydrolysis, gives one molecule each of',
    options: ['glucose and fructose', 'galactose and glucose', 'two molecules of fructose', 'galactose and fructose'],
    correctIndex: 1,
    explanation: 'Lactose (milk sugar) is composed of galactose and glucose joined by a beta-1,4-glycosidic linkage, and hydrolysis releases these two monosaccharides.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-20',
    type: 'mcq',
    question: 'Starch, an important storage polysaccharide in plants, is composed of two structural components, namely',
    options: [
      'amylose (linear) and amylopectin (branched)',
      'cellulose and glycogen',
      'ribose and deoxyribose',
      'glucose and galactose only, in a 1:1 disaccharide'
    ],
    correctIndex: 0,
    explanation: 'Starch consists of two components: amylose, a linear polymer of glucose, and amylopectin, a highly branched polymer of glucose.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-21',
    type: 'mcq',
    question: 'Amylose, the linear component of starch, is composed of glucose units linked by',
    options: [
      'alpha-1,4-glycosidic bonds, forming a helical/coiled structure',
      'beta-1,4-glycosidic bonds',
      'alpha-1,6-glycosidic bonds exclusively',
      'peptide bonds'
    ],
    correctIndex: 0,
    explanation: 'Amylose consists of glucose units connected via alpha-1,4-glycosidic linkages, which allow the chain to adopt a characteristic helical structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-22',
    type: 'mcq',
    question: 'Amylopectin, the branched component of starch, contains both alpha-1,4-glycosidic linkages along the chain and',
    options: [
      'beta-1,4-glycosidic branch points',
      'alpha-1,6-glycosidic linkages at the branch points',
      'no branch points at all',
      'peptide bond branch points'
    ],
    correctIndex: 1,
    explanation: 'Amylopectin has a branched structure, with alpha-1,4-glycosidic linkages along the main chains and alpha-1,6-glycosidic linkages at the branch points.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-23',
    type: 'mcq',
    question: 'Cellulose, a structural polysaccharide found in plant cell walls, is composed of glucose units linked by',
    options: ['alpha-1,4-glycosidic bonds', 'beta-1,4-glycosidic bonds', 'alpha-1,6-glycosidic bonds', 'peptide bonds'],
    correctIndex: 1,
    explanation: 'Cellulose consists of glucose units joined by beta-1,4-glycosidic linkages, giving it a linear, rigid structure suited to its structural role in plant cell walls.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-24',
    type: 'mcq',
    question: 'Humans cannot digest cellulose mainly because',
    options: [
      'cellulose is not made of glucose units',
      'the human digestive system lacks the enzyme needed to hydrolyse the beta-1,4-glycosidic linkage',
      'cellulose is toxic to humans',
      'cellulose does not exist in any food source'
    ],
    correctIndex: 1,
    explanation: 'Since humans lack the enzyme capable of hydrolysing beta-1,4-glycosidic bonds, cellulose passes through the digestive system largely undigested, unlike starch (alpha-1,4-linked), which is digestible.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-25',
    type: 'mcq',
    question: 'Glycogen, often referred to as "animal starch", is a highly branched polysaccharide that serves as',
    options: [
      'the primary structural component of animal connective tissue',
      'the storage form of glucose in animals, analogous to starch in plants',
      'a component of nucleic acids',
      'a type of protein'
    ],
    correctIndex: 1,
    explanation: 'Glycogen is the storage polysaccharide found in animals (particularly in liver and muscle), serving a role analogous to starch in plants.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-26',
    type: 'mcq',
    question: 'An alpha-amino acid is defined as an amino acid in which',
    options: [
      'the amino group and carboxyl group are attached to different, distant carbon atoms',
      'both the amino group and the carboxyl group are attached to the same (alpha) carbon atom',
      'no carboxyl group is present at all',
      'no amino group is present at all'
    ],
    correctIndex: 1,
    explanation: 'In an alpha-amino acid, both the amino group and the carboxyl group are attached to the same carbon atom, designated the alpha-carbon.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-27',
    type: 'mcq',
    question: 'Amino acids that cannot be synthesised by the human body and must be obtained through the diet are called',
    options: ['non-essential amino acids', 'essential amino acids', 'zwitterionic amino acids', 'acidic amino acids'],
    correctIndex: 1,
    explanation: 'Essential amino acids cannot be synthesised by the body in sufficient quantities and must therefore be supplied through the diet.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-28',
    type: 'mcq',
    question: 'In the solid state and in aqueous solution, amino acids exist predominantly as',
    options: [
      'neutral, fully uncharged molecules',
      'zwitterions (dipolar ions), with a protonated amino group (-NH3+) and a deprotonated carboxyl group (-COO-)',
      'purely cationic species with no negative charge anywhere',
      'purely anionic species with no positive charge anywhere'
    ],
    correctIndex: 1,
    explanation: 'Amino acids exist predominantly as zwitterions, in which an internal proton transfer generates a positively charged ammonium group and a negatively charged carboxylate group, while the overall molecule can remain net neutral.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-29',
    type: 'mcq',
    question: 'The zwitterionic nature of amino acids helps explain their',
    options: [
      'unusually low melting points and poor solubility in water',
      'relatively high melting points and salt-like solubility behaviour',
      'complete inability to dissolve in any solvent',
      'lack of any acidic or basic character'
    ],
    correctIndex: 1,
    explanation: 'Since zwitterions behave somewhat like ionic (salt-like) species, amino acids typically show relatively high melting points and solubility characteristics similar to ionic compounds.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-30',
    type: 'mcq',
    question: 'A peptide bond is formed between two amino acids through',
    options: [
      'a glycosidic linkage between two hydroxyl groups',
      'an amide linkage formed between the -COOH group of one amino acid and the -NH2 group of another, with loss of a water molecule',
      'an ester linkage between two carboxyl groups',
      'a disulfide linkage between two thiol groups'
    ],
    correctIndex: 1,
    explanation: 'A peptide bond is an amide linkage formed by condensation between the carboxyl group of one amino acid and the amino group of another, releasing a molecule of water.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-31',
    type: 'mcq',
    question: 'The primary structure of a protein refers to',
    options: [
      'the overall three-dimensional folding of the protein',
      'the specific linear sequence of amino acids in the polypeptide chain',
      'the arrangement of multiple polypeptide subunits',
      'the type of secondary structure (alpha-helix or beta-sheet) present'
    ],
    correctIndex: 1,
    explanation: 'Primary structure refers simply to the sequence in which amino acids are linked together in the polypeptide chain.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-32',
    type: 'mcq',
    question: 'The secondary structure of a protein refers to the',
    options: [
      'linear sequence of amino acids',
      'regular, repeating local folding patterns, such as the alpha-helix and beta-pleated sheet',
      'assembly of multiple polypeptide chains into a functional complex',
      'chemical composition of the amino acid side chains only'
    ],
    correctIndex: 1,
    explanation: 'Secondary structure describes regular, repeating local structural motifs within a polypeptide chain, most notably the alpha-helix and beta-pleated sheet.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-33',
    type: 'mcq',
    question: 'The alpha-helix, a common protein secondary structure, is a right-handed coiled/spiral arrangement stabilised primarily by',
    options: [
      'disulfide bonds between distant cysteine residues',
      'intramolecular hydrogen bonds between the C=O and N-H groups of the peptide backbone',
      'ionic bonds between charged side chains',
      'covalent bonds between adjacent amino acids other than the peptide bond'
    ],
    correctIndex: 1,
    explanation: 'The alpha-helix is stabilised by a regular, repeating pattern of intramolecular hydrogen bonds between the carbonyl oxygen and amide hydrogen of the peptide backbone, spaced along the helix.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-34',
    type: 'mcq',
    question: 'The beta-pleated sheet, another common protein secondary structure, is typically stabilised by',
    options: [
      'intramolecular hydrogen bonds within a single, tightly coiled chain',
      'intermolecular (or interchain) hydrogen bonds between adjacent, extended polypeptide strands arranged side by side',
      'ionic interactions exclusively',
      'no hydrogen bonding of any kind'
    ],
    correctIndex: 1,
    explanation: 'The beta-pleated sheet involves extended polypeptide strands lying alongside one another, held together by hydrogen bonds formed between adjacent strands (interchain, or between distant regions of a single folded chain).',
    difficulty: 'medium'
  },
  {
    id: 'biomol-35',
    type: 'mcq',
    question: 'The tertiary structure of a protein refers to the',
    options: [
      'overall three-dimensional folding of a single polypeptide chain, giving it its specific compact shape',
      'sequence of amino acids only',
      'arrangement of multiple separate polypeptide chains',
      'exclusive presence of alpha-helices with no other structural motifs'
    ],
    correctIndex: 0,
    explanation: 'Tertiary structure describes the overall three-dimensional shape adopted by a single polypeptide chain as it folds into its functional (often globular) conformation.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-36',
    type: 'mcq',
    question: 'The quaternary structure of a protein refers to',
    options: [
      'the sequence of amino acids in a chain',
      'the spatial arrangement of two or more polypeptide subunits into a single functional protein complex',
      'a type of secondary structure motif',
      'the process by which a protein is denatured'
    ],
    correctIndex: 1,
    explanation: 'Quaternary structure describes how multiple individual polypeptide subunits assemble together to form a single, functional multi-subunit protein, such as haemoglobin.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-37',
    type: 'mcq',
    question: 'Denaturation of a protein refers to the',
    options: [
      'breaking of the peptide bonds that form the primary structure',
      'loss of the native secondary and tertiary structure (and associated biological activity), while the primary structure (amino acid sequence) remains intact',
      'complete destruction of all covalent bonds in the molecule',
      'process by which an amino acid becomes a zwitterion'
    ],
    correctIndex: 1,
    explanation: 'Denaturation disrupts the weaker interactions (hydrogen bonds, ionic bonds, hydrophobic interactions) responsible for secondary and tertiary structure, typically causing loss of biological activity, while the primary sequence of amino acids remains unchanged.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-38',
    type: 'mcq',
    question: 'The coagulation of egg white upon boiling is a classic example of',
    options: [
      'protein synthesis',
      'protein denaturation, caused by heat disrupting the native protein structure',
      'a glycosidic bond formation reaction',
      'mutarotation'
    ],
    correctIndex: 1,
    explanation: 'Heating disrupts the weak intramolecular interactions maintaining egg albumin\'s native structure, causing it to denature and coagulate, a well-known example of heat-induced denaturation.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-39',
    type: 'mcq',
    question: 'Fibrous proteins, such as keratin and collagen, are generally characterised by',
    options: [
      'a compact, spherical shape and good water solubility',
      'elongated, thread-like polypeptide chains lying roughly parallel to one another, and generally poor water solubility',
      'a complete absence of any secondary structure',
      'being composed entirely of carbohydrate, not protein'
    ],
    correctIndex: 1,
    explanation: 'Fibrous proteins consist of elongated, parallel polypeptide chains, held together by hydrogen and disulfide bonds, and are generally insoluble in water, in contrast to globular proteins.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-40',
    type: 'mcq',
    question: 'Globular proteins, such as insulin and albumins, are generally characterised by',
    options: [
      'a compact, roughly spherical shape formed by extensive chain folding, and generally good water solubility',
      'elongated, thread-like chains with no folding at all',
      'complete insolubility in any solvent',
      'the complete absence of any amino acid sequence'
    ],
    correctIndex: 0,
    explanation: 'Globular proteins fold into compact, roughly spherical shapes and are generally soluble in water, distinguishing them from fibrous proteins.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-41',
    type: 'mcq',
    question: 'Enzymes are best described as',
    options: [
      'inorganic catalysts with no relationship to proteins',
      'biological catalysts, most of which are proteins, that increase the rate of biochemical reactions',
      'substances that always slow down biochemical reactions',
      'a type of carbohydrate'
    ],
    correctIndex: 1,
    explanation: 'Enzymes are biological catalysts, predominantly proteins, that dramatically increase the rate of specific biochemical reactions without being consumed in the process.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-42',
    type: 'mcq',
    question: 'A key characteristic feature of enzymes is their',
    options: [
      'complete lack of specificity, catalysing any and all reactions equally',
      'high specificity for a particular substrate or type of reaction',
      'inability to increase reaction rate at all',
      'exclusive occurrence outside of living organisms'
    ],
    correctIndex: 1,
    explanation: 'Enzymes are highly specific, typically catalysing only one particular reaction or a narrow range of closely related substrates, often described using models such as the lock-and-key or induced-fit model.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-43',
    type: 'mcq',
    question: 'Vitamins are broadly classified into two categories, fat-soluble and water-soluble, based mainly on their',
    options: [
      'atomic composition, with fat-soluble vitamins containing no carbon',
      'solubility behaviour, which correlates with whether the body stores them or requires regular dietary intake',
      'colour when isolated in pure form',
      'ability to act as enzymes'
    ],
    correctIndex: 1,
    explanation: 'Vitamins are classified as fat-soluble or water-soluble based on their solubility properties, which in turn relates to whether the body can store them (fat-soluble, in liver and fatty tissue) or must obtain them regularly through diet (water-soluble, generally not stored, with excess excreted in urine).',
    difficulty: 'medium'
  },
  {
    id: 'biomol-44',
    type: 'mcq',
    question: 'Which of the following is classified as a fat-soluble vitamin?',
    options: ['Vitamin C', 'Vitamin B1', 'Vitamin A', 'Vitamin B12'],
    correctIndex: 2,
    explanation: 'Vitamin A, along with vitamins D, E, and K, is a fat-soluble vitamin, stored in the body\'s liver and adipose tissue.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-45',
    type: 'mcq',
    question: 'Which of the following is classified as a water-soluble vitamin?',
    options: ['Vitamin A', 'Vitamin D', 'Vitamin K', 'Vitamin C'],
    correctIndex: 3,
    explanation: 'Vitamin C, along with the B-complex vitamins, is water-soluble; excess amounts are generally not stored and are excreted in the urine.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-46',
    type: 'mcq',
    question: 'Deficiency of vitamin A in the diet is classically associated with',
    options: ['scurvy', 'night blindness (and xerophthalmia)', 'beriberi', 'rickets'],
    correctIndex: 1,
    explanation: 'Vitamin A deficiency is classically associated with night blindness and, in more severe cases, xerophthalmia (dryness and damage to the cornea).',
    difficulty: 'medium'
  },
  {
    id: 'biomol-47',
    type: 'mcq',
    question: 'Deficiency of vitamin B1 (thiamine) is classically associated with the disease',
    options: ['scurvy', 'beriberi', 'rickets', 'pernicious anaemia'],
    correctIndex: 1,
    explanation: 'A deficiency of thiamine (vitamin B1) leads to beriberi, a disease affecting the nervous and cardiovascular systems.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-48',
    type: 'mcq',
    question: 'Deficiency of vitamin C (ascorbic acid) is classically associated with the disease',
    options: ['beriberi', 'rickets', 'scurvy', 'night blindness'],
    correctIndex: 2,
    explanation: 'A deficiency of vitamin C leads to scurvy, characterised by bleeding gums and poor wound healing.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-49',
    type: 'mcq',
    question: 'Deficiency of vitamin D is classically associated with',
    options: ['rickets in children (and osteomalacia in adults)', 'scurvy', 'beriberi', 'night blindness'],
    correctIndex: 0,
    explanation: 'A deficiency of vitamin D leads to rickets in children (soft, weak bones) and osteomalacia in adults, both related to impaired calcium metabolism/bone mineralisation.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-50',
    type: 'mcq',
    question: 'Deficiency of vitamin K is classically associated with',
    options: [
      'night blindness',
      'increased blood clotting time, due to its essential role in the blood clotting process',
      'scurvy',
      'rickets'
    ],
    correctIndex: 1,
    explanation: 'Vitamin K is essential for proper blood clotting, and its deficiency leads to increased clotting time, potentially causing excessive bleeding.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-51',
    type: 'mcq',
    question: 'Deficiency of vitamin B12 (cobalamin) is classically associated with',
    options: ['pernicious anaemia', 'scurvy', 'beriberi', 'rickets'],
    correctIndex: 0,
    explanation: 'A deficiency of vitamin B12 leads to pernicious anaemia, a condition affecting red blood cell production.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-52',
    type: 'mcq',
    question: 'Nucleic acids, such as DNA and RNA, are polymers built from repeating units called',
    options: ['amino acids', 'monosaccharides', 'nucleotides', 'fatty acids'],
    correctIndex: 2,
    explanation: 'Nucleic acids are polymers of nucleotides, each composed of a nitrogenous base, a pentose sugar, and a phosphate group.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-53',
    type: 'mcq',
    question: 'A nucleoside differs from a nucleotide in that a nucleoside',
    options: [
      'contains a phosphate group, while a nucleotide does not',
      'lacks the phosphate group, consisting only of the nitrogenous base and the pentose sugar',
      'contains no nitrogenous base at all',
      'is a much larger polymer than a nucleotide'
    ],
    correctIndex: 1,
    explanation: 'A nucleoside is composed of a nitrogenous base linked to a pentose sugar, without the phosphate group that is present in a full nucleotide.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-54',
    type: 'mcq',
    question: 'The pentose sugar present in DNA is',
    options: ['ribose', '2-deoxyribose, lacking a hydroxyl group at the 2\' position', 'fructose', 'galactose'],
    correctIndex: 1,
    explanation: 'DNA contains 2-deoxyribose, which lacks the hydroxyl group at the 2\' carbon that is present in the ribose found in RNA.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-55',
    type: 'mcq',
    question: 'The pentose sugar present in RNA is',
    options: ['2-deoxyribose', 'ribose, which retains a hydroxyl group at the 2\' position', 'glucose', 'fructose'],
    correctIndex: 1,
    explanation: 'RNA contains ribose, which has a hydroxyl group at the 2\' carbon, distinguishing it from the deoxyribose found in DNA.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-56',
    type: 'mcq',
    question: 'The nitrogenous bases adenine and guanine belong to the class of compounds known as',
    options: ['pyrimidines', 'purines', 'pentoses', 'amino acids'],
    correctIndex: 1,
    explanation: 'Adenine and guanine are purine bases, characterised by a fused double-ring structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-57',
    type: 'mcq',
    question: 'The nitrogenous bases cytosine, thymine, and uracil belong to the class of compounds known as',
    options: ['purines', 'pyrimidines, characterised by a single-ring structure', 'monosaccharides', 'fatty acids'],
    correctIndex: 1,
    explanation: 'Cytosine, thymine, and uracil are pyrimidine bases, characterised by a single-ring structure, in contrast to the fused double-ring purines.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-58',
    type: 'mcq',
    question: 'Thymine is found specifically in',
    options: ['RNA only', 'DNA only', 'both DNA and RNA equally', 'neither DNA nor RNA'],
    correctIndex: 1,
    explanation: 'Thymine is a pyrimidine base found specifically in DNA, where it replaces the uracil found in RNA.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-59',
    type: 'mcq',
    question: 'Uracil is found specifically in',
    options: ['DNA only', 'RNA only, in place of the thymine found in DNA', 'both DNA and RNA equally', 'neither DNA nor RNA'],
    correctIndex: 1,
    explanation: 'Uracil is a pyrimidine base found specifically in RNA, replacing the thymine found in DNA.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-60',
    type: 'mcq',
    question: 'In the Watson-Crick double helix model of DNA, adenine specifically pairs with',
    options: ['guanine, via three hydrogen bonds', 'cytosine, via two hydrogen bonds', 'thymine, via two hydrogen bonds', 'uracil, via three hydrogen bonds'],
    correctIndex: 2,
    explanation: 'In DNA, adenine pairs specifically with thymine through two hydrogen bonds, a key feature of the complementary base pairing central to the double helix structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-61',
    type: 'mcq',
    question: 'In the Watson-Crick double helix model of DNA, guanine specifically pairs with',
    options: ['adenine, via two hydrogen bonds', 'thymine, via two hydrogen bonds', 'cytosine, via three hydrogen bonds', 'uracil, via three hydrogen bonds'],
    correctIndex: 2,
    explanation: 'Guanine pairs specifically with cytosine through three hydrogen bonds, another key feature of the complementary base pairing in DNA.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-62',
    type: 'mcq',
    question: 'The two strands of the DNA double helix are described as running',
    options: [
      'parallel to each other, in the same 5\' to 3\' direction',
      'antiparallel to each other, with one strand running 5\' to 3\' and the other running 3\' to 5\'',
      'perpendicular to each other',
      'in no particular consistent direction at all'
    ],
    correctIndex: 1,
    explanation: 'The two strands of the DNA double helix are antiparallel, running in opposite directions relative to each other, an essential structural feature of the double helix.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-63',
    type: 'mcq',
    question: 'The sugar-phosphate backbone of a DNA (or RNA) strand is held together by',
    options: [
      'peptide bonds',
      'phosphodiester linkages between the 3\' and 5\' carbons of adjacent sugar units',
      'glycosidic bonds between adjacent nitrogenous bases',
      'hydrogen bonds only'
    ],
    correctIndex: 1,
    explanation: 'The backbone of a nucleic acid strand is formed by phosphodiester bonds, which link the 3\' carbon of one sugar to the 5\' carbon of the next sugar via a phosphate group.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-64',
    type: 'mcq',
    question: 'The functional role of DNA in the cell is primarily to',
    options: [
      'act as a structural component of the cell membrane',
      'store and transmit genetic information, which is replicated and passed on during cell division',
      'directly catalyse metabolic reactions as an enzyme',
      'act as an energy storage molecule, like glycogen'
    ],
    correctIndex: 1,
    explanation: 'DNA serves as the primary repository of genetic information, which is faithfully replicated and passed on to daughter cells during cell division.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-65',
    type: 'mcq',
    question: 'Messenger RNA (mRNA) functions to',
    options: [
      'carry the genetic code from DNA to the ribosome for protein synthesis',
      'form the structural and catalytic core of the ribosome',
      'carry amino acids to the ribosome during translation',
      'store long-term genetic information in place of DNA'
    ],
    correctIndex: 0,
    explanation: 'mRNA carries the genetic information transcribed from DNA to the ribosome, where it serves as the template for protein synthesis.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-66',
    type: 'mcq',
    question: 'Transfer RNA (tRNA) functions to',
    options: [
      'carry the genetic code from DNA to the ribosome',
      'carry specific amino acids to the ribosome during translation, matching them to the corresponding codon on mRNA',
      'form the structural framework of the entire ribosome',
      'store the complete genetic blueprint of the organism'
    ],
    correctIndex: 1,
    explanation: 'tRNA molecules recognise specific codons on the mRNA and deliver the corresponding amino acids to the ribosome during the process of translation (protein synthesis).',
    difficulty: 'medium'
  },
  {
    id: 'biomol-67',
    type: 'mcq',
    question: 'Ribosomal RNA (rRNA) functions as',
    options: [
      'a molecule that stores long-term genetic information exclusively',
      'a structural and catalytic component of the ribosome, the site of protein synthesis',
      'a molecule that carries amino acids to the ribosome',
      'a molecule with no role in protein synthesis at all'
    ],
    correctIndex: 1,
    explanation: 'rRNA forms an integral structural and catalytic part of the ribosome, the cellular machinery responsible for protein synthesis.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-68',
    type: 'mcq',
    question: 'Hormones are best described as',
    options: [
      'structural components of cell membranes only',
      'chemical messengers secreted by endocrine glands that regulate various physiological processes',
      'a type of nucleic acid',
      'compounds with no biological role at all'
    ],
    correctIndex: 1,
    explanation: 'Hormones are chemical messengers, secreted directly into the bloodstream by endocrine glands, that regulate diverse physiological processes throughout the body.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-69',
    type: 'mcq',
    question: 'Insulin, a hormone that helps regulate blood glucose levels, is chemically classified as a',
    options: ['steroid', 'protein (polypeptide hormone)', 'carbohydrate', 'nucleic acid'],
    correctIndex: 1,
    explanation: 'Insulin is a protein hormone, composed of polypeptide chains, that plays a central role in regulating blood glucose levels.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-70',
    type: 'mcq',
    question: 'Overall, the study of biomolecules, as emphasised throughout this NCERT chapter, integrates the structure and function of',
    options: [
      'carbohydrates, proteins, enzymes, vitamins, nucleic acids, and hormones, all central to the chemistry of living systems',
      'only inorganic minerals found in the human body',
      'only synthetic polymers unrelated to biology',
      'topics entirely unrelated to chemical structure or function'
    ],
    correctIndex: 0,
    explanation: 'This chapter surveys the major classes of biomolecules — carbohydrates, proteins, enzymes, vitamins, nucleic acids, and hormones — highlighting how their chemical structures underpin their essential biological functions.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'biomol-71',
    type: 'assertion-reason',
    question: 'Assertion (A): All monosaccharides, including ketoses like fructose, are classified as reducing sugars.\nReason (R): Under the basic conditions of tests like Fehling\'s solution, a ketose can tautomerise to a structure capable of reducing the reagent.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This tautomerisation pathway available under basic conditions is exactly why even a ketose like fructose behaves as a reducing sugar, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-72',
    type: 'assertion-reason',
    question: 'Assertion (A): Sucrose is a non-reducing sugar.\nReason (R): Both anomeric carbons of the glucose and fructose units in sucrose are involved in the glycosidic linkage, leaving no free hemiacetal or hemiketal group.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The involvement of both anomeric carbons in the glycosidic bond, leaving no free reducing group, is exactly why sucrose is non-reducing, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-73',
    type: 'assertion-reason',
    question: 'Assertion (A): Oxidation of glucose with bromine water gives gluconic acid rather than saccharic acid.\nReason (R): Bromine water is a mild oxidising agent that selectively oxidises the aldehyde group without affecting the primary alcohol group of glucose.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This selectivity of bromine water, oxidising only the aldehyde group, is exactly why the product is the monocarboxylic gluconic acid rather than the dicarboxylic saccharic acid, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-74',
    type: 'assertion-reason',
    question: 'Assertion (A): Glucose does not give a strongly positive Schiff\'s test.\nReason (R): Glucose exists predominantly in a cyclic hemiacetal form in solution, with only a very small equilibrium concentration of the open-chain aldehyde form present.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This predominance of the cyclic form, minimising the amount of free aldehyde available, directly explains why glucose does not react strongly in the Schiff\'s test, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'biomol-75',
    type: 'assertion-reason',
    question: 'Assertion (A): A freshly dissolved sample of pure alpha-D-glucose shows a gradual change in optical rotation over time.\nReason (R): This phenomenon, called mutarotation, occurs as the alpha anomer equilibrates with the beta anomer via the open-chain form.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This interconversion between anomers, reaching an equilibrium mixture with a different net optical rotation, is exactly what causes the gradual change described in A, correctly explaining it.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-76',
    type: 'assertion-reason',
    question: 'Assertion (A): Cellulose cannot be digested by humans, while starch can be.\nReason (R): Cellulose contains beta-1,4-glycosidic linkages, which the human digestive system lacks the enzyme to hydrolyse, whereas starch contains alpha-1,4-glycosidic linkages, which human enzymes can hydrolyse.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This difference in glycosidic linkage type, and the corresponding enzyme specificity of the human digestive system, directly explains why starch is digestible but cellulose is not, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-77',
    type: 'assertion-reason',
    question: 'Assertion (A): Amino acids generally have relatively high melting points compared to other organic molecules of similar size.\nReason (R): Amino acids exist predominantly as zwitterions, behaving somewhat like ionic compounds, which typically have stronger intermolecular forces than simple neutral organic molecules.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This ionic (zwitterionic) character, resulting in strong electrostatic intermolecular attractions, directly explains the relatively high melting points of amino acids, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-78',
    type: 'assertion-reason',
    question: 'Assertion (A): The alpha-helix secondary structure of proteins is stabilised by hydrogen bonds.\nReason (R): These hydrogen bonds form between the C=O group of one peptide bond and the N-H group of another peptide bond further along the same chain, within the coiled structure.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This specific pattern of intramolecular hydrogen bonding along the coiled backbone is exactly what stabilises and maintains the alpha-helical structure, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-79',
    type: 'assertion-reason',
    question: 'Assertion (A): Denaturation of a protein typically results in loss of its biological activity.\nReason (R): Denaturation disrupts the secondary and tertiary structure of the protein, which are often essential for its correct three-dimensional shape and function.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This disruption of the structural features essential for proper protein function directly explains why denaturation typically leads to loss of biological activity, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-80',
    type: 'assertion-reason',
    question: 'Assertion (A): Denaturation of a protein does not change its primary structure.\nReason (R): Denaturation primarily disrupts weaker, non-covalent interactions (such as hydrogen bonds), while the covalent peptide bonds forming the amino acid sequence remain intact.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since denaturation targets the weaker interactions rather than the strong covalent peptide bonds, the amino acid sequence (primary structure) is preserved, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-81',
    type: 'assertion-reason',
    question: 'Assertion (A): Fibrous proteins are generally insoluble in water, unlike globular proteins.\nReason (R): Fibrous proteins have elongated, parallel chains held together by extensive hydrogen and disulfide bonding, minimising exposure of polar groups to water.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This structural arrangement, minimising interaction with water, directly explains the general insolubility of fibrous proteins compared to the more water-accessible globular proteins, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-82',
    type: 'assertion-reason',
    question: 'Assertion (A): Enzymes are highly specific for their substrates.\nReason (R): The three-dimensional structure of an enzyme\'s active site is precisely shaped to interact with a particular substrate (or a small range of related substrates).',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This precise structural complementarity between the active site and substrate is exactly what accounts for enzyme specificity, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-83',
    type: 'assertion-reason',
    question: 'Assertion (A): Fat-soluble vitamins can lead to toxicity if taken in excess, more so than water-soluble vitamins.\nReason (R): Fat-soluble vitamins are stored in the body\'s fatty tissue and liver, allowing them to accumulate to potentially harmful levels over time, unlike water-soluble vitamins, whose excess is generally excreted in urine.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This tendency of fat-soluble vitamins to accumulate in body tissue, unlike readily excreted water-soluble vitamins, directly explains their greater potential for toxicity from excessive intake, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-84',
    type: 'assertion-reason',
    question: 'Assertion (A): Vitamin C deficiency needs to be addressed more urgently through regular dietary intake compared to vitamin A deficiency.\nReason (R): Vitamin C, being water-soluble, is not significantly stored in the body, so deficiency symptoms can develop relatively quickly without regular intake, unlike fat-soluble vitamin A.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The lack of significant storage of water-soluble vitamins like vitamin C directly explains why regular dietary intake is more urgently needed compared to stored fat-soluble vitamins, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-85',
    type: 'assertion-reason',
    question: 'Assertion (A): DNA contains thymine, while RNA contains uracil instead.\nReason (R): This is one of several structural differences between DNA and RNA, alongside the difference in pentose sugar (deoxyribose versus ribose).',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 1,
    explanation: 'Both statements are factually correct, but R merely places this base difference alongside another structural distinction rather than explaining the underlying chemical reason for why thymine and uracil specifically differ between DNA and RNA.',
    difficulty: 'hard'
  },
  {
    id: 'biomol-86',
    type: 'assertion-reason',
    question: 'Assertion (A): In DNA, adenine always pairs with thymine, and guanine always pairs with cytosine.\nReason (R): This specific complementary base pairing arises from the particular hydrogen-bonding patterns and molecular geometry that allow these specific pairs to fit together within the double helix.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'These specific structural and hydrogen-bonding compatibilities are exactly why only these particular base pairs form reliably within the DNA double helix, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-87',
    type: 'assertion-reason',
    question: 'Assertion (A): The two strands of the DNA double helix run in opposite (antiparallel) directions.\nReason (R): This antiparallel arrangement is essential to the specific geometry required for proper complementary base pairing and helix formation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The geometric requirements for stable base pairing and helix formation are exactly why the two DNA strands must run antiparallel to each other, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-88',
    type: 'assertion-reason',
    question: 'Assertion (A): mRNA, tRNA, and rRNA each play distinct roles in the overall process of protein synthesis.\nReason (R): mRNA carries genetic information from DNA, tRNA delivers specific amino acids to the ribosome, and rRNA forms the structural and catalytic core of the ribosome itself.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This clear division of labour among the three RNA types is exactly what allows them to collectively carry out the process of protein synthesis, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-89',
    type: 'assertion-reason',
    question: 'Assertion (A): Amylose adopts a helical structure, while cellulose adopts a more extended, linear structure.\nReason (R): Amylose is composed of glucose units joined by alpha-1,4-glycosidic linkages, while cellulose is composed of glucose units joined by beta-1,4-glycosidic linkages, which allow for different overall chain geometries.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This difference in glycosidic linkage type (alpha vs. beta) directly accounts for the differing overall chain geometries (helical vs. extended/linear) of amylose and cellulose, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-90',
    type: 'assertion-reason',
    question: 'Assertion (A): Insulin is classified as a protein hormone.\nReason (R): Insulin is composed of polypeptide chains, giving it the structural characteristics of a protein.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The presence of polypeptide chains, characteristic of proteins, is exactly why insulin is classified as a protein hormone, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-91',
    type: 'assertion-reason',
    question: 'Assertion (A): The pentaacetate derivative of glucose provides evidence for the presence of five hydroxyl groups.\nReason (R): Each hydroxyl group present in glucose is individually converted to an acetate ester during the acetylation reaction.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This one-to-one conversion of each hydroxyl group into an acetate ester is exactly why the observed pentaacetate product confirms the presence of five hydroxyl groups, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-92',
    type: 'assertion-reason',
    question: 'Assertion (A): Peptide bond formation between two amino acids is accompanied by the release of a water molecule.\nReason (R): The peptide bond is an amide linkage, formed by condensation between the carboxyl group of one amino acid and the amino group of another.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This condensation mechanism, which characteristically releases water upon amide bond formation, is exactly why peptide bond formation is accompanied by loss of a water molecule, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-93',
    type: 'assertion-reason',
    question: 'Assertion (A): Haemoglobin\'s function depends on its quaternary structure.\nReason (R): Haemoglobin is composed of four separate polypeptide subunits that must assemble correctly into a single functional complex for proper oxygen-binding activity.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The proper assembly of these four subunits, described in R, is exactly why haemoglobin\'s functional oxygen-binding activity depends on maintaining its correct quaternary structure, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-94',
    type: 'assertion-reason',
    question: 'Assertion (A): DNA replication relies on complementary base pairing.\nReason (R): Each strand of the original DNA double helix can serve as a template, since the specific pairing rules (A-T, G-C) ensure that a new complementary strand can be accurately synthesised.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This templating mechanism, made possible by the specific and predictable base-pairing rules, is exactly why complementary base pairing underlies accurate DNA replication, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-95',
    type: 'assertion-reason',
    question: 'Assertion (A): A zwitterion of an amino acid carries no net electrical charge overall, even though it has both positively and negatively charged groups.\nReason (R): The positive charge on the protonated amino group (-NH3+) exactly balances the negative charge on the deprotonated carboxylate group (-COO-).',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This exact charge balance between the two oppositely charged groups is precisely why the overall zwitterion carries no net charge, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-96',
    type: 'assertion-reason',
    question: 'Assertion (A): Vitamin K deficiency can lead to excessive or prolonged bleeding.\nReason (R): Vitamin K is essential for the proper functioning of the blood clotting process.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The essential role of vitamin K in blood clotting is exactly why its deficiency leads to prolonged bleeding due to impaired clotting ability, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-97',
    type: 'assertion-reason',
    question: 'Assertion (A): Reducing sugars are always monosaccharides, and disaccharides are always non-reducing.\nReason (R): Maltose and lactose are disaccharides that give a positive test with Tollens\' or Fehling\'s reagent.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — some disaccharides, such as maltose and lactose, are also reducing sugars, since they retain a free anomeric hydroxyl group. R correctly identifies these exceptions to the false claim made in A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-98',
    type: 'assertion-reason',
    question: 'Assertion (A): The alpha-1,6-glycosidic linkages found in amylopectin and glycogen are structurally identical in their role.\nReason (R): Both alpha-1,6-linkages serve as branch points within their respective glucose polymer structures.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This shared structural role as branch points in both amylopectin and glycogen directly explains why these alpha-1,6-linkages serve an analogous function in each polymer, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-99',
    type: 'assertion-reason',
    question: 'Assertion (A): All proteins have exactly the same secondary structure, regardless of amino acid sequence.\nReason (R): Secondary structure motifs like the alpha-helix and beta-pleated sheet are determined by the specific pattern of hydrogen bonding possible along a given polypeptide backbone, which depends on the amino acid sequence.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — different proteins can have varying combinations and amounts of alpha-helix, beta-sheet, and other structural motifs, depending on their specific sequence. R correctly explains why secondary structure is sequence-dependent, contrary to the false uniform claim in A.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-100',
    type: 'assertion-reason',
    question: 'Assertion (A): The chemistry of biomolecules integrates concepts from carbohydrate, protein, and nucleic acid structure with broader themes of molecular recognition and biological function.\nReason (R): Features such as glycosidic bonds, peptide bonds, hydrogen bonding patterns, and complementary base pairing all contribute to the specific structures that underlie the diverse biological roles of these molecules.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'These specific structural features, shared across the different classes of biomolecules discussed in R, directly explain the integrated, cross-cutting themes highlighted in A.',
    difficulty: 'medium'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'biomol-101',
    type: 'statement',
    question: 'Statement I: Monosaccharides cannot be hydrolysed into simpler carbohydrate units.\nStatement II: Oligosaccharides give two to ten monosaccharide units upon hydrolysis.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the definitions of monosaccharides and oligosaccharides.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-102',
    type: 'statement',
    question: 'Statement I: Sucrose is a reducing sugar.\nStatement II: Maltose and lactose are non-reducing sugars.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — sucrose is actually a non-reducing sugar, while maltose and lactose are reducing sugars, the opposite of what is stated.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-103',
    type: 'statement',
    question: 'Statement I: Oxidation of glucose with bromine water gives gluconic acid.\nStatement II: Oxidation of glucose with concentrated nitric acid gives saccharic (glucaric) acid.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the products of these two different oxidation reactions used to establish glucose\'s open-chain structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-104',
    type: 'statement',
    question: 'Statement I: Glucose exists predominantly as a five-membered ring (furanose) in solution.\nStatement II: Fructose exists predominantly as a five-membered ring (furanose) in solution.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — glucose predominantly forms a six-membered pyranose ring, not a furanose ring. Statement II correctly describes fructose\'s predominant furanose form.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-105',
    type: 'statement',
    question: 'Statement I: Mutarotation refers to the interconversion of glucose anomers via the open-chain form.\nStatement II: Mutarotation results in a change in the observed optical rotation of a freshly dissolved sample of a pure anomer.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the mechanism and observable consequence of mutarotation.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-106',
    type: 'statement',
    question: 'Statement I: Amylose is a linear polymer of glucose with alpha-1,4-glycosidic linkages.\nStatement II: Amylopectin is a branched polymer of glucose, with alpha-1,6-linkages at the branch points.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the structures of amylose and amylopectin, the two components of starch.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-107',
    type: 'statement',
    question: 'Statement I: Cellulose is composed of glucose units linked by alpha-1,4-glycosidic bonds, similar to starch.\nStatement II: Humans can readily digest cellulose using the same enzymes used to digest starch.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — cellulose is actually linked by beta-1,4-glycosidic bonds (not alpha-1,4), and humans lack the enzyme needed to hydrolyse these beta-linkages, so cellulose is not digestible.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-108',
    type: 'statement',
    question: 'Statement I: Glycogen is the storage polysaccharide found in animals.\nStatement II: Glycogen has a highly branched structure, similar in principle to amylopectin.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe glycogen and its structural similarity to amylopectin.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-109',
    type: 'statement',
    question: 'Statement I: Amino acids exist predominantly as zwitterions in solution.\nStatement II: This zwitterionic character contributes to their relatively high melting points.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the zwitterionic nature of amino acids and its effect on their physical properties.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-110',
    type: 'statement',
    question: 'Statement I: Essential amino acids can be synthesised by the human body in sufficient quantities.\nStatement II: Non-essential amino acids must be obtained entirely from the diet.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — the definitions are reversed. Essential amino acids cannot be synthesised by the body (must come from diet), while non-essential amino acids can be synthesised by the body.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-111',
    type: 'statement',
    question: 'Statement I: A peptide bond is an amide linkage formed between two amino acids.\nStatement II: Peptide bond formation is accompanied by the loss of a water molecule.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the nature and mechanism of peptide bond formation.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-112',
    type: 'statement',
    question: 'Statement I: Primary structure refers to the amino acid sequence of a protein.\nStatement II: Secondary structure refers to the overall three-dimensional folding of the entire protein.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — this description actually applies to tertiary structure, not secondary structure, which instead refers to local, regular folding patterns like alpha-helices and beta-sheets.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-113',
    type: 'statement',
    question: 'Statement I: The alpha-helix is stabilised by intramolecular hydrogen bonds.\nStatement II: The beta-pleated sheet is typically stabilised by intermolecular (or interchain) hydrogen bonds.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly distinguish the hydrogen-bonding patterns that stabilise these two secondary structure motifs.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-114',
    type: 'statement',
    question: 'Statement I: Quaternary structure describes the sequence of amino acids within a single polypeptide chain.\nStatement II: Quaternary structure describes the assembly of multiple polypeptide subunits into a functional complex.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — this describes primary structure, not quaternary structure. Statement II correctly describes quaternary structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-115',
    type: 'statement',
    question: 'Statement I: Denaturation of a protein disrupts its secondary and tertiary structure.\nStatement II: Denaturation typically breaks the peptide bonds that form the primary structure of the protein.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — denaturation does not typically break the peptide bonds of the primary structure, which remains intact.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-116',
    type: 'statement',
    question: 'Statement I: Fibrous proteins are generally soluble in water.\nStatement II: Globular proteins are generally soluble in water.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — fibrous proteins are generally insoluble in water, not soluble. Statement II correctly describes the general water solubility of globular proteins.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-117',
    type: 'statement',
    question: 'Statement I: Enzymes are biological catalysts, most of which are proteins.\nStatement II: Enzymes generally show high specificity for their substrates.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the nature and characteristic specificity of enzymes.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-118',
    type: 'statement',
    question: 'Statement I: Fat-soluble vitamins are generally stored in the body\'s liver and adipose tissue.\nStatement II: Water-soluble vitamins are generally stored extensively in the body for long periods.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — water-soluble vitamins are generally not stored extensively, with excess typically excreted in urine.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-119',
    type: 'statement',
    question: 'Statement I: Vitamin A deficiency is associated with night blindness.\nStatement II: Vitamin D deficiency is associated with scurvy.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — vitamin D deficiency is associated with rickets/osteomalacia, not scurvy (which is caused by vitamin C deficiency).',
    difficulty: 'medium'
  },
  {
    id: 'biomol-120',
    type: 'statement',
    question: 'Statement I: Vitamin B1 deficiency is associated with beriberi.\nStatement II: Vitamin B12 deficiency is associated with pernicious anaemia.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly match these specific vitamin deficiencies with their associated diseases.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-121',
    type: 'statement',
    question: 'Statement I: A nucleotide is composed of a nitrogenous base, a pentose sugar, and a phosphate group.\nStatement II: A nucleoside lacks the phosphate group found in a nucleotide.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly define the composition of nucleotides and nucleosides.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-122',
    type: 'statement',
    question: 'Statement I: DNA contains ribose as its pentose sugar.\nStatement II: RNA contains 2-deoxyribose as its pentose sugar.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — the sugars are swapped. DNA contains 2-deoxyribose, and RNA contains ribose.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-123',
    type: 'statement',
    question: 'Statement I: Adenine and guanine are purine bases.\nStatement II: Cytosine, thymine, and uracil are pyrimidine bases.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly classify these nitrogenous bases into the purine and pyrimidine categories.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-124',
    type: 'statement',
    question: 'Statement I: Thymine is found exclusively in DNA.\nStatement II: Uracil is found exclusively in RNA.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the exclusive occurrence of thymine in DNA and uracil in RNA.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-125',
    type: 'statement',
    question: 'Statement I: In DNA, adenine pairs with thymine via two hydrogen bonds.\nStatement II: In DNA, guanine pairs with cytosine via three hydrogen bonds.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the specific hydrogen-bonding patterns of the two complementary base pairs in DNA.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-126',
    type: 'statement',
    question: 'Statement I: The two strands of the DNA double helix run parallel to each other, in the same direction.\nStatement II: The sugar-phosphate backbone of DNA is held together by phosphodiester linkages.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the two DNA strands run antiparallel (opposite directions), not parallel. Statement II correctly describes the phosphodiester backbone linkage.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-127',
    type: 'statement',
    question: 'Statement I: mRNA carries the genetic code from DNA to the ribosome.\nStatement II: tRNA carries specific amino acids to the ribosome during translation.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the distinct functional roles of mRNA and tRNA in protein synthesis.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-128',
    type: 'statement',
    question: 'Statement I: rRNA forms a structural and catalytic component of the ribosome.\nStatement II: rRNA has no role at all in protein synthesis.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II directly contradicts Statement I and is incorrect — rRNA plays a central role in protein synthesis as part of the ribosome.',
    difficulty: 'easy'
  },
  {
    id: 'biomol-129',
    type: 'statement',
    question: 'Statement I: Hormones are chemical messengers secreted by endocrine glands.\nStatement II: Insulin, a hormone, is chemically classified as a protein.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the general nature of hormones and the specific chemical classification of insulin.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-130',
    type: 'statement',
    question: 'Statement I: The chemistry of biomolecules covers only carbohydrates and proteins, with no connection to nucleic acids or vitamins.\nStatement II: Biomolecule chemistry integrates carbohydrates, proteins, enzymes, vitamins, nucleic acids, and hormones as interconnected topics central to living systems.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect and understates the scope of the chapter. Statement II correctly captures the full, integrated scope of biomolecule chemistry as covered in this chapter.',
    difficulty: 'medium'
  },

  // ==================== HOW-MANY (20) ====================
  {
    id: 'biomol-131',
    type: 'how-many',
    question: 'How many of the following statements about carbohydrate classification are correct?\n1. Monosaccharides cannot be hydrolysed further.\n2. Oligosaccharides give two to ten monosaccharide units on hydrolysis.\n3. Polysaccharides give many monosaccharide units on hydrolysis.\n4. All carbohydrates, regardless of class, are classified as reducing sugars.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — not all carbohydrates are reducing sugars; sucrose, for example, is non-reducing.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-132',
    type: 'how-many',
    question: 'How many of the following statements about the structural evidence for glucose\'s open-chain form are correct?\n1. Glucose forms an oxime with hydroxylamine, confirming a carbonyl group.\n2. Glucose forms a pentaacetate, confirming five hydroxyl groups.\n3. Oxidation with bromine water gives saccharic acid.\n4. Oxidation with concentrated nitric acid gives a dicarboxylic acid (saccharic/glucaric acid).',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — bromine water gives the monocarboxylic gluconic acid, not the dicarboxylic saccharic acid (which requires the stronger oxidant, nitric acid).',
    difficulty: 'medium'
  },
  {
    id: 'biomol-133',
    type: 'how-many',
    question: 'How many of the following statements about the cyclic structure of glucose are correct?\n1. Glucose predominantly forms a six-membered pyranose ring.\n2. The anomeric carbon is the new stereocentre created upon ring closure.\n3. Alpha and beta anomers differ in configuration at every stereocentre in the molecule.\n4. Mutarotation is the interconversion between anomers via the open-chain form.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — anomers differ specifically at only the anomeric carbon, not at every stereocentre.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-134',
    type: 'how-many',
    question: 'How many of the following statements about disaccharides are correct?\n1. Sucrose hydrolyses to give glucose and fructose.\n2. Maltose hydrolyses to give two glucose units.\n3. Lactose hydrolyses to give galactose and glucose.\n4. Sucrose is a reducing sugar.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — sucrose is a non-reducing sugar.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-135',
    type: 'how-many',
    question: 'How many of the following statements about polysaccharides are correct?\n1. Amylose has alpha-1,4-glycosidic linkages and a helical structure.\n2. Amylopectin is branched, with alpha-1,6-linkages at branch points.\n3. Cellulose has beta-1,4-glycosidic linkages.\n4. Glycogen is the storage polysaccharide in plants, analogous to starch in animals.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — glycogen is the storage polysaccharide in animals, not plants; starch serves this role in plants.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-136',
    type: 'how-many',
    question: 'How many of the following statements about amino acids are correct?\n1. Alpha-amino acids have both the amino and carboxyl groups on the same carbon.\n2. Essential amino acids can be synthesised by the body in sufficient amounts.\n3. Amino acids exist predominantly as zwitterions.\n4. Zwitterionic character contributes to relatively high melting points of amino acids.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 3, and 4 are correct. Statement 2 is false — essential amino acids cannot be synthesised by the body and must be obtained from the diet.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-137',
    type: 'how-many',
    question: 'How many of the following statements about protein structure levels are correct?\n1. Primary structure refers to amino acid sequence.\n2. Secondary structure includes the alpha-helix and beta-pleated sheet.\n3. Tertiary structure refers to the overall 3D folding of a single polypeptide chain.\n4. Quaternary structure refers to the assembly of multiple polypeptide subunits.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe the four hierarchical levels of protein structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-138',
    type: 'how-many',
    question: 'How many of the following statements about protein denaturation are correct?\n1. Denaturation disrupts secondary and tertiary structure.\n2. Denaturation typically results in loss of biological activity.\n3. Denaturation breaks the peptide bonds forming the primary structure.\n4. Coagulation of egg white on boiling is an example of denaturation.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — denaturation does not typically break the peptide bonds of the primary structure, which remains intact.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-139',
    type: 'how-many',
    question: 'How many of the following statements about fibrous and globular proteins are correct?\n1. Fibrous proteins have elongated, parallel chains.\n2. Fibrous proteins are generally insoluble in water.\n3. Globular proteins fold into compact, spherical shapes.\n4. Globular proteins are generally insoluble in water, similar to fibrous proteins.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — globular proteins are generally soluble in water, unlike fibrous proteins.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-140',
    type: 'how-many',
    question: 'How many of the following statements about enzymes are correct?\n1. Enzymes are biological catalysts, mostly proteins.\n2. Enzymes show high specificity for their substrates.\n3. Enzymes are consumed and destroyed during the reactions they catalyse.\n4. Enzymes increase reaction rate by lowering the activation energy.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — like other catalysts, enzymes are not consumed in the reactions they catalyse.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-141',
    type: 'how-many',
    question: 'How many of the following vitamin-deficiency disease pairs are correctly matched?\n1. Vitamin A — night blindness\n2. Vitamin B1 — beriberi\n3. Vitamin C — scurvy\n4. Vitamin D — pernicious anaemia',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correctly matched. Statement 4 is false — vitamin D deficiency causes rickets/osteomalacia, not pernicious anaemia (which is caused by vitamin B12 deficiency).',
    difficulty: 'medium'
  },
  {
    id: 'biomol-142',
    type: 'how-many',
    question: 'How many of the following statements about fat-soluble and water-soluble vitamins are correct?\n1. Fat-soluble vitamins are stored in the liver and adipose tissue.\n2. Water-soluble vitamins are generally not stored extensively in the body.\n3. Excess water-soluble vitamins are typically excreted in urine.\n4. Fat-soluble vitamins include vitamins A, D, E, and K.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe the classification and storage behaviour of fat-soluble and water-soluble vitamins.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-143',
    type: 'how-many',
    question: 'How many of the following statements about nucleotides and nucleosides are correct?\n1. A nucleotide contains a nitrogenous base, a pentose sugar, and a phosphate group.\n2. A nucleoside lacks the phosphate group found in a nucleotide.\n3. DNA and RNA are polymers of nucleotides.\n4. A nucleoside contains a phosphate group but no pentose sugar.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a nucleoside contains a pentose sugar but lacks the phosphate group, the opposite of what is stated.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-144',
    type: 'how-many',
    question: 'How many of the following statements about DNA and RNA structural differences are correct?\n1. DNA contains 2-deoxyribose; RNA contains ribose.\n2. DNA contains thymine; RNA contains uracil.\n3. DNA is generally double-stranded; RNA is often single-stranded.\n4. DNA and RNA both contain identical sets of nitrogenous bases with no differences.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — DNA and RNA differ specifically in one base (thymine vs. uracil), so their base sets are not identical.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-145',
    type: 'how-many',
    question: 'How many of the following statements about DNA base pairing are correct?\n1. Adenine pairs with thymine via two hydrogen bonds.\n2. Guanine pairs with cytosine via three hydrogen bonds.\n3. This specific pairing is essential for accurate DNA replication.\n4. Adenine can pair equally well with either thymine or cytosine.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — adenine specifically pairs with thymine, not cytosine, due to the specific hydrogen-bonding and geometric compatibility required.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-146',
    type: 'how-many',
    question: 'How many of the following statements about the functions of different RNA types are correct?\n1. mRNA carries genetic information from DNA to the ribosome.\n2. tRNA carries specific amino acids to the ribosome during translation.\n3. rRNA forms a structural/catalytic component of the ribosome.\n4. All three RNA types perform exactly the same function, with no distinction between them.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts the well-established distinct roles of mRNA, tRNA, and rRNA.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-147',
    type: 'how-many',
    question: 'How many of the following statements about hormones are correct?\n1. Hormones are chemical messengers secreted by endocrine glands.\n2. Insulin is a protein hormone.\n3. Hormones play a role in regulating various physiological processes.\n4. All hormones are chemically classified as carbohydrates.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — hormones can be proteins, steroids, or amino acid derivatives, not exclusively carbohydrates.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-148',
    type: 'how-many',
    question: 'How many of the following statements about glycosidic linkages in different polysaccharides are correct?\n1. Amylose has alpha-1,4-linkages.\n2. Cellulose has beta-1,4-linkages.\n3. Amylopectin has alpha-1,4-linkages along chains and alpha-1,6-linkages at branches.\n4. Glycogen has exclusively beta-glycosidic linkages, similar to cellulose.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — glycogen, like amylopectin, has alpha-glycosidic linkages (both 1,4 and 1,6), not beta-linkages like cellulose.',
    difficulty: 'hard'
  },
  {
    id: 'biomol-149',
    type: 'how-many',
    question: 'How many of the following statements about protein secondary structure are correct?\n1. The alpha-helix is a right-handed coiled structure.\n2. The alpha-helix is stabilised by intramolecular hydrogen bonds.\n3. The beta-pleated sheet involves extended chains held together by interchain hydrogen bonds.\n4. Both the alpha-helix and beta-pleated sheet are examples of tertiary, not secondary, structure.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the alpha-helix and beta-pleated sheet are both classic examples of secondary structure, not tertiary structure.',
    difficulty: 'medium'
  },
  {
    id: 'biomol-150',
    type: 'how-many',
    question: 'How many of the following statements correctly summarise key themes of the biomolecules chapter?\n1. Carbohydrate structure and reactivity (reducing/non-reducing sugars, cyclic forms) underlie the chemistry of sugars and polysaccharides.\n2. Protein structure is organised hierarchically into primary, secondary, tertiary, and quaternary levels.\n3. Vitamins are classified by solubility, which relates to storage and deficiency onset.\n4. Nucleic acid structure (base pairing, sugar-phosphate backbone) underlies genetic information storage and protein synthesis.\n5. Hormones have no chemical relationship to proteins, carbohydrates, or steroids.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, 3, and 4 correctly summarise major themes of the biomolecules chapter. Statement 5 is false — hormones are, in fact, chemically classified as proteins (e.g. insulin), amino acid derivatives, or steroids, so they are directly related to these other biomolecule classes.',
    difficulty: 'medium'
  }
];
>>>>>>> 9e6ae6a5ea2181b313543ecdc8c39b664ed24496
