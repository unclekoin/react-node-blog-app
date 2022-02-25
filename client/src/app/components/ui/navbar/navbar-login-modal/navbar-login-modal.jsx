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
      <div className="navbar__login-search">
        <i className="bi bi-search navbar__login-search-icon" role="button" />
        <input
          className="navbar__login-search-input"
          type="text"
          placeholder="Найти..."
        />
      </div>
      <Link to="/login" className="navbar__login-in">
        Войти
      </Link>
      <div className="navbar__login-line"></div>
      <Link className="navbar__login-tags" to="/tags">
        Теги
      </Link>
      <Link onClick={onClick} to="/" className="navbar__login-out">
        Выйти из системы
      </Link>
    </div>
  );
};

export default NavbarLoginModal;
