import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { Counter } from "./Counter";
import { CounterState } from "./counterSlice";

describe("Given a counter component", () => {
  const initialState: CounterState = {
    value: 3,
    status: "idle",
  };
  test("When the add async button is clicked, then it should return", async () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const button = screen.getByText("Add Async");
    const text = screen.getByTestId("number");
    userEvent.click(button);
    await waitFor(() => {
      expect(text).toHaveTextContent("4");
    });
  });
});
