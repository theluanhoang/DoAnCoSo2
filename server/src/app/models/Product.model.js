const db = require('../../config/db')
const { v4: uuidv4 } = require('uuid');

class Product {
    constructor(product) {
        this.id = uuidv4();
        this.title = product?.title;
        this.image = product?.image;
        this.qty = product?.qty;
        this.priceCurrent = product?.priceCurrent;
        this.status = product?.status;
        this.category = product?.category;
        this.priceCost = product?.priceCost;
        this.description = product?.description;
        this.salePercent = product?.salePercent;
        this.distributor = product?.distributor;
    }
}

class QL_Product {
    static getAll(callback) {
        let query = "SELECT * FROM product";
        db.query(query, (err, res) => {
            if (err) {
                console.log("error: ", err);
                callback(null, err);
                return;
            }
            callback(null, res);
        });
    }

    static order(query, callback) {
        db.query(query, (err, res) => {
            if (err) {
                console.log("error: ", err);
                callback(null, err);
                return;
            }
            callback(null, res);
        });
    }
    
    static getLimit(limit, callback) {
        let query = "SELECT * FROM product LIMIT ?";
        db.query(query, limit, (err, res) => {
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

    static addProduct(product, callback) {
        db.query("INSERT INTO product SET ?", product, (err, res) => {
            if (err) {
                console.log("err", err);
                callback(err, null);
                return;
            }
            callback(null, {
                ...product
            });
        });
    }

    static updateProduct(id, product, callback) {
        let sql = "UPDATE product SET ? WHERE id = ?";
        db.query(sql, [product, id], (err, res) => {
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

    static deleteProduct(id, callback) {
        let sql = "DELETE FROM product WHERE id = ?";
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

    static search(key, callback) {
        let sql = `SELECT * FROM product WHERE title LIKE '%${key}%' OR category LIKE '%${key}%'`
        db.query(sql, (err, res) => {
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

module.exports = { Product, QL_Product }