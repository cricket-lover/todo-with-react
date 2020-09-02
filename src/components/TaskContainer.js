import React from 'react';
import Task from './Task';

const TaskContainer = (props) => {
  const taskList = props.tasks.map((task) => (
    <Task
      key={task.id}
      taskContent={task.content}
      status={task.status}
      toggleStatus={props.toggleTaskStatus}
      taskId={task.id}
    />
  ));
  return <div>{taskList}</div>;
};

export default TaskContainer;
