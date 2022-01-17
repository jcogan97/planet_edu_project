
const DragPlanetItem = ({planet}) => {
    return (
        <>
            <img className="scalable drop-shadow" id={ planet.name } src={ planet.image } alt={ planet.name } />
        </>
    );
}
 
export default DragPlanetItem;