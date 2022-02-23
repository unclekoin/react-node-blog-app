import { createSlice } from "@reduxjs/toolkit";
import tagsService from "../services/tags.service";

const tagsSlice = createSlice({
  name: "tags",
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    lastFetch: null
  },
  reducers: {
    tagsRequested(state) {
      state.isLoading = true;
    },
    tagsReceived(state, action) {
      state.entities = action.payload;
      state.lastFetch = Date.now();
      state.isLoading = false;
    },
    tagsRequestFiled(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { reducer: tagsReducer, actions } = tagsSlice;
const { tagsRequested, tagsReceived, tagsRequestFiled } = actions;

const isOutdated = (date) => {
  return Date.now() - date > 10 * 60 * 1000;
};

export const loadTagsList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().tags;
  if (isOutdated(lastFetch)) {
    dispatch(tagsRequested());
    try {
      const content = await tagsService.fetchAll();
      dispatch(tagsReceived(content));
    } catch (error) {
      dispatch(tagsRequestFiled(error.message));
    }
  }
};

export const getTags = () => (state) => state.tags.entities;
export const getTagsLoadingStatus = () => (state) => state.tags.isLoading;
export const getTagsByIds = (tagsIds) => (state) => {
  const tagsArray = [];
  if (state.tags.entities && tagsIds) {
    for (const tagId of tagsIds) {
      for (const tag of state.qualities.entities) {
        if (tag._id === tagId) {
          tagsArray.push(tag);
          break;
        }
      }
    }
    return tagsArray;
  }
  return [];
};

export default tagsReducer;