export const NUCLEI = [
  // ==================== MCQ (70) ====================
  {
    id: 'nuclei-1',
    type: 'mcq',
    question: 'The atomic number (Z) of a nucleus represents the',
    options: [
      'total number of nucleons (protons plus neutrons) in the nucleus',
      'number of protons in the nucleus',
      'number of neutrons in the nucleus',
      'mass of the nucleus in atomic mass units'
    ],
    correctIndex: 1,
    explanation: 'The atomic number (Z) is defined as the number of protons present in the nucleus, which also determines the chemical identity of the element.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-2',
    type: 'mcq',
    question: 'The mass number (A) of a nucleus represents the',
    options: [
      'number of protons only',
      'number of neutrons only',
      'total number of nucleons (protons plus neutrons) in the nucleus',
      'total electric charge of the nucleus'
    ],
    correctIndex: 2,
    explanation: 'The mass number (A) is the total number of nucleons — the sum of protons and neutrons — present in the nucleus.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-3',
    type: 'mcq',
    question: 'The number of neutrons (N) in a nucleus is related to the mass number (A) and atomic number (Z) by',
    options: ['N = A + Z', 'N = A - Z', 'N = A × Z', 'N = Z - A'],
    correctIndex: 1,
    explanation: 'Since mass number is the sum of protons and neutrons, the number of neutrons is obtained as N = A - Z.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-4',
    type: 'mcq',
    question: 'Isotopes of an element are nuclei that have',
    options: [
      'the same atomic number (Z) but different mass numbers (A)',
      'the same mass number (A) but different atomic numbers (Z)',
      'the same number of neutrons but different atomic numbers',
      'completely different atomic numbers and mass numbers'
    ],
    correctIndex: 0,
    explanation: 'Isotopes are nuclei of the same element (same Z, same number of protons) but with differing numbers of neutrons, and hence differing mass numbers.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-5',
    type: 'mcq',
    question: 'Isobars are nuclei that have',
    options: [
      'the same atomic number but different mass numbers',
      'the same mass number but different atomic numbers',
      'the same number of neutrons only',
      'identical chemical properties in every case'
    ],
    correctIndex: 1,
    explanation: 'Isobars are nuclei of different elements (different Z) that happen to share the same mass number (A).',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-6',
    type: 'mcq',
    question: 'Isotones are nuclei that have',
    options: [
      'the same atomic number but different mass numbers',
      'the same mass number but different atomic numbers',
      'the same number of neutrons, but different atomic numbers and mass numbers',
      'exactly the same number of protons and neutrons'
    ],
    correctIndex: 2,
    explanation: 'Isotones are nuclei that share the same number of neutrons (N) but differ in both their atomic number (Z) and mass number (A).',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-7',
    type: 'mcq',
    question: 'The atomic mass unit (u) is defined such that the mass of a carbon-12 atom is taken to be exactly',
    options: ['1 u', '6 u', '12 u', '24 u'],
    correctIndex: 2,
    explanation: 'By convention, the atomic mass unit is defined such that the mass of one carbon-12 atom is exactly 12 u, with 1 u equal to one-twelfth of this mass.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-8',
    type: 'mcq',
    question: 'The energy equivalent of 1 atomic mass unit (u), using Einstein\'s mass-energy relation, is approximately',
    options: ['1 eV', '931.5 MeV', '931.5 keV', '9.315 MeV'],
    correctIndex: 1,
    explanation: '1 atomic mass unit is equivalent to approximately 931.5 MeV of energy, a conversion factor frequently used in nuclear physics calculations.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-9',
    type: 'mcq',
    question: 'The radius of a nucleus with mass number A is found to follow the empirical relation',
    options: ['R = R0 × A', 'R = R0 × A^(1/3), where R0 is an approximately constant value', 'R = R0 × A^2', 'R = R0 / A'],
    correctIndex: 1,
    explanation: 'Experimentally, nuclear radius is found to follow R = R0 A^(1/3), with R0 being approximately the same constant (about 1.2 fm) for all nuclei.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-10',
    type: 'mcq',
    question: 'The approximate constant R0 in the nuclear radius formula (R = R0 A^(1/3)) has a value of about',
    options: ['1.2 femtometres (fm)', '1.2 metres', '1.2 nanometres', '1.2 kilometres'],
    correctIndex: 0,
    explanation: 'The constant R0 is approximately 1.2 femtometres (1 fm = 10^-15 m), reflecting the extremely small scale of nuclear dimensions.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-11',
    type: 'mcq',
    question: 'The relation R = R0 A^(1/3) implies that the volume of a nucleus is',
    options: [
      'independent of its mass number',
      'directly proportional to its mass number A, since volume scales with R³',
      'inversely proportional to its mass number',
      'proportional to A²'
    ],
    correctIndex: 1,
    explanation: 'Since volume scales as R³ and R ∝ A^(1/3), the nuclear volume is directly proportional to A, implying that nuclear density is roughly constant across different nuclei.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-12',
    type: 'mcq',
    question: 'The nuclear density (mass per unit volume) is found to be',
    options: [
      'highly dependent on the specific nucleus, varying greatly from element to element',
      'approximately the same (constant) for all nuclei, regardless of mass number, and extremely high compared to ordinary matter',
      'extremely low compared to ordinary matter',
      'zero for all nuclei'
    ],
    correctIndex: 1,
    explanation: 'Since nuclear volume scales proportionally with mass number, nuclear density comes out to be approximately constant across all nuclei, and this value is extraordinarily high (of order 10^17 kg/m³) compared to everyday matter.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-13',
    type: 'mcq',
    question: 'The mass defect of a nucleus is defined as the',
    options: [
      'exact mass of the nucleus itself',
      'difference between the sum of the masses of the individual, separated nucleons and the actual measured mass of the bound nucleus',
      'total charge of the nucleus',
      'mass of a single proton in the nucleus'
    ],
    correctIndex: 1,
    explanation: 'Mass defect (Δm) is the difference between the total mass of the individual, unbound nucleons and the actual (smaller) mass of the bound nucleus they form together.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-14',
    type: 'mcq',
    question: 'The binding energy of a nucleus is calculated from its mass defect (Δm) using the relation',
    options: ['BE = Δm/c²', 'BE = Δm × c²', 'BE = Δm + c²', 'BE = Δm - c²'],
    correctIndex: 1,
    explanation: 'The binding energy is obtained by converting the mass defect into its energy equivalent using Einstein\'s mass-energy relation, BE = Δm c².',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-15',
    type: 'mcq',
    question: 'The binding energy of a nucleus can be physically interpreted as the',
    options: [
      'energy released when the nucleus radioactively decays',
      'minimum energy that would need to be supplied to completely separate the nucleus into its individual, free nucleons',
      'kinetic energy of the electrons orbiting the nucleus',
      'total electric potential energy of the protons alone'
    ],
    correctIndex: 1,
    explanation: 'Binding energy represents the minimum energy required to completely disassemble a nucleus into its constituent, individual (unbound) nucleons.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-16',
    type: 'mcq',
    question: 'Binding energy per nucleon is a useful quantity mainly because it',
    options: [
      'has no physical significance at all',
      'provides a measure of the average stability of a nucleus, allowing comparison of stability across different nuclei',
      'is always exactly the same value for every nucleus',
      'only applies to radioactive nuclei'
    ],
    correctIndex: 1,
    explanation: 'Binding energy per nucleon (BE/A) gives an averaged measure of how tightly nucleons are bound, allowing meaningful comparisons of relative stability between nuclei of different sizes.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-17',
    type: 'mcq',
    question: 'The binding energy per nucleon versus mass number curve shows that the maximum stability (highest BE/A) occurs for nuclei with mass numbers around',
    options: ['A ≈ 2-4', 'A ≈ 56-62, in the iron-nickel region', 'A ≈ 238', 'A ≈ 500'],
    correctIndex: 1,
    explanation: 'The binding energy per nucleon curve peaks in the region around A ≈ 56-62 (iron and nickel), which are among the most stable nuclei found in nature.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-18',
    type: 'mcq',
    question: 'For mass numbers beyond the peak of the binding energy per nucleon curve (i.e., for very heavy nuclei), the value of BE/A generally',
    options: [
      'continues to increase indefinitely',
      'gradually decreases, making very heavy nuclei somewhat less stable and prone to energy release via fission',
      'remains exactly constant at its maximum value forever',
      'drops immediately to zero'
    ],
    correctIndex: 1,
    explanation: 'Beyond the peak (around A ≈ 56-62), binding energy per nucleon gradually decreases for heavier nuclei, making them relatively less stable and capable of releasing energy through fission into lighter, more tightly bound fragments.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-19',
    type: 'mcq',
    question: 'The shape of the binding energy per nucleon curve explains why energy can be released through nuclear fusion, since',
    options: [
      'combining two very light nuclei into a somewhat heavier nucleus generally moves the product towards higher BE/A, releasing energy',
      'fusion always decreases the binding energy per nucleon',
      'fusion has no effect on binding energy at all',
      'only extremely heavy nuclei can undergo fusion'
    ],
    correctIndex: 0,
    explanation: 'For sufficiently light nuclei, combining them into a heavier product generally increases BE/A (moving up the steep initial rise of the curve), releasing energy in the process, which is the basis of nuclear fusion.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-20',
    type: 'mcq',
    question: 'The shape of the binding energy per nucleon curve explains why energy can be released through nuclear fission, since',
    options: [
      'splitting a very heavy nucleus into two lighter fragments generally moves the products towards higher BE/A (closer to the peak of the curve), releasing energy',
      'fission always decreases the binding energy per nucleon',
      'fission has no effect on binding energy at all',
      'only extremely light nuclei can undergo fission'
    ],
    correctIndex: 0,
    explanation: 'For very heavy nuclei (with relatively lower BE/A than the peak), splitting into two medium-mass fragments generally increases the total BE/A, releasing energy — the basis of nuclear fission.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-21',
    type: 'mcq',
    question: 'The nuclear force, which holds nucleons together within the nucleus, is characterised by being',
    options: [
      'a long-range force, effective even over macroscopic distances',
      'a very short-range force, significant only within a distance of a few femtometres',
      'a weaker force than electromagnetic repulsion at all distances',
      'effective only between protons, never involving neutrons'
    ],
    correctIndex: 1,
    explanation: 'The nuclear force is extremely short-ranged, acting significantly only over distances of a few femtometres, comparable to nuclear dimensions, and becoming negligible beyond this range.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-22',
    type: 'mcq',
    question: 'Within its effective range, the nuclear force is generally',
    options: [
      'much weaker than the electrostatic (Coulomb) repulsion between protons',
      'much stronger than the electrostatic (Coulomb) repulsion between protons, which is why the nucleus remains bound despite this repulsion',
      'exactly equal in magnitude to the Coulomb repulsion at all times',
      'a purely repulsive force, with no attractive component at all'
    ],
    correctIndex: 1,
    explanation: 'At short nuclear distances, the strong nuclear force dominates over the electrostatic repulsion between protons, allowing the nucleus to remain bound together.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-23',
    type: 'mcq',
    question: 'The nuclear force is described as being (approximately) "charge independent," meaning that it',
    options: [
      'acts only between two protons, and never between two neutrons or between a proton and a neutron',
      'acts with roughly the same strength between any pair of nucleons — proton-proton, neutron-neutron, or proton-neutron — aside from the additional Coulomb effect between protons',
      'depends strongly on the electric charge of the nucleons involved',
      'is completely absent between neutrons, since they carry no charge'
    ],
    correctIndex: 1,
    explanation: 'Charge independence of the nuclear force means it acts with approximately equal strength regardless of whether the interacting nucleons are protons or neutrons, aside from the additional electrostatic repulsion that exists specifically between two protons.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-24',
    type: 'mcq',
    question: 'The saturation property of the nuclear force refers to the fact that',
    options: [
      'a given nucleon interacts strongly with all other nucleons in the nucleus, regardless of distance',
      'a given nucleon interacts strongly only with its nearest neighbouring nucleons, not with every nucleon in the nucleus',
      'the nuclear force becomes infinitely strong as more nucleons are added',
      'nuclear force disappears entirely once more than two nucleons are present'
    ],
    correctIndex: 1,
    explanation: 'Saturation means each nucleon effectively interacts strongly only with its nearby neighbours rather than with every other nucleon in the nucleus, consistent with the roughly constant binding energy per nucleon observed for larger nuclei.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-25',
    type: 'mcq',
    question: 'Radioactivity, the spontaneous emission of radiation from certain unstable nuclei, was discovered by',
    options: ['Ernest Rutherford', 'Marie Curie', 'Henri Becquerel', 'Niels Bohr'],
    correctIndex: 2,
    explanation: 'Radioactivity was first discovered by Henri Becquerel, who observed that certain uranium compounds spontaneously emitted radiation.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-26',
    type: 'mcq',
    question: 'In alpha decay, the emitted alpha particle is equivalent to the nucleus of a',
    options: ['hydrogen atom', 'helium atom, consisting of 2 protons and 2 neutrons', 'lithium atom', 'carbon atom'],
    correctIndex: 1,
    explanation: 'An alpha particle is identical to a helium nucleus, consisting of two protons and two neutrons bound together.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-27',
    type: 'mcq',
    question: 'When a nucleus undergoes alpha decay, its mass number and atomic number change according to',
    options: [
      'mass number decreases by 4, atomic number decreases by 2',
      'mass number decreases by 2, atomic number decreases by 4',
      'mass number remains unchanged, atomic number decreases by 2',
      'mass number decreases by 4, atomic number remains unchanged'
    ],
    correctIndex: 0,
    explanation: 'Since an alpha particle carries away 2 protons and 2 neutrons, the parent nucleus loses 4 units of mass number and 2 units of atomic number.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-28',
    type: 'mcq',
    question: 'In beta-minus decay, a neutron within the nucleus transforms into a proton, with the emission of',
    options: [
      'an alpha particle and a gamma ray',
      'an electron and an antineutrino',
      'a positron and a neutrino',
      'a proton and a photon'
    ],
    correctIndex: 1,
    explanation: 'Beta-minus decay involves the conversion of a neutron into a proton within the nucleus, accompanied by the emission of an electron (the beta particle) and an antineutrino.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-29',
    type: 'mcq',
    question: 'When a nucleus undergoes beta-minus decay, its mass number and atomic number change according to',
    options: [
      'mass number remains unchanged, atomic number increases by 1',
      'mass number decreases by 1, atomic number remains unchanged',
      'mass number and atomic number both increase by 1',
      'mass number decreases by 4, atomic number decreases by 2'
    ],
    correctIndex: 0,
    explanation: 'Since a neutron converts into a proton (with total nucleon number conserved), the mass number stays the same while the atomic number increases by 1 in beta-minus decay.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-30',
    type: 'mcq',
    question: 'Gamma decay involves the emission of',
    options: [
      'a helium nucleus',
      'a high-energy photon (gamma ray), as the nucleus transitions from a higher-energy excited state to a lower-energy state',
      'an electron and an antineutrino',
      'a proton and a neutron together'
    ],
    correctIndex: 1,
    explanation: 'Gamma decay occurs when an excited nucleus releases excess energy in the form of a high-energy photon (gamma ray), without any change in its proton or neutron composition.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-31',
    type: 'mcq',
    question: 'Unlike alpha and beta decay, gamma decay does NOT change the',
    options: [
      'internal energy state of the nucleus',
      'mass number (A) or atomic number (Z) of the nucleus',
      'total energy of the system',
      'wavelength of the emitted radiation'
    ],
    correctIndex: 1,
    explanation: 'Gamma decay simply involves a nucleus releasing excess internal energy as a photon; since no nucleons are gained or lost, both the mass number and atomic number remain unchanged.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-32',
    type: 'mcq',
    question: 'The law of radioactive decay states that the rate of decay of a radioactive sample is',
    options: [
      'constant over time, regardless of the number of undecayed nuclei remaining',
      'directly proportional to the number of undecayed radioactive nuclei present at that instant',
      'inversely proportional to the number of undecayed nuclei present',
      'completely independent of the number of nuclei present'
    ],
    correctIndex: 1,
    explanation: 'The fundamental law of radioactive decay states that the decay rate (-dN/dt) is directly proportional to the number of undecayed nuclei (N) present at that time, leading to exponential decay.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-33',
    type: 'mcq',
    question: 'The mathematical solution to the radioactive decay law, giving the number of undecayed nuclei N(t) at time t (starting from N0 at t=0), is',
    options: [
      'N(t) = N0 e^(-λt), where λ is the decay constant',
      'N(t) = N0 e^(+λt)',
      'N(t) = N0 - λt',
      'N(t) = N0 / λt'
    ],
    correctIndex: 0,
    explanation: 'Solving the differential decay law gives the exponential decay formula N(t) = N0 e^(-λt), where λ is the characteristic decay constant of the radioactive species.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-34',
    type: 'mcq',
    question: 'The half-life of a radioactive substance is defined as the',
    options: [
      'time required for the entire sample to decay completely',
      'time required for exactly half of the initial number of radioactive nuclei to decay',
      'time required for the decay constant to double',
      'average lifetime of every individual nucleus in the sample'
    ],
    correctIndex: 1,
    explanation: 'Half-life (T1/2) is defined as the time needed for exactly half of the initial number of radioactive nuclei in a sample to undergo decay.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-35',
    type: 'mcq',
    question: 'The half-life (T1/2) is related to the decay constant (λ) by',
    options: ['T1/2 = λ', 'T1/2 = 0.693/λ', 'T1/2 = λ/0.693', 'T1/2 = 1/λ²'],
    correctIndex: 1,
    explanation: 'Solving N0/2 = N0 e^(-λT1/2) gives T1/2 = ln(2)/λ ≈ 0.693/λ, the standard relationship between half-life and decay constant.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-36',
    type: 'mcq',
    question: 'The mean (average) life of a radioactive species, τ, is related to the decay constant (λ) by',
    options: ['τ = λ', 'τ = 1/λ', 'τ = 0.693λ', 'τ = λ²'],
    correctIndex: 1,
    explanation: 'Mean life is defined as τ = 1/λ, representing the average time a nucleus in the sample survives before decaying.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-37',
    type: 'mcq',
    question: 'Comparing half-life (T1/2) and mean life (τ) for the same radioactive substance, it is found that',
    options: [
      'T1/2 is always greater than τ',
      'T1/2 is always less than τ, since T1/2 = 0.693τ',
      'T1/2 and τ are always exactly equal',
      'there is no fixed mathematical relationship between T1/2 and τ'
    ],
    correctIndex: 1,
    explanation: 'Since T1/2 = 0.693/λ = 0.693τ, and 0.693 is less than 1, the half-life is always somewhat shorter than the mean life for a given radioactive substance.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-38',
    type: 'mcq',
    question: 'The activity of a radioactive sample, defined as its rate of decay, is given by',
    options: ['A = N/λ', 'A = λN', 'A = λ + N', 'A = λ - N'],
    correctIndex: 1,
    explanation: 'Activity (A) is defined as the rate of decay, A = λN, where N is the number of undecayed radioactive nuclei present at that instant.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-39',
    type: 'mcq',
    question: 'The SI unit of radioactive activity is the',
    options: ['curie (Ci)', 'becquerel (Bq), defined as one decay per second', 'roentgen', 'gray'],
    correctIndex: 1,
    explanation: 'The SI unit of activity is the becquerel (Bq), corresponding to one radioactive decay event per second; the curie (Ci) is an older, non-SI unit still sometimes used.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-40',
    type: 'mcq',
    question: 'Radioactive decay is fundamentally a',
    options: [
      'completely predictable process, allowing exact prediction of when any specific nucleus will decay',
      'statistical (probabilistic) process at the level of individual nuclei, though the overall decay rate of a large sample follows a definite, predictable exponential law',
      'process that can be entirely stopped by applying external pressure',
      'process unrelated to the number of undecayed nuclei present'
    ],
    correctIndex: 1,
    explanation: 'While it is impossible to predict exactly when any single nucleus will decay, the decay of a large collection of radioactive nuclei follows a well-defined, predictable statistical (exponential) law overall.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-41',
    type: 'mcq',
    question: 'Among alpha, beta, and gamma radiation, alpha particles generally have the',
    options: [
      'greatest penetrating power and least ionising power',
      'least penetrating power and greatest ionising power',
      'exactly the same penetrating and ionising power as gamma rays',
      'no ionising power at all'
    ],
    correctIndex: 1,
    explanation: 'Alpha particles, being relatively heavy and doubly charged, have strong ionising power but very limited penetrating ability, being stopped by just a sheet of paper or the outer layer of skin.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-42',
    type: 'mcq',
    question: 'Among alpha, beta, and gamma radiation, gamma rays generally have the',
    options: [
      'greatest penetrating power and least ionising power, requiring thick lead or concrete shielding',
      'least penetrating power of the three',
      'exactly the same penetrating power as alpha particles',
      'greatest ionising power of the three'
    ],
    correctIndex: 0,
    explanation: 'Gamma rays, being high-energy photons, have the greatest penetrating power among the three types of radiation but the least ionising power, requiring substantial shielding (such as thick lead or concrete) to be effectively absorbed.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-43',
    type: 'mcq',
    question: 'Nuclear fission is the process in which',
    options: [
      'two light nuclei combine to form a heavier nucleus',
      'a heavy nucleus splits into two lighter nuclei, typically upon absorbing a neutron, releasing energy and additional neutrons',
      'a nucleus emits only gamma radiation, with no change in composition',
      'a proton is converted into a neutron inside the nucleus'
    ],
    correctIndex: 1,
    explanation: 'Nuclear fission involves a heavy nucleus (such as uranium-235) splitting into two lighter nuclei after absorbing a neutron, releasing a large amount of energy along with additional neutrons.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-44',
    type: 'mcq',
    question: 'Nuclear fission was experimentally discovered by',
    options: ['Albert Einstein', 'Otto Hahn and Fritz Strassmann', 'Isaac Newton', 'James Chadwick'],
    correctIndex: 1,
    explanation: 'Nuclear fission was first experimentally discovered by Otto Hahn and Fritz Strassmann, who observed the splitting of uranium nuclei upon neutron bombardment.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-45',
    type: 'mcq',
    question: 'In a nuclear fission chain reaction, the additional neutrons released by one fission event can',
    options: [
      'never interact with any other nucleus',
      'go on to induce further fission events in other fissile nuclei, potentially sustaining a chain reaction',
      'immediately stop all further fission from occurring',
      'convert instantly into protons'
    ],
    correctIndex: 1,
    explanation: 'The neutrons released during fission can trigger further fission events in nearby fissile nuclei, enabling a self-sustaining chain reaction if enough of these neutrons go on to cause additional fissions.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-46',
    type: 'mcq',
    question: 'In a controlled nuclear reactor, control rods (typically made of materials like cadmium or boron) function to',
    options: [
      'speed up the fission reaction as much as possible',
      'absorb excess neutrons, regulating the rate of the chain reaction and preventing it from becoming uncontrolled',
      'generate additional neutrons to increase reactor output',
      'act as the primary nuclear fuel'
    ],
    correctIndex: 1,
    explanation: 'Control rods absorb some of the free neutrons produced during fission, allowing the reactor operator to regulate and control the rate of the ongoing chain reaction.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-47',
    type: 'mcq',
    question: 'In a nuclear reactor, a moderator (such as heavy water or graphite) functions to',
    options: [
      'absorb excess neutrons to stop the reaction entirely',
      'slow down fast neutrons produced in fission, increasing the probability that they will cause further fission events',
      'act as the fuel source for fission',
      'convert neutrons into protons'
    ],
    correctIndex: 1,
    explanation: 'A moderator slows down the fast neutrons produced by fission to lower (thermal) energies, at which they are more likely to induce further fission in the fuel, sustaining the chain reaction efficiently.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-48',
    type: 'mcq',
    question: 'In a nuclear power reactor, the coolant primarily functions to',
    options: [
      'absorb all the neutrons produced',
      'remove the heat generated by fission, transferring it to eventually produce steam for driving turbines and generating electricity',
      'act as the moderator as well',
      'directly convert nuclear energy into electrical energy without any intermediate steps'
    ],
    correctIndex: 1,
    explanation: 'The coolant carries away the heat generated by the fission reaction, typically transferring this heat to produce steam, which then drives turbines connected to electricity generators.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-49',
    type: 'mcq',
    question: 'Nuclear fusion is the process in which',
    options: [
      'a heavy nucleus splits into two lighter fragments',
      'two (or more) light nuclei combine to form a heavier nucleus, releasing energy in the process',
      'a nucleus captures an electron from its surrounding orbital',
      'gamma radiation alone is emitted, with no change in nuclear composition'
    ],
    correctIndex: 1,
    explanation: 'Nuclear fusion involves the combination of two or more light nuclei into a single, heavier nucleus, releasing energy since the product nucleus is more tightly bound (higher BE/A) than the reactants.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-50',
    type: 'mcq',
    question: 'Nuclear fusion reactions generally require extremely high temperatures (hence sometimes called thermonuclear reactions) mainly to',
    options: [
      'cool down the nuclei sufficiently for them to combine',
      'provide the nuclei with enough kinetic energy to overcome the strong electrostatic (Coulomb) repulsion between them and get close enough for the nuclear force to bind them',
      'convert the nuclei into a solid state',
      'prevent any nuclear reaction from occurring at all'
    ],
    correctIndex: 1,
    explanation: 'Since positively charged nuclei repel each other electrostatically, very high temperatures are needed to give them sufficient kinetic energy to overcome this repulsion and get close enough for the short-range nuclear force to take over and bind them together.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-51',
    type: 'mcq',
    question: 'The energy radiated by the Sun and other stars is primarily generated through',
    options: [
      'nuclear fission of heavy elements',
      'nuclear fusion reactions, particularly the conversion of hydrogen into helium via processes like the proton-proton cycle',
      'chemical combustion reactions',
      'radioactive decay of uranium alone'
    ],
    correctIndex: 1,
    explanation: 'The Sun and most stars generate their energy through nuclear fusion, primarily converting hydrogen nuclei into helium through a series of reactions known as the proton-proton cycle.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-52',
    type: 'mcq',
    question: 'Compared to nuclear fission, nuclear fusion generally releases',
    options: [
      'much less energy per unit mass of fuel',
      'considerably more energy per unit mass of fuel',
      'exactly the same amount of energy per unit mass',
      'no energy at all, since fusion is not an exothermic process'
    ],
    correctIndex: 1,
    explanation: 'Nuclear fusion typically releases significantly more energy per unit mass of fuel than nuclear fission, one reason fusion is considered an attractive potential energy source.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-53',
    type: 'mcq',
    question: 'A key ongoing scientific and engineering challenge for practical, controlled nuclear fusion as a widespread energy source has been',
    options: [
      'a complete lack of theoretical understanding of the fusion process',
      'achieving and sustaining the extremely high temperature and confinement conditions needed for a controlled, self-sustaining fusion reaction',
      'a complete absence of light elements needed as fuel',
      'the fact that fusion releases no usable energy'
    ],
    correctIndex: 1,
    explanation: 'Achieving and maintaining the extremely high temperatures and adequate confinement conditions needed for a stable, controlled, and net energy-producing fusion reaction has remained a major ongoing scientific and engineering challenge.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-54',
    type: 'mcq',
    question: 'The total energy released in a fission or fusion reaction can be calculated from the mass difference between the reactants and products using',
    options: [
      'Newton\'s second law',
      'Einstein\'s mass-energy equivalence relation, E = Δm c²',
      'Coulomb\'s law',
      'Ohm\'s law'
    ],
    correctIndex: 1,
    explanation: 'The energy released in nuclear reactions is calculated from the mass difference (Δm) between initial and final states, converted to energy using Einstein\'s relation E = Δm c².',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-55',
    type: 'mcq',
    question: 'Since a nucleus is far more tightly bound than the sum of its free, separated nucleons, the actual mass of a stable nucleus is generally',
    options: [
      'greater than the sum of the masses of its constituent free nucleons',
      'less than the sum of the masses of its constituent free nucleons, consistent with a positive binding energy and mass defect',
      'exactly equal to the sum of the masses of its constituent free nucleons',
      'completely unrelated to the masses of its constituent nucleons'
    ],
    correctIndex: 1,
    explanation: 'The nucleus\'s actual mass is less than the total mass of its free, separated nucleons, since some mass is converted into the binding energy that holds the nucleus together, consistent with a positive mass defect.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-56',
    type: 'mcq',
    question: 'The atomic number of a nucleus determines its',
    options: [
      'isotope identity only, with no relation to chemical properties',
      'chemical identity (which element it is), since it determines the number of protons and hence electrons in a neutral atom',
      'exact mass in atomic mass units',
      'exact number of neutrons present'
    ],
    correctIndex: 1,
    explanation: 'Since the atomic number equals the number of protons, and this determines the number of electrons in a neutral atom, it fundamentally determines the chemical identity and properties of the element.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-57',
    type: 'mcq',
    question: 'Isotopes of the same element share identical chemical properties primarily because',
    options: [
      'they have the same number of neutrons',
      'they have the same atomic number (and hence the same number of electrons), which determines chemical behaviour',
      'they have identical mass numbers',
      'isotopes actually have completely different chemical properties from one another'
    ],
    correctIndex: 1,
    explanation: 'Since isotopes share the same atomic number (and hence the same electron configuration in a neutral atom), they exhibit essentially identical chemical behaviour, despite differing in mass due to differing neutron numbers.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-58',
    type: 'mcq',
    question: 'A radioactive decay series (chain) typically continues through successive alpha and beta decays until it reaches',
    options: [
      'an unstable nucleus that decays infinitely without ever stopping',
      'a stable, non-radioactive nucleus (often an isotope of lead, in naturally occurring heavy element series)',
      'the original parent nucleus once again',
      'a nucleus with zero protons and zero neutrons'
    ],
    correctIndex: 1,
    explanation: 'Natural radioactive decay series proceed through a sequence of alpha and beta decays until a stable, non-radioactive nucleus is finally reached, often an isotope of lead in the case of naturally occurring heavy element decay chains.',
    difficulty: 'hard'
  },
  {
    id: 'nuclei-59',
    type: 'mcq',
    question: 'In terms of half-life, after two half-lives have elapsed, the fraction of the original radioactive sample remaining undecayed is',
    options: ['1/2', '1/4', '1/8', '3/4'],
    correctIndex: 1,
    explanation: 'Each half-life reduces the remaining amount by half; after two half-lives, (1/2) × (1/2) = 1/4 of the original sample remains undecayed.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-60',
    type: 'mcq',
    question: 'In terms of half-life, after three half-lives have elapsed, the fraction of the original radioactive sample remaining undecayed is',
    options: ['1/2', '1/4', '1/8', '1/16'],
    correctIndex: 2,
    explanation: 'After three half-lives, the remaining fraction is (1/2)³ = 1/8 of the original sample.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-61',
    type: 'mcq',
    question: 'A radioactive sample with a very short half-life, compared to one with a very long half-life (starting with the same initial number of nuclei), will generally show',
    options: [
      'a lower initial activity',
      'a higher initial activity, since activity A = λN, and a shorter half-life corresponds to a larger decay constant λ',
      'exactly the same activity, regardless of half-life',
      'no activity at all'
    ],
    correctIndex: 1,
    explanation: 'Since decay constant λ is inversely related to half-life (λ = 0.693/T1/2), a shorter half-life means a larger λ, and since activity A = λN, a shorter-half-life sample (with the same N) shows higher initial activity.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-62',
    type: 'mcq',
    question: 'Which of the following statements correctly compares the range and relative strength of the nuclear force to the electromagnetic (Coulomb) force?',
    options: [
      'The nuclear force has a longer range and is always weaker than the electromagnetic force',
      'The nuclear force has a much shorter range but is much stronger than the electromagnetic force at nuclear distances',
      'Both forces have identical ranges and identical strengths',
      'The nuclear force does not exist; only electromagnetic forces act within the nucleus'
    ],
    correctIndex: 1,
    explanation: 'The nuclear force is very short-ranged (effective only over nuclear distances) but is significantly stronger than the electromagnetic force at these short distances, which is why the nucleus remains bound despite proton-proton repulsion.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-63',
    type: 'mcq',
    question: 'A neutron, unlike a proton, carries',
    options: [
      'a positive electric charge',
      'no net electric charge (it is electrically neutral)',
      'a negative electric charge equal in magnitude to that of an electron',
      'exactly the same charge as a proton'
    ],
    correctIndex: 1,
    explanation: 'A neutron is electrically neutral, carrying no net electric charge, unlike the positively charged proton.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-64',
    type: 'mcq',
    question: 'The neutron was experimentally discovered by',
    options: ['Ernest Rutherford', 'James Chadwick', 'Niels Bohr', 'Marie Curie'],
    correctIndex: 1,
    explanation: 'The neutron was experimentally discovered by James Chadwick, completing the basic picture of the nucleus as composed of protons and neutrons.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-65',
    type: 'mcq',
    question: 'The observation that the volume of a nucleus is proportional to its mass number (A) is consistent with the nucleus behaving somewhat like a',
    options: [
      'perfect vacuum, with no internal structure at all',
      'closely packed collection of roughly incompressible nucleons, similar in spirit to an incompressible liquid drop',
      'a single, indivisible point particle with zero volume',
      'a gas of freely expanding, non-interacting particles'
    ],
    correctIndex: 1,
    explanation: 'Since nuclear volume scales proportionally with the number of nucleons (constant density), the nucleus behaves somewhat like a closely packed, roughly incompressible collection of nucleons, an analogy sometimes described using the liquid drop model.',
    difficulty: 'hard'
  },
  {
    id: 'nuclei-66',
    type: 'mcq',
    question: 'Nuclear reactors used for generating electricity typically use fuel such as',
    options: [
      'ordinary (natural) carbon',
      'enriched uranium, containing an increased proportion of the fissile isotope uranium-235',
      'pure hydrogen gas',
      'liquid nitrogen'
    ],
    correctIndex: 1,
    explanation: 'Nuclear power reactors typically use enriched uranium fuel, with an increased concentration of the fissile isotope uranium-235, to sustain an efficient fission chain reaction.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-67',
    type: 'mcq',
    question: 'When a heavy nucleus undergoes induced fission by absorbing a slow (thermal) neutron, the process typically also releases',
    options: [
      'no additional neutrons at all',
      'two or three additional fast neutrons, along with a large amount of energy',
      'only gamma radiation, with no particles released',
      'only alpha particles'
    ],
    correctIndex: 1,
    explanation: 'Induced fission of a heavy nucleus like uranium-235 typically releases two or three additional fast neutrons along with a substantial amount of energy, enabling the possibility of a self-sustaining chain reaction.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-68',
    type: 'mcq',
    question: 'An uncontrolled nuclear fission chain reaction, in which the number of fission events grows very rapidly without any regulation, is the basic principle behind',
    options: [
      'a controlled nuclear power reactor',
      'an atomic (fission) bomb',
      'a simple electric battery',
      'a solar panel'
    ],
    correctIndex: 1,
    explanation: 'An atomic bomb relies on an uncontrolled, rapidly escalating fission chain reaction, in contrast to the carefully regulated, controlled chain reaction maintained within a nuclear power reactor.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-69',
    type: 'mcq',
    question: 'The concept of "critical mass" in the context of nuclear fission refers to',
    options: [
      'the maximum possible mass a nucleus can have before it becomes stable',
      'the minimum mass of fissile material needed to sustain a self-propagating chain reaction',
      'the mass of a single neutron',
      'a mass value that has no relevance to nuclear reactions at all'
    ],
    correctIndex: 1,
    explanation: 'Critical mass refers to the minimum quantity of fissile material required for a self-sustaining chain reaction to occur, since below this mass too many neutrons escape without causing further fission.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-70',
    type: 'mcq',
    question: 'Overall, the chapter on nuclei, as emphasised in NCERT, integrates the composition and size of the nucleus with',
    options: [
      'concepts of mass defect and binding energy, the nature of the nuclear force, radioactive decay laws, and the release of nuclear energy through fission and fusion',
      'only the chemical properties of elements, with no reference to nuclear structure at all',
      'only classical mechanics, with no quantum or relativistic concepts involved',
      'topics entirely unrelated to atomic or subatomic structure'
    ],
    correctIndex: 0,
    explanation: 'The chapter connects the basic structure of the nucleus (composition, size, mass defect) to broader concepts including nuclear force properties, the statistical law of radioactive decay, and the practical release of nuclear energy through fission and fusion.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'nuclei-71',
    type: 'assertion-reason',
    question: 'Assertion (A): Isotopes of an element show identical chemical behaviour.\nReason (R): Isotopes have the same atomic number, and hence the same number of electrons in a neutral atom, which determines chemical properties.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This shared electron configuration, arising from identical atomic number, directly explains the identical chemical behaviour of isotopes, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-72',
    type: 'assertion-reason',
    question: 'Assertion (A): The volume of a nucleus is directly proportional to its mass number A.\nReason (R): The nuclear radius follows R = R0 A^(1/3), and since volume scales as R³, this gives volume ∝ A.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This direct mathematical consequence of the radius formula is exactly what explains why nuclear volume is proportional to mass number, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-73',
    type: 'assertion-reason',
    question: 'Assertion (A): Nuclear density is approximately the same for all nuclei, regardless of mass number.\nReason (R): Since nuclear volume is directly proportional to mass number A, and mass is also approximately proportional to A, the ratio (density = mass/volume) remains roughly constant.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This proportionality of both mass and volume to A, keeping their ratio (density) roughly constant, directly explains why nuclear density is approximately the same across different nuclei, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-74',
    type: 'assertion-reason',
    question: 'Assertion (A): The actual mass of a stable nucleus is less than the sum of the masses of its individual, separated nucleons.\nReason (R): Some mass is converted into binding energy when the nucleons come together to form the bound nucleus, consistent with Einstein\'s mass-energy relation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This conversion of mass into binding energy, releasing energy as the nucleons bind together, is exactly why the bound nucleus\'s mass is less than the sum of its free constituent nucleons\' masses, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-75',
    type: 'assertion-reason',
    question: 'Assertion (A): Nuclei around mass number 56-62 (like iron and nickel) are among the most stable nuclei found in nature.\nReason (R): These nuclei correspond to the peak of the binding energy per nucleon curve, indicating maximum average binding strength per nucleon.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This peak in binding energy per nucleon, representing maximum average nuclear stability, directly explains why nuclei in this mass range are exceptionally stable, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-76',
    type: 'assertion-reason',
    question: 'Assertion (A): Energy is released when very light nuclei undergo fusion to form a somewhat heavier nucleus.\nReason (R): For light nuclei, combining into a heavier product generally increases the binding energy per nucleon, moving towards the more stable peak of the BE/A curve.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This increase in binding energy per nucleon upon fusion of light nuclei is exactly what accounts for the energy release in such reactions, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-77',
    type: 'assertion-reason',
    question: 'Assertion (A): Energy is released when a very heavy nucleus undergoes fission into two lighter fragments.\nReason (R): For heavy nuclei, splitting into two medium-mass fragments generally increases the total binding energy per nucleon, moving towards the more stable peak of the BE/A curve.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This increase in binding energy per nucleon upon fission of heavy nuclei is exactly what accounts for the energy release in such reactions, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-78',
    type: 'assertion-reason',
    question: 'Assertion (A): The nucleus remains bound together despite the mutual electrostatic repulsion between its protons.\nReason (R): The strong nuclear force, though extremely short-ranged, is significantly stronger than the electromagnetic repulsion at the very short distances characteristic of nuclear dimensions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This dominance of the strong nuclear force over electromagnetic repulsion at nuclear distances directly explains why the nucleus remains bound despite proton-proton repulsion, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-79',
    type: 'assertion-reason',
    question: 'Assertion (A): The binding energy per nucleon remains roughly constant for larger nuclei, rather than increasing indefinitely as more nucleons are added.\nReason (R): The nuclear force exhibits a saturation property, whereby each nucleon interacts strongly only with its nearby neighbours, not with every nucleon in the nucleus.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This limited, near-neighbour-only interaction (saturation) is exactly why binding energy per nucleon does not keep increasing indefinitely as more nucleons are added, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-80',
    type: 'assertion-reason',
    question: 'Assertion (A): The nuclear force is described as approximately charge independent.\nReason (R): The nuclear force acts with roughly the same strength between proton-proton, neutron-neutron, and proton-neutron pairs, aside from the additional Coulomb repulsion present specifically between two protons.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This near-equal strength of the nuclear force across all nucleon pair types, aside from the separate Coulomb effect, is exactly what is meant by (and explains) charge independence, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-81',
    type: 'assertion-reason',
    question: 'Assertion (A): In alpha decay, the mass number of the parent nucleus decreases by 4.\nReason (R): An alpha particle, consisting of 2 protons and 2 neutrons, is emitted from the parent nucleus.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since the alpha particle carries away a total of 4 nucleons (2 protons + 2 neutrons), this directly explains the decrease of 4 in the parent nucleus\'s mass number, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-82',
    type: 'assertion-reason',
    question: 'Assertion (A): In beta-minus decay, the atomic number of the nucleus increases by 1, while its mass number remains unchanged.\nReason (R): Beta-minus decay involves the conversion of a neutron into a proton within the nucleus, with emission of an electron and an antineutrino.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since a neutron converts into a proton (total nucleon count unchanged), this directly explains why atomic number increases by 1 while mass number stays the same, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-83',
    type: 'assertion-reason',
    question: 'Assertion (A): Gamma decay does not change the mass number or atomic number of a nucleus.\nReason (R): Gamma decay involves the emission of a high-energy photon as the nucleus transitions between internal energy states, without any change in its number of protons or neutrons.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since gamma decay involves only a change in the nucleus\'s internal energy state (via photon emission), with no change in its nucleon composition, this directly explains why mass number and atomic number remain unchanged, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-84',
    type: 'assertion-reason',
    question: 'Assertion (A): The number of radioactive nuclei in a sample decreases exponentially with time.\nReason (R): The rate of decay at any instant is proportional to the number of undecayed nuclei present at that instant.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This proportionality between decay rate and the current number of undecayed nuclei is exactly the mathematical relationship that leads to exponential decay, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-85',
    type: 'assertion-reason',
    question: 'Assertion (A): The half-life of a radioactive substance is always less than its mean life.\nReason (R): The mathematical relationship between the two is T1/2 = 0.693 × τ, and since 0.693 is less than 1, T1/2 is necessarily smaller than τ.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This mathematical relationship, with the multiplying factor of 0.693 being less than 1, directly explains why half-life is always shorter than mean life, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-86',
    type: 'assertion-reason',
    question: 'Assertion (A): It is impossible to predict exactly when a specific individual radioactive nucleus will decay.\nReason (R): Radioactive decay is a fundamentally statistical (probabilistic) process at the level of individual nuclei, though the overall behaviour of a large sample follows a definite, predictable exponential law.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This statistical nature of decay at the individual-nucleus level, while still following a definite overall pattern for large samples, is exactly why predicting the exact decay time of any single nucleus is fundamentally impossible, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-87',
    type: 'assertion-reason',
    question: 'Assertion (A): Alpha particles are stopped by a thin sheet of paper, while gamma rays require thick lead or concrete shielding.\nReason (R): Alpha particles interact strongly with matter (high ionising power) but have very low penetrating power, while gamma rays, being high-energy photons, have much higher penetrating power but interact less strongly with matter per unit path length.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This inverse relationship between ionising power and penetrating power for these two types of radiation directly explains the differing shielding requirements described in A, correctly explaining it.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-88',
    type: 'assertion-reason',
    question: 'Assertion (A): A nuclear fission chain reaction can be either controlled (as in a power reactor) or uncontrolled (as in an atomic bomb).\nReason (R): The rate of the chain reaction depends on how effectively the released neutrons are regulated or absorbed, which can be managed using control rods in a reactor but is deliberately left unregulated in a bomb.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This difference in neutron regulation, using control rods in a reactor versus allowing unrestricted chain growth in a bomb, is exactly what explains the two contrasting outcomes of a fission chain reaction, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-89',
    type: 'assertion-reason',
    question: 'Assertion (A): Nuclear reactors use a moderator, such as heavy water or graphite, to slow down neutrons.\nReason (R): Slower (thermal) neutrons have a higher probability of causing further fission in fissile fuel like uranium-235, compared to the fast neutrons initially released by fission.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This higher probability of inducing further fission with slower neutrons directly explains why a moderator is used to slow down the fast neutrons produced by fission, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-90',
    type: 'assertion-reason',
    question: 'Assertion (A): Nuclear fusion requires extremely high temperatures to occur.\nReason (R): Fusing nuclei must overcome their mutual electrostatic (Coulomb) repulsion, which requires supplying them with substantial kinetic energy, typically achieved through very high temperatures.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This need to overcome electrostatic repulsion by supplying sufficient kinetic energy directly explains why extremely high temperatures are required for nuclear fusion, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-91',
    type: 'assertion-reason',
    question: 'Assertion (A): The Sun continuously generates enormous amounts of energy over billions of years.\nReason (R): The Sun sustains ongoing nuclear fusion reactions, converting hydrogen into helium and releasing energy in the process.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This ongoing nuclear fusion process, converting hydrogen to helium, is precisely what fuels the Sun\'s enormous and sustained energy output, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-92',
    type: 'assertion-reason',
    question: 'Assertion (A): Controlled nuclear fusion has not yet become a widespread, practical source of commercial electricity generation.\nReason (R): Achieving and sustaining the extremely high temperature and confinement conditions required for a stable, net energy-producing fusion reaction remains a significant scientific and engineering challenge.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This ongoing technical difficulty in achieving stable, controlled, net-positive fusion conditions directly explains why fusion has not yet become a widespread practical energy source, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-93',
    type: 'assertion-reason',
    question: 'Assertion (A): Isobars belong to different chemical elements.\nReason (R): Isobars have the same mass number but different atomic numbers, and atomic number determines chemical identity.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since atomic number determines chemical identity, and isobars differ in atomic number, this directly explains why isobars represent different chemical elements, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-94',
    type: 'assertion-reason',
    question: 'Assertion (A): The energy equivalent of the mass defect in a nuclear reaction can be substantial, even though the mass defect itself may seem numerically tiny.\nReason (R): Einstein\'s mass-energy relation, E = Δm c², involves multiplication by the speed of light squared (c²), an enormous factor that converts even a small mass difference into a large amount of energy.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This multiplication by the enormous value of c² is exactly why even a tiny mass defect corresponds to a substantial amount of released energy, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-95',
    type: 'assertion-reason',
    question: 'Assertion (A): A radioactive sample with a shorter half-life shows higher initial activity than an equal-sized sample with a longer half-life.\nReason (R): Activity is given by A = λN, and a shorter half-life corresponds to a larger decay constant λ, since T1/2 = 0.693/λ.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This inverse relationship between half-life and decay constant, combined with the direct proportionality of activity to decay constant, directly explains why shorter-half-life samples show higher initial activity, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-96',
    type: 'assertion-reason',
    question: 'Assertion (A): Nuclear binding energy per nucleon is a more useful comparative measure of nuclear stability than the total binding energy of a nucleus.\nReason (R): Total binding energy naturally increases with the number of nucleons present, so dividing by the number of nucleons (A) allows for a fairer, size-independent comparison of average nuclear stability.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This size-independence achieved by dividing total binding energy by nucleon number directly explains why binding energy per nucleon is a more meaningful comparative measure of stability, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-97',
    type: 'assertion-reason',
    question: 'Assertion (A): The number of protons in a nucleus can change as a result of gamma decay.\nReason (R): Gamma decay involves only a transition between internal nuclear energy states, with no change to the number of protons or neutrons.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — gamma decay does not change the number of protons in a nucleus. R correctly explains why: gamma decay involves only an internal energy state transition, with the nucleon composition unchanged, directly refuting the false claim made in A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-98',
    type: 'assertion-reason',
    question: 'Assertion (A): The binding energy per nucleon curve increases without limit as mass number increases indefinitely.\nReason (R): The nuclear force exhibits a saturation property, causing binding energy per nucleon to level off and eventually decrease slightly for heavier nuclei, rather than increasing indefinitely.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — binding energy per nucleon does not increase without limit; it peaks around A ≈ 56-62 and then gradually decreases. R correctly explains this behaviour, directly refuting the false claim made in A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-99',
    type: 'assertion-reason',
    question: 'Assertion (A): All radioactive decay processes (alpha, beta, and gamma) always change both the mass number and atomic number of the parent nucleus.\nReason (R): Gamma decay changes only the internal energy state of the nucleus, leaving both its mass number and atomic number unchanged.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — gamma decay is a clear exception, since it changes neither mass number nor atomic number. R correctly describes this exception, directly refuting the overgeneralised claim made in A.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-100',
    type: 'assertion-reason',
    question: 'Assertion (A): The chapter on nuclei connects nuclear structure and stability (mass defect, binding energy, nuclear force) to practical applications of nuclear energy (fission and fusion) and the statistical description of radioactive decay.\nReason (R): Concepts such as the binding energy per nucleon curve, nuclear force properties, and the exponential decay law together provide the theoretical basis for understanding both natural radioactivity and the harnessing of nuclear energy.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'These interconnected theoretical concepts, spanning nuclear structure, decay, and energy release, directly explain the integrated nature of the topics covered throughout this chapter, correctly explaining A.',
    difficulty: 'medium'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'nuclei-101',
    type: 'statement',
    question: 'Statement I: Atomic number (Z) equals the number of protons in a nucleus.\nStatement II: Mass number (A) equals the total number of protons and neutrons in a nucleus.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly define atomic number and mass number.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-102',
    type: 'statement',
    question: 'Statement I: Isotopes have the same atomic number but different mass numbers.\nStatement II: Isobars have the same mass number but different atomic numbers.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly define isotopes and isobars.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-103',
    type: 'statement',
    question: 'Statement I: 1 atomic mass unit is equivalent to approximately 931.5 MeV of energy.\nStatement II: Nuclear radius is given by R = R0 A^(1/3), with R0 approximately 1.2 femtometres.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly state standard nuclear physics conversion factors and formulas.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-104',
    type: 'statement',
    question: 'Statement I: Nuclear density varies greatly from one nucleus to another.\nStatement II: Nuclear volume is directly proportional to mass number.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — nuclear density is approximately constant across nuclei, not highly variable. Statement II correctly describes the proportionality of nuclear volume to mass number.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-105',
    type: 'statement',
    question: 'Statement I: Mass defect is the difference between the mass of free, separated nucleons and the actual mass of the bound nucleus.\nStatement II: Binding energy is calculated from mass defect using BE = Δm × c².',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly define mass defect and its relation to binding energy.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-106',
    type: 'statement',
    question: 'Statement I: The binding energy per nucleon curve reaches its maximum around mass number 56-62.\nStatement II: Binding energy per nucleon continues to increase indefinitely for very heavy nuclei.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — binding energy per nucleon actually decreases (not increases) for very heavy nuclei beyond the peak.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-107',
    type: 'statement',
    question: 'Statement I: Energy is released in fusion because light nuclei move towards higher binding energy per nucleon upon combining.\nStatement II: Energy is released in fission because heavy nuclei move towards higher binding energy per nucleon upon splitting.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly explain the energy release mechanism for fusion and fission, respectively, based on the shape of the binding energy curve.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-108',
    type: 'statement',
    question: 'Statement I: The nuclear force is a long-range force, effective over macroscopic distances.\nStatement II: The nuclear force is stronger than the electromagnetic force at nuclear distances.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the nuclear force is very short-ranged, not long-range. Statement II correctly describes its relative strength compared to electromagnetic force at short distances.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-109',
    type: 'statement',
    question: 'Statement I: The nuclear force is approximately charge independent.\nStatement II: The nuclear force acts only between two protons, never between neutrons.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the nuclear force acts between all nucleon pairs (p-p, n-n, p-n), not exclusively between protons.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-110',
    type: 'statement',
    question: 'Statement I: The saturation property of the nuclear force means each nucleon interacts strongly with all other nucleons in the nucleus.\nStatement II: The saturation property means each nucleon interacts strongly only with its nearby neighbours.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — this describes the opposite of saturation. Statement II correctly describes the actual saturation property of the nuclear force.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-111',
    type: 'statement',
    question: 'Statement I: In alpha decay, mass number decreases by 4 and atomic number decreases by 2.\nStatement II: In beta-minus decay, mass number remains unchanged and atomic number increases by 1.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the changes in mass number and atomic number during alpha and beta-minus decay, respectively.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-112',
    type: 'statement',
    question: 'Statement I: Gamma decay changes the mass number of a nucleus.\nStatement II: Gamma decay involves the emission of a high-energy photon as the nucleus transitions to a lower energy state.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — gamma decay does not change mass number. Statement II correctly describes the mechanism of gamma decay.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-113',
    type: 'statement',
    question: 'Statement I: The law of radioactive decay states that decay rate is proportional to the number of undecayed nuclei present.\nStatement II: This leads to an exponential decrease in the number of undecayed nuclei over time.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the fundamental law of radioactive decay and its mathematical consequence.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-114',
    type: 'statement',
    question: 'Statement I: Half-life is related to decay constant by T1/2 = 0.693/λ.\nStatement II: Mean life is related to decay constant by τ = 1/λ.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly state the standard relationships between half-life, mean life, and decay constant.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-115',
    type: 'statement',
    question: 'Statement I: Half-life is always greater than mean life for a given radioactive substance.\nStatement II: After two half-lives, one-quarter of the original sample remains undecayed.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — half-life is always less than (not greater than) mean life. Statement II correctly describes the fraction remaining after two half-lives.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-116',
    type: 'statement',
    question: 'Statement I: Activity of a radioactive sample is given by A = λN.\nStatement II: The SI unit of activity is the becquerel, corresponding to one decay per second.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the definition and SI unit of radioactive activity.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-117',
    type: 'statement',
    question: 'Statement I: Radioactive decay allows exact prediction of when a specific individual nucleus will decay.\nStatement II: Radioactive decay follows a definite, predictable exponential law for a large sample of nuclei.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — individual nucleus decay times cannot be predicted, since decay is statistical. Statement II correctly describes the predictable overall behaviour of a large sample.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-118',
    type: 'statement',
    question: 'Statement I: Alpha particles have low penetrating power but high ionising power.\nStatement II: Gamma rays have high penetrating power but relatively low ionising power.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the contrasting penetrating and ionising properties of alpha particles and gamma rays.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-119',
    type: 'statement',
    question: 'Statement I: Nuclear fission was discovered by Otto Hahn and Fritz Strassmann.\nStatement II: Nuclear fission involves a heavy nucleus splitting into two lighter fragments, releasing energy.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the discovery and mechanism of nuclear fission.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-120',
    type: 'statement',
    question: 'Statement I: A moderator in a nuclear reactor absorbs excess neutrons to stop the chain reaction.\nStatement II: Control rods in a nuclear reactor slow down fast neutrons to increase the probability of further fission.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — the roles are swapped. A moderator slows down fast neutrons, while control rods absorb excess neutrons to regulate the reaction.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-121',
    type: 'statement',
    question: 'Statement I: Nuclear fusion involves the combination of light nuclei into a heavier nucleus.\nStatement II: Nuclear fusion requires extremely high temperatures to overcome the electrostatic repulsion between nuclei.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the mechanism and conditions required for nuclear fusion.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-122',
    type: 'statement',
    question: 'Statement I: The Sun generates energy primarily through nuclear fission of heavy elements.\nStatement II: The Sun generates energy primarily through nuclear fusion, converting hydrogen into helium.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the Sun does not rely on fission. Statement II correctly identifies nuclear fusion as the Sun\'s primary energy source.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-123',
    type: 'statement',
    question: 'Statement I: Nuclear fusion generally releases more energy per unit mass than nuclear fission.\nStatement II: Controlled nuclear fusion is already a widespread, practical source of commercial electricity generation.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — controlled fusion has not yet become a widespread practical energy source, due to significant ongoing technical challenges.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-124',
    type: 'statement',
    question: 'Statement I: An uncontrolled nuclear fission chain reaction is the basic principle behind an atomic bomb.\nStatement II: A controlled nuclear fission chain reaction is used in nuclear power reactors.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly distinguish between uncontrolled and controlled fission chain reactions and their respective applications.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-125',
    type: 'statement',
    question: 'Statement I: Isotones have the same number of neutrons but different atomic and mass numbers.\nStatement II: Isobars have the same number of neutrons as well as the same mass number.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — isobars share the same mass number, not necessarily the same number of neutrons (since they have different atomic numbers, their neutron numbers typically differ too).',
    difficulty: 'hard'
  },
  {
    id: 'nuclei-126',
    type: 'statement',
    question: 'Statement I: The neutron was discovered by James Chadwick.\nStatement II: The neutron carries a positive electric charge, similar to the proton.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the neutron is electrically neutral, not positively charged.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-127',
    type: 'statement',
    question: 'Statement I: Critical mass refers to the minimum mass of fissile material needed to sustain a chain reaction.\nStatement II: Below the critical mass, too many neutrons escape the material without causing further fission, preventing a sustained chain reaction.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the concept of critical mass and the reason for its significance in sustaining a chain reaction.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-128',
    type: 'statement',
    question: 'Statement I: Energy released in nuclear reactions is calculated using Einstein\'s relation E = Δm c².\nStatement II: A tiny mass defect can correspond to a very large amount of released energy, due to the enormous value of c².',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the calculation of nuclear reaction energy and the significance of the large value of c² in this context.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-129',
    type: 'statement',
    question: 'Statement I: Radioactivity was discovered by Marie Curie.\nStatement II: Radioactivity was discovered by Henri Becquerel.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — while Marie Curie made major contributions to the study of radioactivity, its initial discovery is attributed to Henri Becquerel. Statement II correctly identifies the discoverer.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-130',
    type: 'statement',
    question: 'Statement I: The chapter on nuclei connects nuclear structure, stability, and decay with the practical harnessing of nuclear energy.\nStatement II: Concepts like binding energy per nucleon, nuclear force, and radioactive decay laws have no relevance to understanding nuclear energy applications.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — these concepts are, in fact, directly relevant and foundational to understanding both radioactivity and nuclear energy applications like fission and fusion.',
    difficulty: 'medium'
  },

  // ==================== HOW-MANY (20) ====================
  {
    id: 'nuclei-131',
    type: 'how-many',
    question: 'How many of the following statements about nuclear composition and classification are correct?\n1. Atomic number equals the number of protons.\n2. Mass number equals the total number of protons and neutrons.\n3. Isotopes have the same mass number but different atomic numbers.\n4. Isobars have the same mass number but different atomic numbers.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — this describes isobars, not isotopes (isotopes have the same atomic number, different mass numbers).',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-132',
    type: 'how-many',
    question: 'How many of the following statements about nuclear size and density are correct?\n1. Nuclear radius follows R = R0 A^(1/3).\n2. R0 is approximately 1.2 femtometres.\n3. Nuclear volume is proportional to mass number A.\n4. Nuclear density varies greatly between different nuclei.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — nuclear density is approximately constant across nuclei, not highly variable.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-133',
    type: 'how-many',
    question: 'How many of the following statements about mass defect and binding energy are correct?\n1. Mass defect is the difference between the mass of free nucleons and the bound nucleus mass.\n2. Binding energy equals mass defect multiplied by c².\n3. Binding energy represents the energy needed to separate a nucleus into free nucleons.\n4. A nucleus with a larger mass defect (relative to its nucleon count) is generally less tightly bound.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a larger mass defect (relative to nucleon count) corresponds to greater binding energy, meaning the nucleus is more (not less) tightly bound.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-134',
    type: 'how-many',
    question: 'How many of the following statements about the binding energy per nucleon curve are correct?\n1. It peaks around mass number 56-62.\n2. It increases sharply for very light nuclei.\n3. It decreases gradually for very heavy nuclei beyond the peak.\n4. It explains why both fusion (of light nuclei) and fission (of heavy nuclei) can release energy.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe key features and implications of the binding energy per nucleon curve.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-135',
    type: 'how-many',
    question: 'How many of the following statements about the nuclear force are correct?\n1. It is a very short-range force.\n2. It is stronger than the electromagnetic force at nuclear distances.\n3. It is approximately charge independent.\n4. It shows a saturation property, where each nucleon interacts strongly with every other nucleon regardless of distance.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — saturation means each nucleon interacts strongly only with nearby neighbours, not with every nucleon regardless of distance.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-136',
    type: 'how-many',
    question: 'How many of the following statements about alpha, beta, and gamma decay are correct?\n1. Alpha decay decreases mass number by 4 and atomic number by 2.\n2. Beta-minus decay leaves mass number unchanged but increases atomic number by 1.\n3. Gamma decay changes both mass number and atomic number.\n4. Beta-minus decay involves conversion of a neutron into a proton, with emission of an electron and antineutrino.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — gamma decay changes neither mass number nor atomic number.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-137',
    type: 'how-many',
    question: 'How many of the following statements about the radioactive decay law are correct?\n1. Decay rate is proportional to the number of undecayed nuclei.\n2. N(t) = N0 e^(-λt) describes the number of undecayed nuclei over time.\n3. Half-life is given by T1/2 = 0.693/λ.\n4. Mean life is given by τ = λ (without any reciprocal).',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — mean life is τ = 1/λ, not simply equal to λ.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-138',
    type: 'how-many',
    question: 'How many of the following statements about half-life and mean life are correct?\n1. Half-life is always less than mean life for the same substance.\n2. After one half-life, half of the original sample remains undecayed.\n3. After two half-lives, one-quarter of the original sample remains undecayed.\n4. Half-life and mean life are always numerically identical.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — half-life and mean life are related but not numerically identical (T1/2 = 0.693 × τ).',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-139',
    type: 'how-many',
    question: 'How many of the following statements about activity and units are correct?\n1. Activity is given by A = λN.\n2. The becquerel is the SI unit of activity, equal to one decay per second.\n3. The curie is an older, non-SI unit of activity.\n4. Activity is completely independent of the decay constant.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — activity is directly proportional to (and thus dependent on) the decay constant.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-140',
    type: 'how-many',
    question: 'How many of the following statements about the penetrating and ionising properties of radiation are correct?\n1. Alpha particles have high ionising power but low penetrating power.\n2. Beta particles have intermediate ionising and penetrating power.\n3. Gamma rays have high penetrating power but relatively low ionising power.\n4. Gamma rays are stopped easily by a sheet of paper, similar to alpha particles.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — gamma rays require thick lead or concrete shielding, unlike alpha particles, which are stopped by a simple sheet of paper.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-141',
    type: 'how-many',
    question: 'How many of the following statements about nuclear fission are correct?\n1. It involves a heavy nucleus splitting into two lighter fragments.\n2. It typically releases additional neutrons.\n3. It was discovered by Otto Hahn and Fritz Strassmann.\n4. It always occurs spontaneously, never requiring an incoming neutron to trigger it.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — induced fission (the type used in reactors and weapons) is typically triggered by absorption of an incoming neutron, though some spontaneous fission does occur naturally in certain heavy isotopes.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-142',
    type: 'how-many',
    question: 'How many of the following statements about nuclear reactor components are correct?\n1. Fuel provides the fissile material for the chain reaction.\n2. Moderator slows down fast neutrons to increase fission probability.\n3. Control rods absorb excess neutrons to regulate the reaction rate.\n4. Coolant removes heat generated by the fission reaction.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe the roles of the key components in a nuclear fission reactor.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-143',
    type: 'how-many',
    question: 'How many of the following statements about nuclear fusion are correct?\n1. It involves combining light nuclei to form a heavier nucleus.\n2. It releases energy since the product nucleus has higher binding energy per nucleon.\n3. It requires very high temperatures to overcome electrostatic repulsion.\n4. It is the primary energy source of the Sun and most stars.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe the mechanism, energetics, requirements, and significance of nuclear fusion.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-144',
    type: 'how-many',
    question: 'How many of the following statements comparing fission and fusion are correct?\n1. Fusion generally releases more energy per unit mass than fission.\n2. Fission involves splitting heavy nuclei; fusion involves combining light nuclei.\n3. Both processes move nuclei towards a higher binding energy per nucleon.\n4. Controlled fusion is already a widespread, practical commercial energy source, just like fission-based reactors.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — controlled fusion is not yet a practical, widespread commercial energy source, unlike fission-based nuclear reactors.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-145',
    type: 'how-many',
    question: 'How many of the following historical attributions are correct?\n1. Radioactivity — discovered by Henri Becquerel\n2. Neutron — discovered by James Chadwick\n3. Nuclear fission — discovered by Otto Hahn and Fritz Strassmann\n4. De Broglie hypothesis — first experimentally confirmed by Marie Curie',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correctly attributed. Statement 4 is false — the de Broglie hypothesis was experimentally confirmed by Davisson and Germer, not Marie Curie, and this topic is unrelated to the Nuclei chapter\'s scope in any case.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-146',
    type: 'how-many',
    question: 'How many of the following statements about isotopes, isobars, and isotones are correctly matched?\n1. Isotopes — same Z, different A\n2. Isobars — same A, different Z\n3. Isotones — same N, different Z and A\n4. Isotopes — same N, different Z and A',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correctly matched. Statement 4 is false — this description actually applies to isotones, not isotopes.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-147',
    type: 'how-many',
    question: 'How many of the following statements about the electrical charge of nucleons are correct?\n1. A proton carries a positive electric charge.\n2. A neutron carries no net electric charge.\n3. Both protons and neutrons carry identical negative charges.\n4. A neutron carries the same magnitude of charge as an electron, but positive.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    explanation: 'Statements 1 and 2 are correct. Statements 3 and 4 are false and directly contradict the well-established charge properties of these particles.',
    difficulty: 'easy'
  },
  {
    id: 'nuclei-148',
    type: 'how-many',
    question: 'How many of the following statements about mass-energy equivalence in nuclear reactions are correct?\n1. E = Δm c² relates energy released to the mass difference in a reaction.\n2. A small mass defect can correspond to a large amount of energy, due to the large value of c².\n3. This relation applies to both fission and fusion reactions.\n4. This relation has no relevance to calculating binding energy.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — this same relation is precisely what is used to calculate binding energy from mass defect.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-149',
    type: 'how-many',
    question: 'How many of the following statements about controlled versus uncontrolled fission chain reactions are correct?\n1. A controlled chain reaction is used in nuclear power reactors.\n2. An uncontrolled chain reaction is the basis of an atomic bomb.\n3. Control rods help regulate a controlled chain reaction.\n4. There is no meaningful difference between controlled and uncontrolled chain reactions.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts the clear distinction described in the other statements.',
    difficulty: 'medium'
  },
  {
    id: 'nuclei-150',
    type: 'how-many',
    question: 'How many of the following statements correctly summarise key themes of the nuclei chapter?\n1. Nuclear composition, size, and density are described using mass number, atomic number, and the R = R0 A^(1/3) relation.\n2. Mass defect and binding energy per nucleon explain nuclear stability and the energetics of fission and fusion.\n3. The nuclear force\'s short range, strength, charge independence, and saturation properties explain nuclear binding.\n4. Radioactive decay follows a statistical exponential law, characterised by half-life, mean life, and activity.\n5. Nuclear fusion is already a fully mature, widespread commercial energy technology, just like fission.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, 3, and 4 correctly summarise major themes of the chapter. Statement 5 is false — controlled nuclear fusion remains a developing technology and is not yet a mature, widespread commercial energy source, unlike fission.',
    difficulty: 'medium'
  }
];
