import React from 'react';

const Todo = ({ item, isDone, onClick, todoId }) => {
  let itemClass = 'not-done';
  let colorClass = 'fill-blue box';
  if (isDone) {
    itemClass = 'done';
    colorClass = 'fill-green box';
  }
  return (
    <div className="todo">
      <p className={colorClass}></p>
      <p className={itemClass} onClick={() => onClick(todoId)}>
        {item}
      </p>
    </div>
  );
};

export default Todo;
