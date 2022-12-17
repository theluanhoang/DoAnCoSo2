import { INIT_STATE } from '../../constants';
import { getType, order } from '../actions';

export default function orderReducers(state = INIT_STATE.order, action) {
  switch (action.type) {
    case getType(order.orderRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(order.orderSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case getType(order.orderFailure):
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}