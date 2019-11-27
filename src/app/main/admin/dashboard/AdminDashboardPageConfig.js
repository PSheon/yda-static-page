import React from 'react';
import { authRoles } from 'app/auth';

export const AdminDashboardPageConfig = {
  settings: {
    layout: {
      config: {
        mode: 'fullWidth'
      }
    }
  },
  auth: authRoles.staff,
  // auth: authRoles.onlyGuest,
  routes: [
    {
      path: '/staff/dashboard',
      component: React.lazy(() => import('./AdminDashboardPage'))
    }
  ]
};
