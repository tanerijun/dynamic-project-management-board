import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useDataFetching from '../../hooks/useDataFetching';
import Lane from '../../components/Lane/Lane';

const BoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5%;
`;

const lanes = [
  { id: 1, title: 'To Do' },
  { id: 2, title: 'In Progress' },
  { id: 3, title: 'Review' },
  { id: 4, title: 'Done' },
];

const dataSourceURL =
  'https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks';

// HTML5 Drag and Drop API
function onDragStart(e, id) {
  e.dataTransfer.setData('id', id);
}

function onDragOver(e) {
  e.preventDefault();
}

function Board() {
  const [loading, error, data] = useDataFetching(dataSourceURL);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, [data]);

  // HTML5 Drag and Drop API
  function onDrop(e, laneId) {
    const id = e.dataTransfer.getData('id');

    const updatedTasks = tasks.map((task) => {
      if (task.id.toString() === id) {
        task.lane = laneId;
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <BoardWrapper>
      {lanes.map((lane) => (
        <Lane
          key={lane.id}
          laneId={lane.id}
          title={lane.title}
          loading={loading}
          error={error}
          tasks={tasks.filter((task) => task.lane === lane.id)}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
        />
      ))}
    </BoardWrapper>
  );
}

export default Board;
