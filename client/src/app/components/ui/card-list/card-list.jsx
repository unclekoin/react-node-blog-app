import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getArticles,
  getArticlesLoadingStatus,
  loadArticlesList,
} from '../../../store/articles';
import Card from '../card';

const CardList = ({ addFavorite, favorites, isFavoritesPage }) => {
  const dispatch = useDispatch();
  const articles = useSelector(getArticles());
  const isLoading = useSelector(getArticlesLoadingStatus());

  useEffect(() => {
    dispatch(loadArticlesList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    const data = isFavoritesPage
    ? articles.filter((article) => favorites.includes(article._id))
    : articles;

  if (isLoading) return <h3>Loading...</h3>;
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
