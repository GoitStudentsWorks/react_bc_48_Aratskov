import { createSlice } from '@reduxjs/toolkit';
import {
  getPersonalPlan,
  postPersonalPlan,
  postPersonalPlanPre,
  putPersonalPlan,
} from './personalPlanOperations';

const initialState = {
  salary: '',
  passiveIncome: '',
  savings: '',
  cost: '',
  footage: '',
  procent: '',
  year: '',
  month: '',
  error: false,
};

const personalPlanSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    unsetPlanState() {
      return { ...initialState };
    },
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
      .addCase(getPersonalPlan.rejected, (state, { payload }) => {
        return {
          ...state,
          error: payload,
        };
      })
      .addCase(putPersonalPlan.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
        };
      });
  },
});

export const { unsetPlanState } = personalPlanSlice.actions;
export default personalPlanSlice.reducer;
