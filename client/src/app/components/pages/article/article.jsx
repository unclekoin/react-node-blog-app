import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from '../../ui/button/button';
import { article } from '../../../../temp/db/posts';

function Article() {
  const { articleId } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className="article">
      <Button fn={goBack}>Назад</Button>
      <h1 className="article__title">
        Самый лучший фреймворк всех времен и народов в мире
      </h1>
      <div className="article__content">
        {article.map((paragraph, i) => {
          const key = article.length - i;
          if (paragraph.slice(0, 4) === 'http') {
            return <img className='article__image' key={key} src={paragraph} alt="" />
          } else {
            return <p className='article__text' key={key}>{paragraph}</p>
          }
        })}
      </div>
      {/* Здесь должна быть логика показа кнопки только администратору */}
      <Link to={`/${articleId}/edit`}>Редактировать пост</Link>
    </div>
  );
}

export default Article;
