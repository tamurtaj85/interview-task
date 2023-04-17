import React from 'react';

export const DropDownWrapper = (props) => {
  const {options} = props;

  return (
    <div className="m-1">
      <label for="dropdownLabel">{props?.label}</label>
      <select
        name={props?.label}
        id="dropdownLabel"
        className="w-40 mx-2 p-2 border rounded"
      >
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};
