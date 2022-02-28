import { createSlice, createAction } from '@reduxjs/toolkit';
import authService from '../services/auth.service';
import localStorageService from '../services/localStorage.service';
import userService from '../services/users.service';
import { generateAuthError } from '../utils';

const initialState = {
  entities: null,
  isLoading: true,
  error: null,
  auth: { userId: localStorageService.getUserId() },
  isLoggedIn: true,
  dataLoaded: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersRequested(state) {
      state.isLoading = true;
    },
    usersReceived(state, action) {
      state.entities = action.payload;
      state.dataLoaded = true;
      state.isLoading = false;
    },
    usersRequestFiled(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    authRequestSuccess(state, action) {
      state.auth = action.payload;
      state.isLoggedIn = true;
    },
    authRequestFailed(state, action) {
      state.error = action.payload;
    },
    userCreated(state, action) {
      state.entities.push(action.payload);
    },
    userLoggedOut(state) {
      // state.entities = null;
      state.isLoggedIn = false;
      state.auth = null;
      state.dataLoaded = false;
    },
    userDataUpdated(state, action) {
      const userIndex = state.entities.findIndex(
        (user) => user._id === action.payload._id
      );
      state.entities[userIndex] = action.payload;
    },
    updateUserFailed(state, action) {
      state.error = action.payload;
    },
    authRequested(state) {
      state.error = null;
    },
  },
});

const { reducer: usersReducer, actions } = usersSlice;
const {
  usersRequested,
  usersReceived,
  usersRequestFiled,
  authRequestSuccess,
  authRequestFailed,
  userLoggedOut,
  userDataUpdated,
  updateUserFailed,
  authRequested,
} = actions;

const userUpdateRequested = createAction('users/userUpdateRequested');

export const login = (payload) => async (dispatch) => {
  const { email, password } = payload;
  dispatch(authRequested());
  try {
    const data = await authService.login({ email, password });
    localStorageService.setTokens(data);
    dispatch(authRequestSuccess({ userId: data.userId }));
  } catch (error) {
    const { code, message } = error.response.data.error;
    if (code === 400) {
      const errorMessage = generateAuthError(message);
      dispatch(authRequestFailed(errorMessage));
    } else {
      dispatch(authRequestFailed(error.message));
    }
  }
};

export const signUp = (payload) => async (dispatch) => {
  dispatch(authRequested());
  try {
    const data = await authService.register(payload);
    localStorageService.setTokens(data);
    dispatch(authRequestSuccess({ userId: data.userId }));
  } catch (error) {
    dispatch(authRequestFailed(error.message));
  }
};

export const logOut = () => (dispatch) => {
  localStorageService.removeAuthData();
  dispatch(userLoggedOut());
};

export function updateUserData(payload) {
  return async function (dispatch) {
    dispatch(userUpdateRequested());
    try {
      const content = await userService.update(payload);
      dispatch(userDataUpdated(content));
    } catch (error) {
      dispatch(updateUserFailed(error.message));
    }
  };
}

export const loadUsersList = () => async (dispatch) => {
  dispatch(usersRequested());
  try {
    const content = await userService.get();
    dispatch(usersReceived(content));
  } catch (error) {
    dispatch(usersRequestFiled(error.message));
  }
};

export const getUsersList = () => (state) => state.users.entities;
export const getCurrentUserData = () => (state) => {
  return state.users.entities
    ? state.users.entities.find((user) => user._id === state.users.auth.userId)
    : null;
};

export const getUserById = (userId) => (state) => {
  if (state.users.entities) {
    return state.users.entities.find((user) => user._id === userId);
  }
};

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
export const getDataStatus = () => (state) => state.users.dataLoaded;
export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
export const getCurrentUserId = () => (state) => state.users.auth?.userId;
export const getAuthErrors = () => (state) => state.users.error;

export default usersReducer;
