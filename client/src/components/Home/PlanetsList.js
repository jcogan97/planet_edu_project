import PlanetItem from "./PlanetItem";
import PlanetDetails from "./PlanetDetails";
import './PlanetsList.css';

const PlanetList = ({ planets, onPlanetClick, selectedPlanets, setPlanets }) => {
  // const planetsList = planets.map((planet) =>{
  //     return <PlanetItem planet={planet} key={planet._id} onPlanetClick={onPlanetClick} />
  // });

  return (
    <>
    <h3 id="header">Click on the planets for more information</h3>
    <div className="pizza-planet">
      <ul className="planet-ul-list">
        {
          planets.map((planet, index) => (
            <li className="planet-li">
              <div className={`list-container-${index}`} key={`Container${index}`}>
                {
                  index % 2 === 0
                    ?
                    <>
                      <PlanetItem planet={planet} key={planet._id} onPlanetClick={onPlanetClick} />
                      {selectedPlanets.includes(planet.name) && <PlanetDetails planet={planet} key={`${index} Card`} />}
                    </>
                    :
                    <>
                      {selectedPlanets.includes(planet.name) && <PlanetDetails planet={planet} key={`${index} Card`} />}
                      <PlanetItem planet={planet} key={planet._id} onPlanetClick={onPlanetClick} />
                    </>
                }
              </div>
            </li>
          ))
        }
      </ul>
    </div>
    </>
  );
}

export default PlanetList;