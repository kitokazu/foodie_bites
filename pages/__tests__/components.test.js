import React from "react";
import { render, screen } from "@testing-library/react";
// import "@#testing-library/jest-dom/";
import { sum, Dashboard } from "../math.utils";

// describe("dashboard", () => {
//   test("renders correctly", () => {
//     render(<Dashboard />);

//     const header = screen.getByRole("heading");
//     const headerText = "Hello World";

//     // expect(header).toHaveTextContent(headerText);
//     expect(header.textContent).toBe(headerText);
//   });
// });

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
