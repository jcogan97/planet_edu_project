import PlanetItem from "./PlanetItem";
import PlanetDetails from "./PlanetDetails";
import './PlanetsList.css';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

const PlanetList = ({ planets, onPlanetClick, selectedPlanets, setPlanets }) => {
  // const planetsList = planets.map((planet) =>{
  //     return <PlanetItem planet={planet} key={planet._id} onPlanetClick={onPlanetClick} />
  // });

  return (
    <div className="pizza-planet">
      <DragDropContext>
        <Droppable droppableId="planets">
          {(provided) => (
            <ul className="planet-ul-list" {...provided.droppableProps} ref={provided.innerRef}>
              {
                planets.map((planet, index) => (
                  <Draggable key={planet._id} draggableId={planet._id} index={index}>
                    {(provided) => (
                      <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
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
                    )}
                  </Draggable>
                ))
              }
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default PlanetList;