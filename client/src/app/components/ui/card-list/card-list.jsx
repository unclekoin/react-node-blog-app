import React from 'react';
import { useTagId } from '../../../hooks/use-tag-id';
import { useSearch } from '../../../hooks/use-search';
import { useAuthor } from '../../../hooks/use-author';
import Card from '../card';

const CardList = ({ articles, addFavorite, favorites, isFavoritesPage }) => {
  const { query } = useSearch();
  const { currentTagId } = useTagId();
  const { currentAuthorId } = useAuthor();

  const data = isFavoritesPage
    ? articles.filter((article) => favorites.includes(article._id))
    : articles;

  const dataSorted = [...data].sort(
    (a, b) => new Date(b.createdAt).getTime(a.createdAt) - new Date().getTime()
  );

  const filteredData = currentTagId
    ? [...dataSorted].filter((article) => article.tags.includes(currentTagId)) :
    currentAuthorId ? [...dataSorted].filter((article) => article.author === currentAuthorId)
    : dataSorted.filter(
        (article) =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          getContent(article).includes(query.toLowerCase())
    );
  

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

const getContent = (article) => {
  return article.content
    .map((text) => text.content)
    .flat()
    .join(' ')
    .toLowerCase();
};

export default CardList;
