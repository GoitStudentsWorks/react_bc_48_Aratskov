import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://flat-backend.p.goit.global/api';

const token = {
  set(token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'user/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/user/register', credentials);
      token.set(res.data.token);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  '/user/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/user/login', credentials);
      token.set(res.data.token);

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post('/user/logout');
      token.unset();
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
