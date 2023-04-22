import React from "react";
import { render, screen } from "@testing-library/react";
// import "@#testing-library/jest-dom/";
import Dashboard from "../dashboard";

describe("dashboard", () => {
  it("renders correctly", () => {
    render(<Dashboard />);

    const header = screen.getByRole("heading");
    const headerText = "Hello World";

    // expect(header).toHaveTextContent(headerText);
    expect(header.textContent).toBe(headerText);
  });
});
