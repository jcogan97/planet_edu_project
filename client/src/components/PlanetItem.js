import './PlanetItem.css';

const PlanetItem = ({planet}) => {
    return (
        <div>
          <div className="solar-system planet-flex">
            <ul>
              <li>
                <img className='scalable' id={ planet.name } src={ planet.image } alt={ planet.name } />
              </li>
            </ul>
          </div>
        </div>
    );
}
 
export default PlanetItem;