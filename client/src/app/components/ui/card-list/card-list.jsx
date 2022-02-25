import React from 'react';
import Card from '../card';

const CardList = ({ articles, addFavorite, favorites, isFavoritesPage }) => {
  const data = isFavoritesPage
    ? articles.filter((article) => favorites.includes(article._id))
    : articles;

  return (
    <>
      {data.map((article) => (
        <Card
          key={article._id}
          {...article}
          addFavorite={addFavorite}
          favorites={favorites}
        />
      ))}
    </>
  );
};

export default CardList;
