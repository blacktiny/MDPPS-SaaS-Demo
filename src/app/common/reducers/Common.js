import actionTypes from '../actionTypes';
import { createProducer } from './utilities';

let initialState = {
  isNewNotify: false,
  notification: '',
};

export default createProducer(initialState, {
  [actionTypes.SETTINGS_PROFILE_SAVE_SUCCESS]: (common, { _data }) => {
    common.isNewNotify = true;
    common.notification = 'The changes have been successfully saved';
  },

  [actionTypes.SETTINGS_NOTIFICATION_CLEAR]: common => {
    common.isNewNotify = false;
  },
});
