import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todoReducer";

// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    todo: todoReducer,
  },
});

export default store;
