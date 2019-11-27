import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Hidden, Toolbar } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { FuseSearch } from '@fuse';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import UserMenu from 'app/fuse-layouts/shared-components/UserMenu';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  separator: {
    width: 1.5,
    height: 30,
    backgroundColor: theme.palette.divider
  },
  separatorInNavbar: {
    width: 1.5,
    height: 30,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 17,
    backgroundColor: theme.palette.divider
  }
}));

function ToolbarLayout1(props) {
  const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
  const toolbarTheme = useSelector(({ fuse }) => fuse.settings.toolbarTheme);

  const classes = useStyles(props);

  return (
    <ThemeProvider theme={toolbarTheme}>
      <AppBar id="fuse-toolbar" className="flex relative z-10" color="default">
        <Toolbar className="p-0">
          {config.navbar.display && config.navbar.position === 'left' && (
            <Hidden lgUp>
              <NavbarMobileToggleButton className="w-64 h-64 p-0" />
              <div className={classes.separator} />
              <Link to="/home">
                {/* <Avatar className="mx-5" alt="logo" src="assets/images/logos/brand-logo.svg" /> */}
                <img
                  className="mx-5 h-30 sm:h-40"
                  alt="logo"
                  src="assets/images/logos/logo.png"
                />
              </Link>
              {/* <Typography className="text-16 font-light font-extrabold" color="textPrimary">青年職涯發展中心</Typography> */}
            </Hidden>
          )}

          {/* <div className="flex flex-1">
            <Hidden mdDown>
              <FuseShortcuts className="px-16" />
            </Hidden>
          </div> */}

          <div className="flex">
            <FuseSearch />

            <div className={classes.separatorInNavbar} />

            <UserMenu />

            {/* <Hidden lgUp>

              <div className={classes.separatorInNavbar} />

            </Hidden> */}

            {/* <div className={classes.separatorInNavbar} />

            <QuickPanelToggleButton /> */}
          </div>

          {/* {config.navbar.display && config.navbar.position === 'right' && (
            <Hidden lgUp>
              <NavbarMobileToggleButton />
            </Hidden>
          )} */}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default ToolbarLayout1;
