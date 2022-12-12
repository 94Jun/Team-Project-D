import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  currentUserInfo: {},
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    GET_CURRENT_USER_INFO: (state, action) => {
      state.currentUserInfo = action.payload;
    },
    REMOVE_NOTICE: (state, action) => { 
      const filteredNotice = state.currentUserInfo.notice.filter((notice) => { 
        return notice.nid !== action.payload
      })
      state.currentUserInfo.notice = filteredNotice
    }
  },
});

export const {
  ADD_RECENT_SEARCH,
  REMOVE_RECENT_SEARCH,
  GET_CURRENT_USER_INFO,
  REMOVE_NOTICE,
} = user.actions;
export default user.reducer;
