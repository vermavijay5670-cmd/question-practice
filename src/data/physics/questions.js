import { UNIT_DIMENSIONS } from './banks/unitDimensions';
import { MOTION_STRAIGHT_LINE } from './banks/motionStraightLine';
import { ELECTROSTATICS_POTENTIAL_CAPACITANCE } from './banks/electrostaticsPotentialCapacitance';

export const QUESTION_BANK = {
    'unit-dimensions': UNIT_DIMENSIONS,
    'motion-straight-line': MOTION_STRAIGHT_LINE,
    'electrostatics-potential-capacitance': ELECTROSTATICS_POTENTIAL_CAPACITANCE,


    'unit-dimensions': [
    {
      id: 'ud',
      type: 'mcq',
      question: 'unit of time is:',
      options: [
        's',
        'm',
        'kg',
        'a',
      ],
      correctIndex: 0,
      explanation: 'unit of time is second.',
      difficulty: 'easy',
    },
  ],
};



export function getChapterQuestions(chapterId){
    return QUESTION_BANK[chapterId] || [];
}