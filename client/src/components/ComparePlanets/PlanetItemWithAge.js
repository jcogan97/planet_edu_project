import '../Home/PlanetItem.css';
import GetAges from './GetAges';

const PlanetItemWithAge = ({planet, birthDate}) => {

    
  
      return (
        <>
        <img className='scalable drop-shadow' id={ planet.name } src={ planet.image } alt={ planet.name } />
        <GetAges planet={planet} birthDate={birthDate} />
        
        </>
      );
  }
   
  export default PlanetItemWithAge;