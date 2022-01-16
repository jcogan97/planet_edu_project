import PlanetItemWithAge from './PlanetItemWithAge';
import '../Home/PlanetsList.css';
import GetAges from './GetAges';
import './ComparePlanet.css';


const PlanetListWithAges = ({planets, birthDate}) => {
    
    return(
        <div className="pizza-planet">
            {
                planets.map((planet, index) => (
                    <div className={`list-container-${index}`} key={`Container${index}`}>
                        {
                            <>
                                <PlanetItemWithAge planet={planet} birthDate={birthDate} key={planet._id}/>
                                
                        
                                
                            </>
                            
                        }
                    </div>   
                ))
            }
        </div>
        );
}

export default PlanetListWithAges;