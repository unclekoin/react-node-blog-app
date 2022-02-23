import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tagsReducer from "./tags";

const rootReducer = combineReducers({
  tags: tagsReducer,
});

export const createStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};