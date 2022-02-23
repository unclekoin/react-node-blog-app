import React from 'react';
import { useNavigate } from 'react-router-dom';
import TagsList from '../../ui/tags-list';

const Tags = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className="tags-page">
      <div className="tags-page__header">
        <h1 className="tags-page__title">Страница тегов</h1>
        <i onClick={goBack} className="bi bi-x-lg" role="button" />
      </div>

      <ul className="tags-page__list">
        <TagsList />
      </ul>
    </div>
  );
};

export default Tags;
