import React from 'react';
import { Link } from 'react-router-dom';
import { displayDate, getPath } from '../../../utils';
import { getTimeToRead } from '../../../utils';
import { users } from '../../../../mock-data';

const Card = ({ _id, author, title, content, create_at }) => {
  const snippet = content.find((element) => element.type === 'snippet').content;
  const thumbnail = content.find((element) => element.type === 'image').content
  const writer = users.find((user) => user._id === author);
  const path = getPath(title);
  return (
    <div className="card">
      <div className="card__header">
        <img src={writer.image} alt="author" className="card__header-avatar" />
        <div className='card__header-wrapper'>
          <div className="card__header-author">{writer.name}</div>
          <div className="card__header-date">{displayDate(create_at)}</div>
        </div>
      </div>
      <div className="card__wrapper">
        <div className="card__container">
          <Link to={`/article/${path}`} state={{articleId: _id}}>
            <div className="card__content">
              <h4 className="card__title">{title}</h4>
              <div className="card__snippet">{snippet}</div>
            </div>
          </Link>
          <div className="card__footer">
            <span>
              <span className="card__tag" role="button">
                Java Script
              </span>
              <span className="card__how-long">{getTimeToRead(content)}</span>
            </span>
            <span role="button">
              <i className="bi bi-bookmark-plus card__mark"></i>
            </span>
          </div>
        </div>
        <img
          src={thumbnail}
          alt=""
          className="card__image"
        />
      </div>
    </div>
  );
};

export default Card;
