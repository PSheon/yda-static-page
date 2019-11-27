import axios from 'axios';

import * as Actions from 'app/store/actions';
import { AUTH_REST_BASE_END_POINT } from 'app/fuse-configs/envsConfig';
export const SET_ACTIVITY_LOGS_BY_USER_ID =
  '[USER LIST] SET USER ACTIVITY LOGS BY USER ID';
export const SET_USER_LIST_LOADING = '[USER LIST] SET USER LIST LOADING';
export const GET_USER_LIST = '[USER LIST] GET USER LIST';
export const UPDATE_USER_LIST = '[USER LIST] UPDATE USER LIST';
export const SET_SEARCH_TEXT = '[USER LIST] SET SEARCH TEXT';
export const TOGGLE_IN_SELECTED_USERS = '[USER LIST] TOGGLE IN SELECTED USERS';
export const SELECT_ALL_USERS = '[USER LIST] SELECT ALL USERS';
export const DESELECT_ALL_USERS = '[USER LIST] DESELECT ALL USERS';
export const OPEN_USER_INFO_DIALOG = '[USER LIST] OPEN USER INFO DIALOG';
export const CLOSE_USER_INFO_DIALOG = '[USER LIST] CLOSE USER INFO DIALOG';
export const UPDATE_USER_PERMISSION = '[USER LIST] UPDATE USER PERMISSION';
export const UPDATE_USER_ACTIVE = '[USER LIST] UPDATE USER ACTIVE';
export const TOGGLE_FILTER_PANEL = '[USER LIST] TOGGLE FILTER PANEL';

export function getUserList(routeParams) {
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

  return dispatch => {
    dispatch({ type: SET_USER_LIST_LOADING });
    request.then(response => {
      dispatch({
        type: GET_USER_LIST,
        payload: {
          users: response.data.docs,
          routeParams,
          totalPages: response.data.totalPages,
          totalUsers: response.data.totalDocs
        }
      });
    });
  };
}

export function updateUserListWithPageIndex(routeParams) {
  const request = axios.get(`${AUTH_REST_BASE_END_POINT}/api/user`, {
    params: routeParams
  });

  return dispatch => {
    dispatch({ type: SET_USER_LIST_LOADING });
    request.then(response =>
      dispatch({
        type: UPDATE_USER_LIST,
        payload: {
          users: response.data.docs,
          routeParams: {
            ...routeParams,
            page: routeParams.page
          },
          totalPages: response.data.totalPages
        }
      })
    );
  };
}

export function setSearchText(searchText) {
  return dispatch => {
    dispatch({
      type: SET_SEARCH_TEXT,
      payload: {
        searchText
      }
    });
  };
}

export function toggleInSelectedUsers(userId) {
  return {
    type: TOGGLE_IN_SELECTED_USERS,
    payload: {
      userId
    }
  };
}

export function selectAllUsers() {
  return {
    type: SELECT_ALL_USERS
  };
}

export function deSelectAllUsers() {
  return {
    type: DESELECT_ALL_USERS
  };
}

export function openUserInfoDialog(data) {
  return {
    type: OPEN_USER_INFO_DIALOG,
    payload: {
      data
    }
  };
}

export function closeUserInfoDialog() {
  return {
    type: CLOSE_USER_INFO_DIALOG
  };
}

export function syncActivityLogsByUserId(userId) {
  const request = axios.get(
    `${AUTH_REST_BASE_END_POINT}/api/activityLog/user/${userId}`
  );

  return dispatch => {
    dispatch({ type: SET_USER_LIST_LOADING });
    request.then(response => {
      dispatch({
        type: SET_ACTIVITY_LOGS_BY_USER_ID,
        payload: {
          userId,
          activityLogs: response.data
        }
      });
    });
  };
}

export function updateUserPermission({ userId, email, role }) {
  return (dispatch, getState) => {
    const request = axios.patch(
      `${AUTH_REST_BASE_END_POINT}/api/user/permission/${userId}`,
      {
        email,
        role
      }
    );

    dispatch({ type: SET_USER_LIST_LOADING });

    return request.then(response =>
      /* NOTE */
      // Promise.all([
      //   dispatch({
      //     type: UPDATE_USER_PERMISSION,
      //     payload: {
      //       userId,
      //       role
      //     }
      //   })
      // ]).then(() => dispatch(getUserList(routeParams)))
      dispatch({
        type: UPDATE_USER_PERMISSION,
        payload: {
          userId,
          role
        }
      })
    );
  };
}

export function toggleUserActivation({ userId, email, active }) {
  return (dispatch, getState) => {
    const request = axios.patch(
      `${AUTH_REST_BASE_END_POINT}/api/user/activation/${userId}`,
      {
        email,
        active
      }
    );

    dispatch({ type: SET_USER_LIST_LOADING });

    return request.then(response => {
      /* NOTE */
      // Promise.all([
      //   dispatch({
      //     type: UPDATE_USER_ACTIVE
      //   }),
      //   dispatch({
      //     type: Actions.CLOSE_DIALOG
      //   })
      // ]).then(() => dispatch(getUserList(routeParams)))
      dispatch({
        type: UPDATE_USER_ACTIVE,
        payload: {
          userId,
          activeAction: active
        }
      });
      dispatch({
        type: Actions.CLOSE_DIALOG
      });
    });
  };
}

export function deactiveUsers(userIds) {
  return (dispatch, getState) => {
    const { routeParams } = getState().userList;

    const request = axios.post('/api/contacts-app/remove-contacts', {
      userIds
    });

    dispatch({ type: SET_USER_LIST_LOADING });

    return request.then(response =>
      Promise.all([
        dispatch({
          type: DESELECT_ALL_USERS
        })
      ]).then(() => dispatch(getUserList(routeParams)))
    );
  };
}

export function toggleFilterPanel() {
  return {
    type: TOGGLE_FILTER_PANEL
  };
}
