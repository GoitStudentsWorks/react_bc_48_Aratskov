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
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut() {
      return { ...initialState };
    }},
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoggedIn = true;
        state.error = null;
        state.isLoading = false;
        state.user = { ...payload };
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { name, email } = payload.user;

        state.error = null;
        state.isLoading = false;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.user = { name, email };
      })
      .addCase(logoutUser.fulfilled, state => {
        return initialState;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        const { name, email } = payload.user;
        state.error = null;
        state.isLoading = false;
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
          console.log(payload);
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});


export const { logOut } = authSlice.actions;
export default authSlice.reducer;
