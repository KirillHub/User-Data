import UserData from '../models/User.model';

export interface UserDataState {
  results: UserData[] | [];
}

export const initialState: UserDataState = {
  results: []
};
