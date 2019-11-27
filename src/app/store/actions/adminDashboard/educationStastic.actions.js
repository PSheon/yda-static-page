import axios from 'axios';

// import * as Actions from 'app/store/actions';
import { AUTH_REST_BASE_END_POINT } from 'app/fuse-configs/envsConfig';
export const SET_EDUCATION_STASTIC_LOADING =
  '[ADMIN DASHBOARD] SET EDUCATION STASTIC LOADING';
export const SYNC_DASHBOARD_EDUCATION_STASTIC =
  '[ADMIN DASHBOARD] SYNC ADMIN DASHBOARD EDUCATION STASTIC';

/* education StatisticChart */
export function syncAdminDashboardEducationStatistic() {
  const request = axios.post(
    `${AUTH_REST_BASE_END_POINT}/api/statistic/educationStastic`
  );
  return dispatch => {
    dispatch({ type: SET_EDUCATION_STASTIC_LOADING });
    request.then(response => {
      dispatch({
        type: SYNC_DASHBOARD_EDUCATION_STASTIC,
        payload: response.data
      });
    });
  };
}
