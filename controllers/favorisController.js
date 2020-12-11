const account = require('./account/favoris.js');

module.exports = function (router, prefix = '/') {
    router.post(`${prefix}fav`,account.favorisInsert);
}