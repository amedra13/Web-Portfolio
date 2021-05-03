import React from 'react';
import ProjectCard from '../components/ProjectCard';
import TwitterAccount from '../images/twitterAccount.jpg';
import SpotifyAccount from '../images/spotifyAccount.png';
import Nobu from '../images/nobuFood.jpg';
import ReactLogo from '../images/reactLogo.png';
import NodeLogo from '../images/nodeLogo.png';
import MongoDBLogo from '../images/mongoDBLogo.png';
import ReduxLogo from '../images/reduxLogo.png';
import SpotifyLogo from '../images/spotifyLogo.png';
import MaterialUILogo from '../images/materialuiLogo.png';

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
				description="This a social media web applcation that can function similar to the original inspiration. With this Full-Stack applicaiton, a user is able to create an account in which they are able to interact with other uses through messages, comments, posts"
				tools={[ReactLogo, NodeLogo, MongoDBLogo]}
				projectLink="/work/twitter"
			/>
			<ProjectCard
				image={SpotifyAccount}
				title="Spotify Clone"
				delay="1.7s"
				description="With the use of the offical Spotify Api, a user is able to import the playlists from their original Spotfy account and play all their favorite songs. All users are able to search, play,favorite songs based on artists name, genre, or playlist "
				projectLink="/work/spotify"
				tools={[ReactLogo, ReduxLogo, SpotifyLogo]}
			/>
			<ProjectCard
				image={Nobu}
				title="Nobu Website"
				delay="1.9s"
				projectLink="/work/nobu"
				description="One of the projects I first created. With my previous place of employment as inspiration for this project, I designed it as close as possible to the original compnay site. Users are able to browse the services the company offers and make a mock reservation."
				tools={[ReactLogo, ReduxLogo, MaterialUILogo]}
			/>
		</div>
	);
};

export default Work;
