import React, { useState } from 'react';
import InputBox from './InputBox';

const Title = function (props) {
  const [isEditable, setIsEditable] = useState(false);

  function handleClick() {
    setIsEditable(true);
  }

  function updateTitle(value) {
    setIsEditable(false);
    props.onChange(value);
  }

  if (isEditable) {
    return (
      <InputBox
        value={props.value}
        onEnterPress={updateTitle}
        className="title"
      />
    );
  }
  return (
    <div className="title-header">
      <p className="title" onClick={handleClick}>
        {props.value}
      </p>
      <p className="delete" onClick={() => props.deleteAllTasks()}>
        x
      </p>
    </div>
  );
};

export default Title;
