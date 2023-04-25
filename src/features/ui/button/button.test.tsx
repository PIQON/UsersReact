import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button component", () => {
  it("Renders the button correctly", () => {
    render(<Button title="Add User" type="submit" />);
    const buttonElement = screen.getByRole("button", { name: "Add User" });
    expect(buttonElement).toBeInTheDocument();
  });

  it("Correctly call onClick when appear", () => {
    const mockedClick = jest.fn();
    render(<Button title="Add User" type="submit" onClick={mockedClick} />);
    const buttonElement = screen.getByRole("button", { name: "Add User" });
    fireEvent.click(buttonElement);
    expect(mockedClick).toHaveBeenCalled();
  });
});
