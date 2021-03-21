import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import Home from "./components/home";
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './components/main-navbar';


function App() {
  // return (
  //   <BrowserRouter>
  //   <MainNavbar/>
  //     <div className="container-fluid container-fluid2 h-100">
  //         <CourseManager/>
  //     </div>
  //   </BrowserRouter>
  // );

    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Route path="/" exact={true}  component={Home}/>
                <Route path="/courses" component={CourseManager}/>
                {/*<Route path="/courses/editor" component={CourseEditor}/>*/}

                <Route path={[
                    "/courses/:layout/edit/:courseId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
                ]}
                       exact={true}
                       render={(props) => <CourseEditor {...props}/>}/>

                {/*<div className="container-fluid">*/}
                {/*  <CourseManager/>*/}
                {/*  <CourseEditor/>*/}
                {/*</div>*/}
            </div>
        </BrowserRouter>
    );

}

export default App;
