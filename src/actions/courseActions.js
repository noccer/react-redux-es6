import * as types from './actionTypes';

export function createCourse(course) { //convenience function that returns an action
    return {
        type: types.CREATE_COURSE,
        course
    }
}