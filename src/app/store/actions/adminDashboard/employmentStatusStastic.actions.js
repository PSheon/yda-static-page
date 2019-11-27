import axios from 'axios';

// import * as Actions from 'app/store/actions';
import { AUTH_REST_BASE_END_POINT } from 'app/fuse-configs/envsConfig';
export const SET_EMPLOYMENT_STATUS_STASTIC_LOADING =
  '[ADMIN DASHBOARD] SET EMPLOYMENT STATUS STASTIC LOADING';
export const SYNC_DASHBOARD_EMPLOYMENT_STATUS_STASTIC =
  '[ADMIN DASHBOARD] SYNC ADMIN DASHBOARD EMPLOYMENT STATUS STASTIC';

/* Employment Status StatisticChart */
export function syncAdminDashboardEmploymentStatusStatistic() {
  const request = axios.post(
    `${AUTH_REST_BASE_END_POINT}/api/statistic/employmentStatusStastic`
  );
  return dispatch => {
    dispatch({ type: SET_EMPLOYMENT_STATUS_STASTIC_LOADING });
    request.then(response => {
      dispatch({
        type: SYNC_DASHBOARD_EMPLOYMENT_STATUS_STASTIC,
        payload: response.data
      });
    });
  };
}
