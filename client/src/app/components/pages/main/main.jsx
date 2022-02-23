import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loadUsersList } from '../../../store/users';
import { getLocalDate } from '../../../utils';
import CardList from '../../ui/card-list/card-list';

const Main = ({ addFavorite, favorites }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isFavoritesPage = location.pathname === '/favorites';

  useEffect(() => {
    dispatch(loadUsersList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main">
      <div className="main__header">
        {!isFavoritesPage ? `Сегодня ${getLocalDate()}` : 'Избранное'}
      </div>
      <CardList
        addFavorite={addFavorite}
        favorites={favorites}
        isFavoritesPage={isFavoritesPage}
      />
    </div>
  );
};

export default Main;
