import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	window.scrollTo(0, 0);
	return (
		<div className="home">
			<div className="home__header">
				<h2>Welcome to my portfolio!</h2>
				<h2>My name is</h2>
				<h1>Andres,</h1>
				<p>a Frontend Developer</p>
			</div>
			<div className="home__contact">
				<Link to="contact">Reach out to me!</Link>
			</div>
		</div>
	);
};

export default Home;
