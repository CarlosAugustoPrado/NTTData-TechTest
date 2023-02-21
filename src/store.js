import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
  middleware: [thunk],
});

export default store;
