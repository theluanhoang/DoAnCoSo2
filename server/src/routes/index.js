const productsRouter = require('./products');
const shoppingCartRouter = require('./shoppingCart');
const accountsRouter = require('./accounts');
const distributorsRouter = require('./distributors');
const categoryRouter = require('./category');

function route(app) {
    app.use('/products', productsRouter);
    app.use('/customers', accountsRouter);
    app.use('/distributors', distributorsRouter);
    app.use('/category', categoryRouter);
    app.use('/shopping-cart', shoppingCartRouter);
}

module.exports = route