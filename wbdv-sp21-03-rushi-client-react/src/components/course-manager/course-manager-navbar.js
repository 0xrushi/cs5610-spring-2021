import React from 'react';
import CourseService from "../../services/course-service";

class CourseManagerNavbar extends React.Component {
    constructor(props) {
      super(props);
    }
   
    render() {
        console.log(this.props)
      return (
        <div>
            {/* <div className="container-fluid container-fluid2  h-100"> */}
              <span className="brand collapse navbar-collapse">Course Manager</span>
              <ul className="me-auto mb-2 mb-lg-0"/>
              <div className="d-flex">
                <input className="form-control mr-2 wbdv-input" type="text"
                       placeholder="New Course Title"
                       onChange={this.props.onCourseChange}/>
                <button className="btn btn-primary my-2 my-sm-0 wbdv-nav-add" onClick={this.props.addCourse} type="submit">
                    <i className="fas fa-plus fa-sm wbdv-nav-plus"/></button>
              </div>
            {/* </div> */}

            <button className="btn btn-primary my-2 my-sm-0 wbdv-nav-add fa-2x" onClick={this.props.addCourse} id="fixedbutton" style={{"position": "fixed", "bottom": "50px", "right": "50px"}}>
              <i className="fas fa-plus fa-sm wbdv-nav-plus"/>
            </button>
        </div>
      )
    }
  }
  
  
  export default CourseManagerNavbar
  