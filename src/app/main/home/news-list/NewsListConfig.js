import React from 'react';

export const NewsListConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: '/news-list/:newsId',
      component: React.lazy(() => import('./news'))
    },
    {
      path: '/news-list',
      component: React.lazy(() => import('./list'))
    }
  ]
};
