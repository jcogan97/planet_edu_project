import { useState, useEffect } from 'react';
import BirthDateForm from './BirthDateForm';
import GetAges from './GetAges';
import PlanetListWithAges from './PlanetListWithAges';




const ComparePlanets = ({planets}) => {

    const [birthDate, setBirthDate] = useState("");

    const handleDateInput = (event) => {
        setBirthDate(event.target.value);
    };

 

    


    

    return (
        <>
            <BirthDateForm handleDateInput={handleDateInput} />
            
                <>
                    <PlanetListWithAges planets={planets} birthDate={birthDate}/>
                </>
                
            
            
            
            
        </>
    )

};

export default ComparePlanets;