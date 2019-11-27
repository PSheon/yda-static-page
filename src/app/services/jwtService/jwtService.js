import axios from 'axios';
import formurlencoded from 'form-urlencoded';
import jwtDecode from 'jwt-decode';
import FuseUtils from '@fuse/FuseUtils';

import { AUTH_REST_BASE_END_POINT } from 'app/fuse-configs/envsConfig';

class jwtService extends FuseUtils.EventEmitter {
  init() {
    this.setInterceptors();
    this.handleAuthentication();
  }

  setInterceptors = () => {
    axios.interceptors.response.use(
      response => {
        return response;
      },
      err => {
        return new Promise((resolve, reject) => {
          if (
            err.response.status === 401 &&
            err.config &&
            !err.config.__isRetryRequest
          ) {
            // if you ever get an unauthorized response, logout the user
            this.emit('onAutoLogout', '請掛上通行證');
            this.setSession(null);
          }
          throw err;
        });
      }
    );
  };

  handleAuthentication = () => {
    let access_token = this.getAccessToken();

    if (!access_token) {
      this.emit('onNoAccessToken');

      return;
    }

    if (this.isAuthTokenValid(access_token)) {
      this.setSession(access_token);
      this.emit('onAutoLogin', true);
    } else {
      this.setSession(null);
      this.emit('onAutoLogout', '通行證已過期');
    }
  };

  createUser = data => {
    return new Promise((resolve, reject) => {
      axios
        .post(AUTH_REST_BASE_END_POINT + '/auth/register', formurlencoded(data))
        .then(response => {
          if (response.data.user) {
            this.setSession(response.data.access_token);
            resolve(response.data.user);
          }
          // else {
          // 	reject(response.data.error);
          // }
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  signInWithEmailAndPassword = data => {
    return new Promise((resolve, reject) => {
      axios
        .post(AUTH_REST_BASE_END_POINT + '/auth/login', formurlencoded(data))
        .then(response => {
          if (response.data && response.data.user) {
            this.setSession(response.data.access_token);
            resolve(response.data.user);
          }
          // else {
          // 	reject(response.data.error);
          // }
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  signInWithGoogle = data => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          AUTH_REST_BASE_END_POINT + '/auth/login/google',
          formurlencoded(data)
        )
        .then(response => {
          if (response.data && response.data.user) {
            this.setSession(response.data.access_token);
            resolve(response.data.user);
          }
          // else {
          // 	reject(response.data.error);
          // }
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  signInWithFacebook = data => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          AUTH_REST_BASE_END_POINT + '/auth/login/facebook',
          formurlencoded(data)
        )
        .then(response => {
          if (response.data && response.data.user) {
            this.setSession(response.data.access_token);
            resolve(response.data.user);
          }
          // else {
          // 	reject(response.data.error);
          // }
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  linkGoogle = data => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          AUTH_REST_BASE_END_POINT + '/auth/link/google',
          formurlencoded(data)
        )
        .then(response => {
          if (response.data) {
            resolve(response.data);
          }
          // else {
          // 	reject(response.data.error);
          // }
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  linkFacebook = data => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          AUTH_REST_BASE_END_POINT + '/auth/link/facebook',
          formurlencoded(data)
        )
        .then(response => {
          if (response.data) {
            resolve(response.data);
          }
          // else {
          // 	reject(response.data.error);
          // }
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  signInWithToken = () => {
    return new Promise((resolve, reject) => {
      axios
        .post(AUTH_REST_BASE_END_POINT + '/auth/access-token', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.getAccessToken()
          }
        })
        .then(response => {
          if (response.data.user) {
            this.setSession(response.data.access_token);
            resolve(response.data.user);
          } else {
            this.logout();
            reject('Failed to login with token.');
          }
        })
        .catch(error => {
          this.logout();
          reject('Failed to login with token.');
        });
    });
  };

  updateReceivingEmailStatus = newReceivingEmailStatus => {
    return new Promise((resolve, reject) => {
      axios
        .patch(
          AUTH_REST_BASE_END_POINT + '/api/user/receiving-email/',
          formurlencoded({
            receivingEmailStatus: newReceivingEmailStatus
          })
          // {
          //   headers: {
          //     'Content-Type': 'application/json',
          //     Authorization: 'Bearer ' + this.getAccessToken()
          //   }
          // }
        )
        .then(response => {
          if (response.data) {
            resolve(response.data);
          } else {
            reject('Failed to update receiving status.');
          }
        })
        .catch(error => {
          reject('Failed to update receiving status.');
        });
    });
  };

  updateUserData = user => {
    return axios.patch(
      AUTH_REST_BASE_END_POINT + '/api/profile/shortcuts',
      user.data,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.getAccessToken()
        }
      }
    );
  };

  setSession = access_token => {
    if (access_token) {
      localStorage.setItem('jwt_access_token', access_token);
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
    } else {
      localStorage.removeItem('jwt_access_token');
      delete axios.defaults.headers.common['Authorization'];
    }
  };

  logout = () => {
    this.setSession(null);
  };

  forgotPassword = email => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          AUTH_REST_BASE_END_POINT + '/auth/forgot',
          formurlencoded({
            email
          })
        )
        .then(response => {
          if (response.status === 200) {
            resolve('已寄送重設密碼網址到 : ' + email);
          } else {
            reject('Failed to sent reset password email.');
          }
        })
        .catch(error => {
          reject('Failed to sent reset password email.');
        });
    });
  };

  getSelfAccessHistory = () => {
    return new Promise((resolve, reject) => {
      axios
        .post(AUTH_REST_BASE_END_POINT + '/api/profile/access-history', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.getAccessToken()
          }
        })
        .then(response => {
          if (response.status === 200) {
            resolve(response.data);
          } else {
            reject("Failed to get user's access history.");
          }
        })
        .catch(error => {
          reject("Failed to get user's access history.");
        });
    });
  };

  getSelfPurchaseHistory = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(AUTH_REST_BASE_END_POINT + '/api/purchase', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.getAccessToken()
          }
        })
        .then(response => {
          if (response.status === 200) {
            resolve(response.data);
          } else {
            reject("Failed to get user's purchase history.");
          }
        })
        .catch(error => {
          reject("Failed to get user's purchase history.");
        });
    });
  };

  resetPassword = data => {
    return new Promise((resolve, reject) => {
      axios
        .post(AUTH_REST_BASE_END_POINT + '/auth/reset', formurlencoded(data))
        .then(response => {
          if (response.status === 200) {
            resolve('密碼已更新，請重新登入!');
          } else {
            reject('Failed to reset password.');
          }
        })
        .catch(error => {
          reject('Failed to reset password.');
        });
    });
  };

  isAuthTokenValid = access_token => {
    if (!access_token) {
      return false;
    }
    const decoded = jwtDecode(access_token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.warn('access token expired');
      return false;
    } else {
      return true;
    }
  };

  getAccessToken = () => {
    return window.localStorage.getItem('jwt_access_token');
  };
}

const instance = new jwtService();

export default instance;
