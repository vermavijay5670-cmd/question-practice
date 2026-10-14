export const ALTERNATING_CURRENT = [
  // ==================== MCQ (70) ====================
  {
    id: 'alternating-current-1',
    type: 'mcq',
    question: 'An alternating current (AC) is one whose magnitude',
    options: [
      'remains constant with time',
      'is always zero',
      'increases indefinitely with time',
      'changes periodically with time, reversing direction at regular intervals'
    ],
    correctIndex: 3,
    explanation: 'An alternating current periodically changes both its magnitude and direction with time, typically following a sinusoidal pattern, unlike direct current (DC) which flows in one direction only.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-2',
    type: 'mcq',
    question: 'A sinusoidal AC voltage can be represented as V(t) = V0 sin(ωt), where V0 represents',
    options: [
      'the RMS value of the voltage',
      'the average value of the voltage',
      'the frequency of the voltage',
      'the peak (maximum) value of the voltage'
    ],
    correctIndex: 3,
    explanation: 'V0 is the amplitude or peak value of the sinusoidal voltage, representing the maximum magnitude reached during each cycle.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-3',
    type: 'mcq',
    question: 'The angular frequency ω of an AC supply is related to its frequency f by',
    options: ['ω = f/2π', 'ω = πf', 'ω = f', 'ω = 2πf'],
    correctIndex: 3,
    explanation: 'Angular frequency is related to ordinary frequency by ω = 2πf, where f is measured in hertz (cycles per second) and ω in radians per second.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-4',
    type: 'mcq',
    question: 'The average value of a pure sinusoidal AC current over one complete cycle is',
    options: [
      'always positive',
      'equal to its peak value',
      'equal to its RMS value',
      'zero, since the positive and negative half-cycles exactly cancel out'
    ],
    correctIndex: 3,
    explanation: 'Over one full cycle, a symmetric sinusoidal AC current spends equal time and area above and below zero, so the positive and negative contributions exactly cancel, giving zero average value.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-5',
    type: 'mcq',
    question: 'The average value of a sinusoidal AC current, when taken over just one half-cycle, is',
    options: ['zero', 'equal to the RMS value exactly', 'equal to the peak value', 'approximately 0.637 times the peak value (2I0/π)'],
    correctIndex: 3,
    explanation: 'Over half a cycle (where the current does not change sign), the average value works out to (2/π)I0 ≈ 0.637 I0, a standard NCERT result distinct from both the peak and RMS values.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-6',
    type: 'mcq',
    question: 'The RMS (root mean square) value of an AC current is defined as',
    options: [
      'the arithmetic mean of the current over one cycle',
      'always equal to zero for any AC waveform',
      'the peak value of the current',
      'the value of steady direct current that would produce the same heating effect (same average power dissipation) in a resistor as the given alternating current'
    ],
    correctIndex: 3,
    explanation: 'RMS value is defined based on equivalent heating effect: it is the value of DC current that would dissipate the same average power in a resistor as the actual AC current does over a complete cycle.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-7',
    type: 'mcq',
    question: 'For a sinusoidal AC current with peak value I0, the RMS value is given by',
    options: ['Irms = 2I0/π', 'Irms = I0/2', 'Irms = I0', 'Irms = I0/√2'],
    correctIndex: 3,
    explanation: 'For a sinusoidal waveform, the RMS value is Irms = I0/√2 ≈ 0.707 I0, derived by taking the square root of the average of the squared current over one cycle.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-8',
    type: 'mcq',
    question: 'The reason RMS values (rather than peak or average values) are commonly used to specify AC voltage and current ratings (like household "230V AC") is that',
    options: [
      'RMS values are always larger than peak values',
      'peak and average values cannot be measured at all',
      'RMS values are easier to calculate than any other value',
      'RMS values directly relate to the power dissipated, making them practically meaningful for rating devices and comparing AC to equivalent DC'
    ],
    correctIndex: 3,
    explanation: 'Since RMS current/voltage directly determines the power dissipated (P = Irms²R), it provides a practically meaningful and directly comparable measure to DC ratings, which is why AC devices are typically rated using RMS values.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-9',
    type: 'mcq',
    question: 'A hot-wire ammeter (or similarly, most standard AC ammeters/voltmeters) measures',
    options: [
      'the peak value of the AC current',
      'the average value of the AC current',
      'the frequency of the AC current',
      'the RMS value of the AC current, based on its heating effect'
    ],
    correctIndex: 3,
    explanation: 'Because their operation relies on the heating effect of current (which depends on the mean square value), hot-wire and most standard AC measuring instruments are calibrated to directly display RMS values.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-10',
    type: 'mcq',
    question: 'In a purely resistive AC circuit, the current and the applied voltage are',
    options: [
      'unrelated in phase',
      'always 180° out of phase',
      'always 90° out of phase',
      'always in phase with each other (zero phase difference)'
    ],
    correctIndex: 3,
    explanation: 'In a purely resistive circuit, current and voltage reach their maximum, zero, and minimum values simultaneously — they are exactly in phase, with a phase difference of zero.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-11',
    type: 'mcq',
    question: 'In a purely inductive AC circuit (ideal inductor, no resistance), the current',
    options: [
      'is in phase with the voltage',
      'lags behind the voltage by 90°',
      'is 180° out of phase with the voltage',
      'leads the voltage by 90°'
    ],
    correctIndex: 1,
    explanation: 'In a purely inductive circuit, the current lags the applied voltage by a phase angle of 90° (π/2 radians), a standard and frequently tested NCERT result.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-12',
    type: 'mcq',
    question: 'In a purely capacitive AC circuit (ideal capacitor, no resistance), the current',
    options: [
      'is 180° out of phase with the voltage',
      'lags behind the voltage by 90°',
      'is in phase with the voltage',
      'leads the voltage by 90°'
    ],
    correctIndex: 3,
    explanation: 'In a purely capacitive circuit, the current leads the applied voltage by a phase angle of 90° (π/2 radians), opposite to the inductive case.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-13',
    type: 'mcq',
    question: 'A useful mnemonic for remembering the phase relationships in AC circuits is "CIVIL," which stands for',
    options: [
      'voltage always leads current in every circuit',
      'in a Capacitor, I (current) leads V; in an inductor (L), V leads I',
      'this mnemonic is unrelated to phase relationships',
      'current always leads voltage in every circuit'
    ],
    correctIndex: 1,
    explanation: 'CIVIL is a standard mnemonic: in a Capacitive circuit, I (current) leads V (voltage); in an inductive (L) circuit, V leads I — helping students remember which quantity leads in each type of reactive circuit.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-14',
    type: 'mcq',
    question: 'Inductive reactance (XL) of an inductor in an AC circuit is given by',
    options: ['XL = ω²L', 'XL = ωL', 'XL = L/ω', 'XL = ω/L'],
    correctIndex: 1,
    explanation: 'Inductive reactance is XL = ωL, representing the effective opposition an inductor offers to the flow of alternating current, increasing with both inductance and frequency.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-15',
    type: 'mcq',
    question: 'As the frequency of the AC supply increases, the inductive reactance of a given inductor',
    options: [
      'remains constant',
      'decreases',
      'becomes zero',
      'increases, since XL = ωL is directly proportional to frequency'
    ],
    correctIndex: 3,
    explanation: 'Since XL = ωL = 2πfL, inductive reactance increases directly with frequency; an inductor offers progressively more opposition to higher-frequency AC.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-16',
    type: 'mcq',
    question: 'Capacitive reactance (XC) of a capacitor in an AC circuit is given by',
    options: ['XC = ω/C', 'XC = 1/(ωC)', 'XC = ωC', 'XC = C/ω'],
    correctIndex: 1,
    explanation: 'Capacitive reactance is XC = 1/(ωC), representing the effective opposition a capacitor offers to AC current flow, which decreases as frequency (or capacitance) increases.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-17',
    type: 'mcq',
    question: 'As the frequency of the AC supply increases, the capacitive reactance of a given capacitor',
    options: [
      'increases',
      'decreases, since XC = 1/(ωC) is inversely proportional to frequency',
      'remains constant',
      'becomes infinite'
    ],
    correctIndex: 1,
    explanation: 'Since XC = 1/(ωC) = 1/(2πfC), capacitive reactance decreases as frequency increases; a capacitor offers progressively less opposition to higher-frequency AC.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-18',
    type: 'mcq',
    question: 'For a steady (DC, ω = 0) source connected to a capacitor in steady state, the capacitive reactance becomes',
    options: [
      'zero, allowing DC to pass freely',
      'infinite, effectively blocking any steady current flow',
      'exactly equal to the resistance',
      'undefined and meaningless'
    ],
    correctIndex: 1,
    explanation: 'As ω → 0 (DC), XC = 1/(ωC) → infinity, consistent with the well-known fact that a capacitor blocks DC current in the steady state (after it is fully charged).',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-19',
    type: 'mcq',
    question: 'For a steady (DC, ω = 0) source connected to an inductor in steady state, the inductive reactance becomes',
    options: [
      'undefined',
      'equal to the capacitive reactance',
      'infinite, blocking all current',
      'zero, offering no opposition (in the ideal, resistanceless case) once steady state is reached'
    ],
    correctIndex: 3,
    explanation: 'As ω → 0 (DC), XL = ωL → 0, consistent with the fact that an ideal (resistanceless) inductor offers no opposition to steady DC current once a constant current is established.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-20',
    type: 'mcq',
    question: 'In an AC circuit containing resistance R, inductive reactance XL, and capacitive reactance XC in series, the total opposition to current flow is called',
    options: ['reactance', 'impedance (Z)', 'resistance', 'conductance'],
    correctIndex: 1,
    explanation: 'Impedance (Z) is the total, combined opposition offered by a series AC circuit (comprising resistance and net reactance) to the flow of alternating current.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-21',
    type: 'mcq',
    question: 'For a series LCR circuit, the impedance Z is given by',
    options: [
      'Z = R + XL + XC (simple algebraic sum)',
      'Z = R × XL × XC',
      'Z = R²  + XL² + XC²',
      'Z = √(R² + (XL - XC)²)'
    ],
    correctIndex: 3,
    explanation: 'Since resistance and net reactance act like perpendicular components in a phasor diagram, impedance combines them via Z = √(R² + (XL - XC)²), not simple algebraic addition.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-22',
    type: 'mcq',
    question: 'In a series LCR circuit, if XL > XC, the overall circuit behaves as',
    options: [
      'purely resistive, with current in phase with voltage',
      'predominantly inductive, with current lagging behind the voltage',
      'an open circuit with no current flow',
      'predominantly capacitive, with current leading the voltage'
    ],
    correctIndex: 1,
    explanation: 'When XL exceeds XC, the net reactance is inductive in nature, so the circuit as a whole behaves predominantly inductively, with the current lagging behind the applied voltage.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-23',
    type: 'mcq',
    question: 'In a series LCR circuit, if XC > XL, the overall circuit behaves as',
    options: [
      'having infinite impedance',
      'predominantly inductive',
      'purely resistive',
      'predominantly capacitive, with current leading the voltage'
    ],
    correctIndex: 3,
    explanation: 'When XC exceeds XL, the net reactance is capacitive in nature, so the circuit behaves predominantly capacitively, with current leading the applied voltage.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-24',
    type: 'mcq',
    question: 'Resonance in a series LCR circuit occurs at the frequency where',
    options: [
      'the capacitive reactance becomes infinite',
      'resistance R becomes zero',
      'the inductive reactance becomes zero',
      'the inductive reactance equals the capacitive reactance (XL = XC), making the net reactance zero'
    ],
    correctIndex: 3,
    explanation: 'Resonance occurs at the specific angular frequency where XL = XC, causing the net reactance to cancel out and the impedance to reduce to its minimum possible value (equal to R alone).',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-25',
    type: 'mcq',
    question: 'At resonance in a series LCR circuit, the impedance of the circuit is',
    options: [
      'infinite',
      'at its minimum possible value, equal to R alone',
      'zero',
      'at its maximum possible value'
    ],
    correctIndex: 1,
    explanation: 'At resonance, since XL = XC cancels out the net reactance, impedance Z = √(R² + 0²) = R, its minimum possible value for the given circuit.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-26',
    type: 'mcq',
    question: 'At resonance in a series LCR circuit, the current in the circuit is',
    options: [
      'independent of the applied voltage',
      'at its maximum possible value, for a given applied voltage',
      'always zero',
      'at its minimum possible value'
    ],
    correctIndex: 1,
    explanation: 'Since impedance is minimized at resonance, and current I = V/Z, the current reaches its maximum possible value at the resonant frequency, for a fixed applied voltage.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-27',
    type: 'mcq',
    question: 'At resonance in a series LCR circuit, the phase difference between current and applied voltage is',
    options: ['180°', 'undefined', '90°', 'zero (current and voltage are exactly in phase)'],
    correctIndex: 3,
    explanation: 'At resonance, since the net reactance is zero, the circuit behaves as if it were purely resistive, so current and voltage are exactly in phase (zero phase difference).',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-28',
    type: 'mcq',
    question: 'The resonant angular frequency ω0 of a series LCR circuit is given by',
    options: ['ω0 = LC', 'ω0 = √(LC)', 'ω0 = L/C', 'ω0 = 1/√(LC)'],
    correctIndex: 3,
    explanation: 'Setting XL = XC (ωL = 1/(ωC)) and solving for ω gives the resonant angular frequency ω0 = 1/√(LC), a fundamental standard result.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-29',
    type: 'mcq',
    question: 'The resonant frequency of an LCR circuit is independent of',
    options: [
      'both L and C',
      'the resistance R (in the idealized formula ω0 = 1/√(LC))',
      'the capacitance C',
      'the inductance L'
    ],
    correctIndex: 1,
    explanation: 'The formula ω0 = 1/√(LC) shows the resonant frequency depends only on L and C, not on R; resistance affects the sharpness (Q-factor) of resonance but not the resonant frequency itself in this idealized treatment.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-30',
    type: 'mcq',
    question: 'A series LCR circuit at resonance is sometimes called an "acceptor circuit" because it',
    options: [
      'blocks all AC signals entirely',
      'only works with DC signals',
      'rejects all frequencies equally',
      'allows (accepts) maximum current to flow specifically at its resonant frequency, effectively selecting/passing that frequency while offering higher impedance to others'
    ],
    correctIndex: 3,
    explanation: 'Since current is maximum at resonance and falls off at other frequencies, a series resonant circuit effectively "accepts" (allows through with least opposition) signals at its resonant frequency, useful for applications like tuning radio receivers.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-31',
    type: 'mcq',
    question: 'The average power dissipated in a pure resistor connected to an AC source is given by',
    options: ['P = I0V0', 'P = Irms Vrms = Irms²R', 'P = I0V0/4', 'P = 2 Irms Vrms'],
    correctIndex: 1,
    explanation: 'Since current and voltage are in phase in a purely resistive circuit, average power is simply P = IrmsVrms = Irms²R, directly analogous to the DC power formula but using RMS values.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-32',
    type: 'mcq',
    question: 'The average power dissipated over one complete cycle in a purely inductive or purely capacitive AC circuit (ideal, no resistance) is',
    options: [
      'maximum, equal to IrmsVrms',
      'zero, since current and voltage are 90° out of phase',
      'equal to half of IrmsVrms',
      'always negative'
    ],
    correctIndex: 1,
    explanation: 'Because current and voltage are 90° out of phase in a purely reactive (inductive or capacitive) element, the average power over a complete cycle works out to exactly zero — energy is alternately stored and returned, with no net dissipation.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-33',
    type: 'mcq',
    question: 'The average power in a general AC circuit (with resistance and reactance both present) is given by',
    options: [
      'P = IrmsVrms, regardless of phase difference',
      'P = IrmsVrms sinφ',
      'P is always zero unless the circuit is purely resistive',
      'P = IrmsVrms cosφ, where φ is the phase difference between current and voltage'
    ],
    correctIndex: 3,
    explanation: 'The general formula for average power in an AC circuit is P = IrmsVrms cosφ, where cosφ is called the power factor, accounting for the phase relationship between current and voltage.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-34',
    type: 'mcq',
    question: 'The term cosφ in the average power formula (P = IrmsVrms cosφ) is called the',
    options: ['reactance factor', 'quality factor', 'impedance factor', 'power factor'],
    correctIndex: 3,
    explanation: 'cosφ is known as the power factor of an AC circuit, representing the fraction of the apparent power (IrmsVrms) that is actually converted into real, dissipated power.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-35',
    type: 'mcq',
    question: 'For a purely resistive AC circuit, the power factor (cosφ) is',
    options: ['undefined', '1 (unity), since current and voltage are in phase', '-1', 'zero'],
    correctIndex: 1,
    explanation: 'Since φ = 0° for a purely resistive circuit, cosφ = cos(0°) = 1, meaning all the apparent power is actually dissipated as real power.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-36',
    type: 'mcq',
    question: 'For a purely inductive or purely capacitive AC circuit (ideal, no resistance), the power factor (cosφ) is',
    options: ['1 (unity)', 'zero, since φ = 90°', '0.707', 'undefined and cannot be calculated'],
    correctIndex: 1,
    explanation: 'Since φ = 90° for a purely reactive circuit, cosφ = cos(90°) = 0, consistent with the fact that no net power is dissipated in such an ideal circuit.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-37',
    type: 'mcq',
    question: 'The power dissipated in a purely reactive AC element (like an ideal inductor or capacitor) is sometimes called',
    options: ['wattful power', 'DC power', 'real power', 'wattless current or wattless power, since no net energy is dissipated despite current flowing'],
    correctIndex: 3,
    explanation: 'Since a pure inductor or capacitor dissipates zero net power despite carrying a non-zero current, this scenario is often described using the term "wattless current," reflecting that current flows without any accompanying real power dissipation.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-38',
    type: 'mcq',
    question: 'A low power factor in an AC circuit (e.g., due to a highly inductive load) is generally undesirable in power distribution because it',
    options: [
      'increases efficiency of power delivery',
      'always improves voltage regulation',
      'has no practical consequences',
      'means a larger current is needed to deliver the same real (useful) power, increasing transmission losses (I²R) in the wires'
    ],
    correctIndex: 3,
    explanation: 'For a fixed real power requirement, a low power factor requires a proportionally larger current (since P = IV cosφ), which increases resistive losses in transmission lines, making low power factor undesirable from an efficiency standpoint.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-39',
    type: 'mcq',
    question: 'A choke coil (an inductor with very low resistance) is used in AC circuits (like fluorescent tube fittings) instead of a resistor to limit current because',
    options: [
      'a resistor would work exactly the same way with no downside',
      'the inductor limits current mainly through its reactance rather than dissipating significant power as heat (since it has very low resistance), making it more energy-efficient than a comparable resistor',
      'inductors cannot carry any AC current',
      'chokes convert AC into DC directly'
    ],
    correctIndex: 1,
    explanation: 'A choke coil limits current via its inductive reactance without dissipating much power as heat (due to its very low resistance), making it a more energy-efficient current-limiting device compared to a resistor, which would waste significant power as heat for the same current-limiting effect.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-40',
    type: 'mcq',
    question: 'In an AC circuit, a phasor diagram is a graphical tool used to represent',
    options: [
      'only the resistance of the circuit',
      'the relative magnitudes and phase relationships of AC quantities like voltage and current, using rotating vectors',
      'only DC quantities',
      'the frequency of the circuit, exclusively'
    ],
    correctIndex: 1,
    explanation: 'A phasor diagram represents sinusoidally varying quantities (like voltage and current) as rotating vectors (phasors), with their relative angles depicting phase differences and their lengths representing amplitudes.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-41',
    type: 'mcq',
    question: 'In a phasor diagram for a series LCR circuit, the voltage across the resistor is drawn',
    options: [
      'at 45° to the current phasor',
      'along (parallel to) the current phasor, since voltage and current are in phase across a pure resistor',
      'perpendicular to the current phasor',
      'always opposite in direction to the current phasor'
    ],
    correctIndex: 1,
    explanation: 'Since voltage and current are in phase for the resistive component, the resistor\'s voltage phasor is drawn parallel to (along the same direction as) the current phasor.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-42',
    type: 'mcq',
    question: 'In a phasor diagram for a series LCR circuit, the voltage across the inductor is drawn',
    options: [
      'in phase with the current',
      '90° behind the current phasor',
      '180° from the current phasor',
      '90° ahead of the current phasor (leading), consistent with voltage leading current in a pure inductor'
    ],
    correctIndex: 3,
    explanation: 'Since voltage leads current by 90° in a pure inductor, the inductor voltage phasor is drawn 90° ahead of (rotated counterclockwise relative to) the current phasor.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-43',
    type: 'mcq',
    question: 'In a phasor diagram for a series LCR circuit, the voltage across the capacitor is drawn',
    options: [
      '180° from the current phasor',
      '90° behind the current phasor, consistent with current leading voltage in a pure capacitor',
      'in phase with the current',
      '90° ahead of the current phasor'
    ],
    correctIndex: 1,
    explanation: 'Since current leads voltage by 90° in a pure capacitor (equivalently, voltage lags current by 90°), the capacitor voltage phasor is drawn 90° behind the current phasor.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-44',
    type: 'mcq',
    question: 'In a series LCR phasor diagram, since inductor and capacitor voltage phasors are exactly opposite (180° apart) to each other, the net reactive voltage is found by',
    options: [
      'adding VL and VC directly',
      'subtracting the smaller from the larger (VL - VC or VC - VL), since they act in opposite directions',
      'multiplying VL and VC',
      'ignoring both VL and VC entirely'
    ],
    correctIndex: 1,
    explanation: 'Since VL and VC point in exactly opposite directions (180° apart) on the phasor diagram, their combined (net) effect is found by taking the difference of their magnitudes, not the sum.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-45',
    type: 'mcq',
    question: 'In a series LCR AC circuit, the applied voltage V is related to the individual component voltages (VR, VL, VC) by',
    options: [
      'V is unrelated to the individual component voltages',
      'V = VR × VL × VC',
      'V = VR + VL + VC (simple algebraic sum)',
      'V = √(VR² + (VL - VC)²), since VR is in phase with current while VL and VC are perpendicular to it (and opposite to each other)'
    ],
    correctIndex: 3,
    explanation: 'Since the voltages across R, L, and C have different phase relationships to the current, they must be combined using phasor (vector) addition, giving V = √(VR² + (VL - VC)²), not simple algebraic addition.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-46',
    type: 'mcq',
    question: 'A transformer, used to step up or step down AC voltage, works on the principle of',
    options: ['the Hall effect', 'mutual induction between primary and secondary windings', 'self-induction only', 'resistive heating'],
    correctIndex: 1,
    explanation: 'A transformer transfers energy from its primary to secondary coil via mutual induction, exploiting the changing flux caused by the alternating current in the primary.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-47',
    type: 'mcq',
    question: 'For an ideal transformer (100% efficient, no losses), the relationship between primary/secondary voltages (Vp, Vs), currents (Ip, Is), and turns (Np, Ns) is given by',
    options: [
      'Vs × Vp = Ns × Np',
      'These quantities are all unrelated to each other',
      'Vs/Vp = Is/Ip = Np/Ns',
      'Vs/Vp = Ns/Np = Ip/Is'
    ],
    correctIndex: 3,
    explanation: 'For an ideal transformer, voltage ratio equals turns ratio (Vs/Vp = Ns/Np), and by power conservation (input power = output power), current ratio is inversely related to turns ratio (Ip/Is = Ns/Np), giving the combined relation Vs/Vp = Ns/Np = Ip/Is.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-48',
    type: 'mcq',
    question: 'Real transformers experience energy losses due to several factors, including',
    options: [
      'only the color of the wire used',
      'only the shape of the primary coil',
      'transformers experience absolutely no losses under any real conditions',
      'flux leakage, resistance of the windings (copper losses), eddy currents in the core, and hysteresis losses in the core material'
    ],
    correctIndex: 3,
    explanation: 'Real (non-ideal) transformers experience several types of losses: flux leakage (not all flux links both coils), copper losses (I²R heating in the windings), eddy current losses in the core, and hysteresis losses due to repeated magnetization/demagnetization of the core.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-49',
    type: 'mcq',
    question: 'Transformers are used in long-distance electric power transmission mainly because they allow',
    options: [
      'power to be transmitted at low voltage and high current, minimizing wire cost',
      'power to be stepped up to high voltage (and correspondingly low current) for transmission, minimizing I²R losses in the transmission lines, then stepped back down for safe local use',
      'the generation of power without any need for a power plant',
      'AC to be converted permanently into DC'
    ],
    correctIndex: 1,
    explanation: 'Transmitting power at high voltage and correspondingly low current (using step-up transformers) significantly reduces I²R resistive losses in the long transmission lines; step-down transformers then reduce the voltage to safer levels for local distribution and use.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-50',
    type: 'mcq',
    question: 'An LC oscillation (in an ideal circuit with only an inductor and a capacitor, no resistance) refers to',
    options: [
      'a circuit that never carries any current',
      'a circuit that carries a steady, constant current',
      'a purely resistive phenomenon',
      'the periodic exchange of energy between the electric field of the capacitor and the magnetic field of the inductor, causing the charge/current to oscillate'
    ],
    correctIndex: 3,
    explanation: 'In an ideal LC circuit, energy oscillates back and forth between the capacitor\'s electric field and the inductor\'s magnetic field, causing the charge and current in the circuit to oscillate sinusoidally with time, analogous to a mechanical simple harmonic oscillator.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-51',
    type: 'mcq',
    question: 'The natural (angular) frequency of oscillation of an ideal LC circuit is',
    options: ['ω = √(LC)', 'ω = L/C', 'ω = 1/√(LC)', 'ω = LC'],
    correctIndex: 2,
    explanation: 'The natural oscillation frequency of an ideal LC circuit is ω = 1/√(LC), the same expression as the resonant frequency of a driven series LCR circuit, reflecting the shared underlying physics.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-52',
    type: 'mcq',
    question: 'The LC oscillation is analogous to which mechanical system?',
    options: [
      'a freely falling object under gravity',
      'a simple harmonic oscillator, such as a mass attached to a spring, where energy oscillates between kinetic and potential forms',
      'a rigid body in uniform circular motion',
      'a block sliding on a frictionless surface at constant velocity'
    ],
    correctIndex: 1,
    explanation: 'The LC circuit is a classic analogy for a mass-spring simple harmonic oscillator: charge (or current) in the LC circuit behaves like displacement (or velocity) in the mechanical system, with energy oscillating between the capacitor\'s electric field (analogous to spring potential energy) and the inductor\'s magnetic field (analogous to kinetic energy).',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-53',
    type: 'mcq',
    question: 'In a real (non-ideal) LC circuit that includes some resistance, the oscillations of charge and current will',
    options: [
      'stop instantly at the very first cycle',
      'grow in amplitude indefinitely',
      'gradually die out (damped oscillations) as energy is dissipated as heat in the resistance',
      'continue forever without any change'
    ],
    correctIndex: 2,
    explanation: 'Since real circuits always have some resistance, energy is continuously dissipated as heat, causing the oscillation amplitude to gradually decrease over time — this is called a damped oscillation, analogous to a mechanical oscillator with friction.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-54',
    type: 'mcq',
    question: 'When a series LCR circuit is at a frequency well below its resonant frequency, the circuit\'s behaviour tends to be dominated by',
    options: [
      'inductive reactance, since XL is small at low frequency while XC is large',
      'capacitive reactance, since XC = 1/(ωC) becomes large at low frequency, dominating over the (relatively) smaller XL = ωL',
      'purely resistive behaviour, regardless of frequency',
      'the behaviour is completely independent of frequency'
    ],
    correctIndex: 1,
    explanation: 'At frequencies well below resonance, XC = 1/(ωC) is relatively large (since ω is small) while XL = ωL is relatively small, so the capacitive reactance dominates the circuit\'s overall behaviour.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-55',
    type: 'mcq',
    question: 'When a series LCR circuit is at a frequency well above its resonant frequency, the circuit\'s behaviour tends to be dominated by',
    options: [
      'capacitive reactance',
      'inductive reactance, since XL = ωL grows large at high frequency while XC = 1/(ωC) becomes relatively small',
      'purely resistive behaviour only',
      'the behaviour is unrelated to frequency'
    ],
    correctIndex: 1,
    explanation: 'At frequencies well above resonance, XL = ωL becomes large (since ω is large) while XC = 1/(ωC) becomes small, so inductive reactance dominates the circuit\'s overall behaviour.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-56',
    type: 'mcq',
    question: 'A capacitor blocks DC but allows AC to pass through (in the sense of an effective current flowing in the external circuit, via charging/discharging) because',
    options: [
      'this description applies only to inductors, not capacitors',
      'for AC, the capacitor continuously charges and discharges as the voltage alternates, allowing an effective alternating current in the circuit, while for steady DC, it charges up fully and then blocks further current entirely',
      'a capacitor is fundamentally a conductor at all frequencies',
      'capacitors have no physical basis for blocking any current'
    ],
    correctIndex: 1,
    explanation: 'Under AC, the continuously alternating voltage causes the capacitor to repeatedly charge and discharge, allowing an effective current to flow in the external circuit; under steady DC, once fully charged, no further current can flow, effectively blocking it.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-57',
    type: 'mcq',
    question: 'An inductor tends to block sudden/high-frequency changes in current but allows steady DC to pass (in ideal, resistanceless case) because',
    options: [
      'inductors physically prevent any current from flowing ever',
      'inductors behave identically at all frequencies',
      'this description applies only to resistors',
      'inductive reactance XL = ωL increases with frequency, so it strongly opposes rapidly changing (high-frequency) currents while offering zero opposition at ω = 0 (DC)'
    ],
    correctIndex: 3,
    explanation: 'Since XL increases with frequency, an inductor increasingly opposes higher-frequency (rapidly changing) AC currents, while offering no opposition (XL = 0) to steady DC in the ideal, resistanceless case.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-58',
    type: 'mcq',
    question: 'The impedance of a purely resistive AC circuit is',
    options: ['zero', 'equal to XL alone', 'equal to R alone, independent of frequency', 'infinite'],
    correctIndex: 2,
    explanation: 'A purely resistive circuit has no reactive component, so its impedance is simply Z = R, and this value does not change with the frequency of the AC supply.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-59',
    type: 'mcq',
    question: 'For an AC circuit containing only an inductor (no resistance), the impedance equals',
    options: ['R', 'XL only', 'XC only', 'zero, always'],
    correctIndex: 1,
    explanation: 'In a purely inductive circuit (R = 0), the impedance reduces to just the inductive reactance, Z = XL = ωL.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-60',
    type: 'mcq',
    question: 'For an AC circuit containing only a capacitor (no resistance), the impedance equals',
    options: ['zero, always', 'XL only', 'R', 'XC only'],
    correctIndex: 3,
    explanation: 'In a purely capacitive circuit (R = 0), the impedance reduces to just the capacitive reactance, Z = XC = 1/(ωC).',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-61',
    type: 'mcq',
    question: 'The quality factor (Q-factor) of a series LCR resonant circuit is a measure of',
    options: [
      'the total power consumed by the circuit',
      'the sharpness (selectivity) of the resonance — how narrow and pronounced the current peak is around the resonant frequency',
      'the number of turns in the inductor',
      'the resistance of the circuit alone'
    ],
    correctIndex: 1,
    explanation: 'The Q-factor quantifies the sharpness of resonance: a high Q-factor means a narrow, sharply peaked resonance curve (highly selective circuit), while a low Q-factor means a broad, less selective resonance.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-62',
    type: 'mcq',
    question: 'A series LCR circuit with a smaller resistance R (all else being equal) generally has a resonance curve that is',
    options: [
      'broader and less sharply peaked',
      'no longer capable of showing resonance at all',
      'exactly the same regardless of R',
      'sharper (narrower) and more pronounced, i.e., a higher Q-factor'
    ],
    correctIndex: 3,
    explanation: 'Since the Q-factor is inversely related to resistance (Q ∝ 1/R, roughly), a smaller resistance produces a sharper, more sharply peaked resonance curve around the resonant frequency.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-63',
    type: 'mcq',
    question: 'A key practical application of a sharply resonant (high Q-factor) LCR circuit is',
    options: [
      'heating a room uniformly',
      'measuring the mass of an object',
      'tuning a radio or television receiver to select one specific broadcast frequency while rejecting others',
      'generating steady DC current'
    ],
    correctIndex: 2,
    explanation: 'A high-Q resonant LCR circuit is used in radio/TV tuning circuits, allowing the receiver to selectively respond strongly to signals at one particular frequency (the desired station) while largely rejecting signals at other frequencies.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-64',
    type: 'mcq',
    question: 'The AC generator (alternator) is a practical application of',
    options: [
      'purely electrostatic principles with no relation to induction',
      'electromagnetic induction, converting mechanical rotational energy into an alternating EMF',
      'the photoelectric effect',
      'thermal expansion'
    ],
    correctIndex: 1,
    explanation: 'An AC generator produces alternating current by rotating a coil in a magnetic field (or a magnetic field around a coil), directly applying the principle of electromagnetic induction covered in the earlier chapter.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-65',
    type: 'mcq',
    question: 'For an AC circuit driven at exactly the resonant frequency, if resistance R is very small (approaching zero), the current at resonance would',
    options: [
      'be unaffected by the value of R',
      'become exactly zero',
      'remain finite and small',
      'become extremely large (approaching infinity in the idealized limit of zero resistance), since I = V/Z = V/R at resonance'
    ],
    correctIndex: 3,
    explanation: 'Since at resonance Z = R, a very small R would allow the current I = V/R to become extremely large for a fixed applied voltage V, approaching infinity in the idealized limit of R → 0.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-66',
    type: 'mcq',
    question: 'An LCR circuit connected to an AC source, when analysed using phasors, treats the applied voltage and current as',
    options: [
      'quantities with no phase relationship to each other',
      'purely scalar quantities with no directional or rotational representation',
      'rotating vectors (phasors) whose magnitude represents amplitude and whose angular position (relative to a reference) represents phase, rotating at the angular frequency ω',
      'static, unchanging quantities with no time dependence'
    ],
    correctIndex: 2,
    explanation: 'In phasor analysis, sinusoidally-varying quantities are represented as vectors rotating at angular frequency ω, with the projection onto a fixed axis giving the instantaneous value, and relative angles between phasors representing phase differences.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-67',
    type: 'mcq',
    question: 'The "apparent power" in an AC circuit refers to',
    options: [
      'the actual power dissipated as heat, always equal to real power',
      'the power factor itself',
      'the product IrmsVrms, without accounting for the phase difference (power factor) between current and voltage',
      'the power at resonance only'
    ],
    correctIndex: 2,
    explanation: 'Apparent power is simply the product of RMS voltage and RMS current (IrmsVrms), without the cosφ (power factor) correction; the actual (real, dissipated) power is apparent power multiplied by the power factor.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-68',
    type: 'mcq',
    question: 'Real power (the power actually converted to heat or useful work) in an AC circuit is related to apparent power by',
    options: [
      'Real power = Apparent power always, with no distinction',
      'Real power = Apparent power × power factor (cosφ)',
      'Real power is unrelated to apparent power',
      'Real power = Apparent power / power factor'
    ],
    correctIndex: 1,
    explanation: 'Real (average, dissipated) power equals apparent power multiplied by the power factor: P = (IrmsVrms) × cosφ, capturing the fact that only part of the apparent power is actually useful/dissipated when there is a phase difference.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-69',
    type: 'mcq',
    question: 'A wattmeter used to measure power in AC circuits is designed to directly account for',
    options: [
      'only the peak voltage',
      'only the frequency of the AC supply',
      'the resistance of the circuit alone, ignoring current entirely',
      'the actual (real) power, incorporating the phase difference between current and voltage via the power factor'
    ],
    correctIndex: 3,
    explanation: 'Unlike a simple product of voltmeter and ammeter readings (which would give apparent power), a wattmeter is specifically designed to measure the true (real) power, inherently accounting for the phase relationship (power factor) between current and voltage.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-70',
    type: 'mcq',
    question: 'A "wattless current" describes a scenario where',
    options: [
      'the voltage in the circuit is exactly zero',
      'the current is exactly zero at all times',
      'the current has no unit of measurement',
      'a non-zero current flows in the circuit, but the average power dissipated is zero, as in a purely reactive (inductive/capacitive) circuit'
    ],
    correctIndex: 3,
    explanation: 'A wattless current refers to the situation (as in a purely inductive or capacitive AC circuit) where current does flow, but because it is 90° out of phase with the voltage, the average power dissipated over a cycle is exactly zero.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'alternating-current-71',
    type: 'assertion-reason',
    question: 'Assertion (A): The average value of a sinusoidal AC current over one complete cycle is zero.\nReason (R): The positive half-cycle and negative half-cycle of a symmetric sinusoidal waveform contribute equal and opposite amounts, cancelling out over the full cycle.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since the sinusoidal waveform is perfectly symmetric about zero, the positive and negative contributions over a full cycle exactly cancel, giving zero average value — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-72',
    type: 'assertion-reason',
    question: 'Assertion (A): AC devices are typically rated using RMS values rather than peak values.\nReason (R): RMS values directly correspond to the equivalent DC value that would produce the same heating (power dissipation) effect, making them practically meaningful.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The practical usefulness of RMS values in comparing AC to equivalent DC power delivery is exactly why they are used as the standard rating for AC devices — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-73',
    type: 'assertion-reason',
    question: 'Assertion (A): In a purely inductive AC circuit, the current lags behind the voltage by 90°.\nReason (R): The induced back-EMF in an inductor opposes the rate of change of current, and mathematically, this results in current reaching its peak a quarter-cycle after the voltage does.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The self-induced back-EMF in an inductor creates exactly this 90° phase lag between current and applied voltage, correctly explained by R.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-74',
    type: 'assertion-reason',
    question: 'Assertion (A): In a purely capacitive AC circuit, the current leads the voltage by 90°.\nReason (R): The current must flow first to build up charge (and hence voltage) on the capacitor, so the current effectively precedes the corresponding voltage buildup in time.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since charge (and hence voltage, V = Q/C) accumulates as a result of current flow, current necessarily precedes (leads) the resulting voltage by 90° in a purely capacitive circuit — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-75',
    type: 'assertion-reason',
    question: 'Assertion (A): A capacitor blocks steady DC current but allows AC current to flow (in the circuit sense) continuously.\nReason (R): Under AC, the capacitor is continuously charging and discharging as the applied voltage alternates, allowing continuous current in the external circuit, whereas under DC, it charges fully and then blocks further current.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This behaviour arises exactly because of the continuous charge/discharge cycle under AC vs the single, completing charge process under DC — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-76',
    type: 'assertion-reason',
    question: 'Assertion (A): At resonance in a series LCR circuit, the current is maximum for a given applied voltage.\nReason (R): At resonance, XL equals XC, so the net reactance is zero, and impedance reduces to its minimum value (just R), maximizing the current I = V/Z.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since impedance is minimized precisely at resonance (Z = R), and current is inversely related to impedance, current is indeed maximized there — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-77',
    type: 'assertion-reason',
    question: 'Assertion (A): The resonant frequency of a series LCR circuit does not depend on the resistance R.\nReason (R): The resonant frequency formula ω0 = 1/√(LC) does not contain R; resistance affects only the sharpness of the resonance curve, not the resonant frequency itself.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since the resonance condition XL = XC involves only L and C, the resulting resonant frequency formula is naturally independent of R, correctly explained by R.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-78',
    type: 'assertion-reason',
    question: 'Assertion (A): No net power is dissipated in an ideal (resistanceless) inductor or capacitor connected to an AC source.\nReason (R): Since current and voltage are 90° out of phase in a purely reactive element, the average value of instantaneous power (VI) over a complete cycle works out to exactly zero.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The 90° phase difference mathematically ensures the average power over a full cycle is zero (energy is alternately absorbed and returned), correctly explained by R.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-79',
    type: 'assertion-reason',
    question: 'Assertion (A): A choke coil is preferred over a resistor to limit current in certain AC applications (like fluorescent tube ballasts).\nReason (R): A choke coil (having very low resistance) limits current mainly through its reactance without significant power dissipation as heat, unlike a resistor, which would waste considerable energy for the same current-limiting effect.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The energy efficiency advantage of a choke (limiting current via reactance rather than resistive heating) is the key reason it is preferred over a plain resistor in such applications — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-80',
    type: 'assertion-reason',
    question: 'Assertion (A): Transformers are essential for efficient long-distance transmission of electrical power.\nReason (R): Stepping up voltage (and correspondingly reducing current) for transmission significantly reduces I²R losses in the transmission lines, and step-down transformers then restore safe voltage levels for local use.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The direct mechanism by which transformers enable efficient transmission (high-voltage, low-current transmission minimizing resistive losses) is exactly captured by R, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-81',
    type: 'assertion-reason',
    question: 'Assertion (A): A series LCR circuit with a small resistance R has a sharply peaked (high Q-factor) resonance curve.\nReason (R): The Q-factor of a series resonant circuit is inversely related to R, so smaller R leads to sharper, more selective resonance.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since Q is inversely related to R, a smaller resistance directly leads to a higher Q-factor and hence a sharper resonance curve, correctly explained by R.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-82',
    type: 'assertion-reason',
    question: 'Assertion (A): The LC oscillation in an ideal (resistanceless) circuit is often compared to a mechanical simple harmonic oscillator, like a mass on a spring.\nReason (R): In both systems, energy oscillates periodically between two forms — electric/magnetic field energy in the LC circuit, and kinetic/potential energy in the mechanical oscillator — following mathematically analogous differential equations.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The mathematical and physical analogy (periodic energy exchange between two forms, following the same type of differential equation) is precisely why the LC circuit and mechanical SHM are compared, correctly explained by R.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-83',
    type: 'assertion-reason',
    question: 'Assertion (A): A real (non-ideal) LC circuit exhibits damped oscillations rather than oscillations of constant amplitude.\nReason (R): Any resistance present in a real circuit continuously dissipates energy as heat, causing the oscillation amplitude to gradually decrease over time.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since real circuits inevitably have some resistance, continuous energy dissipation as heat causes the observed damping of oscillations over time — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-84',
    type: 'assertion-reason',
    question: 'Assertion (A): The impedance of a series LCR circuit is not simply the algebraic sum of R, XL, and XC.\nReason (R): Since these quantities have different phase relationships relative to the current, they must be combined using phasor (vector) addition, giving Z = √(R² + (XL - XC)²).',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The differing phase relationships (R in phase with current, XL and XC each 90° out of phase but in opposite senses) necessitate phasor addition rather than simple algebraic addition — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-85',
    type: 'assertion-reason',
    question: 'Assertion (A): A low power factor is generally undesirable in electrical power systems.\nReason (R): For a fixed amount of real (useful) power delivered, a lower power factor requires a proportionally larger current, increasing I²R losses in the supply lines and requiring larger-capacity equipment.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since P = IV cosφ, a smaller cosφ (lower power factor) demands larger current I for the same real power P, increasing line losses and equipment sizing requirements — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-86',
    type: 'assertion-reason',
    question: 'Assertion (A): The resonant frequency formula for an LC circuit (ω = 1/√(LC)) is identical to the resonant frequency formula for a driven series LCR circuit.\nReason (R): In both cases, resonance/natural oscillation occurs at the frequency where the effects of L and C exactly balance each other (XL = XC in the driven case, or an analogous balance in the free oscillation case).',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Both scenarios involve the same underlying balance condition between inductive and capacitive effects, resulting in the identical formula ω = 1/√(LC) — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-87',
    type: 'assertion-reason',
    question: 'Assertion (A): The current in a series LCR circuit decreases as the frequency moves away from the resonant frequency (either higher or lower).\nReason (R): Moving away from resonance increases the magnitude of the net reactance |XL - XC|, which increases the impedance Z and hence decreases the current I = V/Z.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Away from resonance, the net reactance no longer cancels (grows in magnitude), increasing overall impedance and hence reducing current for a given applied voltage — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-88',
    type: 'assertion-reason',
    question: 'Assertion (A): A wattmeter gives a more accurate measurement of true power consumption in an AC circuit than simply multiplying a voltmeter reading by an ammeter reading.\nReason (R): The product of voltmeter and ammeter readings gives only the apparent power (IrmsVrms), without accounting for the power factor (cosφ), whereas a wattmeter is designed to directly measure the true (real) power.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since apparent power overestimates real power whenever there is a phase difference (φ ≠ 0), a wattmeter\'s ability to directly account for cosφ makes it a more accurate measure of actual power dissipated — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-89',
    type: 'assertion-reason',
    question: 'Assertion (A): An ideal inductor connected to a DC source (in steady state, after the initial transient) offers zero opposition to current flow.\nReason (R): Inductive reactance XL = ωL becomes zero when ω = 0 (as for steady DC), since there is no changing current to induce an opposing back-EMF once steady state is reached.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since DC corresponds to ω = 0, and XL = ωL, the reactance vanishes in the DC steady-state limit, consistent with an ideal (resistanceless) inductor offering no opposition to steady current — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-90',
    type: 'assertion-reason',
    question: 'Assertion (A): The RMS value of a sinusoidal AC current is always less than its peak value.\nReason (R): Irms = I0/√2 ≈ 0.707 I0, which is mathematically always less than I0 for any positive I0.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since 1/√2 ≈ 0.707 is always less than 1, the RMS value is always a fixed fraction (about 70.7%) of the peak value for any sinusoidal current, correctly explained by R.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-91',
    type: 'assertion-reason',
    question: 'Assertion (A): The current and voltage in a series LCR circuit are exactly in phase only at the resonant frequency.\nReason (R): At any frequency other than resonance, XL ≠ XC, leaving a non-zero net reactance that introduces a non-zero phase difference between current and voltage.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since a non-zero net reactance produces a non-zero phase angle φ (tanφ = (XL-XC)/R), it is only at resonance (where net reactance is zero) that current and voltage become exactly in phase — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-92',
    type: 'assertion-reason',
    question: 'Assertion (A): An ideal transformer with more turns in the secondary than the primary produces a higher secondary voltage but a lower secondary current (compared to the primary), for the same input power.\nReason (R): For an ideal (100% efficient) transformer, input power equals output power (VpIp = VsIs), so if voltage increases from primary to secondary, current must correspondingly decrease to keep the power the same.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The conservation of power in an ideal transformer directly requires that an increase in voltage be accompanied by a proportional decrease in current, correctly explained by R.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-93',
    type: 'assertion-reason',
    question: 'Assertion (A): Eddy current losses and hysteresis losses both reduce the efficiency of a real transformer.\nReason (R): Both types of losses ultimately dissipate energy as heat within the transformer\'s core material, energy that is drawn from the primary but does not appear as useful output in the secondary.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since both eddy current and hysteresis losses convert some input energy into unwanted heat within the core, they both directly reduce the overall efficiency of a real transformer — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-94',
    type: 'assertion-reason',
    question: 'Assertion (A): The phase angle φ between current and voltage in a series LCR circuit is given by tanφ = (XL - XC)/R.\nReason (R): This formula follows directly from the phasor diagram of the circuit, where the net reactive voltage (VL - VC) and the resistive voltage (VR) form the two perpendicular sides of a right triangle, with φ being the angle between the total voltage phasor and the current phasor.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The geometric relationship in the phasor diagram (right triangle formed by resistive and net reactive voltage components) directly yields the tanφ formula — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-95',
    type: 'assertion-reason',
    question: 'Assertion (A): A series LCR circuit is sometimes called an "acceptor circuit."\nReason (R): At resonance, the circuit "accepts" (allows through with maximum current) signals at its specific resonant frequency while offering greater impedance (hence less current) to other frequencies.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This frequency-selective behaviour (maximum current at resonance, reduced current elsewhere) is exactly why this terminology is used, correctly explained by R.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-96',
    type: 'assertion-reason',
    question: 'Assertion (A): In a purely resistive AC circuit, the power dissipated at any instant is never negative.\nReason (R): Since current and voltage are always in phase in a purely resistive circuit, their product (instantaneous power) is always non-negative — both are positive together or both negative together, giving a positive product in either case.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since V and I are always in phase (both change sign together) in a resistor, their instantaneous product VI is always non-negative throughout the cycle, correctly explained by R.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-97',
    type: 'assertion-reason',
    question: 'Assertion (A): In a purely reactive AC circuit (inductor or capacitor alone), the instantaneous power can be negative during parts of the cycle.\nReason (R): Because current and voltage are 90° out of phase, there are portions of each cycle where one is positive while the other is negative, making their instantaneous product (power) negative during those intervals — corresponding to energy flowing back from the reactive element to the source.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The 90° phase difference means current and voltage have opposite signs during certain portions of the cycle, giving negative instantaneous power (energy returning to the source), which correctly explains why average power over the full cycle is zero — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-98',
    type: 'assertion-reason',
    question: 'Assertion (A): The impedance of an AC circuit generally depends on the frequency of the applied AC source.\nReason (R): Both inductive reactance (XL = ωL) and capacitive reactance (XC = 1/ωC) explicitly depend on angular frequency ω, so the overall impedance (which combines R with the net reactance) generally varies with frequency.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since the reactive components of impedance explicitly depend on frequency, the overall impedance of a circuit containing any reactance also generally depends on frequency, correctly explained by R.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-99',
    type: 'assertion-reason',
    question: 'Assertion (A): For a purely resistive AC circuit, the impedance is completely independent of the frequency of the AC supply.\nReason (R): Resistance R does not involve ω in its definition, unlike inductive or capacitive reactance.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since a purely resistive circuit\'s impedance is simply R (which has no frequency dependence built into its definition, unlike XL or XC), it remains constant regardless of the AC supply\'s frequency — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-100',
    type: 'assertion-reason',
    question: 'Assertion (A): A phasor diagram is a useful tool for analysing series LCR circuits.\nReason (R): It allows visual representation of the differing phase relationships between voltages across R, L, and C (relative to the common current), simplifying the otherwise complex combination of these voltages into a single geometric (vector addition) picture.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The visual/geometric simplification that phasor diagrams provide for combining out-of-phase quantities is exactly why they are such a useful analytical tool for series LCR circuits — R correctly explains A.',
    difficulty: 'medium'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'alternating-current-101',
    type: 'statement',
    question: 'Statement I: The average value of a sinusoidal AC current over one full cycle is zero.\nStatement II: The RMS value of a sinusoidal AC current over one full cycle is also zero.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — RMS value is calculated by squaring the current first (which removes sign, making all contributions positive), so RMS value is I0/√2, a non-zero value, unlike the average value.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-102',
    type: 'statement',
    question: 'Statement I: Current lags voltage by 90° in a purely inductive AC circuit.\nStatement II: Current leads voltage by 90° in a purely capacitive AC circuit.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — these are the standard phase relationships in purely inductive and purely capacitive AC circuits, respectively.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-103',
    type: 'statement',
    question: 'Statement I: Inductive reactance increases with increasing frequency.\nStatement II: Capacitive reactance increases with increasing frequency.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct (XL = ωL increases with ω). Statement II is false — capacitive reactance DECREASES with increasing frequency (XC = 1/ωC), the opposite trend.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-104',
    type: 'statement',
    question: 'Statement I: At resonance in a series LCR circuit, the impedance is minimum.\nStatement II: At resonance in a series LCR circuit, the current is minimum.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — current is MAXIMUM (not minimum) at resonance, since it is inversely related to the (minimized) impedance.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-105',
    type: 'statement',
    question: 'Statement I: A capacitor blocks steady DC current in the long-term steady state.\nStatement II: An ideal (resistanceless) inductor blocks steady DC current in the long-term steady state.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — a capacitor eventually blocks DC once fully charged. Statement II is false — an ideal (resistanceless) inductor offers NO opposition to steady DC current in the long-term steady state (XL = 0 at ω = 0), so it does not block DC.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-106',
    type: 'statement',
    question: 'Statement I: The average power dissipated in a purely inductive AC circuit is zero.\nStatement II: The average power dissipated in a purely resistive AC circuit is zero.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — no net power is dissipated in an ideal inductor. Statement II is false — a resistive circuit DOES dissipate real average power (P = Irms²R), it is not zero.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-107',
    type: 'statement',
    question: 'Statement I: The power factor of a purely resistive circuit is 1.\nStatement II: The power factor of a purely reactive (inductive or capacitive) circuit is 1 as well.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — a purely reactive circuit has a power factor of ZERO (cos90° = 0), not 1.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-108',
    type: 'statement',
    question: 'Statement I: A transformer works with alternating current but not with steady direct current.\nStatement II: A transformer relies on mutual induction between its primary and secondary coils.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — these are fundamental facts about transformer operation, both directly related to the requirement of changing flux for mutual induction.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-109',
    type: 'statement',
    question: 'Statement I: In an ideal transformer, VsIs = VpIp (power is conserved).\nStatement II: In an ideal transformer, Vs/Vp = Ns/Np (voltage ratio equals turns ratio).',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and describe standard properties of an ideal transformer: power conservation and the voltage-turns ratio relationship.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-110',
    type: 'statement',
    question: 'Statement I: The resonant frequency of a series LCR circuit depends only on L and C, not on R.\nStatement II: The sharpness (Q-factor) of the resonance curve depends on R.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — resonant frequency ω0 = 1/√(LC) is independent of R, while the Q-factor (sharpness of resonance) does depend on R.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-111',
    type: 'statement',
    question: 'Statement I: Eddy current and hysteresis losses reduce the efficiency of real transformers.\nStatement II: A well-designed real transformer has 100% efficiency, identical to an ideal transformer.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — real transformers always have some losses (though good design minimizes them), so they never achieve exactly 100% efficiency like the idealized theoretical model.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-112',
    type: 'statement',
    question: 'Statement I: In a series LCR circuit, the voltage across the resistor, inductor, and capacitor can be simply added algebraically to get the total applied voltage.\nStatement II: In a series LCR circuit, the total applied voltage must be found using phasor (vector) addition of the individual component voltages, due to their differing phase relationships.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — simple algebraic addition does not account for the phase differences between VR, VL, and VC. Statement II correctly describes the need for phasor addition.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-113',
    type: 'statement',
    question: 'Statement I: A choke coil limits AC current mainly through reactance, dissipating little power as heat.\nStatement II: A resistor limiting the same current would dissipate significantly more power as heat compared to the choke coil.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe why a choke coil is preferred over a resistor for current-limiting in certain AC applications — energy efficiency due to minimal resistive heating.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-114',
    type: 'statement',
    question: 'Statement I: The LC oscillation in an ideal circuit is analogous to a mechanical simple harmonic oscillator.\nStatement II: In a real (non-ideal) LC circuit with resistance, the oscillations continue indefinitely at constant amplitude, unlike the ideal case.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — real (resistive) LC circuits show DAMPED oscillations (amplitude decreasing over time due to energy dissipation), not constant-amplitude oscillations.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-115',
    type: 'statement',
    question: 'Statement I: The power factor of an AC circuit affects the current needed to deliver a given amount of real power.\nStatement II: A circuit with a lower power factor requires a smaller current to deliver the same real power, compared to a circuit with a higher power factor.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — a LOWER power factor requires a LARGER (not smaller) current to deliver the same real power, since P = IV cosφ.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-116',
    type: 'statement',
    question: 'Statement I: The mnemonic "CIVIL" helps remember that in a Capacitor, current (I) leads voltage (V).\nStatement II: The same mnemonic also indicates that in an inductor (L), voltage (V) leads current (I).',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the two parts of the "CIVIL" mnemonic used to remember AC phase relationships.',
    difficulty: 'easy'
  },
  {
    id: 'alternating-current-117',
    type: 'statement',
    question: 'Statement I: Apparent power in an AC circuit is always equal to the real (dissipated) power.\nStatement II: Real power equals apparent power multiplied by the power factor.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — apparent power equals real power only when the power factor is exactly 1 (purely resistive circuit); in general they differ. Statement II correctly captures their general relationship.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-118',
    type: 'statement',
    question: 'Statement I: A series LCR circuit with a very small resistance can produce a very large current at resonance for a fixed applied voltage.\nStatement II: This is because impedance at resonance equals R, and a smaller R leads to a larger current (I = V/R) for the same voltage.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and directly connected — this describes the phenomenon of very large resonant currents in low-resistance LCR circuits.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-119',
    type: 'statement',
    question: 'Statement I: The RMS value of AC voltage/current is always greater than its peak value.\nStatement II: The RMS value of a sinusoidal AC quantity is approximately 0.707 times its peak value.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — RMS value is always LESS than (not greater than) the peak value. Statement II is correct, giving the standard numerical relationship (1/√2 ≈ 0.707).',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-120',
    type: 'statement',
    question: 'Statement I: An AC generator converts mechanical energy into electrical energy using electromagnetic induction.\nStatement II: A transformer also converts mechanical energy into electrical energy, similar to a generator.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — a transformer has no moving parts and does not convert mechanical energy; it simply transfers/transforms electrical energy from primary to secondary via mutual induction.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-121',
    type: 'statement',
    question: 'Statement I: The phase angle between voltage and current in a series LCR circuit depends on the relative magnitudes of XL and XC.\nStatement II: If XL = XC exactly, the phase angle between voltage and current is zero.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — the phase angle formula tanφ = (XL-XC)/R directly depends on the relative sizes of XL and XC, and becomes exactly zero (φ = 0) when XL = XC (resonance condition).',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-122',
    type: 'statement',
    question: 'Statement I: An ideal LC circuit (no resistance) oscillates with constant amplitude indefinitely, once set into oscillation.\nStatement II: The oscillation frequency of this ideal LC circuit depends on both L and C, but not on the initial amplitude of oscillation.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — with no resistance to dissipate energy, the ideal LC circuit oscillates with constant amplitude forever, and its frequency (ω = 1/√(LC)) depends only on L and C, independent of the initial amplitude (analogous to simple harmonic motion in mechanics).',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-123',
    type: 'statement',
    question: 'Statement I: A hot-wire ammeter directly measures the peak value of an AC current.\nStatement II: Most standard AC measuring instruments are calibrated to display RMS values, based on the heating effect of current.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — hot-wire ammeters (and most standard AC instruments) measure RMS values, not peak values, based on the heating effect. Statement II is correct.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-124',
    type: 'statement',
    question: 'Statement I: For frequencies well below the resonant frequency in a series LCR circuit, capacitive reactance tends to dominate.\nStatement II: For frequencies well above the resonant frequency in a series LCR circuit, inductive reactance tends to dominate.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the frequency-dependent dominance of reactance types on either side of resonance, consistent with how XL and XC vary with frequency.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-125',
    type: 'statement',
    question: 'Statement I: The applied voltage and current phasors in an LCR circuit rotate at the same angular frequency ω.\nStatement II: In steady-state AC analysis, the relative angle between the voltage and current phasors (not their absolute positions) is what determines the phase difference φ.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — in steady-state analysis, both voltage and current phasors rotate together at the same ω, and it is their relative angular separation that represents the constant phase difference φ.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-126',
    type: 'statement',
    question: 'Statement I: Transformers can be used to convert AC voltage to a different DC voltage directly.\nStatement II: Transformers only change the magnitude of AC voltage/current; converting AC to DC requires an additional rectification process.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — a transformer alone cannot convert AC to DC; it only changes the AC voltage/current magnitude. Statement II correctly notes that a separate rectification process is needed to obtain DC.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-127',
    type: 'statement',
    question: 'Statement I: A series LCR circuit at resonance behaves as if it were purely resistive.\nStatement II: This is because the net reactance is zero at resonance, leaving only resistance to determine the circuit\'s impedance and phase behaviour.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and directly connected — at resonance, with net reactance zero, the circuit\'s impedance (Z = R) and phase behaviour (zero phase difference) are effectively identical to a purely resistive circuit.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-128',
    type: 'statement',
    question: 'Statement I: A step-down transformer used in household power supply reduces high transmission voltage to a safer, usable level.\nStatement II: The primary coil of a step-down transformer has fewer turns than its secondary coil.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — a step-down transformer\'s primary has MORE turns than its secondary (not fewer), which is why the voltage is reduced (stepped down) from primary to secondary.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-129',
    type: 'statement',
    question: 'Statement I: The instantaneous power in a purely resistive AC circuit is never negative.\nStatement II: The instantaneous power in a purely reactive AC circuit can be negative during parts of the cycle, corresponding to energy flowing back to the source.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — in a resistor, V and I stay in phase (never oppositely signed, giving non-negative power), while in a reactive element, the 90° phase difference allows for periods of negative instantaneous power.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-130',
    type: 'statement',
    question: 'Statement I: The concept of impedance in AC circuits generalizes the concept of resistance in DC circuits.\nStatement II: Unlike resistance, impedance in general depends on the frequency of the AC supply.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — impedance extends the DC concept of resistance to AC circuits (incorporating reactance and phase), and unlike pure resistance, it generally varies with the frequency of the applied AC.',
    difficulty: 'medium'
  },

  // ==================== HOW MANY / NUMBER-CORRECT (20) ====================
  {
    id: 'alternating-current-131',
    type: 'how-many',
    question: 'How many of the following statements about RMS and average values of AC current are correct?\n1. The average value of a sinusoidal AC current over one full cycle is zero.\n2. The RMS value of a sinusoidal current is I0/√2.\n3. The average value over one half-cycle is (2/π)I0.\n4. RMS value corresponds to the DC current that would produce the same heating effect.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements are correctly stated standard results regarding average and RMS values of sinusoidal AC current.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-132',
    type: 'how-many',
    question: 'How many of the following statements about phase relationships in AC circuits are correct?\n1. Current and voltage are in phase in a purely resistive circuit.\n2. Current lags voltage by 90° in a purely inductive circuit.\n3. Current leads voltage by 90° in a purely capacitive circuit.\n4. Current and voltage are always in phase, regardless of the circuit elements present.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — phase relationship depends on the circuit elements; it is only "always in phase" for purely resistive circuits, not universally true.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-133',
    type: 'how-many',
    question: 'How many of the following statements about resonance in a series LCR circuit are correct?\n1. At resonance, XL = XC.\n2. At resonance, impedance is minimum (equal to R).\n3. At resonance, current is minimum.\n4. Resonant frequency is independent of R.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — current is MAXIMUM (not minimum) at resonance.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-134',
    type: 'how-many',
    question: 'How many of the following statements about power in AC circuits are correct?\n1. Average power in a purely resistive circuit is Irms²R.\n2. Average power in a purely reactive circuit (inductor or capacitor alone) is zero.\n3. The power factor of a purely resistive circuit is 1.\n4. Apparent power always equals real (dissipated) power, regardless of the circuit.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — apparent power equals real power only when power factor is 1 (purely resistive); in general, real power = apparent power × cosφ, which is less than apparent power when φ ≠ 0.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-135',
    type: 'how-many',
    question: 'How many of the following statements about reactance are correct?\n1. Inductive reactance XL = ωL.\n2. Capacitive reactance XC = 1/(ωC).\n3. XL increases with frequency; XC decreases with frequency.\n4. Both XL and XC increase with frequency.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — only XL increases with frequency; XC decreases, contradicting statement 4\'s claim that both increase.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-136',
    type: 'how-many',
    question: 'How many of the following statements about transformers are correct?\n1. They work on the principle of mutual induction.\n2. An ideal transformer conserves power (VpIp = VsIs).\n3. Real transformers have zero losses under all conditions.\n4. They function properly with steady DC applied to the primary.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    explanation: 'Statements 1 and 2 are correct. Statement 3 is false — real transformers always have some losses (eddy current, hysteresis, copper losses). Statement 4 is false — transformers require changing flux (AC), and do not function properly with steady DC.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-137',
    type: 'how-many',
    question: 'How many of the following statements about the LC oscillator are correct?\n1. Energy oscillates between the capacitor\'s electric field and the inductor\'s magnetic field.\n2. The oscillation frequency is ω = 1/√(LC).\n3. In an ideal (resistanceless) LC circuit, oscillations continue with constant amplitude indefinitely.\n4. In a real LC circuit with resistance, oscillations grow in amplitude over time.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — real (resistive) LC circuits show DAMPED oscillations, with amplitude DECREASING (not growing) over time due to energy dissipation.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-138',
    type: 'how-many',
    question: 'How many of the following statements about impedance are correct?\n1. Impedance is the total opposition to AC current flow in a circuit.\n2. For a series LCR circuit, Z = √(R² + (XL-XC)²).\n3. Impedance of a purely resistive circuit is independent of frequency.\n4. Impedance of any AC circuit is always independent of frequency.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — impedance generally DOES depend on frequency whenever reactive elements (inductors/capacitors) are present; only a purely resistive circuit\'s impedance is frequency-independent.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-139',
    type: 'how-many',
    question: 'How many of the following statements about power factor are correct?\n1. Power factor is given by cosφ, where φ is the phase difference between voltage and current.\n2. A low power factor means a larger current is needed to deliver the same real power.\n3. Power factor is always exactly 1 for any AC circuit.\n4. Power factor can range from 0 (purely reactive) to 1 (purely resistive).',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — power factor equals 1 only for purely resistive circuits; it generally takes values between 0 and 1 depending on the circuit\'s reactive content.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-140',
    type: 'how-many',
    question: 'How many of the following statements about choke coils are correct?\n1. A choke coil is essentially an inductor with very low resistance.\n2. It limits AC current mainly through reactance rather than resistive heating.\n3. It is more energy-efficient than a resistor for the same current-limiting purpose.\n4. A choke coil dissipates the same amount of heat as an equivalent current-limiting resistor.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a choke coil dissipates significantly LESS heat than a resistor providing the same current-limiting effect, which is precisely its main advantage.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-141',
    type: 'how-many',
    question: 'How many of the following are correct SI units?\n1. Reactance (XL or XC) — ohm\n2. Impedance (Z) — ohm\n3. Power factor — dimensionless (no unit)\n4. Angular frequency (ω) — radian per second',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements are correctly stated: reactance and impedance are both measured in ohms, power factor is a dimensionless ratio, and angular frequency is in rad/s. All 4 are correct.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-142',
    type: 'how-many',
    question: 'How many of the following statements about the phasor diagram of a series LCR circuit are correct?\n1. The resistor voltage phasor is parallel to the current phasor.\n2. The inductor voltage phasor is 90° ahead of the current phasor.\n3. The capacitor voltage phasor is 90° ahead of the current phasor.\n4. The inductor and capacitor voltage phasors are 180° apart from each other.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — the capacitor voltage phasor is 90° BEHIND (not ahead of) the current phasor, opposite to the inductor case.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-143',
    type: 'how-many',
    question: 'How many of the following statements comparing XL and XC dominance at different frequencies are correct?\n1. At frequencies well below resonance, XC dominates over XL.\n2. At frequencies well above resonance, XL dominates over XC.\n3. Exactly at resonance, XL and XC are equal.\n4. Both XL and XC remain constant regardless of frequency.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — both XL and XC explicitly change with frequency (XL increases, XC decreases), contradicting the claim that they remain constant.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-144',
    type: 'how-many',
    question: 'How many of the following statements about ideal transformer relations are correct?\n1. Vs/Vp = Ns/Np\n2. Ip/Is = Ns/Np\n3. A step-up transformer has Ns > Np\n4. A step-down transformer has Ns > Np',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a step-down transformer has Ns < Np (fewer secondary turns), not Ns > Np, which describes a step-up transformer instead.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-145',
    type: 'how-many',
    question: 'How many of the following statements about a series LCR circuit\'s current variation with frequency are correct?\n1. Current is maximum at the resonant frequency.\n2. Current decreases as frequency moves away from resonance in either direction.\n3. A smaller resistance R produces a sharper (more peaked) resonance curve.\n4. The resonance curve\'s peak position (resonant frequency) shifts when R is changed.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the resonant frequency itself (ω0 = 1/√(LC)) does NOT shift with changes in R; only the sharpness of the peak (Q-factor) changes.',
    difficulty: 'hard'
  },
  {
    id: 'alternating-current-146',
    type: 'how-many',
    question: 'How many of the following statements about the behaviour of capacitors and inductors with DC and AC are correct?\n1. A capacitor blocks steady DC in the long-term steady state.\n2. An ideal (resistanceless) inductor offers zero opposition to steady DC.\n3. A capacitor offers decreasing opposition to AC as frequency increases.\n4. An inductor offers decreasing opposition to AC as frequency increases.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — an inductor offers INCREASING (not decreasing) opposition to AC as frequency increases, since XL = ωL grows with frequency.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-147',
    type: 'how-many',
    question: 'How many of the following statements about wattless current are correct?\n1. It refers to a scenario where current flows but average power dissipated is zero.\n2. It occurs in purely reactive (inductive or capacitive) AC circuits.\n3. It occurs in purely resistive AC circuits.\n4. It arises because current and voltage are 90° out of phase.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — wattless current specifically does NOT occur in purely resistive circuits, since those always dissipate real (non-zero) power.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-148',
    type: 'how-many',
    question: 'How many of the following statements about applications of resonant LCR circuits are correct?\n1. They are used in radio/TV tuning circuits.\n2. A series resonant circuit is sometimes called an "acceptor circuit."\n3. High Q-factor circuits provide sharp frequency selectivity.\n4. Resonant circuits have no practical applications outside of theoretical physics.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — resonant LCR circuits have significant practical applications (like radio tuning), directly contradicting the claim in statement 4.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-149',
    type: 'how-many',
    question: 'How many of the following statements about real (non-ideal) transformer losses are correct?\n1. Flux leakage occurs when not all flux from the primary links the secondary.\n2. Copper losses arise from the resistance of the windings, dissipating power as heat.\n3. Eddy current losses occur in the transformer\'s core.\n4. Hysteresis losses occur due to repeated magnetization/demagnetization of the core.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe the standard categories of energy losses in a real transformer, as covered in NCERT.',
    difficulty: 'medium'
  },
  {
    id: 'alternating-current-150',
    type: 'how-many',
    question: 'How many of the following statements about AC circuit fundamentals are correct?\n1. Angular frequency ω = 2πf.\n2. The peak value of a sinusoidal AC voltage is denoted V0.\n3. RMS value of sinusoidal AC current equals I0/√2.\n4. The phase difference between current and voltage in an AC circuit is always exactly 90°, regardless of the circuit elements.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the phase difference depends on the specific circuit (0° for pure resistance, 90° for pure reactance, somewhere in between for a general LCR circuit), not always exactly 90°.',
    difficulty: 'medium'
  }
];
