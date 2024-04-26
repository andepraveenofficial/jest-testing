# Testing
1. Manual Testing
2. Developer Testing (code testing)

### Developer Testing 
1. Unit Testing
2. Integration Testing 
3. End to End Testing - e2e testing

##### Unit Testing
Test specific part of the React application, not whole application.

##### Integration Testing
Test the Integration of multiple components. 

##### End to End Testing
test the all the flows.

### react testing library 
react testing library uses __jest__.

##### Setting up Testing in our application 
1. Install React Testing Library 
2. Install jest
3. Install Babel dependencies 
4. Configure Babel
5. Configure parcel config file to disable default babel transpilation. 
6. jest configuration - `npx jest --init`
7. install jsdom library
8. install @babel/preset-react - to make JSX work in test cases
9. Include @babel/preset-react inside my babel
10. Include @testing-library/jest-dom

##### run test cases
npm run test 

# create testcase
1. folder => `__tests__` => All the files inside this folder are test files.
2. file  
* `Component.test.js`
* `Component.test.ts`
* `Component.spec.js`
* `Component.spec.ts`


##### Unit testcase Example 
```Javascript 
// test(descriptioon, callback)
test('Sum function should calculate the sum of two numbers', () => {
	const result = Sum(3, 4);

	// Assertion
	expect(result).toBe(7);
});
```

##### Writing testcase steps
1. render
2. Querying
3. Assertion


##### Write Group testcase

```Javascript 
describe('Contact Us Page Test Case', () => {
	test('should load contact us component', () => {
		render(<Contact />);

		const heading = screen.getByRole('heading');

		// Assertion
		expect(heading).toBeInTheDocument();
	});
 
    // it or test 
	test('should load contact us component', () => {
		render(<Contact />);

		const button = screen.getByRole('button');

		// Assertion
		expect(button).toBeInTheDocument();
	});

	
});
```
