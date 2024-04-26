/* -----> Third Party Packages <----- */
import React from 'react';
import { Link } from 'react-router-dom';

/* -----> Styles <----- */
import './index.css';

/* -----> Component <----- */
const Header = () => {
	console.log('   Header Layout');
	// Return JSX
	return (
		<div className="header-layout">
			{/* <a href="/first-page">FirstPage</a> */}
			{/* If we use <a> tag it refreshes the webpage*/}
			<Link to="/first-page">FirstPage</Link>
			<Link to="/second-page">SecondPage</Link>
			<Link to="/third-page">ThirdPage</Link>
		</div>
	);
};

/* -----> Export <----- */
export default Header;
