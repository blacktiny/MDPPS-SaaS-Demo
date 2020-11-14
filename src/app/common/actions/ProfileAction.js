import actionTypes from '../actionTypes';
import { api } from '../api';

export const changeEmail = data =>
  api({
    type: actionTypes.SETTINGS_PROFILE_EMAIL_CHANGE,
    data,
  });

export const finishEmailChange = () => ({
  type: actionTypes.SETTINGS_PROFILE_EMAIL_CHANGE_FINISH,
});

export const saveProfile = data => ({
  type: actionTypes.SETTINGS_PROFILE_SAVE_SUCCESS,
  data,
});
