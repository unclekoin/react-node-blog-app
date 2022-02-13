import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from '../../ui/button/button';
import { useCommentsModal } from '../../../hooks/use-comments-modal';
import CommentsModal from '../../common/comments/comments-modal/comments-modal';
import { getTimeToRead } from '../../../utils';
import { article } from '../../../../temp/db/posts';
import avatar from '../../../../assets/images/avatar.png';

function Article() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const { toggleCommentsWindow } = useCommentsModal();

  const goBack = () => navigate(-1);

  return (
    <>
      <CommentsModal />
      <div className="article">
        <div className="article__button">
          <Button onClick={goBack}>Назад</Button>
        </div>
        <div className="article__line"></div>
        <div className="article__author-block">
          <img className="article__author-image" src={avatar} alt="author" />
          <div className="article__author-info">
            <span className="article__author-name">Василий Иванов</span>
            <span className="article__author-datetime">
              10 февраля 2022 года &bull; {getTimeToRead(article)}
            </span>
          </div>
        </div>
        <h1 className="article__title">
          Самый лучший фреймворк всех времен и народов в мире
        </h1>
        <div className="article__content">
          {article.map((paragraph, i) => {
            const key = article.length - i;
            if (paragraph.slice(0, 4) === 'http') {
              return (
                <img
                  className="article__image"
                  key={key}
                  src={paragraph}
                  alt=""
                />
              );
            } else {
              return (
                <p className="article__text" key={key}>
                  {paragraph}
                </p>
              );
            }
          })}
        </div>
        <ul className="article__action-list">
          {/* Здесь должна быть логика показа кнопки только администратору */}
          <li className="article__action-item">
            <Link to={`/${articleId}/edit`}>
              <i className="bi bi-pencil-square"></i>
            </Link>
          </li>
          <li className="article__action-item">
            <button onClick={toggleCommentsWindow}>
              <i className="bi bi-chat"></i>
            </button>
            <span>5</span>
          </li>
          <li className="article__action-item">
            <button>
              <i className="bi bi-hand-thumbs-up"></i>
            </button>
            <span>35</span>
          </li>
          <li className="article__action-item">
            <button>
              <i className="bi bi-bookmark-plus"></i>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Article;
