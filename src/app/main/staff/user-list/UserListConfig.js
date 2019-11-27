import React from 'react';
import { authRoles } from 'app/auth';

export const UserListConfig = {
	settings: {
		layout: {
			config: {
				mode: 'fullWidth',
				footer: {
					display: false,
				}
			}
		}
	},
	auth: authRoles.staff,
	routes: [
		{
			path: '/staff/user-list',
			component: React.lazy(() => import('./UserList'))
		}
	]
};
