import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Preview = () => {
  const navigate = useNavigate()

  const goBack = () => navigate(-1);
  return (
    <div className="preview">
      <div className="preview__wrapper">
        <button onClick={goBack} className="preview__button">&#8678;</button>
        <Outlet />
      </div>
    </div>
  );
};

export default Preview;
