import { useState , useEffect} from "react";

const QuestionItem = ({question, answers, correctAnswer, index, result, setResult}) => {


    const pushResult = (event) => {

        const value = event.target.value
        result[index] = value
        console.log("index:", index, "result:", result, "correct answer:", correctAnswer);
        };
    
    

    return(
        <>
            <div className="question">
            <p id="text-is-evil">{question}</p>
                <input type="radio" name={index} value="a" onChange={pushResult} />
                <label id="text-is-evil" htmlFor="{answers.a}">{answers.a}</label>
                <input type="radio" name={index} value="b" onChange={pushResult} />
                <label id="text-is-evil" htmlFor="{answers.b}">{answers.b}</label>
            </div>
        </>
    );
}

export default QuestionItem;