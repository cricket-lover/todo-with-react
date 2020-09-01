import React from 'react';

const Task = ({ taskContent, statusId, toggleStatus, taskId }) => {
  const classes = [
    { statusClass: 'not-done', colorClass: 'fill-blue box' },
    { statusClass: 'doing', colorClass: 'fill-orange box' },
    { statusClass: 'done', colorClass: 'fill-green box' },
  ];
  return (
    <div className="task">
      <p className={classes[statusId].colorClass}></p>
      <p
        className={classes[statusId].statusClass}
        onClick={() => toggleStatus(taskId)}
      >
        {taskContent}
      </p>
    </div>
  );
};

export default Task;
