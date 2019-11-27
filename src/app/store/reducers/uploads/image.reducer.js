import _ from 'lodash';
import * as Actions from 'app/store/actions/uploads';
// import { reduceState } from 'app/utils'

const initialState = {
  loading: true,
  docs: [],
  selectedImageIds: [],
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

const image = function(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_IMAGE_LIST_LOADING: {
      return {
        ...state,
        loading: true
      };
    }

    case Actions.SYNC_UPLOADED_IMAGES_LIST: {
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    }

    case Actions.ADD_IMAGE_TO_UPLOADED_IMAGES_LIST: {
      return {
        ...state,
        loading: false,
        docs: [action.payload, ...state.docs]
      };
    }

    case Actions.UPDATE_IMAGE_LIST: {
      const { data, routeParams } = action.payload;
      const imageIdSet = new Set(state.docs.map(item => item._id));
      let tempImagesArr = [];

      data.docs.map(image =>
        !imageIdSet.has(image._id) ? tempImagesArr.push(image) : null
      );

      // console.log('after state ', {
      //   ...state,
      //   ...data,
      //   docs: [
      //     ...state.docs,
      //     ...tempImagesArr,
      //   ],
      //   routeParams: {
      //     ...state.routeParams,
      //     ...routeParams
      //   },
      // })
      return {
        ...state,
        ...data,
        loading: false,
        docs: [...state.docs, ...tempImagesArr],
        routeParams: {
          ...state.routeParams,
          ...routeParams
        }
      };
    }

    case Actions.APPEND_NEXT_PAGE_UPLOADED_IMAGES_LIST: {
      const { docs, hasNextPage, nextPage } = action.payload;
      return {
        ...state,
        loading: false,
        docs: [...state.docs, ...docs],
        hasNextPage,
        nextPage
      };
    }

    case Actions.SET_SELECTED_IMAGE_ID: {
      const { imageId } = action.payload;
      return {
        ...state,
        selectedItemId: imageId
      };
    }

    case Actions.UPDATE_IMAGE_DETAIL: {
      const { imageId, imageCaption, imageTags } = action.payload;
      const newDocs = state.docs.map(doc => {
        if (doc._id === imageId) {
          return {
            ...doc,
            imageCaption,
            imageTags
          };
        } else {
          return doc;
        }
      });
      return {
        ...state,
        loading: false,
        docs: newDocs
      };
    }

    case Actions.TOGGLE_IN_SELECTED_IMAGES: {
      const { imageId } = action.payload;

      let selectedImageIds = [...state.selectedImageIds];

      if (selectedImageIds.find(id => id === imageId) !== undefined) {
        selectedImageIds = selectedImageIds.filter(id => id !== imageId);
      } else {
        selectedImageIds = [...selectedImageIds, imageId];
      }

      return {
        ...state,
        selectedImageIds: selectedImageIds
      };
    }
    case Actions.SELECT_ALL_IMAGES: {
      const arr = Object.keys(state.docs).map(k => state.docs[k]);

      const selectedImageIds = arr.map(image => image._id);

      return {
        ...state,
        selectedImageIds
      };
    }
    case Actions.DESELECT_ALL_IMAGES: {
      return {
        ...state,
        selectedImageIds: []
      };
    }

    case Actions.DELETE_IMAGE_BY_ID: {
      const { imageId } = action.payload;
      return {
        ...state,
        loading: false,
        docs: _.remove(state.docs, image => image._id !== imageId)
      };
    }

    default: {
      return state;
    }
  }
};

export default image;
