import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'redux/Auth/authOperations';

axios.defaults.baseURL = 'https://flat-backend.p.goit.global/api';

export const uploadImage = createAsyncThunk(
  'dynamics/patch',
  async (image, thunkAPI) => {
    try {
      const value = thunkAPI.getState().auth.token;
      token.set(value);

      const data = await axios.patch('/dynamics/flatImage', image);
      console.log('data', data);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
