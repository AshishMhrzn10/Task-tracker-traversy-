import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'dsfd',
      day: 'feb 2nd at 2:30pm'
    },
    {
      id: 2,
      text: 'fsdf',
      day: 'feb 3rd at 1:30pm'
    }
  ]);

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

export default App;
