import axios from 'axios';
import history from '@history';

import { AUTH_REST_BASE_END_POINT } from 'app/fuse-configs/envsConfig';
import * as Actions from 'app/store/actions';
import eventBusService from 'app/services/eventBusService';

export const SET_HOMEPAGE_CAROUSELS_LOADING =
  '[HOMEPAGE] SET CAROUSELS LOADING';
export const SYNC_HOMEPAGE_CAROUSELS = '[HOMEPAGE] SYNC CAROUSELS';
export const APPEND_CAROUSEL_TO_HOMEPAGE_CAROUSELS =
  '[HOMEPAGE] APPEND CAROUSEL TO CAROUSELS';
export const REMOVE_CAROUSEL_FROM_CAROUSELS =
  '[HOMEPAGE] REMOVE CAROUSEL FROM CAROUSELS';

export function syncHomePageCarousels() {
  const request = axios.get(`${AUTH_REST_BASE_END_POINT}/api/carousel`);
  return dispatch => {
    dispatch({ type: SET_HOMEPAGE_CAROUSELS_LOADING });
    request.then(response =>
      dispatch({
        type: SYNC_HOMEPAGE_CAROUSELS,
        payload: response.data
      })
    );
  };
}

export function saveCarousel(carouselDetail) {
  return dispatch => {
    dispatch({ type: SET_HOMEPAGE_CAROUSELS_LOADING });
    eventBusService.createOrUpdateCarousel(carouselDetail).then(payload => {
      dispatch({
        type: APPEND_CAROUSEL_TO_HOMEPAGE_CAROUSELS,
        payload: { carouselDetail: payload }
      });
      dispatch(Actions.showMessage({ message: '圖片已更新' }));

      history.push({
        pathname: '/staff/carousels-list'
      });
    });
  };
}

export function deleteCarousel(carouselId) {
  return dispatch => {
    dispatch({ type: SET_HOMEPAGE_CAROUSELS_LOADING });
    eventBusService.deleteCarousel(carouselId).then(payload => {
      dispatch({
        type: REMOVE_CAROUSEL_FROM_CAROUSELS,
        payload: { carouselId }
      });
      dispatch(Actions.showMessage({ message: '圖片已刪除' }));

      history.push({
        pathname: '/staff/carousels-list'
      });
    });
  };
}
