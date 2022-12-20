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
import comments from './comments';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const reducers = combineReducers({
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
    order,
    comments
});

const persistConfig = {
    key: 'root',
    storage: storage,
};

export default persistReducer(persistConfig, reducers);


