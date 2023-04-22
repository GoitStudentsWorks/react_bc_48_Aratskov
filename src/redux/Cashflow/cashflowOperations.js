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

// /api/cashflow/category
