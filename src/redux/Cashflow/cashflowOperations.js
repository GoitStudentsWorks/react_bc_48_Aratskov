import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
    console.log(sum)
    try {
      const { data } = await axios.post('/cashflow', sum);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
