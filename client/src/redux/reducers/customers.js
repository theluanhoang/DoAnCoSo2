import { INIT_STATE } from '../../constants';
import { getType, getCustomers } from '../actions';

export default function customersReducers(state = INIT_STATE.customers, action) {
  switch (action.type) {
    case getType(getCustomers.getCustomersRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getCustomers.getCustomersSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getCustomers.getCustomersFailure):
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}