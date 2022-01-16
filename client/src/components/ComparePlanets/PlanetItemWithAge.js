import '../Home/PlanetItem.css';
import GetAges from './GetAges';

const PlanetItemWithAge = ({planet, age}) => {

    
  
      return (
        <>
        <img className='scalable drop-shadow' id={ planet.name } src={ planet.image } alt={ planet.name } />
        <GetAges planet={planet} age={age} />
        
        </>
      );
  }
   
  export default PlanetItemWithAge;