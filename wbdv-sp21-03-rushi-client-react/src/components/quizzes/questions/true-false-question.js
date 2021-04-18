import React, {useState} from "react";
import './questions.css'
const TrueFalseQuestion = ({question, graded, setQuestionsWithAns}) => {
    const [answer, setAnswer] = useState(null)

    return (
        <div className={"container"}>
            <div className={"row"}>
                <span className={"float-left col-md-11"} >
                    <h4>
                    {question.question}
                    </h4>
                </span>
                <span className="float-right col-md-1" style={{textAlign:"center"}}>
                    {
                        graded &&
                        answer == question.correct &&
                        <i className="fas fa-check"></i>
                    }
                    {
                        graded &&
                        answer != question.correct &&
                        <i className="fas fa-times"></i>
                    }
                </span>
            </div >
            <div >
            <ul className="list-group pt-2">
                <li className={
                    `list-group-item
                                ${graded && question.correct === "true" ? "list-group-item-success" : ""}
                                ${graded && question.correct !== "true" && answer === "false" ? "list-group-item-danger" : ""}
                            `}
                >
                    <input
                        type="radio"
                        name={question._id}
                        onClick={() => {
                            setAnswer("true")
                            setQuestionsWithAns((prev) =>
                            prev.map((q) =>  {
                                if(q._id === question._id){
                                    return {
                                        ...q,
                                        answer:"true"
                                    }
                                }
                                else{
                                    return q
                                }
                            }))
                        }}/>
                    <label className="form-check-label ml-2">
                        True
                    </label>
                    {
                        graded && question.correct === "true" &&
                        <i className={"fas fa-check float-right m-0"}></i>
                    }
                    {
                        graded && question.correct !== "true" && answer === "true" &&
                        <i className={"fas fa-times float-right"}></i>
                    }
                </li>
                <li className={
                    `list-group-item
                                ${graded && question.correct === "false"  ? "list-group-item-success" : ""}
                                ${graded && question.correct !== "false" && answer === "true" ? "list-group-item-danger" : ""}
                            `}
                >
                    <input
                        type="radio"
                        name={question._id}
                        onClick={() => {
                            setAnswer("false" )
                            setQuestionsWithAns((prev) =>
                                prev.map((q) => {
                                        if (q._id === question._id) {
                                            return {...q, answer: "false"}
                                        } else {
                                            return q
                                        }
                                    }

                                )
                            )
                        }}/>
                    <label className="form-check-label ml-2">
                        False
                    </label>
                    {
                        graded && question.correct === "false" &&
                        <i className={"fas fa-check float-right m-0"}></i>
                    }
                    {
                        graded && question.correct !== "false" && answer === "true" &&
                        <i className={"fas fa-times float-right"}></i>
                    }
                </li>


            </ul>
            </div>

            <p className={"mt-3"}>
                Your answer: {answer}
            </p>

            {/*<button*/}
            {/*    onClick={() => setGraded(true)}*/}
            {/*    type="button"*/}
            {/*    className="btn btn-success mb-4">*/}
            {/*    Grade*/}
            {/*</button>*/}
        </div>
    )
}

export default TrueFalseQuestion;