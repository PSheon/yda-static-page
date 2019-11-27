import React from 'react';
import { Redirect } from 'react-router-dom';
import { FuseUtils } from '@fuse';
import { AuthConfig } from 'app/main/auth';
import { HomePageConfig } from 'app/main/home';
import { ErrorsConfig } from 'app/main/errors';

/* Admin */
import { AdminConfig } from 'app/main/admin';

/* Staff */
import { StaffConfig } from 'app/main/staff';

const routeConfigs = [
  ...HomePageConfig,
  ...AuthConfig,
  ...ErrorsConfig,

  /* Admin */
  ...AdminConfig,

  /* Staff */
  ...StaffConfig
];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/" />
  },
  {
    component: () => <Redirect to="/error-404" />
  }
];

export default routes;
