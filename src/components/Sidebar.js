import React from 'react';
import Logo from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WorkIcon from '@material-ui/icons/Work';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__container">
				<Link to="/" className="imgLink">
					<img src={Logo} alt="amsportscards" />
				</Link>

				<div className="sidebar__links">
					<NavLink to="/about" activeClassName="selected">
						<AccountCircleIcon />
						About
						<span className="animated-bar"></span>
					</NavLink>
					<NavLink to="/skills" activeClassName="selected">
						<KeyboardIcon />
						Skills
						<span className="animated-bar"></span>
					</NavLink>
					<NavLink to="/work" activeClassName="selected">
						<WorkIcon />
						Work
						<span className="animated-bar"></span>
					</NavLink>
					<NavLink to="/contact" activeClassName="selected">
						<AlternateEmailIcon />
						Contact
						<span className="animated-bar"></span>
					</NavLink>
				</div>
				<div className="sidebar__iconLinks">
					<a href="/">
						{' '}
						<LinkedInIcon />
					</a>
					<a href="/">
						{' '}
						<InstagramIcon />
					</a>
					<a href="/">
						{' '}
						<TwitterIcon />
					</a>
					<a href="/">
						{' '}
						<GitHubIcon />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
