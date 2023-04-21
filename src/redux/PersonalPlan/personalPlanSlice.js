import { createSlice } from '@reduxjs/toolkit';
import { postPlanPre } from './personalPlanOperationg';

const personalPlanSlice = createSlice({
  name: 'plan',
  initialState: {
    salary: null,
    passiveIncome: null,
    savings: null,
    cost: null,
    footage: null,
    procent: null,
    year: null,
    month: null,
  },

  extraReducers: builder => {
    builder.addCase(postPlanPre.fulfilled, (state, { payload }) => {
      return {
        ...state, ...payload,
      };
    });
  },
});

export default personalPlanSlice.reducer;
