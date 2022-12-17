import { combineReducers } from 'redux';
import modalCart from './modalCart';
import modalAdmin from './modalAdmin';
import shoppingCart from './shoppingCart';
import products from './products';
import customers from './customers';
import distributors from './distributors';
import category from './category';
import login from './login';
import feedbacks from './feedbacks';
import search from './search';
import order from './order';

export default combineReducers({
    modalCart,
    modalAdmin,
    distributors,
    login,
    products,
    category,
    customers,
    shoppingCart,
    feedbacks,
    search,
    order
});