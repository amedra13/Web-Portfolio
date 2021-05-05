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
import Grid from '@material-ui/core/Grid';

const Work = () => {
	window.scrollTo(0, 0);
	return (
		<div className="work">
			<Grid container justify="center" spacing={2} className="work__grid">
				<Grid item xs={12} className="work__item">
					<div className="work__header">
						<h1>Check out some of my projects</h1>
					</div>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className="work__item">
					<ProjectCard
						image={TwitterAccount}
						title="Twitter Clone"
						delay="1.5s"
						description="This a social media web applcation that can function similar to the original inspiration. With this Full-Stack applicaiton, a user is able to create an account in which they are able to interact with other uses through messages, comments, posts"
						tools={[ReactLogo, NodeLogo, MongoDBLogo]}
						projectLink="/work/twitter"
					/>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className="work__item">
					<ProjectCard
						image={SpotifyAccount}
						title="Spotify Clone"
						delay="1.7s"
						description="With the use of the offical Spotify Api, a user is able to import the playlists from their original Spotfy account and play all their favorite songs. All users are able to search, play,favorite songs based on artists name, genre, or playlist "
						projectLink="/work/spotify"
						tools={[ReactLogo, ReduxLogo, SpotifyLogo]}
					/>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className="work__item">
					<ProjectCard
						image={Nobu}
						title="Nobu Website"
						delay="1.9s"
						projectLink="/work/nobu"
						description="One of the projects I first created. With my previous place of employment as inspiration for this project, I designed it as close as possible to the original compnay site. Users are able to browse the services the company offers and make a mock reservation."
						tools={[ReactLogo, ReduxLogo, MaterialUILogo]}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default Work;
