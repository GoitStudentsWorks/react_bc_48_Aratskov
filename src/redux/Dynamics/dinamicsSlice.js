import { createSlice } from '@reduxjs/toolkit';
import { uploadImage } from './dinamicsOperation';

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
    extraReducers: builder => {
      builder
        .addCase(uploadImage.fulfilled, (state, { payload }) => {
        console.log(payload);
      })
    },
});

const dinamicsReducer = dinamicsSlice.reducer;

export default dinamicsReducer;
export const { addImg } = dinamicsSlice.actions;
