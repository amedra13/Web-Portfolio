import React from 'react';
import ProjectCard from '../components/ProjectCard';
import TwitterAccount from '../images/twitterAccount.jpg';
import SpotifyAccount from '../images/spotifyAccount.png';
import Nobu from '../images/nobuFood.jpg';

const Work = () => {
	return (
		<div className="work">
			<div className="work__header">
				<h1>Check out some of my projects</h1>
			</div>
			<ProjectCard
				image={TwitterAccount}
				title="Twitter Clone"
				delay="1.5s"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
			/>
			<ProjectCard
				image={SpotifyAccount}
				title="Spotify Clone"
				delay="1.7s"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
			/>
			<ProjectCard
				image={Nobu}
				title="Nobu Website"
				delay="1.9s"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
			/>
		</div>
	);
};

export default Work;
