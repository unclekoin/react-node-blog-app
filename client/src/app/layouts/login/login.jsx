import React from 'react';
import LoginForm from '../../components/ui/login-form/login-form';
import RegisterForm from '../../components/ui/register-form/register-form';
import Logo from '../../components/ui/logo';

const Login = () => {
  return (
    <div className="login">
      <div className="login__header">
        <Logo />
      </div>
      <i className="bi bi-x login__close"></i>
      <h1 className="login__title">Вход / Регистрация</h1>
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default Login;
