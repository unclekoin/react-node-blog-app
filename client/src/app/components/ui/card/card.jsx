import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { displayDate, getPath } from '../../../utils';
import { getTimeToRead } from '../../../utils';
import { getTagById } from '../../../../mock-data';
import { users } from '../../../../mock-data';
import Badge from '../badge/badge';

const Card = ({
  _id,
  author,
  title,
  content,
  create_at,
  tags,
  addFavorite,
  favorites,
}) => {
  const location = useLocation();
  const snippet = content.find((element) => element.type === 'snippet').content;
  const thumbnail = content.find((element) => element.type === 'image').content;
  const writer = users.find((user) => user._id === author);
  const isFavorite = favorites.includes(_id);
  const path = getPath(title);
  return (
    <div className="card" id={_id}>
      <div className="card__header">
        <img src={writer.image} alt="author" className="card__header-avatar" />
        <div className="card__header-wrapper">
          <div className="card__header-author">{writer.name}</div>
          <div className="card__header-date">{displayDate(create_at)}</div>
        </div>
      </div>
      <div className="card__wrapper">
        <div className="card__container">
          <Link to={`/article/${path}`} state={{ pathname: location.pathname, articleId: _id }}>
            <div className="card__content">
              <h4 className="card__title">{title}</h4>
              <div className="card__snippet">{snippet}</div>
            </div>
          </Link>
          <div className="card__footer">
            <span className="card__badges">
              {tags.map((tag, index) => (
                <Badge key={tag} tag={getTagById(tag)} />
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
        <div className='card__image-container'>
          <img src={thumbnail} alt="" className="card__image" />
        </div>
      </div>
    </div>
  );
};

export default Card;
