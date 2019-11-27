// import _ from 'lodash';

import { userGenderExtractor } from 'app/utils';
import * as Actions from 'app/store/actions/adminDashboard';

const initialState = {
  loading: false,
  verified: [],
  unVerified: []
};

const genderStastic = function(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_GENDER_STASTIC_LOADING: {
      return {
        ...state,
        loading: true
      };
    }

    case Actions.SYNC_DASHBOARD_GENDER_STASTIC: {
      const { verified, unVerified } = userGenderExtractor(action.payload);

      return {
        ...state,
        loading: false,
        verified,
        unVerified
      };
    }
    default: {
      return state;
    }
  }
};

export default genderStastic;
