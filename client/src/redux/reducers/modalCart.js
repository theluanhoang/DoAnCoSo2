import { INIT_STATE } from '../../constants';
import { getType, hideModalCart, showModalCart } from '../actions';

export default function modalCartReducers(state = INIT_STATE.modalCart, action) {
  switch (action.type) {
    case getType(showModalCart):
      return {
        isShowModalCart: true,
      };
    case getType(hideModalCart):
      return {
        isShowModalCart: false,
      };
    default:
      return state;
  }
}