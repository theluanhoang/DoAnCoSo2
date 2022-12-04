import { INIT_STATE } from '../../constants';
import { getType, getProducts, getProduct, createProduct, updateProduct } from '../actions';

export default function productsReducers(state = INIT_STATE.products, action) {
  switch (action.type) {
    case getType(getProducts.getProductsRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getProducts.getProductsSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case getType(getProducts.getProductsFailure):
      return {
        ...state,
        isLoading: false,
      };
    case getType(getProduct.getProductRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getProduct.getProductSuccess):
      return {
        ...state,
        isLoading: false,
        data: state.data.filter(product =>
          product.id === action.payload
        ),
      };
    case getType(getProduct.getProductFailure):
      return {
        ...state,
        isLoading: false,
      };
    case getType(createProduct.createProductSuccess):
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case getType(updateProduct.updateProductSuccess):
      return {
        ...state,
        data: state.data.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    default:
      return state;
  }
}