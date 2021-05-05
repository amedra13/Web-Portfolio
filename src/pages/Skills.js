import React from 'react';
import JavascriptLogo from '../images/javascriptLogo.png';
import CssLogo from '../images/cssLogo.png';
import HtmlLogo from '../images/htmlLogo.png';
import ReactLogo from '../images/reactLogo.png';
import ReduxLogo from '../images/reduxLogo.png';
import MongoDbLogo from '../images/mongoDBLogo.png';
import MaterialUILogo from '../images/materialuiLogo.png';
import NodeLogo from '../images/nodeLogo.png';
import SassLogo from '../images/sassLogo.png';
import ReactRouterLogo from '../images/reactRouterLogo.png';
import NpmLogo from '../images/npmLogo.png';
import Grid from '@material-ui/core/Grid';

const Skills = () => {
	window.scrollTo(0, 0);
	return (
		<div className="skills">
			<Grid container spacing={2} className="skills__grid">
				<Grid item xs={12} className="skills__item">
					<div className="skills__header">
						<h1>Wondering what tools I have used?</h1>
					</div>
				</Grid>

				<Grid item md={12} lg={6} className="skills__item">
					<div className="skills__description">
						<h1>Start of Coding Journey</h1>
						<div className="description__body">
							<p>
								Since beginning my journey learing to code nearly 3 years ago,
								I’ve taken traditional classes, online tutorials, and multiple
								Udemy courses, to teach myself how to code and create great
								looking applications
							</p>
							<p>
								I love to learn new technologies and apply them to new projects
								and see it all come together to fruition. One of the greatest
								satisfations is the moment a new websites and applications that
								are fast and easy to use, go live. The main area of my expertise
								is front-end development, HTML, CSS, JS, React, and building new
								features and animations
							</p>

							<p>
								I also have experience working with the backend such as Node and
								Express, and connecting my applications to a database such as
								MongoDB and Firebase.
							</p>
							<p>Feel free to contact me, if you would like to know more.</p>
						</div>
					</div>
				</Grid>
				<Grid item md={12} lg={6} className="skills__item">
					<div className="skills__icons">
						<div className="icon__container" style={{ animationDelay: '2.2s' }}>
							<img src={JavascriptLogo} alt="" />
						</div>
						<div className="icon__container" style={{ animationDelay: '2.4s' }}>
							<img src={CssLogo} alt="" />
						</div>
						<div className="icon__container" style={{ animationDelay: '2.6s' }}>
							<img src={HtmlLogo} alt="" />
						</div>
						<div className="icon__container" style={{ animationDelay: '2.8s' }}>
							<img src={SassLogo} alt="" />
						</div>
						<div className="icon__container" style={{ animationDelay: '3s' }}>
							<img src={ReactLogo} alt="" />
						</div>
						<div className="icon__container" style={{ animationDelay: '3.2s' }}>
							<img src={ReduxLogo} alt="" />
						</div>
						<div className="icon__container" style={{ animationDelay: '3.4s' }}>
							<img src={ReactRouterLogo} alt="" />
						</div>
						<div className="icon__container" style={{ animationDelay: '3.6s' }}>
							<img src={MongoDbLogo} alt="" />
						</div>
						<div className="icon__container" style={{ animationDelay: '3.8s' }}>
							<img src={NodeLogo} alt="" />
						</div>
						<div className="icon__container" style={{ animationDelay: '4s' }}>
							<img src={MaterialUILogo} alt="" />
						</div>
						<div className="icon__container" style={{ animationDelay: '4.2s' }}>
							<img src={NpmLogo} alt="" />
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Skills;
