const productsRouter = require('./products');
const shoppingCartRouter = require('./shoppingCart');
const feedbackRouter = require('./feedbacks');
const accountsRouter = require('./accounts');
const distributorsRouter = require('./distributors');
const categoryRouter = require('./category');
const orderRouter = require('./order');
const commentRouter = require('./comments');

function route(app) {
    app.use('/products', productsRouter);
    app.use('/accounts', accountsRouter);
    app.use('/distributors', distributorsRouter);
    app.use('/category', categoryRouter);
    app.use('/shopping-cart', shoppingCartRouter);
    app.use('/feedback', feedbackRouter);
    app.use('/order', orderRouter);
    app.use('/comments', commentRouter);
}

module.exports = route