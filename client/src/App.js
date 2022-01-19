import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import PlanetsContainer from './containers/PlanetsContainer';
import ErrorPage from './components/ErrorPage';
import Quiz from './components/Quiz/Quiz';
import ComparePlanets from './components/ComparePlanets/ComparePlanets';
import NavBar from './components/NavBar';
import DragNDrop from './components/DragNDrop/DragNDrop';


function App() {

  const [planets, setPlanets] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getPlanets();
  }, [planets]);

  useEffect(() => {
    getQuestions();
  }, [questions]);

  const getPlanets = () => {
    fetch("http://127.0.0.1:5000/api/planets")
      .then(results => results.json())
      .then(data => setPlanets(data));
  };

  const getQuestions = () => {
    fetch("http://127.0.0.1:5000/api/questions")
      .then(results => results.json())
      .then(data => setQuestions(data));
  };

  return (
    <>
    <Router>
    <>
      <NavBar/>
      <div id="sun-wrapper">
        <img id="the-sun" src="https://pluspng.com/img-png/sun-png-bright-sun-2249.png" alt="The Shiny Thing in the Sky"/>
      </div>
      <Switch>

      <Route 
        exact path="/"
        render={() => <PlanetsContainer planets={planets} setPlanets={setPlanets} className="planets-container"/>} 
      />

      <Route path="/quiz" 
      render={() => <Quiz questions={questions} />}
      />

      <Route 
        path="/compare-planets"
        render={() => <ComparePlanets planets={planets} />} 
      />
      <Route 
        path="/order-planets"
        render={() => <DragNDrop planets={planets} />} 
      />
      <Route component={ErrorPage} />
      </Switch>
    </>
    </Router>
    </>
  );
}

export default App;
