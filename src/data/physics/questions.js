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


    
};



export function getChapterQuestions(chapterId){
    return QUESTION_BANK[chapterId] || [];
}