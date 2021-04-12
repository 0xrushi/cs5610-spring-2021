import React from 'react'
import CourseRow from './course-row';
import {Link} from "react-router-dom";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props);
        // console.log(props)
    }

    render() {
        return (
            <div>
                <br></br>
                {/* <h2>Course Table</h2> */}
                {/* <Link to="/courses/grid">
                    <i className="fas   fa-2x fa-th float-right"></i>
                </Link> */}
                <div className="container round-corners">
                    <table className="table table-hover table-borderless responsive">
                        <thead className="thead table-primary">
                            <tr>
                                <th scope="col" className="fa-2x">Title</th>
                                <th scope="col" className="fa-2x d-none d-sm-table-cell">Owned by</th>
                                <th scope="col" className="fa-2x d-none d-lg-table-cell">Last modified</th>
                                <th scope="col" className="fa-2x d-none d-lg-table-cell">Quiz</th>
                                <th scope="col">
                                    <i className=" mx-2 fa fa-2x fa-folder"></i>
                                    <i className="mx-2 fas fa-2x fa-sort-amount-up"></i>
                                    <Link to="/courses/grid">
                                        <i className="fas fa-2x fa-th"></i>
                                    </Link>
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
                                this.props.courses.map((course, idx) =>
                                    <CourseRow
                                        deleteCourse={this.props.deleteCourse}
                                        updateCourse={this.props.updateCourse}
                                        key={course._id}
                                        course={course}
                                        title={course.title}
                                        owner={course.owner}
                                        lastModified={course.lastModified}
                                    />)
                            }
                        </tbody>
                    </table>
                    {/*{console.log(this.props.courses)}*/}
                </div>
            </div>
        )
    }
}