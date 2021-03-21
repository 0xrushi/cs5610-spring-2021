import React from 'react'
import './course-editor.css';
import {Link, useParams, useHistory} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {connect, Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import topicReducer from "../../reducers/topic-reducer";
import courseReducer from "../../reducers/course-reducer";
import CourseEditorNavbar from "./course-editor-navbar";

// const CourseEditor = ({course, lastModified, owner}) => {
//     return (
//     <tr>
//         <input placeholder="Edit Title"/>
//         <td>{owner}</td>
//         <td>{lastModified}</td>
//         <td>
//             <div>
//                 <i class="fas fa-check"></i>
//                 <i class="fas fa-times"></i>
//             </div>
//         </td>
//     </tr>
//     )
// }

const reducer = combineReducers({
    moduleReducer,
    lessonReducer,
    topicReducer,
    courseReducer
})
const store = createStore(reducer)




// const CourseEditor = ({props}) => 
// const CourseEditor = ({history, params}) => {
//     const {layout, courseId, moduleId} = useParams();
//     return (
//         <Provider store={store}>
//         <div>
//         <h1>Hello from CouresEditor</h1>
//         <h2>
//             <Link to="/courses/table">
//                 <i className="fas fa-arrow-left float-left btn btn-primary"></i>
//             </Link>
//             {/* <i onClick={() => props.history.goBack()}
//                 className="fas fa-times float-right">
//             </i> */}
//             <i onClick={() => history.goBack()}
//                 className="btn btn-primary fas fa-times float-right">
//             </i>
//         </h2>
//
//
//         <div style={{ height: '100%' }}>
//             <nav className="navbar navbar-expand-lg navbar-custom">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#"><i className="fa fa-window-close" />  CS5610</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon" />
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" href="#">Build</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">Pages</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">Themes</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">Store</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">Apps</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">Settings</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link disabled" href="#">Privacy</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">
//                                     <i className="fa fa-plus" />
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//             <div className="row wbdv-content-row">
//                 <div className="col-md-2 wbdv-editor-left-pane">
//                     <ul className="list-group wbdv-module-list">
//                         <li className="list-group-item active">
//                             Module 1 - JQuery
//                 <i className="pull-right fa fa-times wbdv-list-delete-icon" />
//                         </li>
//                         <li className="list-group-item">
//                             Module 2 - React
//                 <i className="pull-right fa fa-times wbdv-list-delete-icon" />
//                         </li>
//                         <li className="list-group-item">
//                             Module 3 - Redux
//                 <i className="pull-right fa fa-times wbdv-list-delete-icon" />
//                         </li>
//                         <li className="list-group-item">Module 4 - Native
//                 <i className="pull-right fa fa-times wbdv-list-delete-icon" />
//                         </li>
//                         <li className="list-group-item">Module 5 - Angular
//                 <i className="pull-right fa fa-times wbdv-list-delete-icon" />
//                         </li>
//                         <li className="list-group-item">Module 6 - Node
//                 <i className="pull-right fa fa-times wbdv-list-delete-icon" />
//                         </li>
//                         <li className="list-group-item">Module 7 - Mongo
//                 <i className="pull-right fa fa-times wbdv-list-delete-icon" />
//                         </li>
//                         <li className="list-group-item wbdv-group-item-add">New Module
//                 <i className="pull-right fa fa-plus wbdv-list-delete-icon" />
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="col-md-10 wbdv-editor-content">
//                     <ul className="nav nav-pills wbdv-editor-nav-pills">
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-current="page" href="#">Topic 1</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Topic 2</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Topic 3</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Topic 4</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">
//                                 Topic 5
//                   <i className="fa fa-lock" />
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//         </div>
//         </Provider>
//     )
// }


const CourseEditor = ({history, course, findCourseById}) => {
    const {layout, courseId, moduleId} = useParams();
    let mdiv;
    if(moduleId !== "undefined" && typeof moduleId  !== "undefined")
        mdiv=<div>
            <LessonTabs/>
            <TopicPills/>
        </div>
    return(
        <Provider store={store}>
            {/*<h1>*/}
            {/*    <Link to="/courses/table">*/}
            {/*        <i className="fas fa-arrow-left"></i>*/}
            {/*    </Link>*/}
            {/*    Course Editor*/}
            {/*    <i className="fas fa-times float-right"*/}
            {/*       onClick={() => history.goBack()}></i>*/}
            {/*</h1>*/}
            <CourseEditorNavbar history={history}/>
            <div className="row">
                <div className="col-3">
                    <ModuleList/>
                </div>

                <div className="col-9">
                    {mdiv}
                </div>
            </div>
        </Provider>
    )
}


export default CourseEditor