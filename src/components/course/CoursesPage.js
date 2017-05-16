import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {
    // initialise state and bind to 'this'
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: {
                title: ""
            }
        };
        
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) { // updates state every time someone presses a key on title input field
        const course = this.state.course;
        course.title=event.target.value;
        this.setState(
            {
                course: course
            }
        );
    }

    onClickSave() {
        // this.props.dispatch(courseActions.createCourse(this.state.course)); // connect() gives us the dispatch() function.
        this.props.actions.createCourse(this.state.course); // mapDispatchToProps() allowed us to shorten this line from what it was above
    }
    
    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            // container components typically only ever call components
            // try not to have any markup in container components
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
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
