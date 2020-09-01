import React from 'react';
import Title from './Title';
import Task from './Task';
import InputBox from './InputBox';
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
    updatedTasks[taskId].statusId = (updatedTasks[taskId].statusId + 1) % 3;
    this.setState((state) => ({ tasks: updatedTasks }));
  }

  addTask(value) {
    const updatedTasks = this.state.tasks.slice();
    updatedTasks.push({ content: value, statusId: 0 });
    this.setState((state) => ({ tasks: updatedTasks }));
  }

  updateTitle(title) {
    this.setState((state) => ({ title }));
  }

  render() {
    const taskList = this.state.tasks.map((todo, index) => {
      return (
        <Task
          key={index}
          taskContent={todo.content}
          statusId={todo.statusId}
          toggleStatus={this.toggleTaskStatus}
          taskId={index}
        />
      );
    });
    return (
      <div className="todo-container">
        <Title value={this.state.title} onChange={this.updateTitle} />
        {taskList}
        <InputBox className="taskInput" onEnterPress={this.addTask} />
      </div>
    );
  }
}

export default Todo;
