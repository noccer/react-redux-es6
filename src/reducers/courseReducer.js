export default function courseReducer(state = [], action) { // take the current state, and action, then return a new state. state = [] is initialising our state
    switch(action.type) {
        case 'CREATE_COURSE': 
            return [
                ...state,
                Object.assign({}, action.course)
            ];
        
        default: // in case the reducer does not have an appropriate action
            return state;
    }
}