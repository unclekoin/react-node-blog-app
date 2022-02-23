import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getArticles,
  getArticlesLoadingStatus,
  loadArticlesList,
} from '../../../store/articles';
import Card from '../card';

const CardList = ({ addFavorite, favorites }) => {
  const dispatch = useDispatch();
  const articles = useSelector(getArticles());
  const isLoading = useSelector(getArticlesLoadingStatus());

  useEffect(() => {
    dispatch(loadArticlesList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <h3>Loading...</h3>;
  return (
    <>
      {articles.map((article) => (
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
