import { createSlice } from '@reduxjs/toolkit';
import { getCategoryList } from './cashflowOperations';

const initialState = {
  category: [],
};

const cashflowSlice = createSlice({
  name: 'cashflow',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCategoryList.fulfilled, (state, { payload }) => {
        state.category = payload;
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
