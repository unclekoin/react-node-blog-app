import { createSlice } from '@reduxjs/toolkit';
import articlesService from '../services/articles.service';

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    lastFetch: null,
  },
  reducers: {
    articlesRequested(state) {
      state.isLoading = true;
    },
    articlesReceived(state, action) {
      state.entities = action.payload;
      state.lastFetch = Date.now();
      state.isLoading = false;
    },
    articlesRequestFiled(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: articlesReducer, actions } = articlesSlice;
const { articlesRequested, articlesReceived, articlesRequestFiled } = actions;

const isOutdated = (date) => {
  return Date.now() - date > 10 * 60 * 1000;
};

export const loadArticlesList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().articles;
  if (isOutdated(lastFetch)) {
    dispatch(articlesRequested());
    try {
      const content = await articlesService.fetchAll();
      dispatch(articlesReceived(content));
    } catch (error) {
      dispatch(articlesRequestFiled(error.message));
    }
  }
};

export const getArticles = () => (state) => state.articles.entities;
export const getArticlesLoadingStatus = () => (state) =>
  state.articles.isLoading;
export const getArticleById = (articleId) => (state) => {
  if (state.articles.entities) {
    return state.articles.entities.find((article) => article._id === articleId);
  }
  return {};
};

export default articlesReducer;
