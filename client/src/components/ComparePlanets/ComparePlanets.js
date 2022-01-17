import { useState } from 'react';
import AgeForm from './AgeForm';
import PlanetListWithAges from './PlanetListWithAges';
import './ComparePlanet.css';




const ComparePlanets = ({planets}) => {

    const [age, setAge] = useState(0);

    const handleDateInput = (event) => {
        setAge(event.target[0].value);
        console.log(event);
    };

 

    


    

    return (
        <>
        <div id="info">
            <AgeForm handleDateInput={handleDateInput} />
        </div>
            
            
                <>
                    <PlanetListWithAges planets={planets} age={age}/>
                </>
                
            
            
            
            
        </>
    )

};

export default ComparePlanets;