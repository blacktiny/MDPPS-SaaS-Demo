import actionTypes from '../actionTypes'

export const saveProfile = (data) => ({
  type: actionTypes.SETTINGS_PROFILE_SAVE_SUCCESS,
  data
})
