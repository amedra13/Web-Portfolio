import React from 'react';
import { useParams } from 'react-router-dom';

const Project = () => {
	let { project } = useParams();
	return (
		<div className="project">
			<h1>Project: {project}</h1>
		</div>
	);
};

export default Project;
