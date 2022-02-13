import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLoginModal = ({ state, onClick }) => {
  return (
    <div
      className={`navbar__login-modal${
        state ? ' navbar__login-modal--open' : ''
      }`}
    >
      <div className="navbar__login-triangle"></div>
      <Link to="/login" className="navbar__login-in">
        Войти
      </Link>
      <div className="navbar__login-line"></div>
      <button onClick={onClick} className="navbar__login-out">Выйти из системы</button>
    </div>
  );
};

export default NavbarLoginModal;
