import App from "./App";
import { render, fireEvent, screen, waitFor, within } from "./test-utils";
test("renders learn react link", () => {
  render(<App />);
  const textElement = screen.getByText(/Hello/i);
  expect(textElement).toBeInTheDocument();
});
