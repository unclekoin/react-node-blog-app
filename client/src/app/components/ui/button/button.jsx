import React from 'react';

const Button = ({ children, fn = () => { }, iaDisabled = false }) => {
  return (
    <button onClick={fn} className="button" disabled={iaDisabled}>
      {children}
    </button>
  );
};

export default Button;
