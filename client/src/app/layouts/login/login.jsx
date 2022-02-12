import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../../components/ui/logo';

const Login = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isRegisterPage = pathname.includes('register');
  const goBack = () => navigate(isRegisterPage ? -2 : -1);
  return (
    <div className="login">
      <div className="login__header">
        <Logo />
        <i onClick={goBack} className="bi bi-x login__close" role="button" />
      </div>
      <h1 className="login__title">
        {isRegisterPage ? 'Зарегистрироваться' : 'Войти'}
      </h1>
      <div className="login__container">
        <Outlet />
      </div>
    </div>
  );
};

export default Login;
