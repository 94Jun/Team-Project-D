import { createSlice } from "@reduxjs/toolkit";
const currentUser = "u1";
// 데이터베이스에서 받아와야함
const initialState = {
  postingList: [
    {
      pid: Math.random().toString(),
      timestamp: new Date().toLocaleDateString(),
      contents: {
        images: [],
        text: "",
        hashtags: [],
      },
    },
  ],
};
export const posting = createSlice({
  name: "posting",
  initialState,
  reducers: {
    ADD_POSTING: (state, action) => {
      state.posting.contents = action.payload;
    },
  },
});
//createrSlice에 초기값과 redeucer 값이 동시에 들어감

export const { ADD_POSTING } = posting.actions;
export default posting.reducer;
