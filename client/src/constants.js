export const INIT_STATE = {
    modalCart: {
        isShowModalCart: false
    },
    products: {
        isLoading: false,
        data: []
    },
    limitProducts: {
        isLoading: false,
        data: []
    },
    customers: {
        isLoading: false,
        data: []
    },
    distributors: {
        isLoading: false,
        data: []
    },
    category: {
        isLoading: false,
        data: []
    },
    login: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    modalAdmin: {
        isShowModalUpdateProduct: false,
        isShowModalDeleteProduct: false,
        isShowModalUpdateCustomer: false,
        isShowModalDeleteCustomer: false,
    },
    shoppingCart: {
        isLoading: false,
        data: []
    },
    feedback: {
        isLoading: false,
        data: []
    },
    search: {
        isLoading: false,
        data: [],
        keyword: ''
    },
    order: { 
        isLoading: false,
        data: [],
    },
    comments: {
        isLoading: false,
        data: []
    }
}