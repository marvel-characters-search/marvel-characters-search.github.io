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

test('Show title', () => {
  let pageTitle = 'Marvel Characters'
  const { getByText } = render(<App />);
  const title = getByText(pageTitle);
  expect(title).toBeInTheDocument();
});