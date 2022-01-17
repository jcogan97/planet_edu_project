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
    if (planet.position_from_sun % 2 === 0) {
      return (
        <>
            <div id="absolute">
            <img className='scalable drop-shadow' id={ planet.name } src={ planet.image } alt={ planet.name } />
            </div>
          
            <div id="relative">
            <p id="display-text">{relativeAge} {planet.name} years</p>
            </div>
          </>
      )
    }
    else {
      return (
        <>
            <div id="relative-top">
            <p id="display-text">{relativeAge} {planet.name} years</p>
            </div>
            

          <div id="absolute">
            <img className='scalable drop-shadow' id={ planet.name } src={ planet.image } alt={ planet.name } />
          </div>
          </>
      )
    }
     }
    
  
  else {
    return(
      <img className='scalable drop-shadow' id={ planet.name } src={ planet.image } alt={ planet.name } />
    )
    

  }
}

    
   
  export default PlanetItemWithAge;