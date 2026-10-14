<<<<<<< HEAD
export const D_F_BLOCK_ELEMENTS = [
  // ==================== MCQ (70) ====================
  {
    id: 'dfblock-1',
    type: 'mcq',
    question: 'According to the IUPAC definition, a transition element is one whose atom, in the ground state or in any of its commonly occurring oxidation states, has',
    options: [
      'a completely filled f subshell',
      'a completely filled d subshell',
      'no d electrons at all',
      'an incompletely filled d subshell'
    ],
    correctIndex: 3,
    explanation: 'The IUPAC definition specifies a transition element as one with a partially (incompletely) filled d subshell, either in the ground state atom or in one of its commonly encountered oxidation states.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-2',
    type: 'mcq',
    question: 'The general electronic configuration of d-block elements is best represented as',
    options: ['ns2 np1-6', 'ns1-2', '(n-2)f1-14 (n-1)d0-1 ns2', '(n-1)d1-10 ns0-2'],
    correctIndex: 3,
    explanation: 'd-block elements have the general electronic configuration (n-1)d1-10 ns0-2, reflecting the filling of the penultimate d subshell.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-3',
    type: 'mcq',
    question: 'Zinc, cadmium, and mercury are placed in the d-block of the periodic table but are NOT considered typical transition elements because',
    options: [
      'they do not have any d electrons at all',
      'they have a completely filled d10 configuration both in the elemental (ground) state and in their common oxidation states',
      'they are radioactive elements',
      'they belong to the f-block instead'
    ],
    correctIndex: 1,
    explanation: 'Since Zn, Cd, and Hg have a fully filled d10 configuration in both the ground state and their common +2 oxidation state, they do not meet the IUPAC criterion of an incompletely filled d subshell, and hence are excluded from the transition elements despite being in the d-block.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-4',
    type: 'mcq',
    question: 'The d-block of the periodic table consists of how many complete transition series arranged across periods 4, 5, and 6?',
    options: ['One', 'Two', 'Four', 'Three'],
    correctIndex: 3,
    explanation: 'The d-block contains three complete transition series: the 3d series (Sc to Zn), the 4d series (Y to Cd), and the 5d series (La/Hf to Hg), with a partial fourth (6d) series also recognised.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-5',
    type: 'mcq',
    question: 'All transition elements are',
    options: [
      'gases at room temperature',
      'metals, generally characterised by hardness, high melting and boiling points, and good electrical and thermal conductivity',
      'metalloids',
      'non-metals'
    ],
    correctIndex: 1,
    explanation: 'Transition elements are all metals, typically hard with high melting and boiling points, and are good conductors of heat and electricity.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-6',
    type: 'mcq',
    question: 'Transition metals generally have high melting and boiling points primarily because of',
    options: [
      'their low nuclear charge',
      'the involvement of both ns and (n-1)d electrons in strong metallic bonding',
      'their complete absence of unpaired electrons',
      'their large atomic size'
    ],
    correctIndex: 1,
    explanation: 'Since both the ns and (n-1)d electrons contribute to interatomic metallic bonding in transition metals, this results in stronger metallic bonds and correspondingly high melting and boiling points.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-7',
    type: 'mcq',
    question: 'Across the 3d transition series, melting points generally rise to a maximum somewhere in the middle of the series (around group 6) and then decrease towards the end, mainly because',
    options: [
      'melting point is completely unrelated to the number of unpaired electrons',
      'atomic size increases sharply towards the end of the series',
      'nuclear charge decreases towards the end of the series',
      'the number of unpaired d electrons available for metallic bonding decreases as pairing of electrons increases towards the end of the series'
    ],
    correctIndex: 3,
    explanation: 'As the d subshell fills, increasing electron pairing reduces the number of unpaired electrons available for strong metallic bonding, causing melting points to decrease again after reaching a maximum around the middle of the series.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-8',
    type: 'mcq',
    question: 'Transition metals generally exhibit high enthalpies of atomisation, which is best explained by',
    options: [
      'their low densities',
      'strong interatomic metallic bonding arising from the involvement of a large number of unpaired d electrons',
      'the weak interatomic bonding resulting from a large atomic size',
      'the complete absence of d electrons'
    ],
    correctIndex: 1,
    explanation: 'The greater number of unpaired electrons in many transition metals allows for stronger metallic bonding, which requires a correspondingly higher enthalpy to vaporise/atomise the metal.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-9',
    type: 'mcq',
    question: 'The atomic and ionic radii of transition elements generally decrease across a period, but this decrease',
    options: [
      'does not occur at all; radii remain exactly constant throughout',
      'increases continuously and steadily across the entire series',
      'is much steeper than the decrease observed across a typical p-block period',
      'levels off (becomes much smaller) towards the end of the series, due to a balance between increasing nuclear charge and increasing electron-electron repulsion/shielding from d electrons'
    ],
    correctIndex: 3,
    explanation: 'Although atomic radii generally decrease across a transition series due to increasing nuclear charge, this decrease becomes much less pronounced (levels off) towards the end, as increased shielding by d electrons offsets the growing nuclear charge.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-10',
    type: 'mcq',
    question: 'The phenomenon in which there is a steady decrease in the atomic and ionic radii of lanthanide elements with increasing atomic number is called',
    options: ['actinide contraction', 'lanthanide contraction', 'nuclear contraction', 'periodic contraction'],
    correctIndex: 1,
    explanation: 'The lanthanide contraction refers to the steady decrease in atomic and ionic radii observed across the lanthanide series as atomic number increases.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-11',
    type: 'mcq',
    question: 'The lanthanide contraction is primarily caused by the',
    options: [
      'increasing atomic mass across the series',
      'complete absence of shielding effect from any electrons in the lanthanide atoms',
      'high electronegativity of the lanthanide elements',
      'poor shielding effect of the 4f electrons, which allows the effective nuclear charge felt by outer electrons to increase steadily'
    ],
    correctIndex: 3,
    explanation: 'The diffuse shape of 4f orbitals provides poor shielding of the nuclear charge, so as electrons are added to the 4f subshell and protons to the nucleus, the effective nuclear charge experienced by outer electrons increases steadily, contracting the atomic/ionic radii.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-12',
    type: 'mcq',
    question: 'A major consequence of the lanthanide contraction is that',
    options: [
      'lanthanides become non-metallic',
      'the atomic and ionic radii of the 4d and 5d transition series elements in the same group become remarkably similar, making their chemical separation difficult',
      'transition elements lose all their d electrons',
      'lanthanides become larger than actinides'
    ],
    correctIndex: 1,
    explanation: 'Because the lanthanide contraction compensates for the expected size increase on descending from the 4d to the 5d series, elements of the same group in these two series (e.g., Zr and Hf, Nb and Ta) have very similar radii and, consequently, very similar chemical properties, making them difficult to separate.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-13',
    type: 'mcq',
    question: 'Zirconium (Zr, 4d series) and hafnium (Hf, 5d series) show almost identical atomic radii and chemical properties mainly due to',
    options: [
      'their difference in electronic configuration',
      'the effect of lanthanide contraction, which compensates for the expected size increase from the 4d to the 5d series',
      'both belonging to the same period',
      'both being non-metals'
    ],
    correctIndex: 1,
    explanation: 'The lanthanide contraction that occurs between the 4d and 5d series causes Zr and Hf (same group, different periods) to have nearly identical atomic sizes and properties, a classic textbook example of this effect.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-14',
    type: 'mcq',
    question: 'Across the first (3d) transition series, the general trend in first ionisation enthalpy is',
    options: [
      'a steep, uninterrupted decrease from Sc to Zn',
      'no change at all across the series',
      'a steep, uninterrupted increase identical in magnitude to that seen across a p-block period',
      'a general increase from Sc to Zn, though with certain irregularities'
    ],
    correctIndex: 3,
    explanation: 'First ionisation enthalpy generally increases across the 3d transition series due to increasing nuclear charge, although the increase is less steep than across a p-block period and shows certain irregularities.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-15',
    type: 'mcq',
    question: 'Chromium has the electronic configuration [Ar]3d5 4s1 rather than the expected [Ar]3d4 4s2, mainly due to',
    options: [
      'a random anomaly with no theoretical basis',
      'the low nuclear charge of chromium',
      'the extra stability associated with a fully-filled d subshell',
      'the extra stability associated with a half-filled d subshell'
    ],
    correctIndex: 3,
    explanation: 'A half-filled d subshell (d5) has extra stability due to symmetric distribution and exchange energy, so chromium adopts the [Ar]3d5 4s1 configuration rather than [Ar]3d4 4s2.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-16',
    type: 'mcq',
    question: 'Copper has the electronic configuration [Ar]3d10 4s1 rather than the expected [Ar]3d9 4s2, mainly due to',
    options: [
      'the extra stability associated with a half-filled d subshell',
      'the extra stability associated with a fully-filled d subshell',
      'copper being a non-metal',
      'copper having no d electrons at all'
    ],
    correctIndex: 1,
    explanation: 'A fully-filled d subshell (d10) is exceptionally stable, so copper adopts the configuration [Ar]3d10 4s1 instead of the otherwise expected [Ar]3d9 4s2.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-17',
    type: 'mcq',
    question: 'Transition metals show variable oxidation states, typically differing from each other by units of one, because',
    options: [
      'the (n-1)d and ns orbitals have very different, widely separated energies',
      'the (n-1)d and ns orbitals have comparable energies, so electrons from both can be involved in bond formation',
      'transition metals have no valence electrons at all',
      'transition metal ions are always monoatomic'
    ],
    correctIndex: 1,
    explanation: 'Because the energies of the (n-1)d and ns orbitals are quite close, electrons from both can participate in bonding, allowing transition metals to show several different oxidation states, often differing by one.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-18',
    type: 'mcq',
    question: 'Among the 3d transition metals, the element that shows the greatest number of different oxidation states is generally considered to be',
    options: ['scandium', 'manganese', 'zinc', 'copper'],
    correctIndex: 1,
    explanation: 'Manganese exhibits an unusually wide range of oxidation states, from +2 up to +7 (as in KMnO4), attributed to its central position in the series and the availability of both 3d and 4s electrons for bonding.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-19',
    type: 'mcq',
    question: 'The highest oxidation state shown by manganese, +7, is exhibited in the compound',
    options: ['MnO2', 'MnSO4', 'MnCl2', 'KMnO4'],
    correctIndex: 3,
    explanation: 'In potassium permanganate (KMnO4), manganese is in its highest common oxidation state of +7.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-20',
    type: 'mcq',
    question: 'The most stable and characteristic oxidation state of scandium in its compounds is',
    options: ['+1', '+4', '+2', '+3'],
    correctIndex: 3,
    explanation: 'Scandium almost exclusively shows the +3 oxidation state in its compounds, corresponding to loss of its two 4s and one 3d electron.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-21',
    type: 'mcq',
    question: 'Among the common oxidation states of iron, the +3 state (ferric) is often more stable than the +2 state (ferrous) in many circumstances, partly because Fe3+ has the electronic configuration',
    options: [
      '3d0, a fully empty configuration',
      '3d5, a half-filled and therefore relatively stable configuration',
      '3d4, an unstable configuration',
      '3d6, a randomly stable configuration'
    ],
    correctIndex: 1,
    explanation: 'Fe3+ has a 3d5 configuration, which benefits from the extra stability associated with a half-filled d subshell, contributing to the relative stability of the +3 oxidation state of iron.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-22',
    type: 'mcq',
    question: 'The general trend that the highest oxidation state of a transition metal often corresponds to its group number holds reasonably well up to which element in the 3d series?',
    options: ['Chromium (group 6)', 'Manganese (group 7)', 'Iron (group 8)', 'Copper (group 11)'],
    correctIndex: 1,
    explanation: 'The correspondence between highest oxidation state and group number holds well for elements up to manganese (group 7, showing +7); beyond manganese, this simple relationship no longer strictly applies.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-23',
    type: 'mcq',
    question: 'Transition metals in their highest oxidation states are most commonly and stably found combined with',
    options: [
      'carbon and nitrogen only',
      'hydrogen and sulphur',
      'noble gases',
      'oxygen and fluorine, due to their high electronegativity and small size'
    ],
    correctIndex: 3,
    explanation: 'Because oxygen and fluorine are highly electronegative and small in size, they are particularly effective at stabilising transition metals in their highest oxidation states, as seen in compounds like MnO4- and OsO4.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-24',
    type: 'mcq',
    question: 'Among the following, which transition metal ion has an unusually positive standard reduction potential (E°, M2+/M), making the metal resistant to oxidation by dilute non-oxidising acids?',
    options: ['Fe2+/Fe', 'Zn2+/Zn', 'Mn2+/Mn', 'Cu2+/Cu'],
    correctIndex: 3,
    explanation: 'Copper has an unusually positive E°(Cu2+/Cu) value, which explains why copper does not liberate hydrogen gas from dilute non-oxidising acids like HCl, unlike most other 3d transition metals.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-25',
    type: 'mcq',
    question: 'The unusually positive standard reduction potential of copper (Cu2+/Cu) compared to other 3d transition metals is largely attributed to',
    options: [
      'copper having zero d electrons',
      'the high total (sublimation + ionisation) energy required to convert Cu(s) into Cu2+(aq), which is not fully compensated by its relatively lower hydration enthalpy',
      'copper being a non-metal',
      'its exceptionally high hydration enthalpy compared to its ionisation enthalpy'
    ],
    correctIndex: 1,
    explanation: 'For copper, the combined enthalpy of sublimation and ionisation is high, and this is not adequately offset by its hydration enthalpy, resulting in a positive (unfavourable for oxidation) standard reduction potential.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-26',
    type: 'mcq',
    question: 'Most transition metal ions are coloured in aqueous solution primarily because of',
    options: [
      'the absence of any electrons at all',
      'the presence of a fully filled d subshell only',
      'their large ionic radii',
      'the presence of an incompletely filled d subshell, allowing d-d electronic transitions upon absorption of visible light'
    ],
    correctIndex: 3,
    explanation: 'Colour in transition metal ions typically arises from d-d transitions, in which an electron is promoted from a lower-energy d orbital to a higher-energy d orbital by absorbing a specific wavelength of visible light; this requires an incompletely filled d subshell.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-27',
    type: 'mcq',
    question: 'Which of the following ions is expected to be colourless, since it has either a d0 or d10 configuration?',
    options: ['Ti3+ (d1)', 'Sc3+ (d0)', 'Cr3+ (d3)', 'V3+ (d2)'],
    correctIndex: 1,
    explanation: 'Sc3+ has a d0 configuration, meaning there are no d electrons available to undergo a d-d transition, so it is colourless, unlike ions with partially filled d subshells.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-28',
    type: 'mcq',
    question: 'Zn2+ and Cu+ ions are typically colourless in solution because they both have',
    options: ['no electrons in the d subshell at all', 'a completely filled d10 configuration, so no d-d transition is possible', 'a d5 configuration', 'a d1 configuration'],
    correctIndex: 1,
    explanation: 'Both Zn2+ and Cu+ have a fully filled d10 configuration, which means there is no vacant d orbital for an electron to transition into, so these ions are colourless.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-29',
    type: 'mcq',
    question: 'The paramagnetic behaviour of many transition metal ions is caused by the presence of',
    options: [
      'fully paired electrons in the d orbitals',
      'no electrons at all in the outer shell',
      'a fully filled s orbital only',
      'unpaired electrons in the d orbitals'
    ],
    correctIndex: 3,
    explanation: 'Paramagnetism arises from the presence of unpaired electrons, and many transition metal ions have unpaired d electrons, making them paramagnetic.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-30',
    type: 'mcq',
    question: 'The spin-only formula used to calculate the magnetic moment of a transition metal ion is',
    options: [
      'μ = n(n+2) BM',
      'μ = √(n(n+2)) BM, where n is the number of unpaired electrons',
      'μ = n/2 BM',
      'μ = 2n BM'
    ],
    correctIndex: 1,
    explanation: 'The spin-only magnetic moment is calculated using μ = √(n(n+2)) Bohr Magnetons (BM), where n represents the number of unpaired electrons present.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-31',
    type: 'mcq',
    question: 'According to the spin-only formula, an ion with a greater number of unpaired electrons will generally have a',
    options: [
      'smaller magnetic moment',
      'magnetic moment of exactly zero',
      'magnetic moment unrelated to the number of unpaired electrons',
      'larger magnetic moment'
    ],
    correctIndex: 3,
    explanation: 'Since the spin-only magnetic moment formula, μ = √(n(n+2)), increases with n, a greater number of unpaired electrons corresponds to a larger calculated magnetic moment.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-32',
    type: 'mcq',
    question: 'Transition metals and their compounds are widely used as catalysts mainly because of their',
    options: [
      'inability to form intermediate compounds',
      'complete absence of d orbitals',
      'very low melting points',
      'variable oxidation states, which allow them to form intermediate species and provide alternative reaction pathways with lower activation energy'
    ],
    correctIndex: 3,
    explanation: 'The ability of transition metals to adopt multiple oxidation states allows them to form unstable intermediates during a reaction, providing an alternative pathway of lower activation energy, which is central to their catalytic activity.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-33',
    type: 'mcq',
    question: 'In the contact process for the manufacture of sulphuric acid, the catalyst commonly used is',
    options: ['finely divided iron', 'vanadium(V) oxide (V2O5)', 'nickel', 'platinum only'],
    correctIndex: 1,
    explanation: 'Vanadium(V) oxide (V2O5) is the standard catalyst used in the contact process to catalyse the oxidation of SO2 to SO3, a key step in sulphuric acid manufacture.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-34',
    type: 'mcq',
    question: 'In the Haber process for the industrial synthesis of ammonia, the catalyst commonly used is',
    options: ['vanadium(V) oxide', 'finely divided iron', 'manganese dioxide', 'copper'],
    correctIndex: 1,
    explanation: 'Finely divided iron is used as the catalyst in the Haber process, which combines nitrogen and hydrogen gases to produce ammonia.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-35',
    type: 'mcq',
    question: 'Nickel is commonly used as a catalyst in the industrial process of',
    options: ['manufacture of sulphuric acid', 'decomposition of potassium chlorate', 'manufacture of nitric acid', 'hydrogenation of vegetable oils'],
    correctIndex: 3,
    explanation: 'Nickel is widely used as a catalyst for the hydrogenation of unsaturated vegetable oils, converting them into saturated fats.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-36',
    type: 'mcq',
    question: 'A mixture of titanium tetrachloride (TiCl4) and triethylaluminium, known as the Ziegler-Natta catalyst, is widely used in industry for',
    options: [
      'the manufacture of sulphuric acid',
      'the polymerisation of alkenes such as ethylene',
      'the decomposition of hydrogen peroxide',
      'the hydrolysis of esters'
    ],
    correctIndex: 1,
    explanation: 'The Ziegler-Natta catalyst system (TiCl4 with an aluminium alkyl compound) is extensively used to catalyse the polymerisation of alkenes, such as in the industrial production of polyethylene.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-37',
    type: 'mcq',
    question: 'Manganese dioxide (MnO2) is commonly used as a catalyst in the laboratory decomposition of',
    options: ['sulphuric acid', 'water into hydrogen and oxygen', 'sodium chloride', 'potassium chlorate (KClO3), to liberate oxygen gas'],
    correctIndex: 3,
    explanation: 'MnO2 acts as a catalyst in the thermal decomposition of potassium chlorate, speeding up the release of oxygen gas.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-38',
    type: 'mcq',
    question: 'Transition metals readily form alloys with one another mainly because',
    options: [
      'they never form solid solutions',
      'they have similar atomic sizes, allowing one metal atom to readily substitute for another in the crystal lattice',
      'they are all radioactive',
      'they have very different atomic sizes, preventing substitution in the crystal lattice'
    ],
    correctIndex: 1,
    explanation: 'Because transition metals generally have comparable atomic radii, atoms of one transition metal can readily substitute for those of another in a metallic crystal lattice, favouring the formation of alloys.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-39',
    type: 'mcq',
    question: 'Interstitial compounds formed by transition metals with small atoms such as hydrogen, carbon, or nitrogen are typically characterised by',
    options: [
      'complete loss of metallic character',
      'lower melting points and reduced hardness compared to the pure metal',
      'no change in any physical property compared to the pure metal',
      'increased hardness, higher melting points than the pure metal, and retention of metallic electrical conductivity'
    ],
    correctIndex: 3,
    explanation: 'Interstitial compounds, where small atoms occupy the empty spaces (interstitial sites) in a metal lattice, are typically harder and have higher melting points than the pure metal, while still retaining metallic conductivity.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-40',
    type: 'mcq',
    question: 'Interstitial compounds formed by transition metals are generally',
    options: [
      'always ionic compounds',
      'stoichiometric compounds with fixed, definite composition',
      'always gases at room temperature',
      'non-stoichiometric, without a strict fixed ratio of constituent atoms'
    ],
    correctIndex: 3,
    explanation: 'Interstitial compounds are typically non-stoichiometric, meaning the ratio of the small atoms to metal atoms is not fixed and can vary within a range.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-41',
    type: 'mcq',
    question: 'Transition metals show a strong tendency to form complex compounds mainly because of their',
    options: [
      'large atomic and ionic size, low ionic charge, and unavailability of d orbitals',
      'comparatively small atomic/ionic size, relatively high ionic charge, and the availability of vacant d orbitals to accept electron pairs from ligands',
      'complete inability to accept electron pairs',
      'total absence of vacant orbitals'
    ],
    correctIndex: 1,
    explanation: 'Transition metal ions favour complex formation due to their relatively small size, high charge density, and the presence of energetically accessible vacant d orbitals that can accept lone pairs donated by ligands.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-42',
    type: 'mcq',
    question: 'Potassium permanganate (KMnO4) is industrially prepared by fusion of manganese dioxide with potassium hydroxide and an oxidising agent to first give',
    options: [
      'manganese sulphate (MnSO4)',
      'potassium manganate (K2MnO4), a green compound',
      'potassium chromate (K2CrO4)',
      'potassium dichromate (K2Cr2O7)'
    ],
    correctIndex: 1,
    explanation: 'MnO2 is fused with KOH in the presence of an oxidant (such as air or KNO3) to give green potassium manganate (K2MnO4), which is then converted to purple potassium permanganate.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-43',
    type: 'mcq',
    question: 'The green potassium manganate (K2MnO4) formed during the preparation of KMnO4 is converted to permanganate (MnO4-) by',
    options: [
      'reduction with hydrogen gas',
      'simple heating in an inert atmosphere',
      'reaction with sodium chloride',
      'disproportionation in neutral or acidic medium, or by electrolytic oxidation'
    ],
    correctIndex: 3,
    explanation: 'Green manganate (MnO4^2-) disproportionates in neutral or acidic medium to give purple permanganate (MnO4-) and MnO2, or can alternatively be oxidised electrolytically to permanganate.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-44',
    type: 'mcq',
    question: 'Potassium dichromate (K2Cr2O7) is manufactured starting from which naturally occurring ore?',
    options: ['bauxite (Al2O3.xH2O)', 'chromite ore (FeCr2O4)', 'haematite (Fe2O3)', 'pyrolusite (MnO2)'],
    correctIndex: 1,
    explanation: 'K2Cr2O7 is industrially prepared starting from chromite ore (FeCr2O4), which is fused with sodium/potassium carbonate in the presence of air.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-45',
    type: 'mcq',
    question: 'In aqueous solution, the chromate ion (CrO4^2-, yellow) and dichromate ion (Cr2O7^2-, orange) exist in a pH-dependent equilibrium, in which',
    options: [
      'chromate is favoured in acidic medium and dichromate in alkaline medium',
      'chromate is favoured in alkaline medium and dichromate in acidic medium',
      'only chromate exists in solution, regardless of pH',
      'only dichromate exists in solution, regardless of pH'
    ],
    correctIndex: 1,
    explanation: 'The chromate-dichromate equilibrium is pH dependent, with the chromate ion (yellow) predominating in alkaline medium and the dichromate ion (orange) predominating in acidic medium.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-46',
    type: 'mcq',
    question: 'The structure of the dichromate ion, Cr2O7^2-, consists of',
    options: [
      'a single octahedral CrO6 unit',
      'two isolated, unconnected CrO4 tetrahedra',
      'two CrO4 tetrahedra sharing an edge',
      'two CrO4 tetrahedra sharing one corner (oxygen atom), forming a Cr-O-Cr bridge'
    ],
    correctIndex: 3,
    explanation: 'The dichromate ion is composed of two tetrahedral CrO4 units linked together by sharing one oxygen atom at a corner, forming a Cr-O-Cr bridging linkage.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-47',
    type: 'mcq',
    question: 'Both potassium permanganate and potassium dichromate are widely used in analytical and preparative chemistry primarily as',
    options: [
      'inert diluents',
      'reducing agents',
      'chelating ligands',
      'strong oxidising agents'
    ],
    correctIndex: 3,
    explanation: 'Both KMnO4 and K2Cr2O7 are well known and extensively used as strong oxidising agents in a variety of chemical reactions and titrations.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-48',
    type: 'mcq',
    question: 'The lanthanide series consists of elements with atomic numbers ranging approximately from',
    options: ['39 to 48', '58 to 71 (cerium to lutetium)', '90 to 103', '21 to 30'],
    correctIndex: 1,
    explanation: 'The lanthanide series comprises the 14 elements from cerium (atomic number 58) to lutetium (atomic number 71), corresponding to the filling of the 4f subshell.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-49',
    type: 'mcq',
    question: 'The general electronic configuration of lanthanide elements is best represented as',
    options: [
      '[Ar] 3d1-10 4s2',
      '[Xe] 4f1-14 5d0-1 6s2',
      '[Rn] 5f1-14 6d0-2 7s2',
      '[Kr] 4d1-10 5s2'
    ],
    correctIndex: 1,
    explanation: 'Lanthanides have the general electronic configuration [Xe] 4f1-14 5d0-1 6s2, reflecting the progressive filling of the 4f subshell.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-50',
    type: 'mcq',
    question: 'The most common and characteristic oxidation state shown by nearly all lanthanide elements in their compounds is',
    options: ['+2', '+1', '+4', '+3'],
    correctIndex: 3,
    explanation: 'The +3 oxidation state is by far the most common and stable oxidation state exhibited by lanthanide elements in their compounds.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-51',
    type: 'mcq',
    question: 'Cerium (Ce), among the lanthanides, is notable for also showing a stable +4 oxidation state, in which it acts as',
    options: [
      'a reducing agent, since Ce4+ is more stable than Ce3+',
      'an oxidising agent, since Ce4+ readily reverts to the more stable Ce3+ state',
      'a completely inert species with no redox activity',
      'a strong base'
    ],
    correctIndex: 1,
    explanation: 'Ce4+ acts as a useful oxidising agent in solution because it readily gets reduced to the more stable Ce3+ state, accepting an electron in the process.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-52',
    type: 'mcq',
    question: 'Europium (Eu), among the lanthanides, is notable for showing a +2 oxidation state, in which it acts predominantly as',
    options: [
      'an acid catalyst',
      'a completely inert species',
      'an oxidising agent, since Eu2+ is highly stable',
      'a reducing agent, since Eu2+ is relatively unstable and readily gets oxidised back to the more common Eu3+ state'
    ],
    correctIndex: 3,
    explanation: 'Since Eu2+ is less stable than the common Eu3+ state, it readily loses an electron to revert to Eu3+, acting as a reducing agent.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-53',
    type: 'mcq',
    question: 'The actinide series consists of elements with atomic numbers ranging approximately from',
    options: ['58 to 71', '39 to 48', '21 to 30', '90 to 103 (thorium to lawrencium)'],
    correctIndex: 3,
    explanation: 'The actinide series comprises the 14 elements from thorium (atomic number 90) to lawrencium (atomic number 103), corresponding to the filling of the 5f subshell.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-54',
    type: 'mcq',
    question: 'The general electronic configuration of actinide elements is best represented as',
    options: [
      '[Xe] 4f1-14 5d0-1 6s2',
      '[Rn] 5f1-14 6d0-2 7s2',
      '[Ar] 3d1-10 4s2',
      '[Kr] 4d1-10 5s2'
    ],
    correctIndex: 1,
    explanation: 'Actinides have the general electronic configuration [Rn] 5f1-14 6d0-2 7s2, reflecting the progressive filling of the 5f subshell.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-55',
    type: 'mcq',
    question: 'Compared to lanthanides, actinides show',
    options: [
      'no variable oxidation states at all',
      'exclusively negative oxidation states',
      'a much narrower and more restricted range of oxidation states',
      'a greater range of oxidation states, since the 5f, 6d, and 7s orbitals in actinides have relatively close (comparable) energies'
    ],
    correctIndex: 3,
    explanation: 'Because the 5f, 6d, and 7s orbitals in actinides are closer in energy than the corresponding orbitals in lanthanides, actinides display a wider range of oxidation states than lanthanides.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-56',
    type: 'mcq',
    question: 'All actinide elements share the common feature of being',
    options: [
      'gases at room temperature',
      'radioactive',
      'completely non-reactive and chemically inert',
      'exclusively found in the +2 oxidation state'
    ],
    correctIndex: 1,
    explanation: 'All actinide elements are radioactive, a defining characteristic of this series, in contrast to the largely non-radioactive lanthanide series (with a few exceptions like promethium).',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-57',
    type: 'mcq',
    question: 'Uranium, a well-studied actinide, commonly exhibits oxidation states ranging up to',
    options: ['+4 only', '+6, as seen in the uranyl ion (UO2^2+)', '+3 only', '+2 only'],
    correctIndex: 1,
    explanation: 'Uranium is known to exhibit a range of oxidation states from +3 to +6, with the +6 state being particularly common and stable, as seen in the uranyl ion UO2^2+.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-58',
    type: 'mcq',
    question: 'Actinides show a greater tendency than lanthanides to form complex compounds, largely because',
    options: [
      'actinides have no d electrons at all',
      'actinides are always found as free elements in nature',
      'lanthanides have larger ionic radii than actinides',
      '5f orbitals in actinides are less effectively shielded and can participate more readily in bonding, compared to the 4f orbitals of lanthanides'
    ],
    correctIndex: 3,
    explanation: 'Since the 5f orbitals of actinides are less well shielded from the nucleus than the 4f orbitals of lanthanides, they can participate more effectively in covalent bonding, contributing to a stronger tendency for actinides to form complexes.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-59',
    type: 'mcq',
    question: 'Similar to the lanthanide contraction, actinide elements also show a steady decrease in ionic radii across the series, known as the',
    options: ['ionic expansion', 'periodic contraction', 'nuclear contraction', 'actinide contraction'],
    correctIndex: 3,
    explanation: 'Actinides exhibit an analogous phenomenon called actinide contraction, involving a steady decrease in atomic/ionic radii across the series, similar in origin to lanthanide contraction but arising from poor shielding by 5f electrons.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-60',
    type: 'mcq',
    question: 'Brass, a widely used alloy, is composed primarily of',
    options: ['copper and tin', 'iron and chromium', 'copper and zinc', 'iron and nickel'],
    correctIndex: 2,
    explanation: 'Brass is an alloy composed primarily of copper and zinc, widely used for its favourable mechanical and corrosion-resistant properties.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-61',
    type: 'mcq',
    question: 'Bronze, another well-known alloy, is composed primarily of',
    options: ['nickel and cadmium', 'copper and tin', 'iron and carbon', 'copper and zinc'],
    correctIndex: 1,
    explanation: 'Bronze is an alloy composed primarily of copper and tin, historically significant and still used for its strength and corrosion resistance.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-62',
    type: 'mcq',
    question: 'Stainless steel, an important alloy of iron, gains its corrosion resistance mainly from the addition of',
    options: ['lead and mercury', 'chromium (and often nickel)', 'carbon and sulphur', 'zinc and tin'],
    correctIndex: 1,
    explanation: 'Stainless steel derives its corrosion resistance primarily from the addition of chromium (often along with nickel), which forms a passive protective oxide layer on the surface.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-63',
    type: 'mcq',
    question: 'Density of transition elements generally increases across a given transition series (with some irregularities) mainly because',
    options: [
      'nuclear charge decreases across the series',
      'atomic mass decreases sharply across the series',
      'atomic mass increases while atomic volume decreases (or remains fairly constant) across the series',
      'transition metals become gases towards the end of the series'
    ],
    correctIndex: 2,
    explanation: 'As atomic mass increases across a transition series while atomic volume decreases or stays relatively steady, the overall density (mass/volume) generally increases across the series.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-64',
    type: 'mcq',
    question: 'The 5d series transition metals generally have much higher densities than their 3d counterparts in the same group, largely because',
    options: [
      'density has no relationship to atomic mass or volume',
      '5d elements have significantly smaller atomic mass than 3d elements',
      '5d elements are non-metals',
      'due to lanthanide contraction, 5d elements have atomic sizes similar to 4d elements but substantially greater atomic mass, resulting in higher density'
    ],
    correctIndex: 3,
    explanation: 'Because lanthanide contraction keeps the atomic radii of 5d elements comparable to those of 4d elements despite their much greater atomic mass, 5d transition metals (like osmium and iridium) exhibit exceptionally high densities.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-65',
    type: 'mcq',
    question: 'Among all naturally occurring elements, osmium and iridium (both 5d transition metals) are notable for having',
    options: [
      'no measurable density at all',
      'the lowest known densities',
      'exclusively negative oxidation states',
      'among the highest known densities'
    ],
    correctIndex: 3,
    explanation: 'Osmium and iridium, both 5d transition metals, are known to have among the highest densities of any naturally occurring elements, a consequence of lanthanide contraction combined with high atomic mass.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-66',
    type: 'mcq',
    question: 'A transition metal ion showing an unusually irregular (more negative than expected) standard reduction potential is sometimes explained by the special stability of a',
    options: [
      'completely empty (d0) configuration only',
      'half-filled (d5) or fully filled (d10) d subshell in that particular ion',
      'configuration involving f electrons',
      'randomly chosen electronic configuration with no particular significance'
    ],
    correctIndex: 1,
    explanation: 'Ions with particularly stable electronic configurations, such as half-filled (d5, as in Mn2+) or fully filled (d10, as in Zn2+) d subshells, require extra energy to be oxidised, leading to irregularities in standard reduction potentials.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-67',
    type: 'mcq',
    question: 'A key structural/electronic distinction between lanthanides and actinides is that',
    options: [
      'actinides have completely filled f orbitals in the ground state, unlike lanthanides',
      'lanthanides always show a wider range of oxidation states than actinides',
      '4f orbitals of lanthanides are more effectively shielded and participate less in bonding, compared to the 5f orbitals of actinides',
      'lanthanides are radioactive while actinides are not'
    ],
    correctIndex: 2,
    explanation: 'The 4f orbitals of lanthanides are more compact and better shielded than the 5f orbitals of actinides, so actinide 5f electrons participate more readily in bonding, giving actinides a wider range of oxidation states and greater tendency for complex formation.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-68',
    type: 'mcq',
    question: 'Which of the following elements would NOT be classified as a transition element according to the strict IUPAC definition, despite being located in the d-block?',
    options: ['Zinc (Zn)', 'Iron (Fe)', 'Chromium (Cr)', 'Copper (Cu)'],
    correctIndex: 0,
    explanation: 'Zinc has a completely filled 3d10 configuration in both its elemental form and its common +2 oxidation state, so it does not satisfy the IUPAC definition of a transition element, unlike Fe, Cu, and Cr.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-69',
    type: 'mcq',
    question: 'The transition metal ion Cr3+ (3d3 configuration) in aqueous solution appears coloured, primarily due to',
    options: [
      'the presence of f electrons',
      'its complete lack of unpaired electrons',
      'the absence of any electrons in its d orbitals',
      'd-d electronic transitions made possible by its incompletely filled d subshell'
    ],
    correctIndex: 3,
    explanation: 'Since Cr3+ has an incompletely filled (3d3) d subshell, it can undergo d-d electronic transitions upon absorbing visible light, giving rise to its characteristic colour in solution.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-70',
    type: 'mcq',
    question: 'Overall, the chemistry of the d- and f-block elements, as emphasised in this NCERT chapter, is characterised by the interplay of',
    options: [
      'exclusively gaseous elemental forms',
      'variable oxidation states, colour due to d-d/f-f transitions, catalytic ability, complex formation, and characteristic contraction effects (lanthanide/actinide contraction)',
      'a completely fixed, invariant oxidation state for every element',
      'a total absence of any metallic character'
    ],
    correctIndex: 1,
    explanation: 'The distinctive chemistry of d- and f-block elements arises from a combination of variable oxidation states, characteristic colours from electronic transitions, strong catalytic and complex-forming tendencies, and size-contraction effects unique to these blocks.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'dfblock-71',
    type: 'assertion-reason',
    question: 'Assertion (A): Zinc, cadmium, and mercury are not classified as transition elements, even though they belong to the d-block.\nReason (R): These elements have a completely filled d10 configuration in both their elemental form and their common oxidation states, failing to meet the IUPAC criterion for transition elements.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The fully filled d10 configuration in both the ground state and common oxidation states is exactly why Zn, Cd, and Hg fail to satisfy the transition element definition, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-72',
    type: 'assertion-reason',
    question: 'Assertion (A): Transition metals generally have high melting and boiling points.\nReason (R): Both the ns and (n-1)d electrons of transition metals participate in strong interatomic metallic bonding.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The involvement of both ns and (n-1)d electrons strengthens the metallic bonding in transition metals, directly explaining their characteristically high melting and boiling points.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-73',
    type: 'assertion-reason',
    question: 'Assertion (A): Melting points of 3d transition metals generally rise to a maximum around the middle of the series and then decrease towards the end.\nReason (R): The number of unpaired d electrons available for metallic bonding decreases as pairing increases towards the end of the series.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The decreasing availability of unpaired electrons as pairing increases towards the end of the series weakens metallic bonding, correctly explaining the decline in melting points there.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-74',
    type: 'assertion-reason',
    question: 'Assertion (A): The atomic radii of transition elements decrease across a period, but the decrease becomes much smaller towards the end of the series.\nReason (R): Increasing nuclear charge across the period is progressively offset by increasing electron-electron repulsion from added d electrons.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The balance between increasing nuclear attraction and increasing electron repulsion (shielding) from added d electrons is exactly what causes the levelling off in atomic radii towards the end of the series, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-75',
    type: 'assertion-reason',
    question: 'Assertion (A): Zirconium and hafnium have nearly identical atomic radii and very similar chemical properties.\nReason (R): The lanthanide contraction compensates for the expected size increase from the 4d to the 5d transition series.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The size-compensating effect of lanthanide contraction directly explains why Zr (4d) and Hf (5d), which would otherwise be expected to differ noticeably in size, end up nearly identical, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-76',
    type: 'assertion-reason',
    question: 'Assertion (A): Chromium adopts the electronic configuration [Ar]3d5 4s1 rather than [Ar]3d4 4s2.\nReason (R): A half-filled d subshell provides extra stability due to symmetrical electron distribution and exchange energy.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The extra stability of the half-filled d5 configuration is exactly why chromium adopts this configuration in preference to the otherwise expected [Ar]3d4 4s2, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-77',
    type: 'assertion-reason',
    question: 'Assertion (A): Copper adopts the electronic configuration [Ar]3d10 4s1 rather than [Ar]3d9 4s2.\nReason (R): A fully filled d subshell (d10) has exceptional stability.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The exceptional stability of a fully filled d10 subshell is exactly why copper prefers the [Ar]3d10 4s1 configuration over the otherwise expected [Ar]3d9 4s2, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-78',
    type: 'assertion-reason',
    question: 'Assertion (A): Transition metals show a wide variety of oxidation states, often differing from each other by one unit.\nReason (R): The (n-1)d and ns orbitals of transition metals have comparable energies, allowing electrons from both to participate in bonding.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The comparable energies of the (n-1)d and ns orbitals, as described in R, directly enable the involvement of varying numbers of electrons in bonding, correctly explaining the range of oxidation states seen in A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-79',
    type: 'assertion-reason',
    question: 'Assertion (A): Manganese shows an unusually wide range of oxidation states, from +2 to +7.\nReason (R): Manganese has the highest number of unpaired 3d and 4s electrons among all 3d transition elements, allowing more electrons to participate in bonding at various oxidation levels.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Manganese, with its half-filled 3d5 configuration plus 4s2 electrons, has a total of seven valence electrons (5+2) available for various levels of participation in bonding, directly explaining its unusually wide oxidation state range.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-80',
    type: 'assertion-reason',
    question: 'Assertion (A): The highest oxidation states of transition metals are most commonly and stably found in their oxides and fluorides.\nReason (R): Oxygen and fluorine are highly electronegative and small in size, making them particularly effective at stabilising metals in high oxidation states.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The high electronegativity and small size of oxygen and fluorine, as described in R, are precisely the properties that allow these elements to effectively stabilise transition metals in their highest oxidation states, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-81',
    type: 'assertion-reason',
    question: 'Assertion (A): Copper does not liberate hydrogen gas when treated with dilute hydrochloric acid.\nReason (R): Copper has an unusually positive standard reduction potential (E°, Cu2+/Cu), making it resistant to oxidation by dilute non-oxidising acids.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The positive standard reduction potential of copper means it does not readily lose electrons to H+, directly explaining why copper cannot reduce dilute HCl to liberate hydrogen gas, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-82',
    type: 'assertion-reason',
    question: 'Assertion (A): Most transition metal ions in aqueous solution are coloured.\nReason (R): The presence of an incompletely filled d subshell allows electrons to undergo d-d transitions upon absorption of visible light.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The possibility of d-d electronic transitions in ions with an incompletely filled d subshell is exactly what gives rise to the observed colours, correctly explaining A.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-83',
    type: 'assertion-reason',
    question: 'Assertion (A): Sc3+ ions are colourless in aqueous solution.\nReason (R): Sc3+ has a d0 electronic configuration, so no d-d electronic transition is possible.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'With no d electrons present at all in Sc3+, there is no possibility of a d-d transition, correctly explaining why the ion is colourless.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-84',
    type: 'assertion-reason',
    question: 'Assertion (A): Zn2+ ions are colourless in aqueous solution.\nReason (R): Zn2+ has a fully filled 3d10 configuration, leaving no vacant d orbital for an electron to be promoted into.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since all five d orbitals are completely filled in Zn2+, there is no vacancy for an electron to transition into, correctly explaining why Zn2+ is colourless.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-85',
    type: 'assertion-reason',
    question: 'Assertion (A): Transition metals and their compounds are widely used as catalysts.\nReason (R): Their ability to show variable oxidation states allows them to form intermediate species and provide alternative reaction pathways with lower activation energy.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The formation of intermediates via variable oxidation states, as described in R, is exactly the mechanism by which transition metals lower activation energy and thus act as effective catalysts, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-86',
    type: 'assertion-reason',
    question: 'Assertion (A): Interstitial compounds formed by transition metals with small atoms like hydrogen, carbon, or nitrogen are harder and have higher melting points than the pure metal.\nReason (R): The small atoms occupy the interstitial spaces in the metal lattice, disrupting the ease of layer slippage and increasing structural rigidity.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The disruption caused by small interstitial atoms occupying lattice spaces, restricting the movement of metal layers, is exactly why such compounds are harder and have higher melting points, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-87',
    type: 'assertion-reason',
    question: 'Assertion (A): Transition metals readily form alloys with one another.\nReason (R): Transition metals generally have quite similar atomic radii, allowing one metal to substitute for another within a common crystal lattice.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Similar atomic sizes among transition metals, as described in R, is exactly the structural feature that enables mutual substitution and alloy formation, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-88',
    type: 'assertion-reason',
    question: 'Assertion (A): Chromate ions are the predominant species in alkaline solution, while dichromate ions predominate in acidic solution.\nReason (R): The chromate-dichromate equilibrium, 2CrO4^2- + 2H+ ⇌ Cr2O7^2- + H2O, is shifted towards dichromate as H+ concentration increases.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'According to Le Chatelier\'s principle applied to this pH-dependent equilibrium, increasing H+ concentration (acidic conditions) shifts the equilibrium towards dichromate, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-89',
    type: 'assertion-reason',
    question: 'Assertion (A): Actinides show a wider range of oxidation states than lanthanides.\nReason (R): The 5f, 6d, and 7s orbitals in actinides have relatively close (comparable) energies, allowing electrons from more than one subshell to participate in bonding.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The comparable orbital energies described in R directly allow greater flexibility in electron participation for bonding in actinides, correctly explaining the wider range of oxidation states seen in A.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-90',
    type: 'assertion-reason',
    question: 'Assertion (A): Actinides show a greater tendency than lanthanides to form complex compounds.\nReason (R): The 5f orbitals of actinides are less effectively shielded from the nucleus than the 4f orbitals of lanthanides, allowing greater participation of 5f electrons in bonding.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The reduced shielding of 5f orbitals, allowing them to engage more in bonding, is exactly why actinides show a stronger complex-forming tendency than lanthanides, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-91',
    type: 'assertion-reason',
    question: 'Assertion (A): All actinide elements are radioactive.\nReason (R): All actinide nuclei are inherently unstable, undergoing spontaneous radioactive decay.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The inherent nuclear instability described in R is exactly why every actinide element undergoes radioactive decay, correctly explaining A.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-92',
    type: 'assertion-reason',
    question: 'Assertion (A): Ce4+ is a good oxidising agent in aqueous solution.\nReason (R): Ce4+ readily gains an electron to be reduced back to the more stable Ce3+ oxidation state.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The tendency of Ce4+ to be reduced to the more stable Ce3+ state is precisely the reason it functions effectively as an oxidising agent, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-93',
    type: 'assertion-reason',
    question: 'Assertion (A): Eu2+ acts as a reducing agent in aqueous solution.\nReason (R): Eu2+ is relatively unstable compared to the more common Eu3+ state and readily loses an electron to revert to Eu3+.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The relative instability of Eu2+, which drives it to lose an electron and revert to the more stable Eu3+ state, is exactly why it acts as a reducing agent, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-94',
    type: 'assertion-reason',
    question: 'Assertion (A): Transition metals show a strong tendency to form coordination complexes.\nReason (R): They possess a comparatively small ionic size, high ionic charge, and readily available vacant d orbitals to accept electron pairs from ligands.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The combination of small size, high charge density, and accessible vacant d orbitals, as described in R, is precisely what enables transition metals to readily accept ligand electron pairs and form stable complexes, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-95',
    type: 'assertion-reason',
    question: 'Assertion (A): Osmium and iridium have among the highest densities of any known elements.\nReason (R): Lanthanide contraction keeps their atomic size comparable to lighter 4d elements, while their atomic mass is significantly greater.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The combination of a relatively small, contracted atomic size with a large atomic mass, as described in R, is exactly why these 5d metals achieve exceptionally high densities, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-96',
    type: 'assertion-reason',
    question: 'Assertion (A): The magnetic moment of a transition metal ion can be estimated using the number of unpaired electrons it possesses.\nReason (R): The spin-only formula, μ = √(n(n+2)) BM, directly relates magnetic moment to the number of unpaired electrons, n.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This precise mathematical relationship, incorporating the number of unpaired electrons, is exactly what allows the magnetic moment to be estimated from electron configuration, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-97',
    type: 'assertion-reason',
    question: 'Assertion (A): The general trend of highest oxidation state corresponding to group number holds reliably for all transition elements across the entire 3d series.\nReason (R): This trend holds reasonably well only up to manganese (group 7); beyond manganese, this simple correspondence no longer strictly applies.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — the correspondence between highest oxidation state and group number does not hold reliably for the whole series; it applies well only up to manganese. R correctly states this limitation.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-98',
    type: 'assertion-reason',
    question: 'Assertion (A): Vanadium(V) oxide is used as a catalyst in the industrial manufacture of sulphuric acid.\nReason (R): V2O5 facilitates the oxidation of sulphur dioxide to sulphur trioxide in the contact process.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The specific catalytic role of V2O5 in oxidising SO2 to SO3 during the contact process is precisely why it is used in sulphuric acid manufacture, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-99',
    type: 'assertion-reason',
    question: 'Assertion (A): Interstitial compounds formed by transition metals are generally non-stoichiometric.\nReason (R): The small atoms occupying interstitial sites in the metal lattice do not occupy a strictly fixed number of positions relative to the metal atoms, so composition can vary within a range.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The variable occupation of interstitial sites described in R is exactly why these compounds lack a fixed, definite composition, correctly explaining the non-stoichiometric nature stated in A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-100',
    type: 'assertion-reason',
    question: 'Assertion (A): Both potassium permanganate and potassium dichromate are widely used as oxidising agents in analytical chemistry.\nReason (R): Manganese in KMnO4 and chromium in K2Cr2O7 are both in high oxidation states (+7 and +6 respectively), which readily accept electrons and get reduced during a reaction.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The high oxidation states of manganese and chromium in these compounds give them a strong tendency to be reduced (gain electrons), which is precisely the property that makes them effective oxidising agents, correctly explaining A.',
    difficulty: 'medium'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'dfblock-101',
    type: 'statement',
    question: 'Statement I: A transition element must have an incompletely filled d subshell in its ground state atom or in one of its common oxidation states.\nStatement II: All elements in the d-block satisfy this definition of a transition element without exception.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I correctly states the IUPAC definition. Statement II is incorrect — Zn, Cd, and Hg are in the d-block but do not satisfy this definition, since they have a fully filled d10 configuration.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-102',
    type: 'statement',
    question: 'Statement I: All transition elements are metals.\nStatement II: Transition metals generally have high melting and boiling points due to strong metallic bonding involving both ns and (n-1)d electrons.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe fundamental properties of transition metals.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-103',
    type: 'statement',
    question: 'Statement I: Atomic and ionic radii of transition elements decrease sharply and steadily across the entire period, similar to a p-block period.\nStatement II: The decrease in radii of transition elements levels off towards the end of the period.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the decrease in radii across a transition period is less steep than in a p-block period. Statement II correctly describes the levelling-off pattern seen towards the end of the series.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-104',
    type: 'statement',
    question: 'Statement I: Lanthanide contraction refers to the steady decrease in atomic/ionic radii of lanthanides with increasing atomic number.\nStatement II: This contraction is caused by the poor shielding effect of 4f electrons.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the phenomenon and cause of lanthanide contraction.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-105',
    type: 'statement',
    question: 'Statement I: A major consequence of lanthanide contraction is that elements of the 4d and 5d series in the same group have very similar atomic radii and properties.\nStatement II: Because of this similarity, elements such as Zr and Hf are difficult to separate chemically.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the consequences of lanthanide contraction on the properties of 4d/5d elements.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-106',
    type: 'statement',
    question: 'Statement I: Chromium\'s electronic configuration is [Ar]3d5 4s1 rather than [Ar]3d4 4s2 due to the extra stability of a half-filled d subshell.\nStatement II: Copper\'s electronic configuration is [Ar]3d10 4s1 rather than [Ar]3d9 4s2 due to the extra stability of a fully filled d subshell.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly explain these well-known exceptions to the standard electron-filling order for chromium and copper.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-107',
    type: 'statement',
    question: 'Statement I: Transition metals show variable oxidation states because the (n-1)d and ns orbitals have very different energies.\nStatement II: Transition metal oxidation states typically differ from each other by units of two, similar to p-block elements.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — the (n-1)d and ns orbitals actually have comparable (similar), not very different, energies, and transition metal oxidation states typically differ by one unit, not two (unlike the inert pair effect seen in some p-block elements).',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-108',
    type: 'statement',
    question: 'Statement I: Manganese shows an unusually wide range of oxidation states, from +2 to +7.\nStatement II: The highest oxidation state of manganese, +7, is exhibited in KMnO4.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — manganese does show this wide range of oxidation states, with +7 being its highest, as seen in potassium permanganate.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-109',
    type: 'statement',
    question: 'Statement I: The correspondence between highest oxidation state and group number holds reliably for all 3d transition elements without exception.\nStatement II: This correspondence holds reasonably well only up to manganese, after which it breaks down.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the correspondence does not hold for the entire series. Statement II correctly identifies where this trend applies and where it breaks down.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-110',
    type: 'statement',
    question: 'Statement I: Copper has a positive standard reduction potential (E°, Cu2+/Cu).\nStatement II: This is why copper does not liberate hydrogen gas from dilute non-oxidising acids.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe copper\'s electrochemical behaviour and its consequence.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-111',
    type: 'statement',
    question: 'Statement I: Colour in transition metal ions arises from d-d electronic transitions.\nStatement II: Ions with a d0 or d10 configuration are typically colourless, since no d-d transition is possible.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly explain the origin of colour in transition metal ions and the exception for d0/d10 configurations.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-112',
    type: 'statement',
    question: 'Statement I: Sc3+ is colourless because it has a d0 configuration.\nStatement II: Zn2+ is colourless because it has a d10 configuration.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly identify these classic examples of colourless transition metal ions and their respective electronic configurations.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-113',
    type: 'statement',
    question: 'Statement I: Paramagnetism in transition metal ions arises from the presence of unpaired electrons.\nStatement II: The spin-only magnetic moment formula is μ = n(n+2) BM, without a square root.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the correct spin-only formula includes a square root: μ = √(n(n+2)) BM.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-114',
    type: 'statement',
    question: 'Statement I: Transition metals and their compounds are widely used as catalysts due to their variable oxidation states.\nStatement II: Vanadium(V) oxide is used as a catalyst in the Haber process for ammonia synthesis.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — vanadium(V) oxide is used in the contact process for sulphuric acid manufacture, not the Haber process, which uses finely divided iron.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-115',
    type: 'statement',
    question: 'Statement I: Finely divided iron is used as a catalyst in the Haber process.\nStatement II: Nickel is used as a catalyst in the hydrogenation of vegetable oils.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly identify these standard industrial catalytic applications of transition metals.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-116',
    type: 'statement',
    question: 'Statement I: Interstitial compounds formed by transition metals are generally stoichiometric with a fixed, precise composition.\nStatement II: Interstitial compounds are typically harder and have higher melting points than the pure metal.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — interstitial compounds are generally non-stoichiometric. Statement II correctly describes their typical physical properties.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-117',
    type: 'statement',
    question: 'Statement I: Transition metals readily form alloys due to their similar atomic sizes.\nStatement II: Brass is an alloy of copper and tin.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — brass is an alloy of copper and zinc, not copper and tin (which is bronze).',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-118',
    type: 'statement',
    question: 'Statement I: Potassium dichromate is manufactured starting from chromite ore.\nStatement II: Potassium permanganate is manufactured starting from pyrolusite (MnO2).',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly identify the starting ores used in the industrial preparation of these two important compounds.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-119',
    type: 'statement',
    question: 'Statement I: The dichromate ion, Cr2O7^2-, consists of two CrO4 tetrahedra sharing one corner oxygen atom.\nStatement II: The chromate ion (yellow) is favoured in acidic medium, while the dichromate ion (orange) is favoured in alkaline medium.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I correctly describes the structure of the dichromate ion. Statement II is incorrect — the actual dependence is reversed: chromate predominates in alkaline medium, dichromate in acidic medium.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-120',
    type: 'statement',
    question: 'Statement I: Both KMnO4 and K2Cr2O7 are widely used as strong oxidising agents.\nStatement II: In both compounds, the transition metal is in a relatively high oxidation state, favouring reduction.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the oxidising nature of these compounds and the underlying reason (high oxidation states of Mn and Cr).',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-121',
    type: 'statement',
    question: 'Statement I: The lanthanide series consists of elements from cerium to lutetium.\nStatement II: The most common oxidation state among lanthanides is +2.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the most common and stable oxidation state among lanthanides is +3, not +2.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-122',
    type: 'statement',
    question: 'Statement I: Ce4+ acts as an oxidising agent, since it readily gets reduced to the more stable Ce3+ state.\nStatement II: Eu2+ acts as a reducing agent, since it readily gets oxidised to the more common Eu3+ state.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the redox behaviour of these two notable exceptions among the lanthanides.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-123',
    type: 'statement',
    question: 'Statement I: The actinide series consists of elements from thorium to lawrencium.\nStatement II: All actinide elements are radioactive.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — this is the standard definition of the actinide series, and radioactivity is indeed a universal feature of all actinide elements.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-124',
    type: 'statement',
    question: 'Statement I: Actinides show a narrower range of oxidation states compared to lanthanides.\nStatement II: This is because the 5f, 6d, and 7s orbitals of actinides have widely separated energies, unlike lanthanides.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — actinides actually show a wider range of oxidation states than lanthanides, precisely because their 5f, 6d, and 7s orbitals have comparable (not widely separated) energies.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-125',
    type: 'statement',
    question: 'Statement I: Actinides show a greater tendency to form complex compounds compared to lanthanides.\nStatement II: This is attributed to the relatively poor shielding of 5f orbitals, allowing greater participation in bonding.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and logically connected, describing why actinides form complexes more readily than lanthanides.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-126',
    type: 'statement',
    question: 'Statement I: Actinide contraction is similar in nature to lanthanide contraction.\nStatement II: Actinide contraction arises from the poor shielding effect of 5f electrons, just as lanthanide contraction arises from poor shielding by 4f electrons.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct, drawing the accurate parallel between the causes of contraction in the lanthanide and actinide series.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-127',
    type: 'statement',
    question: 'Statement I: Osmium and iridium have among the highest densities of all known elements.\nStatement II: This is because lanthanide contraction keeps their atomic size comparable to lighter 4d elements while their atomic mass is much greater.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and causally connected, correctly explaining the exceptional densities of these 5d transition metals.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-128',
    type: 'statement',
    question: 'Statement I: Transition metals show a strong tendency to form complex compounds due to their small size, high charge, and availability of vacant d orbitals.\nStatement II: This complex-forming tendency has no relevance to their catalytic activity.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the ability to form complexes with reacting species is actually closely linked to catalytic activity, as it can provide a favourable reaction surface or intermediate.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-129',
    type: 'statement',
    question: 'Statement I: Density of transition elements generally increases across a series due to increasing atomic mass with relatively little change in atomic volume.\nStatement II: 5d series transition metals generally have much higher densities than their 3d counterparts in the same group.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe density trends within a series and between the 3d and 5d series.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-130',
    type: 'statement',
    question: 'Statement I: Manganese dioxide is used as a catalyst in the decomposition of potassium chlorate.\nStatement II: The Ziegler-Natta catalyst (TiCl4 with an aluminium alkyl) is used for the polymerisation of alkenes.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe these established catalytic applications of transition metal compounds.',
    difficulty: 'medium'
  },

  // ==================== HOW-MANY (20) ====================
  {
    id: 'dfblock-131',
    type: 'how-many',
    question: 'How many of the following elements are correctly classified as NOT being typical transition elements, despite belonging to the d-block?\n1. Zinc\n2. Cadmium\n3. Mercury\n4. Copper',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Zinc, cadmium, and mercury (statements 1, 2, and 3) are excluded from the transition elements due to their fully filled d10 configuration in common states. Copper (statement 4), however, is a typical transition element, since Cu2+ has an incompletely filled d9 configuration.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-132',
    type: 'how-many',
    question: 'How many of the following statements about general properties of transition elements are correct?\n1. They are all metals.\n2. They generally have high melting and boiling points.\n3. They show only one fixed oxidation state each.\n4. Many of their compounds are coloured.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — transition elements are characteristically known for showing variable, not fixed, oxidation states.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-133',
    type: 'how-many',
    question: 'How many of the following statements about lanthanide contraction are correct?\n1. It refers to the steady decrease in atomic/ionic radii across the lanthanide series.\n2. It is caused by poor shielding of nuclear charge by 4f electrons.\n3. It causes 4d and 5d elements of the same group to have very similar sizes.\n4. It results in a significant increase in atomic radii across the lanthanide series.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — lanthanide contraction refers to a decrease, not an increase, in atomic radii.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-134',
    type: 'how-many',
    question: 'How many of the following exceptions to the normal electron-filling order are correctly explained?\n1. Chromium adopts [Ar]3d5 4s1 due to the stability of a half-filled d subshell.\n2. Copper adopts [Ar]3d10 4s1 due to the stability of a fully filled d subshell.\n3. Manganese adopts [Ar]3d10 4s0 due to the stability of a fully filled d subshell.\n4. Zinc adopts [Ar]3d10 4s2, its normally expected configuration.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — manganese\'s actual configuration is [Ar]3d5 4s2, not [Ar]3d10 4s0.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-135',
    type: 'how-many',
    question: 'How many of the following statements about oxidation states of transition metals are correct?\n1. Scandium\'s most stable oxidation state is +3.\n2. Manganese shows the widest range of oxidation states among the 3d series, from +2 to +7.\n3. The highest oxidation state of Mn, +7, is seen in KMnO4.\n4. Highest oxidation states of transition metals are most stably found combined with oxygen or fluorine.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe standard facts about oxidation states of 3d transition metals.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-136',
    type: 'how-many',
    question: 'How many of the following statements about the colour of transition metal ions are correct?\n1. Colour arises due to d-d electronic transitions.\n2. Sc3+ (d0) is colourless.\n3. Zn2+ (d10) is colourless.\n4. All transition metal ions, regardless of d electron count, are always coloured.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — ions with d0 or d10 configurations are colourless, as they cannot undergo d-d transitions.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-137',
    type: 'how-many',
    question: 'How many of the following catalysts are correctly matched with their industrial or laboratory application?\n1. V2O5 — contact process for sulphuric acid\n2. Finely divided Fe — Haber process for ammonia\n3. Ni — hydrogenation of vegetable oils\n4. MnO2 — decomposition of potassium chlorate',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four catalyst-application pairs are correctly matched, representing standard and well-known catalytic applications of transition metal compounds.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-138',
    type: 'how-many',
    question: 'How many of the following statements about interstitial compounds are correct?\n1. They are formed when small atoms like H, C, or N occupy interstitial spaces in a metal lattice.\n2. They are typically harder than the pure metal.\n3. They typically have lower melting points than the pure metal.\n4. They are generally non-stoichiometric.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — interstitial compounds typically have higher, not lower, melting points than the pure metal.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-139',
    type: 'how-many',
    question: 'How many of the following alloys are correctly matched with their constituent metals?\n1. Brass — copper and zinc\n2. Bronze — copper and tin\n3. Stainless steel — iron with chromium (and often nickel)\n4. Amalgam — copper and mercury only, exclusively',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correctly matched. Statement 4 is misleading/false as an absolute claim — an amalgam is any alloy of mercury with another metal, not exclusively copper.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-140',
    type: 'how-many',
    question: 'How many of the following statements about potassium permanganate (KMnO4) are correct?\n1. It is prepared industrially starting from pyrolusite (MnO2).\n2. Manganese in KMnO4 is in the +7 oxidation state.\n3. Green potassium manganate is an intermediate formed during its preparation.\n4. KMnO4 acts as a reducing agent in most reactions.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — KMnO4 is well known as a strong oxidising agent, not a reducing agent.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-141',
    type: 'how-many',
    question: 'How many of the following statements about potassium dichromate (K2Cr2O7) are correct?\n1. It is prepared industrially starting from chromite ore.\n2. The dichromate ion consists of two CrO4 tetrahedra sharing a corner oxygen.\n3. Chromate ion predominates in acidic medium.\n4. K2Cr2O7 acts as a strong oxidising agent in acidic medium.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — chromate predominates in alkaline medium, while dichromate predominates in acidic medium.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-142',
    type: 'how-many',
    question: 'How many of the following statements about lanthanides are correct?\n1. The most common oxidation state is +3.\n2. Ce4+ acts as an oxidising agent.\n3. Eu2+ acts as a reducing agent.\n4. Lanthanides have the general configuration [Rn]5f1-14 6d0-2 7s2.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — this configuration describes actinides, not lanthanides; lanthanides have the general configuration [Xe]4f1-14 5d0-1 6s2.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-143',
    type: 'how-many',
    question: 'How many of the following statements about actinides are correct?\n1. All actinides are radioactive.\n2. Actinides show a wider range of oxidation states than lanthanides.\n3. Actinides show a greater tendency to form complexes than lanthanides.\n4. Actinide contraction is caused by poor shielding of 5f electrons.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe standard, well-established features of the actinide series.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-144',
    type: 'how-many',
    question: 'How many of the following statements about the density and size of transition elements are correct?\n1. Density generally increases across a transition series due to increasing atomic mass and relatively constant/decreasing atomic volume.\n2. Osmium and iridium have among the highest densities of all elements.\n3. 5d elements have much higher densities than 3d elements in the same group due to lanthanide contraction combined with greater atomic mass.\n4. Density of transition elements is completely unrelated to atomic mass or atomic volume.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — density is directly determined by the ratio of atomic mass to atomic volume.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-145',
    type: 'how-many',
    question: 'How many of the following statements about magnetic properties of transition metal ions are correct?\n1. Paramagnetism arises due to the presence of unpaired electrons.\n2. The spin-only magnetic moment formula is μ = √(n(n+2)) BM.\n3. A greater number of unpaired electrons corresponds to a larger magnetic moment.\n4. Ions with all paired electrons are typically paramagnetic.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — ions with all electrons paired are diamagnetic, not paramagnetic.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-146',
    type: 'how-many',
    question: 'How many of the following statements about why transition metals form complexes readily are correct?\n1. They have relatively small ionic sizes.\n2. They have relatively high ionic charges.\n3. They have vacant d orbitals available to accept electron pairs from ligands.\n4. They have no ability to interact with ligand lone pairs at all.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct reasons for the strong complex-forming tendency of transition metals. Statement 4 is false and directly contradicts this tendency.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-147',
    type: 'how-many',
    question: 'How many of the following statements about ionisation enthalpy trends in the 3d series are correct?\n1. Ionisation enthalpy generally increases across the series.\n2. The increase is steeper than that seen across a typical p-block period.\n3. There are certain irregularities in the trend due to stable half-filled/fully-filled configurations.\n4. Ionisation enthalpy decreases sharply and continuously across the entire series.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    explanation: 'Statements 1 and 3 are correct. Statement 2 is false — the increase across a transition series is generally less steep than across a p-block period. Statement 4 is false, since the general trend is an increase, not a decrease.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-148',
    type: 'how-many',
    question: 'How many of the following statements about standard reduction potentials of 3d metal ions (M2+/M) are correct?\n1. Copper has an unusually positive E° value.\n2. This is related to the high combined sublimation and ionisation energy of copper, not fully compensated by its hydration enthalpy.\n3. Manganese and zinc show some irregularities in E° due to the stability of half-filled and fully-filled d configurations, respectively.\n4. E° values are completely unrelated to sublimation, ionisation, or hydration enthalpies.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — E° values are, in fact, directly related to the sum of sublimation, ionisation, and hydration enthalpies through the Born-Haber-type thermodynamic cycle.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-149',
    type: 'how-many',
    question: 'How many of the following statements comparing lanthanides and actinides are correct?\n1. Both series show a characteristic contraction in ionic radii with increasing atomic number.\n2. Actinides generally show a wider range of oxidation states than lanthanides.\n3. Lanthanides are generally non-radioactive (with a few exceptions), while all actinides are radioactive.\n4. Lanthanides have a greater tendency to form complexes than actinides.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — it is actinides, not lanthanides, that show the greater tendency to form complex compounds.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-150',
    type: 'how-many',
    question: 'How many of the following statements correctly summarise key themes of the d- and f-block elements chapter?\n1. Transition elements are defined by an incompletely filled d subshell in the atom or a common oxidation state.\n2. Variable oxidation states, colour, catalytic activity, and complex formation are hallmark properties of transition metals.\n3. Lanthanide and actinide contractions are important structural effects influencing periodic trends.\n4. All d-block elements without exception are classified as transition elements.\n5. Actinides generally show a greater range of oxidation states and complex-forming ability than lanthanides.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, 3, and 5 correctly summarise major themes of the chapter. Statement 4 is false, since Zn, Cd, and Hg are notable exceptions within the d-block that are not classified as transition elements.',
    difficulty: 'medium'
  }
];
=======
export const D_F_BLOCK_ELEMENTS = [
  // ==================== MCQ (70) ====================
  {
    id: 'dfblock-1',
    type: 'mcq',
    question: 'According to the IUPAC definition, a transition element is one whose atom, in the ground state or in any of its commonly occurring oxidation states, has',
    options: [
      'a completely filled d subshell',
      'an incompletely filled d subshell',
      'no d electrons at all',
      'a completely filled f subshell'
    ],
    correctIndex: 1,
    explanation: 'The IUPAC definition specifies a transition element as one with a partially (incompletely) filled d subshell, either in the ground state atom or in one of its commonly encountered oxidation states.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-2',
    type: 'mcq',
    question: 'The general electronic configuration of d-block elements is best represented as',
    options: ['ns2 np1-6', '(n-1)d1-10 ns0-2', '(n-2)f1-14 (n-1)d0-1 ns2', 'ns1-2'],
    correctIndex: 1,
    explanation: 'd-block elements have the general electronic configuration (n-1)d1-10 ns0-2, reflecting the filling of the penultimate d subshell.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-3',
    type: 'mcq',
    question: 'Zinc, cadmium, and mercury are placed in the d-block of the periodic table but are NOT considered typical transition elements because',
    options: [
      'they do not have any d electrons at all',
      'they have a completely filled d10 configuration both in the elemental (ground) state and in their common oxidation states',
      'they are radioactive elements',
      'they belong to the f-block instead'
    ],
    correctIndex: 1,
    explanation: 'Since Zn, Cd, and Hg have a fully filled d10 configuration in both the ground state and their common +2 oxidation state, they do not meet the IUPAC criterion of an incompletely filled d subshell, and hence are excluded from the transition elements despite being in the d-block.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-4',
    type: 'mcq',
    question: 'The d-block of the periodic table consists of how many complete transition series arranged across periods 4, 5, and 6?',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'The d-block contains three complete transition series: the 3d series (Sc to Zn), the 4d series (Y to Cd), and the 5d series (La/Hf to Hg), with a partial fourth (6d) series also recognised.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-5',
    type: 'mcq',
    question: 'All transition elements are',
    options: [
      'non-metals',
      'metals, generally characterised by hardness, high melting and boiling points, and good electrical and thermal conductivity',
      'metalloids',
      'gases at room temperature'
    ],
    correctIndex: 1,
    explanation: 'Transition elements are all metals, typically hard with high melting and boiling points, and are good conductors of heat and electricity.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-6',
    type: 'mcq',
    question: 'Transition metals generally have high melting and boiling points primarily because of',
    options: [
      'the involvement of both ns and (n-1)d electrons in strong metallic bonding',
      'their large atomic size',
      'their low nuclear charge',
      'their complete absence of unpaired electrons'
    ],
    correctIndex: 0,
    explanation: 'Since both the ns and (n-1)d electrons contribute to interatomic metallic bonding in transition metals, this results in stronger metallic bonds and correspondingly high melting and boiling points.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-7',
    type: 'mcq',
    question: 'Across the 3d transition series, melting points generally rise to a maximum somewhere in the middle of the series (around group 6) and then decrease towards the end, mainly because',
    options: [
      'the number of unpaired d electrons available for metallic bonding decreases as pairing of electrons increases towards the end of the series',
      'atomic size increases sharply towards the end of the series',
      'nuclear charge decreases towards the end of the series',
      'melting point is completely unrelated to the number of unpaired electrons'
    ],
    correctIndex: 0,
    explanation: 'As the d subshell fills, increasing electron pairing reduces the number of unpaired electrons available for strong metallic bonding, causing melting points to decrease again after reaching a maximum around the middle of the series.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-8',
    type: 'mcq',
    question: 'Transition metals generally exhibit high enthalpies of atomisation, which is best explained by',
    options: [
      'the weak interatomic bonding resulting from a large atomic size',
      'strong interatomic metallic bonding arising from the involvement of a large number of unpaired d electrons',
      'the complete absence of d electrons',
      'their low densities'
    ],
    correctIndex: 1,
    explanation: 'The greater number of unpaired electrons in many transition metals allows for stronger metallic bonding, which requires a correspondingly higher enthalpy to vaporise/atomise the metal.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-9',
    type: 'mcq',
    question: 'The atomic and ionic radii of transition elements generally decrease across a period, but this decrease',
    options: [
      'is much steeper than the decrease observed across a typical p-block period',
      'levels off (becomes much smaller) towards the end of the series, due to a balance between increasing nuclear charge and increasing electron-electron repulsion/shielding from d electrons',
      'does not occur at all; radii remain exactly constant throughout',
      'increases continuously and steadily across the entire series'
    ],
    correctIndex: 1,
    explanation: 'Although atomic radii generally decrease across a transition series due to increasing nuclear charge, this decrease becomes much less pronounced (levels off) towards the end, as increased shielding by d electrons offsets the growing nuclear charge.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-10',
    type: 'mcq',
    question: 'The phenomenon in which there is a steady decrease in the atomic and ionic radii of lanthanide elements with increasing atomic number is called',
    options: ['actinide contraction', 'lanthanide contraction', 'periodic contraction', 'nuclear contraction'],
    correctIndex: 1,
    explanation: 'The lanthanide contraction refers to the steady decrease in atomic and ionic radii observed across the lanthanide series as atomic number increases.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-11',
    type: 'mcq',
    question: 'The lanthanide contraction is primarily caused by the',
    options: [
      'complete absence of shielding effect from any electrons in the lanthanide atoms',
      'poor shielding effect of the 4f electrons, which allows the effective nuclear charge felt by outer electrons to increase steadily',
      'increasing atomic mass across the series',
      'high electronegativity of the lanthanide elements'
    ],
    correctIndex: 1,
    explanation: 'The diffuse shape of 4f orbitals provides poor shielding of the nuclear charge, so as electrons are added to the 4f subshell and protons to the nucleus, the effective nuclear charge experienced by outer electrons increases steadily, contracting the atomic/ionic radii.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-12',
    type: 'mcq',
    question: 'A major consequence of the lanthanide contraction is that',
    options: [
      'lanthanides become larger than actinides',
      'the atomic and ionic radii of the 4d and 5d transition series elements in the same group become remarkably similar, making their chemical separation difficult',
      'transition elements lose all their d electrons',
      'lanthanides become non-metallic'
    ],
    correctIndex: 1,
    explanation: 'Because the lanthanide contraction compensates for the expected size increase on descending from the 4d to the 5d series, elements of the same group in these two series (e.g., Zr and Hf, Nb and Ta) have very similar radii and, consequently, very similar chemical properties, making them difficult to separate.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-13',
    type: 'mcq',
    question: 'Zirconium (Zr, 4d series) and hafnium (Hf, 5d series) show almost identical atomic radii and chemical properties mainly due to',
    options: [
      'their difference in electronic configuration',
      'the effect of lanthanide contraction, which compensates for the expected size increase from the 4d to the 5d series',
      'both belonging to the same period',
      'both being non-metals'
    ],
    correctIndex: 1,
    explanation: 'The lanthanide contraction that occurs between the 4d and 5d series causes Zr and Hf (same group, different periods) to have nearly identical atomic sizes and properties, a classic textbook example of this effect.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-14',
    type: 'mcq',
    question: 'Across the first (3d) transition series, the general trend in first ionisation enthalpy is',
    options: [
      'a steep, uninterrupted decrease from Sc to Zn',
      'a general increase from Sc to Zn, though with certain irregularities',
      'no change at all across the series',
      'a steep, uninterrupted increase identical in magnitude to that seen across a p-block period'
    ],
    correctIndex: 1,
    explanation: 'First ionisation enthalpy generally increases across the 3d transition series due to increasing nuclear charge, although the increase is less steep than across a p-block period and shows certain irregularities.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-15',
    type: 'mcq',
    question: 'Chromium has the electronic configuration [Ar]3d5 4s1 rather than the expected [Ar]3d4 4s2, mainly due to',
    options: [
      'the extra stability associated with a half-filled d subshell',
      'the extra stability associated with a fully-filled d subshell',
      'a random anomaly with no theoretical basis',
      'the low nuclear charge of chromium'
    ],
    correctIndex: 0,
    explanation: 'A half-filled d subshell (d5) has extra stability due to symmetric distribution and exchange energy, so chromium adopts the [Ar]3d5 4s1 configuration rather than [Ar]3d4 4s2.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-16',
    type: 'mcq',
    question: 'Copper has the electronic configuration [Ar]3d10 4s1 rather than the expected [Ar]3d9 4s2, mainly due to',
    options: [
      'the extra stability associated with a fully-filled d subshell',
      'the extra stability associated with a half-filled d subshell',
      'copper having no d electrons at all',
      'copper being a non-metal'
    ],
    correctIndex: 0,
    explanation: 'A fully-filled d subshell (d10) is exceptionally stable, so copper adopts the configuration [Ar]3d10 4s1 instead of the otherwise expected [Ar]3d9 4s2.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-17',
    type: 'mcq',
    question: 'Transition metals show variable oxidation states, typically differing from each other by units of one, because',
    options: [
      'the (n-1)d and ns orbitals have very different, widely separated energies',
      'the (n-1)d and ns orbitals have comparable energies, so electrons from both can be involved in bond formation',
      'transition metals have no valence electrons at all',
      'transition metal ions are always monoatomic'
    ],
    correctIndex: 1,
    explanation: 'Because the energies of the (n-1)d and ns orbitals are quite close, electrons from both can participate in bonding, allowing transition metals to show several different oxidation states, often differing by one.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-18',
    type: 'mcq',
    question: 'Among the 3d transition metals, the element that shows the greatest number of different oxidation states is generally considered to be',
    options: ['scandium', 'manganese', 'zinc', 'copper'],
    correctIndex: 1,
    explanation: 'Manganese exhibits an unusually wide range of oxidation states, from +2 up to +7 (as in KMnO4), attributed to its central position in the series and the availability of both 3d and 4s electrons for bonding.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-19',
    type: 'mcq',
    question: 'The highest oxidation state shown by manganese, +7, is exhibited in the compound',
    options: ['MnO2', 'MnSO4', 'KMnO4', 'MnCl2'],
    correctIndex: 2,
    explanation: 'In potassium permanganate (KMnO4), manganese is in its highest common oxidation state of +7.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-20',
    type: 'mcq',
    question: 'The most stable and characteristic oxidation state of scandium in its compounds is',
    options: ['+1', '+2', '+3', '+4'],
    correctIndex: 2,
    explanation: 'Scandium almost exclusively shows the +3 oxidation state in its compounds, corresponding to loss of its two 4s and one 3d electron.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-21',
    type: 'mcq',
    question: 'Among the common oxidation states of iron, the +3 state (ferric) is often more stable than the +2 state (ferrous) in many circumstances, partly because Fe3+ has the electronic configuration',
    options: [
      '3d4, an unstable configuration',
      '3d5, a half-filled and therefore relatively stable configuration',
      '3d6, a randomly stable configuration',
      '3d0, a fully empty configuration'
    ],
    correctIndex: 1,
    explanation: 'Fe3+ has a 3d5 configuration, which benefits from the extra stability associated with a half-filled d subshell, contributing to the relative stability of the +3 oxidation state of iron.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-22',
    type: 'mcq',
    question: 'The general trend that the highest oxidation state of a transition metal often corresponds to its group number holds reasonably well up to which element in the 3d series?',
    options: ['Chromium (group 6)', 'Manganese (group 7)', 'Iron (group 8)', 'Copper (group 11)'],
    correctIndex: 1,
    explanation: 'The correspondence between highest oxidation state and group number holds well for elements up to manganese (group 7, showing +7); beyond manganese, this simple relationship no longer strictly applies.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-23',
    type: 'mcq',
    question: 'Transition metals in their highest oxidation states are most commonly and stably found combined with',
    options: [
      'hydrogen and sulphur',
      'oxygen and fluorine, due to their high electronegativity and small size',
      'carbon and nitrogen only',
      'noble gases'
    ],
    correctIndex: 1,
    explanation: 'Because oxygen and fluorine are highly electronegative and small in size, they are particularly effective at stabilising transition metals in their highest oxidation states, as seen in compounds like MnO4- and OsO4.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-24',
    type: 'mcq',
    question: 'Among the following, which transition metal ion has an unusually positive standard reduction potential (E°, M2+/M), making the metal resistant to oxidation by dilute non-oxidising acids?',
    options: ['Zn2+/Zn', 'Fe2+/Fe', 'Cu2+/Cu', 'Mn2+/Mn'],
    correctIndex: 2,
    explanation: 'Copper has an unusually positive E°(Cu2+/Cu) value, which explains why copper does not liberate hydrogen gas from dilute non-oxidising acids like HCl, unlike most other 3d transition metals.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-25',
    type: 'mcq',
    question: 'The unusually positive standard reduction potential of copper (Cu2+/Cu) compared to other 3d transition metals is largely attributed to',
    options: [
      'its exceptionally high hydration enthalpy compared to its ionisation enthalpy',
      'the high total (sublimation + ionisation) energy required to convert Cu(s) into Cu2+(aq), which is not fully compensated by its relatively lower hydration enthalpy',
      'copper having zero d electrons',
      'copper being a non-metal'
    ],
    correctIndex: 1,
    explanation: 'For copper, the combined enthalpy of sublimation and ionisation is high, and this is not adequately offset by its hydration enthalpy, resulting in a positive (unfavourable for oxidation) standard reduction potential.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-26',
    type: 'mcq',
    question: 'Most transition metal ions are coloured in aqueous solution primarily because of',
    options: [
      'the presence of an incompletely filled d subshell, allowing d-d electronic transitions upon absorption of visible light',
      'the presence of a fully filled d subshell only',
      'the absence of any electrons at all',
      'their large ionic radii'
    ],
    correctIndex: 0,
    explanation: 'Colour in transition metal ions typically arises from d-d transitions, in which an electron is promoted from a lower-energy d orbital to a higher-energy d orbital by absorbing a specific wavelength of visible light; this requires an incompletely filled d subshell.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-27',
    type: 'mcq',
    question: 'Which of the following ions is expected to be colourless, since it has either a d0 or d10 configuration?',
    options: ['Ti3+ (d1)', 'Sc3+ (d0)', 'V3+ (d2)', 'Cr3+ (d3)'],
    correctIndex: 1,
    explanation: 'Sc3+ has a d0 configuration, meaning there are no d electrons available to undergo a d-d transition, so it is colourless, unlike ions with partially filled d subshells.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-28',
    type: 'mcq',
    question: 'Zn2+ and Cu+ ions are typically colourless in solution because they both have',
    options: ['a d1 configuration', 'a d5 configuration', 'a completely filled d10 configuration, so no d-d transition is possible', 'no electrons in the d subshell at all'],
    correctIndex: 2,
    explanation: 'Both Zn2+ and Cu+ have a fully filled d10 configuration, which means there is no vacant d orbital for an electron to transition into, so these ions are colourless.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-29',
    type: 'mcq',
    question: 'The paramagnetic behaviour of many transition metal ions is caused by the presence of',
    options: [
      'unpaired electrons in the d orbitals',
      'fully paired electrons in the d orbitals',
      'no electrons at all in the outer shell',
      'a fully filled s orbital only'
    ],
    correctIndex: 0,
    explanation: 'Paramagnetism arises from the presence of unpaired electrons, and many transition metal ions have unpaired d electrons, making them paramagnetic.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-30',
    type: 'mcq',
    question: 'The spin-only formula used to calculate the magnetic moment of a transition metal ion is',
    options: [
      'μ = n(n+2) BM',
      'μ = √(n(n+2)) BM, where n is the number of unpaired electrons',
      'μ = n/2 BM',
      'μ = 2n BM'
    ],
    correctIndex: 1,
    explanation: 'The spin-only magnetic moment is calculated using μ = √(n(n+2)) Bohr Magnetons (BM), where n represents the number of unpaired electrons present.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-31',
    type: 'mcq',
    question: 'According to the spin-only formula, an ion with a greater number of unpaired electrons will generally have a',
    options: [
      'smaller magnetic moment',
      'larger magnetic moment',
      'magnetic moment of exactly zero',
      'magnetic moment unrelated to the number of unpaired electrons'
    ],
    correctIndex: 1,
    explanation: 'Since the spin-only magnetic moment formula, μ = √(n(n+2)), increases with n, a greater number of unpaired electrons corresponds to a larger calculated magnetic moment.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-32',
    type: 'mcq',
    question: 'Transition metals and their compounds are widely used as catalysts mainly because of their',
    options: [
      'inability to form intermediate compounds',
      'variable oxidation states, which allow them to form intermediate species and provide alternative reaction pathways with lower activation energy',
      'complete absence of d orbitals',
      'very low melting points'
    ],
    correctIndex: 1,
    explanation: 'The ability of transition metals to adopt multiple oxidation states allows them to form unstable intermediates during a reaction, providing an alternative pathway of lower activation energy, which is central to their catalytic activity.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-33',
    type: 'mcq',
    question: 'In the contact process for the manufacture of sulphuric acid, the catalyst commonly used is',
    options: ['finely divided iron', 'vanadium(V) oxide (V2O5)', 'nickel', 'platinum only'],
    correctIndex: 1,
    explanation: 'Vanadium(V) oxide (V2O5) is the standard catalyst used in the contact process to catalyse the oxidation of SO2 to SO3, a key step in sulphuric acid manufacture.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-34',
    type: 'mcq',
    question: 'In the Haber process for the industrial synthesis of ammonia, the catalyst commonly used is',
    options: ['vanadium(V) oxide', 'finely divided iron', 'manganese dioxide', 'copper'],
    correctIndex: 1,
    explanation: 'Finely divided iron is used as the catalyst in the Haber process, which combines nitrogen and hydrogen gases to produce ammonia.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-35',
    type: 'mcq',
    question: 'Nickel is commonly used as a catalyst in the industrial process of',
    options: ['manufacture of sulphuric acid', 'hydrogenation of vegetable oils', 'decomposition of potassium chlorate', 'manufacture of nitric acid'],
    correctIndex: 1,
    explanation: 'Nickel is widely used as a catalyst for the hydrogenation of unsaturated vegetable oils, converting them into saturated fats.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-36',
    type: 'mcq',
    question: 'A mixture of titanium tetrachloride (TiCl4) and triethylaluminium, known as the Ziegler-Natta catalyst, is widely used in industry for',
    options: [
      'the manufacture of sulphuric acid',
      'the polymerisation of alkenes such as ethylene',
      'the decomposition of hydrogen peroxide',
      'the hydrolysis of esters'
    ],
    correctIndex: 1,
    explanation: 'The Ziegler-Natta catalyst system (TiCl4 with an aluminium alkyl compound) is extensively used to catalyse the polymerisation of alkenes, such as in the industrial production of polyethylene.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-37',
    type: 'mcq',
    question: 'Manganese dioxide (MnO2) is commonly used as a catalyst in the laboratory decomposition of',
    options: ['sodium chloride', 'potassium chlorate (KClO3), to liberate oxygen gas', 'water into hydrogen and oxygen', 'sulphuric acid'],
    correctIndex: 1,
    explanation: 'MnO2 acts as a catalyst in the thermal decomposition of potassium chlorate, speeding up the release of oxygen gas.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-38',
    type: 'mcq',
    question: 'Transition metals readily form alloys with one another mainly because',
    options: [
      'they have very different atomic sizes, preventing substitution in the crystal lattice',
      'they have similar atomic sizes, allowing one metal atom to readily substitute for another in the crystal lattice',
      'they never form solid solutions',
      'they are all radioactive'
    ],
    correctIndex: 1,
    explanation: 'Because transition metals generally have comparable atomic radii, atoms of one transition metal can readily substitute for those of another in a metallic crystal lattice, favouring the formation of alloys.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-39',
    type: 'mcq',
    question: 'Interstitial compounds formed by transition metals with small atoms such as hydrogen, carbon, or nitrogen are typically characterised by',
    options: [
      'lower melting points and reduced hardness compared to the pure metal',
      'increased hardness, higher melting points than the pure metal, and retention of metallic electrical conductivity',
      'complete loss of metallic character',
      'no change in any physical property compared to the pure metal'
    ],
    correctIndex: 1,
    explanation: 'Interstitial compounds, where small atoms occupy the empty spaces (interstitial sites) in a metal lattice, are typically harder and have higher melting points than the pure metal, while still retaining metallic conductivity.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-40',
    type: 'mcq',
    question: 'Interstitial compounds formed by transition metals are generally',
    options: [
      'stoichiometric compounds with fixed, definite composition',
      'non-stoichiometric, without a strict fixed ratio of constituent atoms',
      'always ionic compounds',
      'always gases at room temperature'
    ],
    correctIndex: 1,
    explanation: 'Interstitial compounds are typically non-stoichiometric, meaning the ratio of the small atoms to metal atoms is not fixed and can vary within a range.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-41',
    type: 'mcq',
    question: 'Transition metals show a strong tendency to form complex compounds mainly because of their',
    options: [
      'large atomic and ionic size, low ionic charge, and unavailability of d orbitals',
      'comparatively small atomic/ionic size, relatively high ionic charge, and the availability of vacant d orbitals to accept electron pairs from ligands',
      'complete inability to accept electron pairs',
      'total absence of vacant orbitals'
    ],
    correctIndex: 1,
    explanation: 'Transition metal ions favour complex formation due to their relatively small size, high charge density, and the presence of energetically accessible vacant d orbitals that can accept lone pairs donated by ligands.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-42',
    type: 'mcq',
    question: 'Potassium permanganate (KMnO4) is industrially prepared by fusion of manganese dioxide with potassium hydroxide and an oxidising agent to first give',
    options: [
      'potassium chromate (K2CrO4)',
      'potassium manganate (K2MnO4), a green compound',
      'potassium dichromate (K2Cr2O7)',
      'manganese sulphate (MnSO4)'
    ],
    correctIndex: 1,
    explanation: 'MnO2 is fused with KOH in the presence of an oxidant (such as air or KNO3) to give green potassium manganate (K2MnO4), which is then converted to purple potassium permanganate.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-43',
    type: 'mcq',
    question: 'The green potassium manganate (K2MnO4) formed during the preparation of KMnO4 is converted to permanganate (MnO4-) by',
    options: [
      'reduction with hydrogen gas',
      'disproportionation in neutral or acidic medium, or by electrolytic oxidation',
      'simple heating in an inert atmosphere',
      'reaction with sodium chloride'
    ],
    correctIndex: 1,
    explanation: 'Green manganate (MnO4^2-) disproportionates in neutral or acidic medium to give purple permanganate (MnO4-) and MnO2, or can alternatively be oxidised electrolytically to permanganate.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-44',
    type: 'mcq',
    question: 'Potassium dichromate (K2Cr2O7) is manufactured starting from which naturally occurring ore?',
    options: ['pyrolusite (MnO2)', 'chromite ore (FeCr2O4)', 'bauxite (Al2O3.xH2O)', 'haematite (Fe2O3)'],
    correctIndex: 1,
    explanation: 'K2Cr2O7 is industrially prepared starting from chromite ore (FeCr2O4), which is fused with sodium/potassium carbonate in the presence of air.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-45',
    type: 'mcq',
    question: 'In aqueous solution, the chromate ion (CrO4^2-, yellow) and dichromate ion (Cr2O7^2-, orange) exist in a pH-dependent equilibrium, in which',
    options: [
      'chromate is favoured in acidic medium and dichromate in alkaline medium',
      'chromate is favoured in alkaline medium and dichromate in acidic medium',
      'only chromate exists in solution, regardless of pH',
      'only dichromate exists in solution, regardless of pH'
    ],
    correctIndex: 1,
    explanation: 'The chromate-dichromate equilibrium is pH dependent, with the chromate ion (yellow) predominating in alkaline medium and the dichromate ion (orange) predominating in acidic medium.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-46',
    type: 'mcq',
    question: 'The structure of the dichromate ion, Cr2O7^2-, consists of',
    options: [
      'two isolated, unconnected CrO4 tetrahedra',
      'two CrO4 tetrahedra sharing one corner (oxygen atom), forming a Cr-O-Cr bridge',
      'a single octahedral CrO6 unit',
      'two CrO4 tetrahedra sharing an edge'
    ],
    correctIndex: 1,
    explanation: 'The dichromate ion is composed of two tetrahedral CrO4 units linked together by sharing one oxygen atom at a corner, forming a Cr-O-Cr bridging linkage.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-47',
    type: 'mcq',
    question: 'Both potassium permanganate and potassium dichromate are widely used in analytical and preparative chemistry primarily as',
    options: [
      'reducing agents',
      'strong oxidising agents',
      'chelating ligands',
      'inert diluents'
    ],
    correctIndex: 1,
    explanation: 'Both KMnO4 and K2Cr2O7 are well known and extensively used as strong oxidising agents in a variety of chemical reactions and titrations.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-48',
    type: 'mcq',
    question: 'The lanthanide series consists of elements with atomic numbers ranging approximately from',
    options: ['21 to 30', '39 to 48', '58 to 71 (cerium to lutetium)', '90 to 103'],
    correctIndex: 2,
    explanation: 'The lanthanide series comprises the 14 elements from cerium (atomic number 58) to lutetium (atomic number 71), corresponding to the filling of the 4f subshell.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-49',
    type: 'mcq',
    question: 'The general electronic configuration of lanthanide elements is best represented as',
    options: [
      '[Xe] 4f1-14 5d0-1 6s2',
      '[Rn] 5f1-14 6d0-2 7s2',
      '[Ar] 3d1-10 4s2',
      '[Kr] 4d1-10 5s2'
    ],
    correctIndex: 0,
    explanation: 'Lanthanides have the general electronic configuration [Xe] 4f1-14 5d0-1 6s2, reflecting the progressive filling of the 4f subshell.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-50',
    type: 'mcq',
    question: 'The most common and characteristic oxidation state shown by nearly all lanthanide elements in their compounds is',
    options: ['+1', '+2', '+3', '+4'],
    correctIndex: 2,
    explanation: 'The +3 oxidation state is by far the most common and stable oxidation state exhibited by lanthanide elements in their compounds.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-51',
    type: 'mcq',
    question: 'Cerium (Ce), among the lanthanides, is notable for also showing a stable +4 oxidation state, in which it acts as',
    options: [
      'a reducing agent, since Ce4+ is more stable than Ce3+',
      'an oxidising agent, since Ce4+ readily reverts to the more stable Ce3+ state',
      'a completely inert species with no redox activity',
      'a strong base'
    ],
    correctIndex: 1,
    explanation: 'Ce4+ acts as a useful oxidising agent in solution because it readily gets reduced to the more stable Ce3+ state, accepting an electron in the process.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-52',
    type: 'mcq',
    question: 'Europium (Eu), among the lanthanides, is notable for showing a +2 oxidation state, in which it acts predominantly as',
    options: [
      'an oxidising agent, since Eu2+ is highly stable',
      'a reducing agent, since Eu2+ is relatively unstable and readily gets oxidised back to the more common Eu3+ state',
      'a completely inert species',
      'an acid catalyst'
    ],
    correctIndex: 1,
    explanation: 'Since Eu2+ is less stable than the common Eu3+ state, it readily loses an electron to revert to Eu3+, acting as a reducing agent.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-53',
    type: 'mcq',
    question: 'The actinide series consists of elements with atomic numbers ranging approximately from',
    options: ['58 to 71', '90 to 103 (thorium to lawrencium)', '21 to 30', '39 to 48'],
    correctIndex: 1,
    explanation: 'The actinide series comprises the 14 elements from thorium (atomic number 90) to lawrencium (atomic number 103), corresponding to the filling of the 5f subshell.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-54',
    type: 'mcq',
    question: 'The general electronic configuration of actinide elements is best represented as',
    options: [
      '[Xe] 4f1-14 5d0-1 6s2',
      '[Rn] 5f1-14 6d0-2 7s2',
      '[Ar] 3d1-10 4s2',
      '[Kr] 4d1-10 5s2'
    ],
    correctIndex: 1,
    explanation: 'Actinides have the general electronic configuration [Rn] 5f1-14 6d0-2 7s2, reflecting the progressive filling of the 5f subshell.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-55',
    type: 'mcq',
    question: 'Compared to lanthanides, actinides show',
    options: [
      'a much narrower and more restricted range of oxidation states',
      'a greater range of oxidation states, since the 5f, 6d, and 7s orbitals in actinides have relatively close (comparable) energies',
      'no variable oxidation states at all',
      'exclusively negative oxidation states'
    ],
    correctIndex: 1,
    explanation: 'Because the 5f, 6d, and 7s orbitals in actinides are closer in energy than the corresponding orbitals in lanthanides, actinides display a wider range of oxidation states than lanthanides.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-56',
    type: 'mcq',
    question: 'All actinide elements share the common feature of being',
    options: [
      'completely non-reactive and chemically inert',
      'radioactive',
      'gases at room temperature',
      'exclusively found in the +2 oxidation state'
    ],
    correctIndex: 1,
    explanation: 'All actinide elements are radioactive, a defining characteristic of this series, in contrast to the largely non-radioactive lanthanide series (with a few exceptions like promethium).',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-57',
    type: 'mcq',
    question: 'Uranium, a well-studied actinide, commonly exhibits oxidation states ranging up to',
    options: ['+3 only', '+4 only', '+6, as seen in the uranyl ion (UO2^2+)', '+2 only'],
    correctIndex: 2,
    explanation: 'Uranium is known to exhibit a range of oxidation states from +3 to +6, with the +6 state being particularly common and stable, as seen in the uranyl ion UO2^2+.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-58',
    type: 'mcq',
    question: 'Actinides show a greater tendency than lanthanides to form complex compounds, largely because',
    options: [
      '5f orbitals in actinides are less effectively shielded and can participate more readily in bonding, compared to the 4f orbitals of lanthanides',
      'actinides have no d electrons at all',
      'lanthanides have larger ionic radii than actinides',
      'actinides are always found as free elements in nature'
    ],
    correctIndex: 0,
    explanation: 'Since the 5f orbitals of actinides are less well shielded from the nucleus than the 4f orbitals of lanthanides, they can participate more effectively in covalent bonding, contributing to a stronger tendency for actinides to form complexes.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-59',
    type: 'mcq',
    question: 'Similar to the lanthanide contraction, actinide elements also show a steady decrease in ionic radii across the series, known as the',
    options: ['periodic contraction', 'actinide contraction', 'nuclear contraction', 'ionic expansion'],
    correctIndex: 1,
    explanation: 'Actinides exhibit an analogous phenomenon called actinide contraction, involving a steady decrease in atomic/ionic radii across the series, similar in origin to lanthanide contraction but arising from poor shielding by 5f electrons.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-60',
    type: 'mcq',
    question: 'Brass, a widely used alloy, is composed primarily of',
    options: ['copper and tin', 'copper and zinc', 'iron and chromium', 'iron and nickel'],
    correctIndex: 1,
    explanation: 'Brass is an alloy composed primarily of copper and zinc, widely used for its favourable mechanical and corrosion-resistant properties.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-61',
    type: 'mcq',
    question: 'Bronze, another well-known alloy, is composed primarily of',
    options: ['copper and zinc', 'copper and tin', 'iron and carbon', 'nickel and cadmium'],
    correctIndex: 1,
    explanation: 'Bronze is an alloy composed primarily of copper and tin, historically significant and still used for its strength and corrosion resistance.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-62',
    type: 'mcq',
    question: 'Stainless steel, an important alloy of iron, gains its corrosion resistance mainly from the addition of',
    options: ['carbon and sulphur', 'chromium (and often nickel)', 'zinc and tin', 'lead and mercury'],
    correctIndex: 1,
    explanation: 'Stainless steel derives its corrosion resistance primarily from the addition of chromium (often along with nickel), which forms a passive protective oxide layer on the surface.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-63',
    type: 'mcq',
    question: 'Density of transition elements generally increases across a given transition series (with some irregularities) mainly because',
    options: [
      'atomic mass increases while atomic volume decreases (or remains fairly constant) across the series',
      'atomic mass decreases sharply across the series',
      'transition metals become gases towards the end of the series',
      'nuclear charge decreases across the series'
    ],
    correctIndex: 0,
    explanation: 'As atomic mass increases across a transition series while atomic volume decreases or stays relatively steady, the overall density (mass/volume) generally increases across the series.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-64',
    type: 'mcq',
    question: 'The 5d series transition metals generally have much higher densities than their 3d counterparts in the same group, largely because',
    options: [
      '5d elements have significantly smaller atomic mass than 3d elements',
      'due to lanthanide contraction, 5d elements have atomic sizes similar to 4d elements but substantially greater atomic mass, resulting in higher density',
      '5d elements are non-metals',
      'density has no relationship to atomic mass or volume'
    ],
    correctIndex: 1,
    explanation: 'Because lanthanide contraction keeps the atomic radii of 5d elements comparable to those of 4d elements despite their much greater atomic mass, 5d transition metals (like osmium and iridium) exhibit exceptionally high densities.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-65',
    type: 'mcq',
    question: 'Among all naturally occurring elements, osmium and iridium (both 5d transition metals) are notable for having',
    options: [
      'the lowest known densities',
      'among the highest known densities',
      'no measurable density at all',
      'exclusively negative oxidation states'
    ],
    correctIndex: 1,
    explanation: 'Osmium and iridium, both 5d transition metals, are known to have among the highest densities of any naturally occurring elements, a consequence of lanthanide contraction combined with high atomic mass.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-66',
    type: 'mcq',
    question: 'A transition metal ion showing an unusually irregular (more negative than expected) standard reduction potential is sometimes explained by the special stability of a',
    options: [
      'randomly chosen electronic configuration with no particular significance',
      'half-filled (d5) or fully filled (d10) d subshell in that particular ion',
      'completely empty (d0) configuration only',
      'configuration involving f electrons'
    ],
    correctIndex: 1,
    explanation: 'Ions with particularly stable electronic configurations, such as half-filled (d5, as in Mn2+) or fully filled (d10, as in Zn2+) d subshells, require extra energy to be oxidised, leading to irregularities in standard reduction potentials.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-67',
    type: 'mcq',
    question: 'A key structural/electronic distinction between lanthanides and actinides is that',
    options: [
      '4f orbitals of lanthanides are more effectively shielded and participate less in bonding, compared to the 5f orbitals of actinides',
      'lanthanides always show a wider range of oxidation states than actinides',
      'lanthanides are radioactive while actinides are not',
      'actinides have completely filled f orbitals in the ground state, unlike lanthanides'
    ],
    correctIndex: 0,
    explanation: 'The 4f orbitals of lanthanides are more compact and better shielded than the 5f orbitals of actinides, so actinide 5f electrons participate more readily in bonding, giving actinides a wider range of oxidation states and greater tendency for complex formation.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-68',
    type: 'mcq',
    question: 'Which of the following elements would NOT be classified as a transition element according to the strict IUPAC definition, despite being located in the d-block?',
    options: ['Iron (Fe)', 'Copper (Cu)', 'Zinc (Zn)', 'Chromium (Cr)'],
    correctIndex: 2,
    explanation: 'Zinc has a completely filled 3d10 configuration in both its elemental form and its common +2 oxidation state, so it does not satisfy the IUPAC definition of a transition element, unlike Fe, Cu, and Cr.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-69',
    type: 'mcq',
    question: 'The transition metal ion Cr3+ (3d3 configuration) in aqueous solution appears coloured, primarily due to',
    options: [
      'the absence of any electrons in its d orbitals',
      'd-d electronic transitions made possible by its incompletely filled d subshell',
      'its complete lack of unpaired electrons',
      'the presence of f electrons'
    ],
    correctIndex: 1,
    explanation: 'Since Cr3+ has an incompletely filled (3d3) d subshell, it can undergo d-d electronic transitions upon absorbing visible light, giving rise to its characteristic colour in solution.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-70',
    type: 'mcq',
    question: 'Overall, the chemistry of the d- and f-block elements, as emphasised in this NCERT chapter, is characterised by the interplay of',
    options: [
      'a completely fixed, invariant oxidation state for every element',
      'variable oxidation states, colour due to d-d/f-f transitions, catalytic ability, complex formation, and characteristic contraction effects (lanthanide/actinide contraction)',
      'a total absence of any metallic character',
      'exclusively gaseous elemental forms'
    ],
    correctIndex: 1,
    explanation: 'The distinctive chemistry of d- and f-block elements arises from a combination of variable oxidation states, characteristic colours from electronic transitions, strong catalytic and complex-forming tendencies, and size-contraction effects unique to these blocks.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'dfblock-71',
    type: 'assertion-reason',
    question: 'Assertion (A): Zinc, cadmium, and mercury are not classified as transition elements, even though they belong to the d-block.\nReason (R): These elements have a completely filled d10 configuration in both their elemental form and their common oxidation states, failing to meet the IUPAC criterion for transition elements.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The fully filled d10 configuration in both the ground state and common oxidation states is exactly why Zn, Cd, and Hg fail to satisfy the transition element definition, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-72',
    type: 'assertion-reason',
    question: 'Assertion (A): Transition metals generally have high melting and boiling points.\nReason (R): Both the ns and (n-1)d electrons of transition metals participate in strong interatomic metallic bonding.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The involvement of both ns and (n-1)d electrons strengthens the metallic bonding in transition metals, directly explaining their characteristically high melting and boiling points.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-73',
    type: 'assertion-reason',
    question: 'Assertion (A): Melting points of 3d transition metals generally rise to a maximum around the middle of the series and then decrease towards the end.\nReason (R): The number of unpaired d electrons available for metallic bonding decreases as pairing increases towards the end of the series.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The decreasing availability of unpaired electrons as pairing increases towards the end of the series weakens metallic bonding, correctly explaining the decline in melting points there.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-74',
    type: 'assertion-reason',
    question: 'Assertion (A): The atomic radii of transition elements decrease across a period, but the decrease becomes much smaller towards the end of the series.\nReason (R): Increasing nuclear charge across the period is progressively offset by increasing electron-electron repulsion from added d electrons.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The balance between increasing nuclear attraction and increasing electron repulsion (shielding) from added d electrons is exactly what causes the levelling off in atomic radii towards the end of the series, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-75',
    type: 'assertion-reason',
    question: 'Assertion (A): Zirconium and hafnium have nearly identical atomic radii and very similar chemical properties.\nReason (R): The lanthanide contraction compensates for the expected size increase from the 4d to the 5d transition series.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The size-compensating effect of lanthanide contraction directly explains why Zr (4d) and Hf (5d), which would otherwise be expected to differ noticeably in size, end up nearly identical, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-76',
    type: 'assertion-reason',
    question: 'Assertion (A): Chromium adopts the electronic configuration [Ar]3d5 4s1 rather than [Ar]3d4 4s2.\nReason (R): A half-filled d subshell provides extra stability due to symmetrical electron distribution and exchange energy.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The extra stability of the half-filled d5 configuration is exactly why chromium adopts this configuration in preference to the otherwise expected [Ar]3d4 4s2, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-77',
    type: 'assertion-reason',
    question: 'Assertion (A): Copper adopts the electronic configuration [Ar]3d10 4s1 rather than [Ar]3d9 4s2.\nReason (R): A fully filled d subshell (d10) has exceptional stability.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The exceptional stability of a fully filled d10 subshell is exactly why copper prefers the [Ar]3d10 4s1 configuration over the otherwise expected [Ar]3d9 4s2, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-78',
    type: 'assertion-reason',
    question: 'Assertion (A): Transition metals show a wide variety of oxidation states, often differing from each other by one unit.\nReason (R): The (n-1)d and ns orbitals of transition metals have comparable energies, allowing electrons from both to participate in bonding.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The comparable energies of the (n-1)d and ns orbitals, as described in R, directly enable the involvement of varying numbers of electrons in bonding, correctly explaining the range of oxidation states seen in A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-79',
    type: 'assertion-reason',
    question: 'Assertion (A): Manganese shows an unusually wide range of oxidation states, from +2 to +7.\nReason (R): Manganese has the highest number of unpaired 3d and 4s electrons among all 3d transition elements, allowing more electrons to participate in bonding at various oxidation levels.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Manganese, with its half-filled 3d5 configuration plus 4s2 electrons, has a total of seven valence electrons (5+2) available for various levels of participation in bonding, directly explaining its unusually wide oxidation state range.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-80',
    type: 'assertion-reason',
    question: 'Assertion (A): The highest oxidation states of transition metals are most commonly and stably found in their oxides and fluorides.\nReason (R): Oxygen and fluorine are highly electronegative and small in size, making them particularly effective at stabilising metals in high oxidation states.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The high electronegativity and small size of oxygen and fluorine, as described in R, are precisely the properties that allow these elements to effectively stabilise transition metals in their highest oxidation states, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-81',
    type: 'assertion-reason',
    question: 'Assertion (A): Copper does not liberate hydrogen gas when treated with dilute hydrochloric acid.\nReason (R): Copper has an unusually positive standard reduction potential (E°, Cu2+/Cu), making it resistant to oxidation by dilute non-oxidising acids.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The positive standard reduction potential of copper means it does not readily lose electrons to H+, directly explaining why copper cannot reduce dilute HCl to liberate hydrogen gas, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-82',
    type: 'assertion-reason',
    question: 'Assertion (A): Most transition metal ions in aqueous solution are coloured.\nReason (R): The presence of an incompletely filled d subshell allows electrons to undergo d-d transitions upon absorption of visible light.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The possibility of d-d electronic transitions in ions with an incompletely filled d subshell is exactly what gives rise to the observed colours, correctly explaining A.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-83',
    type: 'assertion-reason',
    question: 'Assertion (A): Sc3+ ions are colourless in aqueous solution.\nReason (R): Sc3+ has a d0 electronic configuration, so no d-d electronic transition is possible.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'With no d electrons present at all in Sc3+, there is no possibility of a d-d transition, correctly explaining why the ion is colourless.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-84',
    type: 'assertion-reason',
    question: 'Assertion (A): Zn2+ ions are colourless in aqueous solution.\nReason (R): Zn2+ has a fully filled 3d10 configuration, leaving no vacant d orbital for an electron to be promoted into.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Since all five d orbitals are completely filled in Zn2+, there is no vacancy for an electron to transition into, correctly explaining why Zn2+ is colourless.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-85',
    type: 'assertion-reason',
    question: 'Assertion (A): Transition metals and their compounds are widely used as catalysts.\nReason (R): Their ability to show variable oxidation states allows them to form intermediate species and provide alternative reaction pathways with lower activation energy.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The formation of intermediates via variable oxidation states, as described in R, is exactly the mechanism by which transition metals lower activation energy and thus act as effective catalysts, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-86',
    type: 'assertion-reason',
    question: 'Assertion (A): Interstitial compounds formed by transition metals with small atoms like hydrogen, carbon, or nitrogen are harder and have higher melting points than the pure metal.\nReason (R): The small atoms occupy the interstitial spaces in the metal lattice, disrupting the ease of layer slippage and increasing structural rigidity.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The disruption caused by small interstitial atoms occupying lattice spaces, restricting the movement of metal layers, is exactly why such compounds are harder and have higher melting points, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-87',
    type: 'assertion-reason',
    question: 'Assertion (A): Transition metals readily form alloys with one another.\nReason (R): Transition metals generally have quite similar atomic radii, allowing one metal to substitute for another within a common crystal lattice.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'Similar atomic sizes among transition metals, as described in R, is exactly the structural feature that enables mutual substitution and alloy formation, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-88',
    type: 'assertion-reason',
    question: 'Assertion (A): Chromate ions are the predominant species in alkaline solution, while dichromate ions predominate in acidic solution.\nReason (R): The chromate-dichromate equilibrium, 2CrO4^2- + 2H+ ⇌ Cr2O7^2- + H2O, is shifted towards dichromate as H+ concentration increases.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'According to Le Chatelier\'s principle applied to this pH-dependent equilibrium, increasing H+ concentration (acidic conditions) shifts the equilibrium towards dichromate, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-89',
    type: 'assertion-reason',
    question: 'Assertion (A): Actinides show a wider range of oxidation states than lanthanides.\nReason (R): The 5f, 6d, and 7s orbitals in actinides have relatively close (comparable) energies, allowing electrons from more than one subshell to participate in bonding.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The comparable orbital energies described in R directly allow greater flexibility in electron participation for bonding in actinides, correctly explaining the wider range of oxidation states seen in A.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-90',
    type: 'assertion-reason',
    question: 'Assertion (A): Actinides show a greater tendency than lanthanides to form complex compounds.\nReason (R): The 5f orbitals of actinides are less effectively shielded from the nucleus than the 4f orbitals of lanthanides, allowing greater participation of 5f electrons in bonding.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The reduced shielding of 5f orbitals, allowing them to engage more in bonding, is exactly why actinides show a stronger complex-forming tendency than lanthanides, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-91',
    type: 'assertion-reason',
    question: 'Assertion (A): All actinide elements are radioactive.\nReason (R): All actinide nuclei are inherently unstable, undergoing spontaneous radioactive decay.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The inherent nuclear instability described in R is exactly why every actinide element undergoes radioactive decay, correctly explaining A.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-92',
    type: 'assertion-reason',
    question: 'Assertion (A): Ce4+ is a good oxidising agent in aqueous solution.\nReason (R): Ce4+ readily gains an electron to be reduced back to the more stable Ce3+ oxidation state.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The tendency of Ce4+ to be reduced to the more stable Ce3+ state is precisely the reason it functions effectively as an oxidising agent, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-93',
    type: 'assertion-reason',
    question: 'Assertion (A): Eu2+ acts as a reducing agent in aqueous solution.\nReason (R): Eu2+ is relatively unstable compared to the more common Eu3+ state and readily loses an electron to revert to Eu3+.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The relative instability of Eu2+, which drives it to lose an electron and revert to the more stable Eu3+ state, is exactly why it acts as a reducing agent, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-94',
    type: 'assertion-reason',
    question: 'Assertion (A): Transition metals show a strong tendency to form coordination complexes.\nReason (R): They possess a comparatively small ionic size, high ionic charge, and readily available vacant d orbitals to accept electron pairs from ligands.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The combination of small size, high charge density, and accessible vacant d orbitals, as described in R, is precisely what enables transition metals to readily accept ligand electron pairs and form stable complexes, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-95',
    type: 'assertion-reason',
    question: 'Assertion (A): Osmium and iridium have among the highest densities of any known elements.\nReason (R): Lanthanide contraction keeps their atomic size comparable to lighter 4d elements, while their atomic mass is significantly greater.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The combination of a relatively small, contracted atomic size with a large atomic mass, as described in R, is exactly why these 5d metals achieve exceptionally high densities, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-96',
    type: 'assertion-reason',
    question: 'Assertion (A): The magnetic moment of a transition metal ion can be estimated using the number of unpaired electrons it possesses.\nReason (R): The spin-only formula, μ = √(n(n+2)) BM, directly relates magnetic moment to the number of unpaired electrons, n.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This precise mathematical relationship, incorporating the number of unpaired electrons, is exactly what allows the magnetic moment to be estimated from electron configuration, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-97',
    type: 'assertion-reason',
    question: 'Assertion (A): The general trend of highest oxidation state corresponding to group number holds reliably for all transition elements across the entire 3d series.\nReason (R): This trend holds reasonably well only up to manganese (group 7); beyond manganese, this simple correspondence no longer strictly applies.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — the correspondence between highest oxidation state and group number does not hold reliably for the whole series; it applies well only up to manganese. R correctly states this limitation.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-98',
    type: 'assertion-reason',
    question: 'Assertion (A): Vanadium(V) oxide is used as a catalyst in the industrial manufacture of sulphuric acid.\nReason (R): V2O5 facilitates the oxidation of sulphur dioxide to sulphur trioxide in the contact process.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The specific catalytic role of V2O5 in oxidising SO2 to SO3 during the contact process is precisely why it is used in sulphuric acid manufacture, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-99',
    type: 'assertion-reason',
    question: 'Assertion (A): Interstitial compounds formed by transition metals are generally non-stoichiometric.\nReason (R): The small atoms occupying interstitial sites in the metal lattice do not occupy a strictly fixed number of positions relative to the metal atoms, so composition can vary within a range.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The variable occupation of interstitial sites described in R is exactly why these compounds lack a fixed, definite composition, correctly explaining the non-stoichiometric nature stated in A.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-100',
    type: 'assertion-reason',
    question: 'Assertion (A): Both potassium permanganate and potassium dichromate are widely used as oxidising agents in analytical chemistry.\nReason (R): Manganese in KMnO4 and chromium in K2Cr2O7 are both in high oxidation states (+7 and +6 respectively), which readily accept electrons and get reduced during a reaction.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The high oxidation states of manganese and chromium in these compounds give them a strong tendency to be reduced (gain electrons), which is precisely the property that makes them effective oxidising agents, correctly explaining A.',
    difficulty: 'medium'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'dfblock-101',
    type: 'statement',
    question: 'Statement I: A transition element must have an incompletely filled d subshell in its ground state atom or in one of its common oxidation states.\nStatement II: All elements in the d-block satisfy this definition of a transition element without exception.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I correctly states the IUPAC definition. Statement II is incorrect — Zn, Cd, and Hg are in the d-block but do not satisfy this definition, since they have a fully filled d10 configuration.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-102',
    type: 'statement',
    question: 'Statement I: All transition elements are metals.\nStatement II: Transition metals generally have high melting and boiling points due to strong metallic bonding involving both ns and (n-1)d electrons.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe fundamental properties of transition metals.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-103',
    type: 'statement',
    question: 'Statement I: Atomic and ionic radii of transition elements decrease sharply and steadily across the entire period, similar to a p-block period.\nStatement II: The decrease in radii of transition elements levels off towards the end of the period.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the decrease in radii across a transition period is less steep than in a p-block period. Statement II correctly describes the levelling-off pattern seen towards the end of the series.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-104',
    type: 'statement',
    question: 'Statement I: Lanthanide contraction refers to the steady decrease in atomic/ionic radii of lanthanides with increasing atomic number.\nStatement II: This contraction is caused by the poor shielding effect of 4f electrons.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the phenomenon and cause of lanthanide contraction.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-105',
    type: 'statement',
    question: 'Statement I: A major consequence of lanthanide contraction is that elements of the 4d and 5d series in the same group have very similar atomic radii and properties.\nStatement II: Because of this similarity, elements such as Zr and Hf are difficult to separate chemically.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the consequences of lanthanide contraction on the properties of 4d/5d elements.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-106',
    type: 'statement',
    question: 'Statement I: Chromium\'s electronic configuration is [Ar]3d5 4s1 rather than [Ar]3d4 4s2 due to the extra stability of a half-filled d subshell.\nStatement II: Copper\'s electronic configuration is [Ar]3d10 4s1 rather than [Ar]3d9 4s2 due to the extra stability of a fully filled d subshell.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly explain these well-known exceptions to the standard electron-filling order for chromium and copper.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-107',
    type: 'statement',
    question: 'Statement I: Transition metals show variable oxidation states because the (n-1)d and ns orbitals have very different energies.\nStatement II: Transition metal oxidation states typically differ from each other by units of two, similar to p-block elements.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — the (n-1)d and ns orbitals actually have comparable (similar), not very different, energies, and transition metal oxidation states typically differ by one unit, not two (unlike the inert pair effect seen in some p-block elements).',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-108',
    type: 'statement',
    question: 'Statement I: Manganese shows an unusually wide range of oxidation states, from +2 to +7.\nStatement II: The highest oxidation state of manganese, +7, is exhibited in KMnO4.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — manganese does show this wide range of oxidation states, with +7 being its highest, as seen in potassium permanganate.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-109',
    type: 'statement',
    question: 'Statement I: The correspondence between highest oxidation state and group number holds reliably for all 3d transition elements without exception.\nStatement II: This correspondence holds reasonably well only up to manganese, after which it breaks down.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the correspondence does not hold for the entire series. Statement II correctly identifies where this trend applies and where it breaks down.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-110',
    type: 'statement',
    question: 'Statement I: Copper has a positive standard reduction potential (E°, Cu2+/Cu).\nStatement II: This is why copper does not liberate hydrogen gas from dilute non-oxidising acids.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe copper\'s electrochemical behaviour and its consequence.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-111',
    type: 'statement',
    question: 'Statement I: Colour in transition metal ions arises from d-d electronic transitions.\nStatement II: Ions with a d0 or d10 configuration are typically colourless, since no d-d transition is possible.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly explain the origin of colour in transition metal ions and the exception for d0/d10 configurations.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-112',
    type: 'statement',
    question: 'Statement I: Sc3+ is colourless because it has a d0 configuration.\nStatement II: Zn2+ is colourless because it has a d10 configuration.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly identify these classic examples of colourless transition metal ions and their respective electronic configurations.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-113',
    type: 'statement',
    question: 'Statement I: Paramagnetism in transition metal ions arises from the presence of unpaired electrons.\nStatement II: The spin-only magnetic moment formula is μ = n(n+2) BM, without a square root.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the correct spin-only formula includes a square root: μ = √(n(n+2)) BM.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-114',
    type: 'statement',
    question: 'Statement I: Transition metals and their compounds are widely used as catalysts due to their variable oxidation states.\nStatement II: Vanadium(V) oxide is used as a catalyst in the Haber process for ammonia synthesis.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — vanadium(V) oxide is used in the contact process for sulphuric acid manufacture, not the Haber process, which uses finely divided iron.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-115',
    type: 'statement',
    question: 'Statement I: Finely divided iron is used as a catalyst in the Haber process.\nStatement II: Nickel is used as a catalyst in the hydrogenation of vegetable oils.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly identify these standard industrial catalytic applications of transition metals.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-116',
    type: 'statement',
    question: 'Statement I: Interstitial compounds formed by transition metals are generally stoichiometric with a fixed, precise composition.\nStatement II: Interstitial compounds are typically harder and have higher melting points than the pure metal.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — interstitial compounds are generally non-stoichiometric. Statement II correctly describes their typical physical properties.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-117',
    type: 'statement',
    question: 'Statement I: Transition metals readily form alloys due to their similar atomic sizes.\nStatement II: Brass is an alloy of copper and tin.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — brass is an alloy of copper and zinc, not copper and tin (which is bronze).',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-118',
    type: 'statement',
    question: 'Statement I: Potassium dichromate is manufactured starting from chromite ore.\nStatement II: Potassium permanganate is manufactured starting from pyrolusite (MnO2).',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly identify the starting ores used in the industrial preparation of these two important compounds.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-119',
    type: 'statement',
    question: 'Statement I: The dichromate ion, Cr2O7^2-, consists of two CrO4 tetrahedra sharing one corner oxygen atom.\nStatement II: The chromate ion (yellow) is favoured in acidic medium, while the dichromate ion (orange) is favoured in alkaline medium.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I correctly describes the structure of the dichromate ion. Statement II is incorrect — the actual dependence is reversed: chromate predominates in alkaline medium, dichromate in acidic medium.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-120',
    type: 'statement',
    question: 'Statement I: Both KMnO4 and K2Cr2O7 are widely used as strong oxidising agents.\nStatement II: In both compounds, the transition metal is in a relatively high oxidation state, favouring reduction.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the oxidising nature of these compounds and the underlying reason (high oxidation states of Mn and Cr).',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-121',
    type: 'statement',
    question: 'Statement I: The lanthanide series consists of elements from cerium to lutetium.\nStatement II: The most common oxidation state among lanthanides is +2.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the most common and stable oxidation state among lanthanides is +3, not +2.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-122',
    type: 'statement',
    question: 'Statement I: Ce4+ acts as an oxidising agent, since it readily gets reduced to the more stable Ce3+ state.\nStatement II: Eu2+ acts as a reducing agent, since it readily gets oxidised to the more common Eu3+ state.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the redox behaviour of these two notable exceptions among the lanthanides.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-123',
    type: 'statement',
    question: 'Statement I: The actinide series consists of elements from thorium to lawrencium.\nStatement II: All actinide elements are radioactive.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct — this is the standard definition of the actinide series, and radioactivity is indeed a universal feature of all actinide elements.',
    difficulty: 'easy'
  },
  {
    id: 'dfblock-124',
    type: 'statement',
    question: 'Statement I: Actinides show a narrower range of oxidation states compared to lanthanides.\nStatement II: This is because the 5f, 6d, and 7s orbitals of actinides have widely separated energies, unlike lanthanides.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 3,
    explanation: 'Both statements are incorrect — actinides actually show a wider range of oxidation states than lanthanides, precisely because their 5f, 6d, and 7s orbitals have comparable (not widely separated) energies.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-125',
    type: 'statement',
    question: 'Statement I: Actinides show a greater tendency to form complex compounds compared to lanthanides.\nStatement II: This is attributed to the relatively poor shielding of 5f orbitals, allowing greater participation in bonding.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and logically connected, describing why actinides form complexes more readily than lanthanides.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-126',
    type: 'statement',
    question: 'Statement I: Actinide contraction is similar in nature to lanthanide contraction.\nStatement II: Actinide contraction arises from the poor shielding effect of 5f electrons, just as lanthanide contraction arises from poor shielding by 4f electrons.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct, drawing the accurate parallel between the causes of contraction in the lanthanide and actinide series.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-127',
    type: 'statement',
    question: 'Statement I: Osmium and iridium have among the highest densities of all known elements.\nStatement II: This is because lanthanide contraction keeps their atomic size comparable to lighter 4d elements while their atomic mass is much greater.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements are correct and causally connected, correctly explaining the exceptional densities of these 5d transition metals.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-128',
    type: 'statement',
    question: 'Statement I: Transition metals show a strong tendency to form complex compounds due to their small size, high charge, and availability of vacant d orbitals.\nStatement II: This complex-forming tendency has no relevance to their catalytic activity.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the ability to form complexes with reacting species is actually closely linked to catalytic activity, as it can provide a favourable reaction surface or intermediate.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-129',
    type: 'statement',
    question: 'Statement I: Density of transition elements generally increases across a series due to increasing atomic mass with relatively little change in atomic volume.\nStatement II: 5d series transition metals generally have much higher densities than their 3d counterparts in the same group.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe density trends within a series and between the 3d and 5d series.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-130',
    type: 'statement',
    question: 'Statement I: Manganese dioxide is used as a catalyst in the decomposition of potassium chlorate.\nStatement II: The Ziegler-Natta catalyst (TiCl4 with an aluminium alkyl) is used for the polymerisation of alkenes.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe these established catalytic applications of transition metal compounds.',
    difficulty: 'medium'
  },

  // ==================== HOW-MANY (20) ====================
  {
    id: 'dfblock-131',
    type: 'how-many',
    question: 'How many of the following elements are correctly classified as NOT being typical transition elements, despite belonging to the d-block?\n1. Zinc\n2. Cadmium\n3. Mercury\n4. Copper',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Zinc, cadmium, and mercury (statements 1, 2, and 3) are excluded from the transition elements due to their fully filled d10 configuration in common states. Copper (statement 4), however, is a typical transition element, since Cu2+ has an incompletely filled d9 configuration.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-132',
    type: 'how-many',
    question: 'How many of the following statements about general properties of transition elements are correct?\n1. They are all metals.\n2. They generally have high melting and boiling points.\n3. They show only one fixed oxidation state each.\n4. Many of their compounds are coloured.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — transition elements are characteristically known for showing variable, not fixed, oxidation states.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-133',
    type: 'how-many',
    question: 'How many of the following statements about lanthanide contraction are correct?\n1. It refers to the steady decrease in atomic/ionic radii across the lanthanide series.\n2. It is caused by poor shielding of nuclear charge by 4f electrons.\n3. It causes 4d and 5d elements of the same group to have very similar sizes.\n4. It results in a significant increase in atomic radii across the lanthanide series.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — lanthanide contraction refers to a decrease, not an increase, in atomic radii.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-134',
    type: 'how-many',
    question: 'How many of the following exceptions to the normal electron-filling order are correctly explained?\n1. Chromium adopts [Ar]3d5 4s1 due to the stability of a half-filled d subshell.\n2. Copper adopts [Ar]3d10 4s1 due to the stability of a fully filled d subshell.\n3. Manganese adopts [Ar]3d10 4s0 due to the stability of a fully filled d subshell.\n4. Zinc adopts [Ar]3d10 4s2, its normally expected configuration.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — manganese\'s actual configuration is [Ar]3d5 4s2, not [Ar]3d10 4s0.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-135',
    type: 'how-many',
    question: 'How many of the following statements about oxidation states of transition metals are correct?\n1. Scandium\'s most stable oxidation state is +3.\n2. Manganese shows the widest range of oxidation states among the 3d series, from +2 to +7.\n3. The highest oxidation state of Mn, +7, is seen in KMnO4.\n4. Highest oxidation states of transition metals are most stably found combined with oxygen or fluorine.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe standard facts about oxidation states of 3d transition metals.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-136',
    type: 'how-many',
    question: 'How many of the following statements about the colour of transition metal ions are correct?\n1. Colour arises due to d-d electronic transitions.\n2. Sc3+ (d0) is colourless.\n3. Zn2+ (d10) is colourless.\n4. All transition metal ions, regardless of d electron count, are always coloured.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — ions with d0 or d10 configurations are colourless, as they cannot undergo d-d transitions.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-137',
    type: 'how-many',
    question: 'How many of the following catalysts are correctly matched with their industrial or laboratory application?\n1. V2O5 — contact process for sulphuric acid\n2. Finely divided Fe — Haber process for ammonia\n3. Ni — hydrogenation of vegetable oils\n4. MnO2 — decomposition of potassium chlorate',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four catalyst-application pairs are correctly matched, representing standard and well-known catalytic applications of transition metal compounds.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-138',
    type: 'how-many',
    question: 'How many of the following statements about interstitial compounds are correct?\n1. They are formed when small atoms like H, C, or N occupy interstitial spaces in a metal lattice.\n2. They are typically harder than the pure metal.\n3. They typically have lower melting points than the pure metal.\n4. They are generally non-stoichiometric.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — interstitial compounds typically have higher, not lower, melting points than the pure metal.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-139',
    type: 'how-many',
    question: 'How many of the following alloys are correctly matched with their constituent metals?\n1. Brass — copper and zinc\n2. Bronze — copper and tin\n3. Stainless steel — iron with chromium (and often nickel)\n4. Amalgam — copper and mercury only, exclusively',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correctly matched. Statement 4 is misleading/false as an absolute claim — an amalgam is any alloy of mercury with another metal, not exclusively copper.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-140',
    type: 'how-many',
    question: 'How many of the following statements about potassium permanganate (KMnO4) are correct?\n1. It is prepared industrially starting from pyrolusite (MnO2).\n2. Manganese in KMnO4 is in the +7 oxidation state.\n3. Green potassium manganate is an intermediate formed during its preparation.\n4. KMnO4 acts as a reducing agent in most reactions.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — KMnO4 is well known as a strong oxidising agent, not a reducing agent.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-141',
    type: 'how-many',
    question: 'How many of the following statements about potassium dichromate (K2Cr2O7) are correct?\n1. It is prepared industrially starting from chromite ore.\n2. The dichromate ion consists of two CrO4 tetrahedra sharing a corner oxygen.\n3. Chromate ion predominates in acidic medium.\n4. K2Cr2O7 acts as a strong oxidising agent in acidic medium.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — chromate predominates in alkaline medium, while dichromate predominates in acidic medium.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-142',
    type: 'how-many',
    question: 'How many of the following statements about lanthanides are correct?\n1. The most common oxidation state is +3.\n2. Ce4+ acts as an oxidising agent.\n3. Eu2+ acts as a reducing agent.\n4. Lanthanides have the general configuration [Rn]5f1-14 6d0-2 7s2.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — this configuration describes actinides, not lanthanides; lanthanides have the general configuration [Xe]4f1-14 5d0-1 6s2.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-143',
    type: 'how-many',
    question: 'How many of the following statements about actinides are correct?\n1. All actinides are radioactive.\n2. Actinides show a wider range of oxidation states than lanthanides.\n3. Actinides show a greater tendency to form complexes than lanthanides.\n4. Actinide contraction is caused by poor shielding of 5f electrons.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe standard, well-established features of the actinide series.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-144',
    type: 'how-many',
    question: 'How many of the following statements about the density and size of transition elements are correct?\n1. Density generally increases across a transition series due to increasing atomic mass and relatively constant/decreasing atomic volume.\n2. Osmium and iridium have among the highest densities of all elements.\n3. 5d elements have much higher densities than 3d elements in the same group due to lanthanide contraction combined with greater atomic mass.\n4. Density of transition elements is completely unrelated to atomic mass or atomic volume.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — density is directly determined by the ratio of atomic mass to atomic volume.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-145',
    type: 'how-many',
    question: 'How many of the following statements about magnetic properties of transition metal ions are correct?\n1. Paramagnetism arises due to the presence of unpaired electrons.\n2. The spin-only magnetic moment formula is μ = √(n(n+2)) BM.\n3. A greater number of unpaired electrons corresponds to a larger magnetic moment.\n4. Ions with all paired electrons are typically paramagnetic.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — ions with all electrons paired are diamagnetic, not paramagnetic.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-146',
    type: 'how-many',
    question: 'How many of the following statements about why transition metals form complexes readily are correct?\n1. They have relatively small ionic sizes.\n2. They have relatively high ionic charges.\n3. They have vacant d orbitals available to accept electron pairs from ligands.\n4. They have no ability to interact with ligand lone pairs at all.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct reasons for the strong complex-forming tendency of transition metals. Statement 4 is false and directly contradicts this tendency.',
    difficulty: 'medium'
  },
  {
    id: 'dfblock-147',
    type: 'how-many',
    question: 'How many of the following statements about ionisation enthalpy trends in the 3d series are correct?\n1. Ionisation enthalpy generally increases across the series.\n2. The increase is steeper than that seen across a typical p-block period.\n3. There are certain irregularities in the trend due to stable half-filled/fully-filled configurations.\n4. Ionisation enthalpy decreases sharply and continuously across the entire series.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 1,
    explanation: 'Statements 1 and 3 are correct. Statement 2 is false — the increase across a transition series is generally less steep than across a p-block period. Statement 4 is false, since the general trend is an increase, not a decrease.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-148',
    type: 'how-many',
    question: 'How many of the following statements about standard reduction potentials of 3d metal ions (M2+/M) are correct?\n1. Copper has an unusually positive E° value.\n2. This is related to the high combined sublimation and ionisation energy of copper, not fully compensated by its hydration enthalpy.\n3. Manganese and zinc show some irregularities in E° due to the stability of half-filled and fully-filled d configurations, respectively.\n4. E° values are completely unrelated to sublimation, ionisation, or hydration enthalpies.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — E° values are, in fact, directly related to the sum of sublimation, ionisation, and hydration enthalpies through the Born-Haber-type thermodynamic cycle.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-149',
    type: 'how-many',
    question: 'How many of the following statements comparing lanthanides and actinides are correct?\n1. Both series show a characteristic contraction in ionic radii with increasing atomic number.\n2. Actinides generally show a wider range of oxidation states than lanthanides.\n3. Lanthanides are generally non-radioactive (with a few exceptions), while all actinides are radioactive.\n4. Lanthanides have a greater tendency to form complexes than actinides.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — it is actinides, not lanthanides, that show the greater tendency to form complex compounds.',
    difficulty: 'hard'
  },
  {
    id: 'dfblock-150',
    type: 'how-many',
    question: 'How many of the following statements correctly summarise key themes of the d- and f-block elements chapter?\n1. Transition elements are defined by an incompletely filled d subshell in the atom or a common oxidation state.\n2. Variable oxidation states, colour, catalytic activity, and complex formation are hallmark properties of transition metals.\n3. Lanthanide and actinide contractions are important structural effects influencing periodic trends.\n4. All d-block elements without exception are classified as transition elements.\n5. Actinides generally show a greater range of oxidation states and complex-forming ability than lanthanides.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, 3, and 5 correctly summarise major themes of the chapter. Statement 4 is false, since Zn, Cd, and Hg are notable exceptions within the d-block that are not classified as transition elements.',
    difficulty: 'medium'
  }
];
>>>>>>> 9e6ae6a5ea2181b313543ecdc8c39b664ed24496
