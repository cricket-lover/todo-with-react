import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const {
      taskContent,
      status,
      toggleStatus,
      taskId,
      deleteTask,
    } = this.props;
    return (
      <div
        className={`task ${status}`}
        onMouseOver={this.toggleHover}
        onMouseOut={this.toggleHover}
      >
        <div className="task-item">
          <p className="box"></p>
          <p className="taskContent" onClick={() => toggleStatus(taskId)}>
            {taskContent}
          </p>
        </div>
        <p className="delete" onClick={() => deleteTask(taskId)}>
          {this.state.hover ? 'x' : ''}
        </p>
      </div>
    );
  }
}

export default Task;
