import { useState, useEffect } from 'react';
import PlanetsList from "../components/Home/PlanetsList";

const PlanetsContainer = ({planets}) => {
  
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  

  const onPlanetClick = (planetName) => {
    const names = selectedPlanets.includes(planetName);
    if (names === false) {
      setSelectedPlanets([...selectedPlanets, planetName]);
      console.log(planetName);
      console.log(selectedPlanets);
    }

    else (
      setSelectedPlanets(selectedPlanets.filter((planet) => planet !== planetName))
    )

  };

  return (
    <>
      <PlanetsList planets={planets} onPlanetClick={onPlanetClick} selectedPlanets={selectedPlanets} className="planet-list"/>
      {/* {selectedPlanets && <PlanetDetails planets={selectedPlanets} />} */}
    </>
  );
};



export default PlanetsContainer;