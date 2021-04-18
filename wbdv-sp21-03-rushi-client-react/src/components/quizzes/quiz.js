import React, {useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom'
import Question from "./questions/question";
import QuestionService from "../../services/question-service"
import QuizService from "../../services/quiz-service"

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [quiz, setQuiz] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [graded, setgraded] = useState(false)
    const [curScore, setCurScore] = useState(null)
    const [questionsWithAns, setQuestionsWithAns] = useState([])

    const handleSubmit = () => {
        if (questions) {
            QuizService.submitQuiz(quizId, questions)
        }

    }

    useEffect(() => {
        QuestionService.findQuestionsForQuiz(quizId)
            .then((question) => {
                setQuestions(question)
                setQuestionsWithAns(question)
            })
        QuizService.findQuizById(quizId)
            .then((quiz) => setQuiz(quiz))

    },[quizId])

    return(
        <div className="container">
            <h2>Quiz {quizId}</h2>
            <ul className="list-group">
                {
                    questions.map(question =>
                        <li
                            key={question._id}
                            className="list-group-item">
                                <Question
                                    question={question}
                                    graded={graded}
                                    setQuestionsWithAns={setQuestionsWithAns}
                                />
                        </li>
                    )
                }
                <li className={"list-group-item"}>
                    {
                        graded &&
                        <span className="h3">
                Score: {curScore}%
              </span>
                    }
                    <button
                        onClick={() => {
                            setgraded(true)
                            if (!graded) {
                                QuizService.submitQuiz(quizId, questionsWithAns).then(attempt => setCurScore(attempt.score))
                            }

                        }}
                        type="button"
                        className="btn btn-success float-right">
                        Submit
                    </button>
                </li>
            </ul>
            <Link
                to={`/courses/${courseId}/quizzes/${quiz._id}/attempts`}>
                View past attempts
            </Link>
        </div>
    );
}

export default Quiz;