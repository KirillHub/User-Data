import { createAction, props } from '@ngrx/store';
import UserData, { UserResult } from '../models/User.model';

export const LOAD_USER_DATA = '[users page] load user data';
export const LOAD_USER_DATA_SUCCESS = '[users page] load user data success';

export const loadUserData = createAction(LOAD_USER_DATA);
export const loadUserDataSuccess = createAction(
  LOAD_USER_DATA_SUCCESS,
  props<{ userData: UserResult[] }>()
);