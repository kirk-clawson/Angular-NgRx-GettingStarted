import { User } from '../user';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);
export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}

const initialState: UserState = {
  maskUserName: false,
  currentUser: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'MASK_USER_NAME':
      return {
        ...state,
        maskUserName: action.payload
      };
    default:
      return state;
  }
}
