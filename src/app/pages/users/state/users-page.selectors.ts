import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserDataState } from './users-page.state';

export const USERS_STATE_NAME = 'users-data';

export const selectFeature = createFeatureSelector<UserDataState>(USERS_STATE_NAME);

export const selectUserData = createSelector(selectFeature, state => state.results || []);
