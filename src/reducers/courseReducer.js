import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) { // take the current state, and action, then return a new state. state = [] is initialising our state
    switch(action.type) {
        case types.LOAD_COURSES_SUCCESS: 
            return action.courses;

        case types.CREATE_COURSE_SUCCESS:
            return [
                ...state, // explodes all value inside the array. in this case it's just an array of courses
                Object.assign({}, action.course)
            ];

        case types.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)
            ];
        
        default: // in case the reducer does not have an appropriate action
            return state;
    }
}