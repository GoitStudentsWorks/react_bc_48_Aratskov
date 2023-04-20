import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
          token: payload.token,
          isLoggedIn: true,
        };
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        return {
          ...state,
          ...payload,
          token: payload.token,
          isLoggedIn: true,
        };
      })
      .addCase(logoutUser.fulfilled, state => {
        return initialState;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        const { name, email } = payload.user;
        state.user = { name, email };
        state.isLoggedIn = true;
      })
      .addMatcher(
        action =>
          action.type.startsWith('user') && action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('user') && action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export default authSlice.reducer;
