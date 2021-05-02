import React from 'react';
import BounceLoader from 'react-spinners/BounceLoader';

const LoadingSpinner = () => {
	return (
		<div className="spinner">
			<BounceLoader color="rgb(199, 209, 255)" size={100} />
		</div>
	);
};

export default LoadingSpinner;
