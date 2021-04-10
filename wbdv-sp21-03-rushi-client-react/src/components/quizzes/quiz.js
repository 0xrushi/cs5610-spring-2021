import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        // TODO: move this to a service file
        fetch(`http://localhost:3000/api/quizzes/${quizId}/questions`)
            .then(response => response.json())
            .then(questions => setQuestions(questions))
    },[])

    return(
        <div className="container">
            <h2>Quiz {quizId}</h2>
            <ul className="list-group">
                {
                    questions.map(question =>
                        <li
                            key={question._id}
                            className="list-group-item">
                                <Question question={question}/>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Quiz;