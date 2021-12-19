import { configureStore } from "@reduxjs/toolkit";

import linksReducer from "../features/linkList/linkSlice";
import paginationReducer from "../features/pagination/paginationSlice";
import { loadState } from "./localStorage";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    linkList: linksReducer,
    pagination: paginationReducer,
  },
  preloadedState,
});
