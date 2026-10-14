export const ELECTROMAGNETIC_INDUCTION = [
  // ==================== MCQ (70) ====================
  {
    id: 'electromagnetic-induction-1',
    type: 'mcq',
    question: 'Electromagnetic induction refers to the phenomenon of',
    options: [
      'generation of a magnetic field by a stationary charge',
      'generation of an EMF (and hence current, if the circuit is closed) in a conductor due to a changing magnetic flux linked with it',
      'generation of heat by a resistor carrying current',
      'generation of magnetic field lines that never change with time'
    ],
    correctIndex: 1,
    explanation: 'Electromagnetic induction is the phenomenon where a changing magnetic flux through a circuit induces an EMF in it, discovered experimentally by Faraday and Henry.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-2',
    type: 'mcq',
    question: 'Magnetic flux through a surface is defined as',
    options: [
      'the total charge passing through the surface',
      'the surface integral of the magnetic field over that surface (Φ = ∫B·dA)',
      'the current flowing through the surface',
      'the resistance of the surface'
    ],
    correctIndex: 1,
    explanation: 'Magnetic flux ΦB through a surface is defined as the surface integral of the magnetic field, ΦB = ∫B·dA, analogous to electric flux in electrostatics.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-3',
    type: 'mcq',
    question: 'The SI unit of magnetic flux is',
    options: ['tesla', 'weber', 'henry', 'farad'],
    correctIndex: 1,
    explanation: 'The SI unit of magnetic flux is the weber (Wb), where 1 Wb = 1 tesla × 1 metre².',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-4',
    type: 'mcq',
    question: 'Faraday\'s law of electromagnetic induction states that the induced EMF in a circuit is',
    options: [
      'directly proportional to the magnetic flux linked with the circuit',
      'directly proportional to the negative rate of change of magnetic flux linked with the circuit',
      'independent of the rate of change of flux',
      'inversely proportional to the rate of change of flux'
    ],
    correctIndex: 1,
    explanation: 'Faraday\'s law states ε = -dΦ/dt, i.e., the induced EMF equals the negative rate of change of magnetic flux, meaning it depends specifically on how fast the flux changes, not on the flux value itself.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-5',
    type: 'mcq',
    question: 'According to Faraday\'s law, if the magnetic flux through a circuit remains constant (unchanging) with time, the induced EMF is',
    options: ['maximum', 'zero', 'infinite', 'dependent only on the flux magnitude'],
    correctIndex: 1,
    explanation: 'Since ε = -dΦ/dt, a constant (unchanging) flux gives dΦ/dt = 0, resulting in zero induced EMF, regardless of how large the flux itself might be.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-6',
    type: 'mcq',
    question: 'Magnetic flux linked with a circuit can be changed by',
    options: [
      'changing the magnetic field strength, the area of the circuit, or the angle between the field and the area vector',
      'only changing the magnetic field strength',
      'only changing the area of the circuit',
      'flux cannot be changed once a circuit is set up'
    ],
    correctIndex: 0,
    explanation: 'Since Φ = BA cosθ, flux can be changed by varying B (field strength), A (circuit area), or θ (relative orientation between the field and the circuit\'s area vector), or any combination of these.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-7',
    type: 'mcq',
    question: 'For a coil of N turns, each with the same magnetic flux Φ linked through it, Faraday\'s law gives the induced EMF as',
    options: ['ε = -dΦ/dt', 'ε = -N dΦ/dt', 'ε = -Φ/N', 'ε = -NΦ, independent of time'],
    correctIndex: 1,
    explanation: 'For a coil with N turns, each carrying the same flux linkage, the total induced EMF is ε = -N dΦ/dt, since the EMFs of individual turns add up in series.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-8',
    type: 'mcq',
    question: 'Lenz\'s law states that the direction of an induced current is such that',
    options: [
      'it always increases the change in flux that produced it',
      'it opposes the change in magnetic flux that produced it',
      'it is unrelated to the change in flux',
      'it always flows in the same direction, regardless of the nature of the flux change'
    ],
    correctIndex: 1,
    explanation: 'Lenz\'s law states that the induced current flows in a direction such that it opposes the very change in magnetic flux that caused it, which is the physical basis for the negative sign in Faraday\'s law.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-9',
    type: 'mcq',
    question: 'Lenz\'s law is essentially a consequence of which fundamental conservation principle?',
    options: ['Conservation of charge', 'Conservation of momentum', 'Conservation of energy', 'Conservation of angular momentum'],
    correctIndex: 2,
    explanation: 'Lenz\'s law is a manifestation of the conservation of energy: if the induced current aided the change in flux instead of opposing it, it would create energy from nothing, violating energy conservation.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-10',
    type: 'mcq',
    question: 'If the north pole of a bar magnet is moved toward a stationary conducting loop, the induced current in the loop flows in a direction such that',
    options: [
      'the near face of the loop becomes a north pole, repelling the approaching magnet',
      'the near face of the loop becomes a south pole, attracting the approaching magnet',
      'no current is induced at all',
      'the current direction is unpredictable'
    ],
    correctIndex: 0,
    explanation: 'By Lenz\'s law, the induced current opposes the increasing flux (due to the approaching north pole) by creating its own north pole on the near face of the loop, repelling the incoming magnet.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-11',
    type: 'mcq',
    question: 'If the north pole of a bar magnet is moved away from a stationary conducting loop, the induced current in the loop flows in a direction such that',
    options: [
      'the near face of the loop becomes a south pole, attracting the receding magnet (opposing its departure)',
      'the near face of the loop becomes a north pole, repelling the magnet further away',
      'no current is induced',
      'the loop\'s temperature decreases sharply'
    ],
    correctIndex: 0,
    explanation: 'As the magnet moves away, flux through the loop decreases; by Lenz\'s law, the induced current opposes this decrease by creating a south pole on the near face, attracting the magnet (opposing its departure).',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-12',
    type: 'mcq',
    question: 'Lenz\'s law implies that work must be done against the induced effects (like an opposing force) whenever',
    options: [
      'a magnet is moved relative to a conducting loop to change the flux, or an electromagnetic actuation changes flux through a circuit',
      'a circuit is simply switched off with no change in flux',
      'a stationary charge sits in a magnetic field',
      'two loops of identical current are placed side by side'
    ],
    correctIndex: 0,
    explanation: 'Whenever relative motion (or another mechanism) is used to actively change the flux through a circuit and induce a current, the induced effects oppose this change, requiring an external agent to do work against this opposition — this converts mechanical work into electrical energy.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-13',
    type: 'mcq',
    question: 'Motional EMF refers to the EMF induced in a conductor',
    options: [
      'due to a purely time-varying magnetic field with the conductor stationary',
      'due to the physical motion of the conductor (or part of it) through a magnetic field, resulting in a changing flux',
      'due to a chemical reaction inside the conductor',
      'that occurs even in the complete absence of any magnetic field'
    ],
    correctIndex: 1,
    explanation: 'Motional EMF specifically refers to the EMF generated because a conductor is physically moving relative to a magnetic field (or through a region of varying field), leading to a change in enclosed flux and hence an induced EMF.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-14',
    type: 'mcq',
    question: 'The motional EMF induced in a straight conducting rod of length l, moving with velocity v perpendicular to a uniform magnetic field B (with v, B, and the rod mutually perpendicular), is given by',
    options: ['ε = Bvl', 'ε = Bv/l', 'ε = Bl/v', 'ε = B/(vl)'],
    correctIndex: 0,
    explanation: 'For a rod moving with velocity v perpendicular to both its own length and a uniform field B, the motional EMF is ε = Bvl, derivable either from the force on free charges (qv×B) or from the rate of change of flux.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-15',
    type: 'mcq',
    question: 'Motional EMF can be understood at the microscopic level as arising from',
    options: [
      'the electric field alone acting on stationary charges',
      'the magnetic (Lorentz) force qv×B acting on free charges within the moving conductor, pushing them along the length of the conductor',
      'gravitational force acting on the charges',
      'a chemical potential difference'
    ],
    correctIndex: 1,
    explanation: 'As the conductor moves through the field, free charges within it experience the magnetic component of the Lorentz force (qv × B), which drives them to accumulate at one end, creating the motional EMF.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-16',
    type: 'mcq',
    question: 'Eddy currents are',
    options: [
      'currents that flow only in a straight wire',
      'induced currents that circulate within the bulk (volume) of a conductor when it experiences a changing magnetic flux',
      'currents used exclusively in nuclear reactors',
      'currents that exist only in insulators'
    ],
    correctIndex: 1,
    explanation: 'Eddy currents are induced currents that form closed loops within the bulk of a conductor (rather than being confined to a wire), arising whenever the conductor experiences a changing magnetic flux.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-17',
    type: 'mcq',
    question: 'Eddy currents are generally considered undesirable in transformer and motor cores because they',
    options: [
      'increase the efficiency of the device',
      'cause energy loss as heat (I²R losses within the core material), reducing overall efficiency',
      'have no effect on the device\'s performance',
      'increase the magnetic field strength significantly'
    ],
    correctIndex: 1,
    explanation: 'Eddy currents dissipate energy as heat within the conducting core (due to the core\'s own resistance), representing an unwanted energy loss that reduces the efficiency of devices like transformers and motors.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-18',
    type: 'mcq',
    question: 'Eddy current losses in transformer cores are minimized by',
    options: [
      'using a solid block of iron for the core',
      'using a laminated core (thin, insulated sheets of iron stacked together) instead of a solid block',
      'removing the core entirely',
      'increasing the core\'s electrical conductivity'
    ],
    correctIndex: 1,
    explanation: 'Laminating the core into thin sheets, each insulated from the next, breaks up the paths available for eddy currents to circulate, significantly reducing eddy current losses compared to a solid core.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-19',
    type: 'mcq',
    question: 'Eddy currents are put to beneficial use in',
    options: [
      'electromagnetic braking systems, induction furnaces, and induction cooktops',
      'devices where minimizing all currents is essential',
      'systems designed to avoid any magnetic effects',
      'purely electrostatic applications'
    ],
    correctIndex: 0,
    explanation: 'Eddy currents are deliberately exploited in applications like electromagnetic braking (using the retarding force from induced eddy currents), induction furnaces (using eddy-current heating to melt metals), and induction cooktops.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-20',
    type: 'mcq',
    question: 'In electromagnetic braking (as used in some trains), a metal wheel or disc moving through a magnetic field experiences a retarding force because',
    options: [
      'the magnetic field directly stops the wheel via friction',
      'eddy currents induced in the moving conductor create their own magnetic field which, by Lenz\'s law, opposes the wheel\'s motion, producing a retarding force',
      'the wheel loses mass as it moves',
      'gravity increases suddenly'
    ],
    correctIndex: 1,
    explanation: 'The changing flux through the moving conducting wheel induces eddy currents, and by Lenz\'s law, these currents create effects (forces) that oppose the wheel\'s motion, providing a smooth, contact-free braking mechanism.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-21',
    type: 'mcq',
    question: 'Self-induction refers to the phenomenon where',
    options: [
      'an EMF is induced in a coil due to a changing current in a completely separate, nearby coil',
      'an EMF is induced in a coil due to a change in the current flowing through that same coil itself',
      'a coil produces heat without any current flowing',
      'a magnet induces current in a non-conducting material'
    ],
    correctIndex: 1,
    explanation: 'Self-induction is the phenomenon in which a changing current in a coil induces an EMF in the same coil, due to the changing flux the coil\'s own current produces through itself.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-22',
    type: 'mcq',
    question: 'The self-inductance (L) of a coil is defined through the relation',
    options: ['Φ = L/I', 'Φ = LI, where Φ is the flux linked with the coil due to its own current I', 'L = ΦI', 'L is independent of the current or flux'],
    correctIndex: 1,
    explanation: 'Self-inductance L is defined by Φ = LI, relating the magnetic flux linked with a coil (due to its own current) to the current itself; L is a property of the coil\'s geometry (and the medium), not of I or Φ individually.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-23',
    type: 'mcq',
    question: 'The SI unit of self-inductance (and mutual inductance) is',
    options: ['weber', 'tesla', 'henry', 'farad'],
    correctIndex: 2,
    explanation: 'The SI unit of inductance (both self and mutual) is the henry (H), where 1 H = 1 Wb/A = 1 V·s/A.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-24',
    type: 'mcq',
    question: 'The self-induced EMF in a coil due to a changing current I is given by',
    options: ['ε = L(dI/dt)', 'ε = -L(dI/dt)', 'ε = L/I', 'ε = -LI, independent of time'],
    correctIndex: 1,
    explanation: 'The self-induced EMF is ε = -L(dI/dt), with the negative sign (consistent with Lenz\'s law) indicating that this EMF opposes the change in current that produced it.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-25',
    type: 'mcq',
    question: 'Self-inductance is sometimes called the "electrical inertia" of a circuit because',
    options: [
      'it has no relation to mass or inertia at all',
      'like mechanical inertia opposes changes in velocity, self-inductance opposes any change in the current flowing through the circuit',
      'it increases the current instantaneously',
      'it makes current flow without any driving EMF'
    ],
    correctIndex: 1,
    explanation: 'Just as mechanical inertia resists changes in an object\'s velocity, self-inductance resists (opposes) any change in the current through a circuit, which is why it is analogously termed "electrical inertia."',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-26',
    type: 'mcq',
    question: 'The self-inductance of a long solenoid with N turns, length l, and cross-sectional area A is given by',
    options: ['L = µ0N²A/l', 'L = µ0NA/l²', 'L = µ0N/A', 'L = µ0Nl/A'],
    correctIndex: 0,
    explanation: 'For an ideal long solenoid, the self-inductance is L = µ0N²A/l, a standard NCERT-derived result showing L depends on the square of the number of turns.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-27',
    type: 'mcq',
    question: 'Increasing the number of turns in a solenoid (keeping other dimensions fixed) generally',
    options: [
      'decreases its self-inductance',
      'increases its self-inductance, since L ∝ N²',
      'has no effect on self-inductance',
      'makes self-inductance negative'
    ],
    correctIndex: 1,
    explanation: 'Since L = µ0N²A/l, self-inductance is proportional to the square of the number of turns, so increasing N substantially increases L.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-28',
    type: 'mcq',
    question: 'Mutual induction refers to the phenomenon where',
    options: [
      'a changing current in one coil induces an EMF in a nearby, separate (but magnetically linked) coil',
      'a coil induces an EMF purely within itself, unrelated to any other coil',
      'two coils spontaneously produce current with no external cause',
      'an EMF is generated due to a chemical reaction between two coils'
    ],
    correctIndex: 0,
    explanation: 'Mutual induction is the phenomenon in which a changing current in one coil (primary) induces an EMF in a nearby, magnetically coupled coil (secondary), due to the changing flux linkage between them.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-29',
    type: 'mcq',
    question: 'The mutual inductance (M) between two coils is defined through the relation',
    options: [
      'Φ2 = MI1, where Φ2 is the flux linked with coil 2 due to current I1 in coil 1',
      'Φ2 = M/I1',
      'M = Φ2 I1',
      'M is unrelated to flux or current'
    ],
    correctIndex: 0,
    explanation: 'Mutual inductance M is defined by Φ2 = MI1, relating the flux linked with the second coil to the current in the first coil, a property determined by the geometry and relative arrangement of both coils.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-30',
    type: 'mcq',
    question: 'The mutually induced EMF in a secondary coil due to a changing current in the primary coil is given by',
    options: ['ε2 = M(dI1/dt)', 'ε2 = -M(dI1/dt)', 'ε2 = M/I1', 'ε2 = -MI1, independent of time'],
    correctIndex: 1,
    explanation: 'The mutually induced EMF is ε2 = -M(dI1/dt), with the negative sign reflecting Lenz\'s law, showing that the induced EMF in the secondary opposes the change in the primary\'s current.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-31',
    type: 'mcq',
    question: 'The mutual inductance between two coils is the same regardless of which coil is considered the "primary" (current-carrying) and which is the "secondary" (in which EMF is induced). This is known as',
    options: [
      'Lenz\'s law',
      'the reciprocity theorem for mutual inductance (M12 = M21)',
      'Faraday\'s law',
      'Ohm\'s law'
    ],
    correctIndex: 1,
    explanation: 'A fundamental result in mutual induction is that M12 = M21 = M, meaning the mutual inductance is the same value regardless of which coil is treated as the source of the changing current — a consequence of the reciprocity theorem.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-32',
    type: 'mcq',
    question: 'The mutual inductance between two coils generally increases when',
    options: [
      'the coils are moved farther apart',
      'the coils are brought closer together, or a ferromagnetic core is placed to link them, increasing the flux linkage between them',
      'the number of turns in either coil is decreased',
      'the coils are oriented with their axes perpendicular to each other'
    ],
    correctIndex: 1,
    explanation: 'Mutual inductance depends on how much of the flux generated by one coil actually links (passes through) the other; bringing coils closer, using a common ferromagnetic core, or aligning them favorably all increase this flux linkage and hence M.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-33',
    type: 'mcq',
    question: 'A transformer works on the principle of',
    options: [
      'self-induction only',
      'mutual induction between a primary coil and a secondary coil, both wound on a common core',
      'motional EMF only',
      'electrostatic induction'
    ],
    correctIndex: 1,
    explanation: 'A transformer operates on mutual induction: an alternating current in the primary coil produces a changing flux that links the secondary coil (via a common core), inducing an EMF in the secondary.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-34',
    type: 'mcq',
    question: 'AC generators (alternators) convert',
    options: [
      'electrical energy into mechanical energy',
      'mechanical energy into electrical energy, using the principle of electromagnetic induction',
      'chemical energy into electrical energy',
      'thermal energy directly into electrical energy without any mechanism'
    ],
    correctIndex: 1,
    explanation: 'An AC generator converts mechanical energy (typically from a rotating turbine) into electrical energy by rotating a coil in a magnetic field (or vice versa), inducing an alternating EMF via electromagnetic induction.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-35',
    type: 'mcq',
    question: 'In an AC generator with a coil of N turns and area A rotating with angular velocity ω in a uniform magnetic field B, the instantaneous induced EMF is given by',
    options: ['ε = NBAω cos(ωt)', 'ε = NBA sin(ωt), a constant value regardless of time', 'ε(t) = NBAω sin(ωt)', 'ε = NBA, independent of rotation'],
    correctIndex: 2,
    explanation: 'As the coil rotates with angular velocity ω, flux varies as Φ = BA cos(ωt), and the induced EMF, ε = -dΦ/dt, works out to ε(t) = NBAω sin(ωt), a sinusoidally varying (alternating) EMF.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-36',
    type: 'mcq',
    question: 'The maximum (peak) EMF generated by a rotating coil AC generator is',
    options: ['ε0 = NBA', 'ε0 = NBAω', 'ε0 = NBA/ω', 'ε0 = NBAω², independent of the rate of rotation'],
    correctIndex: 1,
    explanation: 'From ε(t) = NBAω sin(ωt), the peak (maximum) EMF is ε0 = NBAω, occurring when sin(ωt) = ±1.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-37',
    type: 'mcq',
    question: 'The EMF generated by an AC generator is maximum when the plane of the rotating coil is',
    options: [
      'perpendicular to the magnetic field (coil\'s normal parallel to the field)',
      'parallel to the magnetic field (coil\'s normal perpendicular to the field)',
      'at 45° to the field',
      'irrelevant, since EMF does not depend on orientation'
    ],
    correctIndex: 1,
    explanation: 'The EMF is maximum when the rate of change of flux is maximum, which occurs when the coil\'s plane is parallel to the field (flux is momentarily zero but changing fastest at that instant, since Φ = BA cosθ has its steepest slope there).',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-38',
    type: 'mcq',
    question: 'The EMF generated by an AC generator is zero (momentarily) when the plane of the rotating coil is',
    options: [
      'parallel to the magnetic field',
      'perpendicular to the magnetic field (coil\'s normal parallel to B, flux is maximum at that instant)',
      'at 45° to the field',
      'the EMF is never zero'
    ],
    correctIndex: 1,
    explanation: 'When the coil\'s normal is parallel to B (coil plane perpendicular to field), flux is at its maximum value but momentarily not changing (rate of change is zero at the peak of the cosine curve), giving zero instantaneous EMF at that instant.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-39',
    type: 'mcq',
    question: 'A moving conducting rod on two parallel rails, connected at one end, forming a closed circuit in a magnetic field, is a common setup used to illustrate',
    options: [
      'Ohm\'s law only',
      'motional EMF and the associated retarding force on the moving rod, consistent with Lenz\'s law',
      'the photoelectric effect',
      'electrostatic induction only'
    ],
    correctIndex: 1,
    explanation: 'This classic setup (rod on rails) is used to demonstrate motional EMF (ε = Bvl), the resulting induced current, and the retarding magnetic force on the rod that opposes its motion, consistent with both Lenz\'s law and energy conservation.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-40',
    type: 'mcq',
    question: 'In the rod-on-rails setup, when the rod is pulled with a constant external force, the induced current creates a retarding magnetic force on the rod. This retarding force means that',
    options: [
      'the rod eventually accelerates indefinitely without limit',
      'as the rod speeds up, the retarding force increases until it can balance the external force, and the rod may approach a terminal (constant) velocity',
      'the rod immediately stops moving',
      'the retarding force is unrelated to the rod\'s speed'
    ],
    correctIndex: 1,
    explanation: 'Since the induced EMF (and hence current and retarding force) increases with the rod\'s velocity, the retarding force grows until it balances the applied external force, at which point the rod moves at a constant (terminal) velocity.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-41',
    type: 'mcq',
    question: 'In the rod-on-rails setup, the work done by the external force pulling the rod is converted into',
    options: [
      'purely potential energy of the rod',
      'electrical energy (which is then dissipated as heat in the circuit\'s resistance), consistent with energy conservation',
      'nothing; the work simply disappears',
      'only kinetic energy of the rod, with no other energy transformation'
    ],
    correctIndex: 1,
    explanation: 'At terminal velocity (rod moving at constant speed), the work done by the external force is entirely converted into electrical energy, which is then dissipated as heat in the resistance of the circuit — consistent with overall energy conservation.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-42',
    type: 'mcq',
    question: 'Two coils placed near each other, one carrying a steadily increasing current, will induce an EMF in the second coil that, by Lenz\'s law, drives an induced current opposing',
    options: [
      'the increase in current in the first coil (tending to decrease it)',
      'the resistance of the second coil',
      'the induced current has no relationship to the first coil\'s current',
      'the magnetic field of the Earth'
    ],
    correctIndex: 0,
    explanation: 'By Lenz\'s law, the induced current in the second coil flows in a direction that opposes the change (increase) in flux caused by the increasing current in the first coil, which corresponds to opposing that increase.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-43',
    type: 'mcq',
    question: 'When the switch in a circuit containing an inductor and a battery is suddenly closed, the current in the circuit',
    options: [
      'jumps instantaneously to its maximum steady-state value',
      'rises gradually from zero to its steady-state value, due to the opposing self-induced EMF that resists the sudden change in current',
      'remains zero forever',
      'oscillates indefinitely without settling'
    ],
    correctIndex: 1,
    explanation: 'Due to self-induction, an inductor opposes any sudden change in current; when the switch is closed, the current rises gradually (rather than jumping instantly) toward its steady-state value, governed by the circuit\'s time constant.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-44',
    type: 'mcq',
    question: 'When the switch in an inductor-containing circuit is suddenly opened (breaking the circuit), a spark may sometimes be observed at the switch contacts because',
    options: [
      'the inductor tries to maintain the current, inducing a large EMF as the current is forced to change rapidly, which can cause a spark across the gap',
      'the battery suddenly produces extra voltage',
      'the resistor overheats instantaneously',
      'this phenomenon is unrelated to the inductor'
    ],
    correctIndex: 0,
    explanation: 'Since the inductor opposes rapid changes in current, suddenly breaking the circuit (forcing current to drop rapidly to zero) induces a large back-EMF (ε = -L dI/dt, with dI/dt very large over a short interval), which can be large enough to cause arcing/sparking at the switch.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-45',
    type: 'mcq',
    question: 'The energy stored in an inductor carrying current I, with self-inductance L, is given by',
    options: ['U = LI', 'U = ½LI²', 'U = L²I', 'U = LI²/2, but with the sign always negative'],
    correctIndex: 1,
    explanation: 'The energy stored in the magnetic field of an inductor is U = ½LI², analogous to the ½CV² formula for the energy stored in a charged capacitor.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-46',
    type: 'mcq',
    question: 'This energy stored in an inductor is considered to reside',
    options: [
      'in the wire of the inductor itself, as a material property',
      'in the magnetic field created by the current flowing through the inductor',
      'outside the inductor, unrelated to the field',
      'in the resistance of the connecting wires'
    ],
    correctIndex: 1,
    explanation: 'Analogous to the electric field energy in a capacitor, the energy of a current-carrying inductor is understood to be stored in the magnetic field it generates.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-47',
    type: 'mcq',
    question: 'A metallic plate swinging as a pendulum through the poles of a magnet experiences a noticeably increased damping (slowing down) compared to swinging in the absence of the magnet, mainly due to',
    options: [
      'increased air resistance caused by the magnet',
      'eddy currents induced in the plate as it moves through the field, which dissipate energy as heat and create a retarding force',
      'the plate becoming permanently magnetized',
      'gravitational changes near the magnet'
    ],
    correctIndex: 1,
    explanation: 'As the metallic plate swings through the magnetic field, changing flux induces eddy currents within it; these currents dissipate energy as heat and create a retarding force (by Lenz\'s law), damping the pendulum\'s oscillation noticeably faster than without the field.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-48',
    type: 'mcq',
    question: 'If slots are cut into a swinging metallic plate (used as a pendulum in the presence of a magnetic field), the damping effect due to eddy currents',
    options: [
      'increases significantly',
      'decreases significantly, since the slots interrupt the paths available for eddy currents to circulate',
      'remains completely unchanged',
      'becomes infinite'
    ],
    correctIndex: 1,
    explanation: 'Cutting slots into the plate breaks up the large closed-loop paths that eddy currents would otherwise follow, significantly reducing eddy current strength and hence the damping effect, similar in principle to why laminated cores reduce eddy current losses.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-49',
    type: 'mcq',
    question: 'The direction of induced EMF/current, as required by Lenz\'s law, can also be determined using',
    options: [
      'Fleming\'s right-hand rule (for a conductor moving in a field)',
      'only Ohm\'s law',
      'the right-hand thumb rule for magnetic field due to current alone',
      'no rule is available; it must be determined by trial and error'
    ],
    correctIndex: 0,
    explanation: 'Fleming\'s right-hand rule (thumb = motion/velocity, forefinger = field, middle finger = induced current) is a convenient mnemonic specifically for determining the direction of induced current in a conductor moving through a magnetic field.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-50',
    type: 'mcq',
    question: 'A circular loop is placed with its plane perpendicular to a uniform magnetic field. If the loop is now rotated about a diameter such that its plane becomes parallel to the field, the flux through the loop',
    options: [
      'increases throughout the rotation',
      'decreases from a maximum value to zero',
      'remains constant throughout',
      'oscillates rapidly without any clear trend'
    ],
    correctIndex: 1,
    explanation: 'Initially (plane perpendicular to B, i.e., normal parallel to B), flux Φ = BA cos(0°) = BA is maximum; as the loop rotates so its plane becomes parallel to B (normal perpendicular to B), Φ = BA cos(90°) = 0, so flux decreases from maximum to zero.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-51',
    type: 'mcq',
    question: 'If a bar magnet is dropped vertically through a fixed horizontal conducting loop (falling under gravity, magnet oriented along its axis of fall), the induced EMF in the loop will',
    options: [
      'remain exactly constant as the magnet falls through',
      'first increase, reach a peak, reverse direction, and vary again as the magnet approaches, passes through, and moves away from the loop',
      'always be zero, since the magnet is falling under gravity only',
      'depend only on the magnet\'s mass, not on its velocity or position'
    ],
    correctIndex: 1,
    explanation: 'As the magnet approaches, passes through, and recedes from the loop, the flux (and its rate of change) varies in a complex, non-monotonic way, producing an induced EMF that changes in both magnitude and direction throughout the process — a classic and instructive NCERT scenario.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-52',
    type: 'mcq',
    question: 'A metal ring is placed in a region with a magnetic field increasing steadily with time, with the field always perpendicular to the plane of the ring. The induced current in the ring will flow in a direction such that',
    options: [
      'it creates a magnetic field inside the ring in the same direction as the increasing external field',
      'it creates a magnetic field inside the ring opposite to the increasing external field, opposing the increase',
      'no current is induced since the field is always perpendicular',
      'the current direction depends on the ring\'s material color'
    ],
    correctIndex: 1,
    explanation: 'By Lenz\'s law, since the external field (and hence flux) is increasing, the induced current opposes this increase by generating its own magnetic field in the opposite direction within the ring.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-53',
    type: 'mcq',
    question: 'For a purely resistive circuit connected to an ideal battery with no inductance present, closing the switch causes the current to',
    options: [
      'rise gradually over a significant time interval before reaching steady state',
      'reach its steady-state value essentially instantaneously (since there is no inductor to oppose the sudden change)',
      'oscillate indefinitely',
      'never reach a steady value'
    ],
    correctIndex: 1,
    explanation: 'Without any inductance in the circuit to oppose sudden changes in current, a purely resistive circuit\'s current jumps essentially instantaneously to its steady-state value I = ε/R upon closing the switch.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-54',
    type: 'mcq',
    question: 'Two coils are wound on the same iron core, one connected to an AC source (primary) and the other left open (secondary, no external circuit connected). Even though the secondary circuit is open, an EMF is still induced in the secondary coil because',
    options: [
      'a changing flux due to the primary\'s current still links the secondary coil, inducing an EMF regardless of whether current can flow in the secondary',
      'induced EMF requires a closed circuit; there can be no EMF in an open secondary coil',
      'the primary and secondary coils are not actually related in this scenario',
      'the iron core prevents any EMF from being induced'
    ],
    correctIndex: 0,
    explanation: 'Induced EMF depends on the changing flux linkage, which exists as long as the secondary coil is magnetically coupled to the changing flux, regardless of whether the secondary circuit is closed to allow current to actually flow; an open secondary still shows induced EMF (measurable as a potential difference) even though no current flows.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-55',
    type: 'mcq',
    question: 'A conducting rod moving through a magnetic field with an open (unconnected) circuit at its ends will still develop',
    options: [
      'no EMF at all, since the circuit is open',
      'a motional EMF (measurable as a potential difference between its ends), even though no current flows because the circuit is not closed',
      'a current, even without a closed circuit',
      'an EMF only if the rod is stationary'
    ],
    correctIndex: 1,
    explanation: 'A motional EMF is generated whenever a conductor moves through a field, regardless of whether the circuit is closed; without a closed circuit, no current flows, but the EMF (potential difference) between the ends of the rod is still present and measurable.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-56',
    type: 'mcq',
    question: 'In the phenomenon of self-induction, the induced EMF opposes the change in current. This means that during the growth of current in an inductive circuit (current increasing), the self-induced EMF acts to',
    options: [
      'further increase the current beyond its natural growth',
      'oppose (delay/slow down) the growth of current',
      'have no effect on the current at all',
      'immediately reduce the current to zero'
    ],
    correctIndex: 1,
    explanation: 'As current increases, the self-induced (back) EMF opposes this increase, acting against the applied EMF and thus slowing (delaying) the rate at which current can grow — this is the physical meaning of "opposing the change."',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-57',
    type: 'mcq',
    question: 'During the decay of current in an inductive circuit (current decreasing, e.g., when a switch is opened), the self-induced EMF acts to',
    options: [
      'oppose the decrease, trying to maintain the current flowing in its original direction',
      'accelerate the decrease of current',
      'have no relationship to the direction of current change',
      'reverse the polarity of the battery'
    ],
    correctIndex: 0,
    explanation: 'Consistent with Lenz\'s law, when current is decreasing, the self-induced EMF opposes this decrease, trying to sustain the current in its original direction, which is why sudden circuit-breaking can cause sparking (as the inductor "fights" the abrupt drop to zero).',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-58',
    type: 'mcq',
    question: 'The self-inductance of a coil depends on',
    options: [
      'the current flowing through it at a given instant',
      'the geometry (number of turns, area, length) of the coil and the permeability of the medium/core, but not on the instantaneous current or EMF',
      'only the resistance of the coil\'s wire',
      'the color of the wire used'
    ],
    correctIndex: 1,
    explanation: 'Like capacitance and resistance, self-inductance is a property determined by the geometry of the coil (turns, area, length) and the magnetic properties of the surrounding medium/core, independent of the specific current or EMF present at any instant.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-59',
    type: 'mcq',
    question: 'Placing a ferromagnetic core (instead of air) inside a solenoid generally',
    options: [
      'decreases its self-inductance',
      'increases its self-inductance significantly, due to the higher permeability of the ferromagnetic material',
      'has no effect on self-inductance',
      'makes self-inductance become negative'
    ],
    correctIndex: 1,
    explanation: 'Since L is proportional to the permeability of the core material (µ = µ0µr), and ferromagnetic materials have very high relative permeability, inserting a ferromagnetic core significantly increases the self-inductance of a solenoid.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-60',
    type: 'mcq',
    question: 'A generator coil rotates such that the flux through it varies as Φ(t) = Φ0 cos(ωt). The induced EMF, ε(t) = -dΦ/dt, will vary as',
    options: [
      'ε(t) = Φ0 cos(ωt), in phase with the flux',
      'ε(t) = Φ0ω sin(ωt), which is 90° out of phase with the flux',
      'ε(t) is constant, independent of time',
      'ε(t) = -Φ0ω cos(ωt), in phase with the flux but negative'
    ],
    correctIndex: 1,
    explanation: 'Differentiating Φ(t) = Φ0 cos(ωt) gives dΦ/dt = -Φ0ω sin(ωt), so ε(t) = -dΦ/dt = Φ0ω sin(ωt), which is 90° out of phase with the flux (EMF is maximum when flux is zero, and vice versa).',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-61',
    type: 'mcq',
    question: 'Faraday and Henry\'s original experiments demonstrating electromagnetic induction typically involved',
    options: [
      'a stationary magnet and a stationary coil, with no relative motion or flux change at all',
      'moving a magnet relative to a coil (or vice versa), or changing the current in a nearby coil, observing a deflection in a connected galvanometer',
      'heating a coil to very high temperatures',
      'applying a constant DC voltage across an isolated wire'
    ],
    correctIndex: 1,
    explanation: 'The historic experiments involved changing the flux linked with a coil — by moving a magnet relative to the coil, or by starting/stopping/varying current in a nearby coil — and observing the resulting deflection in a galvanometer connected to the coil.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-62',
    type: 'mcq',
    question: 'If a magnet is held stationary and a coil is moved toward or away from it, the same phenomenon of electromagnetic induction occurs as when the magnet moves and the coil stays fixed. This demonstrates that',
    options: [
      'only the magnet\'s motion produces induction, not the coil\'s',
      'it is the relative motion (or relative change in flux) between the magnet and coil that matters, not which one is considered to be "moving" in an absolute sense',
      'the coil must always remain perfectly still for induction to occur',
      'induction only depends on the coil\'s material'
    ],
    correctIndex: 1,
    explanation: 'What matters physically for electromagnetic induction is the change in flux linkage, which depends only on the RELATIVE motion between the magnet and the coil, not on which object is considered to be moving in an absolute reference frame.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-63',
    type: 'mcq',
    question: 'A copper ring and a similarly-sized wooden ring are both dropped through the poles of a strong magnet. Compared to the wooden ring, the copper ring will experience',
    options: [
      'the same acceleration due to gravity, with no additional retarding effect',
      'a noticeable retarding force due to eddy currents induced in it, causing it to fall more slowly than free fall (and more slowly than the wooden ring, which is unaffected since wood is an insulator)',
      'an increased acceleration, falling faster than free fall',
      'levitation, never actually passing through the magnet'
    ],
    correctIndex: 1,
    explanation: 'Since copper is a conductor, the changing flux as it falls through the magnet induces eddy currents, which by Lenz\'s law create a retarding force, slowing its fall compared to free fall. The wooden ring (an insulator) experiences no such induced currents and falls essentially under gravity alone.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-64',
    type: 'mcq',
    question: 'When two coils are placed such that all of the flux produced by one coil links completely with the other (perfect/ideal coupling, e.g., using a common iron core in an ideal transformer), the mutual inductance is related to the individual self-inductances L1 and L2 by',
    options: [
      'M = L1 + L2',
      'M = √(L1 L2), the geometric mean, in the ideal case of perfect coupling',
      'M = L1 × L2',
      'M has no relationship to L1 and L2'
    ],
    correctIndex: 1,
    explanation: 'For perfectly (ideally) coupled coils, the mutual inductance equals the geometric mean of the two self-inductances, M = √(L1L2); in real (imperfectly coupled) systems, M is somewhat less than this ideal maximum value.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-65',
    type: 'mcq',
    question: 'The negative sign in Faraday\'s law of induction (ε = -dΦ/dt) is essential because it',
    options: [
      'has no physical significance and is purely a mathematical convention',
      'encodes Lenz\'s law, indicating that the induced EMF opposes the change in flux that produces it',
      'indicates that the induced EMF is always negative in value',
      'shows that flux itself must always be negative'
    ],
    correctIndex: 1,
    explanation: 'The negative sign is not arbitrary — it is precisely how Lenz\'s law (opposition to the change in flux) is mathematically encoded within Faraday\'s law, ensuring consistency with energy conservation.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-66',
    type: 'mcq',
    question: 'A step-up transformer is designed to',
    options: [
      'decrease the voltage from primary to secondary',
      'increase the voltage from primary to secondary (with a corresponding decrease in current, for an ideal transformer), typically having more turns in the secondary than the primary',
      'keep the voltage exactly the same on both sides',
      'convert AC to DC directly'
    ],
    correctIndex: 1,
    explanation: 'A step-up transformer has more turns in its secondary coil than its primary, resulting in a higher secondary voltage than primary voltage (with current correspondingly lower on the secondary side, for power to be conserved in the ideal case).',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-67',
    type: 'mcq',
    question: 'A step-down transformer is designed to',
    options: [
      'increase the voltage from primary to secondary',
      'decrease the voltage from primary to secondary, typically having fewer turns in the secondary than the primary',
      'have exactly equal numbers of turns in both coils always',
      'operate only on DC current'
    ],
    correctIndex: 1,
    explanation: 'A step-down transformer has fewer turns in its secondary coil compared to its primary, resulting in a lower output (secondary) voltage than the input (primary) voltage.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-68',
    type: 'mcq',
    question: 'A transformer works only with alternating current (AC) and not with steady direct current (DC) because',
    options: [
      'DC produces a stronger magnetic field than AC',
      'a steady DC current produces a constant (unchanging) flux, and since induced EMF requires a CHANGING flux, no EMF would be induced in the secondary with steady DC',
      'transformers are incapable of carrying any current at all',
      'AC has no magnetic field associated with it'
    ],
    correctIndex: 1,
    explanation: 'Since electromagnetic induction fundamentally requires a changing flux (Faraday\'s law), a transformer only works effectively with AC (whose current, and hence flux, is continuously changing); a steady DC current produces constant flux and hence no induced EMF in the secondary.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-69',
    type: 'mcq',
    question: 'A brief transient EMF may be induced in the secondary coil of a transformer even when a steady DC current is switched ON or OFF in the primary, because',
    options: [
      'DC always produces changing flux, contradicting the general rule',
      'during the brief moments the current is switching on or off, the current (and hence flux) IS actually changing over that short interval, satisfying Faraday\'s law momentarily',
      'transformers cannot respond to DC under any circumstances',
      'this phenomenon does not actually occur'
    ],
    correctIndex: 1,
    explanation: 'While a steady DC current produces no ongoing induction, the brief transition period as DC is switched on or off does involve a rapidly changing current (and flux), inducing a brief transient EMF in the secondary during just that switching interval.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-70',
    type: 'mcq',
    question: 'The overall phenomenon of electromagnetic induction, unifying electricity and magnetism, historically paved the way for the development of',
    options: [
      'only static electricity generators',
      'practical electric generators, motors, and transformers, forming the foundation of modern electrical power generation and distribution',
      'the theory of relativity exclusively',
      'nuclear reactors only'
    ],
    correctIndex: 1,
    explanation: 'The discovery and understanding of electromagnetic induction directly enabled the development of practical electric generators, motors, and transformers, which together form the technological backbone of modern electrical power generation, transmission, and use.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'electromagnetic-induction-71',
    type: 'assertion-reason',
    question: 'Assertion (A): No EMF is induced in a coil if the magnetic flux linked with it remains constant, however large that constant flux may be.\nReason (R): Faraday\'s law states that induced EMF depends on the rate of change of flux, not on the flux value itself.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since ε = -dΦ/dt, a constant flux (dΦ/dt = 0) produces zero EMF regardless of the flux\'s magnitude, correctly explained by R.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-72',
    type: 'assertion-reason',
    question: 'Assertion (A): Lenz\'s law is consistent with the law of conservation of energy.\nReason (R): If the induced current aided (rather than opposed) the change in flux producing it, the system would generate energy without any external input, violating energy conservation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The logical consequence of an induced current that reinforced (instead of opposed) the flux change would be a runaway, energy-creating process, which is why Lenz\'s law (opposition) must hold for consistency with energy conservation — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-73',
    type: 'assertion-reason',
    question: 'Assertion (A): Eddy currents cause energy loss in transformer cores.\nReason (R): Eddy currents flow within the bulk of the conducting core and dissipate energy as heat due to the core\'s own electrical resistance.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since eddy currents are essentially resistive currents flowing within the core material, they dissipate energy as I²R heating, representing an unwanted energy loss — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-74',
    type: 'assertion-reason',
    question: 'Assertion (A): Laminating the iron core of a transformer reduces eddy current losses.\nReason (R): Lamination breaks the core into thin, mutually insulated sheets, interrupting the large closed-loop paths that eddy currents would otherwise follow.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'By confining eddy currents to smaller loops within each thin, insulated lamination, the overall eddy current magnitude (and hence associated energy loss) is significantly reduced — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-75',
    type: 'assertion-reason',
    question: 'Assertion (A): A conducting rod moving through a magnetic field, with an open circuit, still develops a potential difference between its ends.\nReason (R): The magnetic force on free charges within the moving rod causes charge accumulation at the ends, creating an EMF, even though no current can flow due to the open circuit.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The motional EMF arises directly from the force on charges within the moving conductor, independent of whether the external circuit is closed — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-76',
    type: 'assertion-reason',
    question: 'Assertion (A): A copper ring falling through the poles of a strong magnet falls more slowly than a similarly shaped wooden ring.\nReason (R): Eddy currents induced in the copper ring (a conductor) create a retarding force opposing its motion, while the wooden ring (an insulator) experiences no such induced currents.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since only conductors can support induced eddy currents, the copper ring experiences a Lenz\'s-law retarding force while falling through the field, whereas the wooden ring falls unaffected — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-77',
    type: 'assertion-reason',
    question: 'Assertion (A): Self-inductance is sometimes described as the "electrical inertia" of a circuit.\nReason (R): Just as mechanical inertia opposes changes in an object\'s velocity, self-inductance opposes any change in the current flowing through a circuit.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The direct analogy between mechanical inertia (opposing velocity changes) and self-inductance (opposing current changes) is precisely why the term "electrical inertia" is used — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-78',
    type: 'assertion-reason',
    question: 'Assertion (A): A transformer cannot function with a steady DC current applied to its primary coil.\nReason (R): A steady DC current produces a constant magnetic flux, and induced EMF (by Faraday\'s law) requires a changing flux, which is absent under steady DC conditions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since steady DC does not produce a time-varying flux, no EMF can be induced in the secondary under such conditions, precisely the reason transformers require AC input — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-79',
    type: 'assertion-reason',
    question: 'Assertion (A): Sparking sometimes occurs at a switch when an inductive circuit is suddenly opened.\nReason (R): The inductor opposes the abrupt drop in current, inducing a large back-EMF over the short interval as current changes rapidly toward zero, which can be enough to cause arcing across the switch gap.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The large dI/dt over a very short time interval when a switch is suddenly opened produces a correspondingly large induced EMF (ε = -L dI/dt), which can be sufficient to spark across the switch\'s air gap — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-80',
    type: 'assertion-reason',
    question: 'Assertion (A): The mutual inductance between two coils is the same value, regardless of which coil is treated as carrying the varying current (M12 = M21).\nReason (R): This equality is a general result (reciprocity theorem) that follows from the physics of the flux linkage between the two coils, independent of which one is designated the "primary."',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The reciprocity of mutual inductance is indeed a general theorem, holding regardless of the specific geometry or which coil is considered the current-carrying one — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-81',
    type: 'assertion-reason',
    question: 'Assertion (A): The EMF induced by an AC generator varies sinusoidally with time.\nReason (R): As the coil rotates at constant angular velocity in a uniform field, the flux linked with it varies as a cosine function of time, and its rate of change (the induced EMF) consequently varies as a sine function.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since Φ(t) = Φ0 cos(ωt) for uniform rotation, differentiating gives an EMF proportional to sin(ωt), which is the mathematical basis for the sinusoidal EMF waveform — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-82',
    type: 'assertion-reason',
    question: 'Assertion (A): The rate of relative motion between a magnet and a coil affects the magnitude of the induced EMF.\nReason (R): Faster relative motion produces a faster rate of change of flux, and induced EMF is directly proportional to dΦ/dt.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since induced EMF depends directly on the rate of flux change, faster relative motion (leading to faster flux variation) produces a correspondingly larger induced EMF — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-83',
    type: 'assertion-reason',
    question: 'Assertion (A): A conducting rod moving at constant (terminal) velocity on frictionless rails in a magnetic field, connected to an external resistor, involves conversion of mechanical work into electrical (and ultimately heat) energy.\nReason (R): At constant velocity, the net force on the rod is zero, meaning the applied external force exactly balances the retarding magnetic force, and the work done by the external force equals the electrical energy dissipated as heat in the resistor.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'At constant velocity (zero acceleration, zero net force), the work-energy theorem confirms all work done by the external force goes into electrical energy (dissipated as heat in the resistor), since kinetic energy does not change — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-84',
    type: 'assertion-reason',
    question: 'Assertion (A): Placing a ferromagnetic core inside a solenoid increases its self-inductance.\nReason (R): Self-inductance is directly proportional to the permeability of the core material, and ferromagnetic materials have much higher relative permeability than air or vacuum.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since L depends on the permeability of the medium inside the solenoid, and ferromagnetic materials offer much higher permeability than air, replacing air with a ferromagnetic core substantially increases L — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-85',
    type: 'assertion-reason',
    question: 'Assertion (A): A metallic plate with slots cut into it experiences less damping (due to eddy currents) than a similar solid plate when swung through a magnetic field.\nReason (R): The slots interrupt the large closed loops available for eddy currents, restricting them to smaller loops and thereby weakening the overall eddy current effect.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Just as with laminated transformer cores, slotting a plate breaks up the paths for eddy currents, reducing their magnitude and hence the associated damping force — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-86',
    type: 'assertion-reason',
    question: 'Assertion (A): The direction of induced current opposes the change in flux, not the flux itself.\nReason (R): If the flux is increasing, the induced current creates a field opposing the increase; if the flux is decreasing, the induced current creates a field opposing the decrease (i.e., trying to maintain the flux), not always in the same fixed direction relative to the original field.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This distinction (opposing the change, not the flux itself) is a commonly tested subtlety of Lenz\'s law — the induced effects always act against whatever CHANGE is occurring, whether that change is an increase or a decrease — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-87',
    type: 'assertion-reason',
    question: 'Assertion (A): An open secondary coil of a transformer still shows an induced EMF (measurable with a voltmeter) even though no current flows through it.\nReason (R): Induced EMF depends on the changing flux linkage with the coil, which exists regardless of whether the circuit is closed to allow current flow.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since EMF (a potential difference) is generated by the changing flux linkage itself, and not dependent on current actually flowing, an open secondary coil still exhibits a measurable induced EMF — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-88',
    type: 'assertion-reason',
    question: 'Assertion (A): Eddy currents can be usefully employed in induction furnaces to melt metals.\nReason (R): The heat generated by eddy currents (due to I²R dissipation within the metal) can be substantial enough to raise the metal\'s temperature to its melting point, without requiring direct contact with a heating element.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The same eddy-current heating that is undesirable in transformer cores is deliberately exploited in induction furnaces, where the induced currents directly generate enough heat within the metal to melt it — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-89',
    type: 'assertion-reason',
    question: 'Assertion (A): The concept of self-inductance is analogous to the concept of capacitance in some respects.\nReason (R): Both self-inductance and capacitance are purely geometric/material properties of a device, independent of the specific current, voltage, or charge present at any given instant, and both are associated with a form of stored energy in a field.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Both L and C are defined purely by geometry/material and are independent of the instantaneous electrical quantities, and both store energy in an associated field (magnetic for L, electric for C), justifying the analogy — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-90',
    type: 'assertion-reason',
    question: 'Assertion (A): The relative motion between a magnet and a coil, not the absolute motion of either object, determines the induced EMF.\nReason (R): It is the rate of change of flux linkage — which depends only on relative displacement/velocity between magnet and coil — that governs the induced EMF according to Faraday\'s law.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since flux linkage depends on the geometric configuration between the magnet and the coil, which is entirely determined by their relative positions, only relative motion matters for the induced EMF — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-91',
    type: 'assertion-reason',
    question: 'Assertion (A): A brief transient current can be observed in the secondary coil of a transformer at the instant a steady DC current is switched on or off in the primary.\nReason (R): During the brief switching interval, the primary current (and hence flux) changes rapidly, satisfying the condition for induction momentarily, even though a steady DC state produces no ongoing induction.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The switching transient itself involves a genuinely changing current/flux over a short interval, which does induce a brief EMF in the secondary, even though the steady-state DC condition (before and after switching) produces no induction — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-92',
    type: 'assertion-reason',
    question: 'Assertion (A): A step-up transformer increases the voltage from primary to secondary.\nReason (R): A step-up transformer has more turns in its secondary coil than in its primary coil.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since the ratio of secondary to primary voltage in an ideal transformer equals the ratio of secondary to primary turns, having more secondary turns than primary turns is exactly what produces the voltage step-up — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-93',
    type: 'assertion-reason',
    question: 'Assertion (A): The instantaneous EMF of an AC generator is zero at the instant the coil\'s plane is perpendicular to the magnetic field.\nReason (R): At this instant, flux through the coil is at its maximum value (since the coil\'s normal is parallel to B), but the rate of change of flux is momentarily zero, since flux is at a turning point (maximum) of its cosine variation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'At the flux maximum (a turning point of the cosine function), the instantaneous slope (rate of change) is zero, giving zero EMF at that particular instant, even though flux itself is maximal there — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-94',
    type: 'assertion-reason',
    question: 'Assertion (A): A metallic (conducting) pendulum bob swinging through a magnetic field experiences greater damping than a non-conducting bob of similar shape and mass.\nReason (R): Eddy currents induced in the conducting bob as it moves through the changing flux dissipate mechanical energy as heat, providing an additional damping mechanism absent in the non-conducting case.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since only conducting materials can support eddy currents, the metallic bob experiences additional energy dissipation (and hence extra damping) compared to a non-conducting bob unaffected by the field — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-95',
    type: 'assertion-reason',
    question: 'Assertion (A): The energy stored in an inductor, U = ½LI², is always non-negative.\nReason (R): Since both L (a physical, geometry-based quantity) and I² are always non-negative, their product (and hence the stored energy) can never be negative.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since L is a positive geometric property and I² is always non-negative (regardless of the sign or direction of I), the product ½LI² is always non-negative, consistent with energy being a physically non-negative quantity — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-96',
    type: 'assertion-reason',
    question: 'Assertion (A): The self-inductance of a solenoid quadruples if the number of turns is doubled (keeping all other dimensions the same).\nReason (R): Self-inductance of a solenoid is given by L = µ0N²A/l, which shows L is proportional to the square of the number of turns N.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since L ∝ N², doubling N results in L increasing by a factor of 2² = 4 (quadrupling), directly following from the formula — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-97',
    type: 'assertion-reason',
    question: 'Assertion (A): Two coils placed very far apart have a much smaller mutual inductance than the same two coils placed close together.\nReason (R): Mutual inductance depends on the fraction of flux from one coil that actually links (passes through) the other coil, and this flux linkage decreases significantly as the separation between the coils increases.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since mutual inductance fundamentally depends on flux linkage between the two coils, and this linkage weakens substantially with increased separation, distant coils naturally have much smaller mutual inductance than closely spaced ones — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-98',
    type: 'assertion-reason',
    question: 'Assertion (A): A galvanometer connected to a coil shows a momentary deflection when a bar magnet is quickly pushed into the coil, but shows zero deflection if the magnet is left stationary inside the coil.\nReason (R): The induced EMF depends on the rate of change of flux; once the magnet stops moving, the flux becomes constant, and the induced EMF (and hence current, and galvanometer deflection) drops to zero.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This scenario directly illustrates Faraday\'s law: only a changing flux (during the magnet\'s motion) induces an EMF; a stationary magnet, however strong, produces no ongoing induced current — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-99',
    type: 'assertion-reason',
    question: 'Assertion (A): The phenomenon of electromagnetic induction played a crucial role in enabling large-scale, long-distance transmission of electrical power.\nReason (R): Transformers, which rely on mutual induction, allow electrical power to be transmitted at high voltage (and correspondingly low current) over long distances, minimizing resistive (I²R) losses in the transmission lines, and then stepped back down to safer voltages for use.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The step-up/step-down transformer capability (enabled by mutual induction) is precisely what allows power to be transmitted efficiently at high voltage and low current, minimizing transmission losses — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-100',
    type: 'assertion-reason',
    question: 'Assertion (A): The direction of current induced in a rod moving through a magnetic field can be determined using Fleming\'s right-hand rule.\nReason (R): Fleming\'s left-hand rule is used instead for finding the direction of induced current due to motional EMF.',
    options: [
      'A is true but R is false',
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'A is true — Fleming\'s right-hand rule is indeed the correct tool for finding induced current direction due to motional EMF. R is false — it is Fleming\'s LEFT-hand rule that is used for the force on a current-carrying conductor (a different scenario), not for finding induced current direction, so R incorrectly states the rule\'s application here.',
    difficulty: 'hard'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'electromagnetic-induction-101',
    type: 'statement',
    question: 'Statement I: Faraday\'s law states that induced EMF is proportional to the rate of change of magnetic flux.\nStatement II: A larger (but constant) magnetic flux always produces a larger induced EMF than a smaller, rapidly changing flux.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — a large constant flux produces ZERO EMF (since dΦ/dt = 0), while even a small but rapidly changing flux can produce a substantial EMF; EMF depends on the rate of change, not the magnitude of flux itself.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-102',
    type: 'statement',
    question: 'Statement I: Lenz\'s law determines the direction of induced current.\nStatement II: Lenz\'s law is a consequence of the law of conservation of energy.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe Lenz\'s law: it determines the direction of induced current (opposing the flux change), and this behaviour is fundamentally rooted in energy conservation.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-103',
    type: 'statement',
    question: 'Statement I: Eddy currents always represent a beneficial effect in all electrical devices.\nStatement II: Eddy currents can be minimized using laminated cores in transformers.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — eddy currents are often undesirable (causing energy loss in transformers/motors), though they can be beneficially used in specific applications like induction furnaces or braking. Statement II is correct.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-104',
    type: 'statement',
    question: 'Statement I: Self-inductance depends on the geometry of the coil.\nStatement II: Self-inductance depends on the instantaneous current flowing through the coil.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — self-inductance is a fixed geometric/material property of the coil, independent of the instantaneous current (just as capacitance is independent of charge/voltage).',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-105',
    type: 'statement',
    question: 'Statement I: Mutual inductance between two coils is the same regardless of which coil carries the varying current.\nStatement II: Mutual inductance increases when the coils are moved farther apart.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct (M12 = M21, the reciprocity result). Statement II is false — mutual inductance DECREASES (not increases) as coils are moved farther apart, since flux linkage weakens with distance.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-106',
    type: 'statement',
    question: 'Statement I: A transformer can step up or step down AC voltage.\nStatement II: A transformer works equally well with steady DC voltage applied to its primary.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — a transformer requires a changing flux (hence AC) to induce EMF in the secondary; steady DC produces no ongoing induction and the transformer does not function as intended.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-107',
    type: 'statement',
    question: 'Statement I: A step-up transformer has more turns in its secondary coil than its primary.\nStatement II: A step-down transformer has more turns in its secondary coil than its primary.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — a step-down transformer has FEWER turns in its secondary compared to its primary, the opposite of a step-up transformer.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-108',
    type: 'statement',
    question: 'Statement I: The energy stored in an inductor is given by U = ½LI².\nStatement II: This energy is understood to reside in the magnetic field associated with the inductor\'s current.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and complement each other — the formula for energy and its physical interpretation (residing in the magnetic field) are both standard NCERT results.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-109',
    type: 'statement',
    question: 'Statement I: The instantaneous EMF of a rotating-coil AC generator is maximum when the coil\'s plane is parallel to the magnetic field.\nStatement II: The instantaneous EMF of a rotating-coil AC generator is zero when the coil\'s plane is perpendicular to the magnetic field.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — EMF is maximum when the plane is parallel to B (flux changing fastest) and zero when the plane is perpendicular to B (flux at its momentary peak, rate of change zero).',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-110',
    type: 'statement',
    question: 'Statement I: Motional EMF can be derived either from the motional force (qv×B) on charges or from Faraday\'s flux rule; both approaches give the same result.\nStatement II: Motional EMF requires the circuit to be closed for the EMF itself to exist (not just for current to flow).',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — both derivations of motional EMF (force-based and flux-based) are standard and give consistent results. Statement II is false — motional EMF exists even in an open circuit (as a potential difference); a closed circuit is only needed for current to actually flow.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-111',
    type: 'statement',
    question: 'Statement I: Placing a ferromagnetic core inside a solenoid increases its self-inductance.\nStatement II: The self-inductance of a solenoid is proportional to the number of turns (not the square of the number of turns).',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — self-inductance is proportional to the SQUARE of the number of turns (L ∝ N²), not directly proportional to N.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-112',
    type: 'statement',
    question: 'Statement I: The relative motion between a magnet and a coil, rather than absolute motion of either, determines the induced EMF.\nStatement II: Moving the coil toward a stationary magnet produces a fundamentally different physical effect than moving the magnet toward a stationary coil at the same relative speed.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — since only relative motion matters for the change in flux linkage, both scenarios (moving coil vs moving magnet, at the same relative speed) produce the same induced EMF, not fundamentally different effects.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-113',
    type: 'statement',
    question: 'Statement I: A copper ring falling through a magnetic field experiences a retarding force due to eddy currents.\nStatement II: A wooden ring falling through the same magnetic field experiences the same retarding force as the copper ring.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — since wood is an insulator, it cannot support eddy currents, so it falls essentially under gravity alone, unlike the copper ring which experiences significant retardation.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-114',
    type: 'statement',
    question: 'Statement I: Sudden opening of an inductive circuit can produce sparking at the switch.\nStatement II: Sudden closing of a purely resistive circuit (no inductance) also typically produces significant sparking.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — without inductance, there is no large induced back-EMF from a rapid current change, so a purely resistive circuit does not typically produce this kind of sparking effect when its switch is closed.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-115',
    type: 'statement',
    question: 'Statement I: The SI unit of magnetic flux is the weber.\nStatement II: The SI unit of self/mutual inductance is the henry.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — standard SI units for magnetic flux (weber) and inductance (henry) as covered in NCERT.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-116',
    type: 'statement',
    question: 'Statement I: An AC generator converts mechanical energy into electrical energy.\nStatement II: A transformer also converts mechanical energy into electrical energy, similar to a generator.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — a transformer does not involve any mechanical energy conversion; it transfers electrical energy from primary to secondary circuit via mutual induction, adjusting voltage/current levels, without any moving parts or mechanical input.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-117',
    type: 'statement',
    question: 'Statement I: The induced current in a loop always flows in a direction to oppose the change in flux, regardless of whether the flux is increasing or decreasing.\nStatement II: A decreasing flux and an increasing flux always induce current in exactly the same direction.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — increasing and decreasing flux induce currents in OPPOSITE directions (each opposing its respective change), not the same direction.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-118',
    type: 'statement',
    question: 'Statement I: Motional EMF ε = Bvl applies when the velocity, magnetic field, and rod length are all mutually perpendicular.\nStatement II: If the rod moves parallel to the magnetic field direction, the motional EMF would still be Bvl, unaffected by the change in relative orientation.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — this is the standard condition for the simple formula to apply. Statement II is false — if the rod moves parallel to the field, the magnetic force on the charges (qv×B) would vanish (since v is parallel to B), giving zero induced EMF, not the same Bvl value.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-119',
    type: 'statement',
    question: 'Statement I: The concept of self-inductance can be thought of as analogous to capacitance in some respects.\nStatement II: Both self-inductance and capacitance are associated with energy stored in an associated field (magnetic and electric respectively).',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and directly connected — both are purely geometric properties associated with field-based energy storage, forming the basis of the analogy between the two.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-120',
    type: 'statement',
    question: 'Statement I: Increasing the number of turns in a solenoid coil increases its self-inductance by the same factor as the increase in turns (linear proportionality).\nStatement II: Increasing the number of turns increases self-inductance by the square of the factor of increase in turns.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — the relationship is NOT simply linear. Statement II is correct — since L ∝ N², self-inductance scales with the square of the turns increase factor.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-121',
    type: 'statement',
    question: 'Statement I: Faraday and Henry\'s experiments involved observing a galvanometer deflection when a magnet was moved relative to a coil.\nStatement II: These experiments provided the first experimental evidence for electromagnetic induction.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — this accurately describes the historic experiments and their significance in establishing the phenomenon of electromagnetic induction.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-122',
    type: 'statement',
    question: 'Statement I: Eddy currents are exploited beneficially in electromagnetic braking systems.\nStatement II: Eddy currents are exploited beneficially in induction furnaces used to melt metals.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly identify standard beneficial applications of eddy currents, as covered in NCERT.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-123',
    type: 'statement',
    question: 'Statement I: The negative sign in Faraday\'s law (ε = -dΦ/dt) is a mathematical encoding of Lenz\'s law.\nStatement II: Without this negative sign, the formula would predict induced currents that reinforce (rather than oppose) their own cause, violating energy conservation.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — they describe the physical meaning and importance of the negative sign, directly related to the connection between Lenz\'s law and energy conservation.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-124',
    type: 'statement',
    question: 'Statement I: The mutual inductance between two coils depends on the geometry and relative arrangement of both coils.\nStatement II: The mutual inductance between two coils is completely independent of any core material placed between/around them.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — placing a ferromagnetic core (as in a transformer) significantly affects (typically increases) the mutual inductance between coupled coils, so mutual inductance does depend on core material.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-125',
    type: 'statement',
    question: 'Statement I: A rotating coil AC generator produces an EMF that varies sinusoidally with time at constant angular velocity.\nStatement II: If the coil\'s angular velocity increases, the peak EMF also increases.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — the sinusoidal EMF form and the direct dependence of peak EMF (ε0 = NBAω) on angular velocity are both standard NCERT results.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-126',
    type: 'statement',
    question: 'Statement I: A conducting loop entering a region of uniform magnetic field (from a field-free region) experiences an induced current only while it is entering (partially inside the field), not once it is entirely within the uniform field.\nStatement II: This is because, once the loop is entirely within the uniform field, the flux through it is no longer changing.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — the flux increases only while the loop is partially in the field (entering), stabilizing once the loop is fully immersed in the (uniform) field, after which dΦ/dt = 0 and induced current ceases.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-127',
    type: 'statement',
    question: 'Statement I: Induced EMF exists only in circuits made of metal conductors.\nStatement II: Induced EMF (or more precisely, the electric field associated with a changing magnetic flux) can exist even without any physical conductor present, though a conductor is needed for a measurable induced current to actually flow.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — a changing flux induces an electric field in space generally, not exclusively "in" metal conductors. Statement II correctly captures the more general and subtle point that the induced electric field exists as a field phenomenon, with a conductor only being necessary to observe an actual induced current.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-128',
    type: 'statement',
    question: 'Statement I: A generator and a motor both operate on the principle of electromagnetic induction, but function as reverse processes of each other in some sense.\nStatement II: A generator converts mechanical energy to electrical energy, while a basic motor converts electrical energy to mechanical energy.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the complementary (reverse) relationship between generators and motors, both fundamentally rooted in electromagnetic principles (induction for generators, force on current-carrying conductors for basic motors).',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-129',
    type: 'statement',
    question: 'Statement I: An open (unconnected) conducting loop moving through a spatially uniform, time-constant magnetic field (with the loop remaining entirely within the field the whole time and not changing shape/orientation) will show zero induced EMF.\nStatement II: This is because the flux through the loop does not change as it moves uniformly within a spatially uniform field.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — with a spatially uniform field and no change in the loop\'s area or orientation, the flux Φ = BA cosθ remains constant even as the loop translates, resulting in zero induced EMF.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-130',
    type: 'statement',
    question: 'Statement I: A bar magnet falling through a long vertical conducting tube (with the tube\'s walls acting as a conductor) falls slower than in free fall, due to eddy currents induced in the tube walls.\nStatement II: This same magnet would fall at the rate of ordinary free fall if the tube were made of a non-conducting material like plastic.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — this classic demonstration shows retarded falling in a conducting tube (due to eddy currents opposing the changing flux) versus essentially unimpeded free fall in a non-conducting tube.',
    difficulty: 'medium'
  },

  // ==================== HOW MANY / NUMBER-CORRECT (20) ====================
  {
    id: 'electromagnetic-induction-131',
    type: 'how-many',
    question: 'How many of the following statements about Faraday\'s law are correct?\n1. Induced EMF is proportional to the rate of change of flux.\n2. A large constant flux produces a large induced EMF.\n3. The negative sign in the formula encodes Lenz\'s law.\n4. For a coil with N turns, the induced EMF is N times that of a single turn (assuming equal flux linkage per turn).',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 3, and 4 are correct. Statement 2 is false — a constant flux (however large) produces ZERO induced EMF, since EMF depends on the rate of change, not the flux magnitude.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-132',
    type: 'how-many',
    question: 'How many of the following statements about Lenz\'s law are correct?\n1. It determines the direction of induced current.\n2. It is a consequence of conservation of energy.\n3. It states that induced current always flows to reinforce the change in flux.\n4. It can be used to explain the retarding force on a magnet falling through a conducting tube.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — Lenz\'s law states the induced current OPPOSES (not reinforces) the change in flux.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-133',
    type: 'how-many',
    question: 'How many of the following statements about eddy currents are correct?\n1. They are induced currents circulating within the bulk of a conductor.\n2. They always cause useful heating with no downsides.\n3. They can be reduced by laminating the core.\n4. They are exploited in electromagnetic braking systems.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 3, and 4 are correct. Statement 2 is false — eddy currents are often undesirable (causing energy loss in transformers/motors), not universally beneficial.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-134',
    type: 'how-many',
    question: 'How many of the following statements about self-inductance are correct?\n1. It is defined by Φ = LI.\n2. Its SI unit is the henry.\n3. It depends on the instantaneous current in the coil.\n4. For a solenoid, L ∝ N².',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — self-inductance is a fixed geometric property, independent of the instantaneous current value.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-135',
    type: 'how-many',
    question: 'How many of the following statements about mutual inductance are correct?\n1. It is defined by Φ2 = MI1.\n2. Its value is the same regardless of which coil carries the varying current (M12 = M21).\n3. It increases as the two coils are moved farther apart.\n4. It forms the working basis of a transformer.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — mutual inductance DECREASES (not increases) as the coils are separated farther apart.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-136',
    type: 'how-many',
    question: 'How many of the following statements about motional EMF are correct?\n1. It arises due to the physical motion of a conductor through a magnetic field.\n2. It can be derived from the magnetic force (qv×B) on free charges within the moving conductor.\n3. It requires the circuit to be closed for the EMF to exist at all.\n4. For a rod moving perpendicular to a uniform field, ε = Bvl.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — motional EMF exists as a potential difference even with an open circuit; a closed circuit is only needed for current to actually flow.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-137',
    type: 'how-many',
    question: 'How many of the following statements about transformers are correct?\n1. They work on the principle of mutual induction.\n2. A step-up transformer has more secondary turns than primary turns.\n3. Transformers work equally well with steady DC or AC.\n4. Transformers are used in long-distance power transmission to reduce resistive losses.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — transformers require AC (changing flux); they do not function as intended with steady DC.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-138',
    type: 'how-many',
    question: 'How many of the following statements about the energy stored in an inductor are correct?\n1. U = ½LI².\n2. This energy is stored in the magnetic field of the inductor.\n3. U can be negative if the current direction is reversed.\n4. U increases as current increases (for fixed L).',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — since U depends on I² (always non-negative), the stored energy is always non-negative, regardless of the direction (sign) of current.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-139',
    type: 'how-many',
    question: 'How many of the following statements about an AC generator (rotating coil) are correct?\n1. The induced EMF varies sinusoidally with time.\n2. The peak EMF is ε0 = NBAω.\n3. EMF is maximum when the coil\'s plane is perpendicular to the field.\n4. EMF is zero when the coil\'s plane is perpendicular to the field.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — EMF is maximum when the plane is PARALLEL to the field, not perpendicular. When the plane is perpendicular to the field (normal parallel to B), flux is at its momentary peak and its rate of change is zero, so EMF is zero there, exactly as statement 4 says.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-140',
    type: 'how-many',
    question: 'How many of the following statements about the microscopic origin and behaviour of induced currents are correct?\n1. Motional EMF arises from the magnetic force on free charges in a moving conductor.\n2. Eddy currents can be reduced by cutting slots in a conducting plate.\n3. A stationary loop in a time-varying magnetic field can have an induced current without any part of the loop physically moving.\n4. Only moving conductors can ever have an induced EMF; stationary conductors in a changing field never do.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a stationary conductor in a time-varying magnetic field DOES experience induced EMF (this is precisely the mechanism in statement 3, and the basis of transformer operation), contradicting statement 4.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-141',
    type: 'how-many',
    question: 'How many of the following statements comparing self-inductance and mutual inductance are correct?\n1. Both have the SI unit henry.\n2. Self-inductance relates flux linked with a coil to the current in that SAME coil.\n3. Mutual inductance relates flux linked with one coil to the current in a DIFFERENT (coupled) coil.\n4. Both are always numerically equal for any pair of magnetically coupled coils.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — self-inductance and mutual inductance are generally different quantities (though related for ideally-coupled coils via M = √(L1L2)); they are not simply "always numerically equal."',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-142',
    type: 'how-many',
    question: 'How many of the following are examples of practical applications relying on electromagnetic induction?\n1. AC generators\n2. Transformers\n3. Electromagnetic braking systems\n4. Induction furnaces',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four listed devices/applications directly rely on electromagnetic induction (generators via motional/rotational EMF, transformers via mutual induction, braking and furnaces via eddy currents). All 4 are correct.',
    difficulty: 'easy'
  },
  {
    id: 'electromagnetic-induction-143',
    type: 'how-many',
    question: 'How many of the following statements about the rod-on-rails (sliding rod) setup are correct?\n1. The induced EMF is ε = Bvl for a rod moving perpendicular to B and to its own length.\n2. At terminal (constant) velocity, the net force on the rod is zero.\n3. At terminal velocity, all work done by the external force is converted into electrical energy dissipated as heat.\n4. The retarding force on the rod is independent of the rod\'s velocity.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the retarding force DOES depend on the rod\'s velocity (since induced EMF, current, and hence force, all depend on v); it is not independent of velocity.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-144',
    type: 'how-many',
    question: 'How many of the following statements about the direction of induced current are correct?\n1. Lenz\'s law is used to determine the direction of induced current.\n2. Fleming\'s right-hand rule can be used for motional EMF scenarios.\n3. The induced current direction reverses when the direction of flux change reverses (increasing to decreasing, or vice versa).\n4. The induced current direction is unrelated to the direction of the magnetic field.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the induced current direction is very much related to (determined in relation to) the magnetic field direction, via Lenz\'s law and the geometry of the situation.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-145',
    type: 'how-many',
    question: 'How many of the following statements about factors affecting magnetic flux are correct?\n1. Flux can be changed by varying the magnetic field strength.\n2. Flux can be changed by varying the area of the circuit.\n3. Flux can be changed by varying the angle between the field and the area vector.\n4. Flux is completely independent of the orientation of the loop relative to the field.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — flux (Φ = BA cosθ) explicitly depends on the orientation angle θ between the field and the area vector, contradicting statement 4.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-146',
    type: 'how-many',
    question: 'How many of the following statements about laminated cores in transformers are correct?\n1. Lamination reduces eddy current losses.\n2. Laminations are thin sheets, insulated from one another.\n3. A solid (non-laminated) iron core would produce LESS eddy current loss than a laminated one.\n4. Lamination is a standard practice to improve transformer efficiency.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — a solid core produces MORE (not less) eddy current loss compared to a laminated core, which is precisely why lamination is used.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-147',
    type: 'how-many',
    question: 'How many of the following are correct SI units?\n1. Magnetic flux — weber (Wb)\n2. Self/mutual inductance — henry (H)\n3. EMF — volt (V)\n4. Rate of change of flux — weber per second (Wb/s), equivalent to volt',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements are correctly stated units, with the fourth also correctly noting the equivalence between Wb/s and volt (since EMF = dΦ/dt). All 4 are correct.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-148',
    type: 'how-many',
    question: 'How many of the following statements about a bar magnet falling through a conducting loop/tube are correct?\n1. The induced EMF changes sign as the magnet passes through the loop.\n2. The magnet falls slower than in free fall due to the retarding effect of induced eddy currents/current.\n3. A non-conducting (e.g., plastic) tube would produce the same retarding effect as a conducting tube.\n4. The retarding effect is a direct consequence of Lenz\'s law.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — a non-conducting tube cannot support induced currents, so it would NOT produce any retarding effect, unlike the conducting tube.',
    difficulty: 'medium'
  },
  {
    id: 'electromagnetic-induction-149',
    type: 'how-many',
    question: 'How many of the following statements about self-induced EMF during current growth and decay in an inductive circuit are correct?\n1. During current growth, self-induced EMF opposes the increase.\n2. During current decay, self-induced EMF opposes the decrease (tries to maintain the current).\n3. The self-induced EMF always acts in the same fixed direction, regardless of whether current is growing or decaying.\n4. A larger inductance L generally causes current to change more slowly for a given applied EMF (all else equal).',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — self-induced EMF reverses direction (relative to the changing current) depending on whether the current is increasing or decreasing, always opposing whichever change is happening, not a single fixed direction.',
    difficulty: 'hard'
  },
  {
    id: 'electromagnetic-induction-150',
    type: 'how-many',
    question: 'How many of the following statements about magnetic flux and electromagnetic induction are correct?\n1. Magnetic flux through a surface can be zero even if the magnetic field there is non-zero, if the field is parallel to the surface (perpendicular to the area vector).\n2. A changing electric field can also give rise to induction-like effects, conceptually related to (though distinct in detailed treatment from) magnetic flux changes.\n3. Induced EMF in a rigid loop rotating at constant angular velocity in a uniform field varies sinusoidally with time.\n4. The concept of flux linkage (NΦ) is used when dealing with multi-turn coils.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements are correct: flux is indeed zero when B is parallel to the surface (θ=90° between B and area vector), rotating coil EMF is sinusoidal, and flux linkage (NΦ) is the standard way to handle multi-turn coils. All 4 are correct.',
    difficulty: 'hard'
  }
];
