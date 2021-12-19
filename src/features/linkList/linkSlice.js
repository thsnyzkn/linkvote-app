import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const linkSlice = createSlice({
  name: "linkList",
  initialState: { links: [], sortOption: "createdDate" },
  reducers: {
    addLink: (state, action) => {
      const newLink = {
        id: uuidv4(),
        points: 0,
        title: action.payload.title,
        url: action.payload.url,
        createdDate: new Date(),
      };
      state = state.links.push(newLink);
    },
    removeLink: (state, action) => {
      const indexToBeRemoved = state.links.findIndex(
        ({ id }) => id === action.payload
      );
      state.links.splice(indexToBeRemoved, 1);
    },
    downVoteLink: (state, action) => {
      const linkToBeDownvoted = state.links.find(
        (link) => link.id === action.payload
      );
      if (linkToBeDownvoted) {
        linkToBeDownvoted.points -= 1;
        linkToBeDownvoted.updatedDate = new Date();
      }
    },
    upvoteLink: (state, action) => {
      const linkToBeUpvoted = state.links.find(
        (link) => link.id === action.payload
      );
      if (linkToBeUpvoted) {
        linkToBeUpvoted.points += 1;
        linkToBeUpvoted.updatedDate = new Date();
      }
    },
    sortByChoice: (state, action) => {
      state.sortOption = action.payload;
    },
  },
});

export const { addLink, upvoteLink, downVoteLink, removeLink, sortByChoice } =
  linkSlice.actions;

export const selectLinks = (state) => state.linkList;
export const initialState = (state) => state.initialState;
export const reducer = (state) => state.reducers;

export default linkSlice.reducer;
