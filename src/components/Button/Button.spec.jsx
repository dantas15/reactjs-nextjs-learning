import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe("<Button />", () => {
  it("should render the button with the text", () => {
    render(<Button text="Load More" />);

    expect.assertions(1);

    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it("should be disabled when disabled is true", () => {
    const fn = jest.fn();
    render(<Button text="Load More" onClick={fn} disabled={true} />);

    const button = screen.getByRole("button", { name: /load more/i });

    userEvent.click(button);

    expect(button).toBeDisabled();
  });
  it("should be enabled when disabled is false", () => {
    const fn = jest.fn();
    render(<Button text="Load More" onClick={fn} disabled={false} />);

    const button = screen.getByRole("button", { name: /load more/i });

    userEvent.click(button);

    expect(button).not.toBeDisabled();
    //expect(button).toBeEnabled()
  });
});
