export interface SharedState {
  showLoading: boolean;
  errorMessage: string;
  numberOfUsers: string;
}

export const initialState: SharedState = {
  showLoading: false,
  errorMessage: '',
  numberOfUsers: '1',
};
