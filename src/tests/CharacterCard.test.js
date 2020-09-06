import React from 'react';
import { render } from '@testing-library/react';
import CharacterCard from '../components/CharacterCard/CharacterCard';

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

test('Show name of the character', () => {
  const character = {
    name: 'Thor',
    description: "Thor description",
    thumbnail: {
      path: 'https://imgPath...'
    }
  };

  const { getByText } = render(<CharacterCard character={character} />);
  const name = getByText(character.name);
  expect(name).toBeInTheDocument();
});