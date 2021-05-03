import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/projectsData.json';

const Project = () => {
	let { project } = useParams();

	return (
		<div className="project">
			<div className="project__header">
				<h1>{data[project].name}</h1>
			</div>
			<div className="project__highlights">
				<div className="highlights__description">
					<h2>{data[project].highlightsIntro}</h2>
					<p style={{ textDecoration: 'underline' }}>
						Highlights and goals achieved:
					</p>
					<ul>
						{data[project].highlightsList.map((item) => (
							<li>{item}</li>
						))}
					</ul>
				</div>
				<div className="highlights__imgContainer">
					<img src={data[project].image} alt="" />
				</div>
			</div>
			<div className="project__improvements">
				<div className="highlights__imgContainer">
					<p>Image placed here</p>
				</div>
				<div className="highlights__description">
					<h2>{data[project].improvementsIntro}</h2>
					<p style={{ textDecoration: 'underline' }}>
						Notes for Improvements:{' '}
					</p>
					<ul>
						{data[project].improvementsList.map((item) => (
							<li>{item}</li>
						))}
					</ul>
				</div>
			</div>
			<div className="project__link">
				<a href={data[project].link} target="_blank" rel="noreferrer">
					Link to Project{' '}
				</a>
			</div>
		</div>
	);
};

export default Project;
