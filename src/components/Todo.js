import React from 'react';
import Title from './Title';
import TaskContainer from './TaskContainer';
import InputBox from './InputBox';
import { getDefaultStatus, getNextStatus } from '../status';
import '../todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      title: 'Todo',
    };
    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.addTask = this.addTask.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  toggleTaskStatus(taskId) {
    const updatedTasks = this.state.tasks.slice();
    updatedTasks[taskId].status = getNextStatus(updatedTasks[taskId].status);
    this.setState((state) => ({ tasks: updatedTasks }));
  }

  addTask(value) {
    const updatedTasks = this.state.tasks.slice();
    updatedTasks.push({ content: value, status: getDefaultStatus() });
    this.setState((state) => ({ tasks: updatedTasks }));
  }

  updateTitle(title) {
    this.setState((state) => ({ title }));
  }

  render() {
    return (
      <div className="todo-container">
        <Title value={this.state.title} onChange={this.updateTitle} />
        <TaskContainer
          tasks={this.state.tasks}
          toggleTaskStatus={this.toggleTaskStatus}
        />
        <InputBox className="taskInput" onEnterPress={this.addTask} />
      </div>
    );
  }
}

export default Todo;
