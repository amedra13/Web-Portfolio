import React from 'react';
import Logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__container">
				<img src={Logo} alt="amsportscards" />
				<div className="sidebar__links">
					<NavLink to="/home" activeClassName="selected">
						Home
					</NavLink>
					<NavLink to="/about" activeClassName="selected">
						About
					</NavLink>
					<NavLink to="/skills" activeClassName="selected">
						Skills
					</NavLink>
					<NavLink to="/work" activeClassName="selected">
						Work
					</NavLink>
					<NavLink to="/contact" activeClassName="selected">
						Contact
					</NavLink>
				</div>
				<div className="sidebar__iconLinks">
					<LinkedInIcon />
					<InstagramIcon />
					<TwitterIcon />
					<GitHubIcon />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
