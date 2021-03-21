import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import CourseCard from "./course-card";
import CourseRow from "../course-table/course-row";

const CourseGrid = ({courses, updateCourse, deleteCourse}) => {
    return (<div>
        {/* <Link to="/courses/table">
            <i className="fas fa-list fa-2x float-right"></i>
        </Link> */}
        <h2>Course Grid {courses.length}</h2>
        <div className="container">
            <div className="row mb-2">
                <span className="col d-none d-md-table-cell fa-2x">Recent Documents</span>
                <span className="col text-center d-none d-md-table-cell fa-2x">
                    Owned by me
          <i className="fas fa-sort-down ml-1"></i>
                </span>
                <div className="col align-middle fa-2x">
                    <Link to="/courses/table">
                        <i className="fas fa-list fa-sm float-right px-3"></i>
                    </Link>
                    <a href="#">
                        <i className="fas fa-sort-alpha-up float-right px-3"></i>
                    </a>
                    <a href="#">
                        <i className="fas fa-folder float-right px-3"></i>
                    </a>

                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
                {
                    courses.map((course, idx) =>
                        // <div className="col-sm-6 col-xs-12 col-md-4 col-lg-3 col-xl-2">
                        //     <div className="card-body">
                        //         <h5 className="card-title">{course.title}</h5>
                        //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        //         the card's content.</p>
                        //         <Link to="/editor" className="btn btn-primary">
                        //             Go somewhere
                        //     </Link>
                        //     </div>
                            
                        // </div>
                        <CourseCard
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}
                            key={course._id}
                            course={course}
                            title={course.title}
                            owner={course.owner}
                            lastModified={course.lastModified}/>
                        )
                }
            </div>
        </div>

    </div>)
}

export default CourseGrid