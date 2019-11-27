import React from 'react';

export const LandingPageConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: '/home',
      component: React.lazy(() => import('./LandingPage'))
    }
  ]
};
