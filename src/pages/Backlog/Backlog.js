import Task from '../../components/Task/Task';
import useDataFetching from '../../hooks/useDataFetching';
import './Backlog.css';

const dataSourceURL =
  'https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks';

function Backlog() {
  const [loading, error, tasks] = useDataFetching(dataSourceURL);
  return (
    <div className="Backlog-wrapper">
      <h2>Backlog</h2>
      <div className="Tasks-wrapper">
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
      </div>
    </div>
  );
}

export default Backlog;
