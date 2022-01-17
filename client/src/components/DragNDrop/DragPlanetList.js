import DragPlanetItem from "./DragPlanetItem";
import './DragPlanetList.css';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';


const DragPlanetList = ({ planets }) => {
  return (
    <div id="menu">
      <DragDropContext>
        <Droppable droppableId="planets">
          {(provided) => (
            <div className="table">
              <ul className="planet-ul-list" {...provided.droppableProps} ref={provided.innerRef}>
                {
                  planets.map((planet, index) => (
                    <Draggable key={planet._id} draggableId={planet._id} index={index}>
                      {(provided) => (
                        
                        <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                          <div>
                            <>
                              <DragPlanetItem id={ planet.name } planet={planet} key={planet._id} />
                            </>
                          </div>
                        </li>

                      
                      )}
                    </Draggable>
                  ))
                }
                {provided.placeholder}
              </ul>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default DragPlanetList;