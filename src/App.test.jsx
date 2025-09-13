import {render, screen} from '@testing-library/react';
import App from './App';
import { expect } from 'vitest';

test('renderiza o texto padrão', () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
});