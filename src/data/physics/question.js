import { UNIT_DIMENSIONS } from './banks/unitDimensions';

export const QUESTION_BANK = {
    'unit-dimensions': UNIT_DIMENSIONS,
};


export function getChapterQuestions(chapterId){
    return QUESTION_BANK[chapterId] || [];
}