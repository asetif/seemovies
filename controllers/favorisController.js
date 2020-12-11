const account = require('./account/favoris.js');

module.exports = function (router, theo = '/') {
    router.post(`${theo}fav`,account.favorisInsert);
}