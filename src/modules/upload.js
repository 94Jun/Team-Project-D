import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ImgList: [],
};

export const upload = createSlice({
  name: "upload",
  initialState,
  reducers: {
    ADD_IMG: (state, action) => {
      state.ImgList.push(action.payload);
    },
    DELETE_IMG: (state, action) => {
      state.ImgList = action.payload;
    },
    INITIAL_STATE_IMG: (state) => {
      state.ImgList = [];
    },
  },
});

export const { ADD_IMG, DELETE_IMG, INITIAL_STATE_IMG } = upload.actions;
export default upload.reducer;
