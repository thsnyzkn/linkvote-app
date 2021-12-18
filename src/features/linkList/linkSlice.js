import { createSlice } from "@reduxjs/toolkit";

export const linkSlice = createSlice({
  name: "linkList",
  initialState: { links: [], sortOption: "createdDate" },
  reducers: {
    addLink: (state, action) => {
      const newLink = {
        id: Math.random() * 10,
        points: 0,
        title: action.payload.title,
        url: action.payload.url,
        createdDate: new Date(),
      };
      state = state.links.push(newLink);
    },
  },
});

export const reducer = (state) => state.reducers;

export default linkSlice.reducer;
