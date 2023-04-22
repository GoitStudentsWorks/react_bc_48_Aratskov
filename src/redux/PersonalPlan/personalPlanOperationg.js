import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

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
      return data.data;
    } catch (error) {
        console.log(error.response.status);
        if (error.response.status === 400) {
            Notify.failure('You don`t have personal plan yet')
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

// export const unsetPlanState = () => {
//     state.plan=initialState
// }