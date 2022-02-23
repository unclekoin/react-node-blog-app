import React from 'react';
import { useLocation } from 'react-router-dom';
import { getLocalDate } from '../../../utils';
import CardList from '../../ui/card-list/card-list';

const Main = ({ addFavorite, favorites }) => {
  const location = useLocation();
  const isFavoritesPage = location.pathname === '/favorites';

  // const data = isFavoritesPage
  //   ? articles.filter((article) => favorites.includes(article._id))
  //   : articles;

  return (
    <div className="main">
      <div className="main__header">
        {!isFavoritesPage ? `Сегодня ${getLocalDate()}` : 'Избранное'}
      </div>
        <CardList addFavorite={addFavorite} favorites={favorites} />
    </div>
  );
};

export default Main;
