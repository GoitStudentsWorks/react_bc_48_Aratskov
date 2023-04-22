import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

export const getCategoryList = createAsyncThunk(
  'cashflow/category',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/cashflow/category');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getPresevingDate = createAsyncThunk(
  'cashflow/presaving',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/cashflow/presaving');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'cashflow/transaction',
  async (sum, { rejectWithValue }) => {
    console.log(sum);
    try {
      const { data } = await axios.post('/cashflow', sum);
      return data;
    } catch (error) {
      const { status } = error.response.request;
      switch (status) {
        case 500:
          Notify.failure('Sorry, server error occured👻');
          break;
        case 401:
          Notify.failure('Sorry, you are not authorized👻');
          break;
        default:
          Notify.failure('Sorry, bad reqest👻');
      }
      return rejectWithValue(error.message);
    }
  }
);
