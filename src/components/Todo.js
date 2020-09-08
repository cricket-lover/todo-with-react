import React, { useState } from 'react';
import Title from './Title';
import TaskContainer from './TaskContainer';
import InputBox from './InputBox';
import TodoAPI from './todoApi';
import '../todo.css';

const Todo = (props) => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('Todo');
  const [prevId, setPrevId] = useState(0);

  const toggleTaskStatus = (taskId) => {
    const updatedTasks = TodoAPI.toggleTaskStatus(taskId);
    setTasks(updatedTasks);
  };

  const addTask = (value) => {
    const updatedTasks = TodoAPI.addTask(value);
    setTasks(updatedTasks);
    setPrevId(prevId + 1);
  };

  const deleteAllTasks = () => {
    TodoAPI.deleteAllTasks();
    setTasks([]);
  };

  const deleteTask = (taskId) => {
    let updatedTasks = TodoAPI.deleteTask(taskId);
    setTasks(updatedTasks);
  };

  const updateTitle = (title) => {
    const newTitle = TodoAPI.updateTitle(title);
    setTitle(newTitle);
  };

  return (
    <div className="todo-container">
      <Title
        value={title}
        onChange={updateTitle}
        deleteAllTasks={deleteAllTasks}
      />
      <TaskContainer
        deleteTask={deleteTask}
        tasks={tasks}
        toggleTaskStatus={toggleTaskStatus}
      />
      <InputBox className="taskInput" onEnterPress={addTask} />
    </div>
  );
};

export default Todo;
