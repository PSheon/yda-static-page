import React from 'react';
import { authRoles } from 'app/auth';

export const ImagesListConfig = {
	settings: {
		layout: {
			config: {
				mode: 'fullWidth',
				footer: {
					display: false
				}
			}
		}
	},
	auth: authRoles.staff,
	routes: [
		{
			path: '/staff/images-list',
			component: React.lazy(() => import('./ImagesList'))
		}
	]
};
