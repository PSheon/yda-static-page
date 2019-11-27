// import _ from 'lodash';

import * as Actions from 'app/store/actions/homePage';

const initialState = {
  loading: false,
  docs: [],
  hasNextPage: true,
  hasPrevPage: false,
  limit: 20,
  nextPage: 2,
  page: 1,
  pagingCounter: 1,
  prevPage: null,
  totalDocs: 1,
  totalPages: 1,
  selectedItemId: 0
};

const news = function(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_NEWS_LIST_LOADING: {
      return {
        ...state,
        loading: true
      };
    }

    case Actions.SYNC_HOMEPAGE_NEWS: {
      return {
        ...state,
        loading: false,
        ...action.payload
      };
    }
    case Actions.APPEND_NEWS_TO_HOMEPAGE_NEWS_LIST: {
      return {
        ...state,
        loading: false,
        docs: [action.payload.newsDetail, ...state.docs]
      };
    }
    case Actions.REMOVE_NEWS_FROM_LIST: {
      const { newsId } = action.payload;
      const newDocs = state.docs.filter(doc => doc._id !== newsId);

      return {
        ...state,
        loading: false,
        docs: newDocs
      };
    }
    case Actions.APPEND_NEXT_PAGE_NEWS_LIST: {
      const { docs, hasNextPage, nextPage } = action.payload;
      return {
        ...state,
        loading: false,
        docs: [...state.docs, ...docs],
        hasNextPage,
        nextPage
      };
    }
    default: {
      return state;
    }
  }
};

export default news;
