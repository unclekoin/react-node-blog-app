import React from 'react';
import Logo from '../../components/ui/logo';

const Static = ({ children, title }) => {
  return (
    <div className="static">
      <div className="static__header">
        <div className="static__logo">
          <Logo />
        </div>
        <h1 className="static__title">{title}</h1>
      </div>
      <div className="static__line"></div>
      <div className="static__container">{children}</div>
    </div>
  );
};

export default Static;
