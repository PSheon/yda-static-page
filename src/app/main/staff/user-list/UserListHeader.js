import React, { useState } from 'react';
import {
  IconButton,
  Icon,
  Input,
  Tooltip,
  Paper,
  Typography
} from '@material-ui/core';
import { useDebouncedCallback } from '@fuse/hooks';
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';
import { ThemeProvider } from '@material-ui/styles';
import { FuseAnimate } from '@fuse';
import { useDispatch, useSelector } from 'react-redux';

import * as Actions from 'app/store/actions';
import DashboardBreadcrumbs from 'app/main/shared/DashboardBreadcrumbs';
import LoadingSpinner from 'app/main/shared/LoadingSpinner';

function UserListHeader() {
  const dispatch = useDispatch();
  const searchText = useSelector(({ userList }) => userList.searchText);
  const totalUsers = useSelector(({ userList }) => userList.totalUsers);
  const mainTheme = useSelector(({ fuse }) => fuse.settings.mainTheme);

  const [localSearchText, setLocalSearchText] = useState('');
  const [islocalSearchLoading, setIsLocalSearchingLoading] = useState(false);
  const [debouncedCallback] = useDebouncedCallback(
    newSearchText => {
      setIsLocalSearchingLoading(false);
      setLocalSearchText(newSearchText);
      dispatch(Actions.setSearchText(newSearchText));
      dispatch(
        Actions.getUserList({
          filter: newSearchText,
          fields: 'displayName,email,fullName,schoolName,phone,city',
          page: 1,
          limit: 20,
          sort: 'updatedAt',
          order: -1
        })
      );
    },
    // delay in 800 ms
    800
  );

  return (
    <div className="flex flex-col justify-around flex-1 p-8 sm:p-12">
      <DashboardBreadcrumbs pageNames={['會員列表']} />
      <div className="flex flex-1 items-center justify-between p-0 sm:p-24">
        <div className="flex flex-col flex-shrink items-center sm:w-224 justify-center xs:justify-end">
          <FuseAnimate animation="transition.slideLeftIn" delay={300}>
            <Typography variant="h6" className="hidden sm:flex">
              會員列表
            </Typography>
          </FuseAnimate>
        </div>

        <div className="flex flex-1 items-center justify-left pr-8 sm:px-12">
          <ThemeProvider theme={mainTheme}>
            <FuseAnimate animation="transition.slideLeftIn" delay={300}>
              <Paper
                className="flex p-4 items-center w-full max-w-512 px-8 py-4 rounded-full"
                elevation={1}
              >
                {islocalSearchLoading ? (
                  <div className="mt-4 mr-8">
                    <LoadingSpinner width={24} height={24} />
                  </div>
                ) : (
                  <Icon className="mr-8" color="action">
                    search
                  </Icon>
                )}

                <Input
                  placeholder="搜尋會員"
                  className="flex flex-1"
                  disableUnderline
                  fullWidth
                  defaultValue={searchText || localSearchText}
                  inputProps={{
                    'aria-label': '搜尋會員'
                  }}
                  onChange={ev => {
                    setIsLocalSearchingLoading(true);
                    debouncedCallback(ev.target.value);
                  }}
                />

                <Tooltip title="依條件篩選" placement="top">
                  <IconButton
                    key="FilterList"
                    aria-label="FilterList"
                    color="inherit"
                    className="p-0"
                    onClick={() => dispatch(Actions.toggleFilterPanel())}
                  >
                    <FilterListOutlinedIcon color="action" />
                  </IconButton>
                </Tooltip>
              </Paper>
            </FuseAnimate>
          </ThemeProvider>
        </div>

        <div className="flex flex-shrink items-center justify-center xs:justify-end">
          <div className="flex items-center">
            <FuseAnimate animation="transition.slideLeftIn" delay={300}>
              <Typography className="text-11 font-600 rounded-12 text-white bg-blue px-8 py-4 sm:mr-12">
                {totalUsers + ' 位會員'}
              </Typography>
            </FuseAnimate>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserListHeader;
