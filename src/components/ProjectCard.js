import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({
	image,
	title,
	delay,
	description,
	websiteLink,
	portfolioLink,
}) => {
	return (
		<div className="projectCard" style={{ animationDelay: `${delay}` }}>
			<div className="projectCard__imgContainer">
				<img src={image} alt="" />
			</div>
			<h1>{title}</h1>
			<div className="projectCard__description">
				<p>{description}</p>
			</div>
			<div className="projectCard__buttons">
				<Link to="/">Site</Link>
				<Link to="/work">Description</Link>
			</div>
		</div>
	);
};

export default ProjectCard;
