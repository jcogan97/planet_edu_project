import { useState, useEffect } from 'react';
import PlanetsList from "../components/PlanetsList";
import PlanetDetails from '../components/PlanetDetails';

const PlanetsContainer = () => {
    const [planets, setPlanets] = useState([]);
    const [selectedPlanets, setSelectedPlanets] = useState([]);

    useEffect(() => {
        getPlanets();
    });

    const getPlanets = () => {
        fetch("http://127.0.0.1:5000/api/planets")
        .then(results => results.json())
        .then(data => setPlanets(data));
    };

    const onPlanetClick = (planet) => {
        const names = selectedPlanets.filter(selected => selected.name === planet.name);
        if (names == false) {
            setSelectedPlanets([...selectedPlanets, planet]);
            console.log(planet);
            console.log(selectedPlanets);
        };
        
        
    };

    return (
        <>
            <PlanetsList planets={planets} onPlanetClick={onPlanetClick} />
            {selectedPlanets ? <PlanetDetails planets={selectedPlanets} /> : null}
        </>
    );
};



export default PlanetsContainer;