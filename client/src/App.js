import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import PlanetsContainer from './containers/PlanetsContainer';
import ErrorPage from './components/ErrorPage';
import Quiz from './components/Quiz';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
    <>
      <NavBar/>
      <Switch>
      <Route exact path="/" component={PlanetsContainer} className="planets-container" />
      <Route path="/quiz" component={Quiz} />
      <Route component={ErrorPage} />
      </Switch>
    </>
    </Router>
  );
}

export default App;
