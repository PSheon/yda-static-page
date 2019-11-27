import React, { useState, useEffect } from 'react';
import { Card, CardContent, Icon, Typography } from '@material-ui/core';
import { darken } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/styles';
import { FuseAnimate } from '@fuse';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import history from '@history';
import isEmail from 'validator/lib/isEmail';

const useStyles = makeStyles(theme => ({
  root: {
    background:
      'radial-gradient(' +
      darken(theme.palette.primary.dark, 0.5) +
      ' 0%, ' +
      theme.palette.primary.dark +
      ' 80%)',
    color: theme.palette.primary.contrastText
  }
}));

function MailConfirmPage(props) {
  const classes = useStyles();

  const [emailAddress, setEmailAddress] = useState(null);

  useEffect(() => {
    const wantedEmailAddress = props.match.params.emailAddress;

    if (isEmail(wantedEmailAddress)) {
      setEmailAddress(wantedEmailAddress);
    } else {
      history.push({
        pathname: '/login'
      });
    }
  }, [props.match.params.emailAddress]);

  return (
    <div
      className={clsx(
        classes.root,
        'flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32'
      )}
    >
      <div className="flex flex-col items-center justify-center w-full">
        <FuseAnimate animation="transition.expandIn">
          <Card className="w-full max-w-384 rounded-32">
            <CardContent className="flex flex-col items-center justify-center p-32">
              <div className="m-32">
                <Icon className="text-96" color="action">
                  email
                </Icon>
              </div>

              <Typography variant="h5" className="text-center mb-16">
                請確認您的電子信箱！
              </Typography>

              <Typography
                className="text-center mb-16 w-full"
                color="textSecondary"
              >
                已發送確認郵件到
                <br />
                <b className="font-extrabold text-2xl text-gray-700">
                  {emailAddress}
                </b>
              </Typography>

              <Typography className="text-center w-full" color="textSecondary">
                檢查您的電子信箱，然後點擊 "確認我的電子郵件"
                連結以啟用您的電子郵件地址。
              </Typography>

              <div className="flex flex-col items-center justify-center pt-32 pb-24">
                <Link className="font-medium" to="/login">
                  啟用我的帳號
                </Link>
              </div>
            </CardContent>
          </Card>
        </FuseAnimate>
      </div>
    </div>
  );
}

export default MailConfirmPage;
