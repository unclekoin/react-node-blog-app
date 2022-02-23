import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import {
  getArticleById,
  getArticlesLoadingStatus,
} from '../../../store/articles';
import { useModal } from '../../../hooks/use-modal';
import { getTimeToRead } from '../../../utils';
import { getUserById } from '../../../store/users';
import { getTagsByIds, getTagsLoadingStatus } from '../../../store/tags';
import CommentsModal from '../../common/comments/comments-modal/comments-modal';
import ArticleContent from '../../ui/article-content/article-content';
import Button from '../../ui/button/button';
import Badge from '../../ui/badge/badge';

function Article({ addFavorite, favorites }) {
  const {
    state: { pathname, articleId },
  } = useLocation();
  const article = useSelector(getArticleById(articleId));
  const isArticleLoading = useSelector(getArticlesLoadingStatus());
  const isLoadingTags = useSelector(getTagsLoadingStatus());
  const { name, image } = useSelector(getUserById(article.author));
  const tags = useSelector(getTagsByIds(article.tags));
  const { toggleWindow } = useModal();
  const isFavorite = favorites.includes(articleId);

  if (isArticleLoading || isLoadingTags) return <h3>Loading...</h3>;

  return (
    <>
      <CommentsModal />
      <div className="article">
        <div className="article__button">
          <Link to={`${pathname}#${articleId}`}>
            <Button>Назад</Button>
          </Link>
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
        <div className="article__line"></div>
        <div className="article__footer">
          <ul className="article__tag-list">
            {tags.map((tag) => (
              <Badge key={tag._id} tag={tag} />
            ))}
          </ul>
          <ul className="article__action-list">
            {/* Здесь должна быть логика показа кнопки только администратору */}
            <li className="article__action-item article__action-item--edit">
              <Link to={`/edit/${articleId}`}>
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
              <button onClick={() => addFavorite(articleId)}>
                <i
                  className={`bi bi-bookmark-${
                    isFavorite ? 'dash-fill' : 'plus'
                  }`}
                ></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Article;
