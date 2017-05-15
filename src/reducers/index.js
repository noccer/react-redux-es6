import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    // courses: courses -> we could have written it like this
    courses // this is called the shorthand property name in ES6.
});

export default rootReducer;