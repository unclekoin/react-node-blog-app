import React from 'react';
import { useTagId } from '../../../hooks/use-tag-id';
import Card from '../card';

const CardList = ({ articles, addFavorite, favorites, isFavoritesPage }) => {
  const { currentTagId } = useTagId();
  const data = isFavoritesPage
    ? articles.filter((article) => favorites.includes(article._id))
    : articles;

  const dataSorted = [...data].sort(
    (a, b) => new Date(b.createdAt).getTime(a.createdAt) - new Date().getTime()
  );

  const filteredData = currentTagId
    ? [...dataSorted].filter((article) => article.tags.includes(currentTagId))
    : dataSorted;

  return (
    <>
      {filteredData.map((article) => (
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
