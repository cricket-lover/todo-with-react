import React from 'react';

const Todo = ({ item, statusId, onClick, todoId }) => {
  const classes = [
    { itemClass: 'not-done', colorClass: 'fill-blue box' },
    { itemClass: 'doing', colorClass: 'fill-orange box' },
    { itemClass: 'done', colorClass: 'fill-green box' },
  ];
  return (
    <div className="todo">
      <p className={classes[statusId].colorClass}></p>
      <p
        className={classes[statusId].itemClass}
        onClick={() => onClick(todoId)}
      >
        {item}
      </p>
    </div>
  );
};

export default Todo;
