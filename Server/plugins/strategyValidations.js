const userService = require('../services/user');
const sessionService = require('../services/session');


const validateCookieFunc = async function (request, session, callback) {

    const { cid } = session;
    const condition = { id: cid }
    const result = await sessionService.getData(condition, false).then((session) => {
        return session.dataValues
    }).catch((err) => {
        return "Email is not found!"
    });

    return result.id ? callback(null, true) : callback(null, false);
}


const validateJWTFunc = async function (decoded, request, callback) {
    const token = request.headers.authorization.split(' ')[1];
    const decodeToken = jsonwebtoken.decode(token)
    const { id } = decodeToken;
    const condition = { id }
    const result = await userService.getData(condition, false).then((user) => {
        return user.dataValues
    }).catch((err) => {
        return "Email is not found!"
    });

    return result.id ? callback(null, true) : callback(null, false);

};


module.exports = {
    validateCookieFunc,
    validateJWTFunc
}