// import _ from 'lodash';

import { userEmploymentStatusExtractor } from 'app/utils';
import * as Actions from 'app/store/actions/adminDashboard';

const initialState = {
  loading: false,
  verified: [],
  unVerified: []
};

const employmentStatusStastic = function(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_EMPLOYMENT_STATUS_STASTIC_LOADING: {
      return {
        ...state,
        loading: true
      };
    }

    case Actions.SYNC_DASHBOARD_EMPLOYMENT_STATUS_STASTIC: {
      const { verified } = userEmploymentStatusExtractor(action.payload);

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

export default employmentStatusStastic;
