import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './components/TodoItem';
import API from './api'; 


function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  // Fetch tasks
  const getTasks = async () => {
    const res = await API.get('/api/tasks');
    setTasks(res.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  // Add task
  const addTask = async () => {
    if (title.trim() === '') return;
    await API.post('/api/tasks', { title,completed:false });
    setTitle('');
    getTasks();
  };

  return (
    <div className="container">
      <h1>📝 To-Do List</h1>
      <div className="input-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTask}>➕ Add</button>
      </div>

      {tasks.map((task) => (
        <TodoItem key={task._id} task={task} refresh={getTasks} />
      ))}
    </div>
  );
}

export default App;
