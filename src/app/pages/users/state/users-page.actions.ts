import { createAction, props } from '@ngrx/store';
import { UserResult } from 'src/app/shared/models/User.model';

export const LOAD_USERS_DATA = '[users page] load user data';
export const LOAD_USERS_DATA_SUCCESS = '[users page] load user data success';

export const USER_SETTINGS = '[users page] user search filter';

export const FILTERED_OPTIONS = '[users page] filtered user options';

export const CUSTOM_URL = '[users page] url after user filter';

export const customUrl = createAction(
  CUSTOM_URL,
  props<{ initialUrl: string; filterProperties: string[] }>()
);

export const filteredOptions = createAction(FILTERED_OPTIONS, props<{ filterOpt: string[] }>());

export const loadUsersData = createAction(LOAD_USERS_DATA);
export const loadUsersDataSuccess = createAction(
  LOAD_USERS_DATA_SUCCESS,
  props<{ userData: UserResult[] }>()
);
