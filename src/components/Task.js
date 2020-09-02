import React from 'react';

const Task = ({ taskContent, status, toggleStatus, taskId, deleteTask }) => {
  return (
    <div className={`task ${status}`}>
      <div className="task-item">
        <p className="box"></p>
        <p className="taskContent" onClick={() => toggleStatus(taskId)}>
          {taskContent}
        </p>
      </div>
      <p className="delete" onClick={() => deleteTask(taskId)}>
        x
      </p>
    </div>
  );
};

export default Task;
