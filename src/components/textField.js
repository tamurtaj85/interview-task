import React from 'react';

export const TextFieldWrapper = (props) => {
  return (
    <div className="m-1">
      <label for="textInput">{props?.label}</label>
      <input
        type="text"
        id="textInput"
        name={props?.label}
        {...props}
        className="border rounded mx-2 p-2"
      />
    </div>
  );
};
