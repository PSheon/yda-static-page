import React, { useState } from 'react';
import {
  Button,
  Drawer,
  Typography,
  Divider,
  TextField,
  MenuItem
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { FuseScrollbars } from '@fuse';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import fileDownload from 'js-file-download';
import InputAdornment from '@material-ui/core/InputAdornment';
import WcIcon from '@material-ui/icons/Wc';
import SchoolIcon from '@material-ui/icons/School';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

import * as Actions from 'app/store/actions';
import { AUTH_REST_BASE_END_POINT } from 'app/fuse-configs/envsConfig';
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
      '& fieldset': {
        borderColor: '#5e5e5e'
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
    width: 280
    // borderRadius: '1.2rem 0 0 1.2rem'
  },
  headerWrapper: {
    background:
      'linear-gradient(to bottom, ' +
      theme.palette.primary.dark +
      ' 0%, ' +
      theme.palette.primary.main +
      ' 90%, ' +
      theme.palette.background.default +
      ' 100%)'
  }
}));
function UserListFilterPanel() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const PANEL_OPEN_STATUS = useSelector(
    ({ userList }) => userList.filterPanel.open
  );

  const [filterGender, setFilterGender] = useState('所有性別');
  const [filterEducation, setFilterEducation] = useState('所有學歷');
  const [filterDepartmentName, setFilterDepartmentName] = useState('所有學系');
  const [filterEmploymentStatus, setFilterEmploymentStatus] = useState(
    '所有身分'
  );
  const [isExporting, setIsExporting] = useState(false);

  function handleExportFullUsersList() {
    setIsExporting(true);

    axios
      .post(`${AUTH_REST_BASE_END_POINT}/api/user/csv`)
      .then(response => {
        if (response.data) {
          setIsExporting(false);
          fileDownload(response.data, 'YS-會員名單.csv');
        } else {
          setIsExporting(false);
        }
      })
      .catch(error => {
        setIsExporting(false);
      });
  }

  return (
    <Drawer
      classes={{ paper: classes.root }}
      open={PANEL_OPEN_STATUS}
      anchor="right"
      onClose={ev => dispatch(Actions.toggleFilterPanel())}
    >
      <FuseScrollbars>
        <div
          className={clsx(
            classes.headerWrapper,
            'flex justify-center items-center w-full h-224'
          )}
        >
          <Typography variant="subtitle1" className="text-white">
            設定會員篩選條件
          </Typography>
        </div>
        <Divider />
        <div className="flex flex-col justify-center item-center w-full px-12">
          <div className="flex justify-center items-center py-12">
            <Button
              onClick={handleExportFullUsersList}
              variant="contained"
              color="secondary"
              className="rounded-full"
              disabled={isExporting}
              aria-label="匯出 所有會員名單"
            >
              {isExporting ? '匯出名單中 ' : '匯出 所有會員名單'}
              {isExporting && <LoadingSpinner width={32} height={32} />}
            </Button>
          </div>

          <Divider className="bg-gray-300" />

          <div className="flex flex-col justify-center items-center pt-24 px-4">
            {/* 性別-篩選 */}
            <CssTextField
              select
              className="mb-24"
              label="篩選性別"
              id="gender"
              name="gender"
              value={filterGender}
              onChange={event => setFilterGender(event.target.value)}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <WcIcon className="text-amber-600" />
                  </InputAdornment>
                )
              }}
              fullWidth
            >
              <MenuItem value="所有性別">所有性別</MenuItem>
              <MenuItem value="男性">男性</MenuItem>
              <MenuItem value="多元性別">多元性別</MenuItem>
              <MenuItem value="女性">女性</MenuItem>
            </CssTextField>

            {/* 最高學歷-篩選 */}
            <CssTextField
              select
              className="mb-24"
              label="最高學歷"
              id="education"
              name="education"
              value={filterEducation}
              onChange={event => setFilterEducation(event.target.value)}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SchoolIcon className="text-amber-600" />
                  </InputAdornment>
                )
              }}
              fullWidth
            >
              <MenuItem value="所有學歷">所有學歷</MenuItem>
              <MenuItem value="middle">國中</MenuItem>
              <MenuItem value="high">高中</MenuItem>
              <MenuItem value="vocational">高職</MenuItem>
              <MenuItem value="faculty">專科</MenuItem>
              <MenuItem value="bachelor">大學(包含四技、二技)</MenuItem>
              <MenuItem value="institute">研究所</MenuItem>
              <MenuItem value="other">其他</MenuItem>
            </CssTextField>

            {/* 科系類別-篩選 */}
            <CssTextField
              select
              className="mb-24"
              label="科系類別"
              id="departmentName"
              name="departmentName"
              value={filterDepartmentName}
              onChange={event => setFilterDepartmentName(event.target.value)}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountBalanceIcon className="text-amber-600" />
                  </InputAdornment>
                )
              }}
              fullWidth
            >
              <MenuItem value="所有學系">所有學系</MenuItem>
              <MenuItem value="Education / Public Administration">
                教育/公共行政
              </MenuItem>
              <MenuItem value="Art / Humanities / Language">
                藝術/人文/語文
              </MenuItem>
              <MenuItem value="Social and Behavioral Science/Social Welfare/News and Book Information">
                社會及行為科學/社會福利/新聞及圖書資訊
              </MenuItem>
              <MenuItem value="Catering / Transportation / People Livelihood Services">
                餐飲/運輸/民生服務
              </MenuItem>
              <MenuItem value="business Administration">商業/管理</MenuItem>
              <MenuItem value="legal">法律</MenuItem>
              <MenuItem value="Life Science / Environment / Physical Chemistry / Earth Science">
                生命科學/環境/物理化學/地球科學
              </MenuItem>
              <MenuItem value="Mathematics / statistics">數學/統計</MenuItem>
              <MenuItem value="Information / Communication / Technology">
                資訊/通訊/科技
              </MenuItem>
              <MenuItem value="Engineering / Manufacturing / Construction / Construction">
                工程/製造/建築/營建
              </MenuItem>
              <MenuItem value="Medical / Health / Occupational Health Services">
                醫藥/衛生/職業衛生服務學門
              </MenuItem>
              <MenuItem value="Agriculture / Forestry / Fishing / Veterinary">
                農/林/漁/獸醫
              </MenuItem>
              <MenuItem value="other">其他</MenuItem>
            </CssTextField>

            {/* 目前身分-篩選 */}
            <CssTextField
              select
              className="mb-24"
              label="目前身分"
              id="employmentStatus"
              name="employmentStatus"
              value={filterEmploymentStatus}
              onChange={event => setFilterEmploymentStatus(event.target.value)}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <WorkOutlineIcon className="text-amber-600" />
                  </InputAdornment>
                )
              }}
              fullWidth
            >
              <MenuItem value="所有身分">所有身分</MenuItem>
              <MenuItem value="student">在學中</MenuItem>
              <MenuItem value="employed">在職中</MenuItem>
              <MenuItem value="unemployed">待業中</MenuItem>
              <MenuItem value="other">其他</MenuItem>
            </CssTextField>
          </div>

          <Divider className="bg-gray-300" />

          <div className="flex justify-center items-center pt-24">
            <Button
              disabled
              // onClick={handleExportFullUsersList}
              variant="contained"
              color="secondary"
              className="rounded-full"
              // disabled={isExporting}
              aria-label="篩選 會員名單"
            >
              篩選 會員名單
            </Button>
          </div>
        </div>
      </FuseScrollbars>
    </Drawer>
  );
}

export default UserListFilterPanel;
