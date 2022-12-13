import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  currentUserInfo: {},
  profile: [],
  profileImg: [],
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
    GET_CURRENT_USER_PROFILE: (state, action) => {
      state.profile[0] = action.payload;
    },
    ADD_CURRENT_USER_PROFILE: (state, action) => {
      state.profileImg[0] = action.payload;
    },
  },
});

export const {
  ADD_RECENT_SEARCH,
  REMOVE_RECENT_SEARCH,
  GET_CURRENT_USER_INFO,
  GET_CURRENT_USER_PROFILE,
  ADD_CURRENT_USER_PROFILE,
} = user.actions;
export default user.reducer;
