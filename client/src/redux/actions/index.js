import { createAction, createActions } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const getProducts = createActions({
  getProductsRequest: undefined,
  getProductsSuccess: (payload) => payload,
  getProductsFailure: (err) => err,
});

export const order = createActions({
  orderRequest: (payload) => payload,
  orderSuccess: (payload) => payload,
  orderFailure: (err) => err,
});

export const getLimit = createActions({
  getLimitRequest: (payload) => payload,
  getLimitSuccess: (payload) => payload,
  getLimitFailure: (err) => err,
});

export const getShoppingCart = createActions({
  getShoppingCartRequest: (payload) => payload,
  getShoppingCartSuccess: (payload) => payload,
  getShoppingCartFailure: (err) => err,
});

export const deleteShoppingCartItem = createActions({
  deleteShoppingCartItemRequest: (payload) => payload,
  deleteShoppingCartItemSuccess: (payload) => payload,
  deleteShoppingCartItemFailure: (err) => err,
});

export const updateShoppingCartItem = createActions({
  updateShoppingCartItemRequest: (payload) => payload,
  updateShoppingCartItemSuccess: (payload) => payload,
  updateShoppingCartItemFailure: (err) => err,
});

export const getDistributors = createActions({
  getDistributorsRequest: undefined,
  getDistributorsSuccess: (payload) => payload,
  getDistributorsFailure: (err) => err,
});

export const getCategory = createActions({
  getCategoryRequest: undefined,
  getCategorySuccess: (payload) => payload,
  getCategoryFailure: (err) => err,
});

export const getProduct = createActions({
  getProductRequest: (payload) => payload,
  getProductSuccess: (payload) => payload,
  getProductFailure: (err) => err,
});

export const createProduct = createActions({
  createProductRequest: (payload) => payload,
  createProductSuccess: (payload) => payload,
  createProductFailure: (err) => err,
});

export const updateProduct = createActions({
  updateProductRequest: (payload) => payload,
  updateProductSuccess: (payload) => payload,
  updateProductFailure: (err) => err,
});

export const loginAccount = createActions({
  loginStart: (payload) => payload,
  loginSuccess: (payload) => payload,
  loginError: (err) => err,
});

export const getCustomers = createActions({
  getCustomersRequest: undefined,
  getCustomersSuccess: (payload) => payload,
  getCustomersFailure: (err) => err,
});

export const search = createActions({
  searchRequest: (payload) => payload,
  searchSuccess: (payload) => payload,
  searchFailure: (err) => err,
});
export const comments = createActions({
  commentsRequest: (payload) => payload,
  commentsSuccess: (payload) => payload,
  commentsFailure: (err) => err,
});

export const sendFeedback = createActions({
  sendFeedbackRequest: (payload) => payload,
  sendFeedbackSuccess: (payload) => payload,
  sendFeedbackFailure: (err) => err,
});

export const showModalCart = createAction('SHOW_MODAL_CART');
export const hideModalCart = createAction('HIDE_MODAL_CART');
export const showModalUpdateProduct = createAction('SHOW_MODAL_UPDATE_PRODUCT');
export const hideModalUpdateProduct = createAction('HIDE_MODAL_UPDATE_PRODUCT');
export const showModalDeleteProduct = createAction('SHOW_MODAL_DELETE_PRODUCT');
export const hideModalDeleteProduct = createAction('HIDE_MODAL_DELETE_PRODUCT');
export const showModalUpdateCustomer = createAction('SHOW_MODAL_UPDATE_CUSTOMER');
export const hideModalUpdateCustomer = createAction('HIDE_MODAL_UPDATE_CUSTOMER');
export const showModalDeleteCustomer = createAction('SHOW_MODAL_DELETE_CUSTOMER');
export const hideModalDeleteCustomer = createAction('HIDE_MODAL_DELETE_CUSTOMER');


