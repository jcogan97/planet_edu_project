import '../Home/PlanetItem.css';
import './ComparePlanet.css';

const PlanetItemWithAge = ({planet, age}) => {

  const getAges = (planet, age) => {
    let ageRelative = 0

    if (planet.name === "Earth") {
      return age
    }
    else {
      const ageInt = parseInt(age)
      ageRelative = (ageInt / planet.orbital_period).toFixed(2);
    }
    
    
    
    return ageRelative;
    
  }

const relativeAge = getAges(planet, age);
  if (age > 0) {
    return (
      <>
          <img className='scalable drop-shadow' id={ planet.name } src={ planet.image } alt={ planet.name } />
        
          <p id="display-text">{relativeAge} {planet.name} years</p>
          </>
    )
  }
  else {
    return(
      <img className='scalable drop-shadow' id={ planet.name } src={ planet.image } alt={ planet.name } />
    )
    

  }
  }
    
   
  export default PlanetItemWithAge;