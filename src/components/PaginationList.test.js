import { render, fireEvent, screen } from "../test-utils";
import PaginationList from "./PaginationList";
import {
  goPrevPage,
  goNextPage,
  goClickedPage,
} from "../features/pagination/paginationSlice";
test("when the current paginated list is second one, and there is 6 links, next button needs to be disabled", () => {
  render(
    <PaginationList
      listOfPages={[
        {
          id: "9abbc4a7-242e-45d3-9948-e21ebeb768b6",
          points: 0,
          title: "a",
          url: "s",
          createdDate: "2021-12-22T12:22:37.099Z",
        },
        {
          id: "42ae1c87-ae2a-4ee0-98dd-042e6f7596c6",
          points: 0,
          title: "asd",
          url: "asd",
          createdDate: "2021-12-22T12:33:13.605Z",
        },
        {
          id: "e2ef6d61-cebe-4ec0-b821-c3d5de37fde9",
          points: 0,
          title: "b",
          url: "t",
          createdDate: "2021-12-22T13:04:28.684Z",
        },
        {
          id: "ba8b96a4-57a6-4181-954a-d1a014ee608f",
          points: 0,
          title: "f",
          url: "q",
          createdDate: "2021-12-22T13:04:31.648Z",
        },
        {
          id: "54cc85e3-39c7-4b7c-8b10-451ac5b4d6b6",
          points: 0,
          title: "reddit",
          url: "https://www.reddit.com",
          createdDate: "2021-12-22T13:04:41.131Z",
        },
        {
          id: "e746602e-fe34-44c3-9511-c6babb64a903",
          points: 0,
          title: "GitHub",
          url: "https://www.github.com/thsnyzkn",
          createdDate: "2021-12-22T13:04:55.056Z",
        },
      ]}
      currentPage={2}
      goPrevPage={goPrevPage}
      goClickedPage={goClickedPage}
      goNextPage={goNextPage}
    />
  );
  fireEvent.click(screen.getByLabelText(/Next paginated List/));
  expect(
    screen.getByLabelText(/Next paginated List/).closest("button")
  ).toBeDisabled();
});
