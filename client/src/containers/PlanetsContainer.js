import { useState, useEffect } from 'react';
import PlanetsList from "../components/PlanetsList";
import PlanetDetails from '../components/PlanetDetails';

const PlanetsContainer = () => {
    const [planets, setPlanets] = useState([]);
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    useEffect(() => {
        getPlanets();
    });

    const getPlanets = () => {
        fetch("http://127.0.0.1:5000/api/planets")
        .then(results => results.json())
        .then(data => setPlanets(data));
    };

    const onPlanetClick = (planet) => {
        setSelectedPlanet(planet);
    };

    return (
        <>
            <PlanetsList planets={planets} onPlanetClick={onPlanetClick} />
            {selectedPlanet ? <PlanetDetails planet={selectedPlanet} /> : null}
        </>
    );
};



export default PlanetsContainer;