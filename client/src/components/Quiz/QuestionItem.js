const QuestionItem = ({question, answers, correctAnswer}) => {

    const formData = new FormData();
    console.log(formData);

    return(
        <>
            <p id="text-is-evil">{question}</p>
            
                <input type="radio" id={answers.a} name={question} value={answers.a}/>
                <label for={answers.a} id="text-is-evil">{answers.a}</label>
                <input type="radio" id={answers.b} name={question} value={answers.b}/>
                <label for={answers.b} id="text-is-evil">{answers.b}</label>
            
        </>
    );
}

export default QuestionItem;