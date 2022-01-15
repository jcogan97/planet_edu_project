import './PlanetItem.css';

const PlanetItem = ({planet, onPlanetClick}) => {

  const handleClick = () => {
    onPlanetClick(planet.name);
  };


    return (
      <div className="solar-system planet-flex">
        <ul>
          <li onClick={handleClick}>

            <img className='scalable drop-shadow' id={ planet.name } src={ planet.image } alt={ planet.name } />
          </li>
        </ul>
      </div>
    );
}
 
export default PlanetItem;