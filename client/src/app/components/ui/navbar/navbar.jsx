import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../logo/logo';
import NavbarLoginModal from './navbar-login-modal/navbar-login-modal';
import avatar from '../../../../assets/images/avatar.png';

const Navbar = () => {
  const [isNavModalOpen, setNavModalOpen] = useState(false);
  const toggleNavbarModal = () => {
    setNavModalOpen((prevState) => !prevState);
  };

  return (
    <div className="navbar">
      <NavbarLoginModal state={isNavModalOpen} onClick={toggleNavbarModal} />
      <nav className="navbar__nav">
        <Logo />
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink to="/" className="navbar__link">
              <i className="bi bi-house"></i>
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/favorites" className="navbar__link">
              <i className="bi bi-bookmarks"></i>
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/contacts" className="navbar__link">
              <i className="bi bi-envelope-paper"></i>
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/about" className="navbar__link">
              <i className="bi bi-info-circle"></i>
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/create" className="navbar__link">
              <i className="bi bi-pencil-square"></i>
            </NavLink>
          </li>
        </ul>
        <div className="navbar__login">
          <button onClick={toggleNavbarModal}>
            <img className="navbar__login-image" src={avatar} alt="" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
