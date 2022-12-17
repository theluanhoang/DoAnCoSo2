import Axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchProducts = () => Axios.get(`${URL}/products/`);
export const sendFeedback = (payload) => Axios.post(`${URL}/feedback/add`, payload);
export const order = (payload) => Axios.post(`${URL}/order/add`, payload);
export const searchProduct = (payload) => Axios.get(`${URL}/products/search/${payload}`);
export const fetchShoppingCart = (payload) => Axios.post(`${URL}/shopping-cart`, payload);
export const deleteShoppingCartItem = (payload) => Axios.post(`${URL}/shopping-cart/delete`, payload);
export const updateShoppingCartItem = (payload) => Axios.post(`${URL}/shopping-cart/update-quantity`, payload);
export const fetchCustomers = () => Axios.get(`${URL}/accounts`);
export const fetchDistributors = () => Axios.get(`${URL}/distributors`);
export const fetchCategory = () => Axios.get(`${URL}/category`);
export const getProduct = (payload) => Axios.get(`${URL}/products/`);
export const createProduct = (payload) => Axios.post(`${URL}/products/add`, payload);
export const updateProduct = (payload) => Axios.post(`${URL}/products/update/${payload.id}`, payload);
export const deleteProduct = (payload) => Axios.get(`${URL}/products/delete/:id`, payload);

// ACCOUNT
export const loginUser = (payload) => Axios.post(`${URL}/accounts/login`, payload);