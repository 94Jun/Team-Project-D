import { configureStore } from "@reduxjs/toolkit";
import ExampleReducer from "./modules/example";

export default configureStore({
  reducer: {
    example: ExampleReducer,
  },
});
