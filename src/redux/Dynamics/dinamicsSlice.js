import { createSlice } from '@reduxjs/toolkit';
import { uploadImage, userChartInfo } from './dinamicsOperation';

const dinamicsSlice = createSlice({
  name: 'dinamics',
  initialState: {
    image: '',
    chartInfo: [],
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
      .addCase(userChartInfo.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
        };
      });
  },
});

const dinamicsReducer = dinamicsSlice.reducer;

export default dinamicsReducer;
export const { addImg } = dinamicsSlice.actions;
