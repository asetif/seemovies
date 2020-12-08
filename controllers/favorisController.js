const account = require('./account/favoris.js');

module.exports = function (app) {
    app.post('/fav',account.favorisInsert);
}