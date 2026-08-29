export const RAY_OPTICS_OPTICAL_INSTRUMENTS = [
  // ==================== MCQ (70) ====================
  {
    id: 'rayoptics-1',
    type: 'mcq',
    question: 'According to the Cartesian sign convention used for spherical mirrors and lenses, distances are measured',
    options: [
      'from the pole (or optical centre), with distances in the direction of the incident light taken as positive',
      'from the focal point only, regardless of direction',
      'from the observer\'s eye, regardless of the position of the mirror or lens',
      'in a manner that makes all distances always positive'
    ],
    correctIndex: 0,
    explanation: 'The Cartesian sign convention measures all distances from the pole (for mirrors) or optical centre (for lenses), with distances measured in the direction of incident light taken as positive.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-2',
    type: 'mcq',
    question: 'The mirror formula relating object distance (u), image distance (v), and focal length (f) is',
    options: ['1/v + 1/u = 1/f', '1/v - 1/u = 1/f', 'v + u = f', 'v × u = f'],
    correctIndex: 0,
    explanation: 'The mirror formula is 1/v + 1/u = 1/f, applicable to both concave and convex spherical mirrors when the sign convention is applied consistently.',
    difficulty: 'easy'
  },
  {
    id: 'rayoptics-3',
    type: 'mcq',
    question: 'The focal length of a spherical mirror is related to its radius of curvature (R) by',
    options: ['f = R', 'f = R/2', 'f = 2R', 'f = R^2'],
    correctIndex: 1,
    explanation: 'For a spherical mirror, the focal length is half the radius of curvature, f = R/2, a relation derivable using the paraxial ray approximation.',
    difficulty: 'easy'
  },
  {
    id: 'rayoptics-4',
    type: 'mcq',
    question: 'A convex mirror, regardless of the position of the object in front of it, always forms an image that is',
    options: [
      'real, inverted, and enlarged',
      'virtual, erect, and diminished',
      'real, erect, and diminished',
      'virtual, inverted, and enlarged'
    ],
    correctIndex: 1,
    explanation: 'A convex mirror always produces a virtual, erect, and diminished image for any object position, which is why it is used in vehicle side mirrors to provide a wider field of view.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-5',
    type: 'mcq',
    question: 'A concave mirror produces a virtual, erect, and magnified image when the object is placed',
    options: [
      'beyond the centre of curvature',
      'exactly at the centre of curvature',
      'between the pole and the focal point',
      'exactly at the focal point'
    ],
    correctIndex: 2,
    explanation: 'When an object is placed between the pole and the focal point of a concave mirror, the mirror produces a virtual, erect, and magnified image, as used in shaving/makeup mirrors.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-6',
    type: 'mcq',
    question: 'Convex mirrors are commonly used as rear-view/side mirrors in vehicles mainly because they',
    options: [
      'always form a real, magnified image',
      'provide a wider field of view due to their diverging nature, though the image is diminished',
      'have a longer focal length than any concave mirror',
      'cannot form any image at all'
    ],
    correctIndex: 1,
    explanation: 'Because a convex mirror diverges reflected rays, it provides a much wider field of view than a plane or concave mirror of the same size, even though the resulting image is diminished.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-7',
    type: 'mcq',
    question: 'Snell\'s law of refraction relates the angle of incidence (θ1) and angle of refraction (θ2) at a boundary between two media through',
    options: [
      'n1 sin θ1 = n2 sin θ2',
      'n1 cos θ1 = n2 cos θ2',
      'n1 θ1 = n2 θ2',
      'n1/θ1 = n2/θ2'
    ],
    correctIndex: 0,
    explanation: 'Snell\'s law states that n1 sin θ1 = n2 sin θ2, relating the refractive indices of the two media to the angles of incidence and refraction.',
    difficulty: 'easy'
  },
  {
    id: 'rayoptics-8',
    type: 'mcq',
    question: 'The refractive index of a medium is defined as the ratio of the',
    options: [
      'speed of light in the medium to the speed of light in vacuum',
      'speed of light in vacuum to the speed of light in the medium',
      'wavelength of light in vacuum to its wavelength in the medium only, unrelated to speed',
      'frequency of light in the medium to its frequency in vacuum'
    ],
    correctIndex: 1,
    explanation: 'The (absolute) refractive index of a medium is defined as n = c/v, the ratio of the speed of light in vacuum to its speed in that medium.',
    difficulty: 'easy'
  },
  {
    id: 'rayoptics-9',
    type: 'mcq',
    question: 'When light travels from a rarer medium into a denser medium, it bends',
    options: [
      'away from the normal',
      'towards the normal',
      'exactly along the normal, with no bending',
      'in a direction unrelated to the normal'
    ],
    correctIndex: 1,
    explanation: 'On entering a denser medium (where light travels more slowly), the refracted ray bends towards the normal, consistent with Snell\'s law.',
    difficulty: 'easy'
  },
  {
    id: 'rayoptics-10',
    type: 'mcq',
    question: 'The thin lens formula relating object distance (u), image distance (v), and focal length (f) is',
    options: ['1/v - 1/u = 1/f', '1/v + 1/u = 1/f', 'v - u = f', 'v/u = f'],
    correctIndex: 0,
    explanation: 'The thin lens formula is 1/v - 1/u = 1/f, applicable to both converging and diverging thin lenses under the Cartesian sign convention.',
    difficulty: 'easy'
  },
  {
    id: 'rayoptics-11',
    type: 'mcq',
    question: 'The lens maker\'s formula relates the focal length of a thin lens to the radii of curvature of its two surfaces and the',
    options: [
      'refractive index of the lens material relative to the surrounding medium',
      'thickness of the lens only, with no dependence on refractive index',
      'colour of the light source used',
      'distance of the observer from the lens'
    ],
    correctIndex: 0,
    explanation: 'The lens maker\'s formula, 1/f = (n21 - 1)(1/R1 - 1/R2), relates focal length to the relative refractive index of the lens material and the curvatures of its two surfaces.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-12',
    type: 'mcq',
    question: 'The power of a lens is defined as',
    options: [
      'the square of its focal length',
      'the reciprocal of its focal length (measured in metres), giving power in dioptres',
      'the product of its focal length and refractive index',
      'always a negative quantity regardless of lens type'
    ],
    correctIndex: 1,
    explanation: 'Power of a lens is defined as P = 1/f, with focal length measured in metres, giving power in units of dioptres (D).',
    difficulty: 'easy'
  },
  {
    id: 'rayoptics-13',
    type: 'mcq',
    question: 'A converging (convex) lens has',
    options: ['negative power', 'positive power', 'zero power always', 'power that depends only on its colour'],
    correctIndex: 1,
    explanation: 'By convention, a converging (convex) lens has a positive focal length and therefore positive power.',
    difficulty: 'easy'
  },
  {
    id: 'rayoptics-14',
    type: 'mcq',
    question: 'A diverging (concave) lens has',
    options: ['positive power', 'negative power', 'infinite power always', 'power that cannot be defined'],
    correctIndex: 1,
    explanation: 'By convention, a diverging (concave) lens has a negative focal length and therefore negative power.',
    difficulty: 'easy'
  },
  {
    id: 'rayoptics-15',
    type: 'mcq',
    question: 'When two thin lenses are placed in close contact, the power of the combination is given by',
    options: [
      'the sum of the individual powers, P = P1 + P2',
      'the difference of the individual powers only',
      'the product of the individual powers',
      'always equal to zero, regardless of the individual lens powers'
    ],
    correctIndex: 0,
    explanation: 'For thin lenses in contact, the powers simply add algebraically: P = P1 + P2 + ..., which follows directly from the additive nature of 1/f for lenses in contact.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-16',
    type: 'mcq',
    question: 'Total internal reflection can occur only when light travels from',
    options: [
      'a rarer medium into a denser medium',
      'a denser medium into a rarer medium, with the angle of incidence exceeding the critical angle',
      'any medium into vacuum, regardless of angle',
      'a medium into an identical medium'
    ],
    correctIndex: 1,
    explanation: 'Total internal reflection occurs specifically when light travels from a denser medium into a rarer medium and the angle of incidence exceeds the critical angle for that pair of media.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-17',
    type: 'mcq',
    question: 'The critical angle is defined as the angle of incidence (in the denser medium) for which the',
    options: [
      'angle of refraction becomes exactly 90°',
      'angle of refraction becomes exactly 0°',
      'reflected ray disappears completely',
      'refracted ray travels back into the denser medium'
    ],
    correctIndex: 0,
    explanation: 'The critical angle is the specific angle of incidence in the denser medium at which the refracted ray grazes along the boundary, making the angle of refraction exactly 90°.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-18',
    type: 'mcq',
    question: 'For angles of incidence greater than the critical angle, light incident at a denser-rarer boundary from the denser side',
    options: [
      'is completely refracted into the rarer medium',
      'undergoes total internal reflection, with no refracted ray transmitted into the rarer medium',
      'is completely absorbed by the boundary',
      'travels straight through with no change in direction'
    ],
    correctIndex: 1,
    explanation: 'Beyond the critical angle, no refraction occurs at all; the light is completely (totally) internally reflected back into the denser medium.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-19',
    type: 'mcq',
    question: 'Optical fibres used in communication and medical instruments (such as endoscopes) work on the principle of',
    options: [
      'partial reflection at the outer surface',
      'total internal reflection, guiding light along the fibre through repeated internal reflections',
      'diffraction of light around obstacles',
      'polarisation of light'
    ],
    correctIndex: 1,
    explanation: 'Optical fibres guide light along their length through repeated total internal reflection at the core-cladding boundary, allowing efficient transmission with minimal loss.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-20',
    type: 'mcq',
    question: 'The optical mirage phenomenon observed on hot roads is explained by',
    options: [
      'diffraction of light by dust particles',
      'total internal reflection occurring at the boundary between layers of air of different densities (and hence different refractive indices) near the hot surface',
      'polarisation of sunlight',
      'the Doppler effect'
    ],
    correctIndex: 1,
    explanation: 'Mirages occur because air near a hot surface is less dense (lower refractive index) than the air above it, and light travelling through these varying layers can undergo total internal reflection, creating the illusion of a water-like reflection.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-21',
    type: 'mcq',
    question: 'The brilliant sparkle of a well-cut diamond is largely due to',
    options: [
      'its extremely low refractive index',
      'its very high refractive index, causing light entering the diamond to undergo total internal reflection multiple times before emerging',
      'the diamond\'s natural colour',
      'the diamond absorbing and re-emitting light at a different wavelength'
    ],
    correctIndex: 1,
    explanation: 'Diamond has an unusually high refractive index, giving it a small critical angle, which causes light entering the stone to undergo multiple total internal reflections before finally emerging, producing its characteristic sparkle.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-22',
    type: 'mcq',
    question: 'Totally reflecting prisms (such as 45°-45°-90° prisms) are often preferred over ordinary silvered mirrors in optical instruments like binoculars and periscopes because',
    options: [
      'they are always cheaper to manufacture than mirrors',
      'total internal reflection provides a more complete reflection with less loss of light intensity, unlike partial absorption that can occur at a silvered surface',
      'they cannot form any image at all',
      'they require the incident light to be polarised'
    ],
    correctIndex: 1,
    explanation: 'Total internal reflection inside a prism reflects essentially all of the incident light with minimal loss, whereas a silvered mirror surface can absorb a small fraction of the light, making prisms advantageous in some optical instruments.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-23',
    type: 'mcq',
    question: 'The angle of deviation produced by a prism generally depends on the angle of incidence and reaches a minimum value when',
    options: [
      'the light ray passes through the prism symmetrically, i.e., the angle of incidence equals the angle of emergence',
      'the light ray grazes along the prism surface',
      'the angle of incidence is exactly 0°',
      'the prism angle is exactly 90°'
    ],
    correctIndex: 0,
    explanation: 'The angle of deviation through a prism reaches its minimum value specifically when the ray passes symmetrically through the prism, with equal angles of incidence and emergence.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-24',
    type: 'mcq',
    question: 'The refractive index of a prism material can be determined from the prism angle (A) and the angle of minimum deviation (δm) using the relation',
    options: [
      'n = sin[(A + δm)/2] / sin(A/2)',
      'n = sin(A) / sin(δm)',
      'n = A / δm',
      'n = sin(A + δm) / sin(A)'
    ],
    correctIndex: 0,
    explanation: 'The refractive index of the prism material is related to the prism angle and the angle of minimum deviation by n = sin[(A + δm)/2] / sin(A/2).',
    difficulty: 'hard'
  },
  {
    id: 'rayoptics-25',
    type: 'mcq',
    question: 'Dispersion of light by a prism occurs because the refractive index of the prism material',
    options: [
      'is exactly the same for all wavelengths of light',
      'varies with the wavelength of light, causing different colours to be refracted (and hence deviated) by different amounts',
      'is undefined for visible light',
      'depends only on the angle of the prism, not on wavelength'
    ],
    correctIndex: 1,
    explanation: 'Dispersion arises because the refractive index of the prism material varies with wavelength, so each colour of light is deviated by a different amount as it passes through the prism.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-26',
    type: 'mcq',
    question: 'In the dispersion of white light by a glass prism (normal dispersion), violet light is deviated',
    options: [
      'the least of all the visible colours',
      'the most of all the visible colours, since glass typically has the highest refractive index for violet light among visible wavelengths',
      'exactly the same amount as red light',
      'in the opposite direction to red light'
    ],
    correctIndex: 1,
    explanation: 'In normal dispersion, since the refractive index generally increases as wavelength decreases, violet light (shortest visible wavelength) is deviated the most, while red light (longest visible wavelength) is deviated the least.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-27',
    type: 'mcq',
    question: 'Angular dispersion produced by a prism is defined as the',
    options: [
      'total deviation of the mean (average) colour only',
      'difference in the angles of deviation for the two extreme colours of the visible spectrum (typically violet and red)',
      'sum of all deviations of every colour in the spectrum',
      'angle of the prism itself'
    ],
    correctIndex: 1,
    explanation: 'Angular dispersion refers to the difference between the deviations experienced by the two extreme colours (violet and red) as they pass through the prism.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-28',
    type: 'mcq',
    question: 'A primary rainbow is formed in the sky due to sunlight undergoing, within each spherical raindrop,',
    options: [
      'refraction only, with no reflection at all',
      'refraction, followed by one internal reflection, followed by further refraction as the light exits the drop',
      'two internal reflections',
      'diffraction only'
    ],
    correctIndex: 1,
    explanation: 'A primary rainbow forms due to sunlight undergoing refraction upon entering a raindrop, one internal reflection inside the drop, and further refraction as it exits, combined with dispersion.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-29',
    type: 'mcq',
    question: 'A secondary rainbow, which appears fainter and with reversed colour order compared to the primary rainbow, is formed due to',
    options: [
      'exactly the same single internal reflection as the primary rainbow',
      'two internal reflections within the raindrop, with the additional reflection causing greater intensity loss (hence the fainter appearance) and colour reversal',
      'no reflection at all, only refraction',
      'the raindrops being a different colour than those forming the primary rainbow'
    ],
    correctIndex: 1,
    explanation: 'The secondary rainbow results from light undergoing two internal reflections within the raindrop rather than one; this additional reflection causes greater light loss (making it fainter) and reverses the order of colours compared to the primary rainbow.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-30',
    type: 'mcq',
    question: 'The blue colour of the clear daytime sky is primarily explained by',
    options: [
      'absorption of blue light by atmospheric gases',
      'Rayleigh scattering, in which shorter wavelengths (blue) are scattered more strongly than longer wavelengths (red) by atmospheric molecules',
      'reflection of blue light from the ocean',
      'the blue colour of sunlight itself, unaltered by the atmosphere'
    ],
    correctIndex: 1,
    explanation: 'Rayleigh scattering causes shorter wavelengths (blue/violet) to be scattered much more strongly than longer wavelengths (red) by atmospheric gas molecules, giving the sky its blue appearance during the day.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-31',
    type: 'mcq',
    question: 'According to Rayleigh\'s scattering law, the intensity of scattered light is generally proportional to',
    options: [
      'the wavelength of light directly, with no inverse relationship',
      'the inverse fourth power of the wavelength (1/λ^4)',
      'the square of the wavelength',
      'a constant, independent of wavelength'
    ],
    correctIndex: 1,
    explanation: 'Rayleigh scattering intensity varies as the inverse fourth power of wavelength, meaning shorter wavelengths are scattered much more strongly than longer wavelengths.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-32',
    type: 'mcq',
    question: 'The reddish appearance of the sun at sunrise and sunset is explained by the fact that, at these times,',
    options: [
      'sunlight travels through a much shorter path in the atmosphere than at midday',
      'sunlight travels through a much longer path in the atmosphere, scattering away most of the shorter (blue) wavelengths and leaving mostly longer (red) wavelengths to reach the observer directly',
      'the sun itself emits only red light at these times',
      'the atmosphere absorbs all colours except red'
    ],
    correctIndex: 1,
    explanation: 'At sunrise and sunset, sunlight travels a much longer path through the atmosphere, causing most of the shorter (blue) wavelengths to be scattered away, so mostly the longer (red) wavelengths reach the observer directly, giving the sun its reddish appearance.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-33',
    type: 'mcq',
    question: 'In the human eye, the transparent front part of the eye through which light first enters is called the',
    options: ['retina', 'cornea', 'iris', 'ciliary muscle'],
    correctIndex: 1,
    explanation: 'The cornea is the transparent front part of the eye, through which light first enters and undergoes most of its initial refraction.',
    difficulty: 'easy'
  },
  {
    id: 'rayoptics-34',
    type: 'mcq',
    question: 'The coloured diaphragm of the eye that controls the size of the pupil (and hence the amount of light entering) is called the',
    options: ['cornea', 'retina', 'iris', 'lens'],
    correctIndex: 2,
    explanation: 'The iris is the coloured diaphragm that adjusts the size of the pupil, controlling the amount of light entering the eye.',
    difficulty: 'easy'
  },
  {
    id: 'rayoptics-35',
    type: 'mcq',
    question: 'The light-sensitive layer at the back of the eye, where a real, inverted image is formed, is called the',
    options: ['cornea', 'iris', 'retina', 'aqueous humour'],
    correctIndex: 2,
    explanation: 'The retina is the light-sensitive layer at the back of the eye, and it is here that the crystalline lens forms a real, inverted image.',
    difficulty: 'easy'
  },
  {
    id: 'rayoptics-36',
    type: 'mcq',
    question: 'The ability of the eye lens to adjust its focal length so as to focus on objects at varying distances is called',
    options: ['dispersion', 'accommodation', 'total internal reflection', 'polarisation'],
    correctIndex: 1,
    explanation: 'Accommodation refers to the eye\'s ability to change the curvature (and hence focal length) of its crystalline lens, allowing it to focus on objects at different distances.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-37',
    type: 'mcq',
    question: 'The least distance of distinct vision (near point) for a normal, healthy adult human eye is generally taken to be about',
    options: ['1 cm', '25 cm', '2.5 m', 'infinity'],
    correctIndex: 1,
    explanation: 'The conventional near point (least distance of distinct vision) for a normal eye is taken to be approximately 25 cm.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-38',
    type: 'mcq',
    question: 'Myopia (short-sightedness/near-sightedness) is a defect of vision in which',
    options: [
      'distant objects appear blurred, since the image is formed in front of the retina',
      'near objects appear blurred, since the image is formed behind the retina',
      'the eye cannot see any colour except red',
      'the eye has no near point at all'
    ],
    correctIndex: 0,
    explanation: 'In myopia, the image of a distant object is formed in front of the retina (rather than exactly on it), commonly due to elongation of the eyeball or excessive curvature of the lens, causing distant objects to appear blurred.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-39',
    type: 'mcq',
    question: 'Myopia is corrected using a',
    options: [
      'converging (convex) lens',
      'diverging (concave) lens, which diverges incoming rays slightly before they reach the eye, moving the focus back onto the retina',
      'plano lens with zero power',
      'cylindrical lens'
    ],
    correctIndex: 1,
    explanation: 'A diverging (concave) lens is used to correct myopia, since it slightly diverges the incoming rays before they reach the eye\'s own lens, shifting the point of focus back onto the retina.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-40',
    type: 'mcq',
    question: 'Hypermetropia (long-sightedness/far-sightedness) is a defect of vision in which',
    options: [
      'distant objects appear blurred',
      'near objects appear blurred, since the image is formed behind the retina',
      'both near and far objects appear equally blurred at all times, with no exceptions',
      'the eye sees everything in only shades of grey'
    ],
    correctIndex: 1,
    explanation: 'In hypermetropia, the image of a nearby object tends to form behind the retina, commonly due to a shortened eyeball or reduced curvature of the lens, causing near objects to appear blurred.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-41',
    type: 'mcq',
    question: 'Hypermetropia is corrected using a',
    options: [
      'diverging (concave) lens',
      'converging (convex) lens, which helps converge the incoming rays slightly before they reach the eye, moving the focus forward onto the retina',
      'lens with zero power',
      'mirror instead of a lens'
    ],
    correctIndex: 1,
    explanation: 'A converging (convex) lens is used to correct hypermetropia, helping to focus the image correctly onto the retina rather than behind it.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-42',
    type: 'mcq',
    question: 'Presbyopia is an age-related vision defect caused by',
    options: [
      'a sudden infection of the eye',
      'a gradual loss of the eye\'s power of accommodation, as the ciliary muscles weaken and the lens loses flexibility with age',
      'excessive exposure to bright light',
      'a congenital abnormality present from birth only'
    ],
    correctIndex: 1,
    explanation: 'Presbyopia results from the natural, age-related weakening of the ciliary muscles and reduced flexibility of the crystalline lens, diminishing the eye\'s ability to accommodate for both near and far vision.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-43',
    type: 'mcq',
    question: 'Presbyopia is often corrected using',
    options: [
      'a single simple convex lens only',
      'bifocal lenses, which combine both converging and diverging sections to assist with both near and far vision',
      'a single simple concave lens only',
      'no correction is possible for presbyopia'
    ],
    correctIndex: 1,
    explanation: 'Since presbyopia often affects both near and distant vision as accommodation declines with age, bifocal lenses (combining convex and concave sections) are commonly used for correction.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-44',
    type: 'mcq',
    question: 'Astigmatism is a defect of vision caused by',
    options: [
      'the cornea (or lens) not being perfectly spherical, resulting in different focal lengths in different planes',
      'complete opacity of the lens',
      'excessive length of the eyeball only',
      'a defect that affects colour perception exclusively'
    ],
    correctIndex: 0,
    explanation: 'Astigmatism arises when the cornea or lens is not perfectly spherical, causing light in different planes to focus at different points, resulting in blurred or distorted vision.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-45',
    type: 'mcq',
    question: 'Astigmatism is typically corrected using',
    options: [
      'a simple spherical convex lens',
      'a cylindrical lens, designed to compensate for the unequal curvature in different planes',
      'no lens at all; only surgery can correct astigmatism',
      'a mirror rather than a lens'
    ],
    correctIndex: 1,
    explanation: 'Cylindrical lenses are used to correct astigmatism, since they can selectively adjust the focusing power in the specific plane where the irregular curvature exists.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-46',
    type: 'mcq',
    question: 'A simple microscope (magnifying glass) achieves magnification by',
    options: [
      'using two separate lenses working together',
      'placing the object within the focal length of a single converging lens, so that a virtual, magnified, erect image is formed',
      'using a concave mirror only',
      'using total internal reflection'
    ],
    correctIndex: 1,
    explanation: 'A simple microscope uses a single converging lens, with the object placed within its focal length, producing a virtual, erect, and magnified image.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-47',
    type: 'mcq',
    question: 'The angular magnification of a simple microscope, when the final image is formed at infinity, is given by',
    options: ['m = D/f, where D is the least distance of distinct vision and f is the focal length of the lens', 'm = f/D', 'm = D × f', 'm = f - D'],
    correctIndex: 0,
    explanation: 'When the image is viewed at infinity (relaxed eye), the angular magnification of a simple microscope is given by m = D/f.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-48',
    type: 'mcq',
    question: 'The angular magnification of a simple microscope, when the final image is formed at the near point (D), is given by',
    options: ['m = D/f', 'm = 1 + D/f', 'm = f/D only, with no added term', 'm = f - D'],
    correctIndex: 1,
    explanation: 'When the final image is formed at the near point, the angular magnification of a simple microscope is given by m = 1 + D/f, slightly greater than the value obtained for image at infinity.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-49',
    type: 'mcq',
    question: 'A compound microscope consists of two converging lenses, generally referred to as the',
    options: [
      'objective (short focal length, closer to the object) and eyepiece (larger focal length, closer to the eye)',
      'primary lens and secondary lens, both of equal focal length',
      'concave lens and convex lens, in that specific order',
      'field lens and correcting lens'
    ],
    correctIndex: 0,
    explanation: 'A compound microscope uses an objective lens (short focal length, positioned near the object) and an eyepiece (larger focal length, positioned near the observer\'s eye) working together to achieve high magnification.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-50',
    type: 'mcq',
    question: 'The overall magnifying power of a compound microscope is obtained as',
    options: [
      'the sum of the magnifications produced by the objective and the eyepiece',
      'the product of the magnification produced by the objective and the angular magnification produced by the eyepiece',
      'simply the magnification of the objective lens alone, ignoring the eyepiece',
      'simply the magnification of the eyepiece alone, ignoring the objective'
    ],
    correctIndex: 1,
    explanation: 'The total magnifying power of a compound microscope is the product of the linear magnification produced by the objective lens and the angular magnification produced by the eyepiece.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-51',
    type: 'mcq',
    question: 'In an astronomical (refracting) telescope adjusted for normal use (final image at infinity), the magnifying power is given by',
    options: [
      'm = fo/fe, the ratio of the focal length of the objective to that of the eyepiece',
      'm = fe/fo',
      'm = fo + fe',
      'm = fo × fe'
    ],
    correctIndex: 0,
    explanation: 'For an astronomical telescope in normal adjustment, the angular magnification is given by the ratio of the objective\'s focal length to the eyepiece\'s focal length, m = fo/fe.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-52',
    type: 'mcq',
    question: 'To achieve a high magnifying power in an astronomical telescope (in normal adjustment), the design generally favours',
    options: [
      'a small focal length for the objective and a large focal length for the eyepiece',
      'a large focal length for the objective and a small focal length for the eyepiece',
      'equal focal lengths for both the objective and the eyepiece',
      'a telescope with no eyepiece at all'
    ],
    correctIndex: 1,
    explanation: 'Since magnifying power is fo/fe, a large objective focal length combined with a small eyepiece focal length gives a higher magnifying power.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-53',
    type: 'mcq',
    question: 'A reflecting telescope uses which of the following as its objective, instead of a large lens?',
    options: ['a plane mirror', 'a concave (typically parabolic) mirror', 'a diverging lens', 'a prism'],
    correctIndex: 1,
    explanation: 'A reflecting telescope uses a large concave (often parabolic) mirror as its objective, in place of the large converging lens used in a refracting telescope.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-54',
    type: 'mcq',
    question: 'A major advantage of reflecting telescopes over refracting telescopes is that reflecting telescopes',
    options: [
      'suffer from more chromatic aberration',
      'are free from chromatic aberration, since mirrors do not disperse different colours of light the way a lens does',
      'cannot collect any significant amount of light',
      'require no mirrors or lenses at all'
    ],
    correctIndex: 1,
    explanation: 'Since a mirror reflects all colours of light identically (unlike a lens, which refracts different wavelengths by different amounts), reflecting telescopes do not suffer from chromatic aberration.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-55',
    type: 'mcq',
    question: 'Another practical advantage of reflecting telescopes over refracting telescopes is that large mirrors',
    options: [
      'are much more difficult and expensive to construct than large lenses',
      'can be supported fully from behind, avoiding the sagging problems that large lenses (supported only at their edges) tend to suffer under their own weight',
      'cannot be made larger than a few centimetres in diameter',
      'block most of the incoming light'
    ],
    correctIndex: 1,
    explanation: 'Since a mirror can be supported across its entire back surface, large mirrors do not sag under their own weight the way large lenses (supported only at the edges) tend to, making very large reflecting telescopes more practical to build.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-56',
    type: 'mcq',
    question: 'The apparent depth of an object submerged in a denser medium (such as water), when viewed from a rarer medium (such as air) directly above, is generally',
    options: [
      'greater than the real depth',
      'less than the real depth, due to the bending of light rays at the water-air interface',
      'exactly equal to the real depth in all cases',
      'completely unrelated to the real depth'
    ],
    correctIndex: 1,
    explanation: 'Due to refraction of light at the interface, an object submerged in a denser medium appears to be at a shallower (apparent) depth than its actual (real) depth, when viewed from a rarer medium above.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-57',
    type: 'mcq',
    question: 'The relationship between apparent depth and real depth, for an object viewed from directly above through a denser medium of refractive index n, is approximately',
    options: [
      'apparent depth = real depth × n',
      'apparent depth = real depth / n',
      'apparent depth = real depth + n',
      'apparent depth = real depth - n'
    ],
    correctIndex: 1,
    explanation: 'For near-normal viewing, apparent depth is related to real depth by apparent depth = real depth / n, where n is the refractive index of the denser medium.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-58',
    type: 'mcq',
    question: 'The refraction of light at a single spherical surface, relating the refractive indices (n1, n2) of the two media, the object distance (u), image distance (v), and radius of curvature (R), is given by',
    options: [
      'n2/v - n1/u = (n2 - n1)/R',
      'n1/v - n2/u = (n1 - n2)/R',
      'n2/v + n1/u = (n2 + n1)/R',
      'v - u = R'
    ],
    correctIndex: 0,
    explanation: 'The formula for refraction at a single spherical surface is n2/v - n1/u = (n2 - n1)/R, connecting the refractive indices of the two media with the object and image distances and the radius of curvature.',
    difficulty: 'hard'
  },
  {
    id: 'rayoptics-59',
    type: 'mcq',
    question: 'The refracting telescope\'s objective lens is generally designed with a large aperture mainly to',
    options: [
      'reduce the amount of light collected, protecting the observer\'s eyes',
      'collect more light and improve the resolving power (ability to distinguish closely spaced objects)',
      'reduce the magnifying power of the telescope',
      'eliminate the need for an eyepiece'
    ],
    correctIndex: 1,
    explanation: 'A larger aperture objective collects more light from a distant object, increasing brightness, and also improves the telescope\'s resolving power, allowing finer detail to be distinguished.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-60',
    type: 'mcq',
    question: 'The eyepiece of a telescope or microscope, generally a converging lens of relatively short focal length, functions to',
    options: [
      'collect light directly from the distant object or specimen, forming the very first image',
      'further magnify the (real or virtual) image already formed by the objective, producing the final image that the eye views',
      'eliminate the need for an objective lens entirely',
      'convert visible light into a different type of electromagnetic radiation'
    ],
    correctIndex: 1,
    explanation: 'The eyepiece works on the image already formed by the objective, acting essentially as a simple magnifying glass to further enlarge this intermediate image for final viewing.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-61',
    type: 'mcq',
    question: 'In normal adjustment of a refracting telescope, where the final image is formed at infinity, the separation between the objective and the eyepiece is approximately',
    options: ['fo - fe', 'fo + fe, the sum of the two focal lengths', 'fo × fe', 'fo / fe'],
    correctIndex: 1,
    explanation: 'In normal adjustment, the eyepiece is positioned such that the image formed by the objective lies exactly at its focal point, giving a total tube length equal to the sum of the two focal lengths, fo + fe.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-62',
    type: 'mcq',
    question: 'For a real, extended object placed in front of a plane mirror, the image formed is always',
    options: [
      'virtual, erect, and of the same size as the object',
      'real, inverted, and magnified',
      'virtual, inverted, and diminished',
      'real, erect, and diminished'
    ],
    correctIndex: 0,
    explanation: 'A plane mirror always produces a virtual, erect image that is the same size as the object, located as far behind the mirror as the object is in front of it.',
    difficulty: 'easy'
  },
  {
    id: 'rayoptics-63',
    type: 'mcq',
    question: 'Consider light passing from air into glass and then back into air through a parallel-sided glass slab. Compared to the original path (if the slab were absent), the emergent ray is',
    options: [
      'displaced laterally but remains parallel to the original incident direction',
      'bent at a large angle away from the original direction, no longer parallel to it',
      'completely absorbed within the slab',
      'reflected entirely back into the air on the same side'
    ],
    correctIndex: 0,
    explanation: 'Refraction at the two parallel surfaces of a glass slab causes a lateral shift in the emergent ray\'s position, but the ray emerges parallel to its original direction of incidence.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-64',
    type: 'mcq',
    question: 'When white light passes through a rectangular glass slab (with parallel faces) rather than a prism, noticeable dispersion into separate colours is generally',
    options: [
      'clearly observed, exactly as with a prism',
      'not obviously observed, since the dispersion at the first surface is largely reversed (recombined) upon exiting through the second, parallel surface',
      'completely impossible under any circumstances',
      'stronger than that produced by a prism'
    ],
    correctIndex: 1,
    explanation: 'Because the two faces of a rectangular slab are parallel, the initial dispersion caused at the first surface is largely undone at the second surface, so the emergent light recombines and dispersion is not obviously visible, unlike with a prism (whose two refracting surfaces are not parallel).',
    difficulty: 'hard'
  },
  {
    id: 'rayoptics-65',
    type: 'mcq',
    question: 'The formation of a real image by a concave mirror generally occurs when the object is placed',
    options: [
      'anywhere between the pole and the focal point only',
      'beyond the focal point of the mirror',
      'at the pole of the mirror only',
      'a real image can never be formed by a concave mirror'
    ],
    correctIndex: 1,
    explanation: 'A concave mirror forms a real image (which can be projected onto a screen) when the object is placed beyond the focal point; placing the object between the pole and focus instead gives a virtual image.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-66',
    type: 'mcq',
    question: 'The magnification produced by a spherical mirror, in terms of image height (h\') and object height (h), is given by',
    options: ['m = h/h\'', 'm = h\'/h = -v/u', 'm = h + h\'', 'm = h × h\''],
    correctIndex: 1,
    explanation: 'Magnification for a spherical mirror is given by m = h\'/h = -v/u, connecting image and object heights to the image and object distances via the sign convention.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-67',
    type: 'mcq',
    question: 'A ray of light travelling parallel to the principal axis of a converging (convex) lens, after refraction, passes through the',
    options: ['optical centre without bending', 'principal focus on the other side of the lens', 'edge of the lens only', 'exact position of the object'],
    correctIndex: 1,
    explanation: 'A ray travelling parallel to the principal axis of a converging lens is refracted such that it passes through the principal focus on the far side of the lens.',
    difficulty: 'easy'
  },
  {
    id: 'rayoptics-68',
    type: 'mcq',
    question: 'A ray of light passing through the optical centre of a thin lens',
    options: [
      'is significantly bent, changing direction sharply',
      'passes through essentially undeviated, continuing in a straight line',
      'is always totally internally reflected',
      'never actually reaches the optical centre'
    ],
    correctIndex: 1,
    explanation: 'For a thin lens, a ray passing through the optical centre travels through the lens essentially without any change in direction.',
    difficulty: 'easy'
  },
  {
    id: 'rayoptics-69',
    type: 'mcq',
    question: 'The resolving power of an optical instrument (such as a telescope or microscope) refers to its ability to',
    options: [
      'produce the brightest possible image, regardless of detail',
      'distinguish between two closely spaced objects (or points) as separate, rather than as a single blurred entity',
      'change the colour of the light passing through it',
      'increase the focal length of the objective lens indefinitely'
    ],
    correctIndex: 1,
    explanation: 'Resolving power describes an optical instrument\'s ability to produce distinct images of two closely spaced objects, rather than merging them into a single indistinguishable blur.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-70',
    type: 'mcq',
    question: 'Overall, the chapter on ray optics and optical instruments, as emphasised in NCERT, integrates the fundamental laws of reflection and refraction with',
    options: [
      'their applications in mirrors, lenses, prisms, natural phenomena (rainbow, scattering), and the design and function of optical instruments such as the eye, microscope, and telescope',
      'only the mathematical derivation of formulas, with no practical application discussed',
      'only the historical development of optics, with no formulas at all',
      'topics entirely unrelated to lenses, mirrors, or optical devices'
    ],
    correctIndex: 0,
    explanation: 'The chapter connects the basic laws of reflection and refraction to a wide range of practical applications, from mirrors and lenses to natural optical phenomena and the design of optical instruments like the eye, microscopes, and telescopes.',
    difficulty: 'medium'
  },

  // ==================== ASSERTION-REASON (30) ====================
  {
    id: 'rayoptics-71',
    type: 'assertion-reason',
    question: 'Assertion (A): A convex mirror is preferred over a plane mirror for use as a vehicle side mirror.\nReason (R): A convex mirror, being a diverging mirror, provides a wider field of view than a plane mirror of the same size, even though the resulting image is diminished.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This wider field of view, a direct consequence of the mirror\'s diverging nature, is exactly why convex mirrors are preferred for this application, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-72',
    type: 'assertion-reason',
    question: 'Assertion (A): Light bends towards the normal when it enters a denser medium from a rarer medium.\nReason (R): The speed of light decreases when it enters a denser medium.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'The reduction in speed upon entering a denser medium is exactly why the ray bends towards the normal, in accordance with Snell\'s law, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-73',
    type: 'assertion-reason',
    question: 'Assertion (A): The power of a converging lens is positive, while that of a diverging lens is negative.\nReason (R): By convention, a converging lens has a positive focal length, while a diverging lens has a negative focal length, and power is defined as the reciprocal of focal length.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This sign convention for focal length, combined with the definition of power as its reciprocal, directly explains why converging and diverging lenses have opposite-signed powers, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-74',
    type: 'assertion-reason',
    question: 'Assertion (A): Total internal reflection can occur only when light travels from a denser to a rarer medium.\nReason (R): The critical angle is defined only for light travelling from a denser into a rarer medium, since only in this direction can the angle of refraction exceed the angle of incidence.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This directional requirement for the angle of refraction to exceed the angle of incidence (only possible going from denser to rarer medium) is exactly why total internal reflection has this specific directional requirement, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-75',
    type: 'assertion-reason',
    question: 'Assertion (A): Diamonds exhibit a characteristic sparkle when cut and polished.\nReason (R): Diamond has a very high refractive index, giving it a small critical angle, so light entering the stone undergoes multiple total internal reflections before finally emerging.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This combination of a high refractive index and small critical angle, leading to multiple internal reflections, is exactly what produces the diamond\'s characteristic sparkle, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-76',
    type: 'assertion-reason',
    question: 'Assertion (A): Optical fibres are widely used in telecommunications.\nReason (R): Light signals are guided along the length of an optical fibre through repeated total internal reflection, allowing for efficient, low-loss transmission over long distances.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This efficient, low-loss guiding mechanism via total internal reflection is exactly why optical fibres are so effective and widely adopted for telecommunications, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-77',
    type: 'assertion-reason',
    question: 'Assertion (A): A mirage is commonly observed on hot roads on a sunny day.\nReason (R): Air near the hot road surface is less dense (and has a lower refractive index) than the cooler air above it, and light undergoes total internal reflection at the boundary between these layers.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This density (and refractive index) gradient in the air, causing total internal reflection at the boundary, is exactly the mechanism responsible for the mirage effect, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-78',
    type: 'assertion-reason',
    question: 'Assertion (A): The angle of deviation produced by a prism reaches a minimum value at a specific angle of incidence.\nReason (R): This minimum deviation occurs when the light ray passes symmetrically through the prism, with the angle of incidence equal to the angle of emergence.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This condition of symmetric passage through the prism is exactly the geometric configuration at which minimum deviation occurs, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-79',
    type: 'assertion-reason',
    question: 'Assertion (A): A prism disperses white light into its constituent colours, while a rectangular glass slab does not show obvious dispersion.\nReason (R): In a rectangular slab, the two refracting surfaces are parallel, so the initial dispersion produced at the first surface is largely reversed (recombined) at the second, parallel surface.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This recombination effect at the second, parallel surface of the slab, unlike the non-parallel surfaces of a prism, directly explains why dispersion is not obviously observed with a slab, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'rayoptics-80',
    type: 'assertion-reason',
    question: 'Assertion (A): Violet light is deviated more than red light when passed through a glass prism.\nReason (R): The refractive index of glass is generally higher for shorter wavelengths (like violet) than for longer wavelengths (like red).',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This wavelength dependence of refractive index (higher for violet than red in normal dispersion) directly explains why violet light is deviated more than red light by a prism, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-81',
    type: 'assertion-reason',
    question: 'Assertion (A): The secondary rainbow appears fainter than the primary rainbow.\nReason (R): The secondary rainbow is formed by light that undergoes two internal reflections within the raindrop, causing greater light intensity loss compared to the single internal reflection responsible for the primary rainbow.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This additional intensity loss from the extra internal reflection is exactly why the secondary rainbow appears noticeably fainter than the primary rainbow, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-82',
    type: 'assertion-reason',
    question: 'Assertion (A): The sky appears blue during a clear day.\nReason (R): Rayleigh scattering causes blue light (shorter wavelength) to be scattered much more strongly than red light (longer wavelength) by atmospheric gas molecules.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This preferential scattering of shorter wavelengths, following Rayleigh\'s scattering law, is exactly why the sky appears blue, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-83',
    type: 'assertion-reason',
    question: 'Assertion (A): The sun appears reddish near sunrise and sunset.\nReason (R): Sunlight travels a much longer path through the atmosphere at these times, causing preferential scattering away of the shorter (blue) wavelengths, leaving mostly the longer (red) wavelengths to reach the observer directly.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This longer atmospheric path length near sunrise/sunset, scattering away most of the blue light, is exactly why the remaining direct sunlight appears reddish, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-84',
    type: 'assertion-reason',
    question: 'Assertion (A): A person with myopia has difficulty seeing distant objects clearly.\nReason (R): In myopia, the image of a distant object forms in front of the retina rather than exactly on it, commonly due to elongation of the eyeball or excessive lens curvature.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This mismatch between where the image forms (in front of the retina) and the retina\'s actual location is exactly why distant objects appear blurred in myopia, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-85',
    type: 'assertion-reason',
    question: 'Assertion (A): Myopia is corrected using a diverging (concave) lens.\nReason (R): A diverging lens causes incoming parallel rays to spread out slightly before entering the eye, effectively shifting the point of focus further back onto the retina.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This shifting of the focus point further back, achieved by a diverging lens, is exactly the mechanism by which myopia is corrected, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-86',
    type: 'assertion-reason',
    question: 'Assertion (A): Hypermetropia is corrected using a converging (convex) lens.\nReason (R): A converging lens helps bring the point of focus forward onto the retina, compensating for the eye\'s reduced converging power.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This ability of a converging lens to bring the focus point forward onto the retina is exactly why it is used to correct hypermetropia, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-87',
    type: 'assertion-reason',
    question: 'Assertion (A): Presbyopia is often corrected using bifocal lenses.\nReason (R): Presbyopia can affect both near and distant vision as the eye\'s accommodation ability declines with age, so a combination of converging and diverging lens sections is needed for full correction.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This need to simultaneously address both near and distant vision problems is exactly why bifocal lenses, combining two lens sections, are commonly used for presbyopia, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-88',
    type: 'assertion-reason',
    question: 'Assertion (A): Astigmatism is corrected using cylindrical lenses rather than ordinary spherical lenses.\nReason (R): Astigmatism arises from unequal curvature of the cornea or lens in different planes, and a cylindrical lens can selectively correct focusing power in just the affected plane.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This selective correction of focusing power in a specific plane, matching the nature of the underlying defect, is exactly why cylindrical rather than spherical lenses are used for astigmatism, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-89',
    type: 'assertion-reason',
    question: 'Assertion (A): A compound microscope achieves a much higher magnification than a simple microscope.\nReason (R): The compound microscope\'s total magnification is the product of the magnification from its objective lens and the angular magnification from its eyepiece, compounding the magnifying effect of both lenses.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This multiplicative combination of magnifications from two separate lenses is exactly why a compound microscope achieves much higher overall magnification than a single-lens simple microscope, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-90',
    type: 'assertion-reason',
    question: 'Assertion (A): An astronomical telescope with a large-focal-length objective and a small-focal-length eyepiece achieves high magnifying power.\nReason (R): The magnifying power of a telescope in normal adjustment is given by the ratio fo/fe, which increases as fo increases relative to fe.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This direct mathematical relationship, showing magnification increases with a larger fo/fe ratio, is exactly why this combination of focal lengths achieves high magnifying power, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-91',
    type: 'assertion-reason',
    question: 'Assertion (A): Reflecting telescopes are generally preferred over refracting telescopes for very large astronomical instruments.\nReason (R): Large mirrors can be supported fully from behind, avoiding the sagging that large lenses (supported only at their edges) would suffer under their own weight, and mirrors avoid chromatic aberration entirely.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'These practical structural and optical advantages of mirrors over large lenses directly explain why reflecting telescopes are generally preferred for very large astronomical instruments, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-92',
    type: 'assertion-reason',
    question: 'Assertion (A): A coin placed at the bottom of a pool of water appears to be at a shallower depth than it actually is, when viewed from directly above.\nReason (R): Refraction of light at the water-air interface causes the apparent depth to be less than the real depth, related by apparent depth = real depth / n.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This refraction-based relationship between apparent and real depth directly explains why a submerged object appears shallower than it actually is, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-93',
    type: 'assertion-reason',
    question: 'Assertion (A): The eyepiece of a telescope or microscope generally has a shorter focal length than the objective lens (for telescopes) or is designed to further magnify the image formed by the objective (for microscopes).\nReason (R): The eyepiece functions like a simple magnifying glass, further enlarging the intermediate image already formed by the objective before it is finally viewed by the eye.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This role of the eyepiece as an additional magnifying stage, acting on the already-formed intermediate image, directly explains its design and function as described in A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-94',
    type: 'assertion-reason',
    question: 'Assertion (A): The formula for refraction at a single spherical surface, n2/v - n1/u = (n2-n1)/R, reduces to the familiar thin lens formula 1/v - 1/u = 1/f when applied appropriately to a thin lens with two refracting surfaces.\nReason (R): A thin lens can be modelled as two closely spaced spherical refracting surfaces, and applying the single-surface formula successively to both surfaces (combined with the lens maker\'s formula) yields the thin lens formula.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This derivation approach, applying the single-surface refraction formula successively to both faces of a thin lens, is exactly how the familiar thin lens formula is obtained, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'rayoptics-95',
    type: 'assertion-reason',
    question: 'Assertion (A): A totally reflecting prism can be used in place of a plane mirror in certain optical instruments.\nReason (R): Total internal reflection inside the prism reflects nearly all of the incident light, whereas an ordinary silvered mirror surface can absorb a small fraction of the light, resulting in some intensity loss.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This near-total, virtually loss-free reflection achieved via total internal reflection, compared to the small losses at a silvered mirror surface, is exactly why prisms can be advantageous substitutes for mirrors in certain instruments, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-96',
    type: 'assertion-reason',
    question: 'Assertion (A): The near point of a normal human eye is conventionally taken to be 25 cm.\nReason (R): This value represents the closest distance at which the average adult eye can focus clearly without excessive strain, and it serves as a standard reference distance in optics calculations.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This description of 25 cm as a practical, standard reference for comfortable near-vision focusing is exactly why this value is conventionally adopted, correctly explaining A.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-97',
    type: 'assertion-reason',
    question: 'Assertion (A): The retina forms an upright image of the object being viewed.\nReason (R): The eye\'s crystalline lens, like other converging lenses, forms a real, inverted image of an object placed beyond its focal length.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — the retina actually forms an inverted (upside-down) image, not an upright one; this is corrected later by neural processing in the brain. R correctly explains why the retinal image itself is inverted, consistent with standard converging lens behaviour.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-98',
    type: 'assertion-reason',
    question: 'Assertion (A): A ray of light passing through the optical centre of a thin lens continues without any noticeable change in direction.\nReason (R): Near the optical centre of a thin lens, the two surfaces are considered to be approximately parallel to each other over a very small region, similar to a thin parallel-sided slab, producing negligible net deviation.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This approximate local parallelism near the optical centre, producing negligible net deviation (similar to a very thin slab), is exactly why a ray through the optical centre passes through essentially undeviated, correctly explaining A.',
    difficulty: 'hard'
  },
  {
    id: 'rayoptics-99',
    type: 'assertion-reason',
    question: 'Assertion (A): The magnifying power of a simple microscope can be increased simply by using a lens of longer focal length.\nReason (R): The magnifying power of a simple microscope, given approximately by m = D/f (or 1 + D/f), increases as the focal length f decreases, not increases.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 3,
    explanation: 'A is false — magnifying power actually increases with a shorter (not longer) focal length. R correctly explains the true relationship, showing why the claim in A is incorrect.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-100',
    type: 'assertion-reason',
    question: 'Assertion (A): Ray optics and optical instruments, as a chapter, connects fundamental laws of reflection and refraction to a broad range of natural phenomena and technological applications.\nReason (R): Concepts such as total internal reflection, dispersion, and lens/mirror imaging underlie diverse phenomena and devices, from rainbows and mirages to eyeglasses, microscopes, and telescopes.',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is NOT the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true'
    ],
    correctIndex: 0,
    explanation: 'This wide-ranging applicability of these core optical principles, as detailed in R, is exactly what accounts for the chapter\'s broad integration of natural phenomena and technological devices, correctly explaining A.',
    difficulty: 'medium'
  },

  // ==================== STATEMENT-BASED (30) ====================
  {
    id: 'rayoptics-101',
    type: 'statement',
    question: 'Statement I: The mirror formula is 1/v + 1/u = 1/f.\nStatement II: The focal length of a spherical mirror is twice its radius of curvature.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the focal length is actually half the radius of curvature (f = R/2), not twice it.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-102',
    type: 'statement',
    question: 'Statement I: A convex mirror always produces a virtual, erect, diminished image.\nStatement II: A concave mirror can produce either a real or a virtual image, depending on the position of the object.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the general imaging behaviour of convex and concave mirrors.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-103',
    type: 'statement',
    question: 'Statement I: Refractive index is defined as the ratio of the speed of light in the medium to the speed of light in vacuum.\nStatement II: Light bends towards the normal when entering a denser medium from a rarer one.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — refractive index is defined as the ratio of the speed of light in vacuum to the speed in the medium, the reciprocal of what is stated. Statement II correctly describes the bending behaviour upon entering a denser medium.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-104',
    type: 'statement',
    question: 'Statement I: The power of a converging lens is positive.\nStatement II: The power of a diverging lens is also positive.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — a diverging lens has negative power, not positive.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-105',
    type: 'statement',
    question: 'Statement I: When two thin lenses are placed in contact, their powers simply add.\nStatement II: Combining a converging lens with a diverging lens of the same magnitude of power in contact gives a combination with zero net power.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly follow from the additive nature of lens powers for thin lenses in contact.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-106',
    type: 'statement',
    question: 'Statement I: Total internal reflection can occur when light travels from a rarer to a denser medium.\nStatement II: The critical angle is the angle of incidence in the denser medium for which the angle of refraction is 90°.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — total internal reflection requires light to travel from a denser to a rarer medium, not the reverse. Statement II correctly defines the critical angle.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-107',
    type: 'statement',
    question: 'Statement I: Optical fibres work on the principle of total internal reflection.\nStatement II: The sparkle of a diamond is also explained by total internal reflection, due to its high refractive index and small critical angle.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly identify total internal reflection as the underlying principle behind these two applications/phenomena.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-108',
    type: 'statement',
    question: 'Statement I: A mirage is caused by refraction and total internal reflection due to a temperature (and hence density/refractive index) gradient in air near a hot surface.\nStatement II: Mirages can only ever be observed at night, never during the day.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — mirages are typically observed during hot, sunny daytime conditions, not exclusively (or even primarily) at night.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-109',
    type: 'statement',
    question: 'Statement I: The angle of minimum deviation through a prism occurs when the angle of incidence equals the angle of emergence.\nStatement II: The refractive index of the prism material can be calculated from the prism angle and angle of minimum deviation.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the conditions and applications related to the angle of minimum deviation for a prism.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-110',
    type: 'statement',
    question: 'Statement I: Dispersion of light by a prism occurs because refractive index varies with wavelength.\nStatement II: In normal dispersion, red light is deviated more than violet light.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — in normal dispersion, violet light is deviated more than red light, not the reverse.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-111',
    type: 'statement',
    question: 'Statement I: A primary rainbow is formed due to one internal reflection within each raindrop.\nStatement II: A secondary rainbow is formed due to two internal reflections within each raindrop, and appears fainter than the primary rainbow.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the formation mechanisms and relative brightness of the primary and secondary rainbows.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-112',
    type: 'statement',
    question: 'Statement I: The blue colour of the sky is explained by Rayleigh scattering.\nStatement II: According to Rayleigh scattering, longer wavelengths are scattered more strongly than shorter wavelengths.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — shorter wavelengths (like blue) are scattered more strongly, not longer wavelengths.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-113',
    type: 'statement',
    question: 'Statement I: The reddish colour of the sun near sunrise and sunset is due to a longer atmospheric path scattering away most blue light.\nStatement II: This same scattering effect is why the sun appears white or yellowish at noon, when the atmospheric path is shorter.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly relate the changing apparent colour of the sun throughout the day to the varying length of the atmospheric path sunlight must travel.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-114',
    type: 'statement',
    question: 'Statement I: The retina is the light-sensitive layer where the eye forms its image.\nStatement II: The image formed on the retina is virtual and erect.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — the image formed on the retina is real and inverted, not virtual and erect.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-115',
    type: 'statement',
    question: 'Statement I: Myopia is corrected using a diverging lens.\nStatement II: Hypermetropia is corrected using a diverging lens as well.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — hypermetropia is corrected using a converging lens, not a diverging lens.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-116',
    type: 'statement',
    question: 'Statement I: Presbyopia results from a gradual loss of the eye\'s power of accommodation with age.\nStatement II: Astigmatism results from unequal curvature of the cornea or lens in different planes.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the causes of presbyopia and astigmatism, respectively.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-117',
    type: 'statement',
    question: 'Statement I: Astigmatism is corrected using a spherical convex lens.\nStatement II: Astigmatism is corrected using a cylindrical lens.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — a simple spherical lens cannot correct astigmatism. Statement II correctly identifies the cylindrical lens used for this correction.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-118',
    type: 'statement',
    question: 'Statement I: The angular magnification of a simple microscope with the image at infinity is given by m = D/f.\nStatement II: The angular magnification of a simple microscope with the image at the near point is given by m = 1 + D/f.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly give the formulas for the two different viewing conditions of a simple microscope.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-119',
    type: 'statement',
    question: 'Statement I: A compound microscope\'s total magnifying power is the sum of the magnifications of the objective and eyepiece.\nStatement II: A compound microscope uses an objective lens with a short focal length and an eyepiece with a larger focal length.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — the total magnifying power is the product (not sum) of the objective and eyepiece magnifications. Statement II correctly describes the relative focal lengths of the two lenses.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-120',
    type: 'statement',
    question: 'Statement I: The magnifying power of an astronomical telescope in normal adjustment is fo/fe.\nStatement II: A larger objective focal length combined with a smaller eyepiece focal length gives a higher magnifying power.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the telescope magnification formula and how it depends on the relative focal lengths of the objective and eyepiece.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-121',
    type: 'statement',
    question: 'Statement I: Reflecting telescopes use a concave mirror as their objective.\nStatement II: Reflecting telescopes suffer from chromatic aberration, just like refracting telescopes.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — reflecting telescopes are free from chromatic aberration, unlike refracting telescopes, since mirrors reflect all colours identically.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-122',
    type: 'statement',
    question: 'Statement I: Large mirrors for reflecting telescopes can be supported fully from behind, avoiding sagging under their own weight.\nStatement II: Large lenses for refracting telescopes can also be fully supported from behind in the same way.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — lenses must be transparent and are typically supported only at their edges, making them prone to sagging under their own weight when very large, unlike mirrors.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-123',
    type: 'statement',
    question: 'Statement I: An object submerged in water appears deeper than its actual depth when viewed from air above.\nStatement II: Apparent depth is related to real depth by apparent depth = real depth / n, where n is the refractive index of water.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 1,
    explanation: 'Statement I is incorrect — a submerged object actually appears shallower (not deeper) than its real depth. Statement II correctly gives the relationship between apparent and real depth.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-124',
    type: 'statement',
    question: 'Statement I: A ray of light travelling parallel to the principal axis of a converging lens passes through the principal focus after refraction.\nStatement II: A ray passing through the optical centre of a thin lens is significantly bent from its original direction.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — a ray through the optical centre passes through essentially undeviated, not significantly bent.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-125',
    type: 'statement',
    question: 'Statement I: A prism has two non-parallel refracting surfaces, allowing net dispersion of white light.\nStatement II: A rectangular glass slab has two parallel refracting surfaces, causing the dispersion at one surface to be largely reversed at the other.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly explain why a prism shows obvious dispersion while a rectangular slab does not.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-126',
    type: 'statement',
    question: 'Statement I: The resolving power of an optical instrument refers to its ability to distinguish two closely spaced objects as separate.\nStatement II: A larger aperture generally improves the resolving power of an optical instrument.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the concept of resolving power and how aperture size influences it.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-127',
    type: 'statement',
    question: 'Statement I: The eyepiece of a telescope has a role analogous to a simple magnifying glass, further enlarging the image formed by the objective.\nStatement II: The objective of a telescope forms the very first, intermediate image of the distant object.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the respective roles of the objective and eyepiece in a telescope.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-128',
    type: 'statement',
    question: 'Statement I: The near point of a normal eye is conventionally taken as 25 cm.\nStatement II: The far point of a normal eye is conventionally taken as infinity.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 2,
    explanation: 'Both statements correctly describe the conventional near and far points of a normal, healthy human eye.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-129',
    type: 'statement',
    question: 'Statement I: A plane mirror produces an image that is the same size as the object.\nStatement II: A plane mirror produces a real image that can be projected onto a screen.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — a plane mirror always produces a virtual image, which cannot be projected onto a screen.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-130',
    type: 'statement',
    question: 'Statement I: Ray optics connects fundamental laws of reflection and refraction to practical devices like the eye, microscope, and telescope.\nStatement II: Natural phenomena such as the rainbow and the blue colour of the sky are entirely unrelated to the principles of reflection, refraction, and scattering covered in this chapter.',
    options: [
      'Only Statement I is correct',
      'Only Statement II is correct',
      'Both statements are correct',
      'Neither statement is correct'
    ],
    correctIndex: 0,
    explanation: 'Statement I is correct. Statement II is incorrect — these natural phenomena are, in fact, directly explained by the principles of refraction, reflection, dispersion, and scattering covered in this chapter.',
    difficulty: 'medium'
  },

  // ==================== HOW-MANY (20) ====================
  {
    id: 'rayoptics-131',
    type: 'how-many',
    question: 'How many of the following statements about mirror formulas and sign convention are correct?\n1. The mirror formula is 1/v + 1/u = 1/f.\n2. Focal length equals half the radius of curvature.\n3. Distances are measured from the pole, with the direction of incident light taken as positive.\n4. Magnification for a mirror is given by m = h\'/h = -v/u.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe standard mirror formulas and the sign convention used in ray optics.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-132',
    type: 'how-many',
    question: 'How many of the following statements about convex and concave mirrors are correct?\n1. A convex mirror always forms a virtual, erect, diminished image.\n2. A concave mirror can form a real image when the object is beyond the focal point.\n3. A concave mirror can form a virtual, magnified image when the object is between the pole and focal point.\n4. Convex mirrors are used as shaving mirrors due to their magnifying property.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — concave mirrors (not convex) are used as shaving/makeup mirrors for their magnifying property at close range.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-133',
    type: 'how-many',
    question: 'How many of the following statements about refraction and Snell\'s law are correct?\n1. Snell\'s law is n1 sin θ1 = n2 sin θ2.\n2. Refractive index is the ratio of the speed of light in vacuum to that in the medium.\n3. Light bends away from the normal when entering a denser medium.\n4. Light bends towards the normal when entering a denser medium.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — light bends towards the normal (not away) when entering a denser medium.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-134',
    type: 'how-many',
    question: 'How many of the following statements about lenses and lens power are correct?\n1. The thin lens formula is 1/v - 1/u = 1/f.\n2. Power of a lens is P = 1/f, with f measured in metres.\n3. A converging lens has negative power.\n4. Powers of thin lenses in contact simply add.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — a converging lens has positive power, not negative.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-135',
    type: 'how-many',
    question: 'How many of the following statements about total internal reflection are correct?\n1. It occurs only when light travels from a denser to a rarer medium.\n2. It requires the angle of incidence to exceed the critical angle.\n3. Optical fibres work on this principle.\n4. It can occur when light travels from a rarer to a denser medium at any angle.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts the fundamental requirement (denser to rarer medium) for total internal reflection.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-136',
    type: 'how-many',
    question: 'How many of the following phenomena are correctly explained by total internal reflection?\n1. Sparkle of a diamond\n2. Mirage on a hot road\n3. Working of optical fibres\n4. Blue colour of the sky',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correctly explained by total internal reflection. Statement 4 (blue sky) is instead explained by Rayleigh scattering, not total internal reflection.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-137',
    type: 'how-many',
    question: 'How many of the following statements about prisms and dispersion are correct?\n1. Angle of deviation is minimum when angle of incidence equals angle of emergence.\n2. Refractive index of the prism material can be found from the prism angle and angle of minimum deviation.\n3. Violet light is deviated less than red light in normal dispersion.\n4. Dispersion occurs because refractive index varies with wavelength.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 4 are correct. Statement 3 is false — in normal dispersion, violet light is deviated more, not less, than red light.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-138',
    type: 'how-many',
    question: 'How many of the following statements about rainbows are correct?\n1. A primary rainbow forms due to one internal reflection within a raindrop.\n2. A secondary rainbow forms due to two internal reflections within a raindrop.\n3. A secondary rainbow is fainter than a primary rainbow.\n4. A secondary rainbow has the same colour order as a primary rainbow.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a secondary rainbow has a reversed colour order compared to a primary rainbow.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-139',
    type: 'how-many',
    question: 'How many of the following statements about scattering of light are correct?\n1. Rayleigh scattering intensity is proportional to 1/λ^4.\n2. Shorter wavelengths are scattered more strongly than longer wavelengths.\n3. This scattering explains the blue colour of the daytime sky.\n4. This scattering explains why the sun appears reddish at sunrise/sunset, due to a longer atmospheric path scattering away blue light.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 3,
    explanation: 'All four statements correctly describe Rayleigh scattering and its role in explaining the colour of the sky and the sun at different times of day.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-140',
    type: 'how-many',
    question: 'How many of the following statements about the human eye are correct?\n1. The cornea is the transparent front part through which light first enters.\n2. The iris controls the size of the pupil.\n3. The retina is the light-sensitive layer where the image forms.\n4. The image formed on the retina is virtual and erect.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the retinal image is real and inverted, not virtual and erect.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-141',
    type: 'how-many',
    question: 'How many of the following statements about vision defects and their corrections are correctly matched?\n1. Myopia — corrected with a diverging (concave) lens\n2. Hypermetropia — corrected with a converging (convex) lens\n3. Presbyopia — corrected with bifocal lenses\n4. Astigmatism — corrected with a spherical convex lens',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correctly matched. Statement 4 is false — astigmatism is corrected using a cylindrical lens, not a spherical convex lens.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-142',
    type: 'how-many',
    question: 'How many of the following statements about vision defect causes are correct?\n1. Myopia is often caused by elongation of the eyeball or excessive lens curvature.\n2. Hypermetropia is often caused by a shortened eyeball or reduced lens curvature.\n3. Presbyopia results from a gradual loss of accommodation with age.\n4. Astigmatism results from a perfectly spherical cornea.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — astigmatism results from an imperfectly (not perfectly) spherical cornea or lens.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-143',
    type: 'how-many',
    question: 'How many of the following statements about simple and compound microscopes are correct?\n1. A simple microscope uses a single converging lens.\n2. A compound microscope uses an objective and an eyepiece.\n3. The objective of a compound microscope has a shorter focal length than the eyepiece.\n4. The total magnification of a compound microscope is the sum of the individual lens magnifications.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — the total magnification is the product, not the sum, of the individual magnifications.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-144',
    type: 'how-many',
    question: 'How many of the following statements about telescopes are correct?\n1. Magnifying power of an astronomical telescope in normal adjustment is fo/fe.\n2. A larger objective aperture improves light-gathering and resolving power.\n3. Reflecting telescopes use a concave mirror as the objective.\n4. Reflecting telescopes suffer from significant chromatic aberration, unlike refracting telescopes.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — reflecting telescopes are actually free from chromatic aberration, unlike refracting telescopes.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-145',
    type: 'how-many',
    question: 'How many of the following statements about reflecting telescopes\' advantages are correct?\n1. They avoid chromatic aberration.\n2. Large mirrors can be supported from behind, unlike large lenses.\n3. They generally allow construction of larger-aperture instruments than refracting telescopes.\n4. They require no eyepiece at all, unlike refracting telescopes.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — reflecting telescopes still use an eyepiece to view the image formed by the primary mirror.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-146',
    type: 'how-many',
    question: 'How many of the following statements about apparent depth and refraction are correct?\n1. Apparent depth is generally less than real depth for an object viewed from a rarer medium through a denser one.\n2. Apparent depth = real depth / n, where n is the refractive index of the denser medium.\n3. This effect arises due to refraction of light at the interface between the two media.\n4. Apparent depth is always exactly equal to real depth, regardless of the media involved.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false and directly contradicts the well-established apparent-depth effect caused by refraction.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-147',
    type: 'how-many',
    question: 'How many of the following statements about ray tracing through thin lenses are correct?\n1. A ray parallel to the principal axis refracts through the principal focus (for a converging lens).\n2. A ray through the optical centre passes through essentially undeviated.\n3. A ray directed towards the focus on the incident side emerges parallel to the principal axis (for a converging lens).\n4. All rays from an object, regardless of direction, always converge exactly at the optical centre.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct, describing standard ray-tracing rules for thin lenses. Statement 4 is false and misrepresents how image formation actually works.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-148',
    type: 'how-many',
    question: 'How many of the following statements about prisms versus rectangular slabs are correct?\n1. A prism has two non-parallel refracting surfaces.\n2. A rectangular slab has two parallel refracting surfaces.\n3. Dispersion is clearly observed with a prism but not obviously with a slab.\n4. A slab produces greater angular dispersion than a prism of the same material.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — a slab does not produce obvious net angular dispersion at all, since the dispersion at the first surface is largely reversed at the second, parallel surface.',
    difficulty: 'hard'
  },
  {
    id: 'rayoptics-149',
    type: 'how-many',
    question: 'How many of the following statements about resolving power and light-gathering ability are correct?\n1. Resolving power describes the ability to distinguish two closely spaced objects.\n2. A larger aperture generally improves resolving power.\n3. A larger aperture also generally improves the light-gathering ability of a telescope.\n4. Resolving power and magnifying power are exactly the same concept, with no distinction between them.',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, and 3 are correct. Statement 4 is false — resolving power (ability to distinguish detail) and magnifying power (degree of size enlargement) are distinct, related but different concepts.',
    difficulty: 'medium'
  },
  {
    id: 'rayoptics-150',
    type: 'how-many',
    question: 'How many of the following statements correctly summarise key themes of the ray optics and optical instruments chapter?\n1. Reflection and refraction laws underlie the behaviour of mirrors, lenses, and prisms.\n2. Total internal reflection explains phenomena such as mirages, diamond sparkle, and optical fibre transmission.\n3. Natural phenomena like rainbows and sky colour are explained through dispersion, reflection/refraction, and scattering.\n4. The human eye and optical instruments like microscopes and telescopes apply lens/mirror principles for vision correction and magnification.\n5. Chromatic aberration is a significant problem in reflecting telescopes but not in refracting telescopes.',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'Statements 1, 2, 3, and 4 correctly summarise major themes of the chapter. Statement 5 is false — it is actually refracting telescopes (using lenses) that suffer from chromatic aberration, while reflecting telescopes (using mirrors) are free from it, the reverse of what is stated.',
    difficulty: 'medium'
  }
];
