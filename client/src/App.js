import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import PlanetsContainer from './containers/PlanetsContainer';
import ErrorPage from './components/ErrorPage';
import Quiz from './components/Quiz/Quiz';
import ComparePlanets from './components/ComparePlanets/ComparePlanets';
import NavBar from './components/NavBar';


function App() {
  

  return (
    <Router>
    <>
      <NavBar/>
      <Switch>
      <Route exact path="/" component={PlanetsContainer}/>
      <Route path="/quiz" component={Quiz} />
      <Route path="/compare-planets" component={ComparePlanets} />
      <Route component={ErrorPage} />
      </Switch>
    </>
    </Router>
  );
}

export default App;
