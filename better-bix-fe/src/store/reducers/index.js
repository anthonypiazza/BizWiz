import { combineReducers } from 'redux';

import { registration } from './authRegistration';
import { login } from './authLogin';
import { bizPut } from './bizPut';
import { bizPost } from './bizPost';
import { bizGet } from './bizGet';


export default combineReducers({
  registration,
  login,
  bizPut,
  bizPost,
  bizGet
});