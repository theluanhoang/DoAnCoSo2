const db = require('../../config/db')
const { v4: uuidv4 } = require('uuid');

class ShoppingCart {
    constructor(shoppingCartItem) {
        this.id = uuidv4();
        this.customerId = shoppingCartItem.customerId;
        this.productTitle = shoppingCartItem.productTitle;
        this.productPriceCurrent = shoppingCartItem.productPriceCurrent;
        this.productPriceCost = shoppingCartItem.productPriceCost;
        this.productSalePercent = shoppingCartItem.productSalePercent;
        this.productImage = shoppingCartItem.productImage;
        this.quantity = 1;
    }
}

class QL_ShoppingCart {
    static getAll(userId, callback) {
        let query = "SELECT * FROM shopping_cart WHERE customerId = ?";
        db.query(query, userId, (err, res) => {
            if (err) {
                console.log("error: ", err);
                callback(null, err);
                return;
            }
            callback(null, res);
        });
    }
    static getById(id, callback) {
        let query = "SELECT * FROM product WHERE id = ?";
        db.query(query, id, (err, res) => {
            if (err) {
                console.log("error: ", err);
                callback(null, err);
                return;
            }
            callback(null, res);
        });
    }

    static addShoppingCart(shoppingCartItem, callback) {
        db.query("INSERT INTO shopping_cart SET ?", shoppingCartItem, (err, res) => {
            if (err) {
                console.log("err", err);
                callback(err, null);
                return;
            }
            callback(null, {
                ...shoppingCartItem
            });
        });
    }

    static updateShoppingCart(shoppingCartItem, callback) {
        let sql = "UPDATE shopping_cart SET quantity = ? WHERE id = ? AND customerId = ?";
        db.query(sql, [shoppingCartItem.quantity, shoppingCartItem.itemId, shoppingCartItem.customerId], (err, res) => {
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
                ...shoppingCartItem
            });
        })
    }

    static deleteShoppingCart(customerId, productId, callback) {
        let sql = "DELETE FROM `shopping_cart` WHERE `shopping_cart`.`id` = ? AND `shopping_cart`.`customerId` = ?";
        db.query(sql, [productId, customerId], (err, res) => {
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

module.exports = { ShoppingCart, QL_ShoppingCart }