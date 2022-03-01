import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuthor } from '../../../hooks/use-author';
import { getTagsByIds } from '../../../store/tags';
import { getUserById, getUsersLoadingStatus } from '../../../store/users';
import { displayDate } from '../../../utils';
import { getTimeToRead } from '../../../utils';
import Badge from '../badge/badge';
import image from '../../../../assets/images/card-photo.jpg';
import avatar from '../../../../assets/images/avatar.png'

const Card = ({
  _id,
  author,
  title,
  content,
  createdAt,
  tags,
  addFavorite,
  favorites,
}) => {
  const { setAuthor } = useAuthor();
  const snippet = content.find(
    (element) => element.type === 'snippet'
  )?.content;
  const thumbnail = content.find(
    (element) => element.type === 'image'
  )?.content;
  const isFavorite = favorites.includes(_id);
  const articleTags = useSelector(getTagsByIds(tags));
  const writer = useSelector(getUserById(author));
  const isUserLoading = useSelector(getUsersLoadingStatus());

  if (isUserLoading) return <div>Loading...</div>;

  return (
    <div className="card" id={_id}>
      <div
        onClick={() => setAuthor(author)}
        className="card__header"
        role="button"
      >
        <img src={writer.image || avatar} alt="author" className="card__header-avatar" />
        <div className="card__header-wrapper">
          <div className="card__header-author">{writer.name}</div>
          <div className="card__header-date">{displayDate(createdAt)}</div>
        </div>
      </div>
      <div className="card__wrapper">
        <div className="card__container">
          <Link to={`/article/${_id}`}>
            <div className="card__content">
              <h4 className="card__title">{title}</h4>
              <div className="card__snippet">{snippet}</div>
            </div>
          </Link>
          <div className="card__footer">
            <span className="card__badges">
              {articleTags.map((tag) => (
                <Badge key={tag._id} tag={tag} />
              ))}
            </span>
            <span className="card__info">
              <span className="card__how-long">{getTimeToRead(content)}</span>
              <i
                onClick={() => addFavorite(_id)}
                className={`bi bi-bookmark-${
                  isFavorite ? 'dash-fill' : 'plus'
                } card__mark`}
                role="button"
              />
            </span>
          </div>
        </div>
        <Link to={`/article/${_id}`}>
          <div className="card__image-container">
            <img src={thumbnail || image} alt="" className="card__image" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
