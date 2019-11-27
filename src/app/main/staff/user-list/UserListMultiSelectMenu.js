import React, { useState } from 'react';
import {
  Icon,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  MenuList
} from '@material-ui/core';
import CsvDownload from 'react-json-to-csv';
import { useSelector } from 'react-redux';

import { userListToCsvConverter } from 'app/utils';

function UserListMultiSelectMenu() {
  const USERS = useSelector(({ userList }) => userList.docs);
  const selectedUserIds = useSelector(
    ({ userList }) => userList.selectedUserIds
  );
  const csvSource = USERS.filter(user => selectedUserIds.includes(user._id));

  const [anchorEl, setAnchorEl] = useState(null);

  function openSelectedUserMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function closeSelectedUsersMenu() {
    setAnchorEl(null);
  }

  return (
    <React.Fragment>
      <IconButton
        className="p-0"
        aria-owns={anchorEl ? 'selectedUsersMenu' : null}
        aria-haspopup="true"
        onClick={openSelectedUserMenu}
      >
        <Icon>more_horiz</Icon>
      </IconButton>
      <Menu
        id="selectedUsersMenu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeSelectedUsersMenu}
      >
        <MenuList>
          <MenuItem>
            <ListItemIcon className="min-w-40">
              <Icon>cloud_download</Icon>
            </ListItemIcon>
            <CsvDownload
              data={userListToCsvConverter(csvSource)}
              filename="會員列表.csv"
            >
              匯出 會員名單
            </CsvDownload>
          </MenuItem>
        </MenuList>
      </Menu>
    </React.Fragment>
  );
}

export default UserListMultiSelectMenu;
