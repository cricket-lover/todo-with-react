import React from 'react';
import './todo.css';

const Todo = (props) => {
  const isDone = props.hasDone ? 'done' : 'not-done';
  return (
    <div className="todo">
      <p
        className="box"
        style={{
          backgroundColor: props.hasDone ? 'mediumseagreen' : 'lightblue',
        }}
      ></p>
      <p className={isDone} onClick={() => props.onClick(props.todoId)}>
        {props.item}
      </p>
    </div>
  );
};

export default Todo;
