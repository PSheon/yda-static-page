// import _ from 'lodash';

import { userEducationExtractor } from 'app/utils';
import * as Actions from 'app/store/actions/adminDashboard';

const initialState = {
  loading: false,
  verified: [],
  unVerified: []
};

const educationStastic = function(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_EDUCATION_STASTIC_LOADING: {
      return {
        ...state,
        loading: true
      };
    }

    case Actions.SYNC_DASHBOARD_EDUCATION_STASTIC: {
      const { verified } = userEducationExtractor(action.payload);

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

export default educationStastic;
