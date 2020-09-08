import React, { useState } from 'react';
import InputBox from './InputBox';

const Title = (props) => {
  const [isEditable, setIsEditable] = useState(false);

  const handleClick = () => {
    setIsEditable(true);
  };

  const updateTitle = (value) => {
    setIsEditable(false);
    props.onChange(value);
  };

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
