import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: false,
  currentUser: localStorage.getItem("currentUser")
    ? localStorage.getItem("currentUser")
    : "비회원",
};
const login = createSlice({
  name: "login",
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      state.isLoggedIn = true;
      localStorage.setItem("currentUser", action.payload);
    },
  },
});
export const { LOGIN } = login.actions;
export default login.reducer;
