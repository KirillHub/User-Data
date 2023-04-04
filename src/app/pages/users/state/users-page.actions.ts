import { createAction, props } from '@ngrx/store';
import UserData from '../models/User.model';

export const USER_DATA = '[users page] user data';

export const LOAD__USER_DATA = '[users page] load user data';
export const LOAD__USER_DATA_SUCCESS = '[users page] load user data success';

export const loadUserData = createAction(LOAD__USER_DATA);
export const loadUserDataSuccess = createAction(
  LOAD__USER_DATA_SUCCESS,
  props<{ userData: UserData[] }>()
);
