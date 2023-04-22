// Create a test for add function in pages/functions.js
import { sum, Dashboard } from "../math.utils";
import { render, screen } from "@testing-library/react";

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("dashboard", () => {
  test("renders correctly", () => {
    render(<Dashboard />);

    const header = screen.getByRole("heading");
    const headerText = "Hello World";

    // expect(header).toHaveTextContent(headerText);
    expect(header.textContent).toBe(headerText);
  });
});
