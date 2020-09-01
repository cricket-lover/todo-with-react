import React from 'react';

const Task = ({ taskContent, status, toggleStatus, taskId }) => {
  return (
    <div className={`task ${status}`} onClick={() => toggleStatus(taskId)}>
      <p className="box"></p>
      <p className="taskContent">{taskContent}</p>
    </div>
  );
};

export default Task;
