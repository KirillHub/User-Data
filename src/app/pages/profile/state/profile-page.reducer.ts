import { createReducer, on } from '@ngrx/store';
import { loadUserDataSuccess } from './profile-page.actions';
import { initialState } from './profile-page.state';

export const userProfileDataReducer = createReducer(
  initialState,
  on(loadUserDataSuccess, (state, action) => {
    return {
      ...state,
      results: action.userData
    };
  })
);
