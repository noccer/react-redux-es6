import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) { // take the current state, and action, then return a new state. state = [] is initialising our state
    switch(action.type) {
        case types.LOAD_COURSES_SUCCESS: 
            return action.courses;
        
        default: // in case the reducer does not have an appropriate action
            return state;
    }
}