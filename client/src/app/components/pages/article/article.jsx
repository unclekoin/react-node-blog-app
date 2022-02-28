import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  getArticleById,
  getArticlesLoadingStatus,
  removeArticle,
} from '../../../store/articles';
import { useModal } from '../../../hooks/use-modal';
import { getTimeToRead } from '../../../utils';
import {
  getUserById,
  getUsersLoadingStatus,
  getCurrentUserId,
} from '../../../store/users';
import { getTagsByIds, getTagsLoadingStatus } from '../../../store/tags';
import CommentsModal from '../../common/comments/comments-modal/comments-modal';
import ArticleContent from '../../ui/article-content/article-content';
import Button from '../../ui/button/button';
import Badge from '../../ui/badge/badge';

function Article({ addFavorite, favorites }) {
  const dispatch = useDispatch();
  const { articleId } = useParams();
  const navigate = useNavigate();
  const currentUserId = useSelector(getCurrentUserId());
  const article = useSelector(getArticleById(articleId));
  const isArticleLoading = useSelector(getArticlesLoadingStatus());
  const isLoadingTags = useSelector(getTagsLoadingStatus());
  const isLoadingUsers = useSelector(getUsersLoadingStatus());
  const writer = useSelector(getUserById(article.author));
  const tags = useSelector(getTagsByIds(article.tags));
  const { toggleWindow } = useModal();
  const isFavorite = favorites.includes(articleId);

  const handleDeleteArticle = () => {
    dispatch(removeArticle(articleId));
    navigate(-1);
  };

  if (isArticleLoading || isLoadingTags || isLoadingUsers)
    return <h3>Loading...</h3>;

  return (
    <>
      <CommentsModal />
      <div className="article">
        <div className="article__button">
          <Link to={`/#${articleId}`}>
            <Button>Назад</Button>
          </Link>
        </div>
        <div className="article__line"></div>
        <div className="article__author-block">
          <img
            className="article__author-image"
            src={writer.image}
            alt="author"
          />
          <div className="article__author-info">
            <span className="article__author-name">{writer.name}</span>
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
            {currentUserId === article.author ? (
              <>
                <li className="article__action-item article__action-item--edit">
                  <Link to={`/edit/${articleId}`}>
                    <i className="bi bi-pencil-square" />
                  </Link>
                </li>
                <li className="article__action-item article__action-item--edit">
                  <button onClick={handleDeleteArticle}>
                    <i className="bi bi-trash3" />
                  </button>
                </li>
              </>
            ) : null}
            <li className="article__action-item">
              <button onClick={toggleWindow}>
                <i className="bi bi-chat" />
              </button>
              <span>5</span>
            </li>
            <li className="article__action-item">
              <button>
                <i className="bi bi-hand-thumbs-up" />
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
