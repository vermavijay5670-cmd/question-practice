<<<<<<< HEAD
export const SEMICONDUCTORS_DEVICES = [
  // ==================== MCQ (70) ====================
  {
    id: 'semiconductor-1',
    type: 'mcq',
    question: 'According to the energy band theory of solids, the range of energy values that electrons in a solid can occupy (arising from overlapping/splitting of discrete atomic energy levels) is called a',
    options: ['forbidden gap', 'depletion region', 'Fermi level', 'energy band'],
    correctIndex: 3,
    explanation: 'When a large number of atoms come close together to form a solid, their discrete energy levels split and overlap, forming continuous ranges of allowed energy called energy bands.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-2',
    type: 'mcq',
    question: 'The energy band that is completely or partially filled with valence electrons, generally not directly involved in conduction, is called the',
    options: ['depletion band', 'conduction band', 'forbidden gap', 'valence band'],
    correctIndex: 3,
    explanation: 'The valence band contains the energy levels occupied by the valence electrons of the atoms in the solid.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-3',
    type: 'mcq',
    question: 'The energy band above the valence band, in which electrons must be present to participate freely in electrical conduction, is called the',
    options: ['forbidden gap', 'depletion region', 'valence band', 'conduction band'],
    correctIndex: 3,
    explanation: 'The conduction band is the energy band in which electrons are free to move and contribute to electrical conduction.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-4',
    type: 'mcq',
    question: 'The energy gap between the valence band and the conduction band, in which no electron states are normally allowed, is called the',
    options: ['donor level', 'Fermi band', 'depletion region', 'forbidden energy gap'],
    correctIndex: 3,
    explanation: 'The forbidden energy gap (band gap) is the range of energies between the valence and conduction bands where no allowed electron states exist.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-5',
    type: 'mcq',
    question: 'In metals (conductors), the classification based on band theory typically shows',
    options: [
      'a very large forbidden energy gap, preventing any conduction',
      'either an overlap between the valence and conduction bands, or a partially filled conduction band, allowing free movement of electrons',
      'a completely empty valence band',
      'no valence band at all'
    ],
    correctIndex: 1,
    explanation: 'In metals, the conduction and valence bands typically overlap, or the conduction band is partially filled, providing a large number of free electrons readily available for conduction.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-6',
    type: 'mcq',
    question: 'In insulators, the forbidden energy gap between the valence and conduction bands is generally',
    options: [
      'negative in value',
      'exactly zero, identical to a metal',
      'very small (close to zero)',
      'very large (typically greater than about 3 eV), making it extremely difficult for electrons to jump into the conduction band'
    ],
    correctIndex: 3,
    explanation: 'Insulators have a large forbidden energy gap, typically greater than about 3 eV, making it very difficult for valence electrons to acquire enough energy to reach the conduction band.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-7',
    type: 'mcq',
    question: 'In semiconductors, the forbidden energy gap is generally',
    options: [
      'as large as that of typical insulators',
      'infinite',
      'exactly zero, like a metal',
      'small (of the order of about 1 eV), allowing some electrons to be thermally excited into the conduction band at room temperature'
    ],
    correctIndex: 3,
    explanation: 'Semiconductors have a relatively small forbidden energy gap (around 1 eV for common materials like silicon and germanium), allowing a modest number of electrons to be thermally excited across the gap at room temperature.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-8',
    type: 'mcq',
    question: 'At absolute zero temperature (0 K), a pure (intrinsic) semiconductor behaves essentially like',
    options: [
      'a material with infinite conductivity',
      'a perfect conductor',
      'a superconductor',
      'an insulator, since no electrons have enough thermal energy to jump the forbidden gap'
    ],
    correctIndex: 3,
    explanation: 'At absolute zero, there is no thermal energy available to excite electrons across the forbidden gap, so an intrinsic semiconductor behaves like an insulator at this temperature.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-9',
    type: 'mcq',
    question: 'In an intrinsic (pure) semiconductor, the number of free electrons in the conduction band is',
    options: [
      'always much greater than the number of holes in the valence band',
      'always exactly zero',
      'always much less than the number of holes in the valence band',
      'exactly equal to the number of holes in the valence band, since each thermally excited electron leaves behind a corresponding hole'
    ],
    correctIndex: 3,
    explanation: 'In an intrinsic semiconductor, each electron thermally excited into the conduction band leaves behind a hole in the valence band, so the number of electrons equals the number of holes.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-10',
    type: 'mcq',
    question: 'As temperature increases, the electrical conductivity of an intrinsic semiconductor generally',
    options: [
      'remains completely unchanged',
      'becomes exactly zero',
      'decreases, similar to the behaviour of metals',
      'increases, since more electron-hole pairs are generated thermally at higher temperature'
    ],
    correctIndex: 3,
    explanation: 'Higher temperature provides more thermal energy for electron-hole pair generation, increasing the number of charge carriers and hence the conductivity of an intrinsic semiconductor.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-11',
    type: 'mcq',
    question: 'Unlike semiconductors, the electrical conductivity of metals generally',
    options: [
      'behaves in exactly the same way as a semiconductor',
      'is unaffected by any change in temperature',
      'increases with increasing temperature',
      'decreases with increasing temperature, mainly due to increased lattice vibrations scattering the charge carriers'
    ],
    correctIndex: 3,
    explanation: 'In metals, the number of free electrons remains essentially constant with temperature, but increased lattice vibrations at higher temperatures scatter these electrons more, decreasing conductivity — opposite to the behaviour seen in semiconductors.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-12',
    type: 'mcq',
    question: 'Doping a semiconductor with a pentavalent impurity (such as phosphorus or arsenic) produces a',
    options: [
      'perfect insulator',
      'p-type semiconductor, with holes as majority carriers',
      'purely intrinsic semiconductor, unaffected by the impurity',
      'n-type semiconductor, with electrons as majority carriers'
    ],
    correctIndex: 3,
    explanation: 'A pentavalent (donor) impurity contributes an extra electron beyond what is needed for covalent bonding, creating an n-type semiconductor with electrons as the majority charge carriers.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-13',
    type: 'mcq',
    question: 'Doping a semiconductor with a trivalent impurity (such as boron or gallium) produces a',
    options: [
      'n-type semiconductor, with electrons as majority carriers',
      'perfect conductor',
      'purely intrinsic semiconductor, unaffected by the impurity',
      'p-type semiconductor, with holes as majority carriers'
    ],
    correctIndex: 3,
    explanation: 'A trivalent (acceptor) impurity has one fewer electron than needed for covalent bonding, creating a hole (missing bond) and resulting in a p-type semiconductor with holes as the majority carriers.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-14',
    type: 'mcq',
    question: 'In an n-type semiconductor, the majority and minority charge carriers are, respectively,',
    options: [
      'holes and electrons',
      'only electrons, with no minority carriers at all',
      'protons and electrons',
      'electrons and holes'
    ],
    correctIndex: 3,
    explanation: 'In an n-type semiconductor, electrons (contributed by the donor impurity) are the majority carriers, while holes are present only as minority carriers.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-15',
    type: 'mcq',
    question: 'In a p-type semiconductor, the majority and minority charge carriers are, respectively,',
    options: [
      'electrons and holes',
      'only holes, with no minority carriers at all',
      'protons and neutrons',
      'holes and electrons'
    ],
    correctIndex: 3,
    explanation: 'In a p-type semiconductor, holes (created by the acceptor impurity) are the majority carriers, while electrons are present only as minority carriers.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-16',
    type: 'mcq',
    question: 'Despite having an excess of one type of charge carrier (majority carriers), an n-type or p-type doped semiconductor is overall',
    options: [
      'negatively charged, if it is p-type',
      'positively charged, if it is n-type',
      'always highly charged, regardless of type',
      'electrically neutral, since the number of majority carriers is balanced by the fixed charge of the ionised dopant atoms'
    ],
    correctIndex: 3,
    explanation: 'Even though one type of carrier dominates, a doped semiconductor remains overall electrically neutral, since the mobile majority carriers are balanced by the immobile, oppositely charged ionised dopant atoms.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-17',
    type: 'mcq',
    question: 'The typical concentration of dopant atoms added to a semiconductor during doping is',
    options: [
      'completely irrelevant to the resulting conductivity',
      'roughly equal to the number of semiconductor atoms present',
      'far greater than the number of semiconductor atoms present',
      'very small (often around 1 dopant atom per 10^6 to 10^8 semiconductor atoms), yet sufficient to dramatically increase conductivity'
    ],
    correctIndex: 3,
    explanation: 'Doping typically introduces only a very small proportion of impurity atoms relative to the semiconductor atoms, yet this small addition dramatically increases the conductivity compared to the pure (intrinsic) material.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-18',
    type: 'mcq',
    question: 'The formation of a p-n junction, when p-type and n-type semiconductor materials are joined together, is initially driven by',
    options: [
      'gravitational forces between the two materials',
      'diffusion of majority carriers across the junction, from the region of higher concentration to the region of lower concentration',
      'an externally applied voltage',
      'a magnetic field applied across the junction'
    ],
    correctIndex: 1,
    explanation: 'When p-type and n-type materials are joined, majority carriers (electrons from the n-side, holes from the p-side) diffuse across the junction due to the concentration gradient, initiating the formation of the junction\'s characteristic properties.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-19',
    type: 'mcq',
    question: 'The diffusion of majority carriers across a newly formed p-n junction leaves behind a region depleted of free mobile charge carriers, known as the',
    options: ['valence band', 'depletion region', 'conduction band', 'saturation region'],
    correctIndex: 1,
    explanation: 'As majority carriers diffuse across the junction and recombine, a region near the junction becomes depleted of free mobile charge carriers, containing only fixed, immobile ionised dopant atoms — this is called the depletion region.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-20',
    type: 'mcq',
    question: 'The depletion region of a p-n junction contains',
    options: [
      'no charge at all, of any kind',
      'only neutral, un-ionised dopant atoms',
      'a high concentration of free, mobile electrons and holes',
      'fixed, immobile ionised dopant atoms, but essentially no free mobile charge carriers'
    ],
    correctIndex: 3,
    explanation: 'The depletion region consists of immobile, ionised dopant atoms (positive ions on the n-side, negative ions on the p-side) left behind after the mobile carriers have diffused away and recombined; it is essentially free of mobile charge carriers.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-21',
    type: 'mcq',
    question: 'The internal electric field created within the depletion region of a p-n junction points',
    options: [
      'parallel to the junction plane, with no component across it',
      'in a random, undefined direction',
      'from the p-side towards the n-side',
      'from the n-side towards the p-side, opposing further diffusion of majority carriers across the junction'
    ],
    correctIndex: 3,
    explanation: 'The internal electric field within the depletion region points from the positively charged ions on the n-side towards the negatively charged ions on the p-side, opposing further diffusion of majority carriers and eventually establishing equilibrium.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-22',
    type: 'mcq',
    question: 'The potential difference that develops across the depletion region of an unbiased p-n junction, opposing further net diffusion of majority carriers, is called the',
    options: ['breakdown voltage', 'barrier (built-in) potential', 'forward voltage', 'Zener voltage'],
    correctIndex: 1,
    explanation: 'The barrier (or built-in) potential is the potential difference that develops across the depletion region, arising from the internal electric field, and it opposes further net diffusion of majority carriers at equilibrium.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-23',
    type: 'mcq',
    question: 'When a p-n junction diode is forward biased (p-side connected to the positive terminal, n-side to the negative terminal), the depletion region generally',
    options: [
      'remains exactly the same width as in the unbiased state',
      'disappears entirely, along with the semiconductor material itself',
      'widens, and current flow is strongly opposed',
      'narrows, reducing the barrier potential and allowing majority carrier current to flow relatively easily'
    ],
    correctIndex: 3,
    explanation: 'Forward bias opposes the internal built-in field, narrowing the depletion region and lowering the barrier potential, allowing majority carriers to flow across the junction relatively easily.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-24',
    type: 'mcq',
    question: 'When a p-n junction diode is reverse biased (p-side connected to the negative terminal, n-side to the positive terminal), the depletion region generally',
    options: [
      'narrows significantly',
      'widens, increasing the barrier potential and allowing only a very small reverse saturation current to flow (due to minority carriers)',
      'remains exactly the same as in forward bias',
      'becomes filled with majority carriers'
    ],
    correctIndex: 1,
    explanation: 'Reverse bias reinforces the internal field, widening the depletion region and increasing the barrier potential, so only a small reverse saturation current (carried by minority carriers) flows across the junction.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-25',
    type: 'mcq',
    question: 'The forward current through a p-n junction diode, once the applied forward voltage exceeds the threshold (knee) voltage, generally',
    options: [
      'becomes exactly zero',
      'increases rapidly (approximately exponentially) with further increases in forward voltage',
      'decreases as voltage increases',
      'remains constant, regardless of further increases in voltage'
    ],
    correctIndex: 1,
    explanation: 'Once the forward voltage exceeds the threshold (knee) voltage, the forward current increases rapidly, approximately following an exponential relationship with applied voltage.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-26',
    type: 'mcq',
    question: 'The typical threshold (knee) voltage for a silicon p-n junction diode to begin conducting significantly in forward bias is approximately',
    options: ['0.1 V', '5 V', '50 V', '0.7 V'],
    correctIndex: 3,
    explanation: 'A silicon diode typically requires a forward voltage of around 0.7 V before it begins conducting a significant forward current.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-27',
    type: 'mcq',
    question: 'Under reverse bias conditions (below breakdown), the reverse current through a p-n junction diode is generally',
    options: [
      'exactly zero under all reverse bias conditions',
      'very small and nearly independent of the applied reverse voltage, until breakdown occurs',
      'larger than the typical forward current',
      'very large and strongly dependent on the exact reverse voltage applied'
    ],
    correctIndex: 1,
    explanation: 'The reverse saturation current, carried by minority carriers, remains very small and is nearly independent of the exact applied reverse voltage, until the breakdown voltage is reached.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-28',
    type: 'mcq',
    question: 'Beyond a certain reverse voltage, the reverse current through a p-n junction diode increases sharply; this phenomenon is called',
    options: ['forward conduction', 'thermal runaway of the forward current', 'saturation biasing', 'breakdown'],
    correctIndex: 3,
    explanation: 'Beyond the breakdown voltage, the reverse current increases sharply due to mechanisms such as the Zener effect or avalanche effect, a phenomenon called breakdown.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-29',
    type: 'mcq',
    question: 'Zener breakdown, typically occurring at heavily doped junctions with narrow depletion regions, is caused by',
    options: [
      'a decrease in the applied reverse voltage',
      'a strong electric field directly breaking covalent bonds (tunnelling of electrons), rather than a multiplying collision process',
      'impact ionisation caused by accelerated minority carriers colliding with lattice atoms',
      'an increase in temperature alone, with no relation to electric field strength'
    ],
    correctIndex: 1,
    explanation: 'Zener breakdown occurs when a very strong electric field across a narrow depletion region directly breaks covalent bonds (a quantum mechanical tunnelling process), typically at heavily doped junctions.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-30',
    type: 'mcq',
    question: 'Avalanche breakdown, typically occurring at lightly doped junctions with wider depletion regions, is caused by',
    options: [
      'a decrease in the applied reverse voltage below a certain threshold',
      'direct tunnelling of electrons through the depletion region',
      'the complete absence of any electric field in the depletion region',
      'impact ionisation, in which accelerated minority carriers collide with lattice atoms, generating additional electron-hole pairs in a multiplying process'
    ],
    correctIndex: 3,
    explanation: 'Avalanche breakdown occurs through impact ionisation, where accelerated minority carriers gain enough energy to knock additional electrons free upon collision, creating a rapidly multiplying cascade of charge carriers.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-31',
    type: 'mcq',
    question: 'A Zener diode is a specially designed p-n junction diode that is typically operated in the',
    options: [
      'zero bias (unbiased) state only',
      'reverse breakdown region, exploiting the nearly constant voltage across it over a range of currents',
      'region where it acts as a light-emitting device',
      'forward bias region only'
    ],
    correctIndex: 1,
    explanation: 'A Zener diode is specifically designed to operate reliably in the reverse breakdown region, where the voltage across it remains nearly constant over a wide range of currents, making it useful for voltage regulation.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-32',
    type: 'mcq',
    question: 'A Zener diode is commonly used in circuits as a',
    options: [
      'photodetector',
      'voltage regulator, maintaining a nearly constant output voltage despite variations in input voltage or load current',
      'high-power rectifier only',
      'light-emitting device'
    ],
    correctIndex: 1,
    explanation: 'Since the voltage across a Zener diode remains nearly constant in its breakdown region, it is widely used as a voltage regulator in electronic circuits.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-33',
    type: 'mcq',
    question: 'A photodiode is a p-n junction diode that is typically operated under',
    options: [
      'extremely high forward current conditions only',
      'forward bias, to emit light',
      'zero bias only, with no external circuit connection possible',
      'reverse bias, generating a photocurrent proportional to the intensity of light incident on the junction'
    ],
    correctIndex: 3,
    explanation: 'A photodiode is typically operated under reverse bias, where incident light generates additional electron-hole pairs, producing a photocurrent proportional to the light intensity, making it useful as a light sensor.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-34',
    type: 'mcq',
    question: 'An LED (Light Emitting Diode) operates under',
    options: [
      'no bias, generating light purely from ambient heat',
      'zero bias only',
      'reverse bias, emitting light due to minority carrier generation',
      'forward bias, emitting light due to the recombination of injected electrons and holes at the junction'
    ],
    correctIndex: 3,
    explanation: 'An LED is forward biased, and the resulting recombination of electrons and holes at (or near) the junction releases energy in the form of emitted light (photons).',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-35',
    type: 'mcq',
    question: 'The colour of light emitted by an LED depends primarily on the',
    options: [
      'physical size of the LED package',
      'band gap of the semiconductor material used, since this determines the energy (and hence wavelength) of the emitted photons',
      'colour of the wires connecting the LED to the circuit',
      'ambient room temperature'
    ],
    correctIndex: 1,
    explanation: 'Since the energy of the photon emitted upon electron-hole recombination is approximately equal to the semiconductor\'s band gap, the specific band gap of the material used directly determines the colour (wavelength) of light emitted by the LED.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-36',
    type: 'mcq',
    question: 'LEDs are typically fabricated from direct band gap semiconductor materials (such as GaAs, GaP, or GaAsP) rather than materials like silicon, mainly because',
    options: [
      'silicon cannot be doped to form a p-n junction',
      'direct band gap materials cannot conduct electricity at all',
      'silicon is far too expensive to use in electronic devices',
      'direct band gap materials allow the recombination energy to be efficiently released as light, whereas materials like silicon primarily release this energy as heat'
    ],
    correctIndex: 3,
    explanation: 'In direct band gap semiconductors, electron-hole recombination can efficiently release energy as light (photons), whereas in indirect band gap materials like silicon, this recombination energy is predominantly released as heat rather than light, making silicon unsuitable for efficient LEDs.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-37',
    type: 'mcq',
    question: 'A solar cell converts light energy directly into electrical energy through a phenomenon known as the',
    options: ['photoelectric effect on a metal surface', 'photovoltaic effect', 'Zener effect', 'thermionic effect'],
    correctIndex: 1,
    explanation: 'A solar cell exploits the photovoltaic effect, in which absorbed light generates a voltage/current across a p-n junction without requiring any external bias.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-38',
    type: 'mcq',
    question: 'Unlike a photodiode, which requires an external reverse bias to function as a light detector, a solar cell',
    options: [
      'cannot generate any current, regardless of the light intensity',
      'also requires an external bias, identical to a photodiode',
      'must be forward biased at all times to work',
      'requires no external bias at all, generating its own emf directly from absorbed light energy'
    ],
    correctIndex: 3,
    explanation: 'A solar cell is designed to generate its own voltage and current directly from absorbed sunlight, without requiring any external applied bias, unlike a photodiode which is typically operated under reverse bias.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-39',
    type: 'mcq',
    question: 'A half-wave rectifier circuit, using a single diode, produces an output current that flows',
    options: [
      'during both the positive and negative half-cycles of the input AC signal',
      'only during one half-cycle (say, the positive half-cycle) of the input AC signal, with no output during the other half-cycle',
      'continuously, regardless of the input AC signal',
      'in the opposite direction to the input current at all times'
    ],
    correctIndex: 1,
    explanation: 'A half-wave rectifier allows current to flow through the load only during one half-cycle of the input AC waveform (when the diode is forward biased), blocking current during the other half-cycle.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-40',
    type: 'mcq',
    question: 'A full-wave rectifier circuit, in contrast to a half-wave rectifier, produces an output current that flows',
    options: [
      'only during one half-cycle of the input AC signal, just like a half-wave rectifier',
      'during both halves of the input AC cycle, utilising the entire input waveform and giving a higher average output with lower ripple',
      'in an alternating direction, matching the input AC signal exactly',
      'never at all, regardless of the input signal'
    ],
    correctIndex: 1,
    explanation: 'A full-wave rectifier is designed (using either a centre-tapped transformer with two diodes, or a bridge configuration with four diodes) to utilise both halves of the input AC cycle, producing a higher average output voltage with lower ripple than a half-wave rectifier.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-41',
    type: 'mcq',
    question: 'A capacitor filter is often added after a rectifier circuit mainly to',
    options: [
      'increase the ripple in the output voltage',
      'smooth out the pulsating rectified output into a more steady, constant DC voltage, by charging during peaks and discharging through the load during troughs',
      'convert the DC output back into AC',
      'increase the frequency of the output signal'
    ],
    correctIndex: 1,
    explanation: 'A capacitor filter charges up during the peaks of the pulsating rectified waveform and discharges slowly through the load during the troughs, smoothing the output into a more constant DC voltage.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-42',
    type: 'mcq',
    question: 'A junction transistor (BJT) is a three-terminal semiconductor device consisting of three regions, named',
    options: [
      'positive terminal, negative terminal, and neutral terminal',
      'emitter, base, and collector',
      'anode, cathode, and gate',
      'source, drain, and channel'
    ],
    correctIndex: 1,
    explanation: 'A bipolar junction transistor (BJT) consists of three regions: the emitter, base, and collector, each with a specific role in the device\'s operation.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-43',
    type: 'mcq',
    question: 'In a BJT, the emitter region is typically',
    options: [
      'undoped, remaining a purely intrinsic semiconductor',
      'lightly doped and very thin, compared to the other two regions',
      'the largest of the three regions in physical size',
      'heavily doped, since it must supply a large number of majority carriers into the base region'
    ],
    correctIndex: 3,
    explanation: 'The emitter region is heavily doped to supply a large number of majority carriers, which are injected into the thin base region during transistor operation.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-44',
    type: 'mcq',
    question: 'In a BJT, the base region is typically',
    options: [
      'made of a completely different material from the emitter and collector',
      'exactly the same doping level and thickness as the emitter',
      'heavily doped and physically the largest region',
      'very thin and only lightly doped, allowing most carriers injected from the emitter to pass through to the collector with minimal recombination'
    ],
    correctIndex: 3,
    explanation: 'The base region is deliberately made very thin and lightly doped, so that most of the carriers injected from the emitter pass through to the collector, with only a small fraction recombining within the base.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-45',
    type: 'mcq',
    question: 'For a transistor to function in its normal (active) mode of operation, the emitter-base junction is typically',
    options: [
      'reverse biased, while the base-collector junction is forward biased',
      'forward biased, while the base-collector junction is reverse biased',
      'both junctions forward biased simultaneously',
      'both junctions reverse biased simultaneously'
    ],
    correctIndex: 1,
    explanation: 'In normal (active) transistor operation, the emitter-base junction is forward biased (to inject carriers into the base), while the base-collector junction is reverse biased (to sweep these carriers into the collector).',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-46',
    type: 'mcq',
    question: 'In a transistor, the fundamental relationship between emitter current (IE), base current (IB), and collector current (IC) is given by',
    options: ['IE = IB × IC', 'IE = IB - IC', 'IE = IB + IC', 'IE = IC - IB'],
    correctIndex: 2,
    explanation: 'By conservation of current (Kirchhoff\'s current law applied to the transistor), the total emitter current equals the sum of the base and collector currents: IE = IB + IC.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-47',
    type: 'mcq',
    question: 'The common-base current gain (α) of a transistor is defined as the ratio',
    options: ['IE/IC', 'IC/IE, and its value is typically slightly less than 1', 'IC/IB', 'IB/IE'],
    correctIndex: 1,
    explanation: 'Common-base current gain α is defined as IC/IE, and since a small fraction of injected carriers recombine in the base rather than reaching the collector, its value is always slightly less than 1.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-48',
    type: 'mcq',
    question: 'The common-emitter current gain (β) of a transistor is defined as the ratio',
    options: ['IB/IC', 'IC/IE', 'IE/IB', 'IC/IB, and its value is typically large (much greater than 1)'],
    correctIndex: 3,
    explanation: 'Common-emitter current gain β is defined as IC/IB, and since base current is typically much smaller than collector current, its value is usually large, providing significant current amplification.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-49',
    type: 'mcq',
    question: 'The relationship between the common-base current gain (α) and the common-emitter current gain (β) of a transistor is given by',
    options: ['β = α + 1', 'β = α × (1-α)', 'β = α/(1-α)', 'β = 1/α'],
    correctIndex: 2,
    explanation: 'The relationship between the two current gains, derived from their definitions and the fundamental current relation IE = IB + IC, is β = α/(1-α).',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-50',
    type: 'mcq',
    question: 'The common-emitter (CE) configuration is the most widely used transistor configuration for amplification mainly because it provides',
    options: [
      'no current or voltage gain at all',
      'appreciable current gain as well as voltage gain, giving a high overall power gain',
      'only voltage gain, with current gain always less than 1',
      'a configuration that cannot amplify any signal'
    ],
    correctIndex: 1,
    explanation: 'The common-emitter configuration offers both significant current gain and voltage gain, resulting in a high power gain, which is why it is the most commonly used configuration for amplifier circuits.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-51',
    type: 'mcq',
    question: 'When used as an amplifier, a transistor exploits the fact that',
    options: [
      'the emitter current is always exactly zero',
      'small changes in collector current have no effect on the base current whatsoever',
      'amplification requires no external power supply at all',
      'small changes in base current produce correspondingly large changes in collector current'
    ],
    correctIndex: 3,
    explanation: 'In amplifier applications, a small variation in the base current (input signal) produces a much larger corresponding variation in the collector current (output), achieving current amplification.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-52',
    type: 'mcq',
    question: 'When a transistor is used as a switch, the "off" (cutoff) state corresponds to',
    options: [
      'the transistor generating its own current spontaneously, with no external bias needed',
      'both the emitter-base and base-collector junctions being reverse biased, so essentially no current flows, similar to an open switch',
      'both the emitter-base and base-collector junctions being forward biased, allowing maximum current to flow',
      'only the emitter-base junction being forward biased'
    ],
    correctIndex: 1,
    explanation: 'In the cutoff region, both transistor junctions are reverse biased, allowing essentially no current to flow through the device, analogous to an open switch.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-53',
    type: 'mcq',
    question: 'When a transistor is used as a switch, the "on" (saturation) state corresponds to',
    options: [
      'the transistor having zero collector current under all conditions',
      'both the emitter-base and base-collector junctions being forward biased, allowing maximum current to flow through the transistor, similar to a closed switch',
      'both junctions being reverse biased',
      'only the base-collector junction being reverse biased, with no other change'
    ],
    correctIndex: 1,
    explanation: 'In the saturation region, both junctions are forward biased, allowing the maximum possible current to flow through the transistor, analogous to a closed switch.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-54',
    type: 'mcq',
    question: 'A logic gate that produces a high (1) output only when all of its inputs are high (1) is called an',
    options: ['OR gate', 'NOR gate', 'AND gate', 'NOT gate'],
    correctIndex: 2,
    explanation: 'An AND gate outputs a high (1) signal only when every one of its inputs is high (1); if any input is low (0), the output is low.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-55',
    type: 'mcq',
    question: 'A logic gate that produces a high (1) output if at least one of its inputs is high (1) is called an',
    options: ['AND gate', 'NOT gate', 'NAND gate', 'OR gate'],
    correctIndex: 3,
    explanation: 'An OR gate outputs a high (1) signal if any one (or more) of its inputs is high (1), and outputs low (0) only when all inputs are low.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-56',
    type: 'mcq',
    question: 'A logic gate with a single input that produces an output that is the inverse (opposite) of its input is called a',
    options: ['OR gate', 'AND gate', 'NAND gate', 'NOT gate'],
    correctIndex: 3,
    explanation: 'A NOT gate (inverter) has a single input and produces an output that is the logical opposite (inverse) of that input.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-57',
    type: 'mcq',
    question: 'A NAND gate produces an output that is',
    options: [
      'always exactly zero, regardless of input',
      'identical to an AND gate\'s output',
      'the inverse (complement) of an AND gate\'s output',
      'identical to an OR gate\'s output'
    ],
    correctIndex: 2,
    explanation: 'A NAND gate is functionally equivalent to an AND gate followed by a NOT gate, so its output is the logical inverse of the corresponding AND gate\'s output.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-58',
    type: 'mcq',
    question: 'A NOR gate produces an output that is',
    options: [
      'identical to an AND gate\'s output',
      'the inverse (complement) of an OR gate\'s output',
      'always exactly one, regardless of input',
      'identical to an OR gate\'s output'
    ],
    correctIndex: 1,
    explanation: 'A NOR gate is functionally equivalent to an OR gate followed by a NOT gate, so its output is the logical inverse of the corresponding OR gate\'s output.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-59',
    type: 'mcq',
    question: 'NAND and NOR gates are often referred to as "universal gates" because',
    options: [
      'they are the only logic gates that actually exist',
      'they cannot be used to construct any other type of logic gate',
      'any other basic logic gate (AND, OR, NOT) can be constructed using only NAND gates alone, or only NOR gates alone',
      'they require no electrical power to operate'
    ],
    correctIndex: 2,
    explanation: 'NAND and NOR gates are termed universal gates because any other logic function (AND, OR, NOT, etc.) can be implemented using combinations of only NAND gates, or alternatively, only NOR gates.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-60',
    type: 'mcq',
    question: 'In terms of the energy band picture, doping a semiconductor with a donor (pentavalent) impurity creates a new energy level',
    options: [
      'deep within the valence band',
      'close to the conduction band, allowing donor electrons to be easily excited into the conduction band',
      'exactly in the middle of the forbidden gap, identical to the intrinsic Fermi level',
      'far above the conduction band, with no relevance to conduction'
    ],
    correctIndex: 1,
    explanation: 'A donor impurity introduces a discrete energy level located close to the conduction band, from which the extra donor electron can be easily excited into the conduction band, even at relatively low thermal energies.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-61',
    type: 'mcq',
    question: 'In terms of the energy band picture, doping a semiconductor with an acceptor (trivalent) impurity creates a new energy level',
    options: [
      'exactly in the middle of the forbidden gap',
      'close to the valence band, allowing electrons from the valence band to be easily excited into this level, leaving behind a hole',
      'far below the valence band, with no relevance to conduction',
      'close to the conduction band'
    ],
    correctIndex: 1,
    explanation: 'An acceptor impurity introduces a discrete energy level located close to the valence band, allowing valence band electrons to be readily excited into this level, leaving behind mobile holes in the valence band.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-62',
    type: 'mcq',
    question: 'The Fermi level in an intrinsic semiconductor lies approximately',
    options: [
      'far outside the forbidden gap entirely',
      'at the top of the conduction band',
      'at the bottom of the valence band',
      'in the middle of the forbidden energy gap'
    ],
    correctIndex: 3,
    explanation: 'For an intrinsic semiconductor, since electron and hole concentrations are equal, the Fermi level lies approximately midway within the forbidden energy gap.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-63',
    type: 'mcq',
    question: 'In an n-type semiconductor, compared to the intrinsic case, the Fermi level generally shifts',
    options: [
      'closer to the conduction band, reflecting the higher concentration of electrons',
      'completely outside the semiconductor material',
      'to exactly the middle of the gap, identical to the intrinsic case',
      'closer to the valence band'
    ],
    correctIndex: 0,
    explanation: 'Since n-type doping increases the concentration of electrons (relative to holes), the Fermi level shifts upward, closer to the conduction band, compared to its position in an intrinsic semiconductor.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-64',
    type: 'mcq',
    question: 'In a p-type semiconductor, compared to the intrinsic case, the Fermi level generally shifts',
    options: [
      'closer to the conduction band',
      'closer to the valence band, reflecting the higher concentration of holes',
      'to exactly the middle of the gap, identical to the intrinsic case',
      'completely outside the semiconductor material'
    ],
    correctIndex: 1,
    explanation: 'Since p-type doping increases the concentration of holes (relative to electrons), the Fermi level shifts downward, closer to the valence band, compared to its position in an intrinsic semiconductor.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-65',
    type: 'mcq',
    question: 'Silicon and germanium are the two most commonly used semiconductor materials, and silicon generally has a',
    options: [
      'larger band gap than germanium, contributing to its higher threshold voltage and greater temperature stability in devices',
      'zero band gap, similar to a metal',
      'exactly the same band gap as germanium',
      'smaller band gap than germanium'
    ],
    correctIndex: 0,
    explanation: 'Silicon has a larger band gap (about 1.1 eV) compared to germanium (about 0.7 eV), contributing to silicon devices having a higher threshold (knee) voltage and generally better temperature stability.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-66',
    type: 'mcq',
    question: 'A bridge rectifier circuit, a common full-wave rectifier configuration, typically uses',
    options: [
      'a single diode',
      'two diodes and no transformer at all',
      'four diodes arranged in a specific bridge configuration, without necessarily requiring a centre-tapped transformer',
      'no diodes whatsoever'
    ],
    correctIndex: 2,
    explanation: 'A bridge rectifier uses four diodes arranged in a bridge configuration to achieve full-wave rectification, without requiring the centre-tapped transformer needed for the two-diode full-wave rectifier design.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-67',
    type: 'mcq',
    question: 'The output of a full-wave rectifier, compared to a half-wave rectifier (with a similar input signal), generally has',
    options: [
      'a lower average output voltage and higher ripple',
      'no output at all under any conditions',
      'exactly the same average output voltage and ripple in every respect',
      'a higher average output voltage and lower ripple, due to utilising both halves of the AC cycle'
    ],
    correctIndex: 3,
    explanation: 'Since a full-wave rectifier makes use of both halves of the AC input cycle, it produces a higher average output voltage and a smoother output waveform (lower ripple) compared to a half-wave rectifier.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-68',
    type: 'mcq',
    question: 'Digital electronic circuits, including logic gates, typically operate using signals that represent',
    options: [
      'only two discrete voltage levels, conventionally labelled as 0 (low) and 1 (high)',
      'exactly three discrete voltage levels',
      'a continuous range of infinitely many possible voltage values',
      'purely analog waveforms with no discrete levels at all'
    ],
    correctIndex: 0,
    explanation: 'Digital circuits, including logic gates, operate using binary signals, represented by only two discrete voltage levels: a low state (0) and a high state (1).',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-69',
    type: 'mcq',
    question: 'Semiconductor devices such as diodes and transistors form the basis of modern electronics mainly because they allow',
    options: [
      'only the generation of heat, with no other electrical function',
      'precise and versatile control over the flow of electric current, enabling functions like rectification, amplification, and switching',
      'the complete elimination of the need for any electric current in circuits',
      'no control over the flow of electric current whatsoever'
    ],
    correctIndex: 1,
    explanation: 'Semiconductor devices provide precise, controllable behaviour regarding current flow, enabling essential electronic functions such as rectification (diodes), amplification (transistors), and switching (transistors, logic gates).',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-70',
    type: 'mcq',
    question: 'Overall, the chapter on semiconductor electronics, as emphasised in NCERT, integrates the fundamental band theory of solids with',
    options: [
      'the behaviour of intrinsic and extrinsic semiconductors, the physics and applications of the p-n junction diode (rectification, Zener regulation, photodiodes, LEDs, solar cells), transistor operation and amplification, and basic digital logic gates',
      'only the historical discovery of electricity, with no modern device applications discussed',
      'only classical mechanics, with no reference to semiconductor materials at all',
      'topics entirely unrelated to electronic devices or circuits'
    ],
    correctIndex: 0,
    explanation: 'This chapter connects the foundational band theory of solids to the practical behaviour and applications of semiconductor devices, spanning diodes, transistors, and digital logic gates.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'semiconductor-71',
    type: 'assertion-reason',
    question: 'Assertion (A): At absolute zero temperature, an intrinsic semiconductor behaves as a perfect insulator.\nReason (R): At 0 K, there is no thermal energy available to excite electrons from the valence band across the forbidden gap into the conduction band.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The complete absence of thermal energy at 0 K, preventing any electrons from crossing the forbidden gap, is exactly why an intrinsic semiconductor behaves like an insulator at this temperature, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-72',
    type: 'assertion-reason',
    question: 'Assertion (A): The electrical conductivity of a semiconductor increases with increasing temperature.\nReason (R): Higher temperature provides more thermal energy, generating additional electron-hole pairs and increasing the number of available charge carriers.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This increased generation of charge carriers with temperature is exactly why semiconductor conductivity rises as temperature increases, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-73',
    type: 'assertion-reason',
    question: 'Assertion (A): The electrical conductivity of a metal decreases with increasing temperature.\nReason (R): In metals, the number of free electrons remains essentially constant, but increased lattice vibrations at higher temperature scatter these electrons more frequently, reducing their mobility.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This increased scattering of electrons due to enhanced lattice vibrations at higher temperature is exactly why metallic conductivity decreases with rising temperature, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-74',
    type: 'assertion-reason',
    question: 'Assertion (A): A doped n-type semiconductor is electrically neutral overall, despite having a much greater concentration of electrons than holes.\nReason (R): The excess mobile electrons are balanced by an equal number of fixed, positively charged ionised donor atoms.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This balance between mobile excess electrons and fixed positive donor ions is exactly why the n-type material remains overall electrically neutral, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-75',
    type: 'assertion-reason',
    question: 'Assertion (A): A depletion region forms at a p-n junction when p-type and n-type materials are brought together.\nReason (R): Majority carriers diffuse across the junction due to the concentration gradient and recombine, leaving behind a region depleted of mobile charge carriers near the junction.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This diffusion and subsequent recombination of majority carriers is exactly the mechanism that creates the depletion region, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-76',
    type: 'assertion-reason',
    question: 'Assertion (A): Forward biasing a p-n junction diode narrows the depletion region.\nReason (R): The applied forward bias opposes the internal built-in electric field, reducing the barrier potential and allowing more majority carriers to diffuse across the junction.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This opposition to the built-in field, reducing the barrier and allowing more carrier diffusion, is exactly why forward bias narrows the depletion region, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-77',
    type: 'assertion-reason',
    question: 'Assertion (A): Reverse biasing a p-n junction diode widens the depletion region.\nReason (R): The applied reverse bias reinforces the internal built-in electric field, increasing the barrier potential and pulling majority carriers further away from the junction.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This reinforcement of the built-in field, increasing the barrier and pulling majority carriers away, is exactly why reverse bias widens the depletion region, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-78',
    type: 'assertion-reason',
    question: 'Assertion (A): The reverse saturation current in a p-n junction diode is very small and nearly independent of the applied reverse voltage (below breakdown).\nReason (R): The reverse current is carried by minority carriers, whose concentration is largely determined by thermal generation rather than by the applied voltage.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since minority carrier concentration is set primarily by thermal generation (largely independent of the applied reverse voltage), this directly explains why reverse saturation current remains small and nearly constant, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-79',
    type: 'assertion-reason',
    question: 'Assertion (A): Zener breakdown typically occurs in heavily doped p-n junctions with narrow depletion regions.\nReason (R): Heavier doping produces a stronger electric field across the narrower depletion region for a given reverse voltage, making direct tunnelling of electrons through covalent bonds more likely.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This stronger field arising from heavier doping and a narrower depletion region is exactly what favours the tunnelling mechanism characteristic of Zener breakdown, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-80',
    type: 'assertion-reason',
    question: 'Assertion (A): A Zener diode is used as a voltage regulator.\nReason (R): The voltage across a Zener diode remains nearly constant over a wide range of currents once it is operating in its reverse breakdown region.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This nearly constant voltage characteristic in the breakdown region is exactly why the Zener diode is well suited for use as a voltage regulator, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-81',
    type: 'assertion-reason',
    question: 'Assertion (A): A photodiode is typically operated under reverse bias rather than forward bias.\nReason (R): Reverse bias widens the depletion region and creates a stronger internal field, allowing the photodiode to more effectively separate and collect light-generated electron-hole pairs, producing a measurable photocurrent.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This enhanced field and depletion region under reverse bias, aiding efficient collection of photogenerated carriers, is exactly why photodiodes are operated this way, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-82',
    type: 'assertion-reason',
    question: 'Assertion (A): An LED emits light when forward biased.\nReason (R): Forward bias injects electrons and holes into the junction region, where their recombination releases energy in the form of photons.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This carrier injection and subsequent recombination, releasing energy as light, is exactly the mechanism by which a forward-biased LED emits light, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-83',
    type: 'assertion-reason',
    question: 'Assertion (A): LEDs are typically made from direct band gap semiconductor materials rather than silicon.\nReason (R): In direct band gap materials, electron-hole recombination efficiently releases energy as light, whereas in indirect band gap materials like silicon, this energy is predominantly released as heat.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This difference in recombination efficiency for light emission between direct and indirect band gap materials directly explains why LEDs use direct band gap materials rather than silicon, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-84',
    type: 'assertion-reason',
    question: 'Assertion (A): A solar cell does not require an external bias voltage to generate electrical power.\nReason (R): Absorbed light generates electron-hole pairs, and the internal built-in electric field of the junction itself separates these carriers, driving them to opposite terminals and generating a voltage/current.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This use of the junction\'s own internal field to separate light-generated carriers, without needing an external bias, is exactly why a solar cell can generate power on its own, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-85',
    type: 'assertion-reason',
    question: 'Assertion (A): A full-wave rectifier is generally preferred over a half-wave rectifier for most practical applications.\nReason (R): A full-wave rectifier utilises both halves of the input AC cycle, giving a higher average output voltage and lower ripple compared to a half-wave rectifier.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This more efficient use of the full AC cycle, giving better output characteristics, is exactly why full-wave rectifiers are generally preferred over half-wave designs, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-86',
    type: 'assertion-reason',
    question: 'Assertion (A): A capacitor filter is often added after a rectifier circuit.\nReason (R): The capacitor charges during the peaks of the pulsating rectified waveform and discharges gradually through the load during the troughs, smoothing the output into a more constant DC voltage.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This charge-discharge cycling of the capacitor, smoothing out the ripples in the rectified waveform, is exactly why a capacitor filter is used after rectification, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-87',
    type: 'assertion-reason',
    question: 'Assertion (A): In a transistor, the base region is made very thin and lightly doped.\nReason (R): This design minimises recombination of carriers within the base, ensuring most of the emitter-injected carriers successfully reach the collector.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This deliberate minimisation of recombination, ensuring efficient carrier transport from emitter to collector, is exactly why the base is designed to be thin and lightly doped, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-88',
    type: 'assertion-reason',
    question: 'Assertion (A): The common-base current gain (α) of a transistor is always slightly less than 1.\nReason (R): A small fraction of the carriers injected from the emitter recombine within the base region and never reach the collector.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This small but non-zero recombination loss within the base is exactly why the collector current is always slightly less than the emitter current, keeping α just under 1, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-89',
    type: 'assertion-reason',
    question: 'Assertion (A): The common-emitter current gain (β) of a transistor is typically much greater than 1.\nReason (R): Base current is typically very small compared to collector current, since only a small fraction of carriers recombine in the thin base region, and β is defined as the ratio of collector current to base current.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This small base current relative to collector current, resulting from minimal base recombination, directly explains why β (= IC/IB) is typically a large value, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-90',
    type: 'assertion-reason',
    question: 'Assertion (A): The common-emitter configuration is preferred over the common-base configuration for most amplifier applications.\nReason (R): The common-emitter configuration provides both significant current gain and voltage gain, resulting in a higher overall power gain compared to the common-base configuration.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This superior combination of current and voltage gain, giving a higher power gain, is exactly why the common-emitter configuration is generally favoured for amplifier design, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-91',
    type: 'assertion-reason',
    question: 'Assertion (A): When used as a switch, a transistor in the cutoff region behaves like an open switch.\nReason (R): In cutoff, both the emitter-base and base-collector junctions are reverse biased, allowing essentially no current to flow through the transistor.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This absence of current flow due to both junctions being reverse biased is exactly why the cutoff state behaves like an open switch, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-92',
    type: 'assertion-reason',
    question: 'Assertion (A): When used as a switch, a transistor in the saturation region behaves like a closed switch.\nReason (R): In saturation, both the emitter-base and base-collector junctions are forward biased, allowing the maximum possible current to flow through the transistor.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This maximal current flow enabled by both junctions being forward biased is exactly why the saturation state behaves like a closed switch, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-93',
    type: 'assertion-reason',
    question: 'Assertion (A): NAND and NOR gates are called universal gates.\nReason (R): Any other basic logic gate (AND, OR, NOT) can be constructed using only NAND gates alone, or alternatively, only NOR gates alone.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This ability to construct all other basic logic gates using only NAND or only NOR gates is exactly why they are termed universal gates, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-94',
    type: 'assertion-reason',
    question: 'Assertion (A): Silicon is generally preferred over germanium for many modern semiconductor devices.\nReason (R): Silicon has a larger band gap than germanium, contributing to greater temperature stability and lower reverse leakage current in devices.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This greater temperature stability and reduced leakage current, arising from silicon\'s larger band gap, is exactly why silicon is often preferred for many practical semiconductor devices, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-95',
    type: 'assertion-reason',
    question: 'Assertion (A): In an n-type semiconductor, the Fermi level lies closer to the conduction band than in an intrinsic semiconductor.\nReason (R): n-type doping increases the concentration of electrons relative to holes, shifting the Fermi level upward towards the conduction band.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This increased relative electron concentration from n-type doping is exactly why the Fermi level shifts closer to the conduction band, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-96',
    type: 'assertion-reason',
    question: 'Assertion (A): Avalanche breakdown typically occurs at a higher reverse voltage than Zener breakdown, for comparably sized diodes.\nReason (R): Avalanche breakdown occurs in lightly doped junctions with wider depletion regions, requiring a larger applied voltage to accelerate minority carriers sufficiently for impact ionisation to occur.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This need for a larger voltage to sufficiently accelerate carriers across a wider depletion region for impact ionisation is exactly why avalanche breakdown typically requires a higher voltage than Zener breakdown, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-97',
    type: 'assertion-reason',
    question: 'Assertion (A): Digital electronic circuits, including logic gates, are designed to operate using a continuous range of voltage values.\nReason (R): Continuous voltage levels allow for greater precision and are the defining characteristic of digital (as opposed to analog) electronics.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — digital circuits operate using only two discrete voltage levels (0 and 1), not a continuous range (that describes analog circuits instead). R is also false as stated, since continuous voltage levels are actually characteristic of analog, not digital, electronics — directly contradicting the false claim in A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-98',
    type: 'assertion-reason',
    question: 'Assertion (A): A photodiode can be used as a light-sensing device in various electronic applications.\nReason (R): The photocurrent generated by a photodiode is proportional to the intensity of light incident on its junction, allowing light intensity to be inferred from the measured current.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This proportional relationship between photocurrent and light intensity is exactly what enables a photodiode to function as a practical light-sensing device, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-99',
    type: 'assertion-reason',
    question: 'Assertion (A): The p-n junction diode always conducts significant current in both forward and reverse bias equally.\nReason (R): The forward current increases rapidly once the threshold voltage is exceeded, while the reverse current remains very small (except beyond breakdown), reflecting the diode\'s inherently asymmetric (rectifying) behaviour.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — a diode does not conduct equally in both directions; it strongly favours forward conduction over reverse conduction. R correctly describes this asymmetric behaviour, directly refuting the false claim made in A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-100',
    type: 'assertion-reason',
    question: 'Assertion (A): The chapter on semiconductor electronics connects the fundamental band theory of solids to practical devices and circuits used in everyday electronics.\nReason (R): Concepts such as doping, p-n junction behaviour, transistor action, and logic gates are all built upon the underlying principles of energy bands and charge carrier behaviour in semiconductors.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This shared foundation in band theory and carrier behaviour, underlying all the specific devices and circuits discussed, directly explains the integrated nature of the chapter\'s content, correctly explaining A.',
    difficulty: 'medium'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'semiconductor-101',
    type: 'statement',
    question: 'Statement I: Insulators have a very large forbidden energy gap.\nStatement II: Semiconductors have a forbidden energy gap of about 1 eV, smaller than that of typical insulators.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the relative forbidden energy gaps of insulators and semiconductors.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-102',
    type: 'statement',
    question: 'Statement I: At 0 K, an intrinsic semiconductor conducts electricity as well as a metal.\nStatement II: At room temperature, some electrons in an intrinsic semiconductor acquire enough thermal energy to jump into the conduction band.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — at 0 K, an intrinsic semiconductor behaves like an insulator, not a metal. Statement II correctly describes behaviour at room temperature.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-103',
    type: 'statement',
    question: 'Statement I: In an intrinsic semiconductor, the number of electrons in the conduction band equals the number of holes in the valence band.\nStatement II: Semiconductor conductivity decreases with increasing temperature, similar to metals.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — semiconductor conductivity actually increases with temperature, opposite to the behaviour of metals.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-104',
    type: 'statement',
    question: 'Statement I: Doping with a pentavalent impurity produces an n-type semiconductor.\nStatement II: Doping with a trivalent impurity produces a p-type semiconductor.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the outcomes of doping with pentavalent and trivalent impurities, respectively.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-105',
    type: 'statement',
    question: 'Statement I: A doped n-type semiconductor carries an overall net negative charge.\nStatement II: A doped semiconductor, whether n-type or p-type, remains overall electrically neutral.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — an n-type semiconductor remains overall neutral, not negatively charged. Statement II correctly describes this overall neutrality for both n-type and p-type materials.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-106',
    type: 'statement',
    question: 'Statement I: The depletion region of a p-n junction contains a high concentration of free, mobile charge carriers.\nStatement II: The depletion region contains fixed, immobile ionised dopant atoms.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the depletion region is essentially free of mobile charge carriers. Statement II correctly describes the fixed ionised atoms present there.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-107',
    type: 'statement',
    question: 'Statement I: Forward biasing a p-n junction diode narrows the depletion region.\nStatement II: Reverse biasing a p-n junction diode widens the depletion region.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the opposite effects of forward and reverse bias on the depletion region width.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-108',
    type: 'statement',
    question: 'Statement I: The reverse saturation current in a p-n junction diode depends strongly on the applied reverse voltage.\nStatement II: The forward current in a p-n junction diode increases roughly exponentially once the threshold voltage is exceeded.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — reverse saturation current is nearly independent of applied reverse voltage (below breakdown), not strongly dependent on it. Statement II correctly describes the forward current behaviour.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-109',
    type: 'statement',
    question: 'Statement I: Zener breakdown occurs due to direct tunnelling of electrons through covalent bonds in a strong electric field.\nStatement II: Avalanche breakdown occurs due to impact ionisation from accelerated minority carriers.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the distinct mechanisms behind Zener breakdown and avalanche breakdown.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-110',
    type: 'statement',
    question: 'Statement I: A Zener diode is designed to be destroyed if operated in its reverse breakdown region.\nStatement II: A Zener diode is specifically designed to operate safely and reliably in its reverse breakdown region.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — a Zener diode is specifically designed to safely handle its breakdown region, unlike an ordinary diode. Statement II correctly describes this intended operating mode.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-111',
    type: 'statement',
    question: 'Statement I: A photodiode generates a photocurrent proportional to the intensity of incident light.\nStatement II: A photodiode is typically operated under forward bias to detect light.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — a photodiode is typically operated under reverse bias, not forward bias, for light detection.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-112',
    type: 'statement',
    question: 'Statement I: An LED emits light when forward biased, due to electron-hole recombination.\nStatement II: The colour of light emitted by an LED depends on the band gap of the semiconductor material used.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the operating principle and colour-determining factor of LEDs.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-113',
    type: 'statement',
    question: 'Statement I: LEDs are typically made from indirect band gap materials like silicon, for efficient light emission.\nStatement II: LEDs are typically made from direct band gap materials, since these efficiently convert recombination energy into light rather than heat.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — silicon (an indirect band gap material) is not efficient for light emission and is not typically used for LEDs. Statement II correctly describes the preference for direct band gap materials.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-114',
    type: 'statement',
    question: 'Statement I: A solar cell requires an external bias voltage to generate electrical power from light.\nStatement II: A solar cell generates its own voltage/current directly from absorbed light, using the junction\'s internal field to separate photogenerated carriers.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — a solar cell does not require an external bias. Statement II correctly describes how it generates power using its own internal field.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-115',
    type: 'statement',
    question: 'Statement I: A half-wave rectifier utilises only one half-cycle of the input AC signal.\nStatement II: A full-wave rectifier utilises both half-cycles of the input AC signal, giving a higher average output and lower ripple.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe and contrast the operation of half-wave and full-wave rectifiers.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-116',
    type: 'statement',
    question: 'Statement I: A capacitor filter added after a rectifier increases the ripple in the output.\nStatement II: A capacitor filter smooths the pulsating rectified output into a more constant DC voltage.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — a capacitor filter decreases, not increases, ripple. Statement II correctly describes its smoothing function.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-117',
    type: 'statement',
    question: 'Statement I: In a transistor, the emitter is heavily doped.\nStatement II: In a transistor, the base is thin and lightly doped.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the typical doping and structural characteristics of the emitter and base regions in a transistor.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-118',
    type: 'statement',
    question: 'Statement I: In normal transistor operation, the emitter-base junction is reverse biased.\nStatement II: In normal transistor operation, the base-collector junction is reverse biased.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the emitter-base junction is forward biased, not reverse biased, in normal operation. Statement II correctly describes the base-collector junction bias.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-119',
    type: 'statement',
    question: 'Statement I: The fundamental current relation in a transistor is IE = IB + IC.\nStatement II: The common-base current gain α = IC/IE is typically slightly less than 1.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly state the fundamental transistor current relation and the definition/typical value of the common-base current gain.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-120',
    type: 'statement',
    question: 'Statement I: The common-emitter current gain β is defined as IC/IB.\nStatement II: β is typically a small value, usually less than 1.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — β is typically a large value, much greater than 1, not small.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-121',
    type: 'statement',
    question: 'Statement I: The relation between α and β for a transistor is β = α/(1-α).\nStatement II: The common-emitter configuration is preferred for amplifiers due to its high overall power gain.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the mathematical relationship between the two current gains and the practical preference for the common-emitter configuration.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-122',
    type: 'statement',
    question: 'Statement I: In the cutoff region, a transistor behaves like a closed switch.\nStatement II: In the saturation region, a transistor behaves like an open switch.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — the descriptions are swapped. Cutoff behaves like an open switch (no current), and saturation behaves like a closed switch (maximum current).',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-123',
    type: 'statement',
    question: 'Statement I: An AND gate outputs high only when all its inputs are high.\nStatement II: An OR gate outputs high if at least one of its inputs is high.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the fundamental truth-table behaviour of AND and OR gates.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-124',
    type: 'statement',
    question: 'Statement I: A NAND gate\'s output is identical to an AND gate\'s output.\nStatement II: A NOR gate\'s output is the inverse of an OR gate\'s output.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — a NAND gate\'s output is the inverse (not identical) of an AND gate\'s output. Statement II correctly describes the NOR gate\'s relationship to the OR gate.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-125',
    type: 'statement',
    question: 'Statement I: NAND and NOR gates are called universal gates because any other basic logic gate can be built using only one of these gate types.\nStatement II: Only AND and OR gates can be considered universal gates, not NAND and NOR.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — it is specifically NAND and NOR gates that are termed universal gates, not AND and OR.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-126',
    type: 'statement',
    question: 'Statement I: The Fermi level in an intrinsic semiconductor lies approximately in the middle of the forbidden gap.\nStatement II: In a p-type semiconductor, the Fermi level shifts closer to the conduction band.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — in a p-type semiconductor, the Fermi level shifts closer to the valence band, not the conduction band.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-127',
    type: 'statement',
    question: 'Statement I: Silicon has a larger band gap than germanium.\nStatement II: This larger band gap contributes to silicon devices generally having greater temperature stability.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe silicon\'s band gap relative to germanium and the resulting practical benefit for device stability.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-128',
    type: 'statement',
    question: 'Statement I: A bridge rectifier requires a centre-tapped transformer, similar to the two-diode full-wave rectifier design.\nStatement II: A bridge rectifier uses four diodes and does not necessarily require a centre-tapped transformer.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — a bridge rectifier does not require a centre-tapped transformer, unlike the two-diode design. Statement II correctly describes the bridge rectifier\'s configuration.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-129',
    type: 'statement',
    question: 'Statement I: Digital circuits operate using only two discrete voltage levels, 0 and 1.\nStatement II: Analog circuits operate using a continuous range of voltage values.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly distinguish the discrete nature of digital signals from the continuous nature of analog signals.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-130',
    type: 'statement',
    question: 'Statement I: The semiconductor electronics chapter connects band theory to practical devices like diodes, transistors, and logic gates.\nStatement II: Concepts of doping, junction behaviour, and carrier transport have no bearing on the practical function of these devices.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — these concepts are, in fact, fundamental to understanding how these devices actually function.',
    difficulty: 'medium'
  },

  // ==================== HOW-MANY (20) ====================
  {
    id: 'semiconductor-131',
    type: 'how-many',
    question: 'How many of the following statements about energy bands and material classification are correct?\n1. Conductors have overlapping or partially filled conduction bands.\n2. Insulators have a very large forbidden energy gap.\n3. Semiconductors have a forbidden energy gap of about 1 eV.\n4. All three types of materials have exactly the same forbidden energy gap.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts the distinguishing feature of forbidden gap size among these material classes.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-132',
    type: 'how-many',
    question: 'How many of the following statements about intrinsic semiconductors are correct?\n1. At 0 K, they behave like insulators.\n2. Number of electrons equals number of holes.\n3. Conductivity increases with temperature.\n4. Conductivity decreases with temperature, similar to metals.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts statement 3.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-133',
    type: 'how-many',
    question: 'How many of the following statements about doping are correct?\n1. Pentavalent doping produces n-type semiconductors.\n2. Trivalent doping produces p-type semiconductors.\n3. Doped semiconductors remain overall electrically neutral.\n4. Doping concentration is typically comparable to the number of semiconductor atoms present.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — doping concentration is typically very small compared to the number of semiconductor atoms.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-134',
    type: 'how-many',
    question: 'How many of the following statements about p-n junction formation are correct?\n1. Majority carriers diffuse across the junction due to a concentration gradient.\n2. A depletion region forms, containing fixed ionised dopant atoms.\n3. An internal electric field develops, opposing further diffusion.\n4. The depletion region contains a high concentration of free, mobile carriers.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the depletion region is essentially free of mobile carriers.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-135',
    type: 'how-many',
    question: 'How many of the following statements about forward and reverse bias are correct?\n1. Forward bias narrows the depletion region.\n2. Reverse bias widens the depletion region.\n3. Forward current increases roughly exponentially above the threshold voltage.\n4. Reverse saturation current is strongly dependent on the applied reverse voltage, below breakdown.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — reverse saturation current is nearly independent of applied reverse voltage, below breakdown.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-136',
    type: 'how-many',
    question: 'How many of the following statements about breakdown mechanisms are correct?\n1. Zener breakdown involves direct tunnelling of electrons through covalent bonds.\n2. Avalanche breakdown involves impact ionisation from accelerated minority carriers.\n3. Zener breakdown typically occurs in heavily doped junctions with narrow depletion regions.\n4. Avalanche breakdown typically occurs in heavily doped junctions with narrow depletion regions, identical to Zener breakdown conditions.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — avalanche breakdown typically occurs in lightly doped junctions with wider depletion regions, unlike Zener breakdown.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-137',
    type: 'how-many',
    question: 'How many of the following statements about special-purpose diodes are correct?\n1. A Zener diode is used as a voltage regulator.\n2. A photodiode is typically operated under reverse bias.\n3. An LED emits light when forward biased.\n4. A solar cell requires an external bias to generate power.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a solar cell does not require an external bias to generate power.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-138',
    type: 'how-many',
    question: 'How many of the following statements about LEDs are correct?\n1. LEDs emit light due to electron-hole recombination.\n2. The colour of emitted light depends on the band gap of the material.\n3. LEDs are typically made from direct band gap materials.\n4. Silicon is the preferred material for efficient LEDs, due to its direct band gap.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — silicon has an indirect band gap and is not suitable for efficient LED light emission.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-139',
    type: 'how-many',
    question: 'How many of the following statements about rectifier circuits are correct?\n1. A half-wave rectifier uses current from only one half-cycle of the AC input.\n2. A full-wave rectifier uses current from both half-cycles of the AC input.\n3. A full-wave rectifier generally has lower ripple than a half-wave rectifier.\n4. A capacitor filter increases ripple in the rectified output.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a capacitor filter decreases (smooths), not increases, ripple.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-140',
    type: 'how-many',
    question: 'How many of the following statements about transistor structure are correct?\n1. The emitter is heavily doped.\n2. The base is thin and lightly doped.\n3. The collector is generally the largest of the three regions.\n4. All three regions (emitter, base, collector) have identical doping levels.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the three regions have distinctly different doping levels, not identical ones.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-141',
    type: 'how-many',
    question: 'How many of the following statements about transistor biasing in normal (active) operation are correct?\n1. The emitter-base junction is forward biased.\n2. The base-collector junction is reverse biased.\n3. Both junctions are forward biased simultaneously.\n4. Both junctions are reverse biased simultaneously.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    explanation: 'Statements 1 and 2 correctly describe normal transistor bias conditions. Statements 3 and 4 are false, describing saturation and cutoff conditions respectively, not normal active operation.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-142',
    type: 'how-many',
    question: 'How many of the following statements about transistor current relations and gains are correct?\n1. IE = IB + IC\n2. α = IC/IE, typically slightly less than 1\n3. β = IC/IB, typically much greater than 1\n4. β = α × (1-α)',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the correct relation is β = α/(1-α), not α × (1-α).',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-143',
    type: 'how-many',
    question: 'How many of the following statements about transistor switching behaviour are correct?\n1. In cutoff, both junctions are reverse biased.\n2. In cutoff, essentially no current flows, similar to an open switch.\n3. In saturation, both junctions are forward biased.\n4. In saturation, essentially no current flows, similar to an open switch.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — saturation allows maximum current flow (like a closed switch), not essentially no current.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-144',
    type: 'how-many',
    question: 'How many of the following statements about logic gates are correct?\n1. AND gate output is high only when all inputs are high.\n2. OR gate output is high if at least one input is high.\n3. NOT gate output is the inverse of its single input.\n4. NAND gate output is identical to AND gate output.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a NAND gate\'s output is the inverse (not identical) of an AND gate\'s output.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-145',
    type: 'how-many',
    question: 'How many of the following statements about universal gates are correct?\n1. NAND gates are universal gates.\n2. NOR gates are universal gates.\n3. Any basic logic gate can be constructed using only NAND gates.\n4. Only AND and OR gates qualify as universal gates.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — it is specifically NAND and NOR gates (not AND and OR) that are termed universal gates.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-146',
    type: 'how-many',
    question: 'How many of the following statements about Fermi level position are correct?\n1. In an intrinsic semiconductor, the Fermi level lies approximately in the middle of the forbidden gap.\n2. In an n-type semiconductor, the Fermi level shifts closer to the conduction band.\n3. In a p-type semiconductor, the Fermi level shifts closer to the valence band.\n4. The Fermi level position is completely unaffected by doping type.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts the well-established shift in Fermi level position with doping type.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-147',
    type: 'how-many',
    question: 'How many of the following statements about silicon versus germanium are correct?\n1. Silicon has a larger band gap than germanium.\n2. Silicon devices generally have a higher threshold (knee) voltage than germanium devices.\n3. Silicon generally offers better temperature stability than germanium in devices.\n4. Germanium has a larger band gap than silicon.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts statement 1 — silicon, not germanium, has the larger band gap.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-148',
    type: 'how-many',
    question: 'How many of the following statements about rectifier and filter circuits are correct?\n1. A bridge rectifier uses four diodes.\n2. A bridge rectifier does not necessarily require a centre-tapped transformer.\n3. A capacitor filter smooths the rectified output by charging and discharging cyclically.\n4. A bridge rectifier can only rectify one half-cycle of the AC input, similar to a half-wave rectifier.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a bridge rectifier is a full-wave rectifier, using both half-cycles of the AC input, not just one.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-149',
    type: 'how-many',
    question: 'How many of the following statements about the practical applications of semiconductor devices are correct?\n1. Diodes are used for rectification.\n2. Transistors can be used for amplification and switching.\n3. Logic gates form the basis of digital electronic circuits.\n4. Semiconductor devices have no practical relevance to modern electronics.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts the well-established, foundational role of semiconductor devices in modern electronics.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-150',
    type: 'how-many',
    question: 'How many of the following statements correctly summarise key themes of the semiconductor electronics chapter?\n1. Energy band theory explains the distinction between conductors, insulators, and semiconductors.\n2. Doping (n-type and p-type) and p-n junction behaviour underlie diode operation.\n3. Transistor structure and biasing enable amplification and switching applications.\n4. Logic gates, built from semiconductor devices, form the basis of digital circuits.\n5. Semiconductor devices behave identically regardless of biasing or doping conditions.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, 3, and 4 correctly summarise major themes of the chapter. Statement 5 is false — semiconductor device behaviour depends critically on biasing and doping conditions, which is central to the entire chapter\'s content.',
    difficulty: 'medium'
  }
];
=======
export const SEMICONDUCTORS_DEVICES = [
  // ==================== MCQ (70) ====================
  {
    id: 'semiconductor-1',
    type: 'mcq',
    question: 'According to the energy band theory of solids, the range of energy values that electrons in a solid can occupy (arising from overlapping/splitting of discrete atomic energy levels) is called a',
    options: ['forbidden gap', 'energy band', 'depletion region', 'Fermi level'],
    correctIndex: 1,
    explanation: 'When a large number of atoms come close together to form a solid, their discrete energy levels split and overlap, forming continuous ranges of allowed energy called energy bands.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-2',
    type: 'mcq',
    question: 'The energy band that is completely or partially filled with valence electrons, generally not directly involved in conduction, is called the',
    options: ['conduction band', 'valence band', 'forbidden gap', 'depletion band'],
    correctIndex: 1,
    explanation: 'The valence band contains the energy levels occupied by the valence electrons of the atoms in the solid.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-3',
    type: 'mcq',
    question: 'The energy band above the valence band, in which electrons must be present to participate freely in electrical conduction, is called the',
    options: ['valence band', 'conduction band', 'forbidden gap', 'depletion region'],
    correctIndex: 1,
    explanation: 'The conduction band is the energy band in which electrons are free to move and contribute to electrical conduction.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-4',
    type: 'mcq',
    question: 'The energy gap between the valence band and the conduction band, in which no electron states are normally allowed, is called the',
    options: ['depletion region', 'forbidden energy gap', 'Fermi band', 'donor level'],
    correctIndex: 1,
    explanation: 'The forbidden energy gap (band gap) is the range of energies between the valence and conduction bands where no allowed electron states exist.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-5',
    type: 'mcq',
    question: 'In metals (conductors), the classification based on band theory typically shows',
    options: [
      'a very large forbidden energy gap, preventing any conduction',
      'either an overlap between the valence and conduction bands, or a partially filled conduction band, allowing free movement of electrons',
      'a completely empty valence band',
      'no valence band at all'
    ],
    correctIndex: 1,
    explanation: 'In metals, the conduction and valence bands typically overlap, or the conduction band is partially filled, providing a large number of free electrons readily available for conduction.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-6',
    type: 'mcq',
    question: 'In insulators, the forbidden energy gap between the valence and conduction bands is generally',
    options: [
      'very small (close to zero)',
      'very large (typically greater than about 3 eV), making it extremely difficult for electrons to jump into the conduction band',
      'exactly zero, identical to a metal',
      'negative in value'
    ],
    correctIndex: 1,
    explanation: 'Insulators have a large forbidden energy gap, typically greater than about 3 eV, making it very difficult for valence electrons to acquire enough energy to reach the conduction band.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-7',
    type: 'mcq',
    question: 'In semiconductors, the forbidden energy gap is generally',
    options: [
      'as large as that of typical insulators',
      'small (of the order of about 1 eV), allowing some electrons to be thermally excited into the conduction band at room temperature',
      'exactly zero, like a metal',
      'infinite'
    ],
    correctIndex: 1,
    explanation: 'Semiconductors have a relatively small forbidden energy gap (around 1 eV for common materials like silicon and germanium), allowing a modest number of electrons to be thermally excited across the gap at room temperature.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-8',
    type: 'mcq',
    question: 'At absolute zero temperature (0 K), a pure (intrinsic) semiconductor behaves essentially like',
    options: [
      'a perfect conductor',
      'an insulator, since no electrons have enough thermal energy to jump the forbidden gap',
      'a superconductor',
      'a material with infinite conductivity'
    ],
    correctIndex: 1,
    explanation: 'At absolute zero, there is no thermal energy available to excite electrons across the forbidden gap, so an intrinsic semiconductor behaves like an insulator at this temperature.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-9',
    type: 'mcq',
    question: 'In an intrinsic (pure) semiconductor, the number of free electrons in the conduction band is',
    options: [
      'always much greater than the number of holes in the valence band',
      'always much less than the number of holes in the valence band',
      'exactly equal to the number of holes in the valence band, since each thermally excited electron leaves behind a corresponding hole',
      'always exactly zero'
    ],
    correctIndex: 2,
    explanation: 'In an intrinsic semiconductor, each electron thermally excited into the conduction band leaves behind a hole in the valence band, so the number of electrons equals the number of holes.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-10',
    type: 'mcq',
    question: 'As temperature increases, the electrical conductivity of an intrinsic semiconductor generally',
    options: [
      'decreases, similar to the behaviour of metals',
      'increases, since more electron-hole pairs are generated thermally at higher temperature',
      'remains completely unchanged',
      'becomes exactly zero'
    ],
    correctIndex: 1,
    explanation: 'Higher temperature provides more thermal energy for electron-hole pair generation, increasing the number of charge carriers and hence the conductivity of an intrinsic semiconductor.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-11',
    type: 'mcq',
    question: 'Unlike semiconductors, the electrical conductivity of metals generally',
    options: [
      'increases with increasing temperature',
      'decreases with increasing temperature, mainly due to increased lattice vibrations scattering the charge carriers',
      'is unaffected by any change in temperature',
      'behaves in exactly the same way as a semiconductor'
    ],
    correctIndex: 1,
    explanation: 'In metals, the number of free electrons remains essentially constant with temperature, but increased lattice vibrations at higher temperatures scatter these electrons more, decreasing conductivity — opposite to the behaviour seen in semiconductors.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-12',
    type: 'mcq',
    question: 'Doping a semiconductor with a pentavalent impurity (such as phosphorus or arsenic) produces a',
    options: [
      'p-type semiconductor, with holes as majority carriers',
      'n-type semiconductor, with electrons as majority carriers',
      'purely intrinsic semiconductor, unaffected by the impurity',
      'perfect insulator'
    ],
    correctIndex: 1,
    explanation: 'A pentavalent (donor) impurity contributes an extra electron beyond what is needed for covalent bonding, creating an n-type semiconductor with electrons as the majority charge carriers.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-13',
    type: 'mcq',
    question: 'Doping a semiconductor with a trivalent impurity (such as boron or gallium) produces a',
    options: [
      'n-type semiconductor, with electrons as majority carriers',
      'p-type semiconductor, with holes as majority carriers',
      'purely intrinsic semiconductor, unaffected by the impurity',
      'perfect conductor'
    ],
    correctIndex: 1,
    explanation: 'A trivalent (acceptor) impurity has one fewer electron than needed for covalent bonding, creating a hole (missing bond) and resulting in a p-type semiconductor with holes as the majority carriers.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-14',
    type: 'mcq',
    question: 'In an n-type semiconductor, the majority and minority charge carriers are, respectively,',
    options: [
      'holes and electrons',
      'electrons and holes',
      'protons and electrons',
      'only electrons, with no minority carriers at all'
    ],
    correctIndex: 1,
    explanation: 'In an n-type semiconductor, electrons (contributed by the donor impurity) are the majority carriers, while holes are present only as minority carriers.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-15',
    type: 'mcq',
    question: 'In a p-type semiconductor, the majority and minority charge carriers are, respectively,',
    options: [
      'electrons and holes',
      'holes and electrons',
      'protons and neutrons',
      'only holes, with no minority carriers at all'
    ],
    correctIndex: 1,
    explanation: 'In a p-type semiconductor, holes (created by the acceptor impurity) are the majority carriers, while electrons are present only as minority carriers.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-16',
    type: 'mcq',
    question: 'Despite having an excess of one type of charge carrier (majority carriers), an n-type or p-type doped semiconductor is overall',
    options: [
      'positively charged, if it is n-type',
      'electrically neutral, since the number of majority carriers is balanced by the fixed charge of the ionised dopant atoms',
      'negatively charged, if it is p-type',
      'always highly charged, regardless of type'
    ],
    correctIndex: 1,
    explanation: 'Even though one type of carrier dominates, a doped semiconductor remains overall electrically neutral, since the mobile majority carriers are balanced by the immobile, oppositely charged ionised dopant atoms.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-17',
    type: 'mcq',
    question: 'The typical concentration of dopant atoms added to a semiconductor during doping is',
    options: [
      'roughly equal to the number of semiconductor atoms present',
      'very small (often around 1 dopant atom per 10^6 to 10^8 semiconductor atoms), yet sufficient to dramatically increase conductivity',
      'far greater than the number of semiconductor atoms present',
      'completely irrelevant to the resulting conductivity'
    ],
    correctIndex: 1,
    explanation: 'Doping typically introduces only a very small proportion of impurity atoms relative to the semiconductor atoms, yet this small addition dramatically increases the conductivity compared to the pure (intrinsic) material.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-18',
    type: 'mcq',
    question: 'The formation of a p-n junction, when p-type and n-type semiconductor materials are joined together, is initially driven by',
    options: [
      'an externally applied voltage',
      'diffusion of majority carriers across the junction, from the region of higher concentration to the region of lower concentration',
      'a magnetic field applied across the junction',
      'gravitational forces between the two materials'
    ],
    correctIndex: 1,
    explanation: 'When p-type and n-type materials are joined, majority carriers (electrons from the n-side, holes from the p-side) diffuse across the junction due to the concentration gradient, initiating the formation of the junction\'s characteristic properties.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-19',
    type: 'mcq',
    question: 'The diffusion of majority carriers across a newly formed p-n junction leaves behind a region depleted of free mobile charge carriers, known as the',
    options: ['conduction band', 'depletion region', 'valence band', 'saturation region'],
    correctIndex: 1,
    explanation: 'As majority carriers diffuse across the junction and recombine, a region near the junction becomes depleted of free mobile charge carriers, containing only fixed, immobile ionised dopant atoms — this is called the depletion region.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-20',
    type: 'mcq',
    question: 'The depletion region of a p-n junction contains',
    options: [
      'a high concentration of free, mobile electrons and holes',
      'fixed, immobile ionised dopant atoms, but essentially no free mobile charge carriers',
      'no charge at all, of any kind',
      'only neutral, un-ionised dopant atoms'
    ],
    correctIndex: 1,
    explanation: 'The depletion region consists of immobile, ionised dopant atoms (positive ions on the n-side, negative ions on the p-side) left behind after the mobile carriers have diffused away and recombined; it is essentially free of mobile charge carriers.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-21',
    type: 'mcq',
    question: 'The internal electric field created within the depletion region of a p-n junction points',
    options: [
      'from the p-side towards the n-side',
      'from the n-side towards the p-side, opposing further diffusion of majority carriers across the junction',
      'parallel to the junction plane, with no component across it',
      'in a random, undefined direction'
    ],
    correctIndex: 1,
    explanation: 'The internal electric field within the depletion region points from the positively charged ions on the n-side towards the negatively charged ions on the p-side, opposing further diffusion of majority carriers and eventually establishing equilibrium.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-22',
    type: 'mcq',
    question: 'The potential difference that develops across the depletion region of an unbiased p-n junction, opposing further net diffusion of majority carriers, is called the',
    options: ['forward voltage', 'barrier (built-in) potential', 'breakdown voltage', 'Zener voltage'],
    correctIndex: 1,
    explanation: 'The barrier (or built-in) potential is the potential difference that develops across the depletion region, arising from the internal electric field, and it opposes further net diffusion of majority carriers at equilibrium.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-23',
    type: 'mcq',
    question: 'When a p-n junction diode is forward biased (p-side connected to the positive terminal, n-side to the negative terminal), the depletion region generally',
    options: [
      'widens, and current flow is strongly opposed',
      'narrows, reducing the barrier potential and allowing majority carrier current to flow relatively easily',
      'remains exactly the same width as in the unbiased state',
      'disappears entirely, along with the semiconductor material itself'
    ],
    correctIndex: 1,
    explanation: 'Forward bias opposes the internal built-in field, narrowing the depletion region and lowering the barrier potential, allowing majority carriers to flow across the junction relatively easily.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-24',
    type: 'mcq',
    question: 'When a p-n junction diode is reverse biased (p-side connected to the negative terminal, n-side to the positive terminal), the depletion region generally',
    options: [
      'narrows significantly',
      'widens, increasing the barrier potential and allowing only a very small reverse saturation current to flow (due to minority carriers)',
      'remains exactly the same as in forward bias',
      'becomes filled with majority carriers'
    ],
    correctIndex: 1,
    explanation: 'Reverse bias reinforces the internal field, widening the depletion region and increasing the barrier potential, so only a small reverse saturation current (carried by minority carriers) flows across the junction.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-25',
    type: 'mcq',
    question: 'The forward current through a p-n junction diode, once the applied forward voltage exceeds the threshold (knee) voltage, generally',
    options: [
      'remains constant, regardless of further increases in voltage',
      'increases rapidly (approximately exponentially) with further increases in forward voltage',
      'decreases as voltage increases',
      'becomes exactly zero'
    ],
    correctIndex: 1,
    explanation: 'Once the forward voltage exceeds the threshold (knee) voltage, the forward current increases rapidly, approximately following an exponential relationship with applied voltage.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-26',
    type: 'mcq',
    question: 'The typical threshold (knee) voltage for a silicon p-n junction diode to begin conducting significantly in forward bias is approximately',
    options: ['0.1 V', '0.7 V', '5 V', '50 V'],
    correctIndex: 1,
    explanation: 'A silicon diode typically requires a forward voltage of around 0.7 V before it begins conducting a significant forward current.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-27',
    type: 'mcq',
    question: 'Under reverse bias conditions (below breakdown), the reverse current through a p-n junction diode is generally',
    options: [
      'very large and strongly dependent on the exact reverse voltage applied',
      'very small and nearly independent of the applied reverse voltage, until breakdown occurs',
      'exactly zero under all reverse bias conditions',
      'larger than the typical forward current'
    ],
    correctIndex: 1,
    explanation: 'The reverse saturation current, carried by minority carriers, remains very small and is nearly independent of the exact applied reverse voltage, until the breakdown voltage is reached.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-28',
    type: 'mcq',
    question: 'Beyond a certain reverse voltage, the reverse current through a p-n junction diode increases sharply; this phenomenon is called',
    options: ['forward conduction', 'breakdown', 'saturation biasing', 'thermal runaway of the forward current'],
    correctIndex: 1,
    explanation: 'Beyond the breakdown voltage, the reverse current increases sharply due to mechanisms such as the Zener effect or avalanche effect, a phenomenon called breakdown.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-29',
    type: 'mcq',
    question: 'Zener breakdown, typically occurring at heavily doped junctions with narrow depletion regions, is caused by',
    options: [
      'a strong electric field directly breaking covalent bonds (tunnelling of electrons), rather than a multiplying collision process',
      'impact ionisation caused by accelerated minority carriers colliding with lattice atoms',
      'an increase in temperature alone, with no relation to electric field strength',
      'a decrease in the applied reverse voltage'
    ],
    correctIndex: 0,
    explanation: 'Zener breakdown occurs when a very strong electric field across a narrow depletion region directly breaks covalent bonds (a quantum mechanical tunnelling process), typically at heavily doped junctions.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-30',
    type: 'mcq',
    question: 'Avalanche breakdown, typically occurring at lightly doped junctions with wider depletion regions, is caused by',
    options: [
      'direct tunnelling of electrons through the depletion region',
      'impact ionisation, in which accelerated minority carriers collide with lattice atoms, generating additional electron-hole pairs in a multiplying process',
      'a decrease in the applied reverse voltage below a certain threshold',
      'the complete absence of any electric field in the depletion region'
    ],
    correctIndex: 1,
    explanation: 'Avalanche breakdown occurs through impact ionisation, where accelerated minority carriers gain enough energy to knock additional electrons free upon collision, creating a rapidly multiplying cascade of charge carriers.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-31',
    type: 'mcq',
    question: 'A Zener diode is a specially designed p-n junction diode that is typically operated in the',
    options: [
      'forward bias region only',
      'reverse breakdown region, exploiting the nearly constant voltage across it over a range of currents',
      'zero bias (unbiased) state only',
      'region where it acts as a light-emitting device'
    ],
    correctIndex: 1,
    explanation: 'A Zener diode is specifically designed to operate reliably in the reverse breakdown region, where the voltage across it remains nearly constant over a wide range of currents, making it useful for voltage regulation.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-32',
    type: 'mcq',
    question: 'A Zener diode is commonly used in circuits as a',
    options: [
      'light-emitting device',
      'voltage regulator, maintaining a nearly constant output voltage despite variations in input voltage or load current',
      'photodetector',
      'high-power rectifier only'
    ],
    correctIndex: 1,
    explanation: 'Since the voltage across a Zener diode remains nearly constant in its breakdown region, it is widely used as a voltage regulator in electronic circuits.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-33',
    type: 'mcq',
    question: 'A photodiode is a p-n junction diode that is typically operated under',
    options: [
      'forward bias, to emit light',
      'reverse bias, generating a photocurrent proportional to the intensity of light incident on the junction',
      'zero bias only, with no external circuit connection possible',
      'extremely high forward current conditions only'
    ],
    correctIndex: 1,
    explanation: 'A photodiode is typically operated under reverse bias, where incident light generates additional electron-hole pairs, producing a photocurrent proportional to the light intensity, making it useful as a light sensor.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-34',
    type: 'mcq',
    question: 'An LED (Light Emitting Diode) operates under',
    options: [
      'reverse bias, emitting light due to minority carrier generation',
      'forward bias, emitting light due to the recombination of injected electrons and holes at the junction',
      'zero bias only',
      'no bias, generating light purely from ambient heat'
    ],
    correctIndex: 1,
    explanation: 'An LED is forward biased, and the resulting recombination of electrons and holes at (or near) the junction releases energy in the form of emitted light (photons).',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-35',
    type: 'mcq',
    question: 'The colour of light emitted by an LED depends primarily on the',
    options: [
      'physical size of the LED package',
      'band gap of the semiconductor material used, since this determines the energy (and hence wavelength) of the emitted photons',
      'colour of the wires connecting the LED to the circuit',
      'ambient room temperature'
    ],
    correctIndex: 1,
    explanation: 'Since the energy of the photon emitted upon electron-hole recombination is approximately equal to the semiconductor\'s band gap, the specific band gap of the material used directly determines the colour (wavelength) of light emitted by the LED.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-36',
    type: 'mcq',
    question: 'LEDs are typically fabricated from direct band gap semiconductor materials (such as GaAs, GaP, or GaAsP) rather than materials like silicon, mainly because',
    options: [
      'silicon is far too expensive to use in electronic devices',
      'direct band gap materials allow the recombination energy to be efficiently released as light, whereas materials like silicon primarily release this energy as heat',
      'silicon cannot be doped to form a p-n junction',
      'direct band gap materials cannot conduct electricity at all'
    ],
    correctIndex: 1,
    explanation: 'In direct band gap semiconductors, electron-hole recombination can efficiently release energy as light (photons), whereas in indirect band gap materials like silicon, this recombination energy is predominantly released as heat rather than light, making silicon unsuitable for efficient LEDs.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-37',
    type: 'mcq',
    question: 'A solar cell converts light energy directly into electrical energy through a phenomenon known as the',
    options: ['photoelectric effect on a metal surface', 'photovoltaic effect', 'thermionic effect', 'Zener effect'],
    correctIndex: 1,
    explanation: 'A solar cell exploits the photovoltaic effect, in which absorbed light generates a voltage/current across a p-n junction without requiring any external bias.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-38',
    type: 'mcq',
    question: 'Unlike a photodiode, which requires an external reverse bias to function as a light detector, a solar cell',
    options: [
      'also requires an external bias, identical to a photodiode',
      'requires no external bias at all, generating its own emf directly from absorbed light energy',
      'must be forward biased at all times to work',
      'cannot generate any current, regardless of the light intensity'
    ],
    correctIndex: 1,
    explanation: 'A solar cell is designed to generate its own voltage and current directly from absorbed sunlight, without requiring any external applied bias, unlike a photodiode which is typically operated under reverse bias.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-39',
    type: 'mcq',
    question: 'A half-wave rectifier circuit, using a single diode, produces an output current that flows',
    options: [
      'during both the positive and negative half-cycles of the input AC signal',
      'only during one half-cycle (say, the positive half-cycle) of the input AC signal, with no output during the other half-cycle',
      'continuously, regardless of the input AC signal',
      'in the opposite direction to the input current at all times'
    ],
    correctIndex: 1,
    explanation: 'A half-wave rectifier allows current to flow through the load only during one half-cycle of the input AC waveform (when the diode is forward biased), blocking current during the other half-cycle.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-40',
    type: 'mcq',
    question: 'A full-wave rectifier circuit, in contrast to a half-wave rectifier, produces an output current that flows',
    options: [
      'only during one half-cycle of the input AC signal, just like a half-wave rectifier',
      'during both halves of the input AC cycle, utilising the entire input waveform and giving a higher average output with lower ripple',
      'in an alternating direction, matching the input AC signal exactly',
      'never at all, regardless of the input signal'
    ],
    correctIndex: 1,
    explanation: 'A full-wave rectifier is designed (using either a centre-tapped transformer with two diodes, or a bridge configuration with four diodes) to utilise both halves of the input AC cycle, producing a higher average output voltage with lower ripple than a half-wave rectifier.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-41',
    type: 'mcq',
    question: 'A capacitor filter is often added after a rectifier circuit mainly to',
    options: [
      'increase the ripple in the output voltage',
      'smooth out the pulsating rectified output into a more steady, constant DC voltage, by charging during peaks and discharging through the load during troughs',
      'convert the DC output back into AC',
      'increase the frequency of the output signal'
    ],
    correctIndex: 1,
    explanation: 'A capacitor filter charges up during the peaks of the pulsating rectified waveform and discharges slowly through the load during the troughs, smoothing the output into a more constant DC voltage.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-42',
    type: 'mcq',
    question: 'A junction transistor (BJT) is a three-terminal semiconductor device consisting of three regions, named',
    options: [
      'anode, cathode, and gate',
      'emitter, base, and collector',
      'source, drain, and channel',
      'positive terminal, negative terminal, and neutral terminal'
    ],
    correctIndex: 1,
    explanation: 'A bipolar junction transistor (BJT) consists of three regions: the emitter, base, and collector, each with a specific role in the device\'s operation.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-43',
    type: 'mcq',
    question: 'In a BJT, the emitter region is typically',
    options: [
      'lightly doped and very thin, compared to the other two regions',
      'heavily doped, since it must supply a large number of majority carriers into the base region',
      'undoped, remaining a purely intrinsic semiconductor',
      'the largest of the three regions in physical size'
    ],
    correctIndex: 1,
    explanation: 'The emitter region is heavily doped to supply a large number of majority carriers, which are injected into the thin base region during transistor operation.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-44',
    type: 'mcq',
    question: 'In a BJT, the base region is typically',
    options: [
      'heavily doped and physically the largest region',
      'very thin and only lightly doped, allowing most carriers injected from the emitter to pass through to the collector with minimal recombination',
      'exactly the same doping level and thickness as the emitter',
      'made of a completely different material from the emitter and collector'
    ],
    correctIndex: 1,
    explanation: 'The base region is deliberately made very thin and lightly doped, so that most of the carriers injected from the emitter pass through to the collector, with only a small fraction recombining within the base.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-45',
    type: 'mcq',
    question: 'For a transistor to function in its normal (active) mode of operation, the emitter-base junction is typically',
    options: [
      'reverse biased, while the base-collector junction is forward biased',
      'forward biased, while the base-collector junction is reverse biased',
      'both junctions forward biased simultaneously',
      'both junctions reverse biased simultaneously'
    ],
    correctIndex: 1,
    explanation: 'In normal (active) transistor operation, the emitter-base junction is forward biased (to inject carriers into the base), while the base-collector junction is reverse biased (to sweep these carriers into the collector).',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-46',
    type: 'mcq',
    question: 'In a transistor, the fundamental relationship between emitter current (IE), base current (IB), and collector current (IC) is given by',
    options: ['IE = IB - IC', 'IE = IB + IC', 'IE = IB × IC', 'IE = IC - IB'],
    correctIndex: 1,
    explanation: 'By conservation of current (Kirchhoff\'s current law applied to the transistor), the total emitter current equals the sum of the base and collector currents: IE = IB + IC.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-47',
    type: 'mcq',
    question: 'The common-base current gain (α) of a transistor is defined as the ratio',
    options: ['IC/IB', 'IC/IE, and its value is typically slightly less than 1', 'IB/IE', 'IE/IC'],
    correctIndex: 1,
    explanation: 'Common-base current gain α is defined as IC/IE, and since a small fraction of injected carriers recombine in the base rather than reaching the collector, its value is always slightly less than 1.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-48',
    type: 'mcq',
    question: 'The common-emitter current gain (β) of a transistor is defined as the ratio',
    options: ['IC/IE', 'IC/IB, and its value is typically large (much greater than 1)', 'IB/IC', 'IE/IB'],
    correctIndex: 1,
    explanation: 'Common-emitter current gain β is defined as IC/IB, and since base current is typically much smaller than collector current, its value is usually large, providing significant current amplification.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-49',
    type: 'mcq',
    question: 'The relationship between the common-base current gain (α) and the common-emitter current gain (β) of a transistor is given by',
    options: ['β = α/(1-α)', 'β = α + 1', 'β = 1/α', 'β = α × (1-α)'],
    correctIndex: 0,
    explanation: 'The relationship between the two current gains, derived from their definitions and the fundamental current relation IE = IB + IC, is β = α/(1-α).',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-50',
    type: 'mcq',
    question: 'The common-emitter (CE) configuration is the most widely used transistor configuration for amplification mainly because it provides',
    options: [
      'no current or voltage gain at all',
      'appreciable current gain as well as voltage gain, giving a high overall power gain',
      'only voltage gain, with current gain always less than 1',
      'a configuration that cannot amplify any signal'
    ],
    correctIndex: 1,
    explanation: 'The common-emitter configuration offers both significant current gain and voltage gain, resulting in a high power gain, which is why it is the most commonly used configuration for amplifier circuits.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-51',
    type: 'mcq',
    question: 'When used as an amplifier, a transistor exploits the fact that',
    options: [
      'small changes in base current produce correspondingly large changes in collector current',
      'small changes in collector current have no effect on the base current whatsoever',
      'the emitter current is always exactly zero',
      'amplification requires no external power supply at all'
    ],
    correctIndex: 0,
    explanation: 'In amplifier applications, a small variation in the base current (input signal) produces a much larger corresponding variation in the collector current (output), achieving current amplification.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-52',
    type: 'mcq',
    question: 'When a transistor is used as a switch, the "off" (cutoff) state corresponds to',
    options: [
      'both the emitter-base and base-collector junctions being forward biased, allowing maximum current to flow',
      'both the emitter-base and base-collector junctions being reverse biased, so essentially no current flows, similar to an open switch',
      'only the emitter-base junction being forward biased',
      'the transistor generating its own current spontaneously, with no external bias needed'
    ],
    correctIndex: 1,
    explanation: 'In the cutoff region, both transistor junctions are reverse biased, allowing essentially no current to flow through the device, analogous to an open switch.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-53',
    type: 'mcq',
    question: 'When a transistor is used as a switch, the "on" (saturation) state corresponds to',
    options: [
      'both junctions being reverse biased',
      'both the emitter-base and base-collector junctions being forward biased, allowing maximum current to flow through the transistor, similar to a closed switch',
      'only the base-collector junction being reverse biased, with no other change',
      'the transistor having zero collector current under all conditions'
    ],
    correctIndex: 1,
    explanation: 'In the saturation region, both junctions are forward biased, allowing the maximum possible current to flow through the transistor, analogous to a closed switch.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-54',
    type: 'mcq',
    question: 'A logic gate that produces a high (1) output only when all of its inputs are high (1) is called an',
    options: ['OR gate', 'AND gate', 'NOT gate', 'NOR gate'],
    correctIndex: 1,
    explanation: 'An AND gate outputs a high (1) signal only when every one of its inputs is high (1); if any input is low (0), the output is low.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-55',
    type: 'mcq',
    question: 'A logic gate that produces a high (1) output if at least one of its inputs is high (1) is called an',
    options: ['AND gate', 'OR gate', 'NAND gate', 'NOT gate'],
    correctIndex: 1,
    explanation: 'An OR gate outputs a high (1) signal if any one (or more) of its inputs is high (1), and outputs low (0) only when all inputs are low.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-56',
    type: 'mcq',
    question: 'A logic gate with a single input that produces an output that is the inverse (opposite) of its input is called a',
    options: ['AND gate', 'OR gate', 'NOT gate', 'NAND gate'],
    correctIndex: 2,
    explanation: 'A NOT gate (inverter) has a single input and produces an output that is the logical opposite (inverse) of that input.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-57',
    type: 'mcq',
    question: 'A NAND gate produces an output that is',
    options: [
      'identical to an AND gate\'s output',
      'the inverse (complement) of an AND gate\'s output',
      'identical to an OR gate\'s output',
      'always exactly zero, regardless of input'
    ],
    correctIndex: 1,
    explanation: 'A NAND gate is functionally equivalent to an AND gate followed by a NOT gate, so its output is the logical inverse of the corresponding AND gate\'s output.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-58',
    type: 'mcq',
    question: 'A NOR gate produces an output that is',
    options: [
      'identical to an OR gate\'s output',
      'the inverse (complement) of an OR gate\'s output',
      'identical to an AND gate\'s output',
      'always exactly one, regardless of input'
    ],
    correctIndex: 1,
    explanation: 'A NOR gate is functionally equivalent to an OR gate followed by a NOT gate, so its output is the logical inverse of the corresponding OR gate\'s output.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-59',
    type: 'mcq',
    question: 'NAND and NOR gates are often referred to as "universal gates" because',
    options: [
      'they cannot be used to construct any other type of logic gate',
      'any other basic logic gate (AND, OR, NOT) can be constructed using only NAND gates alone, or only NOR gates alone',
      'they are the only logic gates that actually exist',
      'they require no electrical power to operate'
    ],
    correctIndex: 1,
    explanation: 'NAND and NOR gates are termed universal gates because any other logic function (AND, OR, NOT, etc.) can be implemented using combinations of only NAND gates, or alternatively, only NOR gates.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-60',
    type: 'mcq',
    question: 'In terms of the energy band picture, doping a semiconductor with a donor (pentavalent) impurity creates a new energy level',
    options: [
      'deep within the valence band',
      'close to the conduction band, allowing donor electrons to be easily excited into the conduction band',
      'exactly in the middle of the forbidden gap, identical to the intrinsic Fermi level',
      'far above the conduction band, with no relevance to conduction'
    ],
    correctIndex: 1,
    explanation: 'A donor impurity introduces a discrete energy level located close to the conduction band, from which the extra donor electron can be easily excited into the conduction band, even at relatively low thermal energies.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-61',
    type: 'mcq',
    question: 'In terms of the energy band picture, doping a semiconductor with an acceptor (trivalent) impurity creates a new energy level',
    options: [
      'close to the conduction band',
      'close to the valence band, allowing electrons from the valence band to be easily excited into this level, leaving behind a hole',
      'exactly in the middle of the forbidden gap',
      'far below the valence band, with no relevance to conduction'
    ],
    correctIndex: 1,
    explanation: 'An acceptor impurity introduces a discrete energy level located close to the valence band, allowing valence band electrons to be readily excited into this level, leaving behind mobile holes in the valence band.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-62',
    type: 'mcq',
    question: 'The Fermi level in an intrinsic semiconductor lies approximately',
    options: [
      'at the top of the conduction band',
      'in the middle of the forbidden energy gap',
      'at the bottom of the valence band',
      'far outside the forbidden gap entirely'
    ],
    correctIndex: 1,
    explanation: 'For an intrinsic semiconductor, since electron and hole concentrations are equal, the Fermi level lies approximately midway within the forbidden energy gap.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-63',
    type: 'mcq',
    question: 'In an n-type semiconductor, compared to the intrinsic case, the Fermi level generally shifts',
    options: [
      'closer to the conduction band, reflecting the higher concentration of electrons',
      'closer to the valence band',
      'to exactly the middle of the gap, identical to the intrinsic case',
      'completely outside the semiconductor material'
    ],
    correctIndex: 0,
    explanation: 'Since n-type doping increases the concentration of electrons (relative to holes), the Fermi level shifts upward, closer to the conduction band, compared to its position in an intrinsic semiconductor.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-64',
    type: 'mcq',
    question: 'In a p-type semiconductor, compared to the intrinsic case, the Fermi level generally shifts',
    options: [
      'closer to the conduction band',
      'closer to the valence band, reflecting the higher concentration of holes',
      'to exactly the middle of the gap, identical to the intrinsic case',
      'completely outside the semiconductor material'
    ],
    correctIndex: 1,
    explanation: 'Since p-type doping increases the concentration of holes (relative to electrons), the Fermi level shifts downward, closer to the valence band, compared to its position in an intrinsic semiconductor.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-65',
    type: 'mcq',
    question: 'Silicon and germanium are the two most commonly used semiconductor materials, and silicon generally has a',
    options: [
      'smaller band gap than germanium',
      'larger band gap than germanium, contributing to its higher threshold voltage and greater temperature stability in devices',
      'exactly the same band gap as germanium',
      'zero band gap, similar to a metal'
    ],
    correctIndex: 1,
    explanation: 'Silicon has a larger band gap (about 1.1 eV) compared to germanium (about 0.7 eV), contributing to silicon devices having a higher threshold (knee) voltage and generally better temperature stability.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-66',
    type: 'mcq',
    question: 'A bridge rectifier circuit, a common full-wave rectifier configuration, typically uses',
    options: [
      'a single diode',
      'four diodes arranged in a specific bridge configuration, without necessarily requiring a centre-tapped transformer',
      'two diodes and no transformer at all',
      'no diodes whatsoever'
    ],
    correctIndex: 1,
    explanation: 'A bridge rectifier uses four diodes arranged in a bridge configuration to achieve full-wave rectification, without requiring the centre-tapped transformer needed for the two-diode full-wave rectifier design.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-67',
    type: 'mcq',
    question: 'The output of a full-wave rectifier, compared to a half-wave rectifier (with a similar input signal), generally has',
    options: [
      'a lower average output voltage and higher ripple',
      'a higher average output voltage and lower ripple, due to utilising both halves of the AC cycle',
      'exactly the same average output voltage and ripple in every respect',
      'no output at all under any conditions'
    ],
    correctIndex: 1,
    explanation: 'Since a full-wave rectifier makes use of both halves of the AC input cycle, it produces a higher average output voltage and a smoother output waveform (lower ripple) compared to a half-wave rectifier.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-68',
    type: 'mcq',
    question: 'Digital electronic circuits, including logic gates, typically operate using signals that represent',
    options: [
      'a continuous range of infinitely many possible voltage values',
      'only two discrete voltage levels, conventionally labelled as 0 (low) and 1 (high)',
      'exactly three discrete voltage levels',
      'purely analog waveforms with no discrete levels at all'
    ],
    correctIndex: 1,
    explanation: 'Digital circuits, including logic gates, operate using binary signals, represented by only two discrete voltage levels: a low state (0) and a high state (1).',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-69',
    type: 'mcq',
    question: 'Semiconductor devices such as diodes and transistors form the basis of modern electronics mainly because they allow',
    options: [
      'no control over the flow of electric current whatsoever',
      'precise and versatile control over the flow of electric current, enabling functions like rectification, amplification, and switching',
      'only the generation of heat, with no other electrical function',
      'the complete elimination of the need for any electric current in circuits'
    ],
    correctIndex: 1,
    explanation: 'Semiconductor devices provide precise, controllable behaviour regarding current flow, enabling essential electronic functions such as rectification (diodes), amplification (transistors), and switching (transistors, logic gates).',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-70',
    type: 'mcq',
    question: 'Overall, the chapter on semiconductor electronics, as emphasised in NCERT, integrates the fundamental band theory of solids with',
    options: [
      'the behaviour of intrinsic and extrinsic semiconductors, the physics and applications of the p-n junction diode (rectification, Zener regulation, photodiodes, LEDs, solar cells), transistor operation and amplification, and basic digital logic gates',
      'only the historical discovery of electricity, with no modern device applications discussed',
      'only classical mechanics, with no reference to semiconductor materials at all',
      'topics entirely unrelated to electronic devices or circuits'
    ],
    correctIndex: 0,
    explanation: 'This chapter connects the foundational band theory of solids to the practical behaviour and applications of semiconductor devices, spanning diodes, transistors, and digital logic gates.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'semiconductor-71',
    type: 'assertion-reason',
    question: 'Assertion (A): At absolute zero temperature, an intrinsic semiconductor behaves as a perfect insulator.\nReason (R): At 0 K, there is no thermal energy available to excite electrons from the valence band across the forbidden gap into the conduction band.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The complete absence of thermal energy at 0 K, preventing any electrons from crossing the forbidden gap, is exactly why an intrinsic semiconductor behaves like an insulator at this temperature, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-72',
    type: 'assertion-reason',
    question: 'Assertion (A): The electrical conductivity of a semiconductor increases with increasing temperature.\nReason (R): Higher temperature provides more thermal energy, generating additional electron-hole pairs and increasing the number of available charge carriers.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This increased generation of charge carriers with temperature is exactly why semiconductor conductivity rises as temperature increases, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-73',
    type: 'assertion-reason',
    question: 'Assertion (A): The electrical conductivity of a metal decreases with increasing temperature.\nReason (R): In metals, the number of free electrons remains essentially constant, but increased lattice vibrations at higher temperature scatter these electrons more frequently, reducing their mobility.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This increased scattering of electrons due to enhanced lattice vibrations at higher temperature is exactly why metallic conductivity decreases with rising temperature, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-74',
    type: 'assertion-reason',
    question: 'Assertion (A): A doped n-type semiconductor is electrically neutral overall, despite having a much greater concentration of electrons than holes.\nReason (R): The excess mobile electrons are balanced by an equal number of fixed, positively charged ionised donor atoms.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This balance between mobile excess electrons and fixed positive donor ions is exactly why the n-type material remains overall electrically neutral, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-75',
    type: 'assertion-reason',
    question: 'Assertion (A): A depletion region forms at a p-n junction when p-type and n-type materials are brought together.\nReason (R): Majority carriers diffuse across the junction due to the concentration gradient and recombine, leaving behind a region depleted of mobile charge carriers near the junction.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This diffusion and subsequent recombination of majority carriers is exactly the mechanism that creates the depletion region, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-76',
    type: 'assertion-reason',
    question: 'Assertion (A): Forward biasing a p-n junction diode narrows the depletion region.\nReason (R): The applied forward bias opposes the internal built-in electric field, reducing the barrier potential and allowing more majority carriers to diffuse across the junction.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This opposition to the built-in field, reducing the barrier and allowing more carrier diffusion, is exactly why forward bias narrows the depletion region, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-77',
    type: 'assertion-reason',
    question: 'Assertion (A): Reverse biasing a p-n junction diode widens the depletion region.\nReason (R): The applied reverse bias reinforces the internal built-in electric field, increasing the barrier potential and pulling majority carriers further away from the junction.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This reinforcement of the built-in field, increasing the barrier and pulling majority carriers away, is exactly why reverse bias widens the depletion region, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-78',
    type: 'assertion-reason',
    question: 'Assertion (A): The reverse saturation current in a p-n junction diode is very small and nearly independent of the applied reverse voltage (below breakdown).\nReason (R): The reverse current is carried by minority carriers, whose concentration is largely determined by thermal generation rather than by the applied voltage.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since minority carrier concentration is set primarily by thermal generation (largely independent of the applied reverse voltage), this directly explains why reverse saturation current remains small and nearly constant, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-79',
    type: 'assertion-reason',
    question: 'Assertion (A): Zener breakdown typically occurs in heavily doped p-n junctions with narrow depletion regions.\nReason (R): Heavier doping produces a stronger electric field across the narrower depletion region for a given reverse voltage, making direct tunnelling of electrons through covalent bonds more likely.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This stronger field arising from heavier doping and a narrower depletion region is exactly what favours the tunnelling mechanism characteristic of Zener breakdown, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-80',
    type: 'assertion-reason',
    question: 'Assertion (A): A Zener diode is used as a voltage regulator.\nReason (R): The voltage across a Zener diode remains nearly constant over a wide range of currents once it is operating in its reverse breakdown region.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This nearly constant voltage characteristic in the breakdown region is exactly why the Zener diode is well suited for use as a voltage regulator, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-81',
    type: 'assertion-reason',
    question: 'Assertion (A): A photodiode is typically operated under reverse bias rather than forward bias.\nReason (R): Reverse bias widens the depletion region and creates a stronger internal field, allowing the photodiode to more effectively separate and collect light-generated electron-hole pairs, producing a measurable photocurrent.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This enhanced field and depletion region under reverse bias, aiding efficient collection of photogenerated carriers, is exactly why photodiodes are operated this way, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-82',
    type: 'assertion-reason',
    question: 'Assertion (A): An LED emits light when forward biased.\nReason (R): Forward bias injects electrons and holes into the junction region, where their recombination releases energy in the form of photons.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This carrier injection and subsequent recombination, releasing energy as light, is exactly the mechanism by which a forward-biased LED emits light, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-83',
    type: 'assertion-reason',
    question: 'Assertion (A): LEDs are typically made from direct band gap semiconductor materials rather than silicon.\nReason (R): In direct band gap materials, electron-hole recombination efficiently releases energy as light, whereas in indirect band gap materials like silicon, this energy is predominantly released as heat.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This difference in recombination efficiency for light emission between direct and indirect band gap materials directly explains why LEDs use direct band gap materials rather than silicon, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-84',
    type: 'assertion-reason',
    question: 'Assertion (A): A solar cell does not require an external bias voltage to generate electrical power.\nReason (R): Absorbed light generates electron-hole pairs, and the internal built-in electric field of the junction itself separates these carriers, driving them to opposite terminals and generating a voltage/current.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This use of the junction\'s own internal field to separate light-generated carriers, without needing an external bias, is exactly why a solar cell can generate power on its own, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-85',
    type: 'assertion-reason',
    question: 'Assertion (A): A full-wave rectifier is generally preferred over a half-wave rectifier for most practical applications.\nReason (R): A full-wave rectifier utilises both halves of the input AC cycle, giving a higher average output voltage and lower ripple compared to a half-wave rectifier.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This more efficient use of the full AC cycle, giving better output characteristics, is exactly why full-wave rectifiers are generally preferred over half-wave designs, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-86',
    type: 'assertion-reason',
    question: 'Assertion (A): A capacitor filter is often added after a rectifier circuit.\nReason (R): The capacitor charges during the peaks of the pulsating rectified waveform and discharges gradually through the load during the troughs, smoothing the output into a more constant DC voltage.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This charge-discharge cycling of the capacitor, smoothing out the ripples in the rectified waveform, is exactly why a capacitor filter is used after rectification, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-87',
    type: 'assertion-reason',
    question: 'Assertion (A): In a transistor, the base region is made very thin and lightly doped.\nReason (R): This design minimises recombination of carriers within the base, ensuring most of the emitter-injected carriers successfully reach the collector.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This deliberate minimisation of recombination, ensuring efficient carrier transport from emitter to collector, is exactly why the base is designed to be thin and lightly doped, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-88',
    type: 'assertion-reason',
    question: 'Assertion (A): The common-base current gain (α) of a transistor is always slightly less than 1.\nReason (R): A small fraction of the carriers injected from the emitter recombine within the base region and never reach the collector.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This small but non-zero recombination loss within the base is exactly why the collector current is always slightly less than the emitter current, keeping α just under 1, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-89',
    type: 'assertion-reason',
    question: 'Assertion (A): The common-emitter current gain (β) of a transistor is typically much greater than 1.\nReason (R): Base current is typically very small compared to collector current, since only a small fraction of carriers recombine in the thin base region, and β is defined as the ratio of collector current to base current.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This small base current relative to collector current, resulting from minimal base recombination, directly explains why β (= IC/IB) is typically a large value, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-90',
    type: 'assertion-reason',
    question: 'Assertion (A): The common-emitter configuration is preferred over the common-base configuration for most amplifier applications.\nReason (R): The common-emitter configuration provides both significant current gain and voltage gain, resulting in a higher overall power gain compared to the common-base configuration.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This superior combination of current and voltage gain, giving a higher power gain, is exactly why the common-emitter configuration is generally favoured for amplifier design, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-91',
    type: 'assertion-reason',
    question: 'Assertion (A): When used as a switch, a transistor in the cutoff region behaves like an open switch.\nReason (R): In cutoff, both the emitter-base and base-collector junctions are reverse biased, allowing essentially no current to flow through the transistor.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This absence of current flow due to both junctions being reverse biased is exactly why the cutoff state behaves like an open switch, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-92',
    type: 'assertion-reason',
    question: 'Assertion (A): When used as a switch, a transistor in the saturation region behaves like a closed switch.\nReason (R): In saturation, both the emitter-base and base-collector junctions are forward biased, allowing the maximum possible current to flow through the transistor.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This maximal current flow enabled by both junctions being forward biased is exactly why the saturation state behaves like a closed switch, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-93',
    type: 'assertion-reason',
    question: 'Assertion (A): NAND and NOR gates are called universal gates.\nReason (R): Any other basic logic gate (AND, OR, NOT) can be constructed using only NAND gates alone, or alternatively, only NOR gates alone.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This ability to construct all other basic logic gates using only NAND or only NOR gates is exactly why they are termed universal gates, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-94',
    type: 'assertion-reason',
    question: 'Assertion (A): Silicon is generally preferred over germanium for many modern semiconductor devices.\nReason (R): Silicon has a larger band gap than germanium, contributing to greater temperature stability and lower reverse leakage current in devices.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This greater temperature stability and reduced leakage current, arising from silicon\'s larger band gap, is exactly why silicon is often preferred for many practical semiconductor devices, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-95',
    type: 'assertion-reason',
    question: 'Assertion (A): In an n-type semiconductor, the Fermi level lies closer to the conduction band than in an intrinsic semiconductor.\nReason (R): n-type doping increases the concentration of electrons relative to holes, shifting the Fermi level upward towards the conduction band.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This increased relative electron concentration from n-type doping is exactly why the Fermi level shifts closer to the conduction band, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-96',
    type: 'assertion-reason',
    question: 'Assertion (A): Avalanche breakdown typically occurs at a higher reverse voltage than Zener breakdown, for comparably sized diodes.\nReason (R): Avalanche breakdown occurs in lightly doped junctions with wider depletion regions, requiring a larger applied voltage to accelerate minority carriers sufficiently for impact ionisation to occur.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This need for a larger voltage to sufficiently accelerate carriers across a wider depletion region for impact ionisation is exactly why avalanche breakdown typically requires a higher voltage than Zener breakdown, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-97',
    type: 'assertion-reason',
    question: 'Assertion (A): Digital electronic circuits, including logic gates, are designed to operate using a continuous range of voltage values.\nReason (R): Continuous voltage levels allow for greater precision and are the defining characteristic of digital (as opposed to analog) electronics.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — digital circuits operate using only two discrete voltage levels (0 and 1), not a continuous range (that describes analog circuits instead). R is also false as stated, since continuous voltage levels are actually characteristic of analog, not digital, electronics — directly contradicting the false claim in A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-98',
    type: 'assertion-reason',
    question: 'Assertion (A): A photodiode can be used as a light-sensing device in various electronic applications.\nReason (R): The photocurrent generated by a photodiode is proportional to the intensity of light incident on its junction, allowing light intensity to be inferred from the measured current.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This proportional relationship between photocurrent and light intensity is exactly what enables a photodiode to function as a practical light-sensing device, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-99',
    type: 'assertion-reason',
    question: 'Assertion (A): The p-n junction diode always conducts significant current in both forward and reverse bias equally.\nReason (R): The forward current increases rapidly once the threshold voltage is exceeded, while the reverse current remains very small (except beyond breakdown), reflecting the diode\'s inherently asymmetric (rectifying) behaviour.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — a diode does not conduct equally in both directions; it strongly favours forward conduction over reverse conduction. R correctly describes this asymmetric behaviour, directly refuting the false claim made in A.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-100',
    type: 'assertion-reason',
    question: 'Assertion (A): The chapter on semiconductor electronics connects the fundamental band theory of solids to practical devices and circuits used in everyday electronics.\nReason (R): Concepts such as doping, p-n junction behaviour, transistor action, and logic gates are all built upon the underlying principles of energy bands and charge carrier behaviour in semiconductors.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This shared foundation in band theory and carrier behaviour, underlying all the specific devices and circuits discussed, directly explains the integrated nature of the chapter\'s content, correctly explaining A.',
    difficulty: 'medium'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'semiconductor-101',
    type: 'statement',
    question: 'Statement I: Insulators have a very large forbidden energy gap.\nStatement II: Semiconductors have a forbidden energy gap of about 1 eV, smaller than that of typical insulators.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the relative forbidden energy gaps of insulators and semiconductors.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-102',
    type: 'statement',
    question: 'Statement I: At 0 K, an intrinsic semiconductor conducts electricity as well as a metal.\nStatement II: At room temperature, some electrons in an intrinsic semiconductor acquire enough thermal energy to jump into the conduction band.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — at 0 K, an intrinsic semiconductor behaves like an insulator, not a metal. Statement II correctly describes behaviour at room temperature.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-103',
    type: 'statement',
    question: 'Statement I: In an intrinsic semiconductor, the number of electrons in the conduction band equals the number of holes in the valence band.\nStatement II: Semiconductor conductivity decreases with increasing temperature, similar to metals.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — semiconductor conductivity actually increases with temperature, opposite to the behaviour of metals.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-104',
    type: 'statement',
    question: 'Statement I: Doping with a pentavalent impurity produces an n-type semiconductor.\nStatement II: Doping with a trivalent impurity produces a p-type semiconductor.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the outcomes of doping with pentavalent and trivalent impurities, respectively.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-105',
    type: 'statement',
    question: 'Statement I: A doped n-type semiconductor carries an overall net negative charge.\nStatement II: A doped semiconductor, whether n-type or p-type, remains overall electrically neutral.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — an n-type semiconductor remains overall neutral, not negatively charged. Statement II correctly describes this overall neutrality for both n-type and p-type materials.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-106',
    type: 'statement',
    question: 'Statement I: The depletion region of a p-n junction contains a high concentration of free, mobile charge carriers.\nStatement II: The depletion region contains fixed, immobile ionised dopant atoms.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the depletion region is essentially free of mobile charge carriers. Statement II correctly describes the fixed ionised atoms present there.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-107',
    type: 'statement',
    question: 'Statement I: Forward biasing a p-n junction diode narrows the depletion region.\nStatement II: Reverse biasing a p-n junction diode widens the depletion region.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the opposite effects of forward and reverse bias on the depletion region width.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-108',
    type: 'statement',
    question: 'Statement I: The reverse saturation current in a p-n junction diode depends strongly on the applied reverse voltage.\nStatement II: The forward current in a p-n junction diode increases roughly exponentially once the threshold voltage is exceeded.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — reverse saturation current is nearly independent of applied reverse voltage (below breakdown), not strongly dependent on it. Statement II correctly describes the forward current behaviour.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-109',
    type: 'statement',
    question: 'Statement I: Zener breakdown occurs due to direct tunnelling of electrons through covalent bonds in a strong electric field.\nStatement II: Avalanche breakdown occurs due to impact ionisation from accelerated minority carriers.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the distinct mechanisms behind Zener breakdown and avalanche breakdown.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-110',
    type: 'statement',
    question: 'Statement I: A Zener diode is designed to be destroyed if operated in its reverse breakdown region.\nStatement II: A Zener diode is specifically designed to operate safely and reliably in its reverse breakdown region.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — a Zener diode is specifically designed to safely handle its breakdown region, unlike an ordinary diode. Statement II correctly describes this intended operating mode.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-111',
    type: 'statement',
    question: 'Statement I: A photodiode generates a photocurrent proportional to the intensity of incident light.\nStatement II: A photodiode is typically operated under forward bias to detect light.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — a photodiode is typically operated under reverse bias, not forward bias, for light detection.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-112',
    type: 'statement',
    question: 'Statement I: An LED emits light when forward biased, due to electron-hole recombination.\nStatement II: The colour of light emitted by an LED depends on the band gap of the semiconductor material used.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the operating principle and colour-determining factor of LEDs.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-113',
    type: 'statement',
    question: 'Statement I: LEDs are typically made from indirect band gap materials like silicon, for efficient light emission.\nStatement II: LEDs are typically made from direct band gap materials, since these efficiently convert recombination energy into light rather than heat.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — silicon (an indirect band gap material) is not efficient for light emission and is not typically used for LEDs. Statement II correctly describes the preference for direct band gap materials.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-114',
    type: 'statement',
    question: 'Statement I: A solar cell requires an external bias voltage to generate electrical power from light.\nStatement II: A solar cell generates its own voltage/current directly from absorbed light, using the junction\'s internal field to separate photogenerated carriers.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — a solar cell does not require an external bias. Statement II correctly describes how it generates power using its own internal field.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-115',
    type: 'statement',
    question: 'Statement I: A half-wave rectifier utilises only one half-cycle of the input AC signal.\nStatement II: A full-wave rectifier utilises both half-cycles of the input AC signal, giving a higher average output and lower ripple.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe and contrast the operation of half-wave and full-wave rectifiers.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-116',
    type: 'statement',
    question: 'Statement I: A capacitor filter added after a rectifier increases the ripple in the output.\nStatement II: A capacitor filter smooths the pulsating rectified output into a more constant DC voltage.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — a capacitor filter decreases, not increases, ripple. Statement II correctly describes its smoothing function.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-117',
    type: 'statement',
    question: 'Statement I: In a transistor, the emitter is heavily doped.\nStatement II: In a transistor, the base is thin and lightly doped.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the typical doping and structural characteristics of the emitter and base regions in a transistor.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-118',
    type: 'statement',
    question: 'Statement I: In normal transistor operation, the emitter-base junction is reverse biased.\nStatement II: In normal transistor operation, the base-collector junction is reverse biased.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the emitter-base junction is forward biased, not reverse biased, in normal operation. Statement II correctly describes the base-collector junction bias.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-119',
    type: 'statement',
    question: 'Statement I: The fundamental current relation in a transistor is IE = IB + IC.\nStatement II: The common-base current gain α = IC/IE is typically slightly less than 1.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly state the fundamental transistor current relation and the definition/typical value of the common-base current gain.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-120',
    type: 'statement',
    question: 'Statement I: The common-emitter current gain β is defined as IC/IB.\nStatement II: β is typically a small value, usually less than 1.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — β is typically a large value, much greater than 1, not small.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-121',
    type: 'statement',
    question: 'Statement I: The relation between α and β for a transistor is β = α/(1-α).\nStatement II: The common-emitter configuration is preferred for amplifiers due to its high overall power gain.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the mathematical relationship between the two current gains and the practical preference for the common-emitter configuration.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-122',
    type: 'statement',
    question: 'Statement I: In the cutoff region, a transistor behaves like a closed switch.\nStatement II: In the saturation region, a transistor behaves like an open switch.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — the descriptions are swapped. Cutoff behaves like an open switch (no current), and saturation behaves like a closed switch (maximum current).',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-123',
    type: 'statement',
    question: 'Statement I: An AND gate outputs high only when all its inputs are high.\nStatement II: An OR gate outputs high if at least one of its inputs is high.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the fundamental truth-table behaviour of AND and OR gates.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-124',
    type: 'statement',
    question: 'Statement I: A NAND gate\'s output is identical to an AND gate\'s output.\nStatement II: A NOR gate\'s output is the inverse of an OR gate\'s output.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — a NAND gate\'s output is the inverse (not identical) of an AND gate\'s output. Statement II correctly describes the NOR gate\'s relationship to the OR gate.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-125',
    type: 'statement',
    question: 'Statement I: NAND and NOR gates are called universal gates because any other basic logic gate can be built using only one of these gate types.\nStatement II: Only AND and OR gates can be considered universal gates, not NAND and NOR.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — it is specifically NAND and NOR gates that are termed universal gates, not AND and OR.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-126',
    type: 'statement',
    question: 'Statement I: The Fermi level in an intrinsic semiconductor lies approximately in the middle of the forbidden gap.\nStatement II: In a p-type semiconductor, the Fermi level shifts closer to the conduction band.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — in a p-type semiconductor, the Fermi level shifts closer to the valence band, not the conduction band.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-127',
    type: 'statement',
    question: 'Statement I: Silicon has a larger band gap than germanium.\nStatement II: This larger band gap contributes to silicon devices generally having greater temperature stability.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe silicon\'s band gap relative to germanium and the resulting practical benefit for device stability.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-128',
    type: 'statement',
    question: 'Statement I: A bridge rectifier requires a centre-tapped transformer, similar to the two-diode full-wave rectifier design.\nStatement II: A bridge rectifier uses four diodes and does not necessarily require a centre-tapped transformer.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — a bridge rectifier does not require a centre-tapped transformer, unlike the two-diode design. Statement II correctly describes the bridge rectifier\'s configuration.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-129',
    type: 'statement',
    question: 'Statement I: Digital circuits operate using only two discrete voltage levels, 0 and 1.\nStatement II: Analog circuits operate using a continuous range of voltage values.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly distinguish the discrete nature of digital signals from the continuous nature of analog signals.',
    difficulty: 'easy'
  },
  {
    id: 'semiconductor-130',
    type: 'statement',
    question: 'Statement I: The semiconductor electronics chapter connects band theory to practical devices like diodes, transistors, and logic gates.\nStatement II: Concepts of doping, junction behaviour, and carrier transport have no bearing on the practical function of these devices.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — these concepts are, in fact, fundamental to understanding how these devices actually function.',
    difficulty: 'medium'
  },

  // ==================== HOW-MANY (20) ====================
  {
    id: 'semiconductor-131',
    type: 'how-many',
    question: 'How many of the following statements about energy bands and material classification are correct?\n1. Conductors have overlapping or partially filled conduction bands.\n2. Insulators have a very large forbidden energy gap.\n3. Semiconductors have a forbidden energy gap of about 1 eV.\n4. All three types of materials have exactly the same forbidden energy gap.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts the distinguishing feature of forbidden gap size among these material classes.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-132',
    type: 'how-many',
    question: 'How many of the following statements about intrinsic semiconductors are correct?\n1. At 0 K, they behave like insulators.\n2. Number of electrons equals number of holes.\n3. Conductivity increases with temperature.\n4. Conductivity decreases with temperature, similar to metals.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts statement 3.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-133',
    type: 'how-many',
    question: 'How many of the following statements about doping are correct?\n1. Pentavalent doping produces n-type semiconductors.\n2. Trivalent doping produces p-type semiconductors.\n3. Doped semiconductors remain overall electrically neutral.\n4. Doping concentration is typically comparable to the number of semiconductor atoms present.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — doping concentration is typically very small compared to the number of semiconductor atoms.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-134',
    type: 'how-many',
    question: 'How many of the following statements about p-n junction formation are correct?\n1. Majority carriers diffuse across the junction due to a concentration gradient.\n2. A depletion region forms, containing fixed ionised dopant atoms.\n3. An internal electric field develops, opposing further diffusion.\n4. The depletion region contains a high concentration of free, mobile carriers.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the depletion region is essentially free of mobile carriers.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-135',
    type: 'how-many',
    question: 'How many of the following statements about forward and reverse bias are correct?\n1. Forward bias narrows the depletion region.\n2. Reverse bias widens the depletion region.\n3. Forward current increases roughly exponentially above the threshold voltage.\n4. Reverse saturation current is strongly dependent on the applied reverse voltage, below breakdown.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — reverse saturation current is nearly independent of applied reverse voltage, below breakdown.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-136',
    type: 'how-many',
    question: 'How many of the following statements about breakdown mechanisms are correct?\n1. Zener breakdown involves direct tunnelling of electrons through covalent bonds.\n2. Avalanche breakdown involves impact ionisation from accelerated minority carriers.\n3. Zener breakdown typically occurs in heavily doped junctions with narrow depletion regions.\n4. Avalanche breakdown typically occurs in heavily doped junctions with narrow depletion regions, identical to Zener breakdown conditions.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — avalanche breakdown typically occurs in lightly doped junctions with wider depletion regions, unlike Zener breakdown.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-137',
    type: 'how-many',
    question: 'How many of the following statements about special-purpose diodes are correct?\n1. A Zener diode is used as a voltage regulator.\n2. A photodiode is typically operated under reverse bias.\n3. An LED emits light when forward biased.\n4. A solar cell requires an external bias to generate power.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a solar cell does not require an external bias to generate power.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-138',
    type: 'how-many',
    question: 'How many of the following statements about LEDs are correct?\n1. LEDs emit light due to electron-hole recombination.\n2. The colour of emitted light depends on the band gap of the material.\n3. LEDs are typically made from direct band gap materials.\n4. Silicon is the preferred material for efficient LEDs, due to its direct band gap.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — silicon has an indirect band gap and is not suitable for efficient LED light emission.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-139',
    type: 'how-many',
    question: 'How many of the following statements about rectifier circuits are correct?\n1. A half-wave rectifier uses current from only one half-cycle of the AC input.\n2. A full-wave rectifier uses current from both half-cycles of the AC input.\n3. A full-wave rectifier generally has lower ripple than a half-wave rectifier.\n4. A capacitor filter increases ripple in the rectified output.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a capacitor filter decreases (smooths), not increases, ripple.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-140',
    type: 'how-many',
    question: 'How many of the following statements about transistor structure are correct?\n1. The emitter is heavily doped.\n2. The base is thin and lightly doped.\n3. The collector is generally the largest of the three regions.\n4. All three regions (emitter, base, collector) have identical doping levels.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the three regions have distinctly different doping levels, not identical ones.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-141',
    type: 'how-many',
    question: 'How many of the following statements about transistor biasing in normal (active) operation are correct?\n1. The emitter-base junction is forward biased.\n2. The base-collector junction is reverse biased.\n3. Both junctions are forward biased simultaneously.\n4. Both junctions are reverse biased simultaneously.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    explanation: 'Statements 1 and 2 correctly describe normal transistor bias conditions. Statements 3 and 4 are false, describing saturation and cutoff conditions respectively, not normal active operation.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-142',
    type: 'how-many',
    question: 'How many of the following statements about transistor current relations and gains are correct?\n1. IE = IB + IC\n2. α = IC/IE, typically slightly less than 1\n3. β = IC/IB, typically much greater than 1\n4. β = α × (1-α)',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the correct relation is β = α/(1-α), not α × (1-α).',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-143',
    type: 'how-many',
    question: 'How many of the following statements about transistor switching behaviour are correct?\n1. In cutoff, both junctions are reverse biased.\n2. In cutoff, essentially no current flows, similar to an open switch.\n3. In saturation, both junctions are forward biased.\n4. In saturation, essentially no current flows, similar to an open switch.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — saturation allows maximum current flow (like a closed switch), not essentially no current.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-144',
    type: 'how-many',
    question: 'How many of the following statements about logic gates are correct?\n1. AND gate output is high only when all inputs are high.\n2. OR gate output is high if at least one input is high.\n3. NOT gate output is the inverse of its single input.\n4. NAND gate output is identical to AND gate output.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a NAND gate\'s output is the inverse (not identical) of an AND gate\'s output.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-145',
    type: 'how-many',
    question: 'How many of the following statements about universal gates are correct?\n1. NAND gates are universal gates.\n2. NOR gates are universal gates.\n3. Any basic logic gate can be constructed using only NAND gates.\n4. Only AND and OR gates qualify as universal gates.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — it is specifically NAND and NOR gates (not AND and OR) that are termed universal gates.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-146',
    type: 'how-many',
    question: 'How many of the following statements about Fermi level position are correct?\n1. In an intrinsic semiconductor, the Fermi level lies approximately in the middle of the forbidden gap.\n2. In an n-type semiconductor, the Fermi level shifts closer to the conduction band.\n3. In a p-type semiconductor, the Fermi level shifts closer to the valence band.\n4. The Fermi level position is completely unaffected by doping type.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts the well-established shift in Fermi level position with doping type.',
    difficulty: 'hard'
  },
  {
    id: 'semiconductor-147',
    type: 'how-many',
    question: 'How many of the following statements about silicon versus germanium are correct?\n1. Silicon has a larger band gap than germanium.\n2. Silicon devices generally have a higher threshold (knee) voltage than germanium devices.\n3. Silicon generally offers better temperature stability than germanium in devices.\n4. Germanium has a larger band gap than silicon.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts statement 1 — silicon, not germanium, has the larger band gap.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-148',
    type: 'how-many',
    question: 'How many of the following statements about rectifier and filter circuits are correct?\n1. A bridge rectifier uses four diodes.\n2. A bridge rectifier does not necessarily require a centre-tapped transformer.\n3. A capacitor filter smooths the rectified output by charging and discharging cyclically.\n4. A bridge rectifier can only rectify one half-cycle of the AC input, similar to a half-wave rectifier.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a bridge rectifier is a full-wave rectifier, using both half-cycles of the AC input, not just one.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-149',
    type: 'how-many',
    question: 'How many of the following statements about the practical applications of semiconductor devices are correct?\n1. Diodes are used for rectification.\n2. Transistors can be used for amplification and switching.\n3. Logic gates form the basis of digital electronic circuits.\n4. Semiconductor devices have no practical relevance to modern electronics.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts the well-established, foundational role of semiconductor devices in modern electronics.',
    difficulty: 'medium'
  },
  {
    id: 'semiconductor-150',
    type: 'how-many',
    question: 'How many of the following statements correctly summarise key themes of the semiconductor electronics chapter?\n1. Energy band theory explains the distinction between conductors, insulators, and semiconductors.\n2. Doping (n-type and p-type) and p-n junction behaviour underlie diode operation.\n3. Transistor structure and biasing enable amplification and switching applications.\n4. Logic gates, built from semiconductor devices, form the basis of digital circuits.\n5. Semiconductor devices behave identically regardless of biasing or doping conditions.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, 3, and 4 correctly summarise major themes of the chapter. Statement 5 is false — semiconductor device behaviour depends critically on biasing and doping conditions, which is central to the entire chapter\'s content.',
    difficulty: 'medium'
  }
];
>>>>>>> 9e6ae6a5ea2181b313543ecdc8c39b664ed24496
