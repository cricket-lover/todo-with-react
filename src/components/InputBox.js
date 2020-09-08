import React, { useState, useEffect } from 'react';

const InputBox = function (props) {
  const [value, setValue] = useState(props.value || '');

  function handleKeyDown(event) {
    const value = event.target.value.trim();
    if (event.keyCode === 13 && value !== '') {
      props.onEnterPress(value);
      setValue('');
    }
  }

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
