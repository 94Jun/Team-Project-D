import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  userList: [
    {
      uid: "u1",
      email: "email",
      password: "password",
      name: "cat",
      phone: "010-1234-5678",
      profile: "images/default_profile.jpg",
      following: [],
      follower: [],
      myPosting: ["p1"],
      likedPosting: ["p2"],
      markedPosting: ["p1"],
      myComments: ["c1"],
      notice: [],
      timestamp: new Date().toLocaleDateString(),
      recentSearchs: [],
    },
  ],
  currentUser: "u1",
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    USER_LIKE_POSTING: (state, action) => {
      const { pid } = action.payload;
      const existingUser = state.userList.find((user) => {
        return user.uid === state.currentUser;
      });
      if (existingUser.likedPosting.includes(pid)) {
        const temp = existingUser.likedPosting.filter((posting) => {
          return posting !== pid;
        });
        existingUser.likedPosting = temp;
      } else {
        existingUser.likedPosting.push(pid);
      }
    },
    //좋아요 / 좋아요 취소 기능
    //좋아요 아이콘 클릭 시 해당 유저의 정보에 좋아요 리스트 추가 또는 삭제
    USER_MARK_POSTING: (state, action) => {
      const { pid } = action.payload;
      const existingUser = state.userList.find((user) => {
        return user.uid === state.currentUser;
      });
      if (existingUser.markedPosting.includes(pid)) {
        const temp = existingUser.markedPosting.filter((posting) => {
          return posting !== pid;
        });
        existingUser.markedPosting = temp;
      } else {
        existingUser.markedPosting.push(pid);
      }
    },
    //마크 / 마크 취소 기능
    //마크 아이콘 클릭 시 해당 유저의 정보에 마크 리스트 추가 또는 삭제
    USER_ADD_COMMENT: (state, action) => {
      const { cid } = action.payload;
      const existingUser = state.userList.find((user) => {
        return user.uid === state.currentUser;
      });
      existingUser.myComments.push(cid);
    },
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
  },
});

export const {
  USER_LIKE_POSTING,
  USER_MARK_POSTING,
  USER_ADD_COMMENT,
  ADD_RECENT_SEARCH,
  REMOVE_RECENT_SEARCH,
} = user.actions;
export default user.reducer;
