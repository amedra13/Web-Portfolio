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
				<p>List of tools</p>
				<div className="iconsList">
					<img src={JavascriptLogo} alt="" />
					<img src={CssLogo} alt="" />
					<img src={HtmlLogo} alt="" />
					<img src={SassLogo} alt="" />
					<img src={ReactLogo} alt="" />
					<img src={ReduxLogo} alt="" />
					<img src={ReactRouterLogo} alt="" />
					<img src={MongoDbLogo} alt="" />
					<img src={NodeLogo} alt="" />
					<img src={MaterialUILogo} alt="" />
					<img src={NpmLogo} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Skills;
