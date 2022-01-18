import DragPlanetItem from "./DragPlanetItem";
import './DragPlanetList.css';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import { useEffect, useState } from "react";


const DragPlanetList = ({ planets }) => {
  
  const planetArray = planets
  const [planetOrder, setPlanetOrder] = useState([]);
  

  useEffect(() => {
    setPlanetOrder(shuffle(planetArray));
  }, [])

  

  const shuffle = (array) => {
    const newArray = array
    for (var i =0; i < newArray.length -1; i++) {
      var j = i + 1 + Math.floor(Math.random() * (newArray.length - i -1));

      const temp = newArray[j];
      newArray[j] = newArray[i];
      newArray[i] = temp;
    }
    return newArray;
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
        <Droppable droppableId="planetOrder" direction="horizontal">
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
      {
        planetOrder.length > 0
        &&
        planetOrder[0].name === "Mercury"
        &&
        planetOrder[1].name === "Venus"
        &&
        planetOrder[2].name === "Earth"
        &&
        planetOrder[3].name === "Mars"
        &&
        planetOrder[4].name === "Jupiter"
        &&
        planetOrder[5].name === "Saturn"
        &&
        planetOrder[6].name === "Uranus"
        &&
        planetOrder[7].name === "Neptune"
        ?
        <p>You are Winner</p>
        :
        null
      }
    </div>
  );
}

export default DragPlanetList;