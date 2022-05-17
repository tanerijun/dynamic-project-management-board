import styled from 'styled-components';
import Task from '../../components/Task/Task';
import useDataFetching from '../../hooks/useDataFetching';

const BacklogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;

  h2 {
    width: 100%;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid darkGray;
  }

  .Backlog-task {
    width: 100%;
  }
`;

const TaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5%;
`;

const dataSourceURL =
  'https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks';

function Backlog() {
  const [loading, error, tasks] = useDataFetching(dataSourceURL);
  return (
    <BacklogWrapper>
      <h2>Backlog</h2>
      <TaskWrapper>
        {loading || error ? (
          <span>{error || 'Loading...'}</span>
        ) : (
          tasks.map((task) => (
            <div className="Backlog-task">
              <Task
                key={task.id}
                title={task.title}
                body={task.body}
                onDragStart={() => {}}
              />
            </div>
          ))
        )}
      </TaskWrapper>
    </BacklogWrapper>
  );
}

export default Backlog;
