import { combineReducers } from 'redux';

import { registration } from './authRegistration';
import { login } from './authLogin';

export default combineReducers({
  registration,
  login
});