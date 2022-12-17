const db = require('../../config/db')
const { v4: uuidv4 } = require('uuid');

class FeedBack {
    constructor(feedback) {
        this.id = uuidv4();
        this.userId = feedback.userId;
        this.content = feedback.content;
    }
}

class QL_FeedBack {
    static getAll(callback) {
        let query = "SELECT * FROM feed_back";
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
        let query = "SELECT * FROM feed_back WHERE id = ?";
        db.query(query, id, (err, res) => {
            if (err) {
                console.log("error: ", err);
                callback(null, err);
                return;
            }
            callback(null, res);
        });
    }

    static addFeedBack(feedback, callback) {
        db.query("INSERT INTO feed_back SET ?", feedback, (err, res) => {
            if (err) {
                console.log("err", err);
                callback(err, null);
                return;
            }
            callback(null, {
                ...feedback
            });
        });
    }

    static updateFeedBack(id, product, callback) {
        let sql = "UPDATE feed_back SET ? WHERE id = ?";
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

    static deleteFeedBack(id, callback) {
        let sql = "DELETE FROM feed_back WHERE id = ?";
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

module.exports = { FeedBack, QL_FeedBack }