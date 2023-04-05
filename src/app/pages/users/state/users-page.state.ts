import { UserResult } from '../models/User.model';

export interface UserDataState {
  results: UserResult[];
}

export const initialState: UserDataState = {
  results: []
};
