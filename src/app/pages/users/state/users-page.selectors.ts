import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersDataState } from './users-page.state';

export const USERS_STATE_NAME = 'users-data';

export const selectFeature = createFeatureSelector<UsersDataState>(USERS_STATE_NAME);

export const selectUserData = createSelector(selectFeature, state => state.results);

export const selectCustomUrl = createSelector(selectFeature, state => state.customUrl);

export const selectFilteredOptions = createSelector(selectFeature, state => state.filteredOptions);