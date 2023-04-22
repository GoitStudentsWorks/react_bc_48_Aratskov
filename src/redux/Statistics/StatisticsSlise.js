import { createSlice } from '@reduxjs/toolkit';
import { getTransaction } from './StatisticsOperations';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      //   .addCase(getTransaction.pending, state => {
      //     state.isLoading = true;
      //     state.error = null;
      //   })
      // .addCase(getTransaction.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.items = action.payload;
      // })
      .addCase(getTransaction.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          items: [...payload],
        };
        // })
        // .addCase(getTransaction.rejected, (state, action) => {
        //   state.isLoading = false;
        //   state.error = action.error.message;
      });
  },
});

export default transactionsSlice.reducer;
