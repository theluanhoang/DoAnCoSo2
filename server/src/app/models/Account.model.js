const db = require('../../config/db')

const jwt = require("jsonwebtoken")
const { v4: uuidv4 } = require('uuid');


class Account {
    constructor(account) {
        this.id = uuidv4();
        this.name = account.name
        this.address = account.address
        this.phoneNumber = account.phoneNumber
        this.email = account.email
        this.password = account.password
        this.admin = account.admin
    }
}

class QL_Account {
    // GENERATE ACCESS TOKEN FOR
    static generateAccessToken(account) {
        return jwt.sign({
            id: account.id || '',
            admin: account.admin
        },
            process.env.JWT_ACCESS_KEY,
            { expiresIn: "365d" }
        );
    }

    // GENERATE REFRESH TOKEN FOR
    static generateRefreshToken(account) {
        return jwt.sign({
            id: account.id,
            admin: account.admin
        },
            process.env.JWT_REFRESH_KEY,
            { expiresIn: "365d" }
        );
    }
    static getAll(callback) {
        let query = "SELECT * FROM account";
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
        let query = "SELECT * FROM account WHERE id = ?";
        db.query(query, id, (err, res) => {
            if (err) {
                console.log("error: ", err);
                callback(null, err);
                return;
            }
            callback(null, res);
        });
    }

    static addAccount(account, callback) {
        db.query("INSERT INTO account SET ?", account, (err, res) => {
            if (err) {
                console.log("err", err);
                callback(err, null);
                return;
            }
            callback(null, {
                ...account
            });
        });
    }

    static signIn(account, callback) {
        try {
            let password = encrypt(account.password)

            db.query("SELECT * FROM account WHERE email = ? AND password = ?", [account.email, password], (err, data) => {
                if (err) {
                    callback(err, null);
                }
                if (data) {
                    let user = data[0]
                    const accessToken = this.generateAccessToken(user)
                    const refreshToken = this.generateRefreshToken(user)
                    const { password, ...others } = user;
                    callback(null, { ...others, accessToken, refreshToken })
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    static handleRefresh(refreshToken, array, callback) {
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, account) => {
            if (err) {
                callback(err, null);
            }
            array = array.filter((token) => token !== refreshToken);
            const newAccessToken = this.generateAccessToken(account);
            const newRefreshToken = this.generateRefreshToken(account);
            array.push(newRefreshToken);
            callback(null, { newAccessToken, newRefreshToken, array })
        })
    }

    static updateAccount(id, account, callback) {
        let sql = "UPDATE account SET ? WHERE id = ?";
        db.query(sql, [account, id], (err, res) => {
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
                ...account
            });
        })
    }

    static deleteAccount(id, callback) {
        let sql = "DELETE FROM account WHERE id = ?";
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

module.exports = { Account, QL_Account }