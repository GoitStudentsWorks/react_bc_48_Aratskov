import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'redux/Auth/authOperations';

axios.defaults.baseURL = 'https://flat-backend.p.goit.global/api';

export const uploadImage = createAsyncThunk(
  'dynamics/patch',
  async (image, thunkAPI) => {
    try {
      const imageToken = thunkAPI.getState().auth.token;
      token.set(imageToken);
      
      const data = await axios.patch('/dynamics/flatImage', image);
      console.log('data', data);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userChartInfo = createAsyncThunk(
  'dynamics/get',
  async (__, thunkAPI) => {
    try {
      const imageToken = thunkAPI.getState().auth.token;
      token.set(imageToken);

      const data = await axios.get('/dynamics');
      console.log('data', data.data);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);