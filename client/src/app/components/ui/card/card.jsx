import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../../assets/images/avatar.png';
import { article } from '../../../../temp/db/posts'
import { getTimeToRead } from '../../../utils';

const Card = () => {
  return (
    <div className="card">
      <div className="card__header">
        <img src={avatar} alt="author" className="card__header-avatar" />
        <span className="card__header-author">Василий Иванов</span>
        <span className="card__header-date">22 января 2022 года</span>
      </div>
      <div className="card__wrapper">
        <div className="card__container">
          <Link to="/article/123456789">
            <div className="card__content">
              <h4 className="card__title">
                Самый лучший фреймворк всех времен и народов в мире
              </h4>
              <div className="card__snippet">
                Повседневная практика показывает, что высокотехнологичная
                концепция общественного уклада не оставляет шанса для
                существующих финансовых и административных условий. А ещё
                действия представителей оппозиции заблокированы в рамках своих
                собственных рациональных ограничений.
              </div>
            </div>
          </Link>
          <div className="card__footer">
            <span>
              <span className="card__tag" role="button">Java Script</span>
              <span className="card__how-long">{getTimeToRead(article)}</span>
            </span>
            <span role="button">
              <i className="bi bi-bookmark-plus card__mark"></i>
            </span>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1848&q=80" alt="code" className="card__image" />
      </div>
    </div>
  );
};

export default Card;
