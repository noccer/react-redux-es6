import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) { // take the current state, and action, then return a new state. state = [] is initialising our state
    switch(action.type) {
        case types.LOAD_AUTHORS_SUCCESS: 
            return action.authors;
        
        default: // in case the reducer does not have an appropriate action
            return state;
    }
}