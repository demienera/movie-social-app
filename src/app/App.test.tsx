import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders app root', () => {
    render(<App />);
    expect(screen.getByTestId('app-root')).toBeInTheDocument();
  });
});
