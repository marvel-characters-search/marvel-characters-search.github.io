import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';


// sidestep https://github.com/ant-design/ant-design/issues/24906
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Show title "Container"', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Container/i);
  expect(title).toBeInTheDocument();
});

