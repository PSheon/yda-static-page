// import _ from 'lodash';

import * as Actions from 'app/store/actions/homePage';

const initialState = {
  loading: false,
  docs: [],
  selectedItemId: ''
};

const carousels = function(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_HOMEPAGE_CAROUSELS_LOADING: {
      return {
        ...state,
        loading: true
      };
    }

    case Actions.SYNC_HOMEPAGE_CAROUSELS: {
      return {
        ...state,
        loading: false,
        docs: [...action.payload]
      };
    }
    case Actions.APPEND_CAROUSEL_TO_HOMEPAGE_CAROUSELS: {
      return {
        ...state,
        docs: [action.payload.carouselDetail, ...state.docs]
      };
    }
    case Actions.REMOVE_CAROUSEL_FROM_CAROUSELS: {
      const { carouselId } = action.payload;
      const newDocs = state.docs.filter(doc => doc._id !== carouselId);

      return {
        ...state,
        loading: false,
        docs: newDocs
      };
    }
    default: {
      return state;
    }
  }
};

export default carousels;
