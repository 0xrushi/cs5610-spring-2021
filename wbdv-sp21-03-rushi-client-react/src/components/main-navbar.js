import React from 'react';
import CourseService from "../services/course-service";

class MainNavbar extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
              </button>
              <a className="navbar-brand" href="#">Navbar</a>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                      <li className="nav-item active">
                          <a className="nav-link" href="#"><i className="fa fa-home" /> Home <span className="sr-only">(current)</span> </a>
                          {/*                <i class="fas fa-home"></i>*/}
                      </li>
                      <li className="nav-item">
                          <form className="form-inline my-2 my-lg-0">
                              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                              <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                          </form>
                      </li>
                  </ul>
                  <button type="button" className="btn btn-primary mr-2" >Login</button>
                  <button type="button" className="btn btn-primary mr-0" >Register</button>
              </div>
          </nav>
      )
    }
  }
  
  
  export default MainNavbar