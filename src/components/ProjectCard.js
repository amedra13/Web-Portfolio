import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({
	image,
	title,
	delay,
	description,
	websiteLink,
	tools,
}) => {
	useEffect(() => {
		console.log(tools);
	});
	return (
		<div className="projectCard" style={{ animationDelay: `${delay}` }}>
			<div className="projectCard__imgContainer">
				<img src={image} alt="" />
			</div>
			<h1>{title}</h1>
			<div className="projectCard__description">
				<p>{description}</p>
				<h3>Tools Used: </h3>
				<div className="tools">
					{tools.map((tool) => (
						<div className="icon">
							<img src={tool} alt="" />
						</div>
					))}
				</div>

				<div className="buttons">
					<a href={websiteLink} target="_blank" rel="noreferrer">
						Site
					</a>
					<Link to="/work">Description</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
