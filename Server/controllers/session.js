const sessionService = require("../services/session");

const getSessions = (request, reply) => {

    return [
        { 'name': 'Titanic', 'year': '1997' },
        { 'name': 'Titanic', 'year': '1997' }
    ]
}

const getSession = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}

const createSession = async (data) => {

    try {
        const result = await sessionService.createData(data, false)

        if (result) {
            return { ...result.dataValues };
        }
        
    } 
    catch (err) {
        return  { "message": err.errors[0].message };
    }   
}


const updateSession = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}


const logout = async (request, reply) => {

    const condition = { id: request.auth.credentials.cid}

    try {
        const result = await sessionService.deleteData(condition)

        if (result) {
            request.cookieAuth.clear();
            reply({ "message": "Logged out successfully!" });
        }  
    } 
    catch (err) {
        return  { "message": err.errors[0].message };
    }
    
}


module.exports = {
    getSession,
    getSessions,
    createSession,
    updateSession,
    logout,
} 



