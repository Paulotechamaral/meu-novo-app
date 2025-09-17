import {render, screen} from '@testing-library/react';

test('renderiza o texto padrão', () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
});