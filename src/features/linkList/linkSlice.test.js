import { v4 as uuidv4 } from "uuid";

import reducer, {
  addLink,
  upvoteLink,
  downVoteLink,
  removeLink,
  sortByChoice,
} from "./linkSlice";
jest.mock("uuid", () => ({ v4: () => "00000000-0000-0000-0000-000000000000" }));
test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    links: [],
    sortOption: "createdDate",
  });
});

test("should add a new link into the state with addLink action", () => {
  const previousState = { links: [], sortOption: "createdDate" };

  expect(
    reducer(
      previousState,
      addLink({ title: "Reddit", url: "https://www.reddit.com" })
    )
  ).toEqual({
    links: [
      {
        id: uuidv4(),
        points: 0,
        title: "Reddit",
        url: "https://www.reddit.com",
        createdDate: new Date(),
      },
    ],
    sortOption: "createdDate",
  });
});
test("should upvote a link with its specified id as action payload", () => {
  const previousState = {
    links: [
      {
        id: "8d18094f-1f04-4775-b9e4-6785cc9828a1",
        points: 2,
        title: "a",
        url: "b",
        createdDate: "2021-12-20T10:47:09.698Z",
        updatedDate: "2021-12-20T11:17:05.542Z",
      },
      {
        id: "713ad225-8cc2-41b6-afb6-0b1bb837587a",
        points: 9,
        title: "c",
        url: "d",
        createdDate: "2021-12-20T10:47:15.854Z",
        updatedDate: "2021-12-20T14:51:17.770Z",
      },
    ],
    sortOption: "createdDate",
  };

  expect(
    reducer(previousState, upvoteLink("8d18094f-1f04-4775-b9e4-6785cc9828a1"))
  ).toEqual({
    links: [
      {
        id: "8d18094f-1f04-4775-b9e4-6785cc9828a1",
        points: 3,
        title: "a",
        url: "b",
        createdDate: "2021-12-20T10:47:09.698Z",
        updatedDate: new Date(),
      },
      {
        id: "713ad225-8cc2-41b6-afb6-0b1bb837587a",
        points: 9,
        title: "c",
        url: "d",
        createdDate: "2021-12-20T10:47:15.854Z",
        updatedDate: "2021-12-20T14:51:17.770Z",
      },
    ],
    sortOption: "createdDate",
  });
});
test("should downvote a link with its specified id as action payload", () => {
  const previousState = {
    links: [
      {
        id: "8d18094f-1f04-4775-b9e4-6785cc9828a1",
        points: 2,
        title: "a",
        url: "b",
        createdDate: "2021-12-20T10:47:09.698Z",
        updatedDate: "2021-12-20T11:17:05.542Z",
      },
      {
        id: "713ad225-8cc2-41b6-afb6-0b1bb837587a",
        points: 9,
        title: "c",
        url: "d",
        createdDate: "2021-12-20T10:47:15.854Z",
        updatedDate: "2021-12-20T14:51:17.770Z",
      },
    ],
    sortOption: "createdDate",
  };

  expect(
    reducer(previousState, downVoteLink("8d18094f-1f04-4775-b9e4-6785cc9828a1"))
  ).toEqual({
    links: [
      {
        id: "8d18094f-1f04-4775-b9e4-6785cc9828a1",
        points: 1,
        title: "a",
        url: "b",
        createdDate: "2021-12-20T10:47:09.698Z",
        updatedDate: new Date(),
      },
      {
        id: "713ad225-8cc2-41b6-afb6-0b1bb837587a",
        points: 9,
        title: "c",
        url: "d",
        createdDate: "2021-12-20T10:47:15.854Z",
        updatedDate: "2021-12-20T14:51:17.770Z",
      },
    ],
    sortOption: "createdDate",
  });
});
test("should remove a link with its specified id as action payload", () => {
  const previousState = {
    links: [
      {
        id: "8d18094f-1f04-4775-b9e4-6785cc9828a1",
        points: 2,
        title: "a",
        url: "b",
        createdDate: "2021-12-20T10:47:09.698Z",
        updatedDate: "2021-12-20T11:17:05.542Z",
      },
      {
        id: "713ad225-8cc2-41b6-afb6-0b1bb837587a",
        points: 9,
        title: "c",
        url: "d",
        createdDate: "2021-12-20T10:47:15.854Z",
        updatedDate: "2021-12-20T14:51:17.770Z",
      },
    ],
    sortOption: "createdDate",
  };

  expect(
    reducer(previousState, removeLink("8d18094f-1f04-4775-b9e4-6785cc9828a1"))
  ).toEqual({
    links: [
      {
        id: "713ad225-8cc2-41b6-afb6-0b1bb837587a",
        points: 9,
        title: "c",
        url: "d",
        createdDate: "2021-12-20T10:47:15.854Z",
        updatedDate: "2021-12-20T14:51:17.770Z",
      },
    ],
    sortOption: "createdDate",
  });
});
test("should alter the sort option by given option that\\'s coming from action\\'s payload", () => {
  const previousState = {
    links: [
      {
        id: "8d18094f-1f04-4775-b9e4-6785cc9828a1",
        points: 2,
        title: "a",
        url: "b",
        createdDate: "2021-12-20T10:47:09.698Z",
        updatedDate: "2021-12-20T11:17:05.542Z",
      },
    ],
    sortOption: "createdDate",
  };
  expect(reducer(previousState, sortByChoice("mostVoted"))).toEqual({
    links: [
      {
        id: "8d18094f-1f04-4775-b9e4-6785cc9828a1",
        points: 2,
        title: "a",
        url: "b",
        createdDate: "2021-12-20T10:47:09.698Z",
        updatedDate: "2021-12-20T11:17:05.542Z",
      },
    ],
    sortOption: "mostVoted",
  });
});
