import React from 'react';
import { useLocation } from 'react-router-dom';
import { article } from '../../../../temp/db/posts';
import Divider from '../divider/divider';

const ArticleContent = () => {
  const location = useLocation();

  const data = location.pathname.includes('/preview')
    ? JSON.parse(localStorage.getItem('preview'))
    : article;

  return (
    <div className="article-content">
      <h1 className="article-content__title">{data.title}</h1>
      {Object.keys(data).map((key) => {
        const [type, index] = key.split('zzz');

        if (type === 'text' && index === '1') {
          return (
            <p key={key} className="article-content__snippet">
              {data[key]}
            </p>
          );
        }

        switch (type) {
          case 'text':
            return (
              <p key={key} className="article-content__text">
                {data[key]}
              </p>
            );
          case 'h3':
            return (
              <h3 key={key} className="article-content__subtitle">
                {data[key]}
              </h3>
            );
          case 'img':
            return (
              <img
                key={key}
                className="article-content__image"
                src={data[key]}
                alt=""
              />
            );
          case 'divider':
            return <Divider key={key} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ArticleContent;
