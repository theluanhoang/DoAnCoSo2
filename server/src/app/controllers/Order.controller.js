const { Order, QL_Order } = require('../models/Order.model')

class OrderControl {
    create(req, res) {
        console.log(req.body);
        const newOrder = new Order(req.body);
        QL_Order.addOrder(newOrder, (err, result) => {
            if (err) res.status(500).send('error: ', err)
            else {
                res.send(result);
            }
        });
    }

    getOrder(req, res) {
        let id = req?.params.id
        QL_Order.getById(id, (err, data) => {
            if (err) res.send("err", err);
            else res.send(data);
        });
    }
    index(req, res) {
        QL_Order.getAll((err, data) => {
            if (err) res.send("err", err);
            else res.send(data);
        });
    }
    

    update(req, res) {
        const newOrder = new Order(req.body);
        QL_Order.updateOrder(req.params.id, newOrder, (err, result) => {
            if (err) {
                console.log('err: ', err);
            } else {
                res.status(200).send(result);
            }
        });
    }

    delete(req, res) {
        QL_Order.deleteOrder(req.params.id, (err, result) => {
            if (err) {
                console.log('err: ', err);
            } else {
                res.status(200).send(result);
            }

        });
    }
}

module.exports = new OrderControl();