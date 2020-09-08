import React, { useState } from 'react';
import Title from './Title';
import TaskContainer from './TaskContainer';
import InputBox from './InputBox';
import { getDefaultStatus, getNextStatus } from '../status';
import '../todo.css';

const generateNextId = function (prevId) {
  const [, num] = prevId.split('_');
  return 'id_'.concat(+num + 1);
};

const Todo = function (props) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('Todo');

  function toggleTaskStatus(taskId) {
    const updatedTasks = tasks.slice();
    const index = updatedTasks.findIndex((task) => task.id === taskId);
    updatedTasks[index].status = getNextStatus(updatedTasks[index].status);
    setTasks(updatedTasks);
  }

  function addTask(value) {
    const updatedTasks = tasks.slice();
    const prevTaskId = updatedTasks.length
      ? updatedTasks[updatedTasks.length - 1].id
      : 'id_-1';
    updatedTasks.push({
      content: value,
      status: getDefaultStatus(),
      id: generateNextId(prevTaskId),
    });
    setTasks(updatedTasks);
  }

  function deleteAllTasks() {
    setTasks([]);
  }

  function deleteTask(taskId) {
    let updatedTasks = tasks.slice();
    updatedTasks = updatedTasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  function updateTitle(title) {
    setTitle(title);
  }

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
