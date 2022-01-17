import { useState , useEffect} from "react";

const QuestionItem = ({question, answers, correctAnswer, index, results}) => {

    


    const pushResult = (event) => {

        const value = event.target.value
        if( value === correctAnswer){
            results.push(value)
        };
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