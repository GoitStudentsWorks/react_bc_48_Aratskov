import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://flat-backend.p.goit.global/api';

export const getTransaction = createAsyncThunk(
  'transaction/get',
  //   async (_, thunkApi) => {
  //     const { token } = thunkApi.getState().auth;
  //     try {
  //       const { data } = await axios.get('/cashflow', {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       return data;
  //     } catch (error) {
  //       //   const { status } = error.response.request;
  //       //   if (status === 401) {
  //       //     Notify.failure('User not found');
  //       //   } else if (status === 404) {
  //       //     Notify.failure('Not Found!');
  //       //   } else if (status === 500) {
  //       //     Notify.failure('Server error');
  //       //   }
  //       return thunkApi.rejectWithValue(error.message);
  //     }
  //   },

  async (credentials, { rejectWithValue }) => {
    try {
      const data = await axios.get('/cashflow', credentials);
      console.log(data.data);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      const { items } = getState().transaction;

      if (!items.length) return true;
      return false;
    },
  }
);
