import React from 'react';
import avatar from '../../../../../assets/images/avatar.png';

const Comment = () => {
  return (
    <div className="comment">
      <div className="comment__header">
        <img src={avatar} alt="" className="comment__image" />
        <div>
          <div className="comment__author">Игорь Васильков</div>
          <div className="comment__date">2 недели назад</div>
        </div>
      </div>
      <div className="comment__text">
        Привет, очень интересная статья. Спасибо!
      </div>
    </div>
  );
};

export default Comment;
