import React from 'react';

const Button = ({ children, fn }) => {
  return <button onClick={fn} className="button">{children}</button>;
};

export default Button;
