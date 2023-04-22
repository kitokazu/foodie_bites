// Create a test for add function in pages/functions.js
import { sum, Dashboard, Header } from "../math.utils";
import { render, screen } from "@testing-library/react";
// import { Header } from "../../components/Header";

// Add numbers test
describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

// Testing to see if the dashboard is rendered
describe("dashboard", () => {
  test("Dashboard is rendered", () => {
    render(<Dashboard />);

    const header = screen.getByRole("heading");
    const headerText = "Hello World";

    // expect(header).toHaveTextContent(headerText);
    expect(header.textContent).toBe(headerText);
  });
});

// Checks if the Header title is rendered
describe("Header", () => {
  test("Header is rendered", () => {
    render(<Header />);

    const header = screen.getByTestId("header");
    const headerText = "FoodieBites";

    // expect(header).toHaveTextContent(headerText);
    expect(header.textContent).toBe(headerText);
  });
});
