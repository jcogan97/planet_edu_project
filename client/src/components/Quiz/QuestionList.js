import {useState} from 'react';
import QuestionItem from "./QuestionItem";

const QuestionList = ({questions}) => {
    
    const [formData, setformData] = useState({});

    const listOfQuestions = questions.map((question) => {
        return <QuestionItem question={question.question} answers={question.answers} correctAnswer={question.correctAnswer}/>
        
    });

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }
    
    return(
        <>
        <form onSubmit={onSubmit}>
            {listOfQuestions}
            <input type="submit"/>
        </form>
        </>
    );
}

export default QuestionList;