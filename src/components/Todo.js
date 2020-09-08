import React from 'react';
import Title from './Title';
import TaskContainer from './TaskContainer';
import InputBox from './InputBox';
import { getDefaultStatus, getNextStatus } from '../status';
import '../todo.css';

const generateNextId = function (prevId) {
  const [, num] = prevId.split('_');
  return 'id_'.concat(+num + 1);
};

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      title: 'Todo',
    };
    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.deleteAllTasks = this.deleteAllTasks.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  toggleTaskStatus(taskId) {
    const updatedTasks = this.state.tasks.slice();
    const index = updatedTasks.findIndex((task) => task.id === taskId);
    updatedTasks[index].status = getNextStatus(updatedTasks[index].status);
    this.setState((state) => ({ tasks: updatedTasks }));
  }

  addTask(value) {
    const updatedTasks = this.state.tasks.slice();
    const prevTaskId = updatedTasks.length
      ? updatedTasks[updatedTasks.length - 1].id
      : 'id_-1';
    updatedTasks.push({
      content: value,
      status: getDefaultStatus(),
      id: generateNextId(prevTaskId),
    });
    this.setState((state) => ({ tasks: updatedTasks }));
  }

  deleteAllTasks() {
    this.setState((state) => ({
      tasks: [],
    }));
  }

  deleteTask(taskId) {
    let updatedTasks = this.state.tasks.slice();
    updatedTasks = updatedTasks.filter((task) => task.id !== taskId);
    this.setState((state) => ({ tasks: updatedTasks }));
  }

  updateTitle(title) {
    this.setState((state) => ({ title }));
  }

  render() {
    return (
      <div className="todo-container">
        <Title
          value={this.state.title}
          onChange={this.updateTitle}
          deleteAllTasks={this.deleteAllTasks}
        />
        <TaskContainer
          deleteTask={this.deleteTask}
          tasks={this.state.tasks}
          toggleTaskStatus={this.toggleTaskStatus}
        />
        <InputBox className="taskInput" onEnterPress={this.addTask} />
      </div>
    );
  }
}

export default Todo;
