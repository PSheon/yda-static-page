/* 3-rd Party Auth Client ID */
export const GOOGLE_CLIENT_ID = '';
export const FACEBOOK_CLIENT_ID = '';

/* Socket End-Point */
// export const SOCKET_END_POINT = 'ws://localhost:3000/api/';

/* Web Front-End Point */
export const WEB_FRONT_END_POINT =
  process.env.NODE_ENV === 'production'
    ? 'https://stage.ys.nat.gov.tw'
    : 'http://localhost:8080';

/* Auth REST End-Point */
export const AUTH_REST_BASE_END_POINT =
  process.env.NODE_ENV === 'production'
    ? 'https://stage.ys.nat.gov.tw'
    : 'http://localhost:3000';
