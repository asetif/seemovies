const account = require('./account/lib.js');

module.exports = function (router, prefix = '/') {
    router.post(`${prefix}login`,account.login);
    router.post(`${prefix}signup`,account.signup);
}