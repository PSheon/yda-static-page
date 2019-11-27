/* TODO: Fix login bug here */
import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Typography,
  InputAdornment,
  Icon
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { TextFieldFormsy } from '@fuse';
import Formsy from 'formsy-react';
import * as authActions from 'app/auth/store/actions';
import { FuseAnimate } from '@fuse';
import { useForm } from '@fuse/hooks';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import * as Actions from 'app/store/actions';
import {
  GOOGLE_CLIENT_ID,
  FACEBOOK_CLIENT_ID
} from 'app/fuse-configs/envsConfig';
import { socialLogoConverter } from 'app/utils';
import LoadingSpinner from 'app/main/shared/LoadingSpinner';

const useStyles = makeStyles(theme => ({
  root: {
    // background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + darken(theme.palette.primary.dark, 0.5) + ' 100%)',
    backgroundImage: 'url(/assets/images/backgrounds/yda-bg.jpg)',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: theme.palette.primary.contrastText
  },
  googleButton: {
    backgroundColor: '#d9534f',
    '&:hover': {
      backgroundColor: '#d9534f'
    }
  },
  facebookButton: {
    backgroundColor: '#428bca',
    '&:hover': {
      backgroundColor: '#428bca'
    }
  }
}));

function LoginPage() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const login = useSelector(({ auth }) => auth.login);

  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (login.error && (login.error.email || login.error.password)) {
      formRef.current.updateInputsWithError({
        ...login.error
      });
      disableButton();
      setIsLoading(false);
    }
  }, [login.error, login.success]);

  const { form, handleChange } = useForm({
    email: '',
    password: '',
    remember: true
  });

  function disableButton() {
    setIsFormValid(false);
  }

  function enableButton() {
    setIsFormValid(true);
    setIsLoading(false);
  }

  function handleSubmit(model) {
    setIsLoading(true);
    setIsFormValid(false);
    dispatch(authActions.submitLogin(model));
  }

  function handleSubmitGoogle({ googleId, accessToken, profileObj }) {
    setIsLoading(true);
    setIsFormValid(false);
    const googleInfo = {
      googleID: googleId,
      googleAccessToken: accessToken,
      googleDisplayName: profileObj.name,
      googleEmail: profileObj.email,
      googlePhotoURL: profileObj.imageUrl
    };
    dispatch(authActions.submitLoginGoogle(googleInfo));
  }

  function handleSubmitFacebook({ userID, accessToken, name, email, picture }) {
    setIsLoading(true);
    setIsFormValid(false);
    const fbInfo = {
      facebookID: userID,
      facebookAccessToken: accessToken,
      facebookDisplayName: name,
      facebookEmail: email,
      facebookPhotoURL: picture.data
        ? picture.data.url
        : 'assets/images/avatars/penguin.png'
    };
    dispatch(authActions.submitLoginFacebook(fbInfo));
  }

  return (
    <div
      className={clsx(
        classes.root,
        'flex flex-col flex-auto flex-shrink-0 p-24 md:flex-row md:p-0'
      )}
    >
      <div className="flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left">
        <FuseAnimate animation="transition.expandIn">
          <Link to="/home">
            <img
              className="w-400 mb-32"
              src="assets/images/logos/logo.png"
              alt="logo"
            />
          </Link>
        </FuseAnimate>

        {/* <FuseAnimate animation="transition.slideUpIn" delay={300}>
					<Typography variant="h3" color="inherit" className="font-light">
						青年職涯發展中心
					</Typography>
				</FuseAnimate> */}

        {/* <FuseAnimate delay={400}>
					<Typography variant="subtitle1" color="inherit" className="max-w-512 mt-16">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque. Sed mollis velit
						facilisis facilisis.
					</Typography>
				</FuseAnimate> */}
      </div>

      <FuseAnimate animation={{ translateX: [0, '100%'] }}>
        <Card className="w-full max-w-400 mx-auto m-16 md:m-0 rounded-12">
          <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-96">
            <Typography variant="h6" className="md:w-full mb-32 text-center">
              登入您的帳號
            </Typography>

            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              render={renderProps => (
                <Button
                  disabled
                  variant="contained"
                  size="large"
                  onClick={renderProps.onClick}
                  className={clsx(
                    classes.googleButton,
                    'normal-case w-256 mb-8 rounded-full text-white hover:shadow-xl'
                  )}
                >
                  <img
                    className="w-36 px-0 mr-20 bg-white rounded-full"
                    src={socialLogoConverter('google')}
                    alt="google logo"
                  />
                  使用 Google 登入
                </Button>
              )}
              onSuccess={googleInfo => {
                handleSubmitGoogle(googleInfo);
              }}
              onFailure={response => {
                // console.log('response, ', response);
                dispatch(Actions.showMessage({ message: '登入 Google 失敗' }));
              }}
            />

            <FacebookLogin
              appId={FACEBOOK_CLIENT_ID}
              fields="name,email,picture"
              render={renderProps => (
                <Button
                  disabled
                  variant="contained"
                  size="large"
                  onClick={renderProps.onClick}
                  className={clsx(
                    classes.facebookButton,
                    'normal-case w-256 rounded-full text-white hover:shadow-xl'
                  )}
                >
                  <img
                    className="w-36 px-0 mr-20 bg-white rounded-full"
                    src={socialLogoConverter('facebook')}
                    alt="facebook logo"
                  />
                  使用 Facebook 登入
                </Button>
              )}
              callback={facebookInfo => {
                handleSubmitFacebook(facebookInfo);
              }}
              onFailure={response => {
                dispatch(
                  Actions.showMessage({ message: '登入 Facebook 失敗' })
                );
              }}
            />

            <div className="my-24 flex items-center justify-center">
              <Divider className="w-64" />
              <span className="mx-8 font-bold">或者</span>
              <Divider className="w-64" />
            </div>

            <Formsy
              onValidSubmit={handleSubmit}
              onValid={enableButton}
              onInvalid={disableButton}
              ref={formRef}
              className="flex flex-col justify-center w-full"
            >
              <TextFieldFormsy
                className="mb-16"
                label="信箱"
                autoFocus
                type="email"
                name="email"
                validations={{
                  minLength: 4,
                  isEmail: true
                }}
                validationErrors={{
                  minLength: '請輸入正確信箱地址',
                  isEmail: '請輸入正確信箱地址'
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon className="text-20" color="action">
                        email
                      </Icon>
                    </InputAdornment>
                  )
                }}
                variant="outlined"
                required
                fullWidth
              />

              <TextFieldFormsy
                className="mb-16"
                label="密碼"
                type="password"
                name="password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon className="text-20" color="action">
                        vpn_key
                      </Icon>
                    </InputAdornment>
                  )
                }}
                variant="outlined"
                required
                fullWidth
              />

              <div className="flex items-center justify-between">
                <FormControl>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="remember"
                        checked={form.remember}
                        onChange={handleChange}
                      />
                    }
                    label="保持登入"
                  />
                </FormControl>

                <Link className="font-medium" to="####">
                  忘記密碼？
                </Link>
              </div>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="w-full mx-auto mt-16 rounded-full hover:shadow-xl"
                aria-label="登入"
                disabled={!isFormValid}
                value="legacy"
              >
                {isLoading ? '登入中' : '登入'}
                {isLoading && <LoadingSpinner width={32} height={32} />}
              </Button>
            </Formsy>

            <div className="flex flex-col items-center justify-center pt-32 pb-24">
              <span className="font-medium">尚未擁有帳號？</span>
              <Link className="font-medium" to="####" disabled>
                建立帳號
              </Link>
            </div>
          </CardContent>
        </Card>
      </FuseAnimate>
    </div>
  );
}

export default LoginPage;
