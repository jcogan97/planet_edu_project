import { useState } from 'react';
import DataForm from './DataForm';
import PlanetListWithAges from './PlanetListWithAges';
import './ComparePlanet.css';
import PlanetListWithWeight from './PlanetListWithWeight';




const ComparePlanets = ({planets}) => {

    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);

    const handleDateInput = (event) => {
        setAge(event.target[0].value);
        setWeight(0);
    };

    const handleWeightInput = (event) => {
        setWeight(event.target[0].value);
        setAge(0);
    };

 

    


    

    return (
        <>
        
        
        <div id="info">
            <DataForm handleDateInput={handleDateInput} handleWeightInput={handleWeightInput} />
        </div>
        
            {weight === 0
            ?
            <>
            <PlanetListWithAges planets={planets} age={age}/>
            </>
            :
            <PlanetListWithWeight planets={planets} weight={weight} />
            }
            
                
                
            
            
            
            
        </>
    )

};

export default ComparePlanets;