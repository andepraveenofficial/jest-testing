/* -----> Third Party Packages <----- */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

/* -----> External Components <----- */
import Home from '../Pages/Home';
import FirstPage from '../Pages/FirstPage';

/* -----> test(description, callback) <----- */

// Single test case
test('should load Home Page', () => {
	// render
	render(<Home />);

	// Querying
	const Heading = screen.getByText('Home');

	// Assertion
	expect(Heading).toBeInTheDocument();
});

describe('FirstPage Test Cases', () => {
	test('should load FirstPage', () => {
		// render
		render(<FirstPage />);

		// Querying
		const Heading = screen.getByText('FirstPage');

		// Assertion
		expect(Heading).toBeInTheDocument();
	});

	test('should load FirstPage and Check myButton', () => {
		// render
		render(<FirstPage />);

		// Querying
		const button = screen.getByRole('button');

		// Assertion
		expect(button).toBeInTheDocument();
	});
});
