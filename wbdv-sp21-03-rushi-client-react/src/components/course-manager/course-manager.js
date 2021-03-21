import React from 'react'
import CourseTable from "../course-table/course-table";
import CourseGrid from "../course-grid/course-grid";
import {Route, useParams} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../../services/course-service";
import CourseManagerNavbar from "./course-manager-navbar";

class CourseManager extends React.Component {

    initialSate = {
        title: "",
        owner: "me",
        lastModified: " "
    }

    state = {
        courses: [],
        tempCourse: this.initialSate
    }

    // state = {
    //     courses: [],
    //     tempCourse:{
    //         title: "",
    //         owner: "default",
    //         lastModified: "Never"
    //     },
    //     qwe: 123,
    //     sdf: 456
    //   }


    // inbuilt function from ReactComponents which says it is a good time to set state after everything is loaded 
    componentDidMount = () => {
        courseService.findAllCourses().then(courses => this.setState({courses}))
    }

// The above code is equivalent to 

    // componentDidMount(){
    //     findAllCourses()
    //         .then(actualCourses => this.setState({
    //             courses:actualCourses
    //         }))
    // }

    addCourse = () => {
        const newCourse = this.state.tempCourse
        // this.state.courses.push(newCourse)
        // this.setState(this.state)

        courseService.createCourse(newCourse).then(course => this.setState(
            (prevState) => ({
                ...prevState,
                courses: [
                    ...prevState.courses,
                    course
                ]
            })
        ))

        //clear addcourse input box
        this.setState({tempCourse: {title: ""}})
    }   

    deleteCourse = (courseToDelete) => {

        deleteCourse(courseToDelete._id).then(status => {
            // const newCourses = this.state.courses
            //     .filter(course => course !== courseToDelete)
            
            //     this.setState({
            //     courses: newCourses
            // })

            //Above code is bad practice because we are setting state based on values of previous state

            // this.setState((prevState) => {
            //     let nextState = {...prevState}
            //     nextState.courses = prevState.courses.filter(course => course !== courseToDelete)
            //     return nextState  
            // })

            //more compact way below
            this.setState((prevState) => ({
                ...prevState,
                courses:prevState.courses
                    .filter(course => course !==courseToDelete)
            }))
        })
    }

    editCourse = (courseToEdit) => {
        const selected = this.state.courses
            .filter(course => course === courseToEdit)
    }

    // updateCourse = (course) => {
    //     // console.log(course)
    //     courseService.updateCourse(course._id, course)
    //         .then(status => this.setState((prevState) => {
    //           let nextState= {...prevState}
    //             nextState.courses = prevState.courses.map(
    //               (c) => c._id === course._id ? course : c)
    //
    //           // courses: prevState.courses.map(c => {
    //           //   if(c._id === course._id) {
    //           //     return course
    //           //   } else {
    //           //     return c
    //           //   }
    //           // })
    //         }))
    // }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)
            })))
    }

    deleteAllCourses = () => {
        this.state.courses.map((course, idx) => {
            
            this.deleteCourse(course)
                console.log(course._id, "deleted")
        })
    }

    onCourseChange = (event) => {
        this.setState({
          tempCourse: {
            owner: "default",
            lastModified: "Never",
            title: event.target.value,
          }
        })
    }



    render() {
        return(
            <div>
                <h1>Course Manager</h1>
                <h2></h2>
                {/* <button onClick={this.addCourse}>Add Course</button>
                <button onClick={this.deleteAllCourses}>Deleteall Course</button> */}
                {/*(lessonId !== "undefined" && typeof lessonId  !== "undefined") &&*/}

                <Route path="/courses/table" exact={true}>
                    <CourseManagerNavbar
                        addCourse={this.addCourse}
                        onCourseChange={this.onCourseChange}
                    />
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid" exact={true}>
                    {/*<CourseGrid*/}
                    {/*    updateCourse={this.updateCourse}*/}
                    {/*    deleteCourse={this.deleteCourse}*/}
                    {/*    courses={this.state.courses}*/}
                    {/*/>*/}
                    <CourseManagerNavbar
                        title={this.state.tempCourse.title}
                        addCourse={this.addCourse}
                        onCourseChange={this.onCourseChange} />
                    <CourseGrid
                        courses={this.state.courses}
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                    />
                </Route>
                {/*<Route path="/courses/editor" >*/}
                {/*    render={(props) => <CourseEditor  {...props}/>}*/}
                {/*</Route>*/}

            {/* <Route path="/courses/editor">*/}
            {/*    <CourseEditor/>*/}
            {/*</Route>*/}
            
            {/*<Route path="/courses/editor"*/}
            {/*       render={(props) => <CourseEditor props={props}/>}>*/}
            {/*</Route> */}
            <br/>
            </div>
        )
    }
}



export default CourseManager