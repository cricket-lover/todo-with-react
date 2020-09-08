import React, { useState } from 'react';
import Title from './Title';
import TaskContainer from './TaskContainer';
import InputBox from './InputBox';
import { getDefaultStatus, getNextStatus } from '../status';
import '../todo.css';

const Todo = (props) => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('Todo');
  const [prevId, setPrevId] = useState(0);

  const toggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.slice();
    const index = updatedTasks.findIndex((task) => task.id === taskId);
    updatedTasks[index].status = getNextStatus(updatedTasks[index].status);
    setTasks(updatedTasks);
  };

  const addTask = (value) => {
    const updatedTasks = tasks.slice();
    updatedTasks.push({
      content: value,
      status: getDefaultStatus(),
      id: prevId,
    });
    setTasks(updatedTasks);
    setPrevId(prevId + 1);
  };

  const deleteAllTasks = () => setTasks([]);

  const deleteTask = (taskId) => {
    let updatedTasks = tasks.slice();
    updatedTasks = updatedTasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const updateTitle = (title) => setTitle(title);

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
