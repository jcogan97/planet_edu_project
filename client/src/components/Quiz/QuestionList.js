import { useEffect, useState } from 'react';
import QuestionItem from "./QuestionItem";
import './QuestionList.css'

const QuestionList = ({ questions }) => {

  const [number, setNumber] = useState(0)
  const [results, setResults] = useState({})
  const [incorrectAnswers, setIncorrectAnswers] = useState({})

  const handleResults = (newResults) => {
    setResults(newResults)
  };


  const listOfQuestions = questions.map((question, index) => {
    return <QuestionItem question={question.question} answers={question.answers} correctAnswer={question.correctAnswer} index={index} results={results} handleResults={handleResults} />

  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let runningTotal = 0
    const answers = {...incorrectAnswers}
    for (let key in results) {
      for (let question of questions) {
        if (key === question.question) {
          if (results[key] === question.correctAnswer) {
            runningTotal += 1
          } else {
            answers[key] = question.correctAnswer
          }
        }
      }
    }
    // console.log(answers);
    setNumber(runningTotal)
    setIncorrectAnswers(answers)
    // console.log(incorrectAnswers);
  };

  const incorrectNodes = () => {
    const array = []
    for (const [key, value] of Object.entries(incorrectAnswers)) {
    const pTag= <p>{key}: {value} </p>
    array.push(pTag)
  }
  return array
  }

  const incorrectArray = (array) => {
    if(array.length !== 0){
      return(
        <div className='answers'>
        <h2>What you got wrong</h2>
        <p>{array}</p>
        </div>
      )
    } else {
      return(
        <div className='answers'>
          <h2>Congratulations!!</h2>
          <p>You got every question right!</p>
        </div>
      )
    }
  }



  if(number >= 1){
    return (
      <>
      <div id="flex-container">
      <form id="form" onSubmit={handleSubmit}>
        {listOfQuestions}
        <div id="submit-btn">
          <input id="submit" type="submit" />
        </div>
        <p id="text-is-evil">You got {number} right!</p>
      </form>
          {incorrectArray(incorrectNodes())}
      </div>
      </>
    )} 
  else {
    return(
      <form id="form" onSubmit={handleSubmit}>
        {listOfQuestions}
        <div id="submit-btn">
          <input id="submit" type="submit" />
        </div>
      </form>
    )
  }
}

export default QuestionList;