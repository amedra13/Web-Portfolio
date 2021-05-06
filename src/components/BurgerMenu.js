import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
	button: {
		width: '100%',
		height: '100%',
		color: 'lightBlue',
	},
	icon: {
		width: '100%',
		height: '100%',
	},
});

const BurgerMenu = () => {
	const classes = useStyles();
	return (
		<div className="burgerMenu">
			<IconButton className={classes.button}>
				<KeyboardArrowRightIcon className={classes.icon} />
			</IconButton>
		</div>
	);
};

export default BurgerMenu;
