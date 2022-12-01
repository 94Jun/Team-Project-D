import { configureStore } from "@reduxjs/toolkit";
import ExampleReducer from "./modules/example";
import PostingReducer from "./modules/posting1";

export default configureStore({
  reducer: {
    example: ExampleReducer,
    posting: PostingReducer,
  },
});
