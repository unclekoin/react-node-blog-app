import React from 'react';

const RegisterForm = () => {
  return (
    <form className="register-form">
      <div className="input-group">
        <label className="input-group__label" htmlFor="">
          Имя
        </label>
        <input className="input-group__input" type="text" />
        <span className="input-group__error"></span>
      </div>
      <div className="input-group">
        <label className="input-group__label" htmlFor="">
          Электронная почта
        </label>
        <input className="input-group__input" type="text" />
        <span className="input-group__error"></span>
      </div>
      <div className="input-group">
        <label className="input-group__label" htmlFor="">Пароль</label>
        <input className="input-group__input" type="text" />
        <span className="input-group__error"></span>
      </div>
      <div className="input-group">
        <label className="input-group__label" htmlFor="">Фото</label>
        <input className="input-group__input" type="text" />
        <span className="input-group__error"></span>
      </div>
    </form>
  );
};

export default RegisterForm;
