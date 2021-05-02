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

const Skills = () => {
	return (
		<div className="skills">
			<div className="skills__header">
				<h1>Wondering what tools I have used?</h1>
			</div>
			<div className="skills__description">
				<h1>Start of Coding Journey</h1>
				<div className="description__body">
					<p>
						Since beginning my journey as a freelance developer nearly 10 years
						ago, I’ve done remote work for agencies, consulted for startups, and
						collaborated with talented people to create web products for both
						business and consumer use.
					</p>
					<p>
						I create successful responsive websites that are fast, easy to use,
						and built with best practices. The main area of my expertise is
						front-end development, HTML, CSS, JS, building small and medium web
						apps, custom plugins, features, animations, and coding interactive
						layouts.
					</p>
					<p>
						I also have full-stack developer experience with popular open-source
						CMS like (WordPress, Drupal, Magento, Keystone.js and others) .
					</p>
					<p>Visit my LinkedIn profile for more details or just contact me.</p>
				</div>
			</div>
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
		</div>
	);
};

export default Skills;
