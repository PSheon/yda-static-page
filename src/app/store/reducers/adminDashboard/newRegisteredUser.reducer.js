// import _ from 'lodash';

import { registeredUsersExtracter } from 'app/utils';
import * as Actions from 'app/store/actions/adminDashboard';

const initialState = {
  loading: false,
  verified: [],
  unVerified: []
};

const newRegisteredUser = function(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_REGISTERED_USER_LOADING: {
      return {
        ...state,
        loading: true
      };
    }

    case Actions.SYNC_DASHBOARD_REGISTERED_USER: {
      const { verified, unVerified } = registeredUsersExtracter(
        action.payload.registeredUserData
      );

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

export default newRegisteredUser;
