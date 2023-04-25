import { render, fireEvent } from "@testing-library/react";
import { Button } from "./button";

describe("Button component", () => {
  it("renders the button correctly", () => {
    const { getByText } = render(<Button title="Submit" type="button" />);
    expect(getByText("Submit")).toBeTruthy();
  });

  it("calls onClick function when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button title="Submit" type="button" onClick={onClickMock} />
    );
    fireEvent.click(getByText("Submit"));
    expect(onClickMock).toHaveBeenCalled();
  });
});
