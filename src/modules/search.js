import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentSearch: null,
};
const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    SET_CURRENT_SEARCH: (state, action) => {
      state.currentSearch = action.payload;
    },
  },
});
export const { SET_CURRENT_SEARCH } = search.actions;
export default search.reducer;
