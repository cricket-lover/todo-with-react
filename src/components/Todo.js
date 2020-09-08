import React, { useState, useEffect } from 'react';
import Title from './Title';
import TaskContainer from './TaskContainer';
import InputBox from './InputBox';
import TodoAPI from './todoApi';
import '../todo.css';

const Todo = (props) => {
  const [todo, setTodo] = useState({ Title: 'Todo', tasks: [] });
  useEffect(() => {
    TodoAPI.getTodo().then(setTodo);
  }, []);

  const updateTodo = () => TodoAPI.getTodo().then(setTodo);

  const toggleTaskStatus = (taskId) => {
    TodoAPI.toggleTaskStatus(taskId).then(updateTodo);
  };

  const addTask = (value) => {
    TodoAPI.addTask(value).then(updateTodo);
  };

  const deleteAllTasks = () => {
    TodoAPI.resetTodo().then(updateTodo);
  };

  const deleteTask = (taskId) => {
    TodoAPI.deleteTask(taskId).then(updateTodo);
  };

  const updateTitle = (title) => {
    TodoAPI.updateTitle(title).then(updateTodo);
  };

  return (
    <div className="todo-container">
      <Title
        value={todo.title}
        onChange={updateTitle}
        deleteAllTasks={deleteAllTasks}
      />
      <TaskContainer
        deleteTask={deleteTask}
        tasks={todo.tasks}
        toggleTaskStatus={toggleTaskStatus}
      />
      <InputBox className="taskInput" onEnterPress={addTask} />
    </div>
  );
};

export default Todo;
