import axios from 'axios';

// import * as Actions from 'app/store/actions';
import { AUTH_REST_BASE_END_POINT } from 'app/fuse-configs/envsConfig';
export const SET_REGISTERED_USER_LOADING =
  '[ADMIN DASHBOARD] SET REGISTERED USER LOADING';
export const SYNC_DASHBOARD_REGISTERED_USER =
  '[ADMIN DASHBOARD] SYNC ADMIN DASHBOARD REGISTERED USER';

export function syncAdminDashboardNewRegisteredUser() {
  const request = axios.post(
    `${AUTH_REST_BASE_END_POINT}/api/statistic/newUserNumberPerMonth`
  );
  return dispatch => {
    dispatch({ type: SET_REGISTERED_USER_LOADING });
    request.then(response => {
      dispatch({
        type: SYNC_DASHBOARD_REGISTERED_USER,
        payload: {
          registeredUserData: response.data
        }
      });
    });
  };
}
