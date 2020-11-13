// API
import actionTypes from './actionTypes'

export const api = (action) => async (dispatch) => {
  let { type, data } = action

  let respActionType = ''

  switch (type) {
    case actionTypes.SETTINGS_PROFILE_EMAIL_CHANGE:
      if (data.step === 'email')
        respActionType = actionTypes.SETTINGS_PROFILE_OTP_CODE_REQUEST
      else if (data.step === 'otp')
        respActionType = actionTypes.SETTINGS_PROFILE_EMAIL_CHANGE_SUCCESS
      break;

    default:
      break;
  }

  // fetch response data from back-end

  dispatch({
    type: respActionType,
    data
  })
}