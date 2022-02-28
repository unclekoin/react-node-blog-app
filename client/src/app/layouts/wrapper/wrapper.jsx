import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Navbar from '../../components/ui/navbar';
import Sidebar from '../../components/ui/sidebar';

const Wrapper = () => {
  const { articleId } = useParams();
  return (
    <div className="wrapper">
      <Navbar />
      <Outlet />
      {!articleId ? <Sidebar /> : <div className='wrapper__border' />}
    </div>
  );
};

export default Wrapper;
