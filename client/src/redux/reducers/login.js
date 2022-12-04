import { INIT_STATE } from '../../constants';
import { getType, loginAccount } from '../actions';

export default function loginReducers(state = INIT_STATE.login, action) {
  switch (action.type) {
    case getType(loginAccount.loginStart):
      return {
        ...state,
        isFetching: true
      };
    case getType(loginAccount.loginSuccess):
      return {
        ...state,
        isFetching: false,
        currentUser: action.payload
      };
    case getType(loginAccount.loginError):
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}