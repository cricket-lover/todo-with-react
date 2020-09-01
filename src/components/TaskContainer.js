import React from 'react';
import Task from './Task';

const TaskContainer = (props) => {
  const taskList = props.tasks.map((todo, index) => (
    <Task
      key={index}
      taskContent={todo.content}
      status={todo.status}
      toggleStatus={props.toggleTaskStatus}
      taskId={index}
    />
  ));
  return <div>{taskList}</div>;
};

export default TaskContainer;
