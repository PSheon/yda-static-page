import moment from 'moment';

class emailService {
  static getEmailExpire() {
    return localStorage.getItem('ys_resend_email_expire');
  }

  static setEmailExpire() {
    localStorage.setItem('ys_resend_email_expire', moment().add(3, 'minutes'));
  }

  static removeEmailExpire() {
    localStorage.removeItem('ys_resend_email_expire');
  }
}

export default emailService;
