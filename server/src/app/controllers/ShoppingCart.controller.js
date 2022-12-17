const { ShoppingCart, QL_ShoppingCart } = require('../models/ShoppingCart.model')

class ShoppingCartControl {
    create(req, res) {
        const newShoppingCartItem = new ShoppingCart(req.body);
        QL_ShoppingCart.addShoppingCart(newShoppingCartItem, (err, result) => {
            if (err) res.status(500).send('error: ', err)
            else {
                res.send(result);
            }
        });
    }

    getShoppingCart(req, res) {
        let id = req?.params.id
        QL_ShoppingCart.getById(id, (err, data) => {
            if (err) res.send("err", err);
            else res.send(data);
        });
    }
    index(req, res) {
        let userId = req.body.userId;
        QL_ShoppingCart.getAll(userId, (err, data) => {
            if (err) res.send("err", err);
            else res.send(data);
        });
    }


    update(req, res) {
        QL_ShoppingCart.updateShoppingCart(req.body, (err, result) => {
            if (err) {
                console.log('err: ', err);
            } else {
                res.status(200).send(result);
            }
        });
    }

    delete(req, res) {
        let customerId= req.body.customerId;
        let productId= req.body.itemId;
        QL_ShoppingCart.deleteShoppingCart( customerId, productId , (err, result) => {
            if (err) {
                console.log('err: ', err);
            } else {
                res.status(200).send(result);
            }

        });
    }
}

module.exports = new ShoppingCartControl();