import { combineReducers } from 'redux';
import CommonReducer from './Common';
import ProfileReducer from './ProfileReducer';
import CompanyReducer from './CompanyReducer';

export default combineReducers({
  common: CommonReducer,
  profile: ProfileReducer,
  company: CompanyReducer,
});
