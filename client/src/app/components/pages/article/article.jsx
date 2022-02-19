import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from '../../ui/button/button';
import { useModal } from '../../../hooks/use-modal';
import CommentsModal from '../../common/comments/comments-modal/comments-modal';
import ArticleContent from '../../ui/article-content/article-content';
import { getTimeToRead } from '../../../utils';
import { getArticleById, getUserById } from '../../../../mock-data';

function Article({ addFavorite, favorites }) {
  const {state} = useLocation();
  const article = getArticleById(state.articleId);
  const {name, image} = getUserById(article.author);
  const navigate = useNavigate();
  const { toggleWindow } = useModal();
  const isFavorite = favorites.includes(state.articleId);

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
          <img className="article__author-image" src={image} alt="author" />
          <div className="article__author-info">
            <span className="article__author-name">{name}</span>
            <span className="article__author-datetime">
              10 февраля 2022 года &bull; {getTimeToRead(article.content)}
            </span>
          </div>
        </div>
        <ArticleContent {...article} />
        <ul className="article__action-list">
          {/* Здесь должна быть логика показа кнопки только администратору */}
          <li className="article__action-item">
            <Link to={`/edit/${article._id}`}>
              <i className="bi bi-pencil-square"></i>
            </Link>
          </li>
          <li className="article__action-item">
            <button onClick={toggleWindow}>
              <i className="bi bi-chat"></i>
            </button>
            <span>5</span>
          </li>
          <li className="article__action-item">
            <button>
              <i className="bi bi-hand-thumbs-up"></i>
            </button>
            <span>{article.rate}</span>
          </li>
          <li className="article__action-item">
            <button onClick={() => addFavorite(state.articleId)}>
              <i className={`bi bi-bookmark-${isFavorite ? 'dash-fill' : 'plus'}`}></i>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Article;
