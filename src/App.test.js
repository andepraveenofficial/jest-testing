import { render, screen } from '@testing-library/react';
import App from './App';

test('Render App Text', () => {
	render(<App />);
	const Heading = screen.getByText(/Home/);
	expect(Heading).toBeInTheDocument();
});
