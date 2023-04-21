import { createSlice } from '@reduxjs/toolkit';
// import { dinamicsOperation } from './dinamicsOperation';

const dinamicsSlice = createSlice({
  name: 'dinamics',
  initialState: {
    image: '',
  },
  reducers: {
    addImg(state, { payload }) {
      state.image = payload;
    },
  },
  //   extraReducers: builder => {
  //     builder
  //   },
});

const dinamicsReducer = dinamicsSlice.reducer;

export default dinamicsReducer;
export const { addImg } = dinamicsSlice.actions;
