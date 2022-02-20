import React from 'react';
import Button from '../../../ui/button';
import avatar from './../../../../../assets/images/avatar.png';

const CommentsForm = () => {
  return (
    <div className="comments-form">
      <div className="comments-form__user">
        <img src={avatar} alt="" className="comments-form__user-image" />
        <span className="comments-form__user-name">Василий Иванов</span>
      </div>
      <textarea
        className="comments-form__textarea"
        name="comment"
        placeholder="Что ты думаешь?"
      ></textarea>
      <div className="comments-form__button">
        <Button>Отправить</Button>
      </div>
    </div>
  );
};

export default CommentsForm;
