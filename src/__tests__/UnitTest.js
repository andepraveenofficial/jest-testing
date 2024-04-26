import { sum } from '../Helpers/sum';
import { multiplication } from '../Helpers/multiplication';

/* -----> testcases <----- */ // test(descriptioon, callback)

// Single test case
test('sum function should calculate the sum of two numbers', () => {
	const result = sum(3, 4);

	// Assertion
	expect(result).toBe(7);
});

test('multiplication function should calculate the multiplication of two numbers', () => {
	const result = multiplication(3, 4);

	// Assertion
	expect(result).toBe(12);
});

// Multiple Test cases
describe('Helper Functions Testing', () => {
	test('sum function should calculate the sum of two numbers', () => {
		const result = sum(3, 4);

		// Assertion
		expect(result).toBe(7);
	});

	test('multiplication function should calculate the multiplication of two numbers', () => {
		const result = multiplication(3, 4);

		// Assertion
		expect(result).toBe(12);
	});
});
