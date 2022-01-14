import PlanetItem from "./PlanetItem";

const PlanetList = ({planets}) => {
    const planetsList = planets.map((planet) =>{
        return <PlanetItem planet={planet} key={planet._id} />
    });

    return(
        <>
            {planetsList}
        </>
        );
}

export default PlanetList;