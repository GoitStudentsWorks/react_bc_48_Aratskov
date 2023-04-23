import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { Notify } from 'notiflix';
import StatisticsService from 'services/statistic.service';

export const addDate = createAction('statistics/addDate', ({ month, year }) => {
  return {
    payload: {
      month,
      year,
    },
  };
});

export const getTransactions = createAsyncThunk(
  'statistics/getTransactions',
  async (payload, thunkApi) => {
    const { month, year } = payload;
    try {
      const { data } = await StatisticsService.getTransactions(month, year);

      if (typeof data === 'string') return [];
      return data;
    } catch (error) {
      const { status } = error.response.request;
      if (status === 401) {
        Notify.failure('User not found');
      } else if (status === 404) {
        Notify.failure('Not Found!');
      } else if (status === 500) {
        Notify.failure('Server error');
      }
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      const { transactions } = getState().statistics;

      if (!transactions.length) return true;
      return false;
    },
  }
);

export const getCategories = createAsyncThunk(
  'statistics/getCategories',
  async (payload, thunkApi) => {
    const { month, year } = payload;
    try {
      const { data } = await StatisticsService.getCategories(month, year);
      if (typeof data === 'string') return [];
      return data;
    } catch (error) {
      const { status } = error.response.request;
      if (status === 401) {
        Notify.failure('User not found');
      } else if (status === 404) {
        Notify.failure('Not Found!');
      } else if (status === 500) {
        Notify.failure('Server error');
      }
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      const { categories } = getState().statistics;

      if (!categories.length) return true;
      return false;
    },
  }
);

export const deleteTransaction = createAsyncThunk(
  'statistics/deleteTransaction',
  async (payload, { dispatch, getState }) => {
    await StatisticsService.deleteTransaction(payload);
    const { date } = getState().statistics;
    await dispatch(getTransactions(date));
  }
);

setTimeout(deleteTransaction, 0);

export const updateTransaction = createAsyncThunk(
  'statistics/updateTransaction',
  async (payload, { dispatch }) => {
    await StatisticsService.updateTransaction(payload);
    await dispatch(getTransactions());
  }
);
