import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import PlanetsContainer from './containers/PlanetsContainer';
import ErrorPage from './components/ErrorPage';
import Quiz from './components/Quiz/Quiz';
import ComparePlanets from './components/ComparePlanets/ComparePlanets';
import NavBar from './components/NavBar';


function App() {

  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    getPlanets();
  }, []);

  const getPlanets = () => {
    fetch("http://127.0.0.1:5000/api/planets")
      .then(results => results.json())
      .then(data => setPlanets(data));
  };

  


  return (
    <Router>
    <>
      <NavBar/>
      <Switch>

      <Route 
        exact path="/"
        render={() => <PlanetsContainer planets={planets} className="planets-container"/>} 
      />

      <Route path="/quiz" component={Quiz} />
      <Route 
        path="/compare-planets"
        render={() => <ComparePlanets planets={planets}/>} 
      />
      <Route component={ErrorPage} />
      </Switch>
    </>
    </Router>
  );
}

export default App;
