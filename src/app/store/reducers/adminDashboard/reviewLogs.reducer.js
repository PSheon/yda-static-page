// import _ from 'lodash';

import * as Actions from 'app/store/actions/adminDashboard';

const initialState = {
  loading: false,
  docs: []
};

const reviewLogs = function(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_REVIEW_LOGS_LOADING: {
      return {
        ...state,
        loading: true
      };
    }

    case Actions.SYNC_DASHBOARD_REVIEW_LOGS: {
      const { reviewLogs } = action.payload;

      return {
        ...state,
        loading: false,
        docs: reviewLogs
      };
    }
    default: {
      return state;
    }
  }
};

export default reviewLogs;
