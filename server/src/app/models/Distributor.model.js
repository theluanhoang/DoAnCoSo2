const db = require('../../config/db')

class Distributor {
    constructor(distributor) {
        this.id = distributor.id;
        this.supplier = distributor.supplier;
    }
}

class QL_Distributor {
    static getAll(callback) {
        let query = "SELECT * FROM distributor";
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
        let query = "SELECT * FROM distributor WHERE id = ?";
        db.query(query, id, (err, res) => {
            if (err) {
                console.log("error: ", err);
                callback(null, err);
                return;
            }
            callback(null, res);
        });
    }

    static addDistributor(distributor, callback) {
        db.query("INSERT INTO distributor SET ?", distributor, (err, res) => {
            if (err) {
                console.log("err", err);
                callback(err, null);
                return;
            }
            callback(null, {
                ...distributor
            });
        });
    }

}

module.exports = { Distributor, QL_Distributor }