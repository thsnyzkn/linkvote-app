import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent, waitFor } from "../test-utils";
import LinkAdd from "./LinkAdd.page";

test("can render form elements correctly,add an element and show toast message", async () => {
  render(
    <BrowserRouter>
      <LinkAdd />
    </BrowserRouter>
  );
  expect(screen.getByText("Link Name:")).toBeInTheDocument();
  expect(screen.getByText("Link URL:")).toBeInTheDocument();
  const addButton = screen.getByText("ADD");
  expect(addButton).toBeInTheDocument();
  const titleInput = screen.getByLabelText(/Link Name/i);
  fireEvent.change(titleInput, { target: { value: "Reddit" } });
  const urlInput = screen.getByLabelText(/Link URL/i);
  fireEvent.change(urlInput, { target: { value: "https://www.reddit.com" } });
  fireEvent.click(addButton);
  const successToast = screen.getByText("REDDIT added.");
  expect(successToast).toBeInTheDocument();
});
