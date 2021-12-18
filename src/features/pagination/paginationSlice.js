import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: { currentPage: 1 },
  reducers: {
    goNextPage: (state, action) => {
      state.currentPage += 1;
    },
  },
});

export const reducer = (state) => state.reducers;

export default paginationSlice.reducer;
