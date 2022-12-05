import { configureStore } from "@reduxjs/toolkit";
import ExampleReducer from "./modules/example";
import UserReducer from "./modules/user";
import PostingReducer from "./modules/posting";
import CommentReducer from "./modules/comment";
import HashReducer from "./modules/hash";
import UpLoadReducer from "./modules/upload";
export default configureStore({
  reducer: {
    example: ExampleReducer,
    user: UserReducer,
    posting: PostingReducer,
    comment: CommentReducer,
    hash: HashReducer,
    upload: UpLoadReducer,
  },
});
