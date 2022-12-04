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
}

module.exports = new ProductControl();