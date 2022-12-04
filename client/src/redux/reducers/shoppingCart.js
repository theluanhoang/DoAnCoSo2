import { INIT_STATE } from '../../constants';
import { getType, getShoppingCart, deleteShoppingCartItem, updateShoppingCartItem } from '../actions';

export default function shoppingCartReducers(state = INIT_STATE.shoppingCart, action) {
  switch (action.type) {
    case getType(getShoppingCart.getShoppingCartSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case getType(getShoppingCart.getShoppingCartFailure):
      return {
        ...state,
        isLoading: false,
      };

    case getType(deleteShoppingCartItem.deleteShoppingCartItemSuccess):
      return {
        ...state,
        isLoading: false,
        data: state.data.filter((item) =>
          item.id !== action.payload.productId
        ),
      };
    case getType(deleteShoppingCartItem.deleteShoppingCartItemFailure):
      return {
        ...state,
        isLoading: false,
      };
    case getType(updateShoppingCartItem.updateShoppingCartItemSuccess):
      return {
        ...state,
        isLoading: false,
        data: state.data.map((item) =>
          item.id === action.payload.productId ? ({
            ...item,
            quantity: action.payload.quantity
          }) : item
        ),
      };
    case getType(updateShoppingCartItem.updateShoppingCartItemFailure):
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}