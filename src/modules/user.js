import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  currentUserInfo: {},
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    ADD_RECENT_SEARCH: (state, action) => {
      const existingUser = state.userList.find((user) => {
        return user.uid === state.currentUser;
      });
      existingUser.recentSearchs.push(action.payload);
    },
    REMOVE_RECENT_SEARCH: (state, action) => {
      const { removedContent } = action.payload;
      const existingUser = state.userList.find((user) => {
        return user.uid === state.currentUser;
      });
      const updatedRecentSearchs = existingUser.recentSearchs.filter(
        (content) => {
          return content !== removedContent;
        }
      );
      existingUser.recentSearchs = updatedRecentSearchs;
    },
    GET_CURRENT_USER_INFO: (state, action) => {
      state.currentUserInfo = action.payload;
    },
  },
});

export const {
  ADD_RECENT_SEARCH,
  REMOVE_RECENT_SEARCH,
  GET_CURRENT_USER_INFO,
} = user.actions;
export default user.reducer;
