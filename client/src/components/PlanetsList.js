import PlanetItem from "./PlanetItem";
import PlanetDetails from "./PlanetDetails";

const PlanetList = ({planets, onPlanetClick}) => {
    const planetsList = planets.map((planet) =>{
        return <PlanetItem planet={planet} key={planet._id} onPlanetClick={onPlanetClick} />
    });

    return(
        <>
            {planetsList}
        </>
        );
}

export default PlanetList;