import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Header from '@/components/Header';
import homePage from '@/pages/index'
import profilePage from '@/pages/profilePage'

it('renders homepage unchanged', () => {
  const { container } = render(<homePage />)
  expect(container).toMatchSnapshot()
})