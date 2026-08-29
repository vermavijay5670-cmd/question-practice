export const ATOMS = [
  // ==================== MCQ (70) ====================
  {
    id: 'atoms-1',
    type: 'mcq',
    question: 'J.J. Thomson\'s model of the atom (the "plum pudding" model) proposed that',
    options: [
      'the atom consists of a small, dense, positively charged nucleus with electrons orbiting around it',
      'positive charge is uniformly distributed throughout the atom, like a sphere, with electrons embedded within it like seeds in a pudding',
      'the atom has no internal structure at all, being a fundamental indivisible particle',
      'the atom consists entirely of neutrons with no charge'
    ],
    correctIndex: 1,
    explanation: 'Thomson\'s model envisioned the atom as a uniform sphere of positive charge with negatively charged electrons embedded within it, resembling plums (electrons) distributed in a pudding (positive charge) — hence the name.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-2',
    type: 'mcq',
    question: 'Rutherford\'s alpha-particle scattering experiment involved directing a beam of alpha particles at a',
    options: [
      'thick block of lead',
      'thin gold foil',
      'container of hydrogen gas',
      'sample of radioactive uranium'
    ],
    correctIndex: 1,
    explanation: 'Rutherford\'s classic experiment used a thin gold foil as the target, chosen because gold can be beaten into extremely thin sheets, allowing alpha particles to interact primarily with individual atoms.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-3',
    type: 'mcq',
    question: 'In Rutherford\'s alpha-particle scattering experiment, the observation that most alpha particles passed through the gold foil with little or no deflection suggested that',
    options: [
      'the atom is a solid, densely packed sphere with no empty space',
      'most of the volume of an atom is empty space',
      'gold atoms have no positive charge at all',
      'alpha particles cannot interact with matter'
    ],
    correctIndex: 1,
    explanation: 'Since the vast majority of alpha particles passed through with little deflection, Rutherford concluded that most of the atom\'s volume must be empty space, with mass and charge concentrated elsewhere.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-4',
    type: 'mcq',
    question: 'In Rutherford\'s experiment, the small fraction of alpha particles that were deflected through large angles (some even bouncing almost straight back) indicated that',
    options: [
      'the atom has no dense central region at all',
      'a small, dense, positively charged region (the nucleus) exists at the centre of the atom, capable of strongly repelling the positively charged alpha particles that come very close to it',
      'the alpha particles were somehow altered in charge during the experiment',
      'gold atoms are entirely negatively charged'
    ],
    correctIndex: 1,
    explanation: 'Large-angle deflections (and rare near-180° backscattering) could only be explained by a small, extremely dense, positively charged nucleus that could exert a strong repulsive force on alpha particles passing very close to it.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-5',
    type: 'mcq',
    question: 'Rutherford\'s nuclear model of the atom proposed that',
    options: [
      'the entire positive charge and most of the mass of the atom is concentrated in a tiny central nucleus, with electrons revolving around it at a relatively large distance',
      'positive and negative charges are uniformly mixed throughout the atom',
      'the atom has no nucleus, only electrons distributed in space',
      'the nucleus contains only electrons, with positive charge spread outside it'
    ],
    correctIndex: 0,
    explanation: 'Rutherford\'s nuclear model placed nearly all the atom\'s mass and its entire positive charge in a tiny central nucleus, with the much lighter electrons revolving around it in the surrounding, largely empty space.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-6',
    type: 'mcq',
    question: 'The size of the atomic nucleus, as estimated from scattering experiments, is of the order of',
    options: [
      '10⁻¹⁰ m, comparable to the size of the whole atom',
      '10⁻¹⁵ to 10⁻¹⁴ m, roughly ten thousand times smaller than the size of the whole atom',
      '10⁻² m, a macroscopically visible size',
      'exactly the same size as the atom itself'
    ],
    correctIndex: 1,
    explanation: 'Scattering experiments established the nuclear radius to be of the order of 10⁻¹⁵ to 10⁻¹⁴ m, dramatically smaller than the overall atomic size (~10⁻¹⁰ m), confirming that the atom is mostly empty space.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-7',
    type: 'mcq',
    question: 'A major theoretical problem with Rutherford\'s classical planetary model of the atom (electrons orbiting the nucleus like planets) was that',
    options: [
      'it correctly predicted all observed properties of atoms with no issues',
      'according to classical electromagnetic theory, an accelerating (orbiting) charge should continuously radiate energy, causing the electron to spiral into the nucleus almost instantaneously, making atoms inherently unstable',
      'it predicted atoms would be infinitely large',
      'it could not explain why atoms have a nucleus at all'
    ],
    correctIndex: 1,
    explanation: 'Since an orbiting (and hence accelerating) electron should, according to classical electromagnetism, continuously emit electromagnetic radiation and lose energy, it would be expected to spiral into the nucleus in a fraction of a second — clearly contradicting the observed stability of atoms.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-8',
    type: 'mcq',
    question: 'The instability problem of Rutherford\'s classical model would also imply that the radiation emitted by a spiraling electron should have',
    options: [
      'a single, sharp, unchanging frequency',
      'a continuously changing frequency as the electron spirals inward, resulting in a continuous emission spectrum, rather than the discrete line spectra actually observed in atoms',
      'no relationship to the electron\'s motion at all',
      'exactly the same frequency as visible light only'
    ],
    correctIndex: 1,
    explanation: 'As the electron classically spirals inward, its orbital frequency (and hence the frequency of emitted radiation) would continuously change, predicting a continuous spectrum — but atoms are observed to emit sharp, discrete spectral lines, contradicting this classical prediction.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-9',
    type: 'mcq',
    question: 'Line emission spectra (discrete bright lines at specific wavelengths) are observed when a gas at low pressure is excited by an electric discharge. This is characteristic of',
    options: [
      'a continuous distribution of all possible wavelengths',
      'atoms/molecules in the gas emitting light only at certain specific, discrete wavelengths, unique to the element involved',
      'complete absence of any light emission',
      'a spectrum identical for every different gas, with no distinguishing features'
    ],
    correctIndex: 1,
    explanation: 'Excited atoms emit light only at specific, discrete wavelengths (a line spectrum), and this pattern of wavelengths is unique to each element, serving as a kind of atomic "fingerprint."',
    difficulty: 'medium'
  },
  {
    id: 'atoms-10',
    type: 'mcq',
    question: 'The Balmer series refers to a specific set of spectral lines observed in the emission spectrum of',
    options: [
      'helium',
      'hydrogen, corresponding to transitions where the electron falls to the second energy level (n = 2)',
      'sodium',
      'all elements equally, with identical wavelengths'
    ],
    correctIndex: 1,
    explanation: 'The Balmer series is a specific set of spectral lines in the hydrogen spectrum, corresponding to electron transitions from higher energy levels down to the n = 2 level, and it was historically important in guiding early atomic theory.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-11',
    type: 'mcq',
    question: 'The empirical Balmer formula, which successfully predicted the wavelengths of the hydrogen spectral lines, was initially derived',
    options: [
      'directly from a complete theoretical model of atomic structure',
      'empirically, by fitting a mathematical formula to the experimentally observed wavelengths, without an underlying theoretical explanation at the time',
      'from Rutherford\'s nuclear model directly',
      'from measurements of the size of the atomic nucleus'
    ],
    correctIndex: 1,
    explanation: 'The Balmer formula was originally an empirical relation, discovered by fitting observed spectral line wavelengths to a mathematical pattern, without an underlying theoretical (atomic model) justification at the time of its discovery — that came later with Bohr\'s model.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-12',
    type: 'mcq',
    question: 'Niels Bohr\'s model of the hydrogen atom successfully addressed the instability problem of Rutherford\'s model by postulating that',
    options: [
      'electrons do not exist inside atoms at all',
      'electrons revolve around the nucleus only in certain specific, stable orbits, in which they do not radiate energy, despite classical electromagnetic theory predicting they should',
      'the nucleus itself moves around the electrons',
      'electrons are stationary and never move at all'
    ],
    correctIndex: 1,
    explanation: 'Bohr postulated that electrons can occupy only certain specific, stable orbits (stationary states) without radiating energy while in these orbits, directly resolving the fundamental instability problem of the classical model, even though this contradicted classical electromagnetic theory.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-13',
    type: 'mcq',
    question: 'Bohr\'s quantization postulate states that the angular momentum of an electron in a stationary orbit is an integral multiple of',
    options: ['h (Planck\'s constant)', 'h/2π (denoted ħ)', 'h²', '2πh'],
    correctIndex: 1,
    explanation: 'Bohr\'s quantization condition states that the orbital angular momentum L = nh/2π = nħ, where n is a positive integer (the principal quantum number), restricting electrons to only certain discrete orbits.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-14',
    type: 'mcq',
    question: 'According to Bohr\'s model, an atom emits radiation (a photon) when',
    options: [
      'an electron remains in the same stationary orbit indefinitely',
      'an electron transitions (jumps) from a higher-energy stationary orbit to a lower-energy stationary orbit, emitting a photon whose energy equals the difference between the two orbit energies',
      'the nucleus itself changes its charge',
      'an electron transitions from a lower-energy orbit to a higher-energy orbit'
    ],
    correctIndex: 1,
    explanation: 'In Bohr\'s model, radiation is emitted specifically when an electron makes a downward transition from a higher-energy orbit to a lower-energy orbit, releasing a photon carrying the energy difference between the two orbits.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-15',
    type: 'mcq',
    question: 'The energy of the photon emitted (or absorbed) during an electron transition between two stationary orbits, according to Bohr\'s model, is given by',
    options: [
      'hf = Ei + Ef (the sum of the two orbit energies)',
      'hf = |Ei - Ef|, the magnitude of the difference between the initial and final orbit energies',
      'hf = Ei × Ef',
      'hf is completely unrelated to the orbit energies'
    ],
    correctIndex: 1,
    explanation: 'The photon energy equals the difference between the energies of the initial and final stationary states, hf = |Ei - Ef|, directly explaining the origin of discrete spectral lines.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-16',
    type: 'mcq',
    question: 'Bohr\'s model successfully explained the discrete (line) spectrum of hydrogen because',
    options: [
      'it allowed electrons to have any arbitrary energy, producing a continuous spectrum',
      'it restricted electrons to specific, quantized energy levels, so that only transitions between these specific levels are possible, resulting in photons of only certain specific energies (and hence specific, discrete wavelengths)',
      'it eliminated the need for electrons to have any energy at all',
      'it was based purely on classical, non-quantized physics'
    ],
    correctIndex: 1,
    explanation: 'By restricting electrons to a discrete set of allowed energy levels, Bohr\'s model naturally predicts that only photons of specific energies (corresponding to transitions between these levels) can be emitted or absorbed, directly explaining the observed discrete spectral lines.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-17',
    type: 'mcq',
    question: 'The radius of the nth Bohr orbit for the hydrogen atom is proportional to',
    options: ['n', 'n²', '1/n', '1/n²'],
    correctIndex: 1,
    explanation: 'The radius of the nth Bohr orbit is given by rn ∝ n², meaning higher energy levels correspond to progressively larger (and more widely spaced) orbits.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-18',
    type: 'mcq',
    question: 'The energy of the electron in the nth Bohr orbit of the hydrogen atom is proportional to',
    options: ['n', 'n²', '-1/n²', '1/n'],
    correctIndex: 2,
    explanation: 'The energy of the nth orbit is given by En ∝ -1/n², meaning the energy is negative (bound state) and its magnitude decreases (becomes less negative, approaching zero) as n increases.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-19',
    type: 'mcq',
    question: 'The negative sign in the expression for the energy of an electron in a Bohr orbit (En ∝ -1/n²) indicates that',
    options: [
      'the electron has negative mass',
      'the electron is bound to the nucleus, meaning energy must be supplied to remove it completely from the atom (to n = ∞, where energy is defined as zero)',
      'the formula is simply incorrect',
      'the nucleus itself has negative charge'
    ],
    correctIndex: 1,
    explanation: 'The negative energy reflects the fact that the electron is in a bound state; energy (equal in magnitude to the binding energy) must be supplied to completely free the electron from the atom, corresponding to raising it to zero energy at n = ∞ (ionization).',
    difficulty: 'medium'
  },
  {
    id: 'atoms-20',
    type: 'mcq',
    question: 'The ground state of the hydrogen atom corresponds to the electron being in the orbit with',
    options: [
      'n = ∞, the highest possible energy level',
      'n = 1, the lowest possible energy level (most negative energy, most tightly bound)',
      'n = 0',
      'any arbitrary value of n, since ground state is not well-defined'
    ],
    correctIndex: 1,
    explanation: 'The ground state is the lowest energy state (n = 1), where the electron is most tightly bound to the nucleus (has the most negative total energy).',
    difficulty: 'easy'
  },
  {
    id: 'atoms-21',
    type: 'mcq',
    question: 'The ground state energy of the hydrogen atom (n = 1) is approximately',
    options: ['0 eV', '+13.6 eV', '-13.6 eV', '-3.4 eV'],
    correctIndex: 2,
    explanation: 'The ground state energy of hydrogen is -13.6 eV, a standard and frequently referenced value in atomic physics.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-22',
    type: 'mcq',
    question: 'The ionization energy of the hydrogen atom (the energy required to remove the electron completely from the ground state) is',
    options: [
      '0 eV',
      '13.6 eV, equal in magnitude to the ground state energy',
      '-13.6 eV',
      '3.4 eV'
    ],
    correctIndex: 1,
    explanation: 'Since ionization corresponds to raising the electron from the ground state (-13.6 eV) to zero energy (n = ∞, free electron), the ionization energy required equals +13.6 eV.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-23',
    type: 'mcq',
    question: 'As the principal quantum number n increases (electron in higher energy orbits), the energy levels of the hydrogen atom become',
    options: [
      'more widely spaced from each other',
      'more closely spaced together, converging toward zero energy as n approaches infinity',
      'exactly equally spaced regardless of n',
      'undefined for n greater than 1'
    ],
    correctIndex: 1,
    explanation: 'Since En ∝ -1/n², the spacing between successive energy levels decreases as n increases, with the levels converging toward zero (the ionization limit) as n → ∞.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-24',
    type: 'mcq',
    question: 'The Lyman series of spectral lines in the hydrogen spectrum corresponds to electron transitions ending at',
    options: ['n = 1 (ground state)', 'n = 2', 'n = 3', 'n = ∞'],
    correctIndex: 0,
    explanation: 'The Lyman series consists of transitions from higher energy levels (n = 2, 3, 4, ...) down to the ground state (n = 1), and these lines fall in the ultraviolet region of the spectrum.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-25',
    type: 'mcq',
    question: 'The Balmer series of spectral lines in the hydrogen spectrum corresponds to electron transitions ending at',
    options: ['n = 1', 'n = 2', 'n = 3', 'n = 4'],
    correctIndex: 1,
    explanation: 'The Balmer series consists of transitions from higher energy levels down to n = 2, and this series notably includes lines in the visible region of the spectrum.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-26',
    type: 'mcq',
    question: 'The Paschen series of spectral lines in the hydrogen spectrum corresponds to electron transitions ending at',
    options: ['n = 1', 'n = 2', 'n = 3', 'n = 5'],
    correctIndex: 2,
    explanation: 'The Paschen series consists of transitions from higher energy levels down to n = 3, and these lines fall in the infrared region of the spectrum.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-27',
    type: 'mcq',
    question: 'Among the Lyman, Balmer, and Paschen series of the hydrogen spectrum, the series that falls (at least partly) within the visible region of the electromagnetic spectrum is the',
    options: ['Lyman series (ultraviolet)', 'Balmer series', 'Paschen series (infrared)', 'None of these series fall in the visible region'],
    correctIndex: 1,
    explanation: 'The Balmer series is notable for including several prominent spectral lines that fall within the visible region of the electromagnetic spectrum, which is why it was historically the first series to be discovered and studied.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-28',
    type: 'mcq',
    question: 'The de Broglie hypothesis, which proposed that matter particles (like electrons) have an associated wavelength, provided a theoretical justification for',
    options: [
      'the existence of the nucleus',
      'Bohr\'s quantization condition for angular momentum, by showing that the allowed orbits correspond to those in which a whole number of electron de Broglie wavelengths fit exactly around the orbit\'s circumference',
      'the size of the atom being exactly zero',
      'the non-existence of electrons in atoms'
    ],
    correctIndex: 1,
    explanation: 'De Broglie showed that Bohr\'s otherwise ad-hoc quantization postulate (L = nh/2π) can be understood as the condition that a standing wave pattern forms around the orbit — specifically, that the orbit\'s circumference must accommodate a whole number of the electron\'s de Broglie wavelengths.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-29',
    type: 'mcq',
    question: 'According to de Broglie\'s interpretation, the allowed (quantized) Bohr orbits are those for which',
    options: [
      'the orbit circumference is an integral multiple of the electron\'s de Broglie wavelength (2πr = nλ)',
      'the orbit circumference is completely unrelated to the electron\'s wavelength',
      'the orbit radius equals the electron\'s de Broglie wavelength exactly',
      'no electron wave can exist in any orbit'
    ],
    correctIndex: 0,
    explanation: 'De Broglie\'s condition 2πr = nλ (circumference equals an integral number of wavelengths) ensures the electron wave forms a stable standing wave pattern around the orbit, providing a physical/wave-based rationale for Bohr\'s originally postulated quantization rule.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-30',
    type: 'mcq',
    question: 'Despite its successes in explaining the hydrogen spectrum, Bohr\'s model has notable limitations, including that it',
    options: [
      'perfectly explains the spectra of all atoms, including complex multi-electron atoms, with no issues',
      'could not satisfactorily explain the detailed spectra of multi-electron atoms and did not account for the relative intensities of spectral lines',
      'has no limitations whatsoever and was never superseded by any later theory',
      'was immediately proven completely incorrect and discarded entirely'
    ],
    correctIndex: 1,
    explanation: 'Bohr\'s model, while successful for hydrogen (and hydrogen-like single-electron ions), could not accurately predict the more complex spectra of multi-electron atoms and did not explain the relative intensities of different spectral lines, among other limitations, which were later addressed by full quantum mechanics.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-31',
    type: 'mcq',
    question: 'Bohr\'s model of the atom is often described as a "semi-classical" model because it',
    options: [
      'is based entirely on classical (Newtonian) mechanics with no quantum concepts at all',
      'combines classical mechanics (like the electron moving in a circular orbit under Coulomb attraction, providing centripetal force) with an additional, non-classical quantization postulate imposed on top',
      'has no relationship to either classical or quantum physics',
      'is based purely on modern quantum mechanics, with no classical elements whatsoever'
    ],
    correctIndex: 1,
    explanation: 'Bohr\'s model uses classical mechanics to describe the electron\'s circular motion (Coulomb force providing centripetal force) but overlays this with an ad-hoc, non-classical quantization rule for angular momentum, making it a hybrid ("semi-classical") theory.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-32',
    type: 'mcq',
    question: 'The concept of "excitation energy" of an atom refers to the energy required to',
    options: [
      'completely remove an electron from the atom (ionize it)',
      'raise an electron from its ground state to some higher (excited) energy level, without removing it from the atom entirely',
      'add an extra electron to the atom, forming a negative ion',
      'destroy the nucleus of the atom'
    ],
    correctIndex: 1,
    explanation: 'Excitation energy is the energy needed to move an electron from the ground state to a higher (but still bound) energy level within the same atom, as distinct from ionization energy, which removes the electron entirely.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-33',
    type: 'mcq',
    question: 'When an atom absorbs a photon with energy exactly matching the difference between its ground state and a particular excited state, the atom',
    options: [
      'cannot absorb the photon at all',
      'absorbs the photon and its electron transitions from the ground state to that specific excited state',
      'immediately ionizes completely',
      'emits an identical photon simultaneously with no change in its own state'
    ],
    correctIndex: 1,
    explanation: 'An atom can absorb a photon only if its energy precisely matches the energy gap between two of its allowed energy levels; if it matches the ground-to-excited-state gap, the atom absorbs the photon and its electron transitions to that excited state.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-34',
    type: 'mcq',
    question: 'An atom in an excited state is generally',
    options: [
      'stable indefinitely, remaining in that state forever',
      'unstable and will typically return (de-excite) to a lower energy state (eventually the ground state) within a very short time, emitting a photon in the process',
      'unable to ever lose the absorbed energy',
      'converted into a completely different element'
    ],
    correctIndex: 1,
    explanation: 'Excited states are generally short-lived; the atom typically de-excites back toward the ground state (possibly through intermediate levels) within a very short time (often nanoseconds), emitting photons corresponding to each downward transition.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-35',
    type: 'mcq',
    question: 'The absorption spectrum of an element, showing dark lines against a continuous background, arises when',
    options: [
      'the element emits light at all possible wavelengths with no absorption occurring',
      'atoms of a cool gas absorb specific wavelengths from a continuous spectrum of light passing through it, corresponding to the energy differences between their allowed energy levels, leaving dark lines at those wavelengths',
      'the element is completely transparent at all wavelengths, showing no spectral features at all',
      'no relationship exists between absorption and emission spectra'
    ],
    correctIndex: 1,
    explanation: 'An absorption spectrum shows dark lines at wavelengths corresponding to the specific energy transitions absorbed by atoms in a cooler gas, superimposed on an otherwise continuous background spectrum from a hotter source behind it.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-36',
    type: 'mcq',
    question: 'The wavelengths of the absorption lines of an element are generally',
    options: [
      'completely unrelated to the wavelengths of its emission lines',
      'the same as (a subset of) the wavelengths of its emission lines, since both correspond to the same set of allowed energy level transitions',
      'always longer than any emission line wavelengths',
      'always shorter than any emission line wavelengths'
    ],
    correctIndex: 1,
    explanation: 'Since both absorption and emission correspond to the same underlying set of allowed energy transitions within the atom, the absorption line wavelengths coincide with a subset of the emission line wavelengths (typically those originating from the ground state, for a gas at moderate temperature).',
    difficulty: 'medium'
  },
  {
    id: 'atoms-37',
    type: 'mcq',
    question: 'The study of absorption/emission spectra of the Sun and stars (astronomical spectroscopy) allows scientists to determine',
    options: [
      'nothing useful about the composition of stars',
      'the chemical composition of stars and other astronomical objects, since each element leaves its characteristic spectral "fingerprint"',
      'only the distance to a star, with no information about its composition',
      'only the temperature of a star, with no information about the elements present'
    ],
    correctIndex: 1,
    explanation: 'Since each element produces a unique pattern of spectral lines, analysis of the absorption/emission spectra from stars allows astronomers to determine which elements are present in stellar atmospheres, a foundational technique in astrophysics.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-38',
    type: 'mcq',
    question: 'The element helium was first discovered through',
    options: [
      'direct chemical analysis of rocks on Earth',
      'spectroscopic analysis of sunlight, where an unexplained spectral line (later attributed to a previously unknown element, helium) was observed before it was found on Earth',
      'radioactive decay experiments',
      'analysis of meteorite samples that fell to Earth'
    ],
    correctIndex: 1,
    explanation: 'Helium is famous for having been discovered spectroscopically in the Sun\'s spectrum (hence its name, from the Greek "helios" for Sun) before it was subsequently identified and isolated on Earth, illustrating the power of spectroscopic analysis.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-39',
    type: 'mcq',
    question: 'Rutherford\'s scattering experiment allowed an estimate of the size of the nucleus by analyzing',
    options: [
      'the color of the scattered alpha particles',
      'the distance of closest approach of alpha particles to the nucleus, determined from the alpha particle\'s kinetic energy and the electrostatic repulsion it experiences as it approaches the nucleus',
      'the temperature of the gold foil',
      'the total mass of the gold foil used'
    ],
    correctIndex: 1,
    explanation: 'By calculating the distance of closest approach for alpha particles undergoing significant deflection (based on their kinetic energy converting to electrostatic potential energy as they approach the nucleus), Rutherford could estimate an upper bound on the size of the nucleus.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-40',
    type: 'mcq',
    question: 'Alpha particles used in Rutherford\'s scattering experiment are essentially',
    options: [
      'electrons',
      'helium nuclei (two protons and two neutrons, with a net positive charge)',
      'neutrons, with no charge',
      'photons of light'
    ],
    correctIndex: 1,
    explanation: 'Alpha particles are helium nuclei, consisting of two protons and two neutrons, carrying a net positive charge of +2e, which is essential to the electrostatic repulsion mechanism used to probe the nucleus in Rutherford\'s experiment.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-41',
    type: 'mcq',
    question: 'The scattering of alpha particles in Rutherford\'s experiment is primarily due to',
    options: [
      'gravitational attraction between the alpha particles and the gold nuclei',
      'the electrostatic (Coulomb) repulsive force between the positively charged alpha particles and the positively charged gold nuclei',
      'magnetic forces between the alpha particles and the gold foil',
      'nuclear (strong) forces acting over very large distances'
    ],
    correctIndex: 1,
    explanation: 'Since both the alpha particle and the gold nucleus are positively charged, the dominant interaction causing scattering is the electrostatic (Coulomb) repulsion between them, which is the basis for Rutherford\'s scattering formula.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-42',
    type: 'mcq',
    question: 'The number of alpha particles scattered at a given angle, as predicted by Rutherford\'s scattering formula, generally',
    options: [
      'is the same for all scattering angles, with no angular dependence',
      'decreases as the scattering angle increases, with very few particles scattered at large angles',
      'increases indefinitely as the scattering angle increases, with most particles scattered at 180°',
      'has no dependence on the scattering angle or any other experimental parameter'
    ],
    correctIndex: 1,
    explanation: 'Rutherford\'s scattering formula predicts (and experiments confirmed) that the number of scattered particles decreases sharply with increasing scattering angle, consistent with the idea that large-angle scattering (requiring a very close approach to the small nucleus) is a comparatively rare event.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-43',
    type: 'mcq',
    question: 'A key assumption underlying Rutherford\'s trajectory calculations for alpha particle scattering is that',
    options: [
      'the gold nucleus moves significantly during the scattering event, since it has comparable mass to the alpha particle',
      'the gold nucleus, being much more massive than the alpha particle, remains essentially stationary during the scattering event',
      'the alpha particle passes directly through the gold nucleus without any interaction',
      'there is no electrostatic force involved at all'
    ],
    correctIndex: 1,
    explanation: 'Since the gold nucleus is far more massive than the alpha particle, it is reasonably approximated as remaining essentially stationary (recoil-free) during the brief scattering interaction, simplifying the trajectory calculations.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-44',
    type: 'mcq',
    question: 'The trajectory (path) followed by a scattered alpha particle in Rutherford\'s classical analysis, under the influence of the repulsive Coulomb force from the nucleus, is a',
    options: [
      'straight line, unaffected by the nucleus',
      'hyperbola, with the nucleus at one focus',
      'perfect circle around the nucleus',
      'parabola, similar to projectile motion under gravity'
    ],
    correctIndex: 1,
    explanation: 'For a repulsive inverse-square force (like the Coulomb repulsion here), the classical trajectory of the scattered particle is a hyperbola, with the source of the force (the nucleus) located at one focus of the hyperbola.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-45',
    type: 'mcq',
    question: 'The "impact parameter" in the context of alpha particle scattering refers to',
    options: [
      'the total energy of the incoming alpha particle',
      'the perpendicular distance between the initial (undeflected) trajectory of the alpha particle and the nucleus, if the particle were to continue in a straight line',
      'the mass of the alpha particle',
      'the exact scattering angle observed'
    ],
    correctIndex: 1,
    explanation: 'The impact parameter is defined as the perpendicular distance from the nucleus to the line along which the alpha particle would have travelled if there were no force deflecting it; smaller impact parameters generally correspond to larger scattering angles.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-46',
    type: 'mcq',
    question: 'A smaller impact parameter in alpha particle scattering generally results in',
    options: [
      'a smaller scattering angle (less deflection)',
      'a larger scattering angle (more deflection), since the alpha particle passes closer to the nucleus and experiences a stronger repulsive force',
      'no scattering at all',
      'the alpha particle being completely absorbed by the nucleus'
    ],
    correctIndex: 1,
    explanation: 'A smaller impact parameter means the alpha particle passes closer to the nucleus, experiencing a stronger Coulomb repulsion and hence undergoing a larger deflection (scattering angle).',
    difficulty: 'medium'
  },
  {
    id: 'atoms-47',
    type: 'mcq',
    question: 'The specific alpha particles that undergo very large-angle scattering (close to 180°) in Rutherford\'s experiment are those that',
    options: [
      'have a very large impact parameter, passing far from the nucleus',
      'have a very small impact parameter, approaching the nucleus almost head-on',
      'never actually interact with any nucleus at all',
      'travel through multiple gold atoms simultaneously with no cumulative effect'
    ],
    correctIndex: 1,
    explanation: 'Very large-angle (near head-on) scattering occurs for the rare alpha particles with a very small impact parameter, approaching the tiny nucleus almost directly and experiencing the strongest possible repulsive interaction.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-48',
    type: 'mcq',
    question: 'The overall electrical neutrality of an atom (in its normal, non-ionized state) is maintained because',
    options: [
      'the atom has no charged particles at all',
      'the total positive charge of the nucleus (from protons) exactly balances the total negative charge of the surrounding electrons',
      'the nucleus has no charge, only the electrons carry charge',
      'atoms are never actually electrically neutral'
    ],
    correctIndex: 1,
    explanation: 'A neutral atom has an equal number of protons (positive charge in the nucleus) and electrons (negative charge surrounding it), so the total positive and negative charges exactly cancel, resulting in overall electrical neutrality.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-49',
    type: 'mcq',
    question: 'In terms of the historical development of atomic models, the correct chronological order is',
    options: [
      'Rutherford\'s nuclear model → Thomson\'s plum pudding model → Bohr\'s quantized model',
      'Thomson\'s plum pudding model → Rutherford\'s nuclear model → Bohr\'s quantized model',
      'Bohr\'s quantized model → Thomson\'s plum pudding model → Rutherford\'s nuclear model',
      'All three models were proposed simultaneously, with no clear chronological order'
    ],
    correctIndex: 1,
    explanation: 'The historical progression was: Thomson\'s plum pudding model came first, then Rutherford\'s scattering experiment led to his nuclear model, and finally Bohr introduced quantization to resolve the stability problem inherent in Rutherford\'s classical model.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-50',
    type: 'mcq',
    question: 'The transition of the atomic model from Thomson\'s to Rutherford\'s represented a shift from',
    options: [
      'a nucleus-centred model to a uniformly-distributed-charge model',
      'a uniformly-distributed-charge model to a nucleus-centred model, based on new experimental evidence from alpha scattering',
      'no meaningful change at all between the two models',
      'a model with no electrons to one with electrons'
    ],
    correctIndex: 1,
    explanation: 'Thomson\'s model had positive charge spread throughout the atom, while Rutherford\'s scattering results necessitated a shift to a model with charge (and mass) concentrated in a small central nucleus — a significant conceptual shift driven directly by new experimental evidence.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-51',
    type: 'mcq',
    question: 'The concept of "quantization" as introduced by Bohr, applied to atomic angular momentum, represented a significant departure from classical physics because classical mechanics would allow',
    options: [
      'only discrete, specific values of angular momentum, just like Bohr\'s postulate',
      'any continuous value of angular momentum, with no restriction to specific discrete values',
      'no angular momentum at all for any system',
      'exactly zero angular momentum only'
    ],
    correctIndex: 1,
    explanation: 'Classical mechanics places no restriction on the possible values of angular momentum (it can vary continuously), so Bohr\'s postulate — restricting angular momentum to specific discrete (quantized) values — was a genuinely novel, non-classical idea.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-52',
    type: 'mcq',
    question: 'The Bohr model applies most directly and accurately to',
    options: [
      'any arbitrarily complex, multi-electron atom',
      'hydrogen and hydrogen-like ions (single-electron systems, such as He⁺ or Li²⁺), where there is only one electron interacting with the nucleus',
      'only molecules, never individual atoms',
      'atoms with no nucleus at all'
    ],
    correctIndex: 1,
    explanation: 'The Bohr model, in its original and simplest form, is most successfully and accurately applied to hydrogen and other single-electron (hydrogen-like) systems, where the analysis of a single electron orbiting a nucleus is mathematically tractable.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-53',
    type: 'mcq',
    question: 'For hydrogen-like ions (single electron, nuclear charge +Ze), the energy levels are modified from the hydrogen formula by a factor involving',
    options: [
      'Z (the atomic number), appearing as En ∝ -Z²/n²',
      'no modification at all; the energy levels are identical to hydrogen regardless of Z',
      'Z appearing only in the denominator as -1/(Zn²)',
      'the mass of the electron changing significantly with Z'
    ],
    correctIndex: 0,
    explanation: 'For a hydrogen-like ion with nuclear charge +Ze, the Bohr energy formula generalizes to En ∝ -Z²/n², showing that a higher nuclear charge results in more tightly bound (more negative) energy levels.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-54',
    type: 'mcq',
    question: 'The concept of "stationary states" in Bohr\'s model refers to orbits in which',
    options: [
      'the electron is completely motionless, with zero velocity',
      'the electron moves in a stable, defined orbit without radiating energy, despite continuously accelerating (undergoing circular motion)',
      'the nucleus itself is stationary, unrelated to the electron\'s motion',
      'the entire atom does not move through space at all'
    ],
    correctIndex: 1,
    explanation: '"Stationary" in this context refers to the stability of the orbit (constant energy, no radiation), not to the electron being physically motionless — the electron continues its circular motion but does not lose energy while in one of these special orbits.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-55',
    type: 'mcq',
    question: 'In Bohr\'s model, the centripetal force required to keep the electron in its circular orbit around the nucleus is provided by',
    options: [
      'gravitational attraction between the electron and the nucleus',
      'the electrostatic (Coulomb) attraction between the negatively charged electron and the positively charged nucleus',
      'magnetic forces exclusively',
      'nuclear (strong) forces acting on the electron directly'
    ],
    correctIndex: 1,
    explanation: 'The electrostatic Coulomb attraction between the oppositely charged electron and nucleus provides the necessary centripetal force to maintain the electron\'s circular orbital motion in Bohr\'s model.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-56',
    type: 'mcq',
    question: 'The concept of "spectral series" (Lyman, Balmer, Paschen, etc.) in hydrogen reflects the fact that',
    options: [
      'hydrogen has no organized pattern to its spectral lines',
      'transitions ending at the same lower energy level, but starting from different higher energy levels, naturally group together into a "series" with related wavelengths, following a systematic pattern',
      'each spectral series corresponds to a completely different element, not hydrogen',
      'spectral series only apply to absorption spectra, never emission spectra'
    ],
    correctIndex: 1,
    explanation: 'A spectral series groups together all the transitions that share the same final (lower) energy level, and since these transitions come from a range of different starting (higher) levels, they naturally form a systematic, related set of spectral lines.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-57',
    type: 'mcq',
    question: 'The wavelength of the spectral line corresponding to the transition from n = 3 to n = 2 in hydrogen falls within the',
    options: [
      'ultraviolet region (part of the Lyman series)',
      'visible region (part of the Balmer series)',
      'infrared region (part of the Paschen series)',
      'gamma ray region'
    ],
    correctIndex: 1,
    explanation: 'Since this transition ends at n = 2, it belongs to the Balmer series, and this particular line (n = 3 to n = 2) is a well-known visible-light line (the "H-alpha" line) in the hydrogen spectrum.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-58',
    type: 'mcq',
    question: 'As the principal quantum number of the initial state increases (for transitions ending at the same final level, e.g., all transitions in the Lyman series), the energy of the emitted photon',
    options: [
      'increases progressively, approaching a limiting (series limit) value as the initial level tends to n = ∞',
      'decreases without bound, eventually becoming negative',
      'remains exactly the same for every transition',
      'drops abruptly to zero once the initial level exceeds n = 2'
    ],
    correctIndex: 0,
    explanation: 'As the initial n increases toward infinity (for transitions ending at the same fixed lower level), the photon energy increases progressively, approaching a maximum limiting value — the series limit — corresponding to a transition effectively starting from n = ∞.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-59',
    type: 'mcq',
    question: 'The "series limit" of a spectral series (like the Lyman series) corresponds to the transition where the initial energy level approaches',
    options: [
      'n = 1',
      'n = ∞ (ionization limit), representing the shortest wavelength (highest energy) line in that series',
      'n = 2 exclusively',
      'a negative value of n'
    ],
    correctIndex: 1,
    explanation: 'The series limit corresponds to a transition from n = ∞ (effectively, from just above the ionization threshold) down to the series\' fixed lower level, representing the highest-energy (shortest-wavelength) line that series can have.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-60',
    type: 'mcq',
    question: 'When an electron in a hydrogen atom absorbs a photon and jumps from n = 1 to n = 3, this transition belongs to (i.e., the reverse process of emission would belong to) the',
    options: ['Balmer series', 'Lyman series', 'Paschen series', 'None of the standard named series'],
    correctIndex: 1,
    explanation: 'Any transition between n = 1 and any higher level (whether absorption from 1 to 3, or emission from 3 to 1) belongs to the Lyman series, since the series is defined by the lower level (n = 1) involved.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-61',
    type: 'mcq',
    question: 'The fact that Bohr\'s theoretical formula for hydrogen spectral line wavelengths matched the previously known empirical Balmer/Rydberg formula was considered',
    options: [
      'a coincidence with no real significance',
      'a major triumph and strong validation of Bohr\'s quantized atomic model, since a genuinely new theoretical framework reproduced an already-established experimental pattern',
      'evidence that Bohr\'s model was actually incorrect',
      'unrelated to the validity of Bohr\'s postulates'
    ],
    correctIndex: 1,
    explanation: 'The successful theoretical derivation of the previously empirical Balmer formula was a landmark achievement for Bohr\'s model, providing strong validation for his quantization postulates by connecting them to already well-established experimental spectroscopic data.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-62',
    type: 'mcq',
    question: 'The concept of a "quantum number" (like the principal quantum number n in Bohr\'s model) refers to',
    options: [
      'a completely arbitrary, unrestricted continuous variable',
      'an integer (or, in more advanced treatments, sometimes other restricted values) that labels and distinguishes the discrete, allowed states of a quantized system',
      'the total mass of the atom',
      'the charge of the nucleus exclusively'
    ],
    correctIndex: 1,
    explanation: 'A quantum number is an integer (or similarly restricted parameter) that identifies and distinguishes between the specific discrete states allowed by a quantized system, such as the different allowed orbits (n = 1, 2, 3, ...) in Bohr\'s model.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-63',
    type: 'mcq',
    question: 'The Rutherford model, while successfully explaining the existence of a small dense nucleus, was ultimately considered incomplete because it',
    options: [
      'correctly predicted the discrete, stable spectral lines observed in atoms with no issues',
      'could not explain the stability of atoms or the discrete nature of atomic spectra, both of which required the additional quantization ideas introduced later by Bohr',
      'incorrectly predicted that atoms have no nucleus at all',
      'was found to have no experimental support whatsoever'
    ],
    correctIndex: 1,
    explanation: 'While Rutherford\'s model correctly established the existence of a small, dense, positively charged nucleus, it lacked any mechanism to explain why atoms are stable (rather than electrons spiraling in) or why they emit only discrete spectral lines — gaps that Bohr\'s quantization postulate specifically addressed.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-64',
    type: 'mcq',
    question: 'The overall historical narrative of atomic models (Thomson → Rutherford → Bohr) illustrates the general scientific principle that',
    options: [
      'once a model is proposed, it is never revised or replaced, regardless of new evidence',
      'scientific models evolve and are revised as new experimental evidence emerges, with each successive model building upon (and correcting limitations of) the previous one',
      'atomic models were developed without any reference to experimental data at any stage',
      'later models are always identical in every respect to earlier ones'
    ],
    correctIndex: 1,
    explanation: 'This historical progression exemplifies how scientific understanding advances iteratively: new experimental evidence (like Rutherford\'s scattering results) drives revisions to existing models, and successive theories build on and refine earlier ones to better match observations.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-65',
    type: 'mcq',
    question: 'The concept of the electron "jumping" instantaneously between discrete orbits in Bohr\'s model, without passing through any intermediate states, is referred to as a',
    options: [
      'continuous transition',
      'quantum jump (or quantum leap)',
      'classical orbital decay',
      'nuclear transition'
    ],
    correctIndex: 1,
    explanation: 'The instantaneous transition of an electron between two discrete, quantized energy levels (with no continuous intermediate states) is termed a "quantum jump" or "quantum leap," a characteristically non-classical feature of Bohr\'s (and later, full quantum) theory.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-66',
    type: 'mcq',
    question: 'Rutherford\'s alpha scattering experiment is historically significant not just for revealing the nucleus, but also for establishing',
    options: [
      'that atoms have no internal structure of any kind',
      'a foundational experimental technique (scattering experiments) that continues to be used in modern physics to probe the structure of matter at very small scales',
      'that alpha particles cannot interact with matter in any way',
      'that gold is the only element with a nucleus'
    ],
    correctIndex: 1,
    explanation: 'Beyond its immediate discovery, Rutherford\'s scattering experiment established scattering-based experimental techniques as a fundamental and enduringly important method (still used in modern particle physics) for probing the internal structure of matter.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-67',
    type: 'mcq',
    question: 'The fact that different elements produce distinctly different sets of spectral lines is fundamentally due to',
    options: [
      'random chance, with no underlying physical cause',
      'the fact that different elements have different arrangements and numbers of electrons (and different nuclear charges), leading to different sets of allowed energy levels and hence different transition energies',
      'all elements actually having identical spectra, an observational error',
      'the temperature of the light source alone, unrelated to the element\'s composition'
    ],
    correctIndex: 1,
    explanation: 'Since each element has a characteristic electronic structure (determined by its nuclear charge and electron configuration), the resulting set of allowed energy levels — and hence the possible transition energies and spectral line wavelengths — differs uniquely from element to element.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-68',
    type: 'mcq',
    question: 'The energy levels of the hydrogen atom, as predicted by Bohr\'s model, are all',
    options: [
      'positive, since the electron is not actually bound to the nucleus',
      'negative, reflecting the fact that the electron is in a bound state relative to the reference of a free electron at rest infinitely far from the nucleus',
      'exactly zero for every value of n',
      'increasing without bound as n increases'
    ],
    correctIndex: 1,
    explanation: 'All the bound-state energy levels in Bohr\'s hydrogen model are negative, consistent with the standard convention where zero energy corresponds to a free (unbound) electron at rest infinitely far from the nucleus.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-69',
    type: 'mcq',
    question: 'The concept that atoms can only exist in certain specific, discrete energy states (rather than a continuum of possible energies) is a defining and foundational feature of',
    options: [
      'classical mechanics exclusively',
      'quantum theory, which Bohr\'s model was an important early step toward developing more fully',
      'purely mechanical (non-electrical) systems only',
      'astronomy, unrelated to atomic physics'
    ],
    correctIndex: 1,
    explanation: 'The restriction of a system to specific, discrete allowed energy states (rather than a continuous range) is a hallmark feature of quantum theory, and Bohr\'s atomic model represented one of the pivotal early steps in the historical development of this quantum framework.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-70',
    type: 'mcq',
    question: 'The overall significance of the study of atomic models and spectra lies in establishing that',
    options: [
      'atoms have no meaningful internal structure worth studying',
      'atomic structure can be probed and understood through a combination of scattering experiments, spectroscopic observation, and theoretical modeling, revealing a nucleus-centred, quantized electronic structure',
      'atoms behave in a completely arbitrary and unpredictable manner, with no consistent underlying structure',
      'spectroscopy has no practical or scientific applications'
    ],
    correctIndex: 1,
    explanation: 'The combined historical effort of scattering experiments (Rutherford), spectroscopic observations (Balmer and others), and theoretical modeling (Bohr) collectively established our modern understanding of atomic structure as centred on a small nucleus surrounded by electrons occupying quantized energy levels.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'atoms-71',
    type: 'assertion-reason',
    question: 'Assertion (A): Most alpha particles in Rutherford\'s scattering experiment passed through the gold foil with little or no deflection.\nReason (R): Most of the volume of an atom is empty space, so most alpha particles do not come close enough to the nucleus to experience significant deflection.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The vast empty space within an atom, with the tiny nucleus occupying a minuscule fraction of the total volume, directly explains why most alpha particles pass through largely undeflected — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-72',
    type: 'assertion-reason',
    question: 'Assertion (A): A small fraction of alpha particles in Rutherford\'s experiment were scattered through very large angles, some almost directly backward.\nReason (R): These particles had a very small impact parameter, approaching the small, dense, positively charged nucleus closely enough to experience a very strong repulsive electrostatic force.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'A small impact parameter (close approach) directly corresponds to a strong repulsive interaction with the nucleus, resulting in the observed large-angle scattering — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-73',
    type: 'assertion-reason',
    question: 'Assertion (A): Rutherford\'s classical planetary model of the atom could not explain the stability of atoms.\nReason (R): According to classical electromagnetic theory, an accelerating (orbiting) electron should continuously radiate energy and spiral into the nucleus almost instantaneously.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The classical prediction of continuous energy radiation and eventual orbital collapse due to electron acceleration is exactly why Rutherford\'s original model could not account for observed atomic stability — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-74',
    type: 'assertion-reason',
    question: 'Assertion (A): Bohr\'s model successfully explains why atoms emit discrete (line) spectra rather than continuous spectra.\nReason (R): Bohr\'s model restricts electrons to specific, quantized energy levels, so transitions between these levels can only produce photons of certain specific energies (and hence specific wavelengths).',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The quantization of allowed energy levels directly produces a discrete set of possible transition energies (and hence wavelengths), correctly explaining the discrete spectral lines — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-75',
    type: 'assertion-reason',
    question: 'Assertion (A): The energy of the electron in the nth Bohr orbit of hydrogen is negative.\nReason (R): The negative sign indicates that the electron is in a bound state, and energy must be supplied to completely remove it from the atom.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The negative energy convention directly reflects the bound nature of the electron relative to the zero-energy reference of a free electron at rest at infinity — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-76',
    type: 'assertion-reason',
    question: 'Assertion (A): The energy levels of the hydrogen atom become more closely spaced as the principal quantum number n increases.\nReason (R): The energy of the nth Bohr orbit is proportional to -1/n², and this function\'s rate of change with n decreases as n becomes larger.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The mathematical behaviour of the -1/n² dependence directly causes the diminishing spacing between successive energy levels at higher n — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-77',
    type: 'assertion-reason',
    question: 'Assertion (A): The Balmer series of hydrogen includes spectral lines in the visible region of the spectrum.\nReason (R): The Balmer series corresponds to transitions ending at n = 2, and the resulting photon energies happen to fall in a range corresponding to visible light wavelengths.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The specific energy differences associated with transitions ending at n = 2 happen to correspond to photon wavelengths in the visible range, directly explaining why the Balmer series (unlike Lyman or Paschen) is notable for its visible-light lines — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-78',
    type: 'assertion-reason',
    question: 'Assertion (A): De Broglie\'s hypothesis provided a physical justification for Bohr\'s otherwise ad-hoc quantization postulate.\nReason (R): De Broglie showed that Bohr\'s allowed orbits correspond exactly to those where a whole number of electron de Broglie wavelengths fit around the orbit\'s circumference, forming a stable standing wave.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The standing-wave condition (2πr = nλ) derived from de Broglie\'s matter-wave hypothesis directly reproduces Bohr\'s quantization rule from a more physically motivated wave perspective — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-79',
    type: 'assertion-reason',
    question: 'Assertion (A): Bohr\'s model is considered a "semi-classical" theory.\nReason (R): It combines classical mechanics (describing the electron\'s circular orbital motion under Coulomb attraction) with a non-classical, ad-hoc quantization postulate for angular momentum.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The hybrid nature of Bohr\'s theory — classical orbital mechanics combined with a quantum mechanical (non-classical) quantization rule — is exactly why it is termed "semi-classical" — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-80',
    type: 'assertion-reason',
    question: 'Assertion (A): Helium was first identified from the spectrum of the Sun before being isolated on Earth.\nReason (R): Spectroscopy allows the identification of elements based on their characteristic pattern of spectral lines, even in distant astronomical objects.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The power of spectroscopy to identify elements remotely (based on their unique spectral fingerprint) is exactly what allowed helium to be discovered in solar spectra before it was found on Earth — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-81',
    type: 'assertion-reason',
    question: 'Assertion (A): The Bohr model, despite its successes, could not accurately explain the spectra of multi-electron atoms.\nReason (R): Bohr\'s original theoretical treatment was developed specifically for a single electron orbiting a nucleus, and the added complexity of electron-electron interactions in multi-electron atoms is not accounted for in this simple framework.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The absence of any treatment for electron-electron interactions in Bohr\'s single-electron framework is exactly why it fails for the more complex case of multi-electron atoms — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-82',
    type: 'assertion-reason',
    question: 'Assertion (A): An atom in an excited state typically returns to its ground state (or a lower energy state) within a very short time.\nReason (R): Excited states are generally unstable, and the atom releases the excess energy as a photon during the downward transition, restoring greater stability.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The inherent instability of excited states, and the tendency of atoms to seek lower-energy (more stable) configurations by emitting photons, directly explains the typically rapid de-excitation observed — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-83',
    type: 'assertion-reason',
    question: 'Assertion (A): The absorption spectrum of an element shows dark lines at wavelengths that coincide with a subset of its emission spectrum lines.\nReason (R): Both absorption and emission correspond to the same underlying set of allowed energy transitions within the atom, just occurring in opposite directions (absorption upward, emission downward).',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since both processes draw on the same set of allowed transitions (just in opposite energy directions), the wavelengths involved necessarily overlap between absorption and emission spectra — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-84',
    type: 'assertion-reason',
    question: 'Assertion (A): The nucleus of an atom is estimated to be roughly ten thousand times smaller in radius than the atom as a whole.\nReason (R): Scattering experiments showed that alpha particles could approach very close to the centre of an atom before experiencing significant deflection, allowing an estimate of the (very small) nuclear size.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The analysis of how close alpha particles could approach before undergoing significant deflection is exactly the method used to estimate the small size of the nucleus relative to the atom as a whole — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-85',
    type: 'assertion-reason',
    question: 'Assertion (A): The formula for the radius of the nth Bohr orbit shows that higher energy levels correspond to larger orbits.\nReason (R): The Bohr radius formula gives rn ∝ n², an increasing function of the principal quantum number n.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The direct mathematical relationship (rn ∝ n²) shows that as n increases, the orbit radius increases correspondingly — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-86',
    type: 'assertion-reason',
    question: 'Assertion (A): Different chemical elements produce distinct, characteristic emission spectra.\nReason (R): Each element has a unique set of allowed electronic energy levels (determined by its specific nuclear charge and electron configuration), leading to a unique set of possible transition energies and hence spectral line wavelengths.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The uniqueness of each element\'s electronic structure (and hence its set of possible energy transitions) directly explains why each element produces its own characteristic spectral fingerprint — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-87',
    type: 'assertion-reason',
    question: 'Assertion (A): Alpha particles were a suitable projectile for probing atomic structure in Rutherford\'s experiment.\nReason (R): Alpha particles are relatively heavy, positively charged particles (helium nuclei), making them sensitive to (and useful for detecting) the electrostatic repulsion from a small, positively charged, dense nucleus.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The specific properties of alpha particles (relatively heavy, positively charged) made them well-suited for revealing the Coulomb repulsion from the atomic nucleus in this scattering experiment — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-88',
    type: 'assertion-reason',
    question: 'Assertion (A): The ionization energy of hydrogen (13.6 eV) equals the magnitude of its ground state energy.\nReason (R): Ionization corresponds to raising the electron from the ground state (n = 1) to n = ∞ (zero energy reference), so the energy required equals the magnitude of the (negative) ground state energy.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since ionization energy is defined as the energy needed to go from the bound ground state to the zero-energy free state, this exactly equals the magnitude of the ground state\'s negative energy — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-89',
    type: 'assertion-reason',
    question: 'Assertion (A): The Lyman series lines of hydrogen fall in the ultraviolet region of the spectrum.\nReason (R): The Lyman series corresponds to transitions ending at n = 1, which involves relatively large energy differences (and hence relatively short, ultraviolet, wavelengths) compared to series ending at higher n values.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Transitions to the deeply-bound n = 1 level involve larger energy gaps (and correspondingly shorter, ultraviolet wavelengths) compared to series ending at higher n, directly explaining why Lyman series lines fall in the UV region — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-90',
    type: 'assertion-reason',
    question: 'Assertion (A): Rutherford\'s scattering experiment could not have been successfully conducted using a thick block of gold instead of a thin foil.\nReason (R): A thick block would cause alpha particles to undergo multiple scattering events from many different nuclei, making it much harder to cleanly analyse single-scattering events and draw conclusions about individual nuclear structure.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The need for clean, interpretable single-scattering events (rather than confounding multiple-scattering effects from a thick sample) is exactly why a thin foil was essential to the experimental design — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-91',
    type: 'assertion-reason',
    question: 'Assertion (A): Bohr\'s theoretical formula for hydrogen spectral wavelengths matched the previously known empirical Balmer/Rydberg formula.\nReason (R): This agreement was considered strong validation of Bohr\'s atomic model, since it showed the quantization postulates correctly reproduced already well-established experimental spectroscopic data.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The theoretical-experimental agreement, and the fact that this represented a genuine independent success (deriving something previously known only empirically), is exactly why it was considered a landmark validation — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-92',
    type: 'assertion-reason',
    question: 'Assertion (A): Bohr\'s model does not account for the relative intensities of different spectral lines observed experimentally.\nReason (R): Bohr\'s original theory determines only the allowed energy levels and hence the possible transition wavelengths, but does not include a mechanism for calculating transition probabilities, which govern how intense a given spectral line will be.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The absence of any treatment of transition probabilities in Bohr\'s basic framework is exactly why it cannot predict relative spectral line intensities, only their possible wavelengths — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-93',
    type: 'assertion-reason',
    question: 'Assertion (A): The trajectory of a scattered alpha particle in Rutherford\'s analysis is hyperbolic.\nReason (R): A repulsive inverse-square-law force (like the Coulomb repulsion here) produces hyperbolic trajectories for a particle approaching from and receding to infinity, with the force centre located at one focus.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The mathematical result that repulsive inverse-square forces produce hyperbolic orbits directly explains the hyperbolic trajectory found in the Rutherford scattering analysis — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-94',
    type: 'assertion-reason',
    question: 'Assertion (A): The number of alpha particles scattered decreases sharply as the scattering angle increases in Rutherford\'s experiment.\nReason (R): Large-angle scattering requires a very small impact parameter, and only a small fraction of the incoming alpha particles happen to have such a small impact parameter relative to any given nucleus.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since only a small fraction of the incoming particles have a sufficiently small impact parameter to produce large deflections, the observed sharp decrease in scattered particle count at larger angles is directly explained — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-95',
    type: 'assertion-reason',
    question: 'Assertion (A): The energy levels of a hydrogen-like ion (e.g., He⁺, with nuclear charge +2e) are more negative (more tightly bound) than the corresponding levels of hydrogen at the same value of n.\nReason (R): The energy formula for hydrogen-like ions includes a factor of Z² (nuclear charge squared), so a higher nuclear charge results in a stronger Coulomb attraction and correspondingly more negative (tightly bound) energy levels.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The Z² scaling in the hydrogen-like energy formula directly accounts for why ions with higher nuclear charge (like He⁺) have more tightly bound electrons at the same n compared to plain hydrogen — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-96',
    type: 'assertion-reason',
    question: 'Assertion (A): Thomson\'s plum pudding model was eventually abandoned in favour of Rutherford\'s nuclear model.\nReason (R): The observed large-angle scattering of alpha particles in Rutherford\'s experiment was incompatible with Thomson\'s model, which predicted only very small deflections since the positive charge was spread throughout the atom (rather than concentrated in a small region).',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The experimental incompatibility between Thomson\'s diffuse-charge model (predicting only small deflections) and the observed large-angle scattering directly led to its rejection in favour of Rutherford\'s concentrated-nucleus model — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-97',
    type: 'assertion-reason',
    question: 'Assertion (A): The concept of "quantum jump" (an electron transitioning instantaneously between orbits with no intermediate states) is a distinctly non-classical feature of Bohr\'s model.\nReason (R): In classical mechanics, a particle transitioning between two states would be expected to pass continuously through all intermediate states, unlike the abrupt, discontinuous transitions postulated in Bohr\'s theory.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The contrast between classical continuous motion and Bohr\'s postulated discontinuous "quantum jumps" is exactly why this feature is considered a genuinely non-classical aspect of the theory — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-98',
    type: 'assertion-reason',
    question: 'Assertion (A): Astronomers can determine the chemical composition of distant stars using spectroscopy.\nReason (R): Each element absorbs or emits light at a characteristic, unique set of wavelengths, so analysing the spectrum of light from a star reveals which elements are present in its outer layers.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The unique spectral "fingerprint" of each element is precisely the mechanism by which astronomers can remotely determine a star\'s chemical composition through spectral analysis — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-99',
    type: 'assertion-reason',
    question: 'Assertion (A): The gold nucleus is treated as essentially stationary during the alpha particle scattering process in Rutherford\'s classical analysis.\nReason (R): The gold nucleus is many times more massive than the alpha particle, so its recoil during the brief scattering interaction is negligible.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The large mass disparity between the gold nucleus and the alpha particle directly justifies the approximation of treating the nucleus as essentially stationary (negligible recoil) throughout the scattering interaction — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-100',
    type: 'assertion-reason',
    question: 'Assertion (A): The historical development from Thomson\'s to Rutherford\'s to Bohr\'s atomic model illustrates the iterative nature of scientific progress.\nReason (R): Each successive model was developed in response to new experimental evidence or unresolved theoretical problems with the preceding model, progressively refining our understanding of atomic structure.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The pattern of each model addressing specific experimental or theoretical shortcomings of its predecessor is exactly what exemplifies the iterative, evidence-driven nature of scientific advancement in this historical case — R correctly explains A.',
    difficulty: 'medium'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'atoms-101',
    type: 'statement',
    question: 'Statement I: Thomson\'s model proposed a uniform distribution of positive charge with embedded electrons.\nStatement II: Rutherford\'s model proposed a small, dense, positively charged nucleus with electrons revolving around it.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the fundamental structural proposals of these two historically important (and successive) atomic models.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-102',
    type: 'statement',
    question: 'Statement I: Most alpha particles in Rutherford\'s experiment passed straight through the gold foil.\nStatement II: A significant fraction (roughly half) of the alpha particles were deflected by more than 90°.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — only a very small fraction (roughly 1 in 8000, not "roughly half") of alpha particles were deflected by more than 90°.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-103',
    type: 'statement',
    question: 'Statement I: Rutherford\'s classical model successfully explained why atoms are stable.\nStatement II: Bohr\'s model introduced quantized stationary states specifically to resolve the atomic stability problem left unresolved by Rutherford\'s model.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — Rutherford\'s classical model could NOT explain atomic stability; that was one of its major shortcomings. Statement II correctly describes how Bohr\'s model addressed exactly this problem.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-104',
    type: 'statement',
    question: 'Statement I: The energy of the nth Bohr orbit of hydrogen is proportional to -1/n².\nStatement II: The radius of the nth Bohr orbit of hydrogen is proportional to n².',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly state the standard Bohr model formulas for orbital energy and radius as functions of the principal quantum number n.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-105',
    type: 'statement',
    question: 'Statement I: The Lyman series of hydrogen corresponds to transitions ending at n = 1.\nStatement II: The Lyman series falls in the visible region of the electromagnetic spectrum.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — the Lyman series falls in the ULTRAVIOLET region, not the visible region (that distinction belongs to the Balmer series).',
    difficulty: 'medium'
  },
  {
    id: 'atoms-106',
    type: 'statement',
    question: 'Statement I: The ionization energy of hydrogen is 13.6 eV.\nStatement II: The ground state energy of hydrogen is -13.6 eV.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly state these standard values, with the ionization energy being equal in magnitude to (but opposite in sign convention from) the ground state energy.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-107',
    type: 'statement',
    question: 'Statement I: De Broglie\'s hypothesis provides a physical justification for Bohr\'s angular momentum quantization postulate.\nStatement II: De Broglie showed that the allowed Bohr orbits correspond to those where a whole number of electron wavelengths fit around the orbit\'s circumference.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and directly connected — the standing-wave condition described in Statement II is exactly the physical justification referenced in Statement I.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-108',
    type: 'statement',
    question: 'Statement I: The Bohr model accurately predicts the spectra of all multi-electron atoms.\nStatement II: The Bohr model is most successfully applied to hydrogen and other single-electron (hydrogen-like) systems.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — the Bohr model does NOT accurately predict multi-electron atom spectra; this is a well-known limitation. Statement II correctly identifies where the model succeeds best.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-109',
    type: 'statement',
    question: 'Statement I: Alpha particles are helium nuclei, consisting of two protons and two neutrons.\nStatement II: Alpha particles carry a net negative charge.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — alpha particles carry a net POSITIVE charge (+2e), not negative, which is essential to the Coulomb repulsion mechanism in Rutherford\'s experiment.',
    difficulty: 'easy'
  },
  {
    id: 'atoms-110',
    type: 'statement',
    question: 'Statement I: A smaller impact parameter in alpha particle scattering leads to a larger scattering angle.\nStatement II: The alpha particles undergoing the largest-angle scattering are those approaching the nucleus almost head-on.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and directly related — smaller impact parameter (closer, more head-on approach) directly corresponds to larger deflection angles.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-111',
    type: 'statement',
    question: 'Statement I: The absorption spectrum of an element shows bright lines against a dark background.\nStatement II: The emission spectrum of an element shows bright lines against a dark background.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — an absorption spectrum shows DARK lines against a bright (continuous) background, not bright lines against dark. Statement II correctly describes the emission spectrum.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-112',
    type: 'statement',
    question: 'Statement I: Helium was first discovered spectroscopically in the Sun\'s spectrum.\nStatement II: This discovery preceded the isolation of helium on Earth.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe this well-known historical episode in the discovery of helium.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-113',
    type: 'statement',
    question: 'Statement I: The trajectory of an alpha particle scattered by a nucleus is parabolic, similar to projectile motion.\nStatement II: The trajectory arises due to the repulsive Coulomb force between the alpha particle and the nucleus.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — the trajectory is HYPERBOLIC, not parabolic (parabolic trajectories arise from constant, uniform forces like gravity near Earth\'s surface, not inverse-square repulsive forces). Statement II is correct.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-114',
    type: 'statement',
    question: 'Statement I: The energy levels of hydrogen-like ions depend on the square of the nuclear charge, Z².\nStatement II: A higher nuclear charge results in less tightly bound (less negative) energy levels.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — a higher nuclear charge results in MORE tightly bound (more negative) energy levels, not less, due to the stronger Coulomb attraction.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-115',
    type: 'statement',
    question: 'Statement I: The Balmer series corresponds to transitions ending at n = 2.\nStatement II: The Paschen series corresponds to transitions ending at n = 3.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly identify the lower energy levels defining these two standard hydrogen spectral series.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-116',
    type: 'statement',
    question: 'Statement I: Bohr\'s model postulates that electrons can revolve only in certain specific orbits without radiating energy.\nStatement II: This postulate is fully consistent with classical electromagnetic theory, with no contradiction.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — this postulate actually CONTRADICTS classical electromagnetic theory (which predicts that any accelerating charge must radiate), representing a deliberate departure from classical physics.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-117',
    type: 'statement',
    question: 'Statement I: The photon energy emitted during an electron transition equals the difference between the initial and final orbit energies.\nStatement II: This relationship is expressed as hf = |Ei - Ef|.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the same fundamental relationship connecting photon energy to the energy difference between atomic states.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-118',
    type: 'statement',
    question: 'Statement I: The size of the atomic nucleus is roughly comparable to the size of the whole atom.\nStatement II: The nucleus occupies only a tiny fraction of the total volume of the atom.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — the nucleus is dramatically smaller (roughly 10,000 times smaller in radius) than the whole atom, not comparable in size. Statement II correctly reflects this vast size difference.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-119',
    type: 'statement',
    question: 'Statement I: An atom is electrically neutral when the number of protons equals the number of electrons.\nStatement II: The nucleus of an atom contains only protons, with electrons located outside it.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false (in the context of nuclear composition generally) — the nucleus typically contains both protons AND neutrons (except for ordinary hydrogen), not protons alone.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-120',
    type: 'statement',
    question: 'Statement I: The concept of quantum jumps in Bohr\'s model refers to electrons moving continuously and gradually between orbits.\nStatement II: In Bohr\'s model, electrons transition instantaneously between discrete orbits, without passing through intermediate states.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false and directly contradicts Statement II — Bohr\'s "quantum jumps" are specifically instantaneous, discontinuous transitions, not continuous/gradual movement, which is correctly described in Statement II.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-121',
    type: 'statement',
    question: 'Statement I: The empirical Balmer formula was initially derived from a complete theoretical atomic model.\nStatement II: Bohr later provided a theoretical derivation that matched the previously empirical Balmer formula.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — the Balmer formula was originally derived empirically (by curve-fitting to data), without an underlying theoretical model. Statement II correctly describes Bohr\'s later theoretical achievement.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-122',
    type: 'statement',
    question: 'Statement I: An excited atom will always remain in its excited state indefinitely, never returning to the ground state.\nStatement II: An excited atom typically de-excites to a lower energy state within a short time, emitting a photon.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false and directly contradicts Statement II — excited states are generally short-lived and unstable, typically de-exciting rapidly, exactly as described in Statement II.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-123',
    type: 'statement',
    question: 'Statement I: Bohr\'s model combines classical mechanics with an additional quantization postulate.\nStatement II: This combination is why Bohr\'s model is sometimes described as "semi-classical."',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and directly connected — this hybrid combination of classical and quantum elements is precisely why the term "semi-classical" is applied to Bohr\'s model.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-124',
    type: 'statement',
    question: 'Statement I: The number of alpha particles scattered at large angles increases as the scattering angle increases.\nStatement II: Very few alpha particles are scattered at angles close to 180° in Rutherford\'s experiment.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — the number of scattered particles DECREASES (not increases) as the scattering angle increases. Statement II is correct, consistent with the sharp decrease described.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-125',
    type: 'statement',
    question: 'Statement I: Rutherford\'s model could explain the discrete line spectra of atoms.\nStatement II: Bohr\'s model, through its quantization postulate, successfully explained the discrete line spectra that Rutherford\'s model could not.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — Rutherford\'s classical model could NOT explain discrete spectra (it would predict a continuous spectrum from a classically spiraling electron). Statement II correctly identifies this as one of Bohr\'s key successes.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-126',
    type: 'statement',
    question: 'Statement I: The transition from n=3 to n=2 in hydrogen is part of the Balmer series and falls in the visible region.\nStatement II: The transition from n=2 to n=1 in hydrogen is part of the Lyman series and falls in the ultraviolet region.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly identify these specific transitions and their corresponding series and spectral regions.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-127',
    type: 'statement',
    question: 'Statement I: The historical sequence of atomic models illustrates how new experimental evidence can drive theoretical revisions.\nStatement II: Once Rutherford\'s model was proposed, it was considered fully complete with no further need for revision.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — Rutherford\'s model had significant unresolved issues (like atomic stability), which necessitated Bohr\'s subsequent revisions.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-128',
    type: 'statement',
    question: 'Statement I: The centripetal force for the electron\'s circular motion in Bohr\'s model is provided by gravitational attraction.\nStatement II: The centripetal force is actually provided by electrostatic (Coulomb) attraction between the electron and the nucleus.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — gravitational attraction is negligible at atomic scales; it is not the source of centripetal force here. Statement II correctly identifies electrostatic (Coulomb) attraction as the actual mechanism.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-129',
    type: 'statement',
    question: 'Statement I: The series limit of a spectral series corresponds to a transition from n = ∞ to the series\' fixed lower level.\nStatement II: The series limit represents the shortest-wavelength (highest-energy) line within that particular series.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the concept of a series limit and its characteristic (shortest wavelength, highest energy) position within that spectral series.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-130',
    type: 'statement',
    question: 'Statement I: Spectroscopy has practical applications in determining the chemical composition of distant astronomical objects.\nStatement II: Spectroscopy is limited to laboratory use on Earth and has no applications in astronomy.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false and directly contradicts Statement I — spectroscopy is in fact a foundational and extensively used technique in astronomy, not limited to laboratory settings.',
    difficulty: 'easy'
  },

  // ==================== HOW MANY / NUMBER-CORRECT (20) ====================
  {
    id: 'atoms-131',
    type: 'how-many',
    question: 'How many of the following statements about Thomson\'s atomic model are correct?\n1. It proposed a uniform distribution of positive charge.\n2. Electrons were considered embedded within this positive charge, like plums in a pudding.\n3. It correctly predicted the existence of a small, dense nucleus.\n4. It was eventually superseded by Rutherford\'s nuclear model based on scattering experiment results.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — Thomson\'s model did NOT predict a small, dense nucleus; that was precisely the key difference introduced later by Rutherford.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-132',
    type: 'how-many',
    question: 'How many of the following statements about Rutherford\'s scattering experiment are correct?\n1. Most alpha particles passed through with little deflection.\n2. A small fraction were scattered through large angles.\n3. The results indicated that most of the atom\'s volume is empty space.\n4. The results indicated that the nucleus is comparable in size to the entire atom.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the results indicated the nucleus is MUCH SMALLER than the whole atom, not comparable in size.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-133',
    type: 'how-many',
    question: 'How many of the following statements about the limitations of Rutherford\'s classical model are correct?\n1. It could not explain the stability of atoms.\n2. It predicted that atoms should emit continuous spectra, not discrete line spectra.\n3. It correctly and completely explained all observed atomic phenomena, with no shortcomings.\n4. It was later improved upon by Bohr\'s introduction of quantization.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false and directly contradicts the other statements, which describe genuine limitations of the classical model.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-134',
    type: 'how-many',
    question: 'How many of the following statements about Bohr\'s postulates are correct?\n1. Electrons revolve in specific, quantized orbits without radiating energy.\n2. Angular momentum is quantized as an integral multiple of h/2π.\n3. Radiation is emitted only during a transition from a lower to a higher energy orbit.\n4. The photon energy during a transition equals the magnitude of the energy difference between the two orbits.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — radiation is emitted during a transition from a HIGHER to a LOWER energy orbit, not the reverse (that describes absorption).',
    difficulty: 'medium'
  },
  {
    id: 'atoms-135',
    type: 'how-many',
    question: 'How many of the following formulas/relationships from the Bohr model are correctly stated?\n1. rn ∝ n²\n2. En ∝ -1/n²\n3. Ground state energy of hydrogen = -13.6 eV\n4. Ionization energy of hydrogen = -13.6 eV',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — ionization energy of hydrogen is +13.6 eV (positive), not -13.6 eV; only the ground state energy carries the negative sign.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-136',
    type: 'how-many',
    question: 'How many of the following statements about the hydrogen spectral series are correct?\n1. Lyman series ends at n = 1 and falls in the UV region.\n2. Balmer series ends at n = 2 and includes visible-region lines.\n3. Paschen series ends at n = 3 and falls in the infrared region.\n4. All three series (Lyman, Balmer, Paschen) fall exclusively in the visible region.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts the other statements, which correctly place Lyman in UV and Paschen in infrared, not all three in visible.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-137',
    type: 'how-many',
    question: 'How many of the following statements about de Broglie\'s contribution to atomic theory are correct?\n1. De Broglie proposed that matter particles have an associated wavelength.\n2. De Broglie\'s hypothesis provided a physical basis for Bohr\'s angular momentum quantization.\n3. The condition 2πr = nλ describes the standing-wave requirement for allowed Bohr orbits.\n4. De Broglie\'s work had no connection to or relevance for Bohr\'s atomic model.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts statements 2 and 3, which describe the significant connection between de Broglie\'s work and Bohr\'s model.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-138',
    type: 'how-many',
    question: 'How many of the following statements about atomic spectra are correct?\n1. Emission spectra show bright lines against a dark background.\n2. Absorption spectra show dark lines against a bright, continuous background.\n3. The wavelengths of absorption lines coincide with a subset of the emission line wavelengths.\n4. Each element produces an identical spectrum, indistinguishable from any other element.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — each element produces a UNIQUE, characteristic spectrum, distinguishable from other elements, not an identical one.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-139',
    type: 'how-many',
    question: 'How many of the following statements about alpha particle scattering trajectories are correct?\n1. The trajectory is hyperbolic, due to the repulsive inverse-square Coulomb force.\n2. A smaller impact parameter leads to a larger scattering angle.\n3. The gold nucleus is treated as essentially stationary due to its much larger mass compared to the alpha particle.\n4. The trajectory is always a perfect circle around the nucleus, regardless of the impact parameter.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts statement 1 — the trajectory is hyperbolic, not circular.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-140',
    type: 'how-many',
    question: 'How many of the following statements about the historical development of atomic models are correct?\n1. Thomson\'s model preceded Rutherford\'s model.\n2. Rutherford\'s model preceded Bohr\'s model.\n3. Bohr\'s model addressed the stability problem inherent in Rutherford\'s classical model.\n4. All three models (Thomson, Rutherford, Bohr) were proposed in the exact same year.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — these models were proposed at different times over a period of years, not simultaneously in the same year.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-141',
    type: 'how-many',
    question: 'How many of the following statements about excitation and ionization are correct?\n1. Excitation energy raises an electron to a higher bound state within the same atom.\n2. Ionization energy completely removes an electron from the atom.\n3. Ionization energy is generally greater than or equal to the excitation energy needed to reach the highest bound excited state.\n4. Excitation and ionization refer to exactly the same physical process, with no distinction.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts statements 1 and 2, which clearly distinguish these as different processes (partial excitation vs complete removal).',
    difficulty: 'medium'
  },
  {
    id: 'atoms-142',
    type: 'how-many',
    question: 'How many of the following statements about the estimated size of the nucleus are correct?\n1. It is of the order of 10⁻¹⁵ to 10⁻¹⁴ m.\n2. It is roughly ten thousand times smaller than the size of the whole atom.\n3. Its size was estimated using the distance of closest approach of alpha particles.\n4. It was found to be larger than the size of the entire atom.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts statement 2 — the nucleus is much SMALLER than the atom, not larger.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-143',
    type: 'how-many',
    question: 'How many of the following statements about the limitations of the Bohr model are correct?\n1. It cannot accurately explain the spectra of complex, multi-electron atoms.\n2. It does not account for the relative intensities of spectral lines.\n3. It successfully and completely explains every aspect of atomic behaviour, with absolutely no limitations.\n4. It was eventually superseded by more complete quantum mechanical treatments of the atom.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false and directly contradicts the other statements, which describe genuine, well-documented limitations of Bohr\'s model.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-144',
    type: 'how-many',
    question: 'How many of the following are correctly matched pairs (spectral series and its spectral region)?\n1. Lyman series — ultraviolet\n2. Balmer series — includes visible region\n3. Paschen series — infrared\n4. Lyman series — infrared',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correctly matched. Statement 4 is false and contradicts statement 1 — the Lyman series falls in the ultraviolet region, not infrared.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-145',
    type: 'how-many',
    question: 'How many of the following statements about hydrogen-like ions are correct?\n1. They have a single electron orbiting a nucleus of charge +Ze.\n2. Their energy levels follow En ∝ -Z²/n².\n3. Examples include He⁺ and Li²⁺.\n4. Their energy levels are identical to those of plain hydrogen, regardless of Z.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts statement 2 — the energy levels DO depend on Z (via the Z² factor), so they are not identical to hydrogen\'s for Z ≠ 1.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-146',
    type: 'how-many',
    question: 'How many of the following statements about the impact parameter in alpha scattering are correct?\n1. It is the perpendicular distance from the nucleus to the alpha particle\'s undeflected initial trajectory.\n2. A larger impact parameter generally leads to a smaller scattering angle.\n3. A very small impact parameter can lead to scattering angles close to 180°.\n4. The impact parameter is unrelated to the scattering angle in any way.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts statements 2 and 3, which describe a clear relationship between impact parameter and scattering angle.',
    difficulty: 'hard'
  },
  {
    id: 'atoms-147',
    type: 'how-many',
    question: 'How many of the following statements about spectroscopy applications are correct?\n1. It can be used to determine the chemical composition of stars.\n2. Helium was first discovered through solar spectroscopy.\n3. Different elements have unique, characteristic spectral signatures.\n4. Spectroscopy has no practical applications outside of a physics laboratory.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicted by the other statements, which describe genuine and significant practical/astronomical applications.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-148',
    type: 'how-many',
    question: 'How many of the following statements about the concept of quantization in Bohr\'s model are correct?\n1. Angular momentum is restricted to specific discrete values.\n2. This restriction has no basis in or connection to classical mechanics, representing a genuinely new idea.\n3. Energy levels are also restricted to specific discrete values as a consequence.\n4. Classical mechanics, by contrast, allows angular momentum to take any continuous value.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements are correct — they collectively describe the novel, non-classical nature of Bohr\'s quantization postulate and its consequence for the resulting energy levels.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-149',
    type: 'how-many',
    question: 'How many of the following statements about the theoretical/experimental relationship in atomic physics history are correct?\n1. Rutherford\'s model was directly motivated by his experimental scattering results.\n2. Bohr\'s theoretical model successfully reproduced the previously empirical Balmer formula.\n3. This reproduction was seen as strong validation of Bohr\'s quantization postulates.\n4. Atomic models in this era were developed purely through abstract theoretical speculation, with no connection to experimental data at any stage.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicted by the other statements, which show a close, iterative relationship between theory and experiment throughout this history.',
    difficulty: 'medium'
  },
  {
    id: 'atoms-150',
    type: 'how-many',
    question: 'How many of the following statements about the overall significance of atomic model development are correct?\n1. It illustrates how scientific models evolve in response to new evidence.\n2. It combined scattering experiments, spectroscopy, and theoretical modeling to build a coherent picture of atomic structure.\n3. It established that atoms have a nucleus-centred structure with quantized electron energy levels.\n4. This body of work has had no lasting influence on later physics, being entirely superseded and irrelevant today.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — this foundational work remains highly relevant, forming the conceptual basis upon which later quantum mechanics was built, not something irrelevant or discarded.',
    difficulty: 'medium'
  }
];
