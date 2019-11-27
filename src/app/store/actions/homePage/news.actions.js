import axios from 'axios';
import history from '@history';

import { AUTH_REST_BASE_END_POINT } from 'app/fuse-configs/envsConfig';
import * as Actions from 'app/store/actions';
import eventBusService from 'app/services/eventBusService';

export const SET_NEWS_LIST_LOADING = '[HOMEPAGE] SET NEWS LIST LOADING';
export const SYNC_HOMEPAGE_NEWS = '[HOMEPAGE] SYNC NEWS';
export const APPEND_NEWS_TO_HOMEPAGE_NEWS_LIST =
  '[HOMEPAGE] APPEND NEWS TO NEWS LIST';
export const APPEND_NEXT_PAGE_NEWS_LIST = '[HOMEPAGE] APPEND NEXT PAGE NEWS';
export const REMOVE_NEWS_FROM_LIST = '[HOMEPAGE] REMOVE NEWS FROM LIST';

export function syncHomePageNews() {
  return dispatch => {
    dispatch({ type: SET_NEWS_LIST_LOADING });
    eventBusService.getHomePageNews().then(response => {
      if (response.docs.length) {
        dispatch({
          type: SYNC_HOMEPAGE_NEWS,
          payload: response
        });
      }
    });
  };
}
export function syncHomePageNewsById(newsId) {
  const request = axios.get(`${AUTH_REST_BASE_END_POINT}/api/news/${newsId}`);
  return dispatch => {
    dispatch({ type: SET_NEWS_LIST_LOADING });
    request
      .then(response => {
        dispatch({
          type: APPEND_NEWS_TO_HOMEPAGE_NEWS_LIST,
          payload: { newsDetail: response.data }
        });
      })
      .catch(err => {
        history.push({
          pathname: '/news-list'
        });
      });
  };
}

export function saveNews(newsDetail) {
  return dispatch => {
    dispatch({ type: SET_NEWS_LIST_LOADING });
    eventBusService.createOrUpdateNews(newsDetail).then(payload => {
      dispatch({
        type: APPEND_NEWS_TO_HOMEPAGE_NEWS_LIST,
        payload: { newsDetail: payload }
      });
      dispatch(Actions.showMessage({ message: '新聞已更新' }));

      history.push({
        pathname: '/staff/news-list'
      });
    });
  };
}

export function deleteNews(newsId) {
  return dispatch => {
    dispatch({ type: SET_NEWS_LIST_LOADING });
    eventBusService.deleteNews(newsId).then(payload => {
      dispatch({
        type: REMOVE_NEWS_FROM_LIST,
        payload: { newsId }
      });
      dispatch(Actions.showMessage({ message: '新聞已刪除' }));

      history.push({
        pathname: '/staff/news-list'
      });
    });
  };
}
