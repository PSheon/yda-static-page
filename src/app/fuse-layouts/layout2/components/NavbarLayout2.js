import React from 'react';
import { Link } from 'react-router-dom';
import { FuseScrollbars } from '@fuse';
import Navigation from 'app/fuse-layouts/shared-components/Navigation';

function NavbarLayout2(props) {
  return (
    <div className="flex flex-auto justify-between items-center w-full h-full container p-0 lg:px-24">
      {/* <div className="flex flex-shrink-0 items-center pl-8 pr-16">
                <Logo />
            </div> */}
      <Link
        to="/home"
        role="button"
        className="flex flex-shrink-0 items-center pl-8 pr-16"
      >
        <img
          className="mx-5 h-40"
          alt="logo"
          src="/assets/images/logos/logo.png"
        />
      </Link>

      <div className="flex items-center">
        <FuseScrollbars className="flex h-full items-center">
          <Navigation className="w-full" layout="horizontal" dense />
        </FuseScrollbars>

        {/* <div className={classes.separatorInNavbar} />

        <UserMenu /> */}
      </div>
    </div>
  );
}

export default NavbarLayout2;
