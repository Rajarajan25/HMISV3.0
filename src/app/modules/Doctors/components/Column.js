import React from "react";
import styled from "@emotion/styled";
import Task from "./Task";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  width: 150px;
  background: white;
`;
const Title = styled("h8")`
  padding: 2px;
`;

const TaskList = styled("div")`

  
  
 
  
`;
const Column = ({ tasks, column, index }) => {
  const isDragDisabled = (column.id === "column-0");
  const isDropDisabled = (column.id != "column-0");
  return (
    <Draggable draggableId={column.id} index={index} type="column" isDragDisabled={isDragDisabled}>
      {provided => (
        <div>
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            key={index}

            isDragDisabled={isDragDisabled}
          >


          

            <Title>{column.title}</Title>
           
            <Droppable droppableId={column.id} index={index} type="task"  >
              {(provided, snapshot) => (
                 <Container>
                <div
                   isDraggingOver={snapshot.isDraggingOver}
                   {...provided.droppableProps}
                   ref={provided.innerRef}
                  

                >

               
                    <div>
                      {tasks.map((task, index) => (
                        <Task key={task.id} task={task} index={task.id} column={column}  />
                      ))}
                    </div>
                    {provided.placeholder}
                   

                </div>
                </Container>
              )}
            </Droppable>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
