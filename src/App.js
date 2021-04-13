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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
