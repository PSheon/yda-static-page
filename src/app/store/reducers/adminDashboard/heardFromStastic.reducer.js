// import _ from 'lodash';

import { userHeardFromExtractor } from 'app/utils';
import * as Actions from 'app/store/actions/adminDashboard';

const initialState = {
  loading: false,
  verified: [],
  unVerified: []
};

const heardFromStastic = function(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_HEARD_FROM_STASTIC_LOADING: {
      return {
        ...state,
        loading: true
      };
    }

    case Actions.SYNC_DASHBOARD_HEARD_FROM_STASTIC: {
      const { verified } = userHeardFromExtractor(action.payload);

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

export default heardFromStastic;
