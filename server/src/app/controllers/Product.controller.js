const { Product, QL_Product } = require('../models/Product.model')

class ProductControl {
    create(req, res) {
        const newProduct = new Product(req.body);
        QL_Product.addProduct(newProduct, (err, result) => {
            if (err) res.status(500).send('error: ', err)
            else {
                res.send(result);
            }
        });
    }

    getProduct(req, res) {
        let id = req?.params.id
        QL_Product.getById(id, (err, data) => {
            if (err) res.send("err", err);
            else res.send(data);
        });
    }
    index(req, res) {
        QL_Product.getAll((err, data) => {
            if (err) res.send("err", err);
            else res.send(data);
        });
    }

    getLimit(req, res) {
        const limit = req.params.limit;
        QL_Product.getLimit(limit, (err, data) => {
            if (err) res.send("err", err);
            else res.send(data);
        });
    }
    

    update(req, res) {
        const newProduct = new Product(req.body);
        QL_Product.updateProduct(req.params.id, newProduct, (err, result) => {
            if (err) {
                console.log('err: ', err);
            } else {
                res.status(200).send(result);
            }
        });
    }

    delete(req, res) {
        QL_Product.deleteProduct(req.params.id, (err, result) => {
            if (err) {
                console.log('err: ', err);
            } else {
                res.status(200).send(result);
            }

        });
    }

    search(req, res) {
        QL_Product.search(req.params.key, (err, result) => {
            if (err) {
                console.log('err: ', err);
            } else {
                res.status(200).send(result);
            };
        })
    }

    order(req, res) {
        const query = req.body.query;
        QL_Product.order(query, (err, result) => {
            if (err) {
                console.log('err: ', err);
            } else {
                res.status(200).send(result);
            };
        })
    }
}

module.exports = new ProductControl();