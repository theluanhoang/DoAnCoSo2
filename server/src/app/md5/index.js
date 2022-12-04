const md5 = require('md5');

module.exports = encrypt = (password) => md5(password);