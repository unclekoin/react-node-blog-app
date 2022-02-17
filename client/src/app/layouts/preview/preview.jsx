import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Preview = () => {
  const location = useLocation();
  return (
    <div className="preview">
      <div className="preview__wrapper">
        <Link
          to='/create' state={{from: location.pathname}}
          className="preview__button"
        >
          &#8678;
        </Link>
        <Outlet />
      </div>
    </div>
  );
};

export default Preview;
