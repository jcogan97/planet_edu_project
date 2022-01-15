import QuestionItem from "./QuestionItem";

const QuestionList = ({questions}) => {
    
    const listOfQuestions = questions.map((question) => {
        return <QuestionItem question={question.question} answers={question.answers} correctAnswer={question.correctAnswer}/>
        
    })
    return(
        <>
        <h1 id="text-is-evil">This is the list of questions</h1>
        {listOfQuestions}
        </>
    );
}

export default QuestionList;