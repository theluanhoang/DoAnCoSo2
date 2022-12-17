const db = require('../../config/db')
const { v4: uuidv4 } = require('uuid');

class Order {
    constructor(order) {
        this.id = uuidv4();
        this.customerId = order.customerId;
        this.customerName = order.customerName;
        this.delivery_address = order.delivery_address;
        this.email = order.email;
        this.phoneNumber = order.phoneNumber;
        this.note = order.note;
        this.payments = order.payments;
    }
}

class QL_Order {
    static getAll(callback) {
        let query = "SELECT * FROM orders";
        db.query(query, (err, res) => {
            if (err) {
                console.log("error: ", err);
                callback(null, err);
                return;
            }
            callback(null, res);
        });
    }
    static getById(id, callback) {
        let query = "SELECT * FROM orders WHERE id = ?";
        db.query(query, id, (err, res) => {
            if (err) {
                console.log("error: ", err);
                callback(null, err);
                return;
            }
            callback(null, res);
        });
    }

    static addOrder(order, callback) {
        db.query("INSERT INTO orders SET ?", order, (err, res) => {
            if (err) {
                console.log("err", err);
                callback(err, null);
                return;
            }
            callback(null, {
                ...order
            });
        });
    }

    static updateOrder(id, order, callback) {
        let sql = "UPDATE orders SET ? WHERE id = ?";
        db.query(sql, [order, id], (err, res) => {
            if (err) {
                console.log("error: ", err);
                callback(null, err);
                return;
            }
            if (res.affectedRows === 0) {
                callback({ kind: "not_found" }, null);
                return;
            }
            callback(null, {
                ...product
            });
        })
    }

    static deleteOrder(id, callback) {
        let sql = "DELETE FROM orders WHERE id = ?";
        db.query(sql, id, (err, res) => {
            if (err) {
                console.log("error: ", err);
                callback(null, err);
                return;
              }
              if (res.affectedRows === 0) {
                callback({ kind: "not_found" }, null);
                return;
              }
              callback(null, res);
        })
    }
}

module.exports = { Order, QL_Order }