import { createAction, props } from '@ngrx/store';

export const SET_LOADING_ACTION = '[shared state] set loading spinner';
export const SET_ERROR_MESSAGE = '[shared state] set error message';
export const SET_NUMBER_OF_USERS = '[shared state] set number of users';

export const LOAD_USER_DATA = '[shared state] load user data';
export const LOAD_USER_DATA_SUCCESS = '[shared state] load user data success';

export const setLoadingSpinner = createAction(SET_LOADING_ACTION, props<{ status: boolean }>());

export const setErrorMessage = createAction(SET_ERROR_MESSAGE, props<{ message: string }>());
