// import actionTypes from '../actionTypes'
import { createProducer } from './utilities'

let initialState = {
  emailAddress: 'jjones@mdpps.com',
  mobilePhone: '+13093396341'
}

export default createProducer(initialState, {})
