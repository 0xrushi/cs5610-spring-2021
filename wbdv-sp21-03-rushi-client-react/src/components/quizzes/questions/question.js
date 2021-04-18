import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question, graded, setQuestionsWithAns}) => {
    return(
        <div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                    question={question}
                    graded={graded}
                    setQuestionsWithAns={setQuestionsWithAns}
                />
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                    setQuestionsWithAns={setQuestionsWithAns}
                    graded={graded}
                    question={question}/>
            }
        </div>
    )
}

export default Question;