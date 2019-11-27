// import _ from 'lodash';

import * as Actions from 'app/store/actions/adminDashboard';

const initialState = {
  loading: false,
  eventStars: 0,
  speakerContentStars: 0,
  speakerExpressionStars: 0
};

const reviewStars = function(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_REVIEW_STARS_LOADING: {
      return {
        ...state,
        loading: true
      };
    }

    case Actions.SYNC_DASHBOARD_REVIEW_STARS: {
      /* eslint-disable */
      const {
        eventStarsAvg,
        speakerContentStarsAvg,
        speakerExpressionStarsAvg,
        speakerStarsAvg
      } = action.payload.reviewStars;
      /* eslint-enable */

      return {
        ...state,
        loading: false,
        eventStars: eventStarsAvg.toFixed(1),
        speakerContentStars: speakerContentStarsAvg.toFixed(1),
        speakerExpressionStars: speakerExpressionStarsAvg.toFixed(1)
      };
    }
    default: {
      return state;
    }
  }
};

export default reviewStars;
