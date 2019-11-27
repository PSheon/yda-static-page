import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { useTimeout } from '@fuse/hooks';
import PropTypes from 'prop-types';

import LoadingSpinner from 'app/main/shared/LoadingSpinner';

function FuseLoading(props) {
	const [showLoading, setShowLoading] = useState(!props.delay);

	useTimeout(() => {
		setShowLoading(true);
	}, props.delay);

	if (!showLoading) {
		return null;
	}

	return (
		<div className="flex flex-1 flex-col items-center justify-center">
			<Typography className="text-20 mb-16" color="textSecondary">載入中...</Typography>
			{/* <img className="w-256" alt="logo" src="assets/images/shared/loading-2.svg" /> */}
			<LoadingSpinner width="128" height="128" />
			{/* <LinearProgress className="w-xs" color="secondary" /> */}
		</div>
	);
}

FuseLoading.propTypes = {
	delay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

FuseLoading.defaultProps = {
	delay: false
};

export default FuseLoading;
