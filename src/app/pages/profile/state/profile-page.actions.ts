import { createAction, props } from '@ngrx/store';
import { UserResult } from 'src/app/shared/models/User.model';

export const LOAD_USER_PROFILE_DATA = '[profile page] load user data';
export const LOAD_USER_PROFILE_DATA_SUCCESS = '[profile page] load user data success';

export const loadUserData = createAction(LOAD_USER_PROFILE_DATA);
export const loadUserDataSuccess = createAction(
  LOAD_USER_PROFILE_DATA_SUCCESS,
  props<{ userData: UserResult[] }>()
);
