import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';

class CoursesPage extends React.Component {
    // initialise state and bind to 'this'
    constructor(props, context) {
        super(props, context);
        
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }
    
    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render() {
        const {courses} = this.props;
        
        return (
            // container components typically only ever call components
            // try not to have any markup in container components
            <div>
                <h1>Courses</h1>
                <input type="submit"
                       value="Add Course"
                       className="btn btn-primary"
                       onClick={this.redirectToAddCoursePage} />
                <CourseList courses={courses} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return { // 'state.courses' was defined in src\reducers\index.js
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) { // determines what actions are available in the component
    return {
        // // this line replaces what we had up above, it moves
        // //  ⤺ createCourse() comes from src\actions\courseActions.js
        // //                      ⤺ arrow function / anonmyous function
        // //                            ⤺ dispatch comes from ...?
        // createCourse: (course) => dispatch(courseActions.createCourse(course))
        
        
        //                  ⤺ this is a redux helper
        //                  ⤺ It goes through all courseActions in the actions file
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
