import { render, screen } from '@testing-library/react';
import {Counter} from './Counter';
import userEvent from '@testing-library/user-event';

describe("Counter", () => {
  it("increments the counter", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    await user.click(screen.getByRole("button", { name: "Hækka" }));
    expect(screen.getByText("1")).toBeInTheDocument();
  });
  it("decrements the counter", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    await user.click(screen.getByRole("button", { name: "Minnka" }));
    expect(screen.getByText("-1")).toBeInTheDocument();
  });
  it("resets the counter", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    await user.click(screen.getByRole("button", { name: "Hækka" }));
    await user.click(screen.getByRole("button", { name: "Hækka" }));
    await user.click(screen.getByRole("button", { name: "Endurstilla" }));
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});