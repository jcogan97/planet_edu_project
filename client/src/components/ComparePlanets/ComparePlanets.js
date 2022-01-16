import { useState, useEffect } from 'react';
import AgeForm from './AgeForm';
import PlanetListWithAges from './PlanetListWithAges';




const ComparePlanets = ({planets}) => {

    const [age, setAge] = useState(0);

    const handleDateInput = (event) => {
        setAge(event.target[0].value);
        console.log(event);
    };

 

    


    

    return (
        <>
            <AgeForm handleDateInput={handleDateInput} />
            
                <>
                    <PlanetListWithAges planets={planets} age={age}/>
                </>
                
            
            
            
            
        </>
    )

};

export default ComparePlanets;