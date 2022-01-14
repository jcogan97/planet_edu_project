const PlanetItem = ({planet}) => {
    return (
        <div>
            <ul>
                <li>
                    <h5>{ planet.name }</h5>
                    <img src="https://cdn2.iconfinder.com/data/icons/education-solid-icons-volume-2/64/057-512.png" alt="planet :)" />
                </li>
            </ul>
        </div>
    );
}
 
export default PlanetItem;