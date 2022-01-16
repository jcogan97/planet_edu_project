import {useState} from 'react';
import './ComparePlanet.css';

const GetAges = ({planet, age}) => {
    
    
    let ageRelative = parseInt(age);


    if (planet.name === "Mercury") {
        age /= 88
    }
    else if (planet.name === "Venus") {
        age /= 225
    }
    else if (planet.name === "Earth") {
        age /= 365
    }
    else if (planet.name === "Mars") {
        age /= 687
    }
    else if (planet.name === "Jupiter") {
        age /= 4333
    }
    else if (planet.name === "Saturn") {
        age /= 10759
    }
    else if (planet.name === "Uranus") {
        age /= 30687
    }
    else if (planet.name === "Neptune")
        age /= 60190
    
    return (
        <div id="display-text">
            <p>{age} {planet.name} years</p>
        </div>
    )
    
}

export default GetAges;