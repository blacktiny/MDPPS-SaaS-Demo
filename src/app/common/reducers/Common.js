import actionTypes from '../actionTypes'
import { createProducer } from './utilities'

let initialState = {
  isNewNotify: false,
  notification: ''
}

export default createProducer(initialState, {

  [actionTypes.SETTINGS_PROFILE_SAVE_SUCCESS]: (common, { data }) => {
    // eslint-disable-next-line no-undef
    console.log('data = ', data)
    common.isNewNotify = true
    common.notification = 'The changes have been successfully saved'
  },

  // eslint-disable-next-line no-empty-pattern
  [actionTypes.SETTINGS_NOTIFICATION_CLEAR]: (common, { }) => {
    common.isNewNotify = false
  }
})
