import '../Home/PlanetItem.css';
import './ComparePlanet.css';

const PlanetItemWithAge = ({planet, age}) => {

  const getAges = (planet, age) => {
    
    const ageInt = parseInt(age)
    const ageRelative = ageInt / planet.orbital_period;
    
    return ageRelative;
    
}

const relativeAge = getAges(planet, age);
  
      return (
        <>
        <img className='scalable drop-shadow' id={ planet.name } src={ planet.image } alt={ planet.name } />
        <p id="display-text">{relativeAge} {planet.name} years</p>
        
        
        </>
      );
  }
   
  export default PlanetItemWithAge;