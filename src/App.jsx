// src/App.jsx
import { useReducer } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import tasksReducer from './components/TasksReducer';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: tasks.length, // ใช้ความยาวของ array เป็น ID
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">Task List</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
