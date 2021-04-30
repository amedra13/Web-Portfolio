import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<h1>Sidebar Component</h1>
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
		</div>
	);
};

export default Sidebar;
