import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({
	image,
	title,
	delay,
	description,
	websiteLink,
	projectLink,
	tools,
}) => {
	return (
		<div className="projectCard" style={{ animationDelay: `${delay}` }}>
			<div className="projectCard__imgContainer">
				<Link to={projectLink}>
					<img src={image} alt="" />
				</Link>
			</div>
			<div className="projectCard__description">
				<h1>{title}</h1>
				<p>{description}</p>
				<h3>Tools Used </h3>
				<div className="tools">
					{tools.map((tool) => (
						<div className="icon" key={tool}>
							<img src={tool} alt="" />
						</div>
					))}
				</div>

				<div className="buttons">
					<Link to={projectLink}>Check it out!</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
