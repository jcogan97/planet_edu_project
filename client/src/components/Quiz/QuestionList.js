import {useEffect, useState} from 'react';
import QuestionItem from "./QuestionItem";
import './QuestionList.css'

const QuestionList = ({questions}) => {
    
    const [number, setNumber] = useState(0)
    
    const results = []

    const isHidden = (results.length = 0) ? "visible" : "hidden"

    const listOfQuestions = questions.map((question, index) => {
        return <QuestionItem question={question.question} answers={question.answers} correctAnswer={question.correctAnswer} index={index} results={results} />
        
    });

    const handleSubmit = (event) => {
		event.preventDefault();
        const numberOfCorrectAnswers = results.length
        setNumber(numberOfCorrectAnswers);
    };

    
    return(
        <>
            <form id="form" onSubmit={handleSubmit}>
                {listOfQuestions}
                <input type="submit"/>
                <p className={isHidden} id="text-is-evil">you got {number} right!</p>
            </form>
        </>
    );
}

export default QuestionList;