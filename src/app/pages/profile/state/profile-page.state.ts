import { UserResult } from "src/app/shared/models/User.model";

export interface UserDataState {
  results: UserResult[];
}

export const initialState: UserDataState = {
  results: []
};