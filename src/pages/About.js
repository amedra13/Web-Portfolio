import React from 'react';
import ProfilePhoto from '../images/personIcon.jpg';
import Basketball from '../images/recBasketballIcon.png';
import SportsCards from '../images/sportscardsIcon.png';
import Videogames from '../images/videogameIcon.png';
import VirtualReality from '../images/vrIcon.png';

const About = () => {
	return (
		<div className="about">
			<div className="about__header">
				<h1>A little bit about Myself</h1>
			</div>
			<div className="about__container">
				<h1>Who am I ?</h1>
				<p>
					I am a front-end developer passionate with React.js! I am a problem
					solver, and I love being able to create responsive effects.
				</p>
				<p>
					I am a proud hispanic currently residing in the Bay Area. Aside from
					my days in coding, I also love sports, travelling, outdoor activities,
					and my family.
				</p>
				<p>
					Ever since I’ve entered the world of coding, I’ve been sucked in
					since, and I hope to find the opportunity to grow and learn more as a
					developer.
				</p>
			</div>
			<div className="about__me">
				<img src={ProfilePhoto} alt="andres medrano" />
				<div className="about__interests">
					<p>
						In my free time, I like to venture out into various hobbies that
						help me pass the time. Anything from sports cards collecting and
						video games, to seeking new hikings paths to try with the partner{' '}
					</p>
					<div className="interests">
						<div className="icon__container">
							<img className="icon" src={Basketball} alt="" />
						</div>
						<div className="icon__container">
							<img className="icon" src={SportsCards} alt="" />
						</div>
						<div className="icon__container">
							<img className="icon" src={Videogames} alt="" />
						</div>
						<div className="icon__container">
							<img className="icon" src={VirtualReality} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
