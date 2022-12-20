const db = require('../../config/db')
const { v4: uuidv4 } = require('uuid');


class Comment {
    constructor(comment) {
        this.id = uuidv4();
        this.user = comment.user;
        this.room = comment.room;
        this.message = comment.message;
    }
}

class QL_Comment {
    static getAll(callback) {
        let query = "SELECT * FROM comments";
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
        let query = "SELECT C.id, C.room, C.message, A.name FROM `comments` C LEFT JOIN `account` A ON C.user = A.id WHERE C.room = ? ORDER BY C.message ASC LIMIT 0, 25";
        db.query(query, id, (err, res) => {
            if (err) {
                console.log("error: ", err);
                callback(null, err);
                return;
            }
            callback(null, res);
        });
    }

    static saveComment(comment, callback) {
        db.query("INSERT INTO comments SET ?", comment, (err, res) => {
            if (err) {
                console.log("err", err);
                callback(err, null);
                return;
            }
            callback(null, {
                ...comment
            });
        });
    }

}

module.exports = { Comment, QL_Comment }