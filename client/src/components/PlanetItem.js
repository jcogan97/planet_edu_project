import './PlanetItem.css';

const PlanetItem = ({planet, onPlanetClick}) => {

  const handleClick = () => {
    onPlanetClick(planet.name);
  };


    return (
      <img onClick={handleClick} className='scalable drop-shadow' id={ planet.name } src={ planet.image } alt={ planet.name } />
    );
}
 
export default PlanetItem;