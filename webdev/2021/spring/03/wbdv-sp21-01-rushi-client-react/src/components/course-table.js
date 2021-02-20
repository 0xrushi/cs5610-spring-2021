import React from 'react'
import CourseRow from './course-row';
import {Link} from "react-router-dom";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return (
            <div>
                <h2>Course Table</h2>
                <Link to="/courses/grid">
                    <i className="fas fa-2x fa-th float-right"></i>
                </Link>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Owned by</th>
                            <th scope="col">Last modified</th>
                            <th scope="col">
                                <i className="fa fa-folder"></i>
                                <i className="fas fa-sort-amount-up"></i>
                                <i className="fas fa-th-large"></i>
                            </th>
                            {/* <th scope="col">Modify</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {/*<CourseRow title="CS1234" owner="alice" lastModified={"1/12/34"}/>*/}
                        {/*<CourseRow title="CS2345" owner="bob"   lastModified={"2/23/24"}/>*/}
                        {/*<CourseRow title="CS3456" owner="charlie" lastModified={"3/22/14"}/>*/}
                        {/*<CourseRow title="CS4567" owner="dan"   lastModified={"4/12/36"}/>*/}
                        {
                            this.props.courses.map((course, ndx) =>
                                <CourseRow
                                    deleteCourse={this.props.deleteCourse}
                                    updateCourse={this.props.updateCourse}
                                    key={ndx}
                                    course={course}
                                    title={course.title}
                                    owner={course.owner}
                                    lastModified={course.lastModified}
                                />)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}