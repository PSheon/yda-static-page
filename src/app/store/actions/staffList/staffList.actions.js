import axios from 'axios';

import * as Actions from 'app/store/actions';
import { AUTH_REST_BASE_END_POINT } from 'app/fuse-configs/envsConfig';
export const GET_STAFF_LIST = '[STAFF LIST] GET STAFF LIST';
export const UPDATE_STAFF_LIST = '[STAFF LIST] UPDATE STAFF LIST';
export const SET_SEARCH_TEXT = '[STAFF LIST] SET SEARCH TEXT';
export const TOGGLE_IN_SELECTED_STAFFS = '[STAFF LIST] TOGGLE IN SELECTED STAFFS';
export const SELECT_ALL_STAFFS = '[STAFF LIST] SELECT ALL STAFFS';
export const DESELECT_ALL_STAFFS = '[STAFF LIST] DESELECT ALL STAFFS';
export const OPEN_STAFF_INFO_DIALOG = '[STAFF LIST] OPEN STAFF INFO DIALOG';
export const CLOSE_STAFF_INFO_DIALOG = '[STAFF LIST] CLOSE STAFF INFO DIALOG';
export const UPDATE_STAFF_PERMISSION = '[STAFF LIST] UPDATE STAFF PERMISSION';
export const UPDATE_STAFF_ACTIVE = '[STAFF LIST] UPDATE STAFF ACTIVE';
// export const REMOVE_CONTACTS = '[STAFF LIST] REMOVE CONTACTS';

export function getStaffList(routeParams) {
	/* 
		routeParams
		{
			filter,
			fields,
			page,
			limit,
			sort,
			order
		}
	*/
  const request = axios.get(`${AUTH_REST_BASE_END_POINT}/api/user`, {
    params: routeParams
  });

  return (dispatch) =>
    request.then((response) =>
      dispatch({
        type: GET_STAFF_LIST,
        payload: {
          staffs: response.data.docs,
          routeParams,
          totalPages: response.data.totalPages,
          totalStaffs: response.data.totalDocs,
        },
      })
    );
}

export function updateStaffListWithPageIndex(routeParams) {
  const request = axios.get(`${AUTH_REST_BASE_END_POINT}/api/user`, {
    params: routeParams
  });

  return (dispatch) =>
    request.then((response) =>
      dispatch({
        type: UPDATE_STAFF_LIST,
        payload: {
          staffs: response.data.docs,
          routeParams: {
            ...routeParams,
            page: routeParams.page - 1,
          },
          totalPages: response.data.totalPages,
        },
      })
    );
}

export function setSearchText(event) {
  return {
    type: SET_SEARCH_TEXT,
    payload: {
      searchText: event.target.value
    }
  }
}

export function toggleInSelectedStaffs(staffId) {
  return {
    type: TOGGLE_IN_SELECTED_STAFFS,
    payload: {
      staffId
    }
  }
}

export function selectAllStaffs() {
  return {
    type: SELECT_ALL_STAFFS
  }
}

export function deSelectAllStaffs() {
  return {
    type: DESELECT_ALL_STAFFS
  }
}

export function openStaffInfoDialog(data) {
  return {
    type: OPEN_STAFF_INFO_DIALOG,
    payload: {
      data
    }
  }
}

export function closeStaffInfoDialog() {
  return {
    type: CLOSE_STAFF_INFO_DIALOG
  }
}

export function updateStaffPermission({ staffId, email, role }) {
  return (dispatch, getState) => {

    const { routeParams } = getState().staffList;

    const request = axios.patch(`${AUTH_REST_BASE_END_POINT}/api/user/permission/${staffId}`, {
      email,
      role
    });

    return request.then((response) =>
      Promise.all([
        dispatch({
          type: UPDATE_STAFF_PERMISSION
        })
      ]).then(() => dispatch(getStaffList(routeParams)))
    );
  };
}

export function toggleStaffActivation({ staffId, email, active }) {
  return (dispatch, getState) => {

    const { routeParams } = getState().staffList;

    const request = axios.patch(`${AUTH_REST_BASE_END_POINT}/api/user/activation/${staffId}`, {
      email,
      active
    });

    return request.then((response) =>
      Promise.all([
        dispatch({
          type: UPDATE_STAFF_ACTIVE
        }),
        dispatch({
          type: Actions.CLOSE_DIALOG
        })
      ]).then(() => dispatch(getStaffList(routeParams)))
    );
  };
}

export function deactiveStaffs(staffIds) {
  return (dispatch, getState) => {

    const { routeParams } = getState().staffList;

    const request = axios.post('/api/contacts-app/remove-contacts', {
      staffIds
    });

    return request.then((response) =>
      Promise.all([
        dispatch({
          type: DESELECT_ALL_STAFFS
        }),
        dispatch({
          type: DESELECT_ALL_STAFFS
        })
      ]).then(() => dispatch(getStaffList(routeParams)))
    );
  };
}
