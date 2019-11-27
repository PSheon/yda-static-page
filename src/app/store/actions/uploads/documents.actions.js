import * as Actions from 'app/store/actions';
import eventBusService from 'app/services/eventBusService';

export const SYNC_UPLOADED_DOCUMENTS_LIST = '[UPLOAD] SYNC DOCUMENTS LIST';
export const ADD_DOCUMENT_TO_UPLOADED_DOCUMENTS_LIST = '[UPLOAD] ADD TO DOCUMENTS LIST';
export const APPEND_NEXT_PAGE_UPLOADED_DOCUMENTS_LIST = '[UPLOAD] APPEND NEXT PAGE DOCUMENTS';
export const SET_SELECTED_DOCUMENT_ID = '[UPLOAD] SET SELECTED DOCUMENT ID';
export const DELETE_DOCUMENT_BY_ID = '[UPLOAD] DELETE DOCUMENT';

export function syncUploadedDocuments() {
  return dispatch => {
    eventBusService.getUploadedDocuments()
      .then(response => {
        if (response.docs.length) {
          dispatch({
            type: SET_SELECTED_DOCUMENT_ID,
            payload: {
              documentId: response.docs[0]['_id']
            }
          })
        }

        return dispatch({
          type: SYNC_UPLOADED_DOCUMENTS_LIST,
          payload: response
        })
      })
  }
}

export function addImageToUploadedDocuments(image) {
  return dispatch => {
    return dispatch({
      type: ADD_DOCUMENT_TO_UPLOADED_DOCUMENTS_LIST,
      payload: image
    })
  }
}

export function appendNextPageUploadedDocuments(routeParams) {
  return dispatch => {
    eventBusService.getUploadedDocuments(routeParams)
      .then(response => {
        return dispatch({
          type: APPEND_NEXT_PAGE_UPLOADED_DOCUMENTS_LIST,
          payload: response
        })
      })
  }
}

export function setSelectedDocumentId(documentId) {
  return dispatch => {
    return dispatch({
      type: SET_SELECTED_DOCUMENT_ID,
      payload: {
        documentId
      }
    })
  }
}

export function deleteDocument(documentId) {
  return dispatch => {
    eventBusService.deleteDocument(documentId)
      .then(payload => {
        dispatch(Actions.showMessage({ message: '已刪除文件.' }));
        dispatch({
          type: DELETE_DOCUMENT_BY_ID,
          payload: {
            documentId
          }
        })
      })
  }
}
