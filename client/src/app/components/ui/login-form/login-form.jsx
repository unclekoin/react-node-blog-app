import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import InputGroup from '../input-group/input-group';
import Button from '../button';

const LoginForm = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const {
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <InputGroup
        id="email"
        name="email"
        placeholder="Электронная почта"
        errors={errors}
        register={register}
      />
      <InputGroup
        type="password"
        id="password"
        name="password"
        placeholder="Пароль"
        errors={errors}
        register={register}
      />
      <Button onClick={goBack} isDisabled={!isValid}>Отправить</Button>
      <div className="login-form__question">
        Еще нет аккаунта?{' '}
        <Link className="login-form__link" to="/login/register">
          Зарегистрироваться
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
