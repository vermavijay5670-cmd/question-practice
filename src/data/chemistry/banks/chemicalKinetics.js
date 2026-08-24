export const CHEMICAL_KINETICS = [
  // ==================== MCQ (70) ====================
  {
    id: 'kinetics-1',
    type: 'mcq',
    question: 'Chemical kinetics is the branch of chemistry that deals with',
    options: [
      'the extent to which a reaction proceeds at equilibrium',
      'the rate at which a chemical reaction occurs and the factors affecting it',
      'the heat evolved or absorbed during a reaction',
      'the physical states of reactants and products'
    ],
    correctIndex: 1,
    explanation: 'Chemical kinetics is concerned with the speed (rate) of chemical reactions and the various factors, such as concentration, temperature, and catalysts, that influence this rate.',
    difficulty: 'easy'
  },
  {
    id: 'kinetics-2',
    type: 'mcq',
    question: 'The average rate of a reaction is defined as the',
    options: [
      'change in concentration of a reactant or product divided by the time interval over which the change occurs',
      'instantaneous slope of the concentration vs time curve at a single point',
      'total amount of product formed regardless of time taken',
      'equilibrium constant divided by time'
    ],
    correctIndex: 0,
    explanation: 'Average rate is calculated as the change in concentration of a reactant or product over a finite time interval, Δ[concentration]/Δt.',
    difficulty: 'easy'
  },
  {
    id: 'kinetics-3',
    type: 'mcq',
    question: 'The instantaneous rate of a reaction at a particular time is obtained from a concentration vs time graph as the',
    options: [
      'average slope over the entire graph',
      'slope of the tangent drawn to the curve at that particular time',
      'y-intercept of the graph',
      'x-intercept of the graph'
    ],
    correctIndex: 1,
    explanation: 'Instantaneous rate is the rate at a specific moment in time, obtained mathematically as the derivative of concentration with respect to time, which graphically corresponds to the slope of the tangent at that point.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-4',
    type: 'mcq',
    question: 'Since the concentration of a reactant decreases with time, the rate of disappearance of a reactant is expressed with a negative sign so that',
    options: [
      'the calculated rate matches the units of concentration',
      'the overall reaction rate is reported as a positive quantity',
      'the rate constant becomes negative',
      'the reaction becomes reversible'
    ],
    correctIndex: 1,
    explanation: 'Since d[Reactant]/dt is inherently negative (concentration decreasing), a negative sign is included in the rate expression (Rate = -d[R]/dt) so that the reported rate of reaction is a positive quantity.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-5',
    type: 'mcq',
    question: 'For the general reaction aA + bB → cC + dD, the rate of reaction can be expressed in terms of all species as',
    options: [
      'Rate = -d[A]/dt = -d[B]/dt = d[C]/dt = d[D]/dt, without any stoichiometric adjustment',
      'Rate = -(1/a)d[A]/dt = -(1/b)d[B]/dt = (1/c)d[C]/dt = (1/d)d[D]/dt',
      'Rate = a×d[A]/dt = b×d[B]/dt',
      'Rate is defined only in terms of the reactant with the smallest stoichiometric coefficient'
    ],
    correctIndex: 1,
    explanation: 'To ensure a single, unambiguous rate of reaction regardless of which species is monitored, each term is divided by its respective stoichiometric coefficient.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-6',
    type: 'mcq',
    question: 'The common unit for the rate of a reaction is',
    options: ['mol L-1 s-1 (concentration per unit time)', 'mol s-1 only', 'L mol-1', 's-1 only, regardless of reaction order'],
    correctIndex: 0,
    explanation: 'Since rate is defined as change in concentration per unit time, its unit is typically mol L-1 s-1 (or equivalent concentration/time units).',
    difficulty: 'easy'
  },
  {
    id: 'kinetics-7',
    type: 'mcq',
    question: 'Which of the following is NOT a factor that generally affects the rate of a chemical reaction, as covered in NCERT?',
    options: ['Concentration of reactants', 'Temperature', 'Presence of a catalyst', 'The colour of the container used'],
    correctIndex: 3,
    explanation: 'The colour of the reaction vessel has no bearing on reaction rate; concentration, temperature, and catalysts are all well-established factors influencing rate.',
    difficulty: 'easy'
  },
  {
    id: 'kinetics-8',
    type: 'mcq',
    question: 'For heterogeneous reactions (involving reactants in different phases), the rate of reaction is also significantly influenced by the',
    options: ['colour of the reactants', 'surface area of the solid reactant exposed to the other phase', 'atomic number of the elements involved', 'molecular symmetry of the reactants'],
    correctIndex: 1,
    explanation: 'In heterogeneous reactions, greater surface area of the solid reactant increases the contact between reacting phases, thereby increasing the rate of reaction.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-9',
    type: 'mcq',
    question: 'The rate law (rate equation) of a reaction expresses the rate as a function of the',
    options: [
      'temperature of the reaction only',
      'molar concentrations of the reactants, each raised to some power',
      'total volume of the reaction vessel',
      'physical state of the products only'
    ],
    correctIndex: 1,
    explanation: 'The rate law expresses the rate of a reaction in terms of the molar concentrations of the reactants, each raised to a power that must be determined experimentally.',
    difficulty: 'easy'
  },
  {
    id: 'kinetics-10',
    type: 'mcq',
    question: 'The rate constant (k) of a reaction can be determined',
    options: [
      'only theoretically, using the balanced equation',
      'only experimentally, and cannot be predicted purely from the stoichiometry of the balanced equation',
      'from the atomic masses of the reactants',
      'from the molar mass of the solvent only'
    ],
    correctIndex: 1,
    explanation: 'The rate law and the associated rate constant must be determined experimentally, since they cannot generally be deduced simply from the stoichiometric coefficients of the balanced chemical equation.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-11',
    type: 'mcq',
    question: 'The order of a reaction with respect to a given rate law rate = k[A]^x[B]^y is defined as',
    options: [
      'the sum of the exponents x and y, i.e. the sum of the powers to which the concentration terms are raised in the rate law',
      'the number of reactant molecules colliding simultaneously',
      'the number of steps in the reaction mechanism',
      'always equal to the sum of the stoichiometric coefficients in the balanced equation'
    ],
    correctIndex: 0,
    explanation: 'The overall order of a reaction is the sum of the powers (exponents) of the concentration terms appearing in the experimentally determined rate law.',
    difficulty: 'easy'
  },
  {
    id: 'kinetics-12',
    type: 'mcq',
    question: 'The order of a reaction, unlike molecularity, can be',
    options: [
      'only a positive whole number',
      'zero, a positive or negative integer, or even a fraction',
      'only zero or one',
      'determined solely from the stoichiometric coefficients of the balanced equation'
    ],
    correctIndex: 1,
    explanation: 'Reaction order is an experimentally determined quantity that can take zero, integer, negative, or fractional values, unlike molecularity, which is always a positive whole number.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-13',
    type: 'mcq',
    question: 'Molecularity of an elementary reaction is defined as the',
    options: [
      'sum of the concentration exponents in the experimental rate law',
      'number of reacting species (atoms, ions, or molecules) that must collide simultaneously in that single elementary step to bring about the reaction',
      'total number of steps in a reaction mechanism',
      'number of moles of product formed per mole of reactant'
    ],
    correctIndex: 1,
    explanation: 'Molecularity refers to the number of reactant species that must come together in a single elementary reaction step for the reaction to occur.',
    difficulty: 'easy'
  },
  {
    id: 'kinetics-14',
    type: 'mcq',
    question: 'Molecularity of a reaction can never be',
    options: ['one', 'two', 'zero or a fraction', 'three'],
    correctIndex: 2,
    explanation: 'Since molecularity refers to a definite number of colliding species in an elementary step, it must always be a positive whole number (typically 1, 2, or rarely 3) and can never be zero or fractional.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-15',
    type: 'mcq',
    question: 'The concept of molecularity applies strictly to',
    options: [
      'the overall reaction, regardless of how many steps it involves',
      'each elementary step of a reaction mechanism, not necessarily to the overall complex reaction',
      'only zero order reactions',
      'only reactions occurring in the gas phase'
    ],
    correctIndex: 1,
    explanation: 'Molecularity is meaningful only for elementary (single-step) reactions; for a multistep (complex) reaction, molecularity is defined separately for each individual elementary step, not for the overall process.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-16',
    type: 'mcq',
    question: 'In a multistep reaction mechanism, the overall rate of the reaction is generally determined by the',
    options: [
      'fastest step in the mechanism',
      'slowest step in the mechanism, known as the rate-determining step',
      'first step in the mechanism, regardless of its rate',
      'average rate of all steps combined'
    ],
    correctIndex: 1,
    explanation: 'The overall reaction rate is governed by the slowest elementary step in the mechanism, called the rate-determining step, since it acts as a bottleneck for the overall process.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-17',
    type: 'mcq',
    question: 'For a zero order reaction, the rate of reaction is',
    options: [
      'directly proportional to the concentration of the reactant',
      'independent of the concentration of the reactant',
      'inversely proportional to the concentration of the reactant',
      'proportional to the square of the concentration of the reactant'
    ],
    correctIndex: 1,
    explanation: 'In a zero order reaction, the rate law is rate = k[A]^0 = k, meaning the rate does not depend on the concentration of the reactant at all.',
    difficulty: 'easy'
  },
  {
    id: 'kinetics-18',
    type: 'mcq',
    question: 'The unit of the rate constant for a zero order reaction is',
    options: ['s-1', 'mol L-1 s-1', 'mol-1 L s-1', 'mol-2 L2 s-1'],
    correctIndex: 1,
    explanation: 'For a zero order reaction, rate = k, so k must carry the same units as rate itself, namely mol L-1 s-1.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-19',
    type: 'mcq',
    question: 'The unit of the rate constant for a first order reaction is',
    options: ['mol L-1 s-1', 's-1, independent of concentration units', 'mol-1 L s-1', 'mol-2 L2 s-1'],
    correctIndex: 1,
    explanation: 'For a first order reaction, rate = k[A], so k has units of s-1 (reciprocal time), independent of the concentration units used.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-20',
    type: 'mcq',
    question: 'The unit of the rate constant for a second order reaction is',
    options: ['s-1', 'mol L-1 s-1', 'mol-1 L s-1 (or L mol-1 s-1)', 'mol L-2 s-1'],
    correctIndex: 2,
    explanation: 'For a second order reaction, rate = k[A]^2 (or k[A][B]), so k must carry units of mol-1 L s-1 (equivalently L mol-1 s-1) to keep the rate expression dimensionally consistent.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-21',
    type: 'mcq',
    question: 'The integrated rate equation for a zero order reaction, [A] = [A]0 - kt, shows that a plot of [A] versus time gives a',
    options: [
      'straight line with a positive slope equal to k',
      'straight line with a negative slope equal to -k',
      'curve that rises exponentially',
      'horizontal line, since concentration does not change'
    ],
    correctIndex: 1,
    explanation: 'Rearranging [A] = [A]0 - kt shows that plotting [A] against t gives a straight line with slope -k and intercept [A]0.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-22',
    type: 'mcq',
    question: 'The integrated rate equation for a first order reaction is commonly written as',
    options: [
      'k = (1/t) ([A]0 - [A])',
      'k = (2.303/t) log([A]0/[A])',
      'k = [A]0 × [A] × t',
      '[A] = [A]0 + kt'
    ],
    correctIndex: 1,
    explanation: 'The integrated first order rate equation, derived from -d[A]/dt = k[A], is k = (2.303/t) log([A]0/[A]).',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-23',
    type: 'mcq',
    question: 'For a first order reaction, a plot of log[A] (or ln[A]) versus time gives a',
    options: [
      'straight line, from which the rate constant can be determined from the slope',
      'parabola',
      'horizontal line',
      'curve that cannot be used to determine k'
    ],
    correctIndex: 0,
    explanation: 'The integrated first order rate law can be rearranged to ln[A] = ln[A]0 - kt, so a plot of ln[A] (or log[A]) versus time is linear, with slope related directly to the rate constant k.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-24',
    type: 'mcq',
    question: 'The half-life (t1/2) of a reaction is defined as the',
    options: [
      'time required for the rate constant to become zero',
      'time required for the concentration of a reactant to be reduced to half of its initial value',
      'time required for the reaction to reach completion',
      'time required for the products to reach half of their maximum possible concentration'
    ],
    correctIndex: 1,
    explanation: 'Half-life is defined as the time taken for the concentration of a reactant to decrease to exactly half of its initial value.',
    difficulty: 'easy'
  },
  {
    id: 'kinetics-25',
    type: 'mcq',
    question: 'For a first order reaction, the half-life (t1/2) is given by',
    options: [
      't1/2 = 0.693/k, which is independent of the initial concentration',
      't1/2 = [A]0/(2k), which depends on the initial concentration',
      't1/2 = k/[A]0',
      't1/2 = 2.303 × k × [A]0'
    ],
    correctIndex: 0,
    explanation: 'For a first order reaction, t1/2 = 0.693/k, and notably this value does not depend on the initial concentration of the reactant, a distinguishing characteristic of first order kinetics.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-26',
    type: 'mcq',
    question: 'For a zero order reaction, the half-life (t1/2) is given by',
    options: [
      't1/2 = 0.693/k, independent of initial concentration',
      't1/2 = [A]0/(2k), which is directly proportional to the initial concentration',
      't1/2 = k/[A]0, inversely proportional to initial concentration',
      't1/2 is undefined for zero order reactions'
    ],
    correctIndex: 1,
    explanation: 'For a zero order reaction, t1/2 = [A]0/(2k); unlike first order reactions, this half-life depends directly on the initial concentration of the reactant.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-27',
    type: 'mcq',
    question: 'The fact that the half-life of a first order reaction is independent of the initial concentration of the reactant is',
    options: [
      'a coincidence with no theoretical basis',
      'a distinguishing characteristic that can be used to identify a reaction as first order',
      'true for all reaction orders, not just first order',
      'only true at very high temperatures'
    ],
    correctIndex: 1,
    explanation: 'Since t1/2 = 0.693/k for a first order reaction (with no dependence on [A]0), constancy of half-life across different starting concentrations serves as a diagnostic test for first order kinetics.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-28',
    type: 'mcq',
    question: 'A pseudo first order reaction is one that is',
    options: [
      'truly zero order but mistakenly labelled first order',
      'actually of higher order (such as second order) but experimentally behaves as first order because one reactant is present in large excess',
      'always exactly second order under all conditions',
      'a reaction with no measurable rate at all'
    ],
    correctIndex: 1,
    explanation: 'A pseudo first order reaction has a rate law that is genuinely higher order, but because one reactant (often water) is present in great excess and its concentration remains essentially constant, the reaction appears to follow first order kinetics with respect to the other reactant.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-29',
    type: 'mcq',
    question: 'The acid-catalysed hydrolysis of ethyl acetate (CH3COOC2H5 + H2O → CH3COOH + C2H5OH) is a classic example of a',
    options: [
      'zero order reaction',
      'pseudo first order reaction, since water is present in large excess',
      'third order reaction with respect to water',
      'reaction with no measurable order'
    ],
    correctIndex: 1,
    explanation: 'Although the true rate law is first order in both ester and water (making it second order overall), water is used in such large excess that its concentration remains essentially constant, making the reaction appear pseudo first order with respect to the ester.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-30',
    type: 'mcq',
    question: 'The inversion (acid-catalysed hydrolysis) of cane sugar, C12H22O11 + H2O → glucose + fructose, is another standard example of a',
    options: ['zero order reaction', 'pseudo first order reaction', 'third order reaction', 'reaction with negative order'],
    correctIndex: 1,
    explanation: 'Like ester hydrolysis, the inversion of cane sugar in dilute aqueous acid is treated as pseudo first order, since water is present in large excess and its concentration effectively remains constant throughout the reaction.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-31',
    type: 'mcq',
    question: 'As the temperature of a reaction system is increased, the rate constant of the reaction generally',
    options: ['decreases', 'increases', 'remains completely unchanged', 'becomes negative'],
    correctIndex: 1,
    explanation: 'Increasing temperature provides reactant molecules with greater kinetic energy, increasing the fraction of molecules with energy equal to or greater than the activation energy, thereby increasing the rate constant.',
    difficulty: 'easy'
  },
  {
    id: 'kinetics-32',
    type: 'mcq',
    question: 'As a rough rule of thumb discussed in NCERT, the rate of many reactions approximately doubles for every rise in temperature of about',
    options: ['1°C', '5°C', '10°C', '50°C'],
    correctIndex: 2,
    explanation: 'A commonly cited empirical rule states that the rate of a reaction roughly doubles (or becomes 2-3 times faster) for approximately every 10°C rise in temperature, for many reactions.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-33',
    type: 'mcq',
    question: 'The Arrhenius equation, which describes the temperature dependence of the rate constant, is written as',
    options: [
      'k = A × e^(+Ea/RT)',
      'k = A × e^(-Ea/RT)',
      'k = Ea × e^(-A/RT)',
      'k = A - Ea/RT'
    ],
    correctIndex: 1,
    explanation: 'The Arrhenius equation, k = A e^(-Ea/RT), describes how the rate constant k depends exponentially on the activation energy Ea and the absolute temperature T.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-34',
    type: 'mcq',
    question: 'In the Arrhenius equation, the term "A" is called the',
    options: [
      'activation energy',
      'pre-exponential (frequency) factor, related to the frequency of collisions',
      'gas constant',
      'rate of reaction'
    ],
    correctIndex: 1,
    explanation: 'The pre-exponential factor A (also called the frequency factor) in the Arrhenius equation is related to the frequency of collisions between reacting molecules and their orientation.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-35',
    type: 'mcq',
    question: 'Activation energy (Ea) of a reaction is best described as the',
    options: [
      'total energy released during the reaction',
      'minimum extra energy that reactant molecules must possess, over and above their average energy, to undergo an effective collision leading to product formation',
      'energy difference between reactants and products at equilibrium',
      'energy required to break all bonds in the reactant molecules completely'
    ],
    correctIndex: 1,
    explanation: 'Activation energy represents the energy barrier that reacting molecules must overcome, i.e. the minimum extra energy needed above their average energy for a collision to be effective in producing products.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-36',
    type: 'mcq',
    question: 'Taking the logarithm of the Arrhenius equation gives the linear form',
    options: [
      'log k = log A + Ea/(2.303RT)',
      'log k = log A - Ea/(2.303RT)',
      'log k = Ea/A - 2.303RT',
      'log k = A/Ea - RT'
    ],
    correctIndex: 1,
    explanation: 'Taking the natural log of k = A e^(-Ea/RT) and converting to base-10 logarithm gives log k = log A - Ea/(2.303RT), a linear relationship between log k and 1/T.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-37',
    type: 'mcq',
    question: 'A plot of log k versus 1/T, based on the logarithmic form of the Arrhenius equation, gives a straight line with',
    options: [
      'slope = -Ea/(2.303R) and intercept = log A',
      'slope = Ea/(2.303R) and intercept = -log A',
      'slope = log A and intercept = -Ea/(2.303R)',
      'a slope of zero regardless of activation energy'
    ],
    correctIndex: 0,
    explanation: 'The linear Arrhenius plot of log k against 1/T has a slope equal to -Ea/(2.303R) and a y-intercept equal to log A, allowing both Ea and A to be determined experimentally.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-38',
    type: 'mcq',
    question: 'A reaction with a higher activation energy, compared to one with a lower activation energy at the same temperature, will generally have a',
    options: [
      'faster rate, since more molecules can react',
      'slower rate, since fewer molecules possess sufficient energy to overcome the higher energy barrier',
      'rate completely unaffected by activation energy',
      'rate that depends only on the pre-exponential factor, not activation energy'
    ],
    correctIndex: 1,
    explanation: 'A higher activation energy means fewer molecules have enough energy to react at a given temperature (per the Boltzmann distribution), resulting in a smaller rate constant and slower reaction rate.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-39',
    type: 'mcq',
    question: 'A catalyst increases the rate of a reaction by',
    options: [
      'increasing the activation energy of the reaction',
      'providing an alternative reaction pathway with a lower activation energy',
      'permanently changing the products formed',
      'increasing the temperature of the reaction mixture'
    ],
    correctIndex: 1,
    explanation: 'A catalyst works by providing an alternative reaction pathway (mechanism) that has a lower activation energy, allowing a greater fraction of molecules to react successfully at a given temperature.',
    difficulty: 'easy'
  },
  {
    id: 'kinetics-40',
    type: 'mcq',
    question: 'A catalyst, by lowering the activation energy of both the forward and reverse reactions equally,',
    options: [
      'shifts the position of equilibrium towards products',
      'does not change the equilibrium constant of the reaction, but helps the system reach equilibrium faster',
      'shifts the position of equilibrium towards reactants',
      'is consumed completely during the reaction'
    ],
    correctIndex: 1,
    explanation: 'Since a catalyst lowers the activation energy for both forward and reverse reactions by the same amount, it does not alter the equilibrium constant or the equilibrium position, only the speed at which equilibrium is reached.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-41',
    type: 'mcq',
    question: 'A catalyst is chemically unchanged at the end of a reaction because it',
    options: [
      'reacts with the products to form new compounds',
      'is regenerated in the mechanism after participating in intermediate steps',
      'never actually participates in the reaction mechanism at all',
      'is only physically mixed with the reactants without any chemical involvement'
    ],
    correctIndex: 1,
    explanation: 'Although a catalyst does participate in the reaction mechanism (often forming an intermediate), it is regenerated by the end of the reaction sequence, leaving its own chemical identity and amount unchanged overall.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-42',
    type: 'mcq',
    question: 'According to the collision theory of reaction rates, for a reaction to occur, reacting molecules must',
    options: [
      'simply be present in the same container, regardless of any collision',
      'collide with each other with sufficient energy (equal to or greater than activation energy) and proper orientation',
      'collide with each other regardless of energy or orientation',
      'never actually come into contact with each other'
    ],
    correctIndex: 1,
    explanation: 'Collision theory states that a reaction occurs only when reacting molecules collide with both sufficient energy (at least the activation energy) and the correct relative orientation.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-43',
    type: 'mcq',
    question: 'In collision theory, not all collisions between reactant molecules lead to a reaction because',
    options: [
      'most collisions occur with insufficient energy or improper orientation, and are therefore ineffective',
      'molecules never actually collide in a gas or solution',
      'the pre-exponential factor is always zero',
      'reactant molecules repel each other and never collide at all'
    ],
    correctIndex: 0,
    explanation: 'Most molecular collisions do not lead to a reaction because they either lack sufficient energy to overcome the activation energy barrier or occur with improper orientation, making them ineffective.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-44',
    type: 'mcq',
    question: 'The steric (orientation) factor, denoted P, in the collision theory expression accounts for the fact that',
    options: [
      'only collisions with proper orientation of the reacting molecules can lead to product formation',
      'temperature has no effect on reaction rate',
      'all collisions automatically lead to a successful reaction',
      'activation energy is irrelevant to reaction rate'
    ],
    correctIndex: 0,
    explanation: 'The steric factor P is included in the collision theory rate expression to account for the fact that molecules must also be oriented correctly relative to each other during a collision for the reaction to occur.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-45',
    type: 'mcq',
    question: 'According to collision theory, the rate of a bimolecular reaction can be expressed approximately as',
    options: [
      'Rate = P × Z(AB) × e^(-Ea/RT), where Z(AB) is the collision frequency and P is the steric factor',
      'Rate = Z(AB) / P only',
      'Rate = Ea / (P × Z(AB))',
      'Rate is completely independent of collision frequency'
    ],
    correctIndex: 0,
    explanation: 'Collision theory expresses the rate as the product of the collision frequency Z(AB), the fraction of molecules with sufficient energy (via the exponential Boltzmann term), and the steric factor P accounting for correct orientation.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-46',
    type: 'mcq',
    question: 'Fraction of molecules possessing energy equal to or greater than the activation energy, as a function of temperature, follows a distribution described by',
    options: [
      'the Boltzmann distribution, which is central to explaining the temperature dependence of reaction rate',
      'a purely linear relationship with temperature',
      'an inverse relationship independent of exponential terms',
      'no known mathematical distribution'
    ],
    correctIndex: 0,
    explanation: 'The fraction of molecules with energy greater than or equal to activation energy follows the Boltzmann (Maxwell-Boltzmann) energy distribution, which increases with temperature, providing the theoretical basis for the exponential term in the Arrhenius equation.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-47',
    type: 'mcq',
    question: 'In a plot of the fraction of molecules (Maxwell-Boltzmann distribution) versus kinetic energy, increasing the temperature causes the peak of the curve to',
    options: [
      'shift towards lower energies and become sharper',
      'shift towards higher energies and the curve to broaden, increasing the fraction of molecules with energy above the activation energy',
      'remain exactly at the same position',
      'disappear entirely'
    ],
    correctIndex: 1,
    explanation: 'As temperature increases, the Maxwell-Boltzmann energy distribution shifts towards higher energies and broadens, increasing the proportion of molecules that possess energy equal to or greater than the activation energy.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-48',
    type: 'mcq',
    question: 'The decomposition of gaseous ammonia on a hot platinum surface at high pressure is often cited as an example of a',
    options: [
      'first order reaction',
      'zero order reaction, since the metal surface is saturated with gas molecules and further increase in gas concentration does not change the rate',
      'second order reaction',
      'reaction with fractional order 1.5'
    ],
    correctIndex: 1,
    explanation: 'Once the platinum surface is fully saturated with adsorbed ammonia molecules, the reaction rate becomes independent of the concentration (pressure) of ammonia gas, making it a classic example of a zero order (heterogeneous, surface-catalysed) reaction.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-49',
    type: 'mcq',
    question: 'Which of the following correctly relates concentration units to time for the units of a general nth order rate constant?',
    options: [
      'The units of k for order n are (concentration)^(1-n) × (time)^-1',
      'The units of k are always mol L-1 s-1, regardless of order',
      'The units of k are always dimensionless',
      'The units of k depend only on temperature, not order'
    ],
    correctIndex: 0,
    explanation: 'For an nth order reaction, the general form of the units of the rate constant is (concentration)^(1-n) × (time)^-1, consistent with the specific cases for zero, first, and second order reactions.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-50',
    type: 'mcq',
    question: 'The rate of a chemical reaction generally increases with increasing concentration of reactants because',
    options: [
      'higher concentration means fewer collisions occur between molecules',
      'higher concentration increases the number of reactant molecules per unit volume, increasing the frequency of collisions',
      'concentration has no effect on collision frequency',
      'higher concentration always decreases the activation energy'
    ],
    correctIndex: 1,
    explanation: 'A higher concentration means more reactant molecules are packed into the same volume, increasing the frequency of molecular collisions and hence generally increasing the reaction rate.',
    difficulty: 'easy'
  },
  {
    id: 'kinetics-51',
    type: 'mcq',
    question: 'For a first order reaction, the time required to complete 99.9% of the reaction, compared to the time required for 50% completion (t1/2), is',
    options: [
      'exactly the same as t1/2',
      'about 10 times t1/2 (since it takes roughly 10 half-lives to reach 99.9% completion)',
      'half of t1/2',
      'independent of the value of k'
    ],
    correctIndex: 1,
    explanation: 'Since a first order reaction reduces concentration by half with every half-life, roughly 10 half-lives are needed to reduce the concentration to about 0.1% of the original (99.9% completion), making the total time approximately 10 × t1/2.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-52',
    type: 'mcq',
    question: 'The decomposition of N2O5 in the gas phase is a well-known textbook example of a',
    options: ['zero order reaction', 'first order reaction', 'third order reaction', 'reaction with negative order'],
    correctIndex: 1,
    explanation: 'The thermal decomposition of dinitrogen pentoxide (N2O5) is a classic and frequently cited example of a first order gas-phase reaction.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-53',
    type: 'mcq',
    question: 'Radioactive decay processes are always treated kinetically as',
    options: ['zero order processes', 'first order processes', 'second order processes', 'processes with no defined order'],
    correctIndex: 1,
    explanation: 'Radioactive decay follows first order kinetics, with the rate of decay proportional to the amount of the radioactive substance present, characterised by a constant half-life.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-54',
    type: 'mcq',
    question: 'The method of initial rates is an experimental technique used to determine the',
    options: [
      'equilibrium constant of a reaction',
      'order of a reaction with respect to each reactant, by measuring the rate very early in the reaction before concentrations change significantly',
      'enthalpy of reaction',
      'molecularity of the overall reaction'
    ],
    correctIndex: 1,
    explanation: 'The method of initial rates measures the rate of reaction at the very start (before reactant concentrations change appreciably), allowing the order with respect to each reactant to be determined by systematically varying initial concentrations.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-55',
    type: 'mcq',
    question: 'For an elementary bimolecular reaction such as 2NO2 → 2NO + O2 (as a single-step elementary process), the molecularity of the reaction is',
    options: ['1', '2', '3', 'undefined'],
    correctIndex: 1,
    explanation: 'For an elementary reaction where two molecules of NO2 collide and react directly in a single step, the molecularity is 2 (bimolecular).',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-56',
    type: 'mcq',
    question: 'Trimolecular (termolecular) elementary reactions, involving the simultaneous collision of three reactant species, are',
    options: [
      'extremely common and occur more frequently than bimolecular reactions',
      'rare, since the simultaneous collision of three molecules with proper orientation and sufficient energy is statistically much less probable',
      'impossible under all circumstances',
      'always faster than bimolecular reactions'
    ],
    correctIndex: 1,
    explanation: 'Termolecular elementary reactions are rare because the probability of three molecules colliding simultaneously, with correct orientation and sufficient combined energy, is statistically much lower than for two molecules.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-57',
    type: 'mcq',
    question: 'For a complex (multistep) reaction with an overall balanced equation, the order of the reaction determined experimentally',
    options: [
      'must always match the sum of the stoichiometric coefficients in the balanced equation',
      'may or may not match the sum of stoichiometric coefficients, since it depends on the actual mechanism, particularly the rate-determining step',
      'is always equal to 1',
      'cannot be determined at all for multistep reactions'
    ],
    correctIndex: 1,
    explanation: 'Since the order of a reaction reflects the mechanism (especially the slow, rate-determining step), it does not necessarily equal the sum of stoichiometric coefficients of the overall balanced equation.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-58',
    type: 'mcq',
    question: 'A reaction is said to be of "fractional order" when',
    options: [
      'the reaction mechanism is not well understood',
      'the sum of the exponents in the experimentally determined rate law is not a whole number',
      'the reaction obeys the ideal gas law',
      'the reaction has zero activation energy'
    ],
    correctIndex: 1,
    explanation: 'Fractional order reactions have rate laws in which the sum of the concentration exponents is a non-integer value, typically arising from complex, multistep reaction mechanisms.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-59',
    type: 'mcq',
    question: 'The rate law for the reaction 2NO(g) + O2(g) → 2NO2(g) is experimentally found to be rate = k[NO]^2[O2]. The overall order of this reaction is',
    options: ['1', '2', '3', '4'],
    correctIndex: 2,
    explanation: 'Adding the exponents in the rate law, 2 (for NO) + 1 (for O2), gives an overall reaction order of 3.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-60',
    type: 'mcq',
    question: 'For the reaction described by rate = k[NO]^2[O2] (order 3 overall), the order with respect to O2 alone is',
    options: ['0', '1', '2', '3'],
    correctIndex: 1,
    explanation: 'The exponent of [O2] in the rate law is 1, so the reaction is first order with respect to O2.',
    difficulty: 'easy'
  },
  {
    id: 'kinetics-61',
    type: 'mcq',
    question: 'Which of the following statements about the Arrhenius pre-exponential factor A is correct?',
    options: [
      'A generally decreases with increasing temperature',
      'A is related to the frequency of collisions and their orientation, and is often treated as approximately constant over a limited temperature range',
      'A has no physical significance whatsoever',
      'A always equals the activation energy'
    ],
    correctIndex: 1,
    explanation: 'The pre-exponential factor A reflects the frequency of collisions and their orientation probability; while it can have a slight temperature dependence, it is often treated as approximately constant over the temperature ranges typically studied.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-62',
    type: 'mcq',
    question: 'If Ea (activation energy) for a reaction is very high, the reaction at ordinary temperatures will generally proceed',
    options: [
      'extremely fast',
      'very slowly, since few molecules have enough energy to cross a high activation energy barrier',
      'at a rate completely independent of Ea',
      'only in the reverse direction'
    ],
    correctIndex: 1,
    explanation: 'A very high activation energy means that only a very small fraction of molecules possess sufficient energy to react at ordinary temperatures, resulting in a slow reaction rate.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-63',
    type: 'mcq',
    question: 'The energy profile diagram of an exothermic reaction shows that the activation energy for the forward reaction is generally',
    options: [
      'always equal to the activation energy of the reverse reaction',
      'less than the activation energy of the reverse reaction, since the products are at a lower energy level than the reactants',
      'greater than the activation energy of the reverse reaction',
      'zero, regardless of the reaction type'
    ],
    correctIndex: 1,
    explanation: 'For an exothermic reaction, since the products have lower energy than the reactants, the activation energy for the forward reaction is smaller than that needed to go back from products to reactants (the reverse activation energy).',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-64',
    type: 'mcq',
    question: 'A reaction between ions in solution proceeds much faster than an equivalent reaction between neutral molecules of similar size, mainly because',
    options: [
      'ionic reactions never require any activation energy',
      'ionic reactions generally have very low activation energies compared to molecular reactions requiring bond breaking',
      'ions have no charge and therefore collide more frequently',
      'ions are always larger than neutral molecules'
    ],
    correctIndex: 1,
    explanation: 'Reactions between ions typically involve simple electrostatic attraction/repulsion rather than extensive covalent bond breaking, resulting in much lower activation energies and correspondingly faster rates compared to many molecular reactions.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-65',
    type: 'mcq',
    question: 'For a zero order reaction, plotting concentration [A] versus time gives a straight line whose slope is',
    options: ['positive and equal to k', 'negative and equal to -k', 'zero, regardless of k', 'undefined'],
    correctIndex: 1,
    explanation: 'Since [A] = [A]0 - kt for a zero order reaction, the plot of [A] versus t is linear with a negative slope of magnitude equal to the rate constant k.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-66',
    type: 'mcq',
    question: 'The photochemical reaction between hydrogen and chlorine gas, H2 + Cl2 → 2HCl (under constant illumination), is often cited as an example of a',
    options: ['first order reaction', 'zero order reaction, since the rate is largely determined by light intensity rather than reactant concentration', 'third order reaction', 'reaction with negative order'],
    correctIndex: 1,
    explanation: 'Under constant illumination, this photochemical reaction is a classic example of an apparent zero order reaction, since its rate depends primarily on the intensity of light absorbed rather than on the concentrations of H2 and Cl2.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-67',
    type: 'mcq',
    question: 'Which statement correctly compares order and molecularity of a reaction?',
    options: [
      'Order and molecularity are always exactly equal for any reaction',
      'For an elementary (single-step) reaction, order and molecularity are usually the same, but for a complex multistep reaction, the overall order need not equal the molecularity of any single step',
      'Molecularity can be fractional, but order cannot',
      'Order applies only to elementary reactions, while molecularity applies to all reactions'
    ],
    correctIndex: 1,
    explanation: 'For simple, elementary reactions, order and molecularity typically coincide, but for complex reactions occurring via multiple steps, the experimentally observed overall order reflects the mechanism and need not match the molecularity of any individual step.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-68',
    type: 'mcq',
    question: 'Increasing the temperature of a reaction increases the rate constant primarily by increasing the',
    options: [
      'concentration of the reactants',
      'fraction of molecules possessing energy equal to or greater than the activation energy',
      'volume of the reaction vessel',
      'molecular weight of the reactants'
    ],
    correctIndex: 1,
    explanation: 'Higher temperature shifts the Maxwell-Boltzmann energy distribution towards higher energies, increasing the fraction of molecules with sufficient energy to overcome the activation energy barrier, thus increasing k.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-69',
    type: 'mcq',
    question: 'For a reaction to be classified as first order overall, which of the following is a necessary experimental observation?',
    options: [
      'The rate is independent of the concentration of any reactant',
      'A plot of log(concentration) versus time is linear, and the half-life remains constant regardless of initial concentration',
      'The rate constant has units of mol L-1 s-1',
      'The reaction must involve exactly three reactant molecules colliding'
    ],
    correctIndex: 1,
    explanation: 'Linearity of the log[A] versus time plot, together with a half-life that remains constant irrespective of starting concentration, are the key experimental signatures confirming first order kinetics.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-70',
    type: 'mcq',
    question: 'Overall, the central goal of studying chemical kinetics, as emphasised throughout the NCERT chapter, is to understand',
    options: [
      'only whether a reaction is thermodynamically favourable',
      'how fast a reaction proceeds, what factors control this rate, and the mechanistic pathway by which reactants are converted to products',
      'only the final equilibrium composition of a reaction mixture',
      'only the enthalpy change accompanying a reaction'
    ],
    correctIndex: 1,
    explanation: 'Chemical kinetics focuses specifically on reaction rates, the factors influencing them (concentration, temperature, catalysts), and the underlying mechanistic steps by which a reaction proceeds — distinct from the purely thermodynamic question of whether a reaction is favourable.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'kinetics-71',
    type: 'assertion-reason',
    question: 'Assertion (A): The rate of a reaction is always expressed as a positive quantity.\nReason (R): A negative sign is included in the rate expression for a reactant, since its concentration decreases with time.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The inclusion of a negative sign for reactant disappearance is exactly what converts an inherently negative rate of change into a positive reported rate of reaction, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-72',
    type: 'assertion-reason',
    question: 'Assertion (A): The rate law of a reaction cannot always be predicted from its balanced chemical equation.\nReason (R): The rate law must be determined experimentally, since it depends on the actual reaction mechanism rather than simply the overall stoichiometry.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The dependence of the rate law on mechanism (which is not always evident from the overall balanced equation) is precisely why experimental determination is necessary, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-73',
    type: 'assertion-reason',
    question: 'Assertion (A): Molecularity of a reaction can never be zero or fractional.\nReason (R): Molecularity represents the number of reacting species that must simultaneously collide in an elementary step, and this must be a definite, positive whole number.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since molecularity counts actual colliding species, it must be a positive whole number, and this definitional requirement directly explains why it cannot be zero or fractional.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-74',
    type: 'assertion-reason',
    question: 'Assertion (A): The order of a reaction can be zero, a fraction, or a negative number.\nReason (R): Order is an experimentally determined quantity based on the rate law, and does not have the same physical restriction as molecularity.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since order comes purely from the empirical rate law rather than a fixed physical count of colliding molecules, it is free to take zero, fractional, or negative values, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-75',
    type: 'assertion-reason',
    question: 'Assertion (A): The overall rate of a multistep reaction is determined by the slowest step in the mechanism.\nReason (R): The slowest step acts as a bottleneck, limiting how quickly the overall sequence of steps can proceed to give products.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The bottleneck effect of the slowest step, as described in R, is exactly why it becomes rate-determining for the overall multistep reaction, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-76',
    type: 'assertion-reason',
    question: 'Assertion (A): The half-life of a first order reaction is independent of the initial concentration of the reactant.\nReason (R): For a first order reaction, t1/2 = 0.693/k, and this expression contains no term for initial concentration.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The absence of [A]0 in the expression t1/2 = 0.693/k directly explains why the half-life of a first order reaction does not depend on the starting concentration.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-77',
    type: 'assertion-reason',
    question: 'Assertion (A): The half-life of a zero order reaction depends on the initial concentration of the reactant.\nReason (R): For a zero order reaction, t1/2 = [A]0/(2k), which explicitly contains the initial concentration term.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since [A]0 appears explicitly in the zero order half-life expression, the half-life necessarily varies with the initial concentration, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-78',
    type: 'assertion-reason',
    question: 'Assertion (A): The hydrolysis of ethyl acetate in aqueous acid is treated as a pseudo first order reaction.\nReason (R): Water is present in such large excess that its concentration remains essentially constant, so the reaction appears first order with respect to ethyl acetate alone.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The near-constant water concentration due to large excess is exactly the mechanism by which the true higher-order reaction appears to follow first order kinetics, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-79',
    type: 'assertion-reason',
    question: 'Assertion (A): Increasing the temperature of a reaction increases its rate.\nReason (R): Higher temperature increases the fraction of molecules possessing energy equal to or greater than the activation energy, as described by the Boltzmann distribution.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This increase in the fraction of sufficiently energetic molecules is precisely the mechanism by which higher temperature raises the rate constant and reaction rate, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-80',
    type: 'assertion-reason',
    question: 'Assertion (A): A catalyst increases the rate of a reaction without being consumed in the overall process.\nReason (R): A catalyst provides an alternative pathway with lower activation energy and is regenerated after participating in the reaction mechanism.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The lower-activation-energy pathway combined with regeneration of the catalyst is exactly why it speeds up a reaction while remaining chemically unchanged overall, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-81',
    type: 'assertion-reason',
    question: 'Assertion (A): A catalyst does not change the equilibrium constant of a reversible reaction.\nReason (R): A catalyst lowers the activation energy of the forward and reverse reactions by the same amount.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since both forward and reverse activation energies are lowered equally, the relative rates of forward and reverse reactions (and hence the equilibrium constant) remain unaffected, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-82',
    type: 'assertion-reason',
    question: 'Assertion (A): Not every molecular collision between reactants leads to a chemical reaction.\nReason (R): Only collisions with sufficient energy and proper orientation are effective in producing a reaction, according to collision theory.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The dual requirement of sufficient energy and correct orientation, as stated by collision theory, is precisely why most ordinary collisions fail to result in reaction, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-83',
    type: 'assertion-reason',
    question: 'Assertion (A): The steric factor P is included in the collision theory rate expression.\nReason (R): P accounts for the fraction of collisions in which the reacting molecules are correctly oriented for the reaction to proceed.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The steric factor is specifically introduced to account for orientation requirements during collision, correctly explaining why it appears in the collision theory expression.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-84',
    type: 'assertion-reason',
    question: 'Assertion (A): Radioactive decay processes follow first order kinetics.\nReason (R): The rate of radioactive decay is proportional to the amount of the radioactive substance present, and the decay constant is analogous to the first order rate constant.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The proportionality between decay rate and remaining amount of the radioactive isotope, along with the constant decay constant, mirrors first order kinetics exactly, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-85',
    type: 'assertion-reason',
    question: 'Assertion (A): Molecularity has meaning only for elementary reactions, not for the overall complex reaction.\nReason (R): A complex reaction proceeds through multiple elementary steps, each of which has its own molecularity, so no single molecularity value can describe the overall process.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The multistep nature of complex reactions, with each step having its own distinct molecularity, is exactly why a single overall molecularity value cannot be assigned, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-86',
    type: 'assertion-reason',
    question: 'Assertion (A): The order of a reaction with respect to a reactant present in large excess is often experimentally observed to be zero, even if the true rate law includes that reactant.\nReason (R): When present in large excess, changes in the concentration of that reactant during the reaction are negligible, so it does not measurably affect the observed rate.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The near-constancy of a large-excess reactant\'s concentration, as described in R, is exactly why its contribution appears to vanish from the observed rate law, correctly explaining A (as seen in pseudo first order kinetics).',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-87',
    type: 'assertion-reason',
    question: 'Assertion (A): The Arrhenius plot of log k versus 1/T is a straight line.\nReason (R): The logarithmic form of the Arrhenius equation, log k = log A - Ea/(2.303RT), is linear in the variable 1/T.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since the equation is explicitly of the linear form y = mx + c with y = log k and x = 1/T, this mathematical structure directly explains why the Arrhenius plot is linear.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-88',
    type: 'assertion-reason',
    question: 'Assertion (A): A reaction with a very high activation energy proceeds extremely slowly at room temperature.\nReason (R): At a given temperature, only a small fraction of molecules possess energy equal to or greater than a very high activation energy.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The small fraction of sufficiently energetic molecules for a high activation energy barrier is directly responsible for the slow rate observed, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-89',
    type: 'assertion-reason',
    question: 'Assertion (A): For an exothermic reaction, the activation energy of the forward reaction is lower than that of the reverse reaction.\nReason (R): Since the products of an exothermic reaction are at a lower energy level than the reactants, less energy is needed to climb from reactants to the transition state than from products to the transition state.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The relative energy positions of reactants and products, as described in R, directly account for the asymmetry in forward and reverse activation energies for an exothermic reaction, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-90',
    type: 'assertion-reason',
    question: 'Assertion (A): The rate constant of a reaction is independent of the concentrations of the reactants.\nReason (R): The rate constant k depends primarily on temperature and the nature of the reactants, but not on their instantaneous concentrations.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The rate constant k is a proportionality constant fixed for given conditions (temperature, presence of catalyst), and this independence from concentration, as stated in R, correctly explains why k itself does not vary as the reaction proceeds.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-91',
    type: 'assertion-reason',
    question: 'Assertion (A): The decomposition of N2O5 is used as a textbook example of first order kinetics.\nReason (R): Experimental studies show that a plot of log[N2O5] versus time is linear, and the half-life is found to be independent of the initial concentration.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'These specific experimental observations (linear log-concentration plot, constant half-life) are exactly the diagnostic evidence confirming N2O5 decomposition as first order, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-92',
    type: 'assertion-reason',
    question: 'Assertion (A): The rate of many reactions roughly doubles for every 10°C rise in temperature.\nReason (R): This empirical observation is fully explained and quantitatively predicted with exact precision by the Arrhenius equation for all reactions without exception.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 2,
    explanation: 'A is a commonly cited rough empirical rule and is true as a general approximation. However, R overstates the case — this rule is only an approximation for many reactions and is not an exact, universal prediction for all reactions without exception, so R as stated is false.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-93',
    type: 'assertion-reason',
    question: 'Assertion (A): The order of a reaction can sometimes differ from what might be predicted based on the stoichiometric coefficients of the balanced equation.\nReason (R): A complex reaction proceeds through a mechanism involving one or more elementary steps, and the observed order reflects this mechanism rather than the overall stoichiometry.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since the rate law depends on mechanism (particularly the rate-determining step), it need not correspond to the overall stoichiometric coefficients, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-94',
    type: 'assertion-reason',
    question: 'Assertion (A): For a zero order reaction, a plot of concentration versus time is linear with a negative slope.\nReason (R): In a zero order reaction, the rate of reaction is constant and does not depend on the concentration of the reactant.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Because the rate (and hence the rate of decrease in concentration) is constant throughout a zero order reaction, the concentration decreases linearly with time, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-95',
    type: 'assertion-reason',
    question: 'Assertion (A): Increasing the surface area of a solid reactant increases the rate of a heterogeneous reaction.\nReason (R): A larger surface area provides more contact points between the solid reactant and the other reacting phase, increasing the frequency of effective collisions.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Greater surface area allows more reactant particles to be in contact simultaneously, directly increasing collision frequency and hence rate, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-96',
    type: 'assertion-reason',
    question: 'Assertion (A): A complex (multistep) reaction does not have a single, well-defined molecularity describing its overall transformation.\nReason (R): A complex reaction proceeds through several elementary steps, each of which has its own distinct molecularity.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since molecularity is only meaningful for a single elementary step, and a complex reaction consists of multiple such steps each with its own molecularity, no single overall molecularity value can be assigned — R correctly explains A.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-97',
    type: 'assertion-reason',
    question: 'Assertion (A): The inversion of cane sugar in dilute aqueous acid is treated as a pseudo first order reaction.\nReason (R): Although the true rate law is first order in both sucrose and water, the large excess of water keeps its concentration effectively constant, so the reaction appears first order in sucrose alone.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This mechanism of effectively constant water concentration due to large excess is exactly why cane sugar inversion is treated as pseudo first order, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-98',
    type: 'assertion-reason',
    question: 'Assertion (A): The rate constant of a reaction has different units depending on the overall order of the reaction.\nReason (R): The units of the rate constant must be chosen so that the calculated rate has the standard units of concentration per unit time, regardless of the order.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The requirement for dimensional consistency in the rate expression, as stated in R, is precisely why the units of k must change to compensate for different powers of concentration at different orders, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-99',
    type: 'assertion-reason',
    question: 'Assertion (A): Collision theory alone provides an entirely complete and fully accurate explanation of reaction rates for all types of chemical reactions.\nReason (R): Collision theory considers the frequency of collisions, the fraction of molecules with sufficient energy, and the requirement for proper orientation (steric factor).',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — while collision theory provides a useful qualitative and semi-quantitative framework, it does not offer a completely accurate account for all reactions, particularly complex ones. R is a true description of what collision theory does consider.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-100',
    type: 'assertion-reason',
    question: 'Assertion (A): The half-life of a reaction can be used to help identify its order.\nReason (R): The dependence (or independence) of half-life on initial concentration differs characteristically between zero order, first order, and other reaction orders.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since different reaction orders show distinctly different relationships between half-life and initial concentration, this distinguishing behaviour is exactly what allows half-life measurements to help determine reaction order, correctly explaining A.',
    difficulty: 'medium'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'kinetics-101',
    type: 'statement',
    question: 'Statement I: The average rate of a reaction is calculated over a finite time interval.\nStatement II: The instantaneous rate of a reaction is calculated at a single specific instant in time.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly distinguish between average rate (over a time interval) and instantaneous rate (at a specific moment).',
    difficulty: 'easy'
  },
  {
    id: 'kinetics-102',
    type: 'statement',
    question: 'Statement I: The rate law of a reaction can always be written directly from the stoichiometry of the balanced chemical equation.\nStatement II: The rate law must be determined experimentally in general.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — rate laws generally cannot be deduced from stoichiometry alone (except for elementary reactions). Statement II correctly reflects the need for experimental determination.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-103',
    type: 'statement',
    question: 'Statement I: Molecularity is always a whole number.\nStatement II: Order of a reaction is always a whole number.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct — molecularity must be a whole number. Statement II is incorrect — order can be zero, fractional, or negative, unlike molecularity.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-104',
    type: 'statement',
    question: 'Statement I: The rate-determining step in a mechanism is the fastest step.\nStatement II: The rate-determining step limits the overall rate of a multistep reaction.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the rate-determining step is the slowest step, not the fastest. Statement II correctly describes its role in limiting overall reaction rate.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-105',
    type: 'statement',
    question: 'Statement I: For a zero order reaction, the rate is independent of the concentration of the reactant.\nStatement II: For a zero order reaction, the unit of the rate constant is the same as the unit of rate itself.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — since rate = k for a zero order reaction, k must carry the same units as rate.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-106',
    type: 'statement',
    question: 'Statement I: The unit of the rate constant for a first order reaction is s-1.\nStatement II: The unit of the rate constant for a second order reaction is mol-1 L s-1.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly state the standard units of the rate constant for first and second order reactions.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-107',
    type: 'statement',
    question: 'Statement I: The half-life of a first order reaction depends on the initial concentration of the reactant.\nStatement II: The half-life of a zero order reaction is independent of the initial concentration of the reactant.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — it is actually the opposite: first order half-life is independent of initial concentration, while zero order half-life depends directly on it.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-108',
    type: 'statement',
    question: 'Statement I: A pseudo first order reaction is genuinely first order according to its true, complete rate law.\nStatement II: A pseudo first order reaction appears first order experimentally because one reactant is present in large excess.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the true rate law of a pseudo first order reaction is of higher order. Statement II correctly explains why it appears first order under the specific experimental conditions.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-109',
    type: 'statement',
    question: 'Statement I: The hydrolysis of ethyl acetate in aqueous acid is an example of a pseudo first order reaction.\nStatement II: The inversion of cane sugar in dilute aqueous acid is also an example of a pseudo first order reaction.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly identify these two classic NCERT examples of pseudo first order reactions, both involving water in large excess.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-110',
    type: 'statement',
    question: 'Statement I: The rate constant of a reaction generally increases with increasing temperature.\nStatement II: The Arrhenius equation quantitatively describes this temperature dependence of the rate constant.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the general temperature dependence of rate constants and the Arrhenius equation that models it.',
    difficulty: 'easy'
  },
  {
    id: 'kinetics-111',
    type: 'statement',
    question: 'Statement I: The pre-exponential factor A in the Arrhenius equation relates to the frequency and orientation of molecular collisions.\nStatement II: The activation energy Ea in the Arrhenius equation represents the total energy released during the reaction.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — activation energy is the energy barrier that must be overcome for reaction, not the total energy released, which relates to enthalpy of reaction instead.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-112',
    type: 'statement',
    question: 'Statement I: A plot of log k versus 1/T (Arrhenius plot) is a straight line.\nStatement II: The slope of this Arrhenius plot equals +Ea/(2.303R).',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the slope of the Arrhenius plot is -Ea/(2.303R) (negative), not positive.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-113',
    type: 'statement',
    question: 'Statement I: A catalyst provides an alternative reaction pathway with lower activation energy.\nStatement II: A catalyst is consumed completely during the course of the reaction it catalyses.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — a catalyst is regenerated and remains chemically unchanged overall, not consumed.',
    difficulty: 'easy'
  },
  {
    id: 'kinetics-114',
    type: 'statement',
    question: 'Statement I: A catalyst changes the equilibrium constant of a reversible reaction.\nStatement II: A catalyst helps a reversible reaction reach equilibrium faster, without shifting the equilibrium position.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — a catalyst does not alter the equilibrium constant. Statement II correctly describes its actual role in accelerating the approach to equilibrium.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-115',
    type: 'statement',
    question: 'Statement I: According to collision theory, all molecular collisions result in a chemical reaction.\nStatement II: According to collision theory, only collisions with sufficient energy and proper orientation are effective in producing a reaction.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — most collisions do not result in reaction. Statement II correctly describes the requirements for an effective, reaction-producing collision.',
    difficulty: 'easy'
  },
  {
    id: 'kinetics-116',
    type: 'statement',
    question: 'Statement I: The steric factor P in collision theory accounts for the effect of molecular orientation on reaction rate.\nStatement II: The steric factor is unrelated to whether a collision is effective or not.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect and directly contradicts the purpose of the steric factor, which is central to determining collision effectiveness.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-117',
    type: 'statement',
    question: 'Statement I: The decomposition of N2O5(g) is a well-known example of a first order reaction.\nStatement II: Radioactive decay processes also follow first order kinetics.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly identify well-known examples of first order kinetics in chemistry and nuclear physics.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-118',
    type: 'statement',
    question: 'Statement I: The decomposition of ammonia on a hot platinum surface at high pressure is treated as a zero order reaction.\nStatement II: This is because the metal surface becomes saturated with adsorbed gas, making the rate independent of gas pressure/concentration.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe this classic example of a heterogeneous zero order reaction and its explanation via surface saturation.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-119',
    type: 'statement',
    question: 'Statement I: For an elementary reaction, order and molecularity are usually equal.\nStatement II: For a complex, multistep reaction, the overall order must always equal the molecularity of the slowest step.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct for elementary reactions. Statement II is incorrect as an absolute rule — while order often reflects the rate-determining step, this correspondence is not guaranteed as a strict "must always" rule in every complex mechanism.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-120',
    type: 'statement',
    question: 'Statement I: Increasing the concentration of reactants generally increases the rate of a reaction.\nStatement II: This occurs because higher concentration increases the frequency of collisions between reactant molecules.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and causally connected — higher concentration increases collision frequency, which generally increases reaction rate.',
    difficulty: 'easy'
  },
  {
    id: 'kinetics-121',
    type: 'statement',
    question: 'Statement I: For a first order reaction, roughly 10 half-lives are needed to reach about 99.9% completion.\nStatement II: This is because each successive half-life reduces the remaining reactant concentration by half.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and logically connected — repeated halving over about 10 half-lives brings the remaining fraction down to roughly 0.1%.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-122',
    type: 'statement',
    question: 'Statement I: The units of the rate constant depend on the overall order of the reaction.\nStatement II: The units of the rate constant are always mol L-1 s-1, regardless of reaction order.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the units of k change with order (e.g., s-1 for first order, mol-1 L s-1 for second order), not always mol L-1 s-1.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-123',
    type: 'statement',
    question: 'Statement I: For an exothermic reaction, the activation energy of the reverse reaction is greater than that of the forward reaction.\nStatement II: This is because the products are at a lower energy level than the reactants in an exothermic reaction.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and logically connected — the lower product energy in an exothermic reaction means more energy is needed to reverse the reaction, explaining the higher reverse activation energy.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-124',
    type: 'statement',
    question: 'Statement I: The method of initial rates is used to determine the order of a reaction with respect to each reactant.\nStatement II: This method measures the rate at the very beginning of the reaction, before concentrations change significantly.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the purpose and technique of the method of initial rates.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-125',
    type: 'statement',
    question: 'Statement I: Termolecular (trimolecular) elementary reactions are very common and occur more frequently than bimolecular reactions.\nStatement II: The simultaneous, properly oriented collision of three molecules is statistically much less probable than a two-molecule collision.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — termolecular reactions are actually rare compared to bimolecular ones. Statement II correctly explains why they are uncommon.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-126',
    type: 'statement',
    question: 'Statement I: The Maxwell-Boltzmann energy distribution shifts towards higher energies as temperature increases.\nStatement II: This shift increases the fraction of molecules with energy equal to or greater than the activation energy.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the temperature-dependent behaviour of the Maxwell-Boltzmann distribution and its consequence for reaction rates.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-127',
    type: 'statement',
    question: 'Statement I: A reaction with a lower activation energy generally proceeds faster than one with a higher activation energy, at the same temperature.\nStatement II: A lower activation energy means a larger fraction of molecules possess sufficient energy to react.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the relationship between activation energy and reaction rate.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-128',
    type: 'statement',
    question: 'Statement I: Chemical kinetics deals only with whether a reaction is thermodynamically feasible.\nStatement II: Chemical kinetics deals with how fast a reaction proceeds and the mechanism by which it occurs.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — thermodynamic feasibility is a separate topic (thermodynamics), not the focus of kinetics. Statement II correctly identifies the actual subject matter of chemical kinetics.',
    difficulty: 'easy'
  },
  {
    id: 'kinetics-129',
    type: 'statement',
    question: 'Statement I: A plot of [A] versus time for a zero order reaction is a straight line.\nStatement II: A plot of log[A] versus time for a first order reaction is a straight line.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the characteristic linear plots used to identify zero order and first order reactions respectively.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-130',
    type: 'statement',
    question: 'Statement I: The rate law for a reaction, rate = k[A]^2[B], indicates the reaction is second order overall.\nStatement II: The rate law for a reaction, rate = k[A]^2[B], indicates the reaction is third order overall.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect. Statement II is correct — the overall order is the sum of the exponents, 2 + 1 = 3, making this a third order reaction overall.',
    difficulty: 'medium'
  },

  // ==================== HOW-MANY (20) ====================
  {
    id: 'kinetics-131',
    type: 'how-many',
    question: 'How many of the following statements about rate of reaction are correct?\n1. Average rate is calculated over a finite time interval.\n2. Instantaneous rate is the slope of the tangent to the concentration-time curve at a point.\n3. Rate is always reported as a negative quantity when reactants are involved.\n4. Rate can be expressed in terms of the increase in concentration of a product over time.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — a negative sign is used in the expression for a reactant precisely so that the reported rate is positive, not negative.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-132',
    type: 'how-many',
    question: 'How many of the following statements about order and molecularity are correct?\n1. Molecularity is always a whole number.\n2. Order can be zero, fractional, or negative.\n3. Molecularity applies to the overall complex reaction, not to individual elementary steps.\n4. Order is determined experimentally from the rate law.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — molecularity applies to elementary steps, not necessarily to the overall complex reaction.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-133',
    type: 'how-many',
    question: 'How many of the following statements about the units of the rate constant are correct?\n1. For a zero order reaction, the unit of k is mol L-1 s-1.\n2. For a first order reaction, the unit of k is s-1.\n3. For a second order reaction, the unit of k is mol-1 L s-1.\n4. The unit of k is always the same for every reaction, regardless of order.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the units of k depend on the overall order of the reaction and are not fixed.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-134',
    type: 'how-many',
    question: 'How many of the following statements about half-life are correct?\n1. Half-life is the time for concentration of reactant to reduce to half its initial value.\n2. For a first order reaction, t1/2 = 0.693/k.\n3. For a zero order reaction, t1/2 = [A]0/(2k).\n4. Half-life is completely independent of reaction order in all cases.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the relationship between half-life and initial concentration varies with reaction order (e.g., independent for first order, but proportional for zero order).',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-135',
    type: 'how-many',
    question: 'How many of the following are correctly cited as classic examples of pseudo first order reactions?\n1. Acid-catalysed hydrolysis of ethyl acetate\n2. Acid-catalysed inversion of cane sugar\n3. Thermal decomposition of N2O5\n4. Decomposition of ammonia on a hot platinum surface',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    explanation: 'Statements 1 and 2 are correctly cited as classic pseudo first order examples. N2O5 decomposition (statement 3) is a genuine first order reaction, not pseudo first order, and ammonia decomposition on platinum (statement 4) is a zero order example.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-136',
    type: 'how-many',
    question: 'How many of the following statements about the Arrhenius equation are correct?\n1. k = A e^(-Ea/RT)\n2. log k = log A - Ea/(2.303RT)\n3. A plot of log k versus 1/T has a slope of -Ea/(2.303R).\n4. The Arrhenius equation shows that k decreases as temperature increases.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 correctly represent the Arrhenius equation and its linear form. Statement 4 is false — k actually increases with increasing temperature, according to the Arrhenius equation.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-137',
    type: 'how-many',
    question: 'How many of the following statements about catalysts are correct?\n1. A catalyst lowers the activation energy of a reaction.\n2. A catalyst is chemically unchanged at the end of the reaction.\n3. A catalyst changes the equilibrium constant of a reversible reaction.\n4. A catalyst provides an alternative reaction pathway.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — a catalyst does not alter the equilibrium constant, only the rate at which equilibrium is reached.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-138',
    type: 'how-many',
    question: 'How many of the following statements about collision theory are correct?\n1. Only collisions with sufficient energy lead to a reaction.\n2. Only collisions with proper orientation lead to a reaction.\n3. All molecular collisions between reactants lead to a reaction.\n4. The steric factor accounts for the effect of molecular orientation.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — most collisions do not lead to a reaction, since both sufficient energy and proper orientation are required.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-139',
    type: 'how-many',
    question: 'How many of the following statements about factors affecting reaction rate are correct?\n1. Increasing concentration of reactants generally increases rate.\n2. Increasing temperature generally increases rate.\n3. Presence of a catalyst generally increases rate.\n4. Increasing surface area of a solid reactant in a heterogeneous reaction generally decreases rate.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — increasing surface area generally increases, not decreases, the rate of a heterogeneous reaction.',
    difficulty: 'easy'
  },
  {
    id: 'kinetics-140',
    type: 'how-many',
    question: 'How many of the following statements about the rate-determining step are correct?\n1. It is the slowest step in a multistep reaction mechanism.\n2. It determines the overall rate of the reaction.\n3. It is always the first step in any mechanism.\n4. Its molecularity often (though not always) corresponds to the observed order of the overall reaction.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — the rate-determining step can occur at any point in the mechanism, not necessarily the first step.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-141',
    type: 'how-many',
    question: 'How many of the following reactions are correctly classified by their typical/textbook order as stated?\n1. Decomposition of N2O5 — first order\n2. Radioactive decay — first order\n3. Decomposition of ammonia on a hot platinum surface (surface saturated) — zero order\n4. Inversion of cane sugar in dilute acid — third order',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correctly classified. Statement 4 is false — the inversion of cane sugar is treated as pseudo first order, not third order.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-142',
    type: 'how-many',
    question: 'How many of the following statements about activation energy are correct?\n1. It is the minimum extra energy needed for an effective collision.\n2. A higher activation energy generally corresponds to a slower reaction at a given temperature.\n3. Activation energy is unrelated to the fraction of molecules that can react at a given temperature.\n4. For an exothermic reaction, the forward activation energy is generally lower than the reverse activation energy.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — activation energy is directly related to the fraction of molecules with sufficient energy to react, via the Boltzmann distribution.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-143',
    type: 'how-many',
    question: 'How many of the following statements about the rate law rate = k[X]^3[Y]^0 are correct?\n1. The reaction is third order overall.\n2. The reaction is zero order with respect to Y.\n3. Doubling the concentration of Y (with X unchanged) would double the rate.\n4. The reaction is third order with respect to X.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — since the reaction is zero order in Y, changing [Y] has no effect on the rate.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-144',
    type: 'how-many',
    question: 'How many of the following statements about molecularity are correct?\n1. It refers only to elementary reactions.\n2. It can be zero for certain reactions.\n3. Termolecular elementary reactions are rare compared to bimolecular ones.\n4. It is a theoretical concept, while order is an experimentally determined quantity.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 3, and 4 are correct. Statement 2 is false — molecularity can never be zero, since it must represent an actual number of colliding species.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-145',
    type: 'how-many',
    question: 'How many of the following statements about the plot of log k versus 1/T are correct?\n1. It is a straight line according to the Arrhenius equation.\n2. Its slope is -Ea/(2.303R).\n3. Its intercept is log A.\n4. A steeper (more negative) slope indicates a lower activation energy.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a steeper (more negative) slope corresponds to a higher, not lower, activation energy, since the slope magnitude is directly proportional to Ea.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-146',
    type: 'how-many',
    question: 'How many of the following statements about zero order reactions are correct?\n1. Rate is independent of reactant concentration.\n2. A plot of [A] versus time is linear with a negative slope.\n3. The unit of the rate constant is mol L-1 s-1.\n4. Half-life is independent of the initial concentration.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — for a zero order reaction, half-life is directly proportional to (and therefore dependent on) the initial concentration.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-147',
    type: 'how-many',
    question: 'How many of the following statements about first order reactions are correct?\n1. A plot of log[A] versus time is linear.\n2. The rate constant has units of s-1.\n3. Half-life depends on the initial concentration.\n4. Radioactive decay is a well-known example of first order kinetics.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — a defining feature of first order kinetics is that half-life is independent of initial concentration.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-148',
    type: 'how-many',
    question: 'How many of the following statements about the effect of a catalyst on a reaction are correct?\n1. It lowers the activation energy of both forward and reverse reactions equally.\n2. It increases the rate of a reaction.\n3. It shifts the equilibrium position towards products.\n4. It is regenerated and remains chemically unchanged after the reaction.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — a catalyst does not shift the equilibrium position; it only speeds up how quickly equilibrium is reached.',
    difficulty: 'medium'
  },
  {
    id: 'kinetics-149',
    type: 'how-many',
    question: 'How many of the following statements about the collision theory expression, Rate = P × Z(AB) × e^(-Ea/RT), are correct?\n1. P is the steric factor accounting for molecular orientation.\n2. Z(AB) represents the collision frequency between reacting species.\n3. The exponential term represents the fraction of molecules with energy equal to or greater than Ea.\n4. This expression shows that rate is completely independent of temperature.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 correctly describe the components of the collision theory rate expression. Statement 4 is false — the exponential term makes the rate strongly dependent on temperature.',
    difficulty: 'hard'
  },
  {
    id: 'kinetics-150',
    type: 'how-many',
    question: 'How many of the following statements correctly summarise key ideas from the chemical kinetics chapter?\n1. Reaction rate depends on concentration, temperature, and the presence of a catalyst.\n2. Rate law and order must generally be determined by experiment, not predicted from stoichiometry alone.\n3. The Arrhenius equation connects rate constant, activation energy, and temperature.\n4. Molecularity, unlike order, must always be a positive whole number.\n5. All reactions, regardless of mechanism, have their overall order equal to the sum of stoichiometric coefficients in the balanced equation.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, 3, and 4 are correct. Statement 5 is false — reaction order reflects the mechanism and rate law, and does not necessarily equal the sum of stoichiometric coefficients of the overall balanced equation.',
    difficulty: 'medium'
  }
];