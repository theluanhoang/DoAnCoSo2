const db = require('../../config/db')

class Category {
    constructor(category) {
        this.id = category.id;
        this.category_item = category.category_item;
    }
}

class QL_Category {
    static getAll(callback) {
        let query = "SELECT * FROM category";
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
        let query = "SELECT * FROM category WHERE id = ?";
        db.query(query, id, (err, res) => {
            if (err) {
                console.log("error: ", err);
                callback(null, err);
                return;
            }
            callback(null, res);
        });
    }

    static addCategory(category, callback) {
        db.query("INSERT INTO category SET ?", category, (err, res) => {
            if (err) {
                console.log("err", err);
                callback(err, null);
                return;
            }
            callback(null, {
                ...category
            });
        });
    }

}

module.exports = { Category, QL_Category }