import { INIT_STATE } from '../../constants';
import { getType, showModalUpdateProduct, hideModalUpdateProduct, showModalDeleteProduct, hideModalDeleteProduct, showModalUpdateCustomer, hideModalUpdateCustomer, showModalDeleteCustomer, hideModalDeleteCustomer } from '../actions';

export default function modalAdminReducers(state = INIT_STATE.modalAdmin, action) {
  switch (action.type) {
    case getType(showModalUpdateProduct):
      return {
        isShowModalUpdateProduct: true,
      };
    case getType(hideModalUpdateProduct):
      return {
        isShowModalUpdateProduct: false,
      };
    case getType(showModalDeleteProduct):
      return {
        isShowModalDeleteProduct: true,
      };
    case getType(hideModalDeleteProduct):
      return {
        isShowModalDeleteProduct: false,
      };
    case getType(showModalUpdateCustomer):
      return {
        isShowModalUpdateCustomer: true,
      };
    case getType(hideModalUpdateCustomer):
      return {
        isShowModalUpdateCustomer: false,
      };
    case getType(showModalDeleteCustomer):
      return {
        isShowModalDeleteCustomer: true,
      };
    case getType(hideModalDeleteCustomer):
      return {
        isShowModalDeleteCustomer: false,
      };
    default:
      return state;
  }
}