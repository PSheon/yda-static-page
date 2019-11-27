import * as Actions from '../../actions/fuse/index';
import DEFAULT_SECTION, {
  // HOME_SECTION,
  // ADMIN_SECTION,
  STAFF_SECTION
  // USER_DASHBOARD_SECTION
} from 'app/fuse-configs/navigationConfig';

/* Guest Navigation View */
const initialState = DEFAULT_SECTION;

const navigation = function(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_NAVIGATION: {
      return [...state];
    }
    case Actions.SET_NAVIGATION: {
      return [...action.navigation];
    }
    /* Guest Navigation View */
    case Actions.RESET_NAVIGATION: {
      return [...initialState];
    }
    /* Admin Navigation View */
    case Actions.SET_NAVIGATION_ADMIN: {
      // return [
      // 	ADMIN_SECTION,
      // 	STAFF_SECTION,
      // 	USER_DASHBOARD_SECTION,
      // 	HOME_SECTION,
      // ];
      return [
        // ADMIN_SECTION,
        STAFF_SECTION,
        ...state
        // USER_DASHBOARD_SECTION
      ];
    }
    /* Staff Navigation View */
    case Actions.SET_NAVIGATION_STAFF: {
      return [STAFF_SECTION, ...state];
    }
    /* User Navigation View */
    case Actions.SET_NAVIGATION_USER: {
      return [...state];
    }
    default: {
      return state;
    }
  }
};

export default navigation;
