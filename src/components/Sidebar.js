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
				<Link to="/" className="imgLink" onClick={closeSidebar}>
					<img src={Logo} alt="amsportscards" />
				</Link>

				<div className="sidebar__links">
					<Button
						component={NavLink}
						to="/about"
						activeClassName="selected"
						disableRipple
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
						disableRipple
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
						disableRipple
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
						disableRipple
						onClick={closeSidebar}
					>
						<AlternateEmailIcon />
						<p>Contact</p>
						<span className="animated-bar"></span>
					</Button>
				</div>
				<div className="sidebar__iconLinks">
					<a
						href="https://www.linkedin.com/in/andres-medrano-19ba91132/"
						target="_blank"
						rel="noreferrer"
					>
						{' '}
						<LinkedInIcon />
					</a>
					<a
						href="https://www.instagram.com/am_sportscards5"
						target="_blank"
						rel="noreferrer"
					>
						{' '}
						<InstagramIcon />
					</a>
					<a
						href="https://github.com/amedra13"
						target="_blank"
						rel="noreferrer"
					>
						{' '}
						<GitHubIcon />
					</a>
				</div>
			</div>
			<BurgerMenu clickFunction={toggleSidebar} showSidebar={showSidebar} />
		</div>
	);
};

export default Sidebar;
