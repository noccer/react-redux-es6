import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
    // courses: courses -> we could have written it like this
    courses, // this is called the shorthand property name in ES6.
    authors
});

export default rootReducer;