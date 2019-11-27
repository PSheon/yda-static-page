import React from 'react';
import { authRoles } from 'app/auth';

export const StaffListConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/admin/staff-list',
			component: React.lazy(() => import('./StaffList'))
		}
	]
};
