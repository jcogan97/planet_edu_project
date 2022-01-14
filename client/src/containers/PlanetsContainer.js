import { useState, useEffect } from 'react';
import PlanetsList from "../components/PlanetsList";

const PlanetsContainer = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        getPlanets();
    });

    const getPlanets = () => {
        fetch("http://127.0.0.1:5000/api/planets")
        .then(results => results.json())
        .then(data => setPlanets(data));
    };

    return (
        <>
            <PlanetsList planets={planets} />
        </>
    );
};



export default PlanetsContainer;