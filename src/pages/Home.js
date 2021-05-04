import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	window.scrollTo(0, 0);
	return (
		<div className="home">
			<div className="home__header">
				<h1>Welcome to my portfolio!</h1>
				<h1>
					My name is <span>Andres</span>
				</h1>
				<p>Front End Developer</p>
			</div>
			<div className="home__contact">
				<Link to="contact">Reach out to me!</Link>
			</div>
		</div>
	);
};

export default Home;
