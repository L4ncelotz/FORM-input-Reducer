// src/components/TaskList.jsx
export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center justify-between p-2 border border-gray-200 rounded">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={task.done}
              onChange={(e) => onChangeTask({ ...task, done: e.target.checked })}
              className="mr-2"
            />
            <span className={task.done ? 'line-through text-gray-400' : ''}>{task.text}</span>
          </div>
          <button 
            onClick={() => onDeleteTask(task.id)} 
            className="ml-2 p-1 bg-red-500 text-white rounded hover:bg-red-600">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
