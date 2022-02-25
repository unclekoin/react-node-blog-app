import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getArticles, getArticlesLoadingStatus } from '../../../store/articles';
import { getLocalDate } from '../../../utils';
import CardList from '../../ui/card-list/card-list';

const Main = ({ addFavorite, favorites }) => {
  const location = useLocation();
  const articles = useSelector(getArticles());
  const isLoading = useSelector(getArticlesLoadingStatus());
  const isFavoritesPage = location.pathname === '/favorites';

  return (
    <div className="main">
      <div className="main__header">
        {!isFavoritesPage ? `Сегодня ${getLocalDate()}` : 'Избранное'}
      </div>
      {!isLoading ? (
        <CardList
          articles={articles}
          addFavorite={addFavorite}
          favorites={favorites}
          isFavoritesPage={isFavoritesPage}
        />
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Main;
