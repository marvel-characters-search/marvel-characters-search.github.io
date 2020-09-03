import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

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

