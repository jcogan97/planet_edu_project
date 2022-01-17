import '../Home/PlanetItem.css';
import './ComparePlanet.css';

const PlanetItemWithWeight = ({planet, weight}) => {

  const getWeights = (planet, weight) => {
    let weightRelative = 0

    if (planet.name === "Earth") {
      return weight;
    }
    else {
      const weightInt = parseInt(weight)
      weightRelative = (weightInt * planet.multiple_of_earth_gravity).toFixed(2);
    }
    
    
    
    return weightRelative;
    
  }



const relativeWeight = getWeights(planet, weight);
  
    if (!(planet.position_from_sun % 2 === 0)) {
        return (
            <>
    
                <div id="relative-top-weight">
                <p id="display-text">{planet.name}: {relativeWeight} kg</p>
                </div>
                
    
              <div id="absolute">
                <img className='scalable drop-shadow' id={ planet.name } src={ planet.image } alt={ planet.name } />
              </div>
              </>
          )
        }    
     
    else {
        return (
            <>
                <div id="absolute">
                <img className='scalable drop-shadow' id={ planet.name } src={ planet.image } alt={ planet.name } />
                </div>
              
                <div id="relative-bottom-weight">
                <p id="display-text">{planet.name}: {relativeWeight} kg </p>
                </div>
              </>
          )
        }
      
     }
    
  
  


    
   
  export default PlanetItemWithWeight;