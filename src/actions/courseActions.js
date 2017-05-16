import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadCoursesSuccess(courses) { //convenience function that returns an action
    return {
        type: types.LOAD_COURSES_SUCCESS,
        courses
    };
}

export function createCourseSuccess(course) {
    return {
        type: types.CREATE_COURSE_SUCCESS,
        course
    };
}

export function updateCourseSuccess(course) {
    return {
        type: types.UPDATE_COURSE_SUCCESS,
        course
    };
}

export function loadCourses() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveCourse(course) {
    // see https://app.pluralsight.com/player?course=react-redux-react-router-es6&author=cory-house&name=react-redux-react-router-es6-m10&clip=9&mode=live
    //                              getState is not used in this example BUT...
    //                              ...this is very useful if we want to extract
    //                           ⤺  some state from the Redux store!
    return function(dispatch, getState) {
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course).then(course => {
            course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));
        }).catch(error => {
            throw (error);
        });
    };
}