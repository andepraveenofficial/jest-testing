/* -----> Third Party Packages <----- */
import React, { useState } from 'react';

/* -----> Component <----- */
const FirstPage = () => {
	console.log('   First Page');

	// Local State
	const [isLogin, setIsLogin] = useState(true);

	// Return JSX
	return (
		<div className="page">
			<h1>FirstPage</h1>
			<button
				type="button"
				onClick={() => {
					setIsLogin((prevState) => !prevState);
				}}
			>
				{!isLogin ? 'Logout' : 'Login'}
			</button>
		</div>
	);
};

/* -----> Export <----- */
export default FirstPage;
