const appConstants = require('../constants/appConstants');
const validations = require('./strategyValidations');


module.exports = [
    {
        'name': 'session-cookie',
        'scheme': 'cookie',
        'options': {
            cookie: 'cid',
            password: appConstants.cookieKey,
            validateFunc: validations.validateCookieFunc,
            isSecure: false,
            redirectTo: '/login',
          }
    },
    {
        'name': 'myjwt',
        'scheme': 'jwt',
        'options': { 
              key: appConstants.jwtKey, 
              validateFunc: validations.validateJWTFunc,
            }
    }
]