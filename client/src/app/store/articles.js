import { createAction, createSlice } from '@reduxjs/toolkit';
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
    articleCreated(state, action) {
      state.entities.push(action.payload);
    },
    articleDataUpdated(state, action) {
      const userIndex = state.entities.findIndex(
        (article) => article._id === action.payload._id
      );
      state.entities[userIndex] = action.payload;
    },
    updateArticleFailed(state, action) {
      state.error = action.payload;
    },
    articleRemoved(state, action) {
      state.entities = state.entities.filter(
        (article) => article._id !== action.payload
      );
    },
    createArticleFailed(state, action) {
      state.error = action.payload;
    },
    removeArticleFailed(state, payload) {
      state.error = state.payload;
    },
  },
});

const articleCreateRequested = createAction('article/articleCreateRequested');
const articleRemoveRequested = createAction('article/articleRemoveRequested');

const { reducer: articlesReducer, actions } = articlesSlice;
const {
  articlesRequested,
  articlesReceived,
  articlesRequestFiled,
  articleCreated,
  articleRemoved,
  createArticleFailed,
  articleDataUpdated,
  updateArticleFailed,
  removeArticleFailed,
} = actions;

const articleUpdateRequested = createAction('articles/articleUpdateRequested');

const isOutdated = (date) => {
  return Date.now() - date > 10 * 60 * 1000;
};

export const loadArticlesList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().articles;
  if (isOutdated(lastFetch)) {
    dispatch(articlesRequested());
    try {
      const content = await articlesService.getArticles();
      dispatch(articlesReceived(content));
    } catch (error) {
      dispatch(articlesRequestFiled(error.message));
    }
  }
};

export const createArticle = (payload) => async (dispatch) => {
  dispatch(articleCreateRequested());
  try {
    const content = await articlesService.createArticle(payload);
    dispatch(articleCreated(content));
  } catch (error) {
    dispatch(createArticleFailed(error.message));
  }
};

export function updateArticleData(payload, articleId) {
  return async function (dispatch) {
    dispatch(articleUpdateRequested());
    try {
      const { content } = await articlesService.updateArticle(
        payload,
        articleId
      );
      dispatch(articleDataUpdated(content));
    } catch (error) {
      dispatch(updateArticleFailed(error.message));
    }
  };
}

export const removeArticle = (articleId) => async (dispatch) => {
  dispatch(articleRemoveRequested());
  try {
    const content = await articlesService.removeArticle(articleId);
    if (!content) dispatch(articleRemoved(articleId));
  } catch (error) {
    dispatch(removeArticleFailed(error.message));
  }
};

export const getArticles = () => (state) => state.articles.entities;
export const getArticlesLoadingStatus = () => (state) =>
  state.articles.isLoading;
export const getArticlesByIds = (articlesIds) => (state) => {
  return articlesIds;
};
export const getArticleById = (articleId) => (state) => {
  if (state.articles.entities) {
    return state.articles.entities.find((article) => article._id === articleId);
  }
  return {};
};

export default articlesReducer;
