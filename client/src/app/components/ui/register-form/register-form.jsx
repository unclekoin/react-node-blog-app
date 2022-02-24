import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../../../store/users';
import InputGroup from '../input-group/input-group';
import Button from '../button';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goBack = () => navigate(-2);

  const {
    register,
    formState: { errors, isValid },
    reset,
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    if (!isValid) return;
    dispatch(signUp({ ...data, favorites: [] }));
    console.log({ ...data, favorites: [] });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="register-form">
      <InputGroup
        id="name"
        name="name"
        errors={errors}
        placeholder="Имя"
        register={register}
      />
      <InputGroup
        id="email"
        name="email"
        errors={errors}
        placeholder="Электронная почта"
        register={register}
      />
      <InputGroup
        type="password"
        id="password"
        name="password"
        errors={errors}
        placeholder="Пароль"
        register={register}
      />
      <InputGroup
        id="image"
        name="image"
        placeholder="Добавьте ссылку на фото..."
        register={register}
      />
      {/* <InputGroup
        type="file"
        id="file"
        name="file"
        cls="file"
        placeholder="Выбрать фото..."
        register={register}
      /> */}
      <div className="register-form__button">
        <Button onClick={goBack} isDisabled={!isValid}>
          Отправить
        </Button>
      </div>
      <div className="register-form__question">
        Уже есть аккаунт?{' '}
        <Link className="register-form__link" to="/login">
          Войти
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
