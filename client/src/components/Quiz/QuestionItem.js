import { useState , useEffect} from "react";

const QuestionItem = ({question, answers, correctAnswer, index, results, handleResults}) => {

    


    const pushResult = (event) => {
        const temp = {...results}
        temp[event.target.name] = event.target.value
        handleResults(temp)
    };
    
        

    return(
        <>
            <div className="question">
            <p id="text-is-evil">{question}</p>
                <input type="radio" name={question} value="a" onChange={pushResult} />
                <label id="text-is-evil" htmlFor="{answers.a}">{answers.a}</label>
                <input type="radio" name={question} value="b" onChange={pushResult} />
                <label id="text-is-evil" htmlFor="{answers.b}">{answers.b}</label>
            </div>
        </>
    );
}

export default QuestionItem;