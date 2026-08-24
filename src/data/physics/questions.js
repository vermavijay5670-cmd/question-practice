import { UNIT_DIMENSIONS } from './banks/unitDimensions';
import { MOTION_STRAIGHT_LINE } from './banks/motionStraightLine';
import { ELECTROSTATICS_POTENTIAL_CAPACITANCE } from './banks/electrostaticsPotentialCapacitance';
import { MOTION_PLANE } from './banks/motionPlane';
import { LAWS_MOTION } from './banks/lawsMotion';
import { WORK_ENERGY_POWER } from './banks/workEnergyPower';
import { SYSTEM_PARTICLES_ROTATIONAL_MOTION } from './banks/rotationalMotion';
import { GRAVITATION } from './banks/gravitation';
import { MECHANICAL_PROPERTIES_SOLIDS } from './banks/propertiesOfSolids';
import { MECHANICAL_PROPERTIES_FLUIDS } from './banks/propertiesOfFluids';
import { THERMAL_PROPERTIES_MATTER } from './banks/propertiesOfMatter';
import { THERMODYNAMICS } from './banks/thermodynamics';
import { KINETIC_THEORY } from './banks/kineticTheory';
import { OSCILLATIONS } from './banks/oscillations';
import { WAVES } from './banks/waves';
import { ELECTRIC_CHARGES_FIELDS } from './banks/electricChargesFields';
import { CURRENT_ELECTRICITY } from './banks/currentElecticity';
import { MOVING_CHARGES_MAGNETISM } from './banks/movingChargesMagnetism';
import { MAGNETISM_MATTER } from './banks/magnetismMatter';
import { ELECTROMAGNETIC_INDUCTION } from './banks/electromagneticInduction';
import { ALTERNATING_CURRENT } from './banks/alternatingCurrent';
import { ELECTROMAGNETIC_WAVES } from './banks/electromagneticWaves';
import { RAY_OPTICS_OPTICAL_INSTRUMENTS } from './banks/rayOptics';
import { WAVE_OPTICS } from './banks/waveOptics';
import { DUAL_NATURE_RADIATION_MATTER } from './banks/dualNatureradiation';
import { ATOMS } from './banks/atoms';
import { NUCLEI } from './banks/nuclei';
import { SEMICONDUCTORS_DEVICES } from './banks/semiconductorDevices';

export const QUESTION_BANK = {
    'unit-dimensions': UNIT_DIMENSIONS,
    'motion-straight-line': MOTION_STRAIGHT_LINE,
    'electrostatics-potential-capacitance': ELECTROSTATICS_POTENTIAL_CAPACITANCE,
    'motion-plane': MOTION_PLANE,
    'laws-motion': LAWS_MOTION,
    'work-energy-power': WORK_ENERGY_POWER,
    'system-particles-rotational-motion': SYSTEM_PARTICLES_ROTATIONAL_MOTION,
    'gravitation': GRAVITATION,
    'mechanical-properties-solids': MECHANICAL_PROPERTIES_SOLIDS,
    'mechanical-properties-fluids': MECHANICAL_PROPERTIES_FLUIDS,
    'thermal-properties-matter': THERMAL_PROPERTIES_MATTER,
    'thermodynamics': THERMODYNAMICS,
    'kinetic-theory': KINETIC_THEORY,
    'oscillations': OSCILLATIONS,
    'waves': WAVES,
    'electric-charge-fields': ELECTRIC_CHARGES_FIELDS,
    'current-electricity': CURRENT_ELECTRICITY,
    'moving-charges-magnetism': MOVING_CHARGES_MAGNETISM,
    'magnetism-matters': MAGNETISM_MATTER,
    'electromagnetic-induction': ELECTROMAGNETIC_INDUCTION,
    'alternating-current': ALTERNATING_CURRENT,
    'electromagnetic-waves': ELECTROMAGNETIC_WAVES,
    'ray-optics-optical-instruments': RAY_OPTICS_OPTICAL_INSTRUMENTS,
    'wave-optics': WAVE_OPTICS,
    'dual-nature-radiations-matter': DUAL_NATURE_RADIATION_MATTER,
    'atoms': ATOMS,
    'nuclei': NUCLEI,
    'semiconductor-electronics': SEMICONDUCTORS_DEVICES,


    
};



export function getChapterQuestions(chapterId){
    return QUESTION_BANK[chapterId] || [];
}