import React from 'react';
import { FuseAnimate } from '@fuse';
import { makeStyles } from '@material-ui/styles';

import LOADING_SVG from 'assets/images/shared/loading-2.svg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#2d323d',
    zIndex: 99999,
    pointerEvents: 'none'
  },
  center: {
    display: 'block',
    width: '100%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  logo: {
    width: '150px',
    margin: '0 auto'
  },
  logoImg: {
    filter: 'drop-shadow(0px 10px 6px rgba(0, 0, 0, 0.2))'
  }
}));

function FuseSplashScreen() {
  const classes = useStyles();

  return (
    <FuseAnimate animation="transition.slideUpBigIn" delay={300}>
      <div id="fuse-splash-screen" className={classes.root}>
        <div className={classes.center}>
          <div className={classes.logo}>
            {/* <img width="128" src="assets/images/logos/brand-logo.svg" alt="logo" /> */}
            <img
              width="150"
              src={LOADING_SVG}
              alt="logo"
              className={classes.logoImg}
            />
          </div>
        </div>
      </div>
    </FuseAnimate>
  );
}

export default React.memo(FuseSplashScreen);
