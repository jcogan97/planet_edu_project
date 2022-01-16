import {useState} from 'react';
import './ComparePlanet.css';

const GetAges = ({planet, birthDate}) => {
    const [age, setAge] = useState(0)
    
    const daysAlive = (birthDate) => {
        const dateNow = new Date();
        const dateBorn = new Date(birthDate);

        const day = 1000 * 60 * 60 * 24;

        const timeDifference = dateNow.getTime() - dateBorn.getTime();

        const daysDifference = Math.round(timeDifference / day);

        return daysDifference;
        }


    if (planet.name === "Mercury") {
        setAge(age / 88)
    }
    else if (planet.name === "Venus") {
        setAge(age / 225)
    }
    else if (planet.name === "Earth") {
        setAge(age / 365)
    }
    else if (planet.name === "Mars") {
        setAge(age / 687)
    }
    else if (planet.name === "Jupiter") {
        setAge(age / 4333)
    }
    else if (planet.name === "Saturn") {
        setAge(age / 10759)
    }
    else if (planet.name === "Uranus") {
        setAge(age / 30687)
    }
    else if (planet.name === "Neptune")
        setAge(age / 60190)
    
    return (
        <div id="display-text">
            <p>{age} {planet.name} years</p>
        </div>
    )
    
}

export default GetAges;