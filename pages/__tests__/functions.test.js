import React from 'react';
import { sum } from '../math.utils';

// Adding numbers test function
describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

// // Render the Header page
// describe('Header', () => {
//   test('renders Header component', () => {
//     render(<HelloWorld />);

//     const header = screen.getByRole('header');
//     // const headerText = "Hello World!";

//     expect(header).toBeInTheDocument()

//   })
// })

// // Testing getServerSideProps function
// describe('getServerSideProps', () => {
//   test('returns providers as props', async () => {
//     const mockProviders = ['mock-provider-1', 'mock-provider-2'];
//     jest.mock('./next-auth/react"', () => ({
//       getProviders: jest.fn().mockResolvedValue(mockProviders),
//     }));
//     const context = {};
//     const result = await getServerSideProps(context);
//     expect(result).toEqual({
//       props: {
//         providers: mockProviders,
//       },
//     });
//   });
// });

// describe('helloWorld', () => {
//   it('renders with the correct name', () => {
//     const name = 'World';
//     const { getByText } = render(<helloWorld name={name} />);
//     const helloMessage = getByText(`Hello, ${name}!`);
//     console.log(helloMessage);
//     expect(helloMessage).toBeInTheDocument();
//   });
// });



// // Testing getServerSideProps function
// describe('getServerSideProps', () => {
//   it('returns providers as props', async () => {
//     const mockProviders = ['mock-provider-1', 'mock-provider-2'];
//     jest.mock('./path-to-getProviders', () => ({
//       getProviders: jest.fn().mockResolvedValue(mockProviders),
//     }));
//     const context = { req: { headers: { cookie: '' } } };
//     const session = { user: { email: 'test@test.com' } };
//     jest.spyOn(global, 'fetch').mockResolvedValueOnce({
//       json: jest.fn().mockResolvedValueOnce(session),
//     });
//     const result = await getServerSideProps(context);
//     expect(result).toEqual({
//       props: {
//         providers: mockProviders,
//       },
//     });
//   });
// });