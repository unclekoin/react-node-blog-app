import React from 'react';

const Button = ({ children, onClick = () => {}, isDisabled = false }) => {
  return (
    <button
      onClick={onClick}
      className="button"
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
