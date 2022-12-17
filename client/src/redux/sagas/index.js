import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchProductsSaga(action) {
  try {
    const products = yield call(api.fetchProducts);
    yield put(actions.getProducts.getProductsSuccess(products.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getProducts.getProductsFailure(err));
  }
}

function* orderSaga(action) {
  try {
    const products = yield call(api.order, action.payload);
    yield put(actions.order.orderSuccess(products.data));
  } catch (err) {
    console.error(err);
    yield put(actions.order.orderFailure(err));
  }
}

function* fetchShoppingCartSaga(action) {
  try {
    const ShoppingCart = yield call(api.fetchShoppingCart, action.payload);
    yield put(actions.getShoppingCart.getShoppingCartSuccess(ShoppingCart.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getShoppingCart.getShoppingCartFailure(err));
  }
}

function* deleteShoppingCartItem(action) {
  try {
    yield call(api.deleteShoppingCartItem, action.payload);
    yield put(actions.deleteShoppingCartItem.deleteShoppingCartItemSuccess(action.payload));
  } catch (err) {
    console.error(err);
    yield put(actions.deleteShoppingCartItem.deleteShoppingCartItemFailure(err));
  }
}

function* updateShoppingCartItem(action) {
  try {
    yield call(api.updateShoppingCartItem, action.payload);
    yield put(actions.updateShoppingCartItem.updateShoppingCartItemSuccess(action.payload));
  } catch (err) {
    console.error(err);
    yield put(actions.updateShoppingCartItem.updateShoppingCartItemFailure(err));
  }
}

function* fetchCustomersSaga(action) {
  try {
    const customers = yield call(api.fetchCustomers);
    yield put(actions.getCustomers.getCustomersSuccess(customers.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getCustomers.getCustomersFailure(err));
  }
}

function* fetchDistributorsSaga(action) {
  try {
    const distributors = yield call(api.fetchDistributors);
    yield put(actions.getDistributors.getDistributorsSuccess(distributors.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getDistributors.getDistributorsFailure(err));
  }
}

function* fetchCategorySaga(action) {
  try {
    const category = yield call(api.fetchCategory);
    yield put(actions.getCategory.getCategorySuccess(category.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getCategory.getCategoryFailure(err));
  }
}

function* fetchProductSaga(action) {
  try {
    const product = yield call(api.getProduct, action.payload);
    yield put(actions.getProduct.getProductSuccess(product.data));
  } catch (err) {
    yield put(actions.getProduct.getProductFailure(err));
  }
}

function* createProductSaga(action) {
  try {
    const product = yield call(api.createProduct, action.payload);
    yield put(actions.createProduct.createProductSuccess(product.data));
  } catch (err) {
    console.error(err);
    yield put(actions.createProduct.createProductFailure(err));
  }
}

function* sendFeedbackSaga(action) {
  try {
    const feedback = yield call(api.sendFeedback, action.payload);
    yield put(actions.sendFeedback.sendFeedbackSuccess(feedback.data));
  } catch (err) {
    console.error(err);
    yield put(actions.sendFeedback.sendFeedbackFailure(err));
  }
}

function* searchProductSaga(action) {
  try {
    const products = yield call(api.searchProduct, action.payload);
    yield put(actions.search.searchSuccess(products.data));
  } catch (err) {
    console.error(err);
    yield put(actions.search.searchFailure(err));
  }
}

function* login(action) {
  try {
    const user = yield call(api.loginUser, action.payload);
    yield put(actions.loginAccount.loginSuccess(user.data));
  } catch (err) {
    console.error(err); 
    yield put(actions.loginAccount.loginError(err));
  }
}

function* updateProductSaga(action) {
  try {
    const updateProduct = yield call(api.updateProduct, action.payload);
    yield put(actions.updateProduct.updateProductSuccess(updateProduct.data));
  } catch (err) {
    console.error(err);
    yield put(actions.updateProduct.updateProductFailure(err));
  }
}

function* mySaga() {
  yield takeLatest(actions.getProducts.getProductsRequest, fetchProductsSaga);
  yield takeLatest(actions.order.orderRequest, orderSaga);
  yield takeLatest(actions.sendFeedback.sendFeedbackRequest, sendFeedbackSaga);
  yield takeLatest(actions.search.searchRequest, searchProductSaga);
  yield takeLatest(actions.getShoppingCart.getShoppingCartRequest, fetchShoppingCartSaga);
  yield takeLatest(actions.deleteShoppingCartItem.deleteShoppingCartItemRequest, deleteShoppingCartItem);
  yield takeLatest(actions.updateShoppingCartItem.updateShoppingCartItemRequest, updateShoppingCartItem);
  yield takeLatest(actions.getCustomers.getCustomersRequest, fetchCustomersSaga);
  yield takeLatest(actions.getDistributors.getDistributorsRequest, fetchDistributorsSaga);
  yield takeLatest(actions.getCategory.getCategoryRequest, fetchCategorySaga);
  yield takeLatest(actions.getProduct.getProductRequest, fetchProductSaga);
  yield takeLatest(actions.createProduct.createProductRequest, createProductSaga);
  yield takeLatest(actions.updateProduct.updateProductRequest, updateProductSaga);
  yield takeLatest(actions.loginAccount.loginStart, login);
}

// generator function ES6

export default mySaga;
export const redirectToBase = (url) => window.location.href = `http://localhost:3000${url}`
