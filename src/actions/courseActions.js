export function createCourse(course) { //convenience function that returns an action
    return {
        type: "CREATE_COURSE",
        course
    }
}