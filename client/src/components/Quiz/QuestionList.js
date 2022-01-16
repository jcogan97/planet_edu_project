import {useEffect, useState} from 'react';
import QuestionItem from "./QuestionItem";

const QuestionList = ({questions}) => {
    
    const [result, setResult] = useState({})




    const listOfQuestions = questions.map((question, index) => {
        return <QuestionItem question={question.question} answers={question.answers} correctAnswer={question.correctAnswer} index={index} result={result} setResult={setResult}/>
        
    });

    const handleSubmit = (event) => {
		event.preventDefault();
        // const data = {result};
        // const json = JSON.stringify(data, null, 4);
		// console.log(json);
        console.log(result);
    };
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                {listOfQuestions}
                <input type="submit"/>
            </form>
        </>
    );
}

export default QuestionList;