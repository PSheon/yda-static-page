// import _ from 'lodash';

import { userAgePeriodExtractor } from 'app/utils';
import * as Actions from 'app/store/actions/adminDashboard';

const initialState = {
  loading: false,
  verified: [],
  unVerified: []
};

const agePeriodStastic = function(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_AGE_PERIOD_STASTIC_LOADING: {
      return {
        ...state,
        loading: true
      };
    }

    case Actions.SYNC_DASHBOARD_AGE_PERIOD_STASTIC: {
      const { verified } = userAgePeriodExtractor(action.payload);

      return {
        ...state,
        loading: false,
        verified
      };
    }
    default: {
      return state;
    }
  }
};

export default agePeriodStastic;
