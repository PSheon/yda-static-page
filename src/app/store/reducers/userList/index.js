import * as Actions from 'app/store/actions/userList';

const initialState = {
  loading: true,
  docs: null,
  searchText: '',
  selectedUserIds: [],
  routeParams: {},
  totalPages: 1,
  totalUsers: 10,
  userInfoDialog: {
    props: {
      open: false
    },
    data: null
  },
  filterPanel: {
    open: false,
    data: ''
  }
};

const userListReducer = function(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_USER_LIST_LOADING: {
      return {
        ...state,
        loading: true
      };
    }

    case Actions.GET_USER_LIST: {
      const { users, routeParams, totalPages, totalUsers } = action.payload;

      return {
        ...state,
        loading: false,
        docs: users,
        routeParams: routeParams,
        totalPages: totalPages,
        totalUsers: totalUsers
      };
    }
    case Actions.SET_ACTIVITY_LOGS_BY_USER_ID: {
      const { userId, activityLogs } = action.payload;
      const newUserList = state.docs.map(doc => {
        if (doc._id === userId) {
          return {
            ...doc,
            activityLogs
          };
        } else {
          return doc;
        }
      });

      return {
        ...state,
        loading: false,
        docs: newUserList,
        userInfoDialog: {
          ...state.userInfoDialog,
          data: {
            ...state.userInfoDialog.data,
            activityLogs
          }
        }
      };
    }
    case Actions.UPDATE_USER_LIST: {
      /* NOTE */
      const { users, routeParams, totalPages } = action.payload;
      // const userIdSet = new Set(state.docs.map(item => item._id));
      // let tempUsersArr = [];

      // users.map(user =>
      //   !userIdSet.has(user._id) ? tempUsersArr.push(user) : null
      // );

      return {
        ...state,
        loading: false,
        docs: [...users],
        routeParams: routeParams,
        totalPages: totalPages
      };
    }
    case Actions.SET_SEARCH_TEXT: {
      const { searchText } = action.payload;
      return {
        ...state,
        searchText: searchText
      };
    }
    case Actions.TOGGLE_IN_SELECTED_USERS: {
      const { userId } = action.payload;

      let selectedUserIds = [...state.selectedUserIds];

      if (selectedUserIds.find(id => id === userId) !== undefined) {
        selectedUserIds = selectedUserIds.filter(id => id !== userId);
      } else {
        selectedUserIds = [...selectedUserIds, userId];
      }

      return {
        ...state,
        selectedUserIds: selectedUserIds
      };
    }
    case Actions.SELECT_ALL_USERS: {
      const arr = Object.keys(state.docs).map(k => state.docs[k]);

      const selectedUserIds = arr.map(user => user._id);

      return {
        ...state,
        selectedUserIds: selectedUserIds
      };
    }
    case Actions.DESELECT_ALL_USERS: {
      return {
        ...state,
        selectedUserIds: []
      };
    }
    case Actions.OPEN_USER_INFO_DIALOG: {
      return {
        ...state,
        userInfoDialog: {
          props: {
            open: true
          },
          data: action.payload.data
        }
      };
    }
    case Actions.CLOSE_USER_INFO_DIALOG: {
      return {
        ...state,
        userInfoDialog: {
          props: {
            open: false
          },
          data: null
        }
      };
    }
    case Actions.UPDATE_USER_ACTIVE: {
      const { userId, activeAction } = action.payload;
      const newdocs = state.docs.map(user => {
        if (user._id === userId) {
          return {
            ...user,
            active: activeAction
          };
        } else {
          return user;
        }
      });

      return {
        ...state,
        loading: false,
        docs: newdocs
      };
    }
    case Actions.UPDATE_USER_PERMISSION: {
      // eslint-disable-next-line
      const { userId, role } = action.payload;
      const newdocs = state.docs.filter(user => user._id !== userId);

      return {
        ...state,
        loading: false,
        docs: newdocs
      };
    }
    case Actions.TOGGLE_FILTER_PANEL: {
      return {
        ...state,
        filterPanel: {
          ...state.filterPanel,
          open: !state.filterPanel.open
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default userListReducer;
