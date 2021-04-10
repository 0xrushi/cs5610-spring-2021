import React, {useState} from "react";
import './questions.css'
const MultipleChoiceQuestion = ({question}) => {
    const [answer, setAnswer] = useState("")
    const [graded, setGraded] = useState(false)

    return(
        <div>

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
                        <i className="fas fa-check" style={{color:"green"}}></i>
                    }
                    {
                        graded &&
                        answer != question.correct &&
                        <i className="fas fa-times" style={{color:"red"}}></i>
                    }
                </span>
            </div >

            <ul className="list-group pt-2">
            {
                question.choices.map((choice) => {
                    return(

                        <li
                            key={choice}
                            className={
                                `list-group-item
                    ${graded && question.correct === choice ? "list-group-item-success" : ``}
                    ${graded && question.correct !== choice && choice === answer ? "list-group-item-danger" : ``}
                    `}>
                            <input type="radio"
                                   name={question._id}
                                   onClick={() => setAnswer(choice)
                                   }
                            />
                            <label className="form-check-label ml-2" htmlFor="gridRadios2">
                                {choice}
                            </label>
                            {
                                graded && question.correct === choice &&
                                <i className={"fas fa-check float-right m-0"}></i>
                            }
                            {
                                graded && question.correct !== choice && choice === answer &&
                                <i className={"fas fa-times float-right"}></i>
                            }


                        </li>


                    )
                })
            }
            </ul>
            <p>Your Answer: {answer} </p>
            <p>{question.type}</p>
            <p>{question.correct}</p>

            <button
                onClick={() => setGraded(true)}
                type="button"
                className="btn btn-success mb-4">
                Grade
            </button>

        </div>
    )
}

export default MultipleChoiceQuestion;