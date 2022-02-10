import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const  navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar__nav">
        <div className="navbar__logo">
          <Link to="/" className="navbar__logo-link">
          <i className="bi bi-emoji-wink-fill icon-logo"></i>
          </Link>
        </div>
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink to="/" className="navbar__link">
            <i className="bi bi-house"></i>
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/selected" className="navbar__link">
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
            <NavLink to="/admin" className="navbar__link">
            <i className="bi bi-pen"></i>
            </NavLink>
          </li>
        </ul>
        <div className="navbar__login">
          <Link to="/" className="navbar__login-link">
          <i className="bi bi-door-closed"></i>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default navbar;