import React from 'react';

export const ButtonWrapper = (props) => {
  return (
    <button
      {...props}
      className={`mx-2 px-2 py-1 rounded-lg bg-cyan-600 text-neutral-50 ${props?.className}`}
    >
      {props.children}
    </button>
  );
};
