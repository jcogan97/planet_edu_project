import './PlanetItem.css';

const PlanetItem = ({planet, onPlanetClick}) => {

  const handleClick = () => {
    onPlanetClick(planet);
  };


    return (
        <div>
          <div className="solar-system planet-flex">
            <ul>
              <li onClick={handleClick}>
                <img className='scalable' id={ planet.name } src={ planet.image } alt={ planet.name } />
              </li>
            </ul>
          </div>
        </div>
    );
}
 
export default PlanetItem;