import { useEffect, useState } from 'react';
import QuestionItem from "./QuestionItem";
import './QuestionList.css'

const QuestionList = ({ questions }) => {

  const [number, setNumber] = useState(0)
  const [results, setResults] = useState({})

  const handleResults = (newResults) => {
    setResults(newResults)
  };


  const listOfQuestions = questions.map((question, index) => {
    return <QuestionItem question={question.question} answers={question.answers} correctAnswer={question.correctAnswer} index={index} results={results} handleResults={handleResults} />

  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let runningTotal = 0
    for (let key in results) {
      for (let question of questions) {
        if (key === question.question) {
          if (results[key] === question.correctAnswer) {
            runningTotal += 1
          }
        }
      }
    }
    setNumber(runningTotal)
  };


  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        {listOfQuestions}
        <input type="submit" />
        <p id="text-is-evil">You got {number} right!</p>
      </form>
    </>
  );
}

export default QuestionList;