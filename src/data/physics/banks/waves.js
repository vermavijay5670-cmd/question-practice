export const WAVES = [
  {
    id: 'wav-1',
    type: 'mcq',
    question: 'Which of the following properties is unique to a wave compared to the bodily motion of matter?',
    options: [
      'Transport of energy without actual physical transfer of matter as a whole',
      'Transport of matter from one region to another',
      'Creation of a disturbance that remains confined to the source',
      'Requires a vacuum for propagation'
    ],
    correctIndex: 0,
    explanation: 'Waves are patterns of disturbance that move without the actual physical transfer or flow of matter as a whole [1].',
    difficulty: 'easy'
  },
  {
    id: 'wav-2',
    type: 'mcq',
    question: 'Transverse waves can propagate only in media that can sustain:',
    options: [
      'Shearing stress',
      'Compressive strain',
      'Pressure changes',
      'Bulk modulus'
    ],
    correctIndex: 0,
    explanation: 'Transverse waves involve shearing strain and can only propagate in media sustaining shearing stress, such as solids [2, 3].',
    difficulty: 'medium'
  },
  {
    id: 'wav-3',
    type: 'mcq',
    question: 'A string of length 20.0 m and mass 2.50 kg is under a tension of 200 N. The time taken for a transverse jerk to reach the other end is:',
    options: [
      '0.5 s',
      '1.0 s',
      '2.0 s',
      '5.0 s'
    ],
    correctIndex: 0,
    explanation: 'Linear mass density μ = 2.5/20 = 0.125 kg/m. Speed v = sqrt(T/μ) = sqrt(200/0.125) = 40 m/s. Time t = L/v = 20/40 = 0.5 s [4, 5].',
    difficulty: 'medium'
  },
  {
    id: 'wav-4',
    type: 'mcq',
    question: 'In a longitudinal wave, the constituents of the medium oscillate:',
    options: [
      'Along the direction of wave propagation',
      'Perpendicular to the direction of wave propagation',
      'In a circular motion',
      'In a direction 45 degrees to the propagation'
    ],
    correctIndex: 0,
    explanation: 'If the constituents of the medium oscillate along the direction of wave propagation, it is called a longitudinal wave [6].',
    difficulty: 'easy'
  },
  {
    id: 'wav-5',
    type: 'mcq',
    question: 'Newton’s formula for the speed of sound in an ideal gas assumes that the process is:',
    options: [
      'Isothermal',
      'Adiabatic',
      'Isobaric',
      'Isochoric'
    ],
    correctIndex: 0,
    explanation: 'Newton assumed that the pressure variations in a medium during sound propagation are isothermal [7].',
    difficulty: 'easy'
  },
  {
    id: 'wav-6',
    type: 'mcq',
    question: 'The Laplace correction to Newton’s formula for the speed of sound is necessary because:',
    options: [
      'Pressure variations are too fast for heat flow, making the process adiabatic',
      'Air is not an ideal gas',
      'The density of air changes with pressure',
      'Newton ignored the bulk modulus of air'
    ],
    correctIndex: 0,
    explanation: 'Laplace pointed out that pressure variations are so fast that there is no time for heat flow, thus the process is adiabatic [7].',
    difficulty: 'medium'
  },
  {
    id: 'wav-7',
    type: 'mcq',
    question: 'For a wave described by y(x, t) = a sin(kx - ωt + φ), the quantity (kx - ωt + φ) is called the:',
    options: [
      'Phase',
      'Initial phase angle',
      'Angular wave number',
      'Frequency'
    ],
    correctIndex: 0,
    explanation: 'The entire argument of the sine function (kx - ωt + φ) is called the phase of the wave [8].',
    difficulty: 'easy'
  },
  {
    id: 'wav-8',
    type: 'mcq',
    question: 'If the angular wave number k is 80.0 rad/m, the wavelength λ of the wave is:',
    options: [
      '7.85 cm',
      '8.0 cm',
      '1.25 cm',
      '10.0 cm'
    ],
    correctIndex: 0,
    explanation: 'λ = 2π/k = 2 * 3.14 / 80 = 0.0785 m = 7.85 cm [9, 10].',
    difficulty: 'medium'
  },
  {
    id: 'wav-9',
    type: 'mcq',
    question: 'When a wave is reflected from a rigid boundary, it undergoes a phase change of:',
    options: [
      'π (180 degrees)',
      'π/2 (90 degrees)',
      '2π (360 degrees)',
      'Zero'
    ],
    correctIndex: 0,
    explanation: 'A travelling wave suffers a phase change of π on reflection at a rigid boundary [11, 12].',
    difficulty: 'easy'
  },
  {
    id: 'wav-10',
    type: 'mcq',
    question: 'Which type of wave involves the propagation of ripples on water surface due to surface tension?',
    options: [
      'Capillary waves',
      'Gravity waves',
      'Longitudinal waves',
      'Seismic waves'
    ],
    correctIndex: 0,
    explanation: 'Capillary waves are ripples of short wavelength where the restoring force is surface tension [13].',
    difficulty: 'medium'
  },
  {
    id: 'wav-11',
    type: 'mcq',
    question: 'The speed of sound in air at STP is estimated using Laplace correction (γ = 7/5) to be approximately:',
    options: [
      '331.3 m/s',
      '280 m/s',
      '340 m/s',
      '400 m/s'
    ],
    correctIndex: 0,
    explanation: 'Using the adiabatic formula v = sqrt(γP/ρ) for air at STP gives 331.3 m/s [14].',
    difficulty: 'medium'
  },
  {
    id: 'wav-12',
    type: 'mcq',
    question: 'The displacement relation for a standing wave is given by y(x, t) = 2a sin(kx) cos(ωt). The distance between two consecutive nodes is:',
    options: [
      'λ/2',
      'λ',
      'λ/4',
      '2λ'
    ],
    correctIndex: 0,
    explanation: 'Nodes occur where sin(kx) = 0. The distance between successive nodes is λ/2 [15, 16].',
    difficulty: 'easy'
  },
  {
    id: 'wav-13',
    type: 'mcq',
    question: 'A pipe of length L is closed at one end and open at the other. The fundamental frequency is:',
    options: [
      'v / 4L',
      'v / 2L',
      'v / L',
      '3v / 4L'
    ],
    correctIndex: 0,
    explanation: 'For a pipe closed at one end, the fundamental frequency (n=0) is v / 4L [17, 18].',
    difficulty: 'easy'
  },
  {
    id: 'wav-14',
    type: 'mcq',
    question: 'In an open organ pipe of length L, which harmonics are present?',
    options: [
      'All harmonics (n = 1, 2, 3, ...)',
      'Only odd harmonics',
      'Only even harmonics',
      'Only the fundamental harmonic'
    ],
    correctIndex: 0,
    explanation: 'An open air column at both ends generates all harmonics [17].',
    difficulty: 'medium'
  },
  {
    id: 'wav-15',
    type: 'mcq',
    question: 'Two sound waves of frequencies 427 Hz and 422 Hz are played simultaneously. The beat frequency is:',
    options: [
      '5 Hz',
      '424.5 Hz',
      '849 Hz',
      '1 Hz'
    ],
    correctIndex: 0,
    explanation: 'Beat frequency is the absolute difference between frequencies: 427 - 422 = 5 Hz [19, 20].',
    difficulty: 'easy'
  },
  {
    id: 'wav-16',
    type: 'mcq',
    question: 'A transverse harmonic wave is y(x, t) = 3.0 sin(36t + 0.018x + π/4) in cm. The wave is travelling in:',
    options: [
      'Negative x-direction',
      'Positive x-direction',
      'Positive y-direction',
      'Negative y-direction'
    ],
    correctIndex: 0,
    explanation: 'In the form sin(kx + ωt), both coefficients have the same sign, indicating propagation in the negative x-direction [21, 22].',
    difficulty: 'medium'
  },
  {
    id: 'wav-17',
    type: 'mcq',
    question: 'What is the amplitude of the resultant wave when two waves y1 = a sin(kx-ωt) and y2 = a sin(kx-ωt + φ) interfere?',
    options: [
      '2a cos(φ/2)',
      '2a sin(φ/2)',
      'a cos(φ)',
      '2a'
    ],
    correctIndex: 0,
    explanation: 'The amplitude of the resultant wave is A(φ) = 2a cos(½φ) [23, 24].',
    difficulty: 'medium'
  },
  {
    id: 'wav-18',
    type: 'mcq',
    question: 'For a string fixed at both ends, the frequency of the third harmonic is:',
    options: [
      '3v / 2L',
      'v / 2L',
      '2v / L',
      '3v / 4L'
    ],
    correctIndex: 0,
    explanation: 'Frequencies for a string fixed at both ends are ν = n v / 2L. For n=3, ν = 3v/2L [16, 25].',
    difficulty: 'medium'
  },
  {
    id: 'wav-19',
    type: 'mcq',
    question: 'The speed of sound in a solid bar is given by:',
    options: [
      'sqrt(Y / ρ)',
      'sqrt(B / ρ)',
      'sqrt(T / μ)',
      'sqrt(P / ρ)'
    ],
    correctIndex: 0,
    explanation: 'For a solid bar, the relevant modulus is Young’s modulus Y, so v = sqrt(Y / ρ) [26, 27].',
    difficulty: 'easy'
  },
  {
    id: 'wav-20',
    type: 'mcq',
    question: 'A steel wire 0.72 m long has a mass of 5.0 x 10^-3 kg. If the tension is 60 N, the wave speed is approx:',
    options: [
      '93 m/s',
      '100 m/s',
      '80 m/s',
      '120 m/s'
    ],
    correctIndex: 0,
    explanation: 'μ = 5e-3 / 0.72 = 6.94e-3 kg/m. v = sqrt(60 / 6.94e-3) ≈ 93 m/s [28].',
    difficulty: 'hard'
  },
  {
    id: 'wav-21',
    type: 'mcq',
    question: 'Which of the following does NOT affect the speed of sound in a gas?',
    options: [
      'Pressure (at constant temperature)',
      'Temperature',
      'Humidity',
      'Density'
    ],
    correctIndex: 0,
    explanation: 'Speed of sound in air is independent of pressure if temperature remains constant [29].',
    difficulty: 'medium'
  },
  {
    id: 'wav-22',
    type: 'mcq',
    question: 'In a stationary wave, all particles between two consecutive nodes have the same:',
    options: [
      'Phase',
      'Amplitude',
      'Displacement at all times',
      'Velocity at all times'
    ],
    correctIndex: 0,
    explanation: 'In a stationary wave, all particles between two nodes have the same phase at a given instant but different amplitudes [3].',
    difficulty: 'medium'
  },
  {
    id: 'wav-23',
    type: 'mcq',
    question: 'The frequency of a note emitted by a sitar string can be increased by:',
    options: [
      'Increasing the tension',
      'Increasing the length',
      'Increasing the mass per unit length',
      'Decreasing the tension'
    ],
    correctIndex: 0,
    explanation: 'Frequency ν is proportional to sqrt(T). Increasing tension T increases frequency [30, 31].',
    difficulty: 'easy'
  },
  {
    id: 'wav-24',
    type: 'mcq',
    question: 'The distance between a node and the nearest antinode in a standing wave is:',
    options: [
      'λ/4',
      'λ/2',
      'λ',
      '3λ/4'
    ],
    correctIndex: 0,
    explanation: 'Distance between consecutive nodes is λ/2, and the antinode is halfway between nodes, so distance is λ/4 [15, 32].',
    difficulty: 'easy'
  },
  {
    id: 'wav-25',
    type: 'mcq',
    question: 'A 30 cm pipe open at both ends resonates with a 1.1 kHz source. Which harmonic is it?',
    options: [
      'Second',
      'First',
      'Third',
      'Fourth'
    ],
    correctIndex: 0,
    explanation: 'v=330. ν1 = v/2L = 330/0.6 = 550 Hz. 1.1 kHz / 550 Hz = 2. It is the 2nd harmonic [33].',
    difficulty: 'hard'
  },
  {
    id: 'wav-26',
    type: 'mcq',
    question: 'Sound waves are:',
    options: [
      'Longitudinal mechanical waves',
      'Transverse mechanical waves',
      'Electromagnetic waves',
      'Matter waves'
    ],
    correctIndex: 0,
    explanation: 'Sound waves travel in air as a series of compressions and rarefactions, which are longitudinal mechanical waves [27, 34].',
    difficulty: 'easy'
  },
  {
    id: 'wav-27',
    type: 'mcq',
    question: 'The ratio of speed of sound in Hydrogen (γ=7/5) to Oxygen (γ=7/5) at the same temperature is:',
    options: [
      '4:1',
      '1:4',
      '1:16',
      '16:1'
    ],
    correctIndex: 0,
    explanation: 'v ∝ sqrt(1/M). M_oxygen = 32, M_hydrogen = 2. Ratio = sqrt(32/2) = sqrt(16) = 4:1 (External physics principle applied to gas law v formula [14]).',
    difficulty: 'medium'
  },
  {
    id: 'wav-28',
    type: 'mcq',
    question: 'If two tuning forks A and B produce 5 beats/sec and A has frequency 427 Hz, what is B if increasing B’s tension reduces beats to 3?',
    options: [
      '422 Hz',
      '432 Hz',
      '427 Hz',
      '430 Hz'
    ],
    correctIndex: 0,
    explanation: 'Increasing tension increases frequency. If B < A (422 < 427), increasing B brings it closer to A, reducing beats [30].',
    difficulty: 'hard'
  },
  {
    id: 'wav-29',
    type: 'mcq',
    question: 'Which of the following functions does NOT represent a travelling wave?',
    options: [
      'y = (x - vt)^2',
      'y = a sin(kx - ωt)',
      'y = a cos(kx + ωt)',
      'y = a exp(i(kx - ωt))'
    ],
    correctIndex: 0,
    explanation: 'A travelling wave function must be finite for all x and t. (x-vt)^2 becomes infinite as x or t increases [35].',
    difficulty: 'medium'
  },
  {
    id: 'wav-30',
    type: 'mcq',
    question: 'The fundamental frequency of a pipe closed at one end is 275 Hz. The frequency of the next possible resonance mode is:',
    options: [
      '825 Hz',
      '550 Hz',
      '1100 Hz',
      '412.5 Hz'
    ],
    correctIndex: 0,
    explanation: 'A closed pipe has only odd harmonics. The next mode is the 3rd harmonic: 3 * 275 = 825 Hz [17, 36].',
    difficulty: 'medium'
  },
  {
    id: 'wav-31',
    type: 'mcq',
    question: 'At a displacement node in a standing sound wave, the pressure change is:',
    options: [
      'Maximum',
      'Minimum',
      'Zero',
      'Equal to the amplitude'
    ],
    correctIndex: 0,
    explanation: 'At a node, the displacement is zero, but pressure changes are the largest (pressure antinode) [37, 38].',
    difficulty: 'medium'
  },
  {
    id: 'wav-32',
    type: 'mcq',
    question: 'Ultrasonic waves in air produced by a vibrating quartz crystal are:',
    options: [
      'Longitudinal',
      'Transverse',
      'Combination of both',
      'Neither'
    ],
    correctIndex: 0,
    explanation: 'Ultrasonic waves in air are sound waves and thus longitudinal [39].',
    difficulty: 'easy'
  },
  {
    id: 'wav-33',
    type: 'mcq',
    question: 'The phase difference between two points separated by a distance Δx is:',
    options: [
      '2πΔx / λ',
      'πΔx / λ',
      '2π / λ',
      'Δx / λ'
    ],
    correctIndex: 0,
    explanation: 'Phase difference Δφ = kΔx = (2π/λ)Δx [40, 41].',
    difficulty: 'easy'
  },
  {
    id: 'wav-34',
    type: 'mcq',
    question: 'A string fixed at both ends vibrates in 4 segments. The length of the string is 2 m. The wavelength is:',
    options: [
      '1.0 m',
      '0.5 m',
      '2.0 m',
      '4.0 m'
    ],
    correctIndex: 0,
    explanation: '4 segments means n=4. L = n(λ/2) => 2 = 4(λ/2) => 2 = 2λ => λ = 1.0 m [25].',
    difficulty: 'medium'
  },
  {
    id: 'wav-35',
    type: 'mcq',
    question: 'Which kind of wave does NOT require a material medium for propagation?',
    options: [
      'Electromagnetic waves',
      'Mechanical waves',
      'Sound waves',
      'Seismic waves'
    ],
    correctIndex: 0,
    explanation: 'Electromagnetic waves (light, X-rays) do not necessarily require a medium and can travel through vacuum [42].',
    difficulty: 'easy'
  },
  {
    id: 'wav-36',
    type: 'mcq',
    question: 'The speed of sound in air increases with humidity because:',
    options: [
      'The density of air decreases',
      'The pressure of air increases',
      'The ratio of specific heats increases',
      'The temperature increases'
    ],
    correctIndex: 0,
    explanation: 'Presence of water vapor reduces the density of air, and since v ∝ sqrt(1/ρ), speed increases [29].',
    difficulty: 'medium'
  },
  {
    id: 'wav-37',
    type: 'mcq',
    question: 'If the tension in a string is quadrupled, the speed of the transverse wave becomes:',
    options: [
      'Doubled',
      'Half',
      'Four times',
      'Remaining same'
    ],
    correctIndex: 0,
    explanation: 'v = sqrt(T/μ). If T becomes 4T, v becomes sqrt(4) = 2 times [4].',
    difficulty: 'easy'
  },
  {
    id: 'wav-38',
    type: 'mcq',
    question: 'In a transverse wave, the displacement y is 0.005 m, k = 80 rad/m, and ω = 3.0 rad/s. The particle velocity at x=0, t=0 is:',
    options: [
      '0.015 m/s',
      '0.4 m/s',
      '3.0 m/s',
      'Zero'
    ],
    correctIndex: 0,
    explanation: 'y = a sin(kx - ωt). Particle velocity vp = dy/dt = -aω cos(kx - ωt). At x=0, t=0, vp = -aω = -0.005 * 3 = -0.015 m/s (magnitude 0.015) [10, 43].',
    difficulty: 'hard'
  },
  {
    id: 'wav-39',
    type: 'mcq',
    question: 'A bat emits 1000 kHz ultrasonic sound. The wavelength in air (v=340 m/s) is:',
    options: [
      '0.34 mm',
      '34 cm',
      '3.4 mm',
      '0.034 mm'
    ],
    correctIndex: 0,
    explanation: 'λ = v/f = 340 / 10^6 = 0.00034 m = 0.34 mm [22].',
    difficulty: 'medium'
  },
  {
    id: 'wav-40',
    type: 'mcq',
    question: 'The fundamental frequency of a 20 cm pipe closed at one end is (v=340 m/s):',
    options: [
      '425 Hz',
      '850 Hz',
      '1700 Hz',
      '212.5 Hz'
    ],
    correctIndex: 0,
    explanation: 'ν = v/4L = 340 / (4 * 0.20) = 340 / 0.8 = 425 Hz [44].',
    difficulty: 'medium'
  },
  {
    id: 'wav-41',
    type: 'mcq',
    question: 'When two waves of same amplitude a and same frequency are 120° out of phase, the resultant amplitude is:',
    options: [
      'a',
      '2a',
      '0',
      'sqrt(3)a'
    ],
    correctIndex: 0,
    explanation: 'A = 2a cos(120/2) = 2a cos(60) = 2a * 0.5 = a [23].',
    difficulty: 'medium'
  },
  {
    id: 'wav-42',
    type: 'mcq',
    question: 'The speed of sound in a gas is v. If the absolute temperature is doubled and pressure is halved, the new speed is:',
    options: [
      'sqrt(2)v',
      'v / sqrt(2)',
      '2v',
      'v'
    ],
    correctIndex: 0,
    explanation: 'v ∝ sqrt(T). Speed is independent of pressure. So v becomes sqrt(2)v [29].',
    difficulty: 'medium'
  },
  {
    id: 'wav-43',
    type: 'mcq',
    question: 'A source and observer move towards each other with speed v/10. If the source frequency is f, the observed frequency is approx:',
    options: [
      '1.22 f',
      '1.1 f',
      '0.9 f',
      'f'
    ],
    correctIndex: 0,
    explanation: 'Using Doppler: f\' = f(v + v/10)/(v - v/10) = f(1.1/0.9) ≈ 1.22 f (External concept referenced in ToC [45]).',
    difficulty: 'hard'
  },
  {
    id: 'wav-44',
    type: 'mcq',
    question: 'Which of the following is NOT a characteristic of a mechanical wave?',
    options: [
      'Propagates through vacuum',
      'Transports energy',
      'Depends on elastic properties of medium',
      'Involves oscillations of constituents'
    ],
    correctIndex: 0,
    explanation: 'Mechanical waves require a medium and cannot propagate through vacuum [42].',
    difficulty: 'easy'
  },
  {
    id: 'wav-45',
    type: 'mcq',
    question: 'The angular wave number k has SI units:',
    options: [
      'rad/m',
      'rad/s',
      'm',
      'Hz'
    ],
    correctIndex: 0,
    explanation: 'The SI unit of angular wave number k is radian per metre or rad/m [9].',
    difficulty: 'easy'
  },
  {
    id: 'wav-46',
    type: 'mcq',
    question: 'A wave on a string has y(x, t) = 0.06 sin(2πx/3) cos(120πt). The wavelength of the component waves is:',
    options: [
      '3 m',
      '1.5 m',
      '6 m',
      '0.5 m'
    ],
    correctIndex: 0,
    explanation: 'Comparing with 2a sin(kx) cos(ωt), k = 2π/3. λ = 2π/k = 3 m [41, 46].',
    difficulty: 'medium'
  },
  {
    id: 'wav-47',
    type: 'mcq',
    question: 'In a stationary wave, the points of maximum displacement are called:',
    options: [
      'Antinodes',
      'Nodes',
      'Crests',
      'Troughs'
    ],
    correctIndex: 0,
    explanation: 'The points at which the amplitude is the largest are called antinodes [16, 47].',
    difficulty: 'easy'
  },
  {
    id: 'wav-48',
    type: 'mcq',
    question: 'The frequency of the fundamental mode of a string fixed at both ends is 45 Hz. The frequency of the second harmonic is:',
    options: [
      '90 Hz',
      '45 Hz',
      '135 Hz',
      '22.5 Hz'
    ],
    correctIndex: 0,
    explanation: 'For a string fixed at both ends, n=2 frequency is 2 * fundamental = 90 Hz [48, 49].',
    difficulty: 'easy'
  },
  {
    id: 'wav-49',
    type: 'mcq',
    question: 'A standing wave y = 2a sin(kx) cos(ωt) is formed by two waves travelling in opposite directions. The speed of each wave is:',
    options: [
      'ω/k',
      'k/ω',
      'ωk',
      '2ω/k'
    ],
    correctIndex: 0,
    explanation: 'The individual travelling waves have speed v = ω/k [46, 50].',
    difficulty: 'medium'
  },
  {
    id: 'wav-50',
    type: 'mcq',
    question: 'For an ideal gas, the adiabatic bulk modulus B_ad is:',
    options: [
      'γP',
      'P',
      'P/γ',
      'Zero'
    ],
    correctIndex: 0,
    explanation: 'For an ideal gas, the adiabatic bulk modulus is given by B_ad = γP [14, 27].',
    difficulty: 'medium'
  },
  {
    id: 'wav-51',
    type: 'mcq',
    question: 'Which of the following travels with the same speed in vacuum?',
    options: [
      'X-rays and Radio waves',
      'Sound and Light',
      'Ultrasonic and Infrasonic waves',
      'Matter waves and EM waves'
    ],
    correctIndex: 0,
    explanation: 'In vacuum, all electromagnetic waves have the same speed c [42].',
    difficulty: 'easy'
  },
  {
    id: 'wav-52',
    type: 'mcq',
    question: 'The distance between a crest and its nearest trough in a progressive wave is:',
    options: [
      'λ/2',
      'λ',
      'λ/4',
      '2λ'
    ],
    correctIndex: 0,
    explanation: 'The wavelength λ is the distance between two consecutive crests. Thus, the distance between a crest and the next trough is λ/2 [40].',
    difficulty: 'easy'
  },
  {
    id: 'wav-53',
    type: 'mcq',
    question: 'A particle in a wave has displacement y = a sin(kx - ωt). The maximum particle acceleration is:',
    options: [
      'aω^2',
      'aω',
      'a/ω^2',
      'ak^2'
    ],
    correctIndex: 0,
    explanation: 'Acceleration = d²y/dt² = -aω² sin(kx - ωt). Maximum magnitude is aω² (External physics principle applied to wave eq [43]).',
    difficulty: 'medium'
  },
  {
    id: 'wav-54',
    type: 'mcq',
    question: 'A 1 m long tube open at one end shows resonance at lengths 25.5 cm and 79.3 cm. The frequency of the fork is 340 Hz. The speed of sound is approx:',
    options: [
      '366 m/s',
      '340 m/s',
      '330 m/s',
      '350 m/s'
    ],
    correctIndex: 0,
    explanation: 'Difference in lengths ΔL = λ/2. λ = 2 * (79.3 - 25.5) = 2 * 53.8 = 107.6 cm = 1.076 m. v = fλ = 340 * 1.076 ≈ 366 m/s [51].',
    difficulty: 'hard'
  },
  {
    id: 'wav-55',
    type: 'mcq',
    question: 'Two waves with frequencies f and f + Δf produce beats. The time interval between two consecutive maximum intensities is:',
    options: [
      '1 / Δf',
      'Δf',
      '1 / f',
      '1 / (f + Δf)'
    ],
    correctIndex: 0,
    explanation: 'The beat frequency is Δf. The period of the beats (time between maxima) is T = 1/Δf [19, 20].',
    difficulty: 'medium'
  },
  {
    id: 'wav-56',
    type: 'mcq',
    question: 'The principle of superposition states that the resultant displacement is the:',
    options: [
      'Algebraic sum of individual displacements',
      'Vector product of individual displacements',
      'Average of individual displacements',
      'Difference of individual displacements'
    ],
    correctIndex: 0,
    explanation: 'According to the principle of superposition, the net displacement is the algebraic sum of the displacements due to each pulse [27, 52].',
    difficulty: 'easy'
  },
  {
    id: 'wav-57',
    type: 'mcq',
    question: 'In a stationary wave, the amplitude at a node is:',
    options: [
      'Zero',
      'Maximum',
      'a',
      '2a'
    ],
    correctIndex: 0,
    explanation: 'Nodes are points where the amplitude is zero [16, 53].',
    difficulty: 'easy'
  },
  {
    id: 'wav-58',
    type: 'mcq',
    question: 'The speed of transverse waves on a string depends on:',
    options: [
      'Tension and linear mass density',
      'Frequency and wavelength',
      'Amplitude and frequency',
      'Material of the string only'
    ],
    correctIndex: 0,
    explanation: 'The speed depends only on the properties of the medium: tension T and linear mass density μ [31, 54].',
    difficulty: 'easy'
  },
  {
    id: 'wav-59',
    type: 'mcq',
    question: 'A pipe open at both ends has a length L. Its fundamental frequency is f. If one end is closed, the new fundamental frequency is:',
    options: [
      'f / 2',
      '2f',
      'f',
      'f / 4'
    ],
    correctIndex: 0,
    explanation: 'f_open = v/2L. f_closed = v/4L = f_open / 2 [36, 55].',
    difficulty: 'medium'
  },
  {
    id: 'wav-60',
    type: 'mcq',
    question: 'The phase difference corresponding to a path difference of λ is:',
    options: [
      '2π',
      'π',
      'π/2',
      'Zero'
    ],
    correctIndex: 0,
    explanation: 'Δφ = (2π/λ) * Δx. If Δx = λ, Δφ = 2π [40, 41].',
    difficulty: 'easy'
  },
  {
    id: 'wav-61',
    type: 'mcq',
    question: 'Speed of sound in a gas is proportional to:',
    options: [
      'Square root of absolute temperature',
      'Absolute temperature',
      'Pressure',
      'Inverse of temperature'
    ],
    correctIndex: 0,
    explanation: 'From v = sqrt(γRT/M), v is proportional to sqrt(T) [29].',
    difficulty: 'easy'
  },
  {
    id: 'wav-62',
    type: 'mcq',
    question: 'When a wave travels from air to water, which of the following remains constant?',
    options: [
      'Frequency',
      'Wavelength',
      'Speed',
      'Amplitude'
    ],
    correctIndex: 0,
    explanation: 'The source determines the frequency, which remains constant when the wave enters a new medium [35, 54].',
    difficulty: 'medium'
  },
  {
    id: 'wav-63',
    type: 'mcq',
    question: 'A string of length L fixed at both ends is vibrating in its fundamental mode. The distance between the two nodes is:',
    options: [
      'L',
      'L/2',
      '2L',
      'L/4'
    ],
    correctIndex: 0,
    explanation: 'In the fundamental mode (n=1), there are nodes only at the ends, so the distance is L [25].',
    difficulty: 'easy'
  },
  {
    id: 'wav-64',
    type: 'mcq',
    question: 'The maximum displacement of a particle from its equilibrium position is called:',
    options: [
      'Amplitude',
      'Phase',
      'Wavelength',
      'Period'
    ],
    correctIndex: 0,
    explanation: 'The maximum displacement of the constituents of the medium from their equilibrium position is called the amplitude [56].',
    difficulty: 'easy'
  },
  {
    id: 'wav-65',
    type: 'mcq',
    question: 'A wave y = a sin(kx - ωt) is reflected from an open boundary. The reflected wave is:',
    options: [
      'a sin(kx + ωt)',
      '-a sin(kx + ωt)',
      'a sin(kx - ωt)',
      'a cos(kx + ωt)'
    ],
    correctIndex: 0,
    explanation: 'Reflection at an open boundary takes place without any phase change [11, 12].',
    difficulty: 'medium'
  },
  {
    id: 'wav-66',
    type: 'mcq',
    question: 'The SI unit of intensity level of sound is:',
    options: [
      'Decibel (dB)',
      'Watt/m^2',
      'Pascal',
      'Hertz'
    ],
    correctIndex: 0,
    explanation: 'While intensity is W/m², the intensity level (loudness) is measured in decibels (External knowledge standard for NEET).',
    difficulty: 'easy'
  },
  {
    id: 'wav-67',
    type: 'mcq',
    question: 'Which of the following waves is NOT mechanical?',
    options: [
      'X-rays',
      'Sound waves',
      'Water waves',
      'Seismic waves'
    ],
    correctIndex: 0,
    explanation: 'X-rays are electromagnetic waves and do not require a material medium [42].',
    difficulty: 'easy'
  },
  {
    id: 'wav-68',
    type: 'mcq',
    question: 'For a string fixed at both ends, the ratio of frequencies of the first three harmonics is:',
    options: [
      '1:2:3',
      '1:3:5',
      '1:4:9',
      '2:4:6'
    ],
    correctIndex: 0,
    explanation: 'Frequencies are ν, 2ν, 3ν... so the ratio is 1:2:3 [16, 25].',
    difficulty: 'medium'
  },
  {
    id: 'wav-69',
    type: 'mcq',
    question: 'For a pipe closed at one end, the ratio of frequencies of the first three harmonics is:',
    options: [
      '1:3:5',
      '1:2:3',
      '1:1.5:2',
      '1:2:4'
    ],
    correctIndex: 0,
    explanation: 'Frequencies are ν, 3ν, 5ν... so the ratio is 1:3:5 [17, 18].',
    difficulty: 'medium'
  },
  {
    id: 'wav-70',
    type: 'mcq',
    question: 'A source of frequency 500 Hz moves towards a stationary observer with speed 30 m/s. If v_sound = 330 m/s, the observed frequency is:',
    options: [
      '550 Hz',
      '450 Hz',
      '500 Hz',
      '600 Hz'
    ],
    correctIndex: 0,
    explanation: 'f\' = f [v / (v - vs)] = 500 [330 / (330 - 30)] = 500 [330 / 300] = 500 * 1.1 = 550 Hz (External Doppler calculation [45]).',
    difficulty: 'hard'
  },
  {
    id: 'wav-71',
    type: 'mcq',
    question: 'The distance between two consecutive antinodes in a standing wave is:',
    options: [
      'λ/2',
      'λ',
      'λ/4',
      '2λ'
    ],
    correctIndex: 0,
    explanation: 'The distance between any two consecutive antinodes is λ/2 [16, 32].',
    difficulty: 'easy'
  },
  {
    id: 'wav-72',
    type: 'mcq',
    question: 'The displacement of a particle at x=0 is y = a sin(-ωt). This represents a wave travelling in:',
    options: [
      'Positive x-direction',
      'Negative x-direction',
      'Positive y-direction',
      'Negative y-direction'
    ],
    correctIndex: 0,
    explanation: 'y(x,t) = a sin(kx-ωt) gives y(0,t) = a sin(-ωt), which represents a wave moving in the positive x-direction [57].',
    difficulty: 'medium'
  },
  {
    id: 'wav-73',
    type: 'mcq',
    question: 'The speed of a transverse wave on a string is 100 m/s. If the string length is 2 m, the fundamental frequency is:',
    options: [
      '25 Hz',
      '50 Hz',
      '100 Hz',
      '12.5 Hz'
    ],
    correctIndex: 0,
    explanation: 'f = v/2L = 100 / (2 * 2) = 100 / 4 = 25 Hz [25].',
    difficulty: 'medium'
  },
  {
    id: 'wav-74',
    type: 'mcq',
    question: 'Two waves of same frequency have intensities in ratio 9:1. The ratio of maximum to minimum intensity in their interference pattern is:',
    options: [
      '4:1',
      '3:1',
      '9:1',
      '10:8'
    ],
    correctIndex: 0,
    explanation: 'I ∝ a². a1/a2 = sqrt(9/1) = 3/1. Imax/Imin = (a1+a2)²/(a1-a2)² = (3+1)²/(3-1)² = 16/4 = 4:1 (External interference principle).',
    difficulty: 'hard'
  },
  {
    id: 'wav-75',
    type: 'mcq',
    question: 'Which of the following instruments is based on the principle of stationary waves in strings?',
    options: [
      'Violin',
      'Flute',
      'Trumpet',
      'Clarinet'
    ],
    correctIndex: 0,
    explanation: 'Musical instruments like sitar or violin are based on the principle of stationary waves in strings [48].',
    difficulty: 'easy'
  },
  {
    id: 'wav-76',
    type: 'mcq',
    question: 'If the period of a wave is 0.02 s, its frequency is:',
    options: [
      '50 Hz',
      '20 Hz',
      '100 Hz',
      '0.02 Hz'
    ],
    correctIndex: 0,
    explanation: 'Frequency ν = 1/T = 1 / 0.02 = 50 Hz [31, 58].',
    difficulty: 'easy'
  },
  {
    id: 'wav-77',
    type: 'mcq',
    question: 'The bulk modulus of water is 2.1 x 10^9 Pa and density is 1000 kg/m^3. The speed of sound in water is approx:',
    options: [
      '1450 m/s',
      '1500 m/s',
      '330 m/s',
      '5000 m/s'
    ],
    correctIndex: 0,
    explanation: 'v = sqrt(B/ρ) = sqrt(2.1e9 / 1000) = sqrt(2.1e6) ≈ 1450 m/s [27, 59].',
    difficulty: 'hard'
  },
  {
    id: 'wav-78',
    type: 'mcq',
    question: 'The quality (timbre) of a musical note depends on:',
    options: [
      'Harmonics present',
      'Fundamental frequency',
      'Amplitude',
      'Velocity'
    ],
    correctIndex: 0,
    explanation: 'Timbre allows us to distinguish notes of same frequency because of different harmonic content [38].',
    difficulty: 'medium'
  },
  {
    id: 'wav-79',
    type: 'mcq',
    question: 'Which kind of wave is associated with electrons and atoms?',
    options: [
      'Matter waves',
      'Mechanical waves',
      'Electromagnetic waves',
      'Sound waves'
    ],
    correctIndex: 0,
    explanation: 'Matter waves are associated with constituents of matter: electrons, protons, neutrons, atoms and molecules [60].',
    difficulty: 'easy'
  },
  {
    id: 'wav-80',
    type: 'mcq',
    question: 'A wave pattern that does not move to the right or left is called a:',
    options: [
      'Stationary wave',
      'Progressive wave',
      'Transverse wave',
      'Longitudinal wave'
    ],
    correctIndex: 0,
    explanation: 'Wave patterns that are neither moving to the right nor to the left are called standing or stationary waves [53, 61].',
    difficulty: 'easy'
  },
  {
    id: 'wav-81',
    type: 'mcq',
    question: 'For a string fixed at both ends, which of the following frequencies is NOT possible?',
    options: [
      'v / 4L',
      'v / 2L',
      'v / L',
      '3v / 2L'
    ],
    correctIndex: 0,
    explanation: 'Possible frequencies are n(v/2L). v/4L is not a multiple of v/2L [16, 25].',
    difficulty: 'medium'
  },
  {
    id: 'wav-82',
    type: 'mcq',
    question: 'In which aspect does the oscillatory motion in a travelling wave NOT differ from one point to another?',
    options: [
      'Amplitude and frequency',
      'Phase',
      'Velocity',
      'Acceleration'
    ],
    correctIndex: 0,
    explanation: 'In a harmonic progressive wave, all particles have the same amplitude and frequency but different phases [3, 62].',
    difficulty: 'medium'
  },
  {
    id: 'wav-83',
    type: 'mcq',
    question: 'The phenomenon of beats can be used to:',
    options: [
      'Tune musical instruments',
      'Measure the speed of light',
      'Determine the wavelength of X-rays',
      'Find the density of air'
    ],
    correctIndex: 0,
    explanation: 'Artists use the phenomenon of beats often while tuning their instruments with each other [19, 63].',
    difficulty: 'easy'
  },
  {
    id: 'wav-84',
    type: 'mcq',
    question: 'The speed of sound in air at 0°C is 331 m/s. At what temperature will it be 662 m/s?',
    options: [
      '819°C',
      '546°C',
      '1092°C',
      '273°C'
    ],
    correctIndex: 0,
    explanation: 'v ∝ sqrt(T). To double v, T must be quadrupled. 4 * 273 K = 1092 K. 1092 - 273 = 819°C (External temp calculation).',
    difficulty: 'hard'
  },
  {
    id: 'wav-85',
    type: 'mcq',
    question: 'A wave y = a sin(kx - ωt) is reflected from a rigid boundary. The reflected wave is:',
    options: [
      '-a sin(kx + ωt)',
      'a sin(kx + ωt)',
      'a sin(kx - ωt)',
      '-a sin(kx - ωt)'
    ],
    correctIndex: 0,
    explanation: 'At a rigid boundary, the reflected wave undergoes a phase reversal (π phase change) [11, 12].',
    difficulty: 'medium'
  },
  {
    id: 'wav-86',
    type: 'mcq',
    question: 'Which of the following can support BOTH longitudinal and transverse waves?',
    options: [
      'Steel rod',
      'Air',
      'Water (bulk)',
      'Vacuum'
    ],
    correctIndex: 0,
    explanation: 'Solids like steel can sustain both shearing and compressive stress, thus supporting both wave types [2, 38].',
    difficulty: 'medium'
  },
  {
    id: 'wav-87',
    type: 'mcq',
    question: 'The fundamental frequency of an open pipe of length L is 300 Hz. The first overtone is:',
    options: [
      '600 Hz',
      '450 Hz',
      '900 Hz',
      '150 Hz'
    ],
    correctIndex: 0,
    explanation: 'In an open pipe, the first overtone is the 2nd harmonic: 2 * 300 = 600 Hz [17].',
    difficulty: 'easy'
  },
  {
    id: 'wav-88',
    type: 'mcq',
    question: 'The fundamental frequency of a closed pipe of length L is 300 Hz. The first overtone is:',
    options: [
      '900 Hz',
      '600 Hz',
      '1200 Hz',
      '450 Hz'
    ],
    correctIndex: 0,
    explanation: 'In a closed pipe, the first overtone is the 3rd harmonic: 3 * 300 = 900 Hz [17].',
    difficulty: 'medium'
  },
  {
    id: 'wav-89',
    type: 'mcq',
    question: 'The frequency of a wave is 10 Hz and speed is 20 m/s. The phase difference between two points 0.5 m apart is:',
    options: [
      'π/2',
      'π',
      '2π',
      'π/4'
    ],
    correctIndex: 0,
    explanation: 'λ = v/f = 20/10 = 2 m. Δφ = (2π/λ) * Δx = (2π/2) * 0.5 = 0.5π = π/2 [40, 41].',
    difficulty: 'medium'
  },
  {
    id: 'wav-90',
    type: 'mcq',
    question: 'Gravity waves in the ocean have wavelengths of several meters. The restoring force is:',
    options: [
      'Gravity',
      'Surface tension',
      'Elasticity',
      'Air pressure'
    ],
    correctIndex: 0,
    explanation: 'The restoring force that produces gravity waves is the pull of gravity [13].',
    difficulty: 'easy'
  },
  {
    id: 'wav-91',
    type: 'mcq',
    question: 'What happens to the wavelength of sound when it travels from air to a medium where speed is higher?',
    options: [
      'Increases',
      'Decreases',
      'Remains same',
      'Becomes zero'
    ],
    correctIndex: 0,
    explanation: 'λ = v/f. Since f is constant, if v increases, λ must increase [54].',
    difficulty: 'medium'
  },
  {
    id: 'wav-92',
    type: 'mcq',
    question: 'A tuning fork of frequency 512 Hz makes 4 beats/s with a vibrating string. If string tension is slightly increased, beats become 2/s. String frequency was:',
    options: [
      '508 Hz',
      '516 Hz',
      '512 Hz',
      '510 Hz'
    ],
    correctIndex: 0,
    explanation: 'If f_string was 508, increasing tension increases it toward 512, reducing beats. (If it were 516, increasing it would increase beats) [30].',
    difficulty: 'hard'
  },
  {
    id: 'wav-93',
    type: 'mcq',
    question: 'The number of nodes in the third harmonic of a string fixed at both ends is:',
    options: [
      '4',
      '3',
      '2',
      '5'
    ],
    correctIndex: 0,
    explanation: 'The n-th harmonic has n segments and n+1 nodes. For n=3, there are 4 nodes [48].',
    difficulty: 'medium'
  },
  {
    id: 'wav-94',
    type: 'mcq',
    question: 'The number of antinodes in the third harmonic of a string fixed at both ends is:',
    options: [
      '3',
      '4',
      '2',
      '6'
    ],
    correctIndex: 0,
    explanation: 'The n-th harmonic has n antinodes. For n=3, there are 3 antinodes [48].',
    difficulty: 'easy'
  },
  {
    id: 'wav-95',
    type: 'mcq',
    question: 'A steel rod 100 cm long is clamped at its middle. The fundamental longitudinal frequency is 2.53 kHz. The speed of sound in steel is:',
    options: [
      '5.06 km/s',
      '2.53 km/s',
      '1.26 km/s',
      '10.12 km/s'
    ],
    correctIndex: 0,
    explanation: 'Clamped at middle means node at center, antinodes at ends. L = λ/2. λ = 2L = 2 m. v = fλ = 2530 * 2 = 5060 m/s = 5.06 km/s [44].',
    difficulty: 'hard'
  },
  {
    id: 'wav-96',
    type: 'mcq',
    question: 'In a longitudinal wave, the region of higher density is called:',
    options: [
      'Compression',
      'Rarefaction',
      'Crest',
      'Trough'
    ],
    correctIndex: 0,
    explanation: 'A push generates a pulse of condensations (higher density) called compressions [28, 34].',
    difficulty: 'easy'
  },
  {
    id: 'wav-97',
    type: 'mcq',
    question: 'The property of a medium that determines the speed of a mechanical wave is:',
    options: [
      'Both inertial and elastic properties',
      'Inertial properties only',
      'Elastic properties only',
      'Neither'
    ],
    correctIndex: 0,
    explanation: 'The speed of a mechanical wave is determined by the inertial and elastic properties of the medium [31, 50].',
    difficulty: 'easy'
  },
  {
    id: 'wav-98',
    type: 'mcq',
    question: 'In a stationary wave, the distance between a node and the next antinode is 10 cm. The wavelength is:',
    options: [
      '40 cm',
      '20 cm',
      '10 cm',
      '5 cm'
    ],
    correctIndex: 0,
    explanation: 'Distance node-antinode = λ/4 = 10 cm. So λ = 40 cm [32].',
    difficulty: 'easy'
  },
  {
    id: 'wav-99',
    type: 'mcq',
    question: 'Which of the following is an example of a transverse wave?',
    options: [
      'Light waves',
      'Sound waves in air',
      'Wave in a compressed spring',
      'Shock waves'
    ],
    correctIndex: 0,
    explanation: 'Light waves are transverse, while sound in air is longitudinal [2, 42].',
    difficulty: 'easy'
  },
  {
    id: 'wav-100',
    type: 'mcq',
    question: 'A 1.5 m string of mass 30 g is clamped at both ends. Tension is 75 N. The fundamental frequency is:',
    options: [
      '20.4 Hz',
      '40.8 Hz',
      '10.2 Hz',
      '30.6 Hz'
    ],
    correctIndex: 0,
    explanation: 'μ = 0.03 / 1.5 = 0.02 kg/m. v = sqrt(75 / 0.02) = sqrt(3750) ≈ 61.2 m/s. f = v/2L = 61.2 / 3 = 20.4 Hz [41, 46].',
    difficulty: 'hard'
  },
  {
    id: 'wav-101',
    type: 'mcq',
    question: 'If the amplitude of a wave is doubled, its intensity becomes:',
    options: [
      'Four times',
      'Double',
      'Remaining same',
      'Eight times'
    ],
    correctIndex: 0,
    explanation: 'Intensity I is proportional to the square of the amplitude: I ∝ a² (External physics principle).',
    difficulty: 'easy'
  },
  {
    id: 'wav-102',
    type: 'mcq',
    question: 'The speed of sound in air at 0°C (ρ = 1.29 kg/m^3, P = 1.01 x 10^5 Pa) using Newton’s formula is:',
    options: [
      '280 m/s',
      '331 m/s',
      '340 m/s',
      '310 m/s'
    ],
    correctIndex: 0,
    explanation: 'v = sqrt(P/ρ) = sqrt(1.01e5 / 1.29) ≈ 280 m/s [14, 64].',
    difficulty: 'medium'
  },
  {
    id: 'wav-103',
    type: 'mcq',
    question: 'A string has y = 2 cos(3x) sin(10t). This represents a:',
    options: [
      'Stationary wave',
      'Travelling wave in +x',
      'Travelling wave in -x',
      'None of these'
    ],
    correctIndex: 0,
    explanation: 'The variables x and t appear separately in the product of sine and cosine, which is the characteristic of a stationary wave [49, 53].',
    difficulty: 'medium'
  },
  {
    id: 'wav-104',
    type: 'mcq',
    question: 'The frequency of a wave is determined by:',
    options: [
      'The source of disturbance',
      'The medium properties',
      'The wavelength',
      'The speed'
    ],
    correctIndex: 0,
    explanation: 'The source of disturbance determines the frequency of the wave generated [54].',
    difficulty: 'easy'
  },
  {
    id: 'wav-105',
    type: 'mcq',
    question: 'At an antinode of a standing sound wave, the pressure change is:',
    options: [
      'Minimum (Zero)',
      'Maximum',
      'Equal to the amplitude',
      'None of these'
    ],
    correctIndex: 0,
    explanation: 'At the displacement antinode, the pressure change is the least (minimum/zero) [37, 38].',
    difficulty: 'medium'
  },
  {
    id: 'wav-106',
    type: 'mcq',
    question: 'The musical pillars at Nellaiappar temple that produce beats are called:',
    options: [
      'Laya Thoongal',
      'Shruti Pillar',
      'Gana Thoongal',
      'Swaras Pillar'
    ],
    correctIndex: 0,
    explanation: 'Laya Thoongal pillars produce "taal" (beats) when tapped [65].',
    difficulty: 'medium'
  },
  {
    id: 'wav-107',
    type: 'mcq',
    question: 'A point on a string is 0.375 m from one end. If λ = 3 m, what is its displacement in a stationary wave y = 0.06 sin(2πx/3) cos(ωt)?',
    options: [
      '0.06 / sqrt(2)',
      '0.06',
      'Zero',
      '0.03'
    ],
    correctIndex: 0,
    explanation: 'x = 0.375. kx = (2π/3) * 0.375 = (2π/3) * (3/8) = π/4. sin(π/4) = 1/sqrt(2). Amplitude = 0.06 / sqrt(2) [41, 46].',
    difficulty: 'hard'
  },
  {
    id: 'wav-108',
    type: 'mcq',
    question: 'Which kind of wave propagation is associated with the shearing of elements of the medium?',
    options: [
      'Transverse',
      'Longitudinal',
      'Matter waves',
      'Capillary waves'
    ],
    correctIndex: 0,
    explanation: 'In transverse waves, each element of the medium undergoes a shearing strain [2].',
    difficulty: 'medium'
  },
  {
    id: 'wav-109',
    type: 'mcq',
    question: 'Two waves y1 = a sin(ωt - kx) and y2 = a sin(ωt + kx) superimpose. The resultant is:',
    options: [
      '2a sin(ωt) cos(kx)',
      '2a sin(kx) cos(ωt)',
      'Zero',
      '2a sin(ωt - kx)'
    ],
    correctIndex: 0,
    explanation: 'Using sin(A-B) + sin(A+B) = 2 sin A cos B, we get 2a sin(ωt) cos(kx) [16, 53].',
    difficulty: 'medium'
  },
  {
    id: 'wav-110',
    type: 'mcq',
    question: 'The distance between two consecutive points having the same phase is called:',
    options: [
      'Wavelength',
      'Amplitude',
      'Period',
      'Node distance'
    ],
    correctIndex: 0,
    explanation: 'The minimum distance between two points having the same phase is called the wavelength [66, 67].',
    difficulty: 'easy'
  },
  {
    id: 'wav-111',
    type: 'mcq',
    question: 'A sound wave of frequency f is reflected from a wall moving toward the source with speed u. The reflected frequency is:',
    options: [
      'f (v+u) / (v-u)',
      'f (v-u) / (v+u)',
      'f (v+u) / v',
      'f v / (v-u)'
    ],
    correctIndex: 0,
    explanation: 'The wall acts as a moving observer then a moving source: f\' = f(v+u)/v, then f\'\' = f\'[v/(v-u)] = f(v+u)/(v-u) (Standard Doppler reflection problem [45]).',
    difficulty: 'hard'
  },
  {
    id: 'wav-112',
    type: 'mcq',
    question: 'Bats can ascertain distances and sizes of obstacles using:',
    options: [
      'Reflection of ultrasonic waves',
      'Refraction of light',
      'Beats',
      'Polarization'
    ],
    correctIndex: 0,
    explanation: 'Bats use high-frequency ultrasonic waves and their reflections to detect obstacles [38].',
    difficulty: 'easy'
  },
  {
    id: 'wav-113',
    type: 'mcq',
    question: 'If the fundamental frequency of a string is f, what is the frequency of the first overtone?',
    options: [
      '2f',
      '3f',
      '1.5f',
      '4f'
    ],
    correctIndex: 0,
    explanation: 'The first overtone is the second harmonic, which has frequency 2f [48].',
    difficulty: 'easy'
  },
  {
    id: 'wav-114',
    type: 'mcq',
    question: 'Which medium among the following has the highest speed of sound?',
    options: [
      'Iron',
      'Water',
      'Air',
      'Hydrogen'
    ],
    correctIndex: 0,
    explanation: 'Solids have much higher bulk/Young’s modulus values compared to liquids and gases, leading to higher speeds [26].',
    difficulty: 'easy'
  },
  {
    id: 'wav-115',
    type: 'mcq',
    question: 'The displacement relation for a progressive wave is y = a sin(kx - ωt). The speed of the wave is:',
    options: [
      'ω / k',
      'k / ω',
      '1 / (ωk)',
      'ωk'
    ],
    correctIndex: 0,
    explanation: 'The speed of a progressive wave is v = ω/k [31, 50].',
    difficulty: 'easy'
  }
];
