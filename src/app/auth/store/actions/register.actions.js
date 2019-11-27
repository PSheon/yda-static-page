import firebaseService from 'app/services/firebaseService';
import * as UserActions from './user.actions';
import * as Actions from 'app/store/actions';
import jwtService from 'app/services/jwtService';

export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export function submitRegister({ displayName, password, email }) {
  return dispatch =>
    jwtService
      .createUser({
        displayName,
        password,
        email
      })
      .then(user => {
        dispatch(UserActions.setUserData(user));
        dispatch({
          type: Actions.SHOW_MESSAGE,
          options: { message: `已寄送驗證郵件，請點擊信中連結！` }
        });
        return dispatch({
          type: REGISTER_SUCCESS
        });
      })
      .catch(({ response }) => {
        const errMsg = response ? response.data.errors.msg : '網站沒有回應';
        return dispatch({
          type: REGISTER_ERROR,
          payload: errMsg
        });
      });
}

export function registerWithFirebase(model) {
  const { email, password, displayName } = model;
  return dispatch =>
    firebaseService.auth &&
    firebaseService.auth
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        dispatch(
          UserActions.createUserSettingsFirebase({
            ...response.user,
            displayName,
            email
          })
        );

        return dispatch({
          type: REGISTER_SUCCESS
        });
      })
      .catch(error => {
        const usernameErrorCodes = [
          'auth/operation-not-allowed',
          'auth/user-not-found',
          'auth/user-disabled'
        ];

        const emailErrorCodes = [
          'auth/email-already-in-use',
          'auth/invalid-email'
        ];

        const passwordErrorCodes = [
          'auth/weak-password',
          'auth/wrong-password'
        ];

        const response = {
          email: emailErrorCodes.includes(error.code) ? error.message : null,
          displayName: usernameErrorCodes.includes(error.code)
            ? error.message
            : null,
          password: passwordErrorCodes.includes(error.code)
            ? error.message
            : null
        };

        if (error.code === 'auth/invalid-api-key') {
          dispatch(Actions.showMessage({ message: error.message }));
        }

        return dispatch({
          type: REGISTER_ERROR,
          payload: response
        });
      });
}
