import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/projectsData.json';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Project = () => {
	window.scrollTo(0, 0);
	let { project } = useParams();
	const matches = useMediaQuery('(max-width:960px)');

	return (
		<div className="project">
			<div className="project__header">
				<h1>{data[project].name}</h1>
			</div>
			<Grid
				container
				direction={matches && 'column-reverse'}
				className="project__highlights"
			>
				<Grid item xs={12} md={8}>
					<div className="highlights__description">
						<h2>{data[project].highlightsIntro}</h2>
						<p style={{ textDecoration: 'underline' }}>
							Highlights and goals achieved:
						</p>
						<ul>
							{data[project].highlightsList.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					</div>
				</Grid>
				<Grid
					item
					xs={12}
					md={4}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '15px',
					}}
				>
					<div className="highlights__imgContainer">
						<img src={data[project].image} alt="" />
					</div>
				</Grid>
			</Grid>
			<Grid container className="project__improvements">
				<Grid item xs={12} md={4}>
					<div className="improvements__imgContainer">
						<p>Image placed here</p>
					</div>
				</Grid>
				<Grid item xs={12} md={8}>
					<div className="improvements__description">
						<h2>{data[project].improvementsIntro}</h2>
						<p style={{ textDecoration: 'underline' }}>
							Notes for Improvements:{' '}
						</p>
						<ul>
							{data[project].improvementsList.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					</div>
				</Grid>
			</Grid>
			<div className="project__link">
				<a href={data[project].link} target="_blank" rel="noreferrer">
					Link to Project{' '}
				</a>
			</div>
		</div>
	);
};

export default Project;
