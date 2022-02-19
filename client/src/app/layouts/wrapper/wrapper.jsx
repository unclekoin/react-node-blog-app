import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/ui/navbar';
import Sidebar from '../../components/ui/sidebar';

const Wrapper = () => {
  return <div className='wrapper'>
    <Navbar />
    <Outlet />
    <Sidebar />
  </div>;
}

export default Wrapper;
