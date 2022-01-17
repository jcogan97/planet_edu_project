import PlanetItemWithWeight from './PlanetItemWithWeight';
import '../Home/PlanetsList.css';
import './ComparePlanet.css';


const PlanetListWithWeight = ({planets, weight}) => {
    
    return(
        <div className="pizza-planet">
            {
                planets.map((planet, index) => (
                    <div className={`list-container-${index}`} key={`Container${index}`}>
                        {
                            <>
                                <PlanetItemWithWeight planet={planet} weight={weight} key={planet._id}/>
                               
                                
                        
                                
                            </>
                            
                        }
                    </div>   
                ))
            }
        </div>
        );
}

export default PlanetListWithWeight;