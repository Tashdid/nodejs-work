const expressJwt = require('express-jwt');
const config = require('../config/AuthConfig.json');

// Note: This will be modified in the future after we fix what to use to store
// tokens const { getDBResult } = require("../database/db"); const {
// getCountQuery } = require("../database/dbQueries"); reference:
// https://github.com/auth0/express-jwt#readme var isRevokedCallback =
// function(req, payload, done){
//   var issuer = payload.iss;
//   var tokenId = payload.jti;
//
//   data.getRevokedToken(issuer, tokenId, function(err, token){
//     if (err) { return done(err); }
//     return done(null, !!token);
//   });
// };

function jwt() {
    const {secret} = config;
    return expressJwt({
               secret,
               algorithms: ['HS256'],
               // Note: This will be used in the future after we fix what to use
               // to store tokens isRevoked: isRevokedCallback,
           })
        .unless({
            path: [
                '/logAPI/login/', '/servicesConfigurationsAPI/sentDirectConfig/'
            ],
        });
}

module.exports = jwt;
