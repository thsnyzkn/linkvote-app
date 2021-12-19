import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: { currentPage: 1 },
  reducers: {
    goPrevPage: (state, action) => {
      state.currentPage -= 1;
    },
    goNextPage: (state, action) => {
      state.currentPage += 1;
    },
    goClickedPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { goPrevPage, goNextPage, goClickedPage } =
  paginationSlice.actions;

export const selectPages = (state) => state.pagination;

export default paginationSlice.reducer;
