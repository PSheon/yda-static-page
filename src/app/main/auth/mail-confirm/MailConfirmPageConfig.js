import React from 'react';
import { Redirect } from 'react-router-dom';

export const MailConfirmPageConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false
        },
        toolbar: {
          display: false
        },
        footer: {
          display: false
        },
        leftSidePanel: {
          display: false
        },
        rightSidePanel: {
          display: false
        }
      }
    }
  },
  routes: [
    {
      path: '/mail-confirm/:emailAddress',
      component: React.lazy(() => import('./MailConfirmPage'))
    },
    {
      path: '/mail-confirm',
      component: () => <Redirect to="/login" />
    },
    {
      path: '/password-reset-mail-confirm/:emailAddress',
      component: React.lazy(() => import('./PasswordResetMailConfirmPage'))
    },
    {
      path: '/password-reset-mail-confirm',
      component: () => <Redirect to="/login" />
    }
  ]
};
