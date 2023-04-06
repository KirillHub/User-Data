import { createReducer, on } from '@ngrx/store';
import removePropertiesFromUrl from 'src/utils/removePropertiesFromUrl';
import { customUrl, filteredOptions, loadUsersDataSuccess } from './users-page.actions';
import { initialState } from './users-page.state';

export const usersDataReducer = createReducer(
  initialState,
  on(loadUsersDataSuccess, (state, action) => {
    return {
      ...state,
      results: action.userData
    };
  }),
  on(customUrl, (state, action) => {
    const { initialUrl, filterProperties } = action;
    let updatedUrl = initialUrl;

    updatedUrl = removePropertiesFromUrl(updatedUrl, filterProperties);

    return {
      ...state,
      customUrl: updatedUrl
    };
  }),
  on(filteredOptions, (state, action) => {
    return {
      ...state,
      filteredOptions: action.filterOpt
    };
  })
);
