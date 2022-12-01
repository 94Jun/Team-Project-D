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
      markedPosting: ["p2"],
      myComments: ["c1"],
      notice: [],
      timestamp: new Date().toLocaleDateString(),
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
  },
});

export const { USER_LIKE_POSTING } = user.actions;
export default user.reducer;
