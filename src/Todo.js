import React from 'react';
import './todo.css';

const Todo = ({ item, isDone, onClick, todoId }) => {
  const isTodoDone = isDone ? 'done' : 'not-done';
  return (
    <div className="todo">
      <p
        className="box"
        style={{
          backgroundColor: isDone ? 'mediumseagreen' : 'lightblue',
        }}
      ></p>
      <p className={isTodoDone} onClick={() => onClick(todoId)}>
        {item}
      </p>
    </div>
  );
};

export default Todo;
