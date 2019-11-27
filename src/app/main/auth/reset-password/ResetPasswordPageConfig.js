import React from 'react';
import { Redirect } from 'react-router-dom';

export const ResetPasswordPageConfig = {
	settings: {
		layout: {
			config: {
				navbar: {
					display: false
				},
				toolbar: {
					display: false
				},
				footer: {
					display: false
				},
				leftSidePanel: {
					display: false
				},
				rightSidePanel: {
					display: false
				}
			}
		}
	},
	routes: [
		{
			path: '/reset-password/:resetID',
			component: React.lazy(() => import('./ResetPasswordPage'))
		},
		{
			path: '/reset-password',
			component: () => <Redirect to="/dashboard" />
		}
	]
};
