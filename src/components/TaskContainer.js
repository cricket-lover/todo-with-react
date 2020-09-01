import React from 'react';
import Task from './Task';

const TaskContainer = (props) => {
  const taskList = props.tasks.map((todo, index) => {
    return (
      <Task
        key={index}
        taskContent={todo.content}
        statusId={todo.statusId}
        toggleStatus={props.toggleTaskStatus}
        taskId={index}
      />
    );
  });
  return taskList;
};

export default TaskContainer;
