// Create a test for add function in pages/functions.js
import { sum, Dashboard, Header, getServerSideProps } from '../math.utils'
import { render, screen } from '@testing-library/react'
// import { getProviders } from "next-auth/react";
// import { Header } from "../../components/Header";

// Add numbers test
describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})

// Testing to see if the dashboard is rendered
describe('dashboard', () => {
  test('Dashboard is rendered', () => {
    render(<Dashboard />)

    const header = screen.getByRole('heading')
    const headerText = 'Hello World'

    // expect(header).toHaveTextContent(headerText);
    expect(header.textContent).toBe(headerText)
  })
})

// Checks if the Header title is rendered
describe('Header', () => {
  test('Header is rendered', () => {
    render(<Header />)

    const header = screen.getByTestId('header')
    const headerText = 'FoodieBites'

    // expect(header).toHaveTextContent(headerText);
    expect(header.textContent).toBe(headerText)
  })
})

// // Testing the sign in
// jest.mock("next-auth/react", () => ({
//   getProviders: jest.fn().mockResolvedValue({
//     google: {
//       id: "google",
//       name: "Google",
//       type: "oauth",
//       signinUrl: "https://accounts.google.com/o/oauth2/auth",
//       callbackUrl: "http://localhost:3000/api/auth/callback/google",
//     },
//     facebook: {
//       id: "facebook",
//       name: "Facebook",
//       type: "oauth",
//       signinUrl: "https://www.facebook.com/v9.0/dialog/oauth",
//       callbackUrl: "http://localhost:3000/api/auth/callback/facebook",
//     },
//   }),
// }));

// // Tests the get server side props function in signin.js
// describe("getServerSideProps", () => {
//   it("should return the providers data as props", async () => {
//     const { props } = await getServerSideProps();

//     expect(getProviders).toHaveBeenCalled();
//     expect(props).toEqual({
//       providers: {
//         google: {
//           id: "google",
//           name: "Google",
//           type: "oauth",
//           signinUrl: "https://accounts.google.com/o/oauth2/auth",
//           callbackUrl: "http://localhost:3000/api/auth/callback/google",
//         },
//         facebook: {
//           id: "facebook",
//           name: "Facebook",
//           type: "oauth",
//           signinUrl: "https://www.facebook.com/v9.0/dialog/oauth",
//           callbackUrl: "http://localhost:3000/api/auth/callback/facebook",
//         },
//       },
//     });
//   });
// });
