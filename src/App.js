/* -----> Third Party Packages <----- */
import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

/* -----> External Components <----- */
import Header from './Layouts/Header';
import Home from './Pages/Home';
import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import ThirdPage from './Pages/ThirdPage';
import NotFound from './Pages/NotFound';

/* -----> Styles <----- */
import './App.css';

/* -----> Component <----- */
const App = () => {
	console.log('App');

	// Return JSX
	return (
		<div>
			<Header />
			<Outlet /> {/* Outlet is replaced by the Child Component*/}
		</div>
	);
};

// Routing
const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'first-page',
				element: <FirstPage />,
			},
			{
				path: '/second-page',
				element: <SecondPage />,
			},
			{
				path: '/third-page',
				element: <ThirdPage />,
			},
		],
		errorElement: <NotFound />,
	},
]);

const AppLayout = () => {
	console.log('AppLayout');
	return <RouterProvider router={appRouter} />;
};

/* -----> Default Export <----- */
export default AppLayout;
