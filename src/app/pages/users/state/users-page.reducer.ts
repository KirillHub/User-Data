import { createReducer, on } from '@ngrx/store';
import { loadUserDataSuccess } from './users-page.actions';
import { initialState } from './users-page.state';

export const userDataReducer = createReducer(
  initialState,
  on(loadUserDataSuccess, (state, action) => {
    return {
      ...state,
      results: action.userData
    };
  })
);
