import React from 'react';
import {TextFieldWrapper} from '../components';

export const Button1Form = () => {
  return (
    <div className="flex">
      <TextFieldWrapper label={'Input 1'} />
      <TextFieldWrapper label={'Input 2'} />
    </div>
  );
};
