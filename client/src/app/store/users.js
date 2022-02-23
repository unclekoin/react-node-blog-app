import { createSlice } from '@reduxjs/toolkit';
import usersService from '../services/users.service';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    lastFetch: null,
  },
  reducers: {
    usersRequested(state) {
      state.isLoading = true;
    },
    usersReceived(state, action) {
      state.entities = action.payload;
      state.lastFetch = Date.now();
      state.isLoading = false;
    },
    usersRequestFiled(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: usersReducer, actions } = usersSlice;
const { usersRequested, usersReceived, usersRequestFiled } = actions;

const isOutdated = (date) => {
  return Date.now() - date > 10 * 60 * 1000;
};

export const loadUsersList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().users;
  if (isOutdated(lastFetch)) {
    dispatch(usersRequested());
    try {
      const content = await usersService.fetchAll();
      dispatch(usersReceived(content));
    } catch (error) {
      dispatch(usersRequestFiled(error.message));
    }
  }
};

export const getUsers = () => (state) => state.users.entities;
export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
export const getUserById = (userId) => (state) => {
  if (state.users.entities) {
    return state.users.entities.find((user) => user._id === userId);
  }
  return '';
};

export default usersReducer;
