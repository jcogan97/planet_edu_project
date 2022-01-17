import DragPlanetList from "./DragPlanetList";

const DragNDrop = ({planets, setPlanets}) => {
    return (
        <>
            <DragPlanetList planets={planets} setPlanets={setPlanets}/>
        </>
    );
}
 
export default DragNDrop;