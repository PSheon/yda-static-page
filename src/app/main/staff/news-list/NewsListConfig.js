import React from 'react';
import { authRoles } from 'app/auth';

export const NewsListConfig = {
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
      path: '/staff/news-list/:newsId',
      component: React.lazy(() => import('./news'))
    },
    {
      path: '/staff/news-list',
      component: React.lazy(() => import('./list'))
    }
  ]
};
