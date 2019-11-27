import axios from 'axios';

// import * as Actions from 'app/store/actions';
import { AUTH_REST_BASE_END_POINT } from 'app/fuse-configs/envsConfig';
export const SET_HEARD_FROM_STASTIC_LOADING =
  '[ADMIN DASHBOARD] SET HEARD FROM STASTIC LOADING';
export const SYNC_DASHBOARD_HEARD_FROM_STASTIC =
  '[ADMIN DASHBOARD] SYNC ADMIN DASHBOARD HEARD FROM STASTIC';

/* Heard From StatisticChart */
export function syncAdminDashboardHeardFromStatistic() {
  const request = axios.post(
    `${AUTH_REST_BASE_END_POINT}/api/statistic/heardFromStastic`
  );
  return dispatch => {
    dispatch({ type: SET_HEARD_FROM_STASTIC_LOADING });
    request.then(response => {
      dispatch({
        type: SYNC_DASHBOARD_HEARD_FROM_STASTIC,
        payload: response.data
      });
    });
  };
}
