import { createSlice } from '@reduxjs/toolkit';
import {
  getPersonalPlan,
  postPersonalPlan,
    postPersonalPlanPre,
  putPersonalPlan,
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
    _id:null,
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
      })
        .addCase(getPersonalPlan.rejected, (state) => {
            return {
                ...state, salary: '',
    passiveIncome: '',
    savings: '',
    cost: '',
    footage: '',
    procent: '',
    year: '',
      month: '',
            }
        })
      .addCase(putPersonalPlan.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
        };
      })
  },
});

export default personalPlanSlice.reducer;
