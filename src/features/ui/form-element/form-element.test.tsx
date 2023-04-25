import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormElement } from "./form-element";

describe("FormElement component", () => {
  const mockProps = {
    id: "test-input",
    title: "Test Input",
    type: "text",
  };

  test("renders component with correct props", () => {
    render(<FormElement {...mockProps} />);
    const inputElement = screen.getByLabelText(mockProps.title);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", mockProps.type);
    expect(inputElement).toHaveAttribute("id", mockProps.id);
  });

  test("displays error message when error prop is passed", () => {
    const errorMessage = "This field is required";
    render(<FormElement {...mockProps} error={errorMessage} />);
    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  test("calls forwarded ref function when input is clicked", () => {
    const refFunction = jest.fn();
    render(<FormElement {...mockProps} ref={refFunction} />);
    const inputElement = screen.getByLabelText(mockProps.title);
    userEvent.click(inputElement);
    expect(refFunction).toHaveBeenCalled();
  });
});
