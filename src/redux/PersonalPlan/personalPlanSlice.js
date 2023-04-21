import { createSlice } from '@reduxjs/toolkit';
import {
  getPersonalPlan,
  postPersonalPlan,
  postPersonalPlanPre,
} from './personalPlanOperationg';

const personalPlanSlice = createSlice({
  name: 'plan',
  initialState: {
    salary: '',
    passiveIncome: '',
    savings: '',
    cost: '',
    footage: '',
    procent: '',
    year: '',
    month: '',
  },

  extraReducers: builder => {
    builder
      .addCase(postPersonalPlanPre.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
        };
      })
      .addCase(postPersonalPlan.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
        };
      })
      .addCase(getPersonalPlan.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
        };
      });
  },
});

export default personalPlanSlice.reducer;
