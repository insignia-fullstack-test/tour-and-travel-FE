import { combineReducers } from 'redux';
import authReducer from './auth';
import travelPackageReducer from './travelPackage';

export default combineReducers({
  authReducer,
  travelPackageReducer,
})
