import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';

const Preview = () => {
  const navigate = useNavigate()
  const location = useLocation();

  const goBack = () => navigate(-1);
  return (
    <div className="preview">
      <div className="preview__wrapper">
        {/* <Link
          to='/create' state={{from: location.pathname}}
          className="preview__button"
        >
          &#8678;
        </Link> */}
        <button onClick={goBack} className="preview__button">&#8678;</button>
        <Outlet />
      </div>
    </div>
  );
};

export default Preview;
