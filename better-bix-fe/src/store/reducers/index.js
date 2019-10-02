import { combineReducers } from 'redux';

import { registration } from './authRegistration';
import { login } from './authLogin';
import { bizDelete } from './bizDelete';
import { bizPut } from './bizPut';
import { bizPost } from './bizPost';
import { bizGet } from './bizGet';


export default combineReducers({
  registration,
  login,
  bizDelete,
  bizPut,
  bizPost,
  bizGet
});