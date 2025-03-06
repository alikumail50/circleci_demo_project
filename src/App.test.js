import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Ali Kumail\'s greeting', () => {
  render(<App />);
  const greetingElement = screen.getByText(/Hello, I'm Ali Kumail!/i);
  expect(greetingElement).toBeInTheDocument();
});
