const QuestionItem = ({question, answers, correctAnswer}) => {


    return(
        <>
            <p id="text-is-evil">{question}</p>
            <form>
                <input type="radio" id={answers.a} name={question} value={answers.a}/>
                <label for={answers.a} id="text-is-evil">{answers.a}</label>
                <input type="radio" id={answers.b} name={question} value={answers.b}/>
                <label for={answers.b} id="text-is-evil">{answers.b}</label>
                <input type="radio" id={answers.c} name={question} value={answers.c}/>
                <label for={answers.c} id="text-is-evil">{answers.c}</label>
                <input type="radio" id={answers.d} name={question} value={answers.d}/>
                <label for={answers.d} id="text-is-evil">{answers.d}</label>
            </form>

        </>
    );
}

export default QuestionItem;