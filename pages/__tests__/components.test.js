// import { render } from '@testing-library/react';
// import Header from '@/components/Header';

// describe('MyComponent', () => {
//   test('renders correctly', () => {
//     const { getByTestId } = render(<Header />);
//     const component = getByTestId('header');
//     expect(component).toBeInTheDocument();
//   });
// });

import { sum } from "../math.utils";

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

// import { render, screen } from "@testing-library/react";
// import { RecoilRoot, useRecoilValue } from "recoil";
// import { modalState } from "../../atoms/modalAtom";
// import Modal from "../../components/Modal";

// describe("Modal", () => {
//   it("renders the correct content when modal is open", () => {
//     // Set up initial state of the modalState atom
//     const initialState = { key: modalState.key, value: true };

//     // Render the component within a RecoilRoot provider and get the modal state
//     const { getByText } = render(
//       <RecoilRoot initializeState={({ set }) => set(modalState, initialState)}>
//         <Modal />
//       </RecoilRoot>
//     );
//     const modalText = getByText(/modal content/i);

//     // Assert that the modal content is rendered when the modal is open
//     expect(modalText).toBeInTheDocument();
//   });

//   it("renders the correct content when modal is closed", () => {
//     // Set up initial state of the modalState atom
//     const initialState = { key: modalState.key, value: false };

//     // Render the component within a RecoilRoot provider and get the modal state
//     const { getByText, queryByText } = render(
//       <RecoilRoot initializeState={({ set }) => set(modalState, initialState)}>
//         <Modal />
//       </RecoilRoot>
//     );
//     const modalText = queryByText(/modal content/i);

//     // Assert that the modal content is not rendered when the modal is closed
//     expect(modalText).toBeNull();

//     // Click a button to open the modal
//     const openButton = getByText(/open modal/i);
//     openButton.click();

//     // Assert that the modal content is rendered after the button is clicked
//     const newModalText = getByText(/modal content/i);
//     expect(newModalText).toBeInTheDocument();
//   });
// });

// import React from "react";
// import { render } from "@testing-library/react";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   onSnapshot,
//   orderBy,
//   query,
// } from "firebase/firestore";
// import Posts from "../../components/Posts";

// // Mock Firestore database object
// const db = {
//   collection: jest.fn(() => ({
//     doc: jest.fn(() => ({
//       get: jest.fn(() => Promise.resolve({ data: () => ({}) })),
//     })),
//     add: jest.fn(() => Promise.resolve()),
//     get: jest.fn(() => Promise.resolve({ docs: [] })),
//     where: jest.fn(() => ({
//       get: jest.fn(() => Promise.resolve({ docs: [] })),
//     })),
//   })),
// };

// describe("Posts", () => {
//   it("renders a list of posts", async () => {
//     // Mock snapshot listener
//     const mockOnSnapshot = jest.fn((query, callback) => {
//       const mockSnapshot = {
//         docs: [
//           doc(db, "posts/1", {
//             username: "Alice",
//             profileImg: "alice.jpg",
//             image: "post.jpg",
//             review: "Great food!",
//             rating: 4,
//             restaurant: "Bistro",
//           }),
//           doc(db, "posts/2", {
//             username: "Bob",
//             profileImg: "bob.jpg",
//             image: "post.jpg",
//             review: "Amazing service!",
//             rating: 5,
//             restaurant: "Cafe",
//           }),
//         ],
//       };
//       callback(mockSnapshot);
//       return jest.fn();
//     });

//     jest.spyOn(React, "useEffect").mockImplementation((callback, deps) => {
//       if (deps[0] === db) {
//         callback();
//         return mockOnSnapshot;
//       }
//     });

//     const { getByText, getByAltText } = render(<Posts />);

//     // Wait for posts to render
//     await Promise.resolve();

//     // Assert that post data is rendered correctly
//     expect(getByText("Alice")).toBeInTheDocument();
//     expect(getByAltText("Alice")).toHaveAttribute("src", "alice.jpg");
//     expect(getByText("Great food!")).toBeInTheDocument();
//     expect(getByText("4")).toBeInTheDocument();
//     expect(getByText("Bistro")).toBeInTheDocument();

//     expect(getByText("Bob")).toBeInTheDocument();
//     expect(getByAltText("Bob")).toHaveAttribute("src", "bob.jpg");
//     expect(getByText("Amazing service!")).toBeInTheDocument();
//     expect(getByText("5")).toBeInTheDocument();
//     expect(getByText("Cafe")).toBeInTheDocument();
//   });
// });

// import React from "react";
// import { render, screen } from "@testing-library/react";
// // import "@#testing-library/jest-dom/";
// import Dashboard from "@/pages/dashboard";

// describe("dashboard", () => {
//   it("renders correctly", () => {
//     render(<Dashboard />);

//     const header = screen.getByRole("heading");
//     const headerText = "Hello World";

//     // expect(header).toHaveTextContent(headerText);
//     expect(header.textContent).toBe(headerText);
//   });
// });
