import LinksList from "./LinksList";
import { render, fireEvent, screen, waitFor, within } from "../test-utils";
import {
  downVoteLink,
  upvoteLink,
  removeLink,
} from "../features/linkList/linkSlice";
test("open up respective dialog modal,clicks ok and closes modal", async () => {
  render(
    <LinksList
      sortedList={[
        {
          id: "8d18094f-1f04-4775-b9e4-6785cc9828a1",
          points: 3,
          title: "a",
          url: "b",
          createdDate: "2021-12-20T10:47:09.698Z",
          updatedDate: "2021-12-21T18:46:19.176Z",
        },
        {
          id: "a89108bd-172b-4adb-9704-6038c82483b7",
          points: 2,
          title: "e",
          url: "f",
          createdDate: "2021-12-20T10:47:21.849Z",
          updatedDate: "2021-12-21T18:46:14.469Z",
        },
      ]}
      upvoteLink={upvoteLink}
      downVoteLink={downVoteLink}
      removeLink={removeLink}
    />
  );
  const list = await screen.findByTestId("links-list");
  const { findAllByRole } = within(list);

  let items = await findAllByRole("listitem");
  expect(items).toHaveLength(2);
  fireEvent.mouseOver(items[0]);
  const { findByLabelText } = within(items[0]);
  const deleteButton = await findByLabelText("delete-button");

  fireEvent.click(deleteButton);
  await waitFor(() => {
    expect(screen.getByRole("alertdialog")).toBeInTheDocument();
  });
  const okButton = await screen.findByText(/Ok/i);
  fireEvent.click(okButton);
  await waitFor(() => {
    expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();
  });
});
