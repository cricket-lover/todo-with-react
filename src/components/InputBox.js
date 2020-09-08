import React, { useState } from 'react';

const InputBox = (props) => {
  const [value, setValue] = useState(props.value || '');

  const handleKeyDown = (event) => {
    const value = event.target.value.trim();
    if (event.keyCode === 13 && value !== '') {
      props.onEnterPress(value);
      setValue('');
    }
  };

  return (
    <input
      type="text"
      value={value}
      onKeyDown={handleKeyDown}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      className={props.className}
    />
  );
};

export default InputBox;
