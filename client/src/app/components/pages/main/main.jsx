import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../../ui/card';
import { getLocalDate } from '../../../utils';
import { articles } from '../../../../mock-data';

const Main = ({ addFavorite, favorites }) => {
  const location = useLocation();
  const isFavoritesPage = location.pathname === '/favorites';

  const data = isFavoritesPage
    ? articles.filter((article) => favorites.includes(article._id))
    : articles;

  return (
    <div className="main">
      <div className="main__header">
        {!isFavoritesPage ? `Сегодня ${getLocalDate()}` : 'Избранное'}
      </div>
        {data.map((article) => (
          <Card
            key={article._id}
            {...article}
            addFavorite={addFavorite}
            favorites={favorites}
          />
        ))}
    </div>
  );
};

export default Main;
