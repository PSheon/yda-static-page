import React from 'react';

export const LandingPageConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: '/',
      component: React.lazy(() => import('./LandingPage'))
    }
  ]
};
