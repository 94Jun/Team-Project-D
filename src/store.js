import { configureStore } from "@reduxjs/toolkit";
import ExampleReducer from "./modules/example";
import UserReducer from "./modules/user";
import PostingReducer from "./modules/posting";
import CommentReducer from "./modules/comment";

export default configureStore({
  reducer: {
    example: ExampleReducer,
    user: UserReducer,
    posting: PostingReducer,
    comment: CommentReducer,
  },
});
