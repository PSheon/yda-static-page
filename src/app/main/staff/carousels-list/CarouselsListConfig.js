import React from 'react';
import { authRoles } from 'app/auth';

export const CarouselsListConfig = {
  settings: {
    layout: {
      config: {
        mode: 'fullWidth',
        footer: false,
      }
    }
  },
  auth: authRoles.staff,
  routes: [
    {
      path: '/staff/carousels-list/:carouselId',
      component: React.lazy(() => import('./carousel'))
    },
    {
      path: '/staff/carousels-list',
      component: React.lazy(() => import('./list'))
    }
  ]
};
