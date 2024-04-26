/* -----> Third Party Packages <----- */
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

/* -----> External Components <----- */
import FirstPage from '../Pages/FirstPage';

// Cleanup after each test
afterEach(cleanup);

it('should load FirstPage Component with a login button', () => {
	render(<FirstPage />);

	// Query
	// const loginButton = screen.getByRole('button');  // 01 way
	// const loginButton = screen.getByText('Login'); // 02 way
	const loginButton = screen.getByRole('button', { name: 'Login' }); // 03 way

	// Assertion
	expect(loginButton).toBeInTheDocument();
});

it('should change Login Button to Logout on click', () => {
	render(<FirstPage />);

	// Query
	const loginButton = screen.getByRole('button', { name: 'Login' });
	fireEvent.click(loginButton);
	const logoutButton = screen.getByRole('button', { name: 'Logout' });

	// Assertion
	expect(logoutButton).toBeInTheDocument();
});
