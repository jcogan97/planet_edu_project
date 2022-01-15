import PlanetItem from "./PlanetItem";
import PlanetDetails from "./PlanetDetails";

const PlanetList = ({planets, onPlanetClick, selectedPlanets}) => {
    // const planetsList = planets.map((planet) =>{
    //     return <PlanetItem planet={planet} key={planet._id} onPlanetClick={onPlanetClick} />
    // });

    return(
        <div className="planet-flex">
            {
                planets.map((planet, index) => (
                    <div className="main-container" key={`Container${index}`}>
                        <PlanetItem planet={planet} key={planet._id} onPlanetClick={onPlanetClick} />
                        {planet && <PlanetDetails planet={planet} key={`${index} Card`} />}
                    </div>   
                ))
            }
        </div>
        );
}

export default PlanetList;