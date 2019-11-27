import React, { useState } from 'react';
import history from '@history';
import { useDispatch } from 'react-redux';
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/styles';
// import { darken } from '@material-ui/core/styles/colorManipulator';
import { FuseAnimate } from '@fuse';
import { useForm } from '@fuse/hooks';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import * as Actions from 'app/store/actions';
import jwtService from 'app/services/jwtService';
import LoadingSpinner from 'app/main/shared/LoadingSpinner';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#3e3e3e'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fefefe'
    },
    '& .MuiOutlinedInput-root': {
      transition: 'box-shadow .5s',
      '& fieldset': {
        borderColor: '#3e3e3e'
      },
      '&:hover, &.Mui-focused': {
        // boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      '&:hover fieldset': {
        borderColor: '#3e3e3e'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3e3e3e'
      }
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: '2.4rem'
    }
  }
})(TextField);
const useStyles = makeStyles(theme => ({
  root: {
    // background:
    //   'linear-gradient(to right, ' +
    //   theme.palette.primary.dark +
    //   ' 0%, ' +
    //   darken(theme.palette.primary.dark, 0.5) +
    //   ' 100%)',
    backgroundImage: 'url(/assets/images/backgrounds/ys-bg.jpg)',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: theme.palette.primary.contrastText
  }
}));

function ForgotPasswordPage() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { form, handleChange } = useForm({
    email: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  function isFormValid() {
    return form.email.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    jwtService
      .forgotPassword(form.email)
      .then(message => {
        setIsLoading(false);
        // dispatch(Actions.showMessage({ message }));

        history.push({
          pathname: `/password-reset-mail-confirm/${form.email}`
        });
      })
      .catch(err => {
        setIsLoading(false);
        dispatch(Actions.showMessage({ message: err }));
      });
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
          <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">
            <Typography variant="h6" className="md:w-full mb-32 text-center">
              忘記密碼
            </Typography>

            <Typography
              variant="caption"
              className="md:w-full mb-32 text-center"
            >
              輸入您用來註冊的信箱位址，我們會寄送密碼重設連結給您，若您忘記信箱，請聯繫
              YS。
            </Typography>

            <form
              name="recoverForm"
              noValidate
              className="flex flex-col justify-center w-full"
              onSubmit={handleSubmit}
            >
              <CssTextField
                className="mb-16"
                label="信箱"
                autoFocus
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
              />

              <Button
                variant="contained"
                color="primary"
                className="w-224 mx-auto mt-16 rounded-full"
                aria-label="Reset"
                disabled={!isFormValid()}
                type="submit"
              >
                {isLoading ? '寄送重設密碼連結中' : '寄送重設密碼連結'}
                {isLoading && <LoadingSpinner width={32} height={32} />}
              </Button>
            </form>

            <div className="flex flex-col items-center justify-center pt-32 pb-24">
              <Link className="font-medium" to="/login">
                登入
              </Link>
            </div>
          </CardContent>
        </Card>
      </FuseAnimate>
    </div>
  );
}

export default ForgotPasswordPage;
