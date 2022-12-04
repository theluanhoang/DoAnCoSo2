const { Account, QL_Account } = require('../models/Account.model')
const encrypt = require('../md5')

let refreshTokens = [];

class AccountControl {
    create(req, res) {
        let password = encrypt(req.body.password);
        const newAccount = new Account({
            ...req.body,
            password: password
        })
        QL_Account.addAccount(newAccount, (err, result) => {
            if (err) return res.status(500).end('error: ', err)
            else {
                res.status(200).send(result);
            }
        });
    }

    login(req, res) {
        const account = req.body
        QL_Account.signIn(account, (err, data) => {
            if (err) return res.status(250).send('error: ', err)
            else {
                const { refreshToken, ...other } = data
                let account = { ...other }
                refreshTokens.push(refreshToken);
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict",
                })
                    .status(200).json(account);
            }
        })
    }

    getAccount(req, res) {
        let id = req?.params.id
        QL_Account.getById(id, (err, data) => {
            if (err) return res.send("err", err);
            else res.status(200).send(data);
        });
    }
    index(req, res) {
        QL_Account.getAll((err, data) => {
            if (err) return res.send("err", err);
            else res.status(200).send(data);
        });
    }
    getCustomers(req, res) {
        QL_Account.getAll((err, data) => {
            if (err) return res.send("err", err);
            else res.status(200).send(data);
        });
    }

    update(req, res) {
        const newAccount = new Account(req.body);
        QL_Account.updateAccount(req.params.id, newAccount, (err, result) => {
            if (err) {
                console.log('err: ', err);
            } else {
                res.status(200).send(result);
            }
        });
    }

    delete(req, res) {
        QL_Account.deleteAccount(req.params.id, (err, result) => {
            if (err) {
                console.log('err: ', err);
            } else {
                res.status(200).send(result);
            }

        });
    }
    requestRefreshToken(req, res) {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.status(401).send("You're not authenticated");
        }
        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json("Refresh token is not valid")
        }
        QL_Account.handleRefresh(refreshToken, refreshTokens, (err, tokens) => {
            if (err) {
                res.send(err);
            }
            if (tokens) {
                const { newRefreshToken, newAccessToken, array } = tokens
                const accessToken = newAccessToken
                refreshTokens = array
                console.log('refreshToken: ', refreshToken);
                res.cookie("newRefreshToken", newRefreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict",
                })
                    .status(200).json({ accessToken: accessToken });
            }
        });
    }

    logout(req, res) {
        res.clearCookie('refreshToken');
        refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken);
        res.status(200).json("Logged out!");
    }
}

module.exports = new AccountControl();

