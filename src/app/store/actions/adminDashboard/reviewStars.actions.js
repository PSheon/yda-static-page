import axios from 'axios';

// import * as Actions from 'app/store/actions';
import { AUTH_REST_BASE_END_POINT } from 'app/fuse-configs/envsConfig';
export const SET_REVIEW_STARS_LOADING =
  '[ADMIN DASHBOARD] SET REVIEW STARS LOADING';
export const SYNC_DASHBOARD_REVIEW_STARS =
  '[ADMIN DASHBOARD] SYNC ADMIN DASHBOARD REVIEW STARS';

export function syncAdminDashboardReviewStars() {
  const request = axios.post(
    `${AUTH_REST_BASE_END_POINT}/api/statistic/reviewStars`
  );
  return dispatch => {
    dispatch({ type: SET_REVIEW_STARS_LOADING });
    request.then(response => {
      dispatch({
        type: SYNC_DASHBOARD_REVIEW_STARS,
        payload: {
          reviewStars: response.data[0]
        }
      });
    });
  };
}
