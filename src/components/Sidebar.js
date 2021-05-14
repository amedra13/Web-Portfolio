import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WorkIcon from '@material-ui/icons/Work';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import Button from '@material-ui/core/Button';
import BurgerMenu from './BurgerMenu';

const Sidebar = ({ shrink }) => {
	const [showSidebar, setShowSidebar] = useState(false);

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	};
	const closeSidebar = () => {
		setShowSidebar(false);
	};

	return (
		<div className={`sidebar ${shrink && 'hide'} ${showSidebar && 'slideIn'}`}>
			<div className="sidebar__container">
				<Link to="/" className="imgLink">
					<img src={Logo} alt="amsportscards" />
				</Link>

				<div className="sidebar__links">
					<Button
						component={NavLink}
						to="/about"
						activeClassName="selected"
						onClick={closeSidebar}
					>
						<AccountCircleIcon />
						<p>About</p>
						<span className="animated-bar"></span>
					</Button>
					<Button
						component={NavLink}
						to="/skills"
						activeClassName="selected"
						onClick={closeSidebar}
					>
						<KeyboardIcon />
						<p>Skills</p>
						<span className="animated-bar"></span>
					</Button>
					<Button
						component={NavLink}
						to="/work"
						activeClassName="selected"
						onClick={closeSidebar}
					>
						<WorkIcon />
						<p>Work</p>
						<span className="animated-bar"></span>
					</Button>
					<Button
						component={NavLink}
						to="/contact"
						activeClassName="selected"
						onClick={closeSidebar}
					>
						<AlternateEmailIcon />
						<p>Contact</p>
						<span className="animated-bar"></span>
					</Button>
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
						<GitHubIcon />
					</a>
				</div>
			</div>
			<BurgerMenu clickFunction={toggleSidebar} />
		</div>
	);
};

export default Sidebar;
