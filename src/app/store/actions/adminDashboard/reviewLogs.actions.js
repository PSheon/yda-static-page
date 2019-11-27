import axios from 'axios';

// import * as Actions from 'app/store/actions';
import { AUTH_REST_BASE_END_POINT } from 'app/fuse-configs/envsConfig';
export const SET_REVIEW_LOGS_LOADING =
  '[ADMIN DASHBOARD] SET REVIEW LOGS LOADING';
export const SYNC_DASHBOARD_REVIEW_LOGS =
  '[ADMIN DASHBOARD] SYNC ADMIN DASHBOARD REVIEW LOGS';

export function syncAdminDashboardReviewLogs() {
  const request = axios.post(
    `${AUTH_REST_BASE_END_POINT}/api/statistic/reviewLogs`
  );
  return dispatch => {
    dispatch({ type: SET_REVIEW_LOGS_LOADING });
    request.then(response => {
      dispatch({
        type: SYNC_DASHBOARD_REVIEW_LOGS,
        payload: {
          reviewLogs: response.data
        }
      });
    });
  };
}
