import React from 'react'
import {Link} from 'react-router-dom'
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

// const CourseEditor = ({props}) => 
const CourseEditor = ({history}) =>
    <div>
        <h1>Hello from CouresEditor</h1>
        <h2>
            <Link to="/courses/table">
                <i className="fas fa-arrow-left float-left"></i>
            </Link>
            {/* <i onClick={() => props.history.goBack()} 
                className="fas fa-times float-right">
            </i> */}
            <i onClick={() => history.goBack()} 
                className="fas fa-times float-right">
            </i>
        </h2>
    </div>



export default CourseEditor