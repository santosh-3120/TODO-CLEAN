import axios from 'axios';
import API from '../api'; 

const TodoItem = ({ task, refresh }) => {
  const toggleComplete = async () => {
    await API.put(`/api/tasks/${task._id}`, {
      completed: !task.completed,
    });
    refresh();
  };

  const deleteTask = async () => {
    await API.delete(`/api/tasks/${task._id}`);
    refresh();
  };

  return (
    <div className="task">
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
        }}
      >
        {task.title}
      </span>
      <div className="actions">
        <button onClick={toggleComplete}>
          {task.completed ? '↩️ Undo' : '✅ Done'}
        </button>
        <button onClick={deleteTask}>🗑️ Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
