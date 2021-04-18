import React, {useState} from "react";
import './questions.css'

const MultipleChoiceQuestion = ({question, graded, setQuestionsWithAns}) => {
    const [answer, setAnswer] = useState("")


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
                        graded && <h1>sdsdsdsd</h1>&&
                        (answer.localeCompare(question.correct) ===0) && //ans = questiosn.correct
                        <i className="fas fa-check" ></i>
                    }
                    {
                        graded &&
                        (answer.localeCompare(question.correct) !==0) &&
                        <i className="fas fa-times" ></i>
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
                    ${graded && choice.localeCompare(question.correct) ===0 ? "list-group-item-success" : ``}
                    ${graded && choice.localeCompare(question.correct) !==0 ? "list-group-item-danger" : ``}
                    `}>
                            <input type="radio"
                                   name={question._id}
                                   onClick={
                                       () => {
                                           setAnswer(choice)
                                           setQuestionsWithAns(prev => prev.map(q => {
                                               if(q._id=== question._id){
                                                   return {...q, answer:choice}
                                               }
                                               else{
                                                   return q
                                               }
                                               }
                                               )
                                           )
                                       }
                                   }
                            />
                            <label className="form-check-label ml-2" htmlFor="gridRadios2">
                                {choice}
                            </label>
                            {
                                graded && choice.localeCompare(question.correct) ===0 &&
                                <i className={"fas fa-check float-right m-0"}></i>
                            }
                            {
                                graded && choice.localeCompare(question.correct) !==0 && choice.localeCompare(answer) ===0 &&
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

            {/*<button*/}
            {/*    onClick={() => setGraded(true)}*/}
            {/*    type="button"*/}
            {/*    className="btn btn-success mb-4">*/}
            {/*    Grade*/}
            {/*</button>*/}

        </div>
    )
}

export default MultipleChoiceQuestion;