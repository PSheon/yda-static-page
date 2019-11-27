import axios from 'axios';

// import * as Actions from 'app/store/actions';
import { AUTH_REST_BASE_END_POINT } from 'app/fuse-configs/envsConfig';
export const SET_AGE_PERIOD_STASTIC_LOADING =
  '[ADMIN DASHBOARD] SET AGE PERIOD STASTIC LOADING';
export const SYNC_DASHBOARD_AGE_PERIOD_STASTIC =
  '[ADMIN DASHBOARD] SYNC ADMIN DASHBOARD AGE PERIOD STASTIC';

/* Age Period StatisticChart */
export function syncAdminDashboardAgePeriodStatistic() {
  const request = axios.post(
    `${AUTH_REST_BASE_END_POINT}/api/statistic/agePeriodStastic`
  );
  return dispatch => {
    dispatch({ type: SET_AGE_PERIOD_STASTIC_LOADING });
    request.then(response => {
      dispatch({
        type: SYNC_DASHBOARD_AGE_PERIOD_STASTIC,
        payload: response.data
      });
    });
  };
}
