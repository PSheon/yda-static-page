import React, { useEffect, useCallback } from 'react';
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Icon,
  IconButton,
  MenuItem,
  Typography,
  Toolbar,
  AppBar,
  Avatar
} from '@material-ui/core';
import { useForm } from '@fuse/hooks';
import { withStyles } from '@material-ui/core/styles';
import * as Actions from 'app/store/actions';
import { useDispatch, useSelector } from 'react-redux';

const defaultFormState = {
  id: '',
  role: 'staff',
  displayName: '',
  email: '',
  photoURL: 'assets/images/avatars/profile.jpg',
  verified: false,
  google: '',
  facebook: ''
};
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#ffffff'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fefefe'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fefefe'
      },
      '&:hover fieldset': {
        borderColor: '#ffffff'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ffffff'
      }
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: '2.4rem'
    }
  }
})(TextField);

function StaffListDialog(props) {
  const dispatch = useDispatch();
  const staffInfoDialog = useSelector(
    ({ staffList }) => staffList.staffInfoDialog
  );

  const { form, handleChange, setForm } = useForm(defaultFormState);

  const initDialog = useCallback(() => {
    setForm(staffInfoDialog.data);
  }, [staffInfoDialog.data, setForm]);

  useEffect(() => {
    /**
     * After Dialog Open
     */
    if (staffInfoDialog.props.open) {
      initDialog();
    }
  }, [staffInfoDialog.props.open, initDialog]);

  function closeComposeDialog() {
    // staffInfoDialog.type === 'edit' ? dispatch(Actions.closeEditstaffInfoDialog()) : dispatch(Actions.closeNewstaffInfoDialog());
    dispatch(Actions.closeStaffInfoDialog());
  }

  function canBeSubmitted() {
    return form.displayName.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const { id, email, role } = form;
    dispatch(Actions.updateStaffPermission({ staffId: id, email, role }));

    closeComposeDialog();
  }

  function handleToggleActivation() {
    const { id, email, active } = form;
    dispatch(
      Actions.toggleStaffActivation({ staffId: id, email, active: !active })
    );
    closeComposeDialog();
  }

  return (
    <Dialog
      classes={{
        paper: 'm-24'
      }}
      {...staffInfoDialog.props}
      onClose={closeComposeDialog}
      fullWidth
      maxWidth="xs"
    >
      <AppBar position="static" elevation={1}>
        <Toolbar className="flex w-full">
          <Typography variant="subtitle1" color="inherit">
            員工資料
          </Typography>
        </Toolbar>
        <div className="flex flex-col items-center justify-center pb-24">
          <Avatar
            className="w-96 h-96"
            alt="staff avatar"
            src={form.photoURL}
          />
          <Typography variant="h6" color="inherit" className="pt-8">
            {form.displayName}
          </Typography>
        </div>
      </AppBar>
      <form
        noValidate
        onSubmit={handleSubmit}
        className="flex flex-col md:overflow-hidden"
      >
        <DialogContent classes={{ root: 'p-24' }}>
          <Typography
            variant="h6"
            color="inherit"
            className="pb-24 text-center"
          >
            {form.id}
          </Typography>

          <div className="flex">
            <div className="min-w-36 pt-20">
              <Icon color="action">account_circle</Icon>
            </div>

            <CssTextField
              className="mb-24"
              label="名稱"
              autoFocus
              id="displayName"
              name="displayName"
              value={form.displayName}
              // onChange={handleChange}
              variant="outlined"
              required
              InputProps={{
                readOnly: true
              }}
              fullWidth
            />
          </div>

          <div className="flex">
            <div className="min-w-36 pt-20">
              <Icon color="action">mail</Icon>
            </div>
            <CssTextField
              className="mb-24"
              label="信箱"
              id="email"
              name="email"
              value={form.email}
              // onChange={handleChange}
              variant="outlined"
              InputProps={{
                readOnly: true
              }}
              fullWidth
            />
          </div>

          <div className="flex">
            <div className="min-w-36 pt-20">
              <Icon color="action">group</Icon>
            </div>
            <CssTextField
              select
              className="mb-24"
              label="權限"
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            >
              <MenuItem className="rounded-full" value="user">
                會員
              </MenuItem>
              <MenuItem className="rounded-full" value="staff">
                員工
              </MenuItem>
            </CssTextField>
          </div>
        </DialogContent>

        <DialogActions className="justify-between pl-16">
          <IconButton onClick={handleToggleActivation}>
            {form.active ? (
              <Icon className="text-green">lock_open</Icon>
            ) : (
              <Icon className="text-red">lock</Icon>
            )}
          </IconButton>
          <Button
            className="rounded-full"
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
            disabled={!canBeSubmitted()}
          >
            變更
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default StaffListDialog;
