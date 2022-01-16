import PlanetItemWithAge from './PlanetItemWithAge';
import '../Home/PlanetsList.css';
import GetAges from './GetAges';
import './ComparePlanet.css';


const PlanetListWithAges = ({planets, age}) => {
    
    return(
        <div className="pizza-planet">
            {
                planets.map((planet, index) => (
                    <div className={`list-container-${index}`} key={`Container${index}`}>
                        {
                            <>
                                <PlanetItemWithAge planet={planet} age={age} key={planet._id}/>
                                
                        
                                
                            </>
                            
                        }
                    </div>   
                ))
            }
        </div>
        );
}

export default PlanetListWithAges;