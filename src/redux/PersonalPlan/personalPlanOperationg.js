import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

import { store } from 'redux/store';

axios.defaults.baseURL = 'https://flat-backend.p.goit.global/api';

export const postPersonalPlanPre = createAsyncThunk(
  'plan/postpre',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await axios.post('/personal-plan/pre', credentials);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postPersonalPlan = createAsyncThunk(
  'plan/post',
    async (credentials, { rejectWithValue }) => {
      console.log(store.plan);
    try {
      const data = await axios.post('/personal-plan', credentials);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getPersonalPlan = createAsyncThunk(
  'plan/get',
  async (_, { rejectWithValue }) => {
    try {
      const data = await axios.get('/personal-plan');
      console.log('DAta', data);
      return data.data;
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 400) {
        Notify.failure(error.response.data);
        return error.data;
      }
      return rejectWithValue(error.message);
    }
  }
);

export const putPersonalPlan = createAsyncThunk(
  'plan/put',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await axios.put('/personal-plan', credentials);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
