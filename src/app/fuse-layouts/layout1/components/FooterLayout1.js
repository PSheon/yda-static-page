import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import moment from 'moment';

import { socialLogoConverter } from 'app/utils';

const useStyles = makeStyles(theme => ({
  logoImgWrapper: {
    width: '1.5em'
  },
  unLinkImg: {
    filter: 'grayscale(100%)'
  }
}));

function FooterLayout1(props) {
  const classes = useStyles();
  const [timestamp, setTimestamp] = useState(null);

  const footerTheme = useSelector(({ fuse }) => fuse.settings.footerTheme);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(moment().format('YYYY-MM-DD HH:mm:ss'));
    }, 1000);

    return () => clearInterval(interval);
  }, [timestamp]);

  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar id="fuse-footer" className="relative z-10" color="default">
        <Toolbar className="px-16 py-24 flex flex-col items-center justify-between sm:flex-row sm:py-0">
          <div>
            <Typography variant="subtitle1" className="whitespace-no-wrap">
              版權所有 © 勞動部勞動力發展署高屏澎東分署
            </Typography>
            <div className="flex justify-center items-center">
              <Typography variant="caption" color="textSecondary">
                隱私權政策
              </Typography>
              <Typography variant="caption" color="textSecondary">
                政府網站資料開放宣告
              </Typography>
              <Typography variant="caption" color="textSecondary">
                著作權聲明
              </Typography>
            </div>
          </div>
          <div className="flex justify-around items-center min-w-128">
            <div className={classes.logoImgWrapper}>
              <img
                className={classes.unLinkImg}
                alt="google Icon"
                src={socialLogoConverter('google')}
              />
            </div>
            <div className={classes.logoImgWrapper}>
              <img
                className={classes.unLinkImg}
                alt="google Icon"
                src={socialLogoConverter('facebook')}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default FooterLayout1;
