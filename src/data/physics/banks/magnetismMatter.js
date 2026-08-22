export const MAGNETISM_MATTER = [
  // ==================== MCQ (70) ====================
  {
    id: 'magnetism-matter-1',
    type: 'mcq',
    question: 'A bar magnet, when suspended freely, always aligns itself approximately along the',
    options: [
      'east-west direction',
      'north-south direction (geographic)',
      'vertical direction',
      'any random direction'
    ],
    correctIndex: 1,
    explanation: 'A freely suspended bar magnet aligns itself approximately along the geographic north-south direction, due to the interaction between its own magnetic field and the Earth\'s magnetic field.',
    difficulty: 'easy'
  },
  {
    id: 'magnetism-matter-2',
    type: 'mcq',
    question: 'The pole of a freely suspended magnet that points toward the geographic north is called the',
    options: ['south pole of the magnet', 'north pole of the magnet', 'neutral pole', 'magnetic equator'],
    correctIndex: 1,
    explanation: 'By convention, the pole of a magnet that points toward geographic north is called the north pole (or north-seeking pole) of the magnet.',
    difficulty: 'easy'
  },
  {
    id: 'magnetism-matter-3',
    type: 'mcq',
    question: 'Unlike electric charges, isolated magnetic poles (monopoles)',
    options: [
      'have been experimentally confirmed to exist independently',
      'have never been observed experimentally; magnetic poles always occur in pairs (dipoles)',
      'exist only in superconductors',
      'exist only at very high temperatures'
    ],
    correctIndex: 1,
    explanation: 'Unlike electric charge, which can exist as isolated positive or negative charges, magnetic monopoles have never been experimentally observed — magnetic poles always occur as north-south pairs (dipoles), even when a magnet is broken into pieces.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-4',
    type: 'mcq',
    question: 'If a bar magnet is broken into two pieces, each piece',
    options: [
      'retains only one pole (either north or south)',
      'becomes a smaller but complete magnet with both a north and a south pole',
      'loses all magnetic properties',
      'becomes a magnetic monopole'
    ],
    correctIndex: 1,
    explanation: 'Breaking a bar magnet does not isolate a single pole; instead, each resulting piece becomes a new, smaller complete magnet with its own north and south poles, demonstrating that magnetic monopoles do not exist.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-5',
    type: 'mcq',
    question: 'The magnetic field lines outside a bar magnet run from the',
    options: [
      'south pole to the north pole',
      'north pole to the south pole',
      'centre of the magnet outward in all directions equally',
      'they do not exist outside the magnet'
    ],
    correctIndex: 1,
    explanation: 'Outside a bar magnet, magnetic field lines emerge from the north pole and curve around to enter the south pole, similar in pattern to the electric field lines of a dipole.',
    difficulty: 'easy'
  },
  {
    id: 'magnetism-matter-6',
    type: 'mcq',
    question: 'Inside a bar magnet, the magnetic field lines run from the',
    options: [
      'north pole to the south pole',
      'south pole to the north pole, completing the loop that continues outside the magnet',
      'they do not exist inside the magnet',
      'centre outward'
    ],
    correctIndex: 1,
    explanation: 'Unlike electric field lines (which start and end on charges), magnetic field lines form closed loops; inside the magnet, they run from the south pole to the north pole, completing the loop that runs from north to south outside.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-7',
    type: 'mcq',
    question: 'Magnetic field lines, unlike electric field lines, always form',
    options: [
      'straight lines',
      'closed loops (with no beginning or end)',
      'lines that terminate at a magnetic pole',
      'random, non-continuous curves'
    ],
    correctIndex: 1,
    explanation: 'Since isolated magnetic poles do not exist, magnetic field lines cannot start or end at a point (unlike electric field lines terminating on charges); instead, they always form continuous closed loops.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-8',
    type: 'mcq',
    question: 'Gauss\'s law for magnetism states that the net magnetic flux through any closed surface is',
    options: [
      'proportional to the enclosed magnetic charge',
      'always zero, since magnetic monopoles do not exist',
      'equal to µ0 times the enclosed current',
      'always positive'
    ],
    correctIndex: 1,
    explanation: 'Gauss\'s law for magnetism states ∮B·dA = 0 for any closed surface, reflecting the fact that magnetic monopoles do not exist, so as many field lines enter a closed surface as leave it.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-9',
    type: 'mcq',
    question: 'A bar magnet can be modelled, for many purposes, as equivalent to',
    options: [
      'a single point charge',
      'a solenoid carrying current, or as a magnetic dipole with two poles separated by a small distance',
      'an insulator with no field',
      'a stationary electron'
    ],
    correctIndex: 1,
    explanation: 'A bar magnet is often modelled either as a solenoid (current loop analogy) or as a magnetic dipole with two poles of equal and opposite pole strength separated by a small distance, both giving similar external field patterns.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-10',
    type: 'mcq',
    question: 'The magnetic dipole moment of a bar magnet is defined as',
    options: [
      'the product of one pole strength and the distance between the poles (m = q_m × 2l)',
      'the current flowing through the magnet',
      'the mass of the magnet',
      'the surface area of the magnet'
    ],
    correctIndex: 0,
    explanation: 'Analogous to electric dipole moment, the magnetic dipole moment of a bar magnet is defined as m = qm × 2l, where qm is the pole strength and 2l is the distance between the two poles.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-11',
    type: 'mcq',
    question: 'The direction of the magnetic dipole moment vector of a bar magnet is taken to be',
    options: [
      'from the north pole to the south pole',
      'from the south pole to the north pole',
      'perpendicular to the axis of the magnet',
      'undefined for a bar magnet'
    ],
    correctIndex: 1,
    explanation: 'By convention, the magnetic dipole moment vector of a bar magnet points from the south pole to the north pole, along the axis of the magnet.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-12',
    type: 'mcq',
    question: 'A current loop and a bar magnet are considered equivalent because',
    options: [
      'they have identical internal structure',
      'they produce similar magnetic field patterns at large distances and behave similarly when placed in an external magnetic field',
      'a current loop has no magnetic moment',
      'a bar magnet cannot be placed in a magnetic field'
    ],
    correctIndex: 1,
    explanation: 'Both a current loop and a bar magnet produce magnetic dipole-like fields at large distances and experience similar torques in an external field, which is the basis of the well-known equivalence between the two.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-13',
    type: 'mcq',
    question: 'The torque experienced by a bar magnet of magnetic moment m placed in a uniform external magnetic field B, making angle θ with the field, is given by',
    options: ['τ = mB sinθ', 'τ = mB cosθ', 'τ = mB tanθ', 'τ = mB, independent of θ'],
    correctIndex: 0,
    explanation: 'The torque on a magnetic dipole in a uniform field is τ = m × B, with magnitude τ = mB sinθ, exactly analogous to the electric dipole torque formula.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-14',
    type: 'mcq',
    question: 'The potential energy of a bar magnet in a uniform external magnetic field, at angle θ to the field, is given by',
    options: ['U = mB sinθ', 'U = -mB cosθ', 'U = mB cosθ', 'U = -mB sinθ'],
    correctIndex: 1,
    explanation: 'Analogous to an electric dipole, the potential energy of a magnetic dipole in a uniform field is U = -mB cosθ = -m·B, minimum (most stable) when m is aligned parallel to B.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-15',
    type: 'mcq',
    question: 'A bar magnet is in stable equilibrium in an external uniform magnetic field when its magnetic moment is',
    options: [
      'perpendicular to the field',
      'parallel to the field (aligned in the same direction)',
      'antiparallel to the field',
      'at 45° to the field'
    ],
    correctIndex: 1,
    explanation: 'Potential energy U = -mB cosθ is minimum when θ = 0° (m parallel to B), corresponding to stable equilibrium.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-16',
    type: 'mcq',
    question: 'The Earth\'s magnetic field is believed to originate primarily from',
    options: [
      'a giant permanent bar magnet at the Earth\'s core',
      'convective motions of molten iron and other conducting materials in the Earth\'s outer core, acting as a dynamo',
      'the Sun\'s magnetic field alone',
      'radioactive decay in the Earth\'s crust'
    ],
    correctIndex: 1,
    explanation: 'The currently accepted explanation for the Earth\'s magnetic field is the dynamo theory, attributing it to convective motion of molten conducting material in the outer core, rather than any solid permanent magnet (since the core is far too hot to retain permanent magnetism).',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-17',
    type: 'mcq',
    question: 'The three elements of the Earth\'s magnetic field at a given location are',
    options: [
      'temperature, pressure, and humidity',
      'declination, dip (inclination), and horizontal component of the field',
      'latitude, longitude, and altitude',
      'north pole, south pole, and equator'
    ],
    correctIndex: 1,
    explanation: 'The Earth\'s magnetic field at a point is completely specified by three elements: declination (angle between magnetic and geographic meridians), dip/inclination (angle the field makes with the horizontal), and the horizontal component of the field.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-18',
    type: 'mcq',
    question: 'Magnetic declination at a place is defined as the angle between',
    options: [
      'the magnetic field and the vertical',
      'the geographic meridian and the magnetic meridian at that place',
      'the magnetic field and the ground',
      'true north and true south'
    ],
    correctIndex: 1,
    explanation: 'Declination is the angle between the true geographic north (geographic meridian) and the direction indicated by a compass needle (magnetic meridian) at a given location.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-19',
    type: 'mcq',
    question: 'Magnetic dip (or inclination) at a place is defined as the angle',
    options: [
      'between the magnetic meridian and geographic meridian',
      'made by the Earth\'s magnetic field with the horizontal plane at that place',
      'between the horizontal and vertical components of the field only at the poles',
      'between two magnetic poles'
    ],
    correctIndex: 1,
    explanation: 'Dip (inclination) is the angle that the Earth\'s total magnetic field vector makes with the horizontal plane at a given location, varying from 0° at the magnetic equator to 90° at the magnetic poles.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-20',
    type: 'mcq',
    question: 'At the magnetic equator, the angle of dip is approximately',
    options: ['90°', '0°', '45°', '180°'],
    correctIndex: 1,
    explanation: 'At the magnetic equator, the Earth\'s magnetic field is entirely horizontal (parallel to the surface), so the angle of dip is 0°.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-21',
    type: 'mcq',
    question: 'At the magnetic poles, the angle of dip is approximately',
    options: ['0°', '45°', '90°, with the field pointing vertically into or out of the Earth', '180°'],
    correctIndex: 2,
    explanation: 'At the magnetic poles, the Earth\'s magnetic field is entirely vertical (perpendicular to the surface), giving an angle of dip of 90°.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-22',
    type: 'mcq',
    question: 'The horizontal component of the Earth\'s magnetic field is generally',
    options: [
      'maximum at the poles and zero at the equator',
      'maximum at the equator and zero (or minimum) at the poles',
      'the same everywhere on Earth',
      'always directed vertically'
    ],
    correctIndex: 1,
    explanation: 'The horizontal component is largest at the magnetic equator (where the field is entirely horizontal) and diminishes toward the poles, becoming zero at the poles where the field is entirely vertical.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-23',
    type: 'mcq',
    question: 'The geographic north pole of the Earth is actually close to the Earth\'s magnetic',
    options: [
      'north pole (magnetic north pole)',
      'south pole (i.e., the Earth\'s magnetic dipole is oriented such that its south pole is near geographic north)',
      'equator',
      'core'
    ],
    correctIndex: 1,
    explanation: 'Since the north pole of a compass needle points toward geographic north, and unlike poles attract, the Earth\'s magnetic dipole must have its south pole located near the geographic north pole — a subtlety often tested conceptually in NEET.',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-24',
    type: 'mcq',
    question: 'A magnetic material is said to be "magnetized" or "polarized" when',
    options: [
      'it develops a net magnetic dipole moment per unit volume under the influence of an external field',
      'it loses all its magnetic properties',
      'it becomes an electrical conductor',
      'its temperature increases significantly'
    ],
    correctIndex: 0,
    explanation: 'Magnetization refers to the net magnetic dipole moment developed per unit volume of a material, typically induced (or enhanced) when the material is placed in an external magnetic field.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-25',
    type: 'mcq',
    question: 'The intensity of magnetization (M) of a material is defined as',
    options: [
      'the total magnetic moment of the sample',
      'the net magnetic dipole moment per unit volume of the material',
      'the external magnetic field applied to the material',
      'the magnetic susceptibility of the material'
    ],
    correctIndex: 1,
    explanation: 'Magnetization M is defined as the net magnetic moment per unit volume of the material, M = m/V, and has the same units as magnetic field intensity H.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-26',
    type: 'mcq',
    question: 'Magnetic susceptibility (χ) of a material is defined as',
    options: [
      'the ratio of the magnetic field B to the applied field H',
      'the ratio of the magnetization M to the magnetic intensity H (χ = M/H)',
      'the total magnetic moment of the material',
      'the resistivity of the material'
    ],
    correctIndex: 1,
    explanation: 'Magnetic susceptibility χ is defined as M/H, indicating how readily a material becomes magnetized in response to an applied magnetizing field H.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-27',
    type: 'mcq',
    question: 'Diamagnetic materials are characterized by',
    options: [
      'a small positive susceptibility, weakly attracted to a magnetic field',
      'a small negative susceptibility, weakly repelled by a magnetic field',
      'a large positive susceptibility, strongly attracted to a magnetic field',
      'zero susceptibility under all conditions'
    ],
    correctIndex: 1,
    explanation: 'Diamagnetic materials have a small negative susceptibility; they are weakly repelled by an external magnetic field and tend to move from stronger to weaker field regions.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-28',
    type: 'mcq',
    question: 'Paramagnetic materials are characterized by',
    options: [
      'a small negative susceptibility',
      'a small positive susceptibility, weakly attracted to a magnetic field',
      'zero susceptibility',
      'a very large negative susceptibility'
    ],
    correctIndex: 1,
    explanation: 'Paramagnetic materials have a small positive susceptibility; they are weakly attracted into an external magnetic field, tending to move toward stronger field regions.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-29',
    type: 'mcq',
    question: 'Ferromagnetic materials are characterized by',
    options: [
      'a small negative susceptibility',
      'a small positive susceptibility, similar to paramagnetic materials',
      'a very large positive susceptibility, strongly attracted to a magnetic field, and can retain magnetization even after the external field is removed',
      'zero susceptibility under all conditions'
    ],
    correctIndex: 2,
    explanation: 'Ferromagnetic materials have very large positive susceptibility, are strongly attracted by magnetic fields, and can retain significant magnetization even after the external field is removed (a property called retentivity).',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-30',
    type: 'mcq',
    question: 'Common examples of diamagnetic materials include',
    options: ['iron, cobalt, nickel', 'aluminium, chromium, sodium', 'bismuth, copper, water', 'all metals equally'],
    correctIndex: 2,
    explanation: 'Bismuth, copper, water, and gold are classic examples of diamagnetic materials, showing weak repulsion from magnetic fields.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-31',
    type: 'mcq',
    question: 'Common examples of paramagnetic materials include',
    options: ['bismuth, copper, water', 'aluminium, chromium, sodium, and oxygen (in liquid/gas form)', 'iron, cobalt, nickel', 'all insulators'],
    correctIndex: 1,
    explanation: 'Aluminium, chromium, sodium, and oxygen are common paramagnetic materials, showing weak attraction toward an external magnetic field.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-32',
    type: 'mcq',
    question: 'Common examples of ferromagnetic materials include',
    options: ['bismuth, copper, gold', 'iron, cobalt, nickel, and their alloys', 'aluminium, sodium', 'all gases'],
    correctIndex: 1,
    explanation: 'Iron, cobalt, nickel, and various alloys (like alnico) are the classic examples of strongly ferromagnetic materials.',
    difficulty: 'easy'
  },
  {
    id: 'magnetism-matter-33',
    type: 'mcq',
    question: 'The microscopic origin of diamagnetism lies in',
    options: [
      'the permanent magnetic moments of atoms/molecules aligning with the field',
      'the orbital motion of electrons, which, according to Lenz\'s law, induces a magnetic moment opposing the applied field',
      'the alignment of atomic domains',
      'the presence of unpaired electrons'
    ],
    correctIndex: 1,
    explanation: 'Diamagnetism arises from the change induced in the orbital motion of electrons by an applied field; by Lenz\'s law, this induced effect opposes the applied field, producing weak repulsion, and occurs in all materials (though masked by stronger effects in para/ferromagnets).',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-34',
    type: 'mcq',
    question: 'The microscopic origin of paramagnetism lies in',
    options: [
      'the induced orbital motion of electrons opposing the field',
      'the presence of atoms/molecules with permanent (but randomly oriented) magnetic dipole moments, which tend to align with an external field',
      'domains of aligned atoms that persist even without an external field',
      'the complete absence of electrons in the material'
    ],
    correctIndex: 1,
    explanation: 'Paramagnetic materials have atoms/molecules with permanent (but normally randomly oriented, due to thermal agitation) magnetic dipole moments; an external field tends to partially align these moments, producing weak net magnetization.',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-35',
    type: 'mcq',
    question: 'The concept of "magnetic domains" is specifically associated with',
    options: ['diamagnetic materials', 'paramagnetic materials', 'ferromagnetic materials', 'all materials equally'],
    correctIndex: 2,
    explanation: 'Ferromagnetic materials are characterized by domains — small regions where atomic magnetic moments are spontaneously aligned in the same direction, even without an external field, giving rise to strong overall magnetization when domains align.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-36',
    type: 'mcq',
    question: 'When an external magnetic field is applied to an unmagnetized ferromagnetic material, the domains',
    options: [
      'remain unaffected',
      'grow in size and align themselves along the direction of the applied field, producing strong overall magnetization',
      'disappear entirely',
      'randomize their orientation further'
    ],
    correctIndex: 1,
    explanation: 'Under an external field, favorably oriented domains grow at the expense of others, and domains progressively align with the applied field, resulting in the strong magnetization characteristic of ferromagnets.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-37',
    type: 'mcq',
    question: 'The phenomenon where a ferromagnetic material retains some magnetization even after the external magnetizing field is removed is called',
    options: ['susceptibility', 'retentivity (or remanence)', 'permeability', 'coercivity'],
    correctIndex: 1,
    explanation: 'Retentivity (or remanence) refers to the residual magnetization that remains in a ferromagnetic material after the external magnetizing field has been reduced to zero.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-38',
    type: 'mcq',
    question: 'The reverse magnetizing field required to completely demagnetize a ferromagnetic material (reduce its retained magnetization to zero) is called its',
    options: ['retentivity', 'coercivity', 'permeability', 'susceptibility'],
    correctIndex: 1,
    explanation: 'Coercivity is the magnitude of the reverse magnetic field that must be applied to a magnetized ferromagnetic material to reduce its residual magnetization to zero.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-39',
    type: 'mcq',
    question: 'The hysteresis loop (B-H curve) of a ferromagnetic material shows that',
    options: [
      'B and H are always directly proportional, with no lag',
      'the magnetization (B) lags behind the magnetizing field (H), and the material retains some magnetization even when H is reduced to zero',
      'the material never gets magnetized',
      'B decreases to zero exactly when H decreases to zero'
    ],
    correctIndex: 1,
    explanation: 'The hysteresis loop demonstrates that B does not retrace the same path as H during increasing and decreasing cycles, lagging behind H, and crucially, B remains non-zero (retentivity) even when H returns to zero.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-40',
    type: 'mcq',
    question: 'Materials with a high retentivity and high coercivity (large hysteresis loop area) are used for making',
    options: [
      'electromagnets used in transformers',
      'permanent magnets',
      'the cores of AC generators only',
      'materials with no magnetic use'
    ],
    correctIndex: 1,
    explanation: 'Materials with both high retentivity (retain strong magnetization) and high coercivity (resist demagnetization) are ideal for permanent magnets, such as alnico or steel.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-41',
    type: 'mcq',
    question: 'Materials with low retentivity and low coercivity (narrow, small-area hysteresis loop) are preferred for use in',
    options: [
      'permanent magnets',
      'electromagnets and transformer cores, where the material needs to be easily magnetized and demagnetized repeatedly with minimal energy loss',
      'compass needles',
      'refrigerator magnets'
    ],
    correctIndex: 1,
    explanation: 'Soft magnetic materials with narrow hysteresis loops (low retentivity, low coercivity) lose less energy per cycle of magnetization/demagnetization, making them ideal for transformer cores and electromagnets subjected to alternating fields.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-42',
    type: 'mcq',
    question: 'Soft iron is preferred over steel for making the core of an electromagnet mainly because soft iron has',
    options: [
      'high retentivity, so it stays permanently magnetized',
      'low retentivity and low coercivity, so it can be magnetized and demagnetized quickly and easily as current is switched on/off',
      'high electrical resistivity',
      'no magnetic properties at all'
    ],
    correctIndex: 1,
    explanation: 'Soft iron has low retentivity and low coercivity, meaning it loses its magnetization almost completely once the current (and hence the external field) is switched off, making it ideal for electromagnets that need to be turned on and off.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-43',
    type: 'mcq',
    question: 'Steel is preferred over soft iron for making permanent magnets because steel has',
    options: [
      'lower retentivity than soft iron',
      'higher retentivity and higher coercivity than soft iron, allowing it to retain strong magnetization and resist demagnetization',
      'no magnetic domains',
      'higher electrical conductivity'
    ],
    correctIndex: 1,
    explanation: 'Steel retains a larger fraction of its magnetization (higher retentivity) and requires a stronger reverse field to demagnetize (higher coercivity) compared to soft iron, making it suitable for permanent magnets.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-44',
    type: 'mcq',
    question: 'The Curie temperature of a ferromagnetic material is the temperature above which',
    options: [
      'the material becomes superconducting',
      'the material loses its ferromagnetic properties and behaves as a paramagnetic material, due to thermal agitation disrupting domain alignment',
      'the material becomes diamagnetic',
      'the material melts completely'
    ],
    correctIndex: 1,
    explanation: 'Above the Curie temperature, thermal energy overcomes the tendency of atomic magnetic moments to align in domains, and the ferromagnetic material transitions to paramagnetic behaviour.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-45',
    type: 'mcq',
    question: 'According to Curie\'s law, the magnetic susceptibility of a paramagnetic material is',
    options: [
      'independent of temperature',
      'inversely proportional to the absolute temperature (χ ∝ 1/T)',
      'directly proportional to the absolute temperature',
      'independent of the applied magnetic field'
    ],
    correctIndex: 1,
    explanation: 'Curie\'s law states χ = C/T, where C is the Curie constant, meaning paramagnetic susceptibility decreases as temperature increases, since higher thermal agitation disrupts the alignment of dipole moments with the field.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-46',
    type: 'mcq',
    question: 'The reason paramagnetic susceptibility decreases with increasing temperature (Curie\'s law) is that',
    options: [
      'the number of atoms decreases with temperature',
      'increased thermal agitation at higher temperature disrupts the alignment of the atomic magnetic dipoles with the external field',
      'the applied field decreases with temperature',
      'the material\'s volume increases significantly with temperature'
    ],
    correctIndex: 1,
    explanation: 'At higher temperatures, increased random thermal motion of atoms/molecules works against the tendency of dipoles to align with the external field, reducing the net magnetization and hence the susceptibility.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-47',
    type: 'mcq',
    question: 'Diamagnetic materials, unlike paramagnetic and ferromagnetic materials, show susceptibility that is',
    options: [
      'strongly temperature dependent',
      'essentially independent of temperature',
      'directly proportional to temperature',
      'always negative and increases sharply with temperature'
    ],
    correctIndex: 1,
    explanation: 'Diamagnetism arises from induced effects on electron orbital motion (not from thermally-disrupted permanent dipoles), so diamagnetic susceptibility is largely independent of temperature, unlike paramagnetic susceptibility.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-48',
    type: 'mcq',
    question: 'When a diamagnetic material is placed in a non-uniform magnetic field, it tends to move',
    options: [
      'from weaker field regions to stronger field regions',
      'from stronger field regions to weaker field regions',
      'it remains stationary regardless of field',
      'perpendicular to the field gradient'
    ],
    correctIndex: 1,
    explanation: 'Diamagnetic materials, being weakly repelled by magnetic fields, tend to move from regions of stronger field to regions of weaker field when placed in a non-uniform field.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-49',
    type: 'mcq',
    question: 'When a paramagnetic material is placed in a non-uniform magnetic field, it tends to move',
    options: [
      'from stronger field regions to weaker field regions',
      'from weaker field regions to stronger field regions',
      'it remains stationary',
      'in a circular path around the field source'
    ],
    correctIndex: 1,
    explanation: 'Paramagnetic materials are weakly attracted to magnetic fields and tend to move from weaker field regions toward stronger field regions in a non-uniform field.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-50',
    type: 'mcq',
    question: 'The relative magnetic permeability (µr) of a material is related to its susceptibility (χ) by',
    options: ['µr = χ', 'µr = 1 + χ', 'µr = 1 - χ', 'µr = χ²'],
    correctIndex: 1,
    explanation: 'The relative permeability of a magnetic material is related to susceptibility by µr = 1 + χ, a standard NCERT result connecting these two ways of characterizing a material\'s magnetic response.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-51',
    type: 'mcq',
    question: 'For diamagnetic materials, since χ is small and negative, the relative permeability µr is',
    options: [
      'slightly greater than 1',
      'slightly less than 1',
      'exactly equal to 1',
      'much greater than 1'
    ],
    correctIndex: 1,
    explanation: 'Since µr = 1 + χ and χ is small and negative for diamagnetic materials, µr is slightly less than 1.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-52',
    type: 'mcq',
    question: 'For paramagnetic materials, since χ is small and positive, the relative permeability µr is',
    options: [
      'slightly less than 1',
      'slightly greater than 1',
      'exactly equal to 1',
      'always negative'
    ],
    correctIndex: 1,
    explanation: 'Since µr = 1 + χ and χ is small and positive for paramagnetic materials, µr is slightly greater than 1.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-53',
    type: 'mcq',
    question: 'For ferromagnetic materials, the relative permeability µr is',
    options: [
      'slightly less than 1',
      'slightly greater than 1',
      'much greater than 1 (can be in the thousands for some materials)',
      'always exactly 1'
    ],
    correctIndex: 2,
    explanation: 'Ferromagnetic materials have very large positive susceptibility, leading to a relative permeability that can be in the hundreds or thousands, far exceeding that of para- or diamagnetic materials.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-54',
    type: 'mcq',
    question: 'A superconductor placed in an external magnetic field expels the magnetic field from its interior. This phenomenon is called',
    options: ['the Curie effect', 'the Meissner effect', 'the Hall effect', 'hysteresis'],
    correctIndex: 1,
    explanation: 'The Meissner effect refers to the expulsion of magnetic field lines from the interior of a superconductor, making it behave as a perfect diamagnet (χ = -1, µr = 0) below its critical temperature.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-55',
    type: 'mcq',
    question: 'A superconductor can be considered an extreme (perfect) diamagnetic material because its magnetic susceptibility is',
    options: ['zero', 'slightly negative', 'exactly -1', 'very large and positive'],
    correctIndex: 2,
    explanation: 'For a superconductor, χ = -1 exactly (a perfect diamagnet), meaning it completely cancels any external field within itself, consistent with the Meissner effect.',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-56',
    type: 'mcq',
    question: 'A magnetic field line diagram helps visualize the field of a bar magnet. Where the field lines are most crowded (close together), the field is',
    options: ['weakest', 'strongest', 'zero', 'undefined'],
    correctIndex: 1,
    explanation: 'Just as with electric field lines, the density (crowding) of magnetic field lines indicates field strength — closely spaced lines indicate a stronger magnetic field in that region.',
    difficulty: 'easy'
  },
  {
    id: 'magnetism-matter-57',
    type: 'mcq',
    question: 'Two magnetic field lines can never intersect each other because',
    options: [
      'they repel each other physically',
      'if they intersected, the magnetic field at that point would have two different directions simultaneously, which is not physically possible',
      'field lines are always straight',
      'magnetic fields do not really exist'
    ],
    correctIndex: 1,
    explanation: 'Just as with electric field lines, magnetic field lines cannot intersect because the magnetic field at any given point has a single, well-defined direction; intersection would imply two directions at once.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-58',
    type: 'mcq',
    question: 'The magnetic field along the axis of a bar magnet at a large distance d from its centre (d much greater than the magnet\'s length) is proportional to',
    options: ['1/d', '1/d²', '1/d³', 'd'],
    correctIndex: 2,
    explanation: 'Like the electric dipole field, the magnetic field of a short bar magnet on its axial line at large distances falls off as 1/d³, consistent with the dipole approximation.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-59',
    type: 'mcq',
    question: 'The magnetic field on the axial line of a short bar magnet is how many times the field on its equatorial line, at the same distance?',
    options: ['Equal', 'Half', 'Twice', 'Four times'],
    correctIndex: 2,
    explanation: 'Analogous to the electric dipole case, the axial field of a short bar magnet is twice the equatorial field at the same distance, Baxial = 2Bequatorial (both proportional to m/d³, with the axial expression having an extra factor of 2).',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-60',
    type: 'mcq',
    question: 'A compass needle placed near a current-carrying wire experiences a deflection because',
    options: [
      'the wire heats up and creates air currents',
      'the current-carrying wire produces its own magnetic field, which exerts a torque on the compass needle (itself a small magnet)',
      'the compass needle becomes electrically charged',
      'gravity between the wire and the needle changes'
    ],
    correctIndex: 1,
    explanation: 'A current-carrying wire generates a magnetic field around it (as per the Biot-Savart/Ampere laws), and this field interacts with the compass needle\'s own magnetic dipole moment, producing a deflecting torque — this was Oersted\'s historic observation.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-61',
    type: 'mcq',
    question: 'Oersted\'s discovery that a current-carrying wire deflects a nearby compass needle was historically significant because it',
    options: [
      'proved that electricity and magnetism were entirely unrelated phenomena',
      'was the first experimental evidence linking electricity and magnetism, showing that electric currents produce magnetic effects',
      'disproved the existence of magnetic fields',
      'showed that compass needles cannot be affected by any external influence'
    ],
    correctIndex: 1,
    explanation: 'Oersted\'s accidental observation that current deflects a compass needle was a landmark discovery, providing the first experimental link between electricity and magnetism and paving the way for the unified theory of electromagnetism.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-62',
    type: 'mcq',
    question: 'A tangent galvanometer is a device that uses',
    options: [
      'the deflection of a compass needle at the centre of a current-carrying circular coil, compared against the Earth\'s horizontal magnetic field, to measure current',
      'a moving coil suspended by a spring',
      'a solenoid without any coil',
      'radioactive decay to measure current'
    ],
    correctIndex: 0,
    explanation: 'A tangent galvanometer uses a magnetic compass needle placed at the centre of a vertical circular current-carrying coil; the needle\'s deflection depends on the tangent of the angle between the coil\'s field and the Earth\'s horizontal field, hence its name.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-63',
    type: 'mcq',
    question: 'The similarity between magnetism and electrostatics (e.g., magnetic dipole vs. electric dipole, susceptibility vs. polarizability) is useful because',
    options: [
      'the two phenomena are governed by identical physical laws with no differences',
      'it allows many formulas and concepts from electrostatics to be adapted (with appropriate substitutions) to magnetostatics, aiding conceptual understanding',
      'electric and magnetic fields are actually the same field',
      'magnetism can be completely explained without reference to electric currents'
    ],
    correctIndex: 1,
    explanation: 'Despite key differences (like the non-existence of magnetic monopoles), many formal mathematical similarities exist between electrostatics and magnetostatics, allowing analogous formulas (e.g., dipole field, dipole torque, dipole energy) to be adapted between the two, aiding learning and problem-solving.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-64',
    type: 'mcq',
    question: 'A key difference between electrostatics and magnetostatics is that',
    options: [
      'electric field lines can form closed loops, but magnetic field lines cannot',
      'isolated electric charges (monopoles) exist, but isolated magnetic poles (monopoles) do not exist in nature',
      'magnetic fields obey an inverse-cube law while electric fields obey an inverse-square law, always',
      'there is no relationship between the two at all'
    ],
    correctIndex: 1,
    explanation: 'A fundamental distinction is that isolated electric charges exist freely, while magnetic poles always occur in pairs (dipoles); this is why electric field lines can begin/end on charges but magnetic field lines must always form closed loops.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-65',
    type: 'mcq',
    question: 'Magnetic materials used for making the cores of transformers must have',
    options: [
      'high retentivity and high coercivity, similar to permanent magnet materials',
      'low hysteresis loss (small hysteresis loop area) and high permeability, to minimize energy loss during repeated magnetization cycles',
      'zero magnetic permeability',
      'very high electrical resistivity but low magnetic response'
    ],
    correctIndex: 1,
    explanation: 'Transformer cores experience continuous cycles of magnetization/demagnetization due to alternating current, so materials with small hysteresis loop area (low energy loss per cycle) and high permeability (efficient flux linkage) are preferred, such as soft iron.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-66',
    type: 'mcq',
    question: 'The magnetic field of the Earth is best modelled, to a first approximation, as that of',
    options: [
      'a point charge at the centre of the Earth',
      'a short bar magnet (magnetic dipole) located approximately at the centre of the Earth, tilted at an angle to the rotational axis',
      'a straight infinite current-carrying wire',
      'a uniformly charged sphere'
    ],
    correctIndex: 1,
    explanation: 'The Earth\'s magnetic field, to a good first approximation, resembles that of a short bar magnet (magnetic dipole) located near the Earth\'s centre, tilted at an angle (about 11.3°) to the Earth\'s rotational axis.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-67',
    type: 'mcq',
    question: 'The angle between the Earth\'s magnetic axis and its rotational (geographic) axis is approximately',
    options: ['0°', '11.3°', '45°', '90°'],
    correctIndex: 1,
    explanation: 'The Earth\'s magnetic axis is tilted at approximately 11.3° from its rotational (geographic) axis, which is why the magnetic poles do not exactly coincide with the geographic poles.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-68',
    type: 'mcq',
    question: 'A neutral point in the context of a bar magnet placed in the Earth\'s magnetic field is a point where',
    options: [
      'the magnetic field due to the bar magnet is exactly zero',
      'the resultant magnetic field (due to the magnet and the Earth\'s horizontal field combined) is zero',
      'the electric field is zero',
      'the temperature is zero'
    ],
    correctIndex: 1,
    explanation: 'A neutral point is a location where the magnetic field due to the bar magnet exactly cancels the Earth\'s horizontal magnetic field component, resulting in zero net (resultant) magnetic field at that point — useful for experimentally determining the bar magnet\'s field strength.',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-69',
    type: 'mcq',
    question: 'For a bar magnet placed with its north pole pointing toward geographic north, neutral points are typically found',
    options: [
      'on the equatorial line of the magnet',
      'on the axial line of the magnet',
      'nowhere; neutral points cannot form in this orientation',
      'only inside the magnet itself'
    ],
    correctIndex: 0,
    explanation: 'When a bar magnet is oriented with its north pole toward geographic north (like poles case), neutral points form on the equatorial line, where the magnet\'s field (directed opposite to the Earth\'s horizontal field there) can exactly cancel it.',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-70',
    type: 'mcq',
    question: 'Hysteresis, as observed in the B-H curve of a ferromagnetic material, essentially represents',
    options: [
      'the material becoming permanently non-magnetic',
      'energy dissipated (as heat) within the material during each cycle of magnetization and demagnetization, related to the area enclosed by the loop',
      'an error in measurement with no physical significance',
      'the complete absence of any relationship between B and H'
    ],
    correctIndex: 1,
    explanation: 'The area enclosed by the hysteresis loop (B-H curve) represents the energy dissipated as heat per unit volume of the material during one complete cycle of magnetization and demagnetization.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'magnetism-matter-71',
    type: 'assertion-reason',
    question: 'Assertion (A): Magnetic monopoles do not exist in nature.\nReason (R): When a bar magnet is cut into pieces, each piece is found to be a complete magnet with both a north and a south pole, never an isolated single pole.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This experimental observation (cutting a magnet always yields new complete dipoles, never isolated poles) is direct evidence supporting the non-existence of magnetic monopoles — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-72',
    type: 'assertion-reason',
    question: 'Assertion (A): Magnetic field lines always form closed loops.\nReason (R): Since isolated magnetic poles do not exist, field lines cannot terminate at a point source or sink the way electric field lines terminate on charges.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Because there are no magnetic monopoles for field lines to start or end on, they must always form continuous closed loops — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-73',
    type: 'assertion-reason',
    question: 'Assertion (A): A compass needle placed at the geographic north pole would show no clear horizontal direction.\nReason (R): The angle of dip at the magnetic poles is approximately 90°, meaning the Earth\'s magnetic field is almost entirely vertical there, leaving little to no horizontal component to align the needle.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'With the field almost purely vertical near the poles (dip ≈ 90°), the horizontal component (which orients a compass needle) becomes negligibly small, leaving the compass with no strong preferred horizontal direction — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-74',
    type: 'assertion-reason',
    question: 'Assertion (A): Soft iron is used for making electromagnet cores rather than steel.\nReason (R): Soft iron has low retentivity, so it loses most of its magnetization quickly when the magnetizing current is switched off, unlike steel which retains magnetization strongly.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since electromagnets need to switch on/off cleanly, soft iron\'s low retentivity (compared to steel) makes it ideal, as it does not remain significantly magnetized once current stops — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-75',
    type: 'assertion-reason',
    question: 'Assertion (A): Steel is preferred over soft iron for making permanent magnets.\nReason (R): Steel has higher retentivity and coercivity than soft iron, allowing it to retain strong magnetization and resist demagnetization by stray fields.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Higher retentivity and coercivity make steel suitable for permanent magnets that need to retain strong magnetization over time — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-76',
    type: 'assertion-reason',
    question: 'Assertion (A): Paramagnetic susceptibility decreases as temperature increases.\nReason (R): Higher temperature increases random thermal motion, which disrupts the tendency of the atomic magnetic dipoles to align with the external field, as described by Curie\'s law (χ ∝ 1/T).',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Curie\'s law directly captures this temperature dependence, with the physical mechanism (thermal disruption of dipole alignment) correctly explaining why susceptibility falls as temperature rises — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-77',
    type: 'assertion-reason',
    question: 'Assertion (A): Diamagnetic materials show a magnetic susceptibility that is essentially independent of temperature.\nReason (R): Diamagnetism arises from induced changes in electron orbital motion (via Lenz\'s law), not from thermally-influenced permanent dipole alignment as in paramagnetism.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since diamagnetism does not rely on the thermal alignment of permanent dipoles (unlike paramagnetism), it is largely unaffected by temperature changes — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-78',
    type: 'assertion-reason',
    question: 'Assertion (A): A superconductor is considered a perfect diamagnet.\nReason (R): A superconductor completely expels magnetic field lines from its interior (the Meissner effect), corresponding to a susceptibility of exactly -1.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The complete exclusion of field lines (Meissner effect, χ = -1 exactly) is the defining characteristic that qualifies superconductors as perfect diamagnets — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-79',
    type: 'assertion-reason',
    question: 'Assertion (A): The Earth\'s magnetic south pole is actually located near the geographic north pole.\nReason (R): Since the north pole of a freely suspended magnet points toward geographic north, and opposite (unlike) poles attract, the pole of the Earth\'s magnetism near geographic north must be a south pole.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This is a classic conceptual subtlety: since like poles repel and unlike poles attract, the compass needle\'s north pole being attracted toward geographic north means the Earth\'s effective magnetic pole located there must be a south pole — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-80',
    type: 'assertion-reason',
    question: 'Assertion (A): The torque on a bar magnet in a uniform magnetic field is maximum when the magnet is perpendicular to the field.\nReason (R): Torque is given by τ = mB sinθ, which is maximum at θ = 90°, when sinθ = 1.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'At θ = 90°, sinθ reaches its maximum value of 1, giving the maximum possible torque for given m and B — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-81',
    type: 'assertion-reason',
    question: 'Assertion (A): A hysteresis loop with a small enclosed area is preferred for transformer cores.\nReason (R): The area of the hysteresis loop represents the energy dissipated as heat per cycle, and minimizing this loss improves the efficiency of the transformer.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since the loop area directly corresponds to energy loss per magnetization cycle, a smaller loop area (as with soft iron) minimizes heat loss, improving efficiency in devices like transformers that undergo repeated cycling — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-82',
    type: 'assertion-reason',
    question: 'Assertion (A): A diamagnetic material placed in a non-uniform magnetic field moves toward the region of weaker field.\nReason (R): Diamagnetic materials are weakly repelled by magnetic fields, and this repulsion causes them to move away from stronger field regions toward weaker ones.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The weak repulsive nature of diamagnetic materials directly drives their tendency to move toward weaker field regions in a non-uniform field — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-83',
    type: 'assertion-reason',
    question: 'Assertion (A): Ferromagnetic materials lose their strong magnetic properties above a certain temperature, called the Curie temperature.\nReason (R): Above the Curie temperature, thermal agitation becomes strong enough to disrupt the alignment of magnetic domains, and the material transitions to paramagnetic behaviour.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The disruption of domain alignment by increased thermal motion above the Curie temperature is precisely why ferromagnetic behaviour is lost, transitioning the material to paramagnetic behaviour — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-84',
    type: 'assertion-reason',
    question: 'Assertion (A): A bar magnet\'s field at large axial distances resembles that of a current loop of appropriate magnetic moment.\nReason (R): Both a bar magnet and a current loop can be treated as magnetic dipoles, and at large distances their fields depend only on the dipole moment, not the detailed internal structure of the source.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'At large distances, both sources reduce to the same idealized dipole field pattern determined by the dipole moment, explaining the similarity in their far-field behaviour — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-85',
    type: 'assertion-reason',
    question: 'Assertion (A): Gauss\'s law for magnetism states that the net magnetic flux through any closed surface is always zero.\nReason (R): Magnetic field lines always enter and exit a closed surface in equal numbers, since they form closed loops with no true sources or sinks (monopoles) inside the surface.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since magnetic field lines never terminate (no monopoles), any line entering a closed surface must also exit it, ensuring zero net flux — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-86',
    type: 'assertion-reason',
    question: 'Assertion (A): The magnetic dipole moment of the Earth points roughly from geographic south to geographic north.\nReason (R): Since the pole of the Earth\'s magnetism near geographic north behaves like a south pole (attracting the compass needle\'s north pole), the Earth\'s dipole moment vector (conventionally from south to north pole of the dipole) points toward geographic north.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Given the convention that dipole moment points from the dipole\'s south pole to its north pole, and identifying that the Earth\'s effective south pole is near geographic north, the Earth\'s magnetic dipole moment points from geographic south to geographic north — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-87',
    type: 'assertion-reason',
    question: 'Assertion (A): The magnetic susceptibility of paramagnetic and ferromagnetic materials is positive, while that of diamagnetic materials is negative.\nReason (R): Positive susceptibility indicates the induced magnetization is in the same direction as the applied field, while negative susceptibility indicates it is opposite to the applied field.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The sign of susceptibility directly reflects whether the induced magnetization aligns with (positive, para/ferro) or opposes (negative, dia) the applied field — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-88',
    type: 'assertion-reason',
    question: 'Assertion (A): Water is classified as a diamagnetic substance.\nReason (R): All electrons in water molecules are paired, and there is no net permanent magnetic dipole moment contributing paramagnetic behaviour, leaving only the weak induced diamagnetic response.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since water lacks unpaired electrons (no net permanent magnetic moment), it does not show paramagnetic behaviour and instead exhibits only the universal, weak diamagnetic response — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-89',
    type: 'assertion-reason',
    question: 'Assertion (A): The horizontal component of the Earth\'s magnetic field is zero at the magnetic poles.\nReason (R): At the magnetic poles, the Earth\'s field is entirely vertical (dip = 90°), leaving no component along the horizontal direction.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since the total field at the poles points straight down/up (dip = 90°), its horizontal component (Btotal cos(dip)) becomes zero — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-90',
    type: 'assertion-reason',
    question: 'Assertion (A): A current loop experiences a torque in a uniform magnetic field, tending to align its magnetic moment with the field.\nReason (R): This behaviour is identical in form to that of a bar magnet, since both can be treated as magnetic dipoles.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The torque behaviour of a current loop matches that of a bar magnet because both are treated as magnetic dipoles with an associated magnetic moment, following τ = m × B in either case — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-91',
    type: 'assertion-reason',
    question: 'Assertion (A): The magnetic field due to a bar magnet decreases faster with distance than the magnetic field due to a single magnetic pole would (if it existed).\nReason (R): The field of a dipole (two poles) decreases as 1/r³, whereas the field of a single (hypothetical) pole would decrease as 1/r², similar to a point charge, and 1/r³ decreases faster than 1/r².',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Comparing the dipole field (1/r³) with a hypothetical monopole field (1/r², analogous to a point charge), the dipole field indeed decreases faster with distance — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-92',
    type: 'assertion-reason',
    question: 'Assertion (A): Magnetic declination varies from place to place on the Earth\'s surface.\nReason (R): Declination depends on the angle between the geographic meridian and the magnetic meridian, and this angle varies because the Earth\'s magnetic and geographic poles do not coincide.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since the magnetic and geographic poles are offset (not coincident), the angle between the two meridians (declination) naturally varies depending on one\'s location on Earth\'s surface — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-93',
    type: 'assertion-reason',
    question: 'Assertion (A): The magnetic field lines of a bar magnet, when mapped using iron filings, appear denser near the poles.\nReason (R): The magnetic field is strongest closest to the poles of the magnet, and field line density is proportional to field strength.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since field strength is greatest near the poles of a bar magnet, and field line density represents field strength, the iron filing pattern naturally appears denser near the poles — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-94',
    type: 'assertion-reason',
    question: 'Assertion (A): The dynamo theory is currently the most accepted explanation for the origin of the Earth\'s magnetic field.\nReason (R): The Earth\'s core is far too hot for any material to sustain permanent magnetism (since it would exceed the Curie temperature of any known ferromagnetic substance), ruling out a "giant bar magnet" explanation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The extreme temperature of the Earth\'s core, well above the Curie temperature of iron, rules out permanent ferromagnetism as the source, leading scientists to favour the dynamo theory (convective currents of conducting molten material) instead — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-95',
    type: 'assertion-reason',
    question: 'Assertion (A): Aluminium is weakly attracted by a strong magnet, while a copper coin shows negligible or slightly repulsive behaviour.\nReason (R): Aluminium is paramagnetic (weakly attracted), while copper is diamagnetic (weakly repelled), reflecting their differing microscopic magnetic responses.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The classification of aluminium as paramagnetic and copper as diamagnetic directly explains their observed weak attraction and weak repulsion (respectively) in a magnetic field — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-96',
    type: 'assertion-reason',
    question: 'Assertion (A): A neutral point can be found on the equatorial line of a bar magnet placed with its north pole pointing toward geographic north.\nReason (R): On the equatorial line, the magnet\'s field points from north to south (parallel to the magnet\'s axis but in the opposite sense), which can be made to exactly oppose and cancel the Earth\'s horizontal field there.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The specific direction of the magnet\'s equatorial field (opposite to its axis direction) allows it to cancel the Earth\'s field there when the magnet is oriented north-pole-north, creating a neutral point — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-97',
    type: 'assertion-reason',
    question: 'Assertion (A): The potential energy of a bar magnet is maximum when its magnetic moment is antiparallel to an external uniform field.\nReason (R): U = -mB cosθ attains its most positive (maximum) value when θ = 180° (cosθ = -1).',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'At θ = 180°, cosθ = -1, making U = -mB(-1) = +mB, the maximum (least stable) potential energy — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-98',
    type: 'assertion-reason',
    question: 'Assertion (A): Two identical bar magnets, when broken in half, produce four smaller magnets, each weaker than the original but still possessing both poles.\nReason (R): The pole strength and hence magnetic moment of each smaller piece decreases because the amount of magnetic material (and hence pole strength contribution) has decreased, though each retains its dipole nature.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Breaking magnets in half produces smaller magnetic pieces, each still possessing a complete dipole nature (both poles) but generally with reduced magnetic moment due to reduced size/material — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-99',
    type: 'assertion-reason',
    question: 'Assertion (A): A magnetic material with a wide hysteresis loop is unsuitable for use in the core of an AC generator or transformer.\nReason (R): A wide hysteresis loop indicates greater energy loss (as heat) per cycle of magnetization, which reduces efficiency and causes excessive heating in devices that undergo continuous AC cycling.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since the hysteresis loop area corresponds to energy loss per cycle, a wide loop causes significant heating and inefficiency in AC devices undergoing repeated cycling, making such materials unsuitable — R correctly explains A.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-100',
    type: 'assertion-reason',
    question: 'Assertion (A): The relative permeability of a perfect diamagnetic material (superconductor) is zero.\nReason (R): Since µr = 1 + χ and χ = -1 for a superconductor, µr = 1 + (-1) = 0.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Direct substitution of χ = -1 (the superconductor case) into µr = 1 + χ gives µr = 0, consistent with the complete exclusion of the magnetic field described by the Meissner effect — R correctly explains A.',
    difficulty: 'hard'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'magnetism-matter-101',
    type: 'statement',
    question: 'Statement I: Magnetic monopoles have never been experimentally observed.\nStatement II: Breaking a bar magnet into pieces always yields smaller complete magnets, each with both a north and south pole.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and are directly connected — the second observation is strong experimental evidence supporting the first.',
    difficulty: 'easy'
  },
  {
    id: 'magnetism-matter-102',
    type: 'statement',
    question: 'Statement I: Magnetic field lines outside a bar magnet run from the north pole to the south pole.\nStatement II: Magnetic field lines inside a bar magnet run from the north pole to the south pole as well.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — inside the magnet, field lines run from south to north (completing the closed loop), opposite to the outside direction.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-103',
    type: 'statement',
    question: 'Statement I: Ferromagnetic materials have very large positive susceptibility.\nStatement II: Ferromagnetic materials can retain magnetization even after the external field is removed.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe key properties of ferromagnetic materials — large positive susceptibility and the ability to retain magnetization (retentivity).',
    difficulty: 'easy'
  },
  {
    id: 'magnetism-matter-104',
    type: 'statement',
    question: 'Statement I: Diamagnetic materials are weakly attracted to a magnetic field.\nStatement II: Paramagnetic materials are weakly repelled by a magnetic field.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are false — they have the behaviours swapped. Diamagnetic materials are weakly repelled, while paramagnetic materials are weakly attracted to a magnetic field.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-105',
    type: 'statement',
    question: 'Statement I: The angle of dip is 0° at the magnetic equator.\nStatement II: The angle of dip is 90° at the magnetic poles.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — these are standard values of the angle of dip at the two extreme locations on Earth\'s magnetic field pattern.',
    difficulty: 'easy'
  },
  {
    id: 'magnetism-matter-106',
    type: 'statement',
    question: 'Statement I: Curie\'s law states that paramagnetic susceptibility is inversely proportional to absolute temperature.\nStatement II: Diamagnetic susceptibility follows the same temperature dependence as paramagnetic susceptibility.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct (Curie\'s law, χ ∝ 1/T). Statement II is false — diamagnetic susceptibility is essentially independent of temperature, unlike paramagnetic susceptibility.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-107',
    type: 'statement',
    question: 'Statement I: Soft iron has low retentivity and low coercivity.\nStatement II: Steel has higher retentivity and coercivity than soft iron.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the magnetic properties that make soft iron suitable for electromagnets and steel suitable for permanent magnets.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-108',
    type: 'statement',
    question: 'Statement I: A bar magnet in stable equilibrium in a uniform field has its magnetic moment parallel to the field.\nStatement II: The torque on the magnet is zero in this stable equilibrium position.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — at θ = 0° (parallel), both potential energy is minimum (stable equilibrium) and torque (τ = mB sinθ) is zero.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-109',
    type: 'statement',
    question: 'Statement I: The Earth\'s magnetic field is thought to originate from a permanently magnetized solid iron core.\nStatement II: The dynamo theory attributes the Earth\'s magnetic field to convective motion of molten conducting material in the outer core.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — the core is too hot (above Curie temperature) to sustain permanent ferromagnetism. Statement II correctly describes the currently accepted dynamo theory explanation.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-110',
    type: 'statement',
    question: 'Statement I: The relative permeability of ferromagnetic materials is generally much greater than 1.\nStatement II: The relative permeability of diamagnetic materials is generally slightly greater than 1.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — diamagnetic materials have relative permeability slightly LESS than 1 (since χ is negative), not greater than 1.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-111',
    type: 'statement',
    question: 'Statement I: A current loop and a bar magnet produce similar field patterns at large distances.\nStatement II: A current loop experiences a torque in an external magnetic field similar in form to that of a bar magnet.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — they describe the standard current-loop/bar-magnet equivalence covered in NCERT: similar far-field patterns and similar torque behaviour.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-112',
    type: 'statement',
    question: 'Statement I: Magnetic declination is zero everywhere on the Earth\'s surface.\nStatement II: Magnetic declination varies from place to place, because the magnetic and geographic poles do not exactly coincide.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — declination varies with location and is not zero everywhere. Statement II correctly explains why declination varies across the Earth\'s surface.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-113',
    type: 'statement',
    question: 'Statement I: A superconductor exhibits the Meissner effect, expelling magnetic field lines from its interior.\nStatement II: The relative permeability of a superconductor is zero.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and directly related — since χ = -1 exactly for a superconductor, µr = 1 + χ = 0, consistent with complete field exclusion (the Meissner effect).',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-114',
    type: 'statement',
    question: 'Statement I: The magnetic dipole moment of a bar magnet points from its south pole to its north pole.\nStatement II: The magnetic moment vector is unrelated to the direction in which the compass needle aligns.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — the magnetic moment direction (from south to north pole of the magnet) is exactly the direction the compass needle\'s north pole points, so they are directly related.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-115',
    type: 'statement',
    question: 'Statement I: Ferromagnetic materials become paramagnetic above their Curie temperature.\nStatement II: Diamagnetic materials become paramagnetic above a certain temperature as well.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — this is the defining behaviour at the Curie temperature. Statement II is false — diamagnetic behaviour does not undergo such a transition; it remains diamagnetic (with essentially temperature-independent, weak response) across typical temperature ranges.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-116',
    type: 'statement',
    question: 'Statement I: The B-H curve (hysteresis loop) of a ferromagnetic material shows that B lags behind H.\nStatement II: The area enclosed by the hysteresis loop represents energy dissipated per cycle of magnetization.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — the lagging behaviour (hysteresis) and the physical interpretation of the loop\'s area as energy loss are standard NCERT results.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-117',
    type: 'statement',
    question: 'Statement I: A tangent galvanometer uses the deflection of a compass needle to measure current.\nStatement II: The tangent galvanometer\'s working principle is entirely unrelated to the Earth\'s magnetic field.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — the tangent galvanometer specifically relies on comparing the coil\'s magnetic field against the Earth\'s horizontal magnetic field component, so the two are directly related, not unrelated.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-118',
    type: 'statement',
    question: 'Statement I: Aluminium and chromium are examples of paramagnetic materials.\nStatement II: Iron, cobalt, and nickel are examples of ferromagnetic materials.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly identify standard examples of paramagnetic and ferromagnetic materials as covered in NCERT.',
    difficulty: 'easy'
  },
  {
    id: 'magnetism-matter-119',
    type: 'statement',
    question: 'Statement I: The magnetic axis of the Earth passes exactly through the geographic poles.\nStatement II: The magnetic axis of the Earth is tilted at approximately 11.3° from the geographic (rotational) axis.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is false — the magnetic axis does not exactly align with the geographic axis. Statement II is correct, giving the standard approximate value of this tilt angle.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-120',
    type: 'statement',
    question: 'Statement I: The potential energy of a magnetic dipole in a uniform field is given by U = -mB cosθ.\nStatement II: This formula is mathematically analogous to the potential energy formula for an electric dipole in a uniform electric field.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — the magnetic dipole energy formula and its analogy to the electric dipole formula (U = -pE cosθ) are standard NCERT results.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-121',
    type: 'statement',
    question: 'Statement I: A neutral point near a bar magnet is a location where the resultant magnetic field is zero.\nStatement II: Neutral points exist only when a bar magnet is placed in isolation, without any external field like the Earth\'s.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — neutral points specifically arise from the combination of the bar magnet\'s field with an external field (typically the Earth\'s), not in isolation.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-122',
    type: 'statement',
    question: 'Statement I: Susceptibility and relative permeability are related by µr = 1 + χ.\nStatement II: For a vacuum, χ = 0 and µr = 1.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — this relationship and its consistency with vacuum having no magnetic response (χ = 0, µr = 1) are standard results.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-123',
    type: 'statement',
    question: 'Statement I: The axial field of a short bar magnet at large distance falls off as 1/d³.\nStatement II: The axial field of a short bar magnet is exactly equal to its equatorial field at the same distance.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is false — the axial field is twice the equatorial field at the same distance, not equal to it.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-124',
    type: 'statement',
    question: 'Statement I: Diamagnetism is present in all materials, even though it may be masked by stronger paramagnetic or ferromagnetic effects.\nStatement II: Paramagnetism and ferromagnetism occur only in materials that have permanent atomic magnetic moments (typically due to unpaired electrons).',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — diamagnetism is a universal (though often weak and masked) property, while para/ferromagnetism require materials with permanent atomic magnetic moments (from unpaired electrons) to exhibit their characteristic behaviours.',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-125',
    type: 'statement',
    question: 'Statement I: Coercivity refers to the retained magnetization of a material after the external field is removed.\nStatement II: Retentivity refers to the reverse field needed to demagnetize a material completely.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are false — the definitions have been swapped. Retentivity refers to retained magnetization after the field is removed, and coercivity refers to the reverse field needed to demagnetize the material.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-126',
    type: 'statement',
    question: 'Statement I: The horizontal component of the Earth\'s field is generally maximum at the magnetic equator.\nStatement II: The vertical component of the Earth\'s field is generally maximum at the magnetic poles.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — this reflects the standard variation of the horizontal and vertical components of the Earth\'s field from equator to poles.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-127',
    type: 'statement',
    question: 'Statement I: The dip needle (or dip circle) is used to measure the angle of dip at a given location.\nStatement II: The angle of dip is the same everywhere on the Earth\'s surface.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — a dip circle/needle measures the local angle of dip. Statement II is false — the angle of dip varies with location, from 0° at the magnetic equator to 90° at the magnetic poles.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-128',
    type: 'statement',
    question: 'Statement I: Oersted\'s experiment showed that a current-carrying wire produces a magnetic field.\nStatement II: This experiment was the first to demonstrate a connection between electricity and magnetism.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the historical and scientific significance of Oersted\'s experiment.',
    difficulty: 'easy'
  },
  {
    id: 'magnetism-matter-129',
    type: 'statement',
    question: 'Statement I: Magnetic materials with a large hysteresis loop area are ideal for use as permanent magnets.\nStatement II: Magnetic materials with a large hysteresis loop area are ideal for use in transformer cores.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — a large loop area (high retentivity and coercivity) suits permanent magnets. Statement II is false — transformer cores need materials with a SMALL loop area to minimize energy loss during repeated cycling.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-130',
    type: 'statement',
    question: 'Statement I: The concept of magnetic field lines forming closed loops is consistent with Gauss\'s law for magnetism stating zero net flux through any closed surface.\nStatement II: This is fundamentally different from the electric field case, where Gauss\'s law gives a non-zero flux proportional to enclosed charge.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — they highlight the key structural difference between Gauss\'s law for magnetism (always zero, due to no monopoles) and Gauss\'s law for electrostatics (proportional to enclosed charge).',
    difficulty: 'medium'
  },

  // ==================== HOW MANY / NUMBER-CORRECT (20) ====================
  {
    id: 'magnetism-matter-131',
    type: 'how-many',
    question: 'How many of the following statements about magnetic monopoles and field lines are correct?\n1. Isolated magnetic poles have never been experimentally observed.\n2. Magnetic field lines always form closed loops.\n3. Gauss\'s law for magnetism states that net flux through a closed surface is always zero.\n4. Breaking a magnet can isolate a single pole.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — breaking a magnet always produces new complete dipoles, never an isolated single pole.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-132',
    type: 'how-many',
    question: 'How many of the following statements about the three types of magnetic materials are correctly matched?\n1. Diamagnetic — small negative susceptibility\n2. Paramagnetic — small positive susceptibility\n3. Ferromagnetic — very large positive susceptibility\n4. All three types have susceptibility that varies strongly with temperature',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correctly matched. Statement 4 is false — diamagnetic susceptibility is essentially independent of temperature, unlike paramagnetic (Curie\'s law) and ferromagnetic materials.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-133',
    type: 'how-many',
    question: 'How many of the following statements about Earth\'s magnetism are correct?\n1. The angle of dip is 0° at the magnetic equator.\n2. The angle of dip is 90° at the magnetic poles.\n3. The dynamo theory explains the Earth\'s magnetic field as arising from a permanently magnetized solid core.\n4. The Earth\'s magnetic axis is tilted from its rotational axis by about 11.3°.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — the dynamo theory attributes the field to convective motion of molten conducting material, not a permanently magnetized solid core (which would be impossible given the core\'s temperature).',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-134',
    type: 'how-many',
    question: 'How many of the following statements about a bar magnet in a uniform external field are correct?\n1. Torque is given by τ = mB sinθ.\n2. Potential energy is given by U = -mB cosθ.\n3. Stable equilibrium occurs when the magnetic moment is antiparallel to the field.\n4. Torque is maximum when the magnetic moment is perpendicular to the field.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — stable equilibrium occurs when the magnetic moment is parallel (not antiparallel) to the field.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-135',
    type: 'how-many',
    question: 'How many of the following statements about ferromagnetic materials and hysteresis are correct?\n1. Ferromagnetic materials have magnetic domains.\n2. Retentivity is the residual magnetization after the external field is removed.\n3. Coercivity is the reverse field needed to reduce magnetization to zero.\n4. A larger hysteresis loop area means less energy is dissipated per cycle.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a LARGER loop area means MORE (not less) energy dissipated per cycle.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-136',
    type: 'how-many',
    question: 'How many of the following statements about soft iron and steel as magnetic materials are correct?\n1. Soft iron has low retentivity, suitable for electromagnets.\n2. Steel has high retentivity, suitable for permanent magnets.\n3. Soft iron has a wider hysteresis loop than steel.\n4. Soft iron is preferred for transformer cores due to low hysteresis loss.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — soft iron has a NARROWER (not wider) hysteresis loop than steel, which is precisely why it has lower hysteresis loss.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-137',
    type: 'how-many',
    question: 'How many of the following are correctly classified as diamagnetic materials?\n1. Bismuth\n2. Copper\n3. Iron\n4. Water\n5. Aluminium',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 1,
    explanation: 'Bismuth, copper, and water are diamagnetic. Iron is ferromagnetic, and aluminium is paramagnetic — neither belongs in this diamagnetic list. So 3 are correctly classified as diamagnetic.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-138',
    type: 'how-many',
    question: 'How many of the following statements about magnetic susceptibility and permeability are correct?\n1. µr = 1 + χ.\n2. For diamagnetic materials, µr is slightly less than 1.\n3. For paramagnetic materials, µr is slightly greater than 1.\n4. For a perfect diamagnet (superconductor), µr equals 1.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — for a perfect diamagnet (superconductor), χ = -1, giving µr = 1 + (-1) = 0, not 1.',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-139',
    type: 'how-many',
    question: 'How many of the following statements about the Curie temperature are correct?\n1. Above the Curie temperature, a ferromagnetic material behaves as paramagnetic.\n2. Below the Curie temperature, thermal energy is insufficient to disrupt domain alignment.\n3. The Curie temperature is the same for all ferromagnetic materials.\n4. Susceptibility follows Curie\'s law (χ ∝ 1/T) for a ferromagnetic material at all temperatures, both above and below the Curie point.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    explanation: 'Statements 1 and 2 are correct. Statement 3 is false — different ferromagnetic materials have different Curie temperatures (e.g., iron and nickel differ). Statement 4 is false — Curie\'s (or the related Curie-Weiss) law-type behaviour applies to the paramagnetic phase above the Curie point, not uniformly at all temperatures including the ferromagnetic phase below it.',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-140',
    type: 'how-many',
    question: 'How many of the following statements comparing electrostatics and magnetostatics are correct?\n1. Isolated electric charges exist, but isolated magnetic poles do not.\n2. Electric field lines can terminate on charges, but magnetic field lines cannot terminate anywhere.\n3. The formulas for dipole torque and dipole energy have similar forms in both cases.\n4. Gauss\'s law gives zero flux in both electrostatics and magnetostatics for any closed surface.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — Gauss\'s law for electrostatics gives flux proportional to enclosed charge (not always zero), while Gauss\'s law for magnetism always gives zero flux.',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-141',
    type: 'how-many',
    question: 'How many of the following statements about a superconductor are correct?\n1. It exhibits the Meissner effect.\n2. It behaves as a perfect diamagnet.\n3. Its magnetic susceptibility is exactly -1.\n4. Its relative permeability is greater than 1.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the relative permeability of a superconductor is 0 (since µr = 1 + χ = 1 + (-1) = 0), not greater than 1.',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-142',
    type: 'how-many',
    question: 'How many of the following statements about the magnetic dipole moment of a bar magnet are correct?\n1. It is defined as m = qm × 2l, where qm is pole strength and 2l is the distance between poles.\n2. Its direction is from the south pole to the north pole.\n3. Its SI unit is the same as that of magnetic field.\n4. Its SI unit is ampere-metre².',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — the SI unit of magnetic dipole moment (A·m²) is different from that of magnetic field (tesla), not the same.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-143',
    type: 'how-many',
    question: 'How many of the following statements about neutral points near a bar magnet are correct?\n1. A neutral point is where the resultant magnetic field (bar magnet + Earth) is zero.\n2. Neutral points can form on the equatorial line when the magnet\'s north pole points toward geographic north.\n3. Neutral points always exist regardless of the magnet\'s orientation.\n4. Locating neutral points is one experimental method to determine a magnet\'s field strength.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — the location (or even existence) of neutral points depends on the magnet\'s orientation relative to the Earth\'s field; they do not always exist in every configuration.',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-144',
    type: 'how-many',
    question: 'How many of the following statements about magnetic field patterns are correct?\n1. Field lines are more crowded where the field is stronger.\n2. Two field lines never intersect.\n3. The axial field of a bar magnet is twice its equatorial field at the same distance.\n4. The field due to a bar magnet decreases as 1/d² at large axial distances, same as a point charge.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the bar magnet\'s (dipole) field decreases as 1/d³ at large distances, not 1/d² (which would be the case for a hypothetical single pole/monopole).',
    difficulty: 'hard'
  },
  {
    id: 'magnetism-matter-145',
    type: 'how-many',
    question: 'How many of the following statements about paramagnetic materials are correct?\n1. They have permanent atomic magnetic dipole moments.\n2. These dipole moments are randomly oriented in the absence of an external field, due to thermal agitation.\n3. An external field tends to align these dipoles, producing weak net magnetization.\n4. Their susceptibility increases as temperature increases.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — paramagnetic susceptibility DECREASES with increasing temperature (Curie\'s law), not increases.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-146',
    type: 'how-many',
    question: 'How many of the following statements about magnetic materials in a non-uniform field are correct?\n1. Diamagnetic materials move toward weaker field regions.\n2. Paramagnetic materials move toward stronger field regions.\n3. Ferromagnetic materials are strongly attracted toward stronger field regions.\n4. All magnetic materials behave identically in a non-uniform field.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — different classes of magnetic materials (dia, para, ferro) behave quite differently in a non-uniform field, as described in statements 1-3.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-147',
    type: 'how-many',
    question: 'How many of the following are correct SI units?\n1. Magnetic dipole moment — A·m²\n2. Magnetic susceptibility — dimensionless (no units)\n3. Magnetic field (B) — tesla\n4. Magnetization (M) — A/m\n5. Relative permeability — dimensionless (no units)',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 3,
    explanation: 'All five statements are correct: magnetic moment in A·m², susceptibility and relative permeability are dimensionless, field in tesla, and magnetization in A/m. All 5 are correct.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-148',
    type: 'how-many',
    question: 'How many of the following statements about the Earth\'s magnetic field elements are correct?\n1. Declination is the angle between the geographic and magnetic meridians.\n2. Dip is the angle the field makes with the horizontal.\n3. The horizontal component of the field is generally largest at the magnetic poles.\n4. These three elements completely specify the Earth\'s magnetic field at a given location.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — the horizontal component is largest at the magnetic equator, not at the poles (where it approaches zero).',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-149',
    type: 'how-many',
    question: 'How many of the following statements about materials used for permanent magnets versus electromagnets are correct?\n1. Permanent magnets need high retentivity and high coercivity.\n2. Electromagnet cores need low retentivity and low coercivity.\n3. Steel is generally more suitable for permanent magnets than soft iron.\n4. Soft iron is generally more suitable for permanent magnets than steel.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — it is the reverse of statement 3; soft iron is preferred for electromagnets, not permanent magnets.',
    difficulty: 'medium'
  },
  {
    id: 'magnetism-matter-150',
    type: 'how-many',
    question: 'How many of the following statements about the equivalence of a current loop and a magnetic dipole are correct?\n1. Both experience a torque τ = m × B in a uniform external field.\n2. Both have a potential energy of the form U = -m·B.\n3. Both produce a field that decreases as 1/r³ at large axial distances.\n4. A current loop cannot be assigned any magnetic moment, unlike a bar magnet.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a current loop is explicitly assigned a magnetic moment m = IA (or NIA for N turns), directly analogous to a bar magnet\'s moment.',
    difficulty: 'hard'
  }
];
