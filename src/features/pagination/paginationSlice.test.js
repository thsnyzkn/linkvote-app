import reducer, {
  goPrevPage,
  goNextPage,
  goClickedPage,
} from "./paginationSlice";

test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual({ currentPage: 1 });
});

test("should navigate to next paginated list which means currrentPage number will be increased by 1", () => {
  const previousState = { currentPage: 1 };
  expect(reducer(previousState, goNextPage)).toEqual({ currentPage: 2 });
});
test("should navigate to previous paginated list which means currrentPage number will be decreased by 1", () => {
  const previousState = { currentPage: 1 };
  expect(reducer(previousState, goPrevPage)).toEqual({ currentPage: 0 });
});
test("should navigate to specified paginated list which means currrentPage number will be changed by provided payload", () => {
  const previousState = { currentPage: 1 };
  expect(reducer(previousState, goClickedPage(3))).toEqual({ currentPage: 3 });
});
