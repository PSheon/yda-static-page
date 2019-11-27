import _ from 'lodash';
import * as Actions from 'app/store/actions/uploads';
// import { reduceState } from 'app/utils'

const initialState = {
  docs: [],
  hasNextPage: true,
  hasPrevPage: false,
  limit: 20,
  nextPage: 2,
  page: 1,
  pagingCounter: 1,
  prevPage: null,
  totalDocs: 1,
  totalPages: 1,
  selectedItemId: 0
};

const document = function (state = initialState, action) {
  switch (action.type) {
    case Actions.SYNC_UPLOADED_DOCUMENTS_LIST: {
      return { ...state, ...action.payload };
    }

    case Actions.ADD_DOCUMENT_TO_UPLOADED_DOCUMENTS_LIST: {
      return {
        ...state,
        docs: [
          action.payload,
          ...state.docs,
        ]
      };
    }

    case Actions.APPEND_NEXT_PAGE_UPLOADED_DOCUMENTS_LIST: {
      const { docs, hasNextPage, nextPage } = action.payload;
      return {
        ...state,
        docs: [
          ...state.docs,
          ...docs
        ],
        hasNextPage,
        nextPage
      };
    }

    case Actions.SET_SELECTED_DOCUMENT_ID: {
      const { documentId } = action.payload;
      return {
        ...state,
        selectedItemId: documentId
      };
    }

    case Actions.DELETE_DOCUMENT_BY_ID: {
      const { documentId } = action.payload;
      return {
        ...state,
        docs: _.remove(state.docs, documentItem => documentItem._id !== documentId)
      };
    }

    default:
      {
        return state;
      }
  }
};

export default document;
