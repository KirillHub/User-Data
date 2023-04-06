import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserDataState } from './profile-page.state';

export const USER_STATE_NAME = 'profile-user-data';

export const selectFeature = createFeatureSelector<UserDataState>(USER_STATE_NAME);

export const selectUserData = createSelector(selectFeature, state => state.results || []);