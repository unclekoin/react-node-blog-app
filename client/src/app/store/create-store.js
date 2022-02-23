import { combineReducers, configureStore } from '@reduxjs/toolkit';
import articlesReducer from './articles';
import tagsReducer from './tags';
import usersReducer from './users';

const rootReducer = combineReducers({
  tags: tagsReducer,
  articles: articlesReducer,
  users: usersReducer,
});

export const createStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
