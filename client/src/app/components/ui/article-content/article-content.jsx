import React from 'react'
import { article } from '../../../../temp/db/posts';

const ArticleContent = () => {
  return (
    <div className="article-content">
          <h1 className="article-content__title">
            Самый лучший фреймворк всех времен и народов в мире
          </h1>
          {article.map((paragraph, i) => {
            const key = article.length - i;
            if (paragraph.slice(0, 4) === 'http') {
              return (
                <img
                  className="article-content__image"
                  key={key}
                  src={paragraph}
                  alt=""
                />
              );
            } else {
              return (
                <p className="article-content__text" key={key}>
                  {paragraph}
                </p>
              );
            }
          })}
        </div>
  )
}

export default ArticleContent