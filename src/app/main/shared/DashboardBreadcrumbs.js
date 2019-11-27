import React from 'react';
import { Link } from 'react-router-dom';
import { FuseAnimateGroup } from '@fuse';
import clsx from 'clsx';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

function DashboardBreadcrumbs(props) {
  const pageNames = props.pageNames || ['會員報表'];
  const dense = props.dense || false;
  const className = props.className || '';

  return dense ? (
    <FuseAnimateGroup
      enter={{
        animation: 'transition.expandIn'
      }}
      className={clsx('flex items-center', className)}
    >
      <Icon className="text-18 text-white">dashboard</Icon>
      {pageNames.map(pageName => (
        <React.Fragment key={pageName}>
          <Icon className="text-16 text-white">chevron_right</Icon>
          <Typography className="text-white">{pageName}</Typography>
        </React.Fragment>
      ))}
    </FuseAnimateGroup>
  ) : (
    <FuseAnimateGroup
      enter={{
        animation: 'transition.expandIn'
      }}
      className={clsx('flex items-center my-16 sm:mb-0 pl-12', className)}
    >
      <Link
        to="/staff/dashboard"
        role="button"
        className="flex justify-center items-center text-white"
      >
        <Icon className="text-24 text-white">dashboard</Icon>
      </Link>
      {pageNames.map(pageName => (
        <React.Fragment key={pageName}>
          <Icon>chevron_right</Icon>
          <Typography className="text-24 text-white">{pageName}</Typography>
        </React.Fragment>
      ))}
    </FuseAnimateGroup>
  );
}

export default DashboardBreadcrumbs;
