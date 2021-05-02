import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

const LoadingSpinner = () => {
	return (
		<div className="spinner">
			<p>Sending </p>
			<PulseLoader color="rgb(199, 209, 255)" size={15} margin={4} />
		</div>
	);
};

export default LoadingSpinner;
