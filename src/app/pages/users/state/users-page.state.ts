import { UserResult } from 'src/app/shared/models/User.model';

export interface UsersDataState {
  results: UserResult[];
  customUrl: string;
  filteredOptions: string[];
}

export const initialState: UsersDataState = {
  results: [],
  customUrl:
    'https://randomuser.me/api/?inc=name,gender,email,phone,picture,location&noinfo&nat=us&results=100&seed=123',
  filteredOptions: []
};
