import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logo from '../logo/logo';
import NavbarLoginModal from './navbar-login-modal/navbar-login-modal';
import { getCurrentUserId, getUserById, logOut } from '../../../store/users';
import avatar from '../../../../assets/images/avatar.png';

const Navbar = () => {
  const dispatch = useDispatch();
  const currentUserId = useSelector(getCurrentUserId());
  const currentUser = useSelector(getUserById(currentUserId));
  const [isNavModalOpen, setNavModalOpen] = useState(false);
  const toggleNavbarModal = () => {
    setNavModalOpen((prevState) => !prevState);
  };

  const handleLogOut = () => {
    toggleNavbarModal();
    dispatch(logOut());
  };

  return (
    <div className="navbar">
      <NavbarLoginModal state={isNavModalOpen} onClick={handleLogOut} />
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
          {currentUserId ? (
            <li className="navbar__item">
              <NavLink to="/create" className="navbar__link">
                <i className="bi bi-pencil-square"></i>
              </NavLink>
            </li>
          ) : null}
        </ul>
        <div className="navbar__login">
          <button onClick={toggleNavbarModal}>
            <img
              className="navbar__login-image"
              src={currentUser?.image || avatar}
              alt="user"
            />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
