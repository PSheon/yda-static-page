import axios from 'axios';

// import * as Actions from 'app/store/actions';
import { AUTH_REST_BASE_END_POINT } from 'app/fuse-configs/envsConfig';
export const SET_GENDER_STASTIC_LOADING =
  '[ADMIN DASHBOARD] SET GENDER STASTIC LOADING';
export const SYNC_DASHBOARD_GENDER_STASTIC =
  '[ADMIN DASHBOARD] SYNC ADMIN DASHBOARD GENDER STASTIC';

/* Gender StatisticChart */
export function syncAdminDashboardGenderStatistic() {
  const request = axios.post(
    `${AUTH_REST_BASE_END_POINT}/api/statistic/genderStastic`
  );
  return dispatch => {
    dispatch({ type: SET_GENDER_STASTIC_LOADING });
    request.then(response => {
      dispatch({
        type: SYNC_DASHBOARD_GENDER_STASTIC,
        payload: response.data
      });
    });
  };
}
