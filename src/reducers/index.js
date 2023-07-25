import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";

const reducer = combineReducers({ todos: todoReducer });

export default reducer;
