const jsonwebtoken = require("jsonwebtoken");
const userService = require("../services/user");
const appConstants = require('../constants/appConstants');
const sessionController = require("../controllers/session");

const getUsers = (request, reply) => {

    return [
        { 'name': 'Titanic', 'year': '1997' },
        { 'name': 'Titanic', 'year': '1997' }
    ]
}

const getUser = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}


const register = async (request, reply) => {

    const { firstName, lastName, password, email, owner } = request.payload;

    const data = { firstName, lastName, password, email, owner };

    try {
        const result = await userService.createData(data, false)

        if (result) {
            reply({ ...result.dataValues });
        }
        
    } 
    catch (err) {
        reply({ "message": err.errors[0].message });
    }


}

const login = async (request, reply) => {

    const { email, password } = request.payload;

    const condition = { email }

    try {
        const result = await userService.getData(condition, false);

        if (result) {

            const jwt = jsonwebtoken.sign({ id: result.dataValues.id, owner: result.dataValues.owner }, appConstants.jwtKey);
            const sessionData = await sessionController.createSession({ userId: result.dataValues.id, isActive: true });
            request.cookieAuth.set({ cid: sessionData.id });
            reply({ ...result.dataValues, token: jwt });

        }
        else {
            reply({'message': 'Email not found!'});
        }

    } 
    catch (err) {
        reply({ "message": err });
    }

}


const updateUser = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}


const deleteUser = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}


module.exports = {
    getUser,
    getUsers,
    register,
    login,
    updateUser,
    deleteUser,
} 
