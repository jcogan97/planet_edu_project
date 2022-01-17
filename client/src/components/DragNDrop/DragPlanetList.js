import DragPlanetItem from "./DragPlanetItem";
import './DragPlanetList.css';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import { useEffect, useState } from "react";


const DragPlanetList = ({ planets }) => {

  const [planetOrder, setPlanetOrder] = useState([]);

  useEffect(() => {
    setPlanetOrder(planets)
  }, [])

  const shuffle = (array) => {
    for (var i =0; i < array.length -1; i++) {
      var j = i + 1 + Math.floor(Math.random() * (array.length - i -1));

      const temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
    return array;
  }

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    console.log(result)

    const items = Array.from(planetOrder);
    const [reorderedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItems);
    setPlanetOrder(items);
    
  }

  return (
    <div id="menu">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="planets" direction="horizontal">
          {(provided) => (
            <div className="table">
              <ul className="planet-ul-list" {...provided.droppableProps} ref={provided.innerRef}>
                {
                  planetOrder.map((planet, index) => (
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