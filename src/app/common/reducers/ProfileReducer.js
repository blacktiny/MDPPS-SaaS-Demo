import actionTypes from '../actionTypes';
import { createProducer } from './utilities';

let initialState = {
  emailAddress: 'jjones@mdpps.com',
  mobilePhone: '+13093396341',
  emailChangeStep: 'email',
};

export default createProducer(initialState, {
  [actionTypes.SETTINGS_PROFILE_OTP_CODE_REQUEST]: (common, { _data }) => {
    common.emailChangeStep = 'otp';
  },

  [actionTypes.SETTINGS_PROFILE_EMAIL_CHANGE_SUCCESS]: (common, { _data }) => {
    common.emailChangeStep = 'finish';
  },

  [actionTypes.SETTINGS_PROFILE_EMAIL_CHANGE_FINISH]: common => {
    common.emailChangeStep = 'email';
  },
});
