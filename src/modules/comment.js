import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  commentList: [
    {
      cid: "c1",
      writer: "u1",
      posting: "p1",
      timestamp: new Date().toLocaleDateString(),
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure reiciendis ab temporibus nostrum voluptatibus. Tempore, iure. Voluptas quos autem error quam quisquam ratione laborum quis est? Unde totam velit natus?",
    },
    {
      cid: "c2",
      writer: "u1",
      posting: "p1",
      timestamp: new Date().toLocaleDateString(),
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure reiciendis ab temporibus nostrum voluptatibus. Tempore, iure. Voluptas quos autem error quam quisquam ratione laborum quis est? Unde totam velit natus?",
    },
  ],
};

export const comment = createSlice({
  name: "comment",
  initialState,
  reducers: {},
});

export const {} = comment.actions;
export default comment.reducer;
