import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Icon,
  ListItemIcon,
  ListItemText,
  Popover,
  MenuItem,
  Typography
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import * as authActions from 'app/auth/store/actions';
import { Link } from 'react-router-dom';
import { userRoleTitleConverter } from 'app/utils';

function UserMenu(props) {
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user);

  const [userMenu, setUserMenu] = useState(null);

  const userMenuClick = event => {
    setUserMenu(event.currentTarget);
  };

  const userMenuClose = () => {
    setUserMenu(null);
  };

  return (
    <React.Fragment>
      <Button className="h-64 rounded-full mx-12" onClick={userMenuClick}>
        {user.data.photoURL ? (
          <Avatar className="" alt="user photo" src={user.data.photoURL} />
        ) : (
          <Avatar className="">{user.data.displayName[0]}</Avatar>
        )}

        <div className="hidden sm:flex flex-col ml-12 items-start">
          <Typography component="span" className="normal-case font-600 flex">
            {user.data.displayName}
          </Typography>
          <Typography
            className="text-11 capitalize font-semibold"
            color="textSecondary"
          >
            {userRoleTitleConverter(user.role.toString())}
          </Typography>
        </div>

        <Icon className="text-16 ml-12 hidden sm:flex" variant="action">
          keyboard_arrow_down
        </Icon>
      </Button>

      <Popover
        open={Boolean(userMenu)}
        anchorEl={userMenu}
        onClose={userMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        classes={{
          paper: 'py-8'
        }}
      >
        {!user.role || user.role.length === 0 ? (
          <React.Fragment>
            <MenuItem component={Link} to="/login" className="rounded-full">
              <ListItemIcon className="min-w-40">
                <Icon>lock</Icon>
              </ListItemIcon>
              <ListItemText className="pl-0" primary="登入 YS" />
            </MenuItem>
            <MenuItem component={Link} to="/register" className="rounded-full">
              <ListItemIcon className="min-w-40">
                <Icon>person_add</Icon>
              </ListItemIcon>
              <ListItemText className="pl-0" primary="加入 YS" />
            </MenuItem>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <MenuItem
              component={Link}
              to="/personal-settings"
              onClick={userMenuClose}
              className="rounded-full"
            >
              <ListItemIcon className="min-w-40">
                <Icon>account_circle</Icon>
              </ListItemIcon>
              <ListItemText className="pl-0" primary="我的帳戶" />
            </MenuItem>
            <MenuItem
              component={Link}
              to="/ys-faq"
              onClick={userMenuClose}
              className="rounded-full"
            >
              <ListItemIcon className="min-w-40">
                <Icon>live_help</Icon>
              </ListItemIcon>
              <ListItemText className="pl-0" primary="常見問答" />
            </MenuItem>
            <MenuItem
              onClick={() => {
                dispatch(authActions.logoutUser());
                userMenuClose();
              }}
              className="rounded-full"
            >
              <ListItemIcon className="min-w-40">
                <Icon>exit_to_app</Icon>
              </ListItemIcon>
              <ListItemText className="pl-0" primary="登出" />
            </MenuItem>
          </React.Fragment>
        )}
      </Popover>
    </React.Fragment>
  );
}

export default UserMenu;
