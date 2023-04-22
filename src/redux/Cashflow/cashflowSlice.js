import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  getCategoryList,
  getPresevingDate,
} from './cashflowOperations';

const initialState = {
  category: [],
  presaving: {
    monthLimit: 0,
    dailyLimit: 0,
    totalByMounth: 0,
    totalByDay: 0,
  },
};

const cashflowSlice = createSlice({
  name: 'cashflow',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCategoryList.fulfilled, (state, { payload }) => {
        state.category = payload;
      })
      .addCase(getPresevingDate.fulfilled, (state, { payload }) => {
        state.presaving = payload;
      })
      .addCase(addTransaction, (state, { payload }) => {
        const { sum, type } = payload;
        if (type === 'expense') {
          state.presaving.dailyLimit -= sum;
        } else {
          return state;
        }
      })
      .addMatcher(
        action =>
          action.type.startsWith('cashflow') &&
          action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('cashflow') &&
          action.type.endsWith('/pending'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export default cashflowSlice.reducer;
