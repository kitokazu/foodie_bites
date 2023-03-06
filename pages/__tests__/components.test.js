// import { render } from '@testing-library/react';
// import Header from '@/components/Header';

// describe('MyComponent', () => {
//   test('renders correctly', () => {
//     const { getByTestId } = render(<Header />);
//     const component = getByTestId('header');
//     expect(component).toBeInTheDocument();
//   });
// });


import { sum } from '../math.utils';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});