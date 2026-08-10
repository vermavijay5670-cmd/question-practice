import { UNIT_DIMENSIONS } from './banks/unitDimensions';

export const QUESTION_BANK = {
    'unit-dimensions': UNIT_DIMENSIONS,

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