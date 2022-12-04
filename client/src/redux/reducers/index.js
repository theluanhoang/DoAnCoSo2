import { combineReducers } from 'redux';
import modalCart from './modalCart';
import modalAdmin from './modalAdmin';
import shoppingCart from './shoppingCart';
import products from './products';
import customers from './customers';
import distributors from './distributors';
import category from './category';
import login from './login';

export default combineReducers({
    modalCart,
    modalAdmin,
    distributors,
    login,
    products,
    category,
    customers,
    shoppingCart,
});