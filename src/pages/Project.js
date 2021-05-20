import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/projectsData.json';
import Popover from '@material-ui/core/Popover';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Project = () => {
	let { project } = useParams();
	const [anchorEl, setAnchorEl] = useState(null);
	const matches = useMediaQuery('(max-width:960px)');

	const handleClick = (event) => {
		event.preventDefault();
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const open = Boolean(anchorEl);

	let gridContent = (
		<>
			<Grid item xs={12} md={8} className="project__gridItem">
				<h2>{data[project].highlightsIntro}</h2>
				<p style={{ textDecoration: 'underline' }}>
					Highlights and goals achieved:
				</p>
				<ul>
					{data[project].highlightsList.map((item, i) => (
						<li key={i}>{item}</li>
					))}
				</ul>
			</Grid>
			<Grid item xs={12} md={4} className="project__gridItem">
				<div className="project__imgContainer">
					<img src={data[project].image1} alt="" />
				</div>
			</Grid>
		</>
	);

	if (matches) {
		gridContent = (
			<>
				<Grid item xs={12} md={4} className="project__gridItem">
					<div className="project__imgContainer">
						<img src={data[project].image1} alt="" />
					</div>
				</Grid>
				<Grid item xs={12} md={8} className="project__gridItem">
					<h2>{data[project].highlightsIntro}</h2>
					<p style={{ textDecoration: 'underline' }}>
						Highlights and goals achieved:
					</p>
					<ul>
						{data[project].highlightsList.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</Grid>
			</>
		);
	}

	return (
		<div className="project">
			<div className="project__header">
				<h1>{data[project].name}</h1>
			</div>
			<Grid container className="project__grid border">
				{gridContent}
			</Grid>
			<Grid container className="project__grid">
				<Grid item xs={12} md={4} className="project__gridItem">
					<div className="project__imgContainer">
						<img src={data[project].image2} alt="" />
					</div>
				</Grid>
				<Grid item xs={12} md={8} className="project__gridItem">
					<h2>{data[project].improvementsIntro}</h2>
					<p style={{ textDecoration: 'underline' }}>
						Notes for Improvements:{' '}
					</p>
					<ul>
						{data[project].improvementsList.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</Grid>
			</Grid>
			<div className="project__link">
				{project !== 'nobu' && (
					<>
						{' '}
						<button type="button" onClick={handleClick}>
							Demo Credentials
						</button>
						<Popover
							open={open}
							anchorEl={anchorEl}
							onClose={() => {
								setAnchorEl(null);
							}}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'center',
							}}
							transformOrigin={{
								vertical: 'bottom',
								horizontal: 'center',
							}}
						>
							<div className="project__popper">
								<h5>
									<span>Username</span> : medranodemo@gmail.com
								</h5>
								<h5>
									<span>Password</span> : medranodemo
								</h5>
							</div>
						</Popover>
					</>
				)}
				<a href={data[project].link} target="_blank" rel="noreferrer">
					Link to Project{' '}
				</a>
			</div>
		</div>
	);
};

export default Project;
