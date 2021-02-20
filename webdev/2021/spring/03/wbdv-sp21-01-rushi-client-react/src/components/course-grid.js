import React from 'react'
import {Link} from "react-router-dom";

const CourseGrid = ({courses}) =>
    <div>
        <Link to="/courses/table">
            <i className="fas fa-list fa-2x float-right"></i>
        </Link>
      <h2>Course Grid {courses.length}</h2>
        <div className="row">
        {
            courses.map((course, idx) => 
                <div className="col-3">
                    {/* <div className="card" style={{width: "18rem", margin: "15px"}}> */}
                        {/* <img src="https://image.shutterstock.com/image-vector/react-native-icon-260nw-1141502429.jpg" className="card-img-top" alt="..."/> */}
                        <div className="card-body">
                            <h5 className="card-title">{course.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                            <Link to="/editor" className="btn btn-primary">
                                Go somewhere
                            </Link>
                        </div>
                    {/* </div> */}
                </div>
            )
        }
        </div>

    </div>

export default CourseGrid