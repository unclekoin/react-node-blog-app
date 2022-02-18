import React from 'react';
import { useLocation } from 'react-router-dom';
import Divider from '../divider/divider';

const ArticleContent = ({ title, content }) => {
  const location = useLocation();
  const data = location.pathname.includes('/preview')
    ? JSON.parse(localStorage.getItem('preview'))
    : content;



  return (
    <div className="article-content">
      <h1 className="article-content__title">{title}</h1>
      {data.map((item) => {
        switch (item.type) {
          case 'snippet':
            return (
              <p key={item._id} className="article-content__snippet">
                {item.content}
              </p>
            );
          case 'text':
            return (
              <p key={item._id} className="article-content__text">
                {item.content}
              </p>
            );
          case 'subtitle':
            return (
              <h3 key={item._id} className="article-content__subtitle">
                {item.content}
              </h3>
            );
          case 'image':
            return (
              <img
                key={item._id}
                className="article-content__image"
                src={item.content}
                alt=""
              />
            );
          case 'divider':
            return <Divider key={item._id} />;
          case 'conclusion':
            return (
              <div key={item._id}>
                <h3 className="article-content__subtitle">Заключение:</h3>
                <p className="article-content__snippet">
                  {item.content}
                </p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ArticleContent;
