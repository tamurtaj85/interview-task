import React from 'react';
import {DropDownWrapper, TextFieldWrapper} from '../components';

export const Button2Form = () => {
  return (
    <div className="mb-4">
      <TextFieldWrapper label={'Input 1'} />
      <DropDownWrapper label={'Dummy DropDown'} />
    </div>
  );
};
