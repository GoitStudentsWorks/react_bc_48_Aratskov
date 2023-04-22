import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { token } from 'redux/Auth/authOperations';

axios.defaults.baseURL = 'https://flat-backend.p.goit.global/api';

export const uploadImage = createAsyncThunk(
  'dynamics/patch',
  async (image, { rejectWithValue }) => {
    try {
      const data = await axios.patch('/dynamics/flatImage', image);
      console.log('data', data);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userChartInfo = createAsyncThunk(
  'dynamics/get',
  async (chartData, { rejectWithValue }) => {
    try {
      const data = await axios('/dynamics', chartData);
      console.log('data', data.data);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);