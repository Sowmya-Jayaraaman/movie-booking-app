
const userController = require('../controllers/user');
var Joi = require('joi');

module.exports = [

    {
        method: 'GET',
        path: '/user/{id}',
        config:{
            handler: userController.getUser,
            validate: {
                params: {
                    id: Joi.string().guid({ version: [ 'uuidv4' ] })
                }
            }
        }
       
    },

    {
        method: 'GET',
        path: '/users',
        handler: userController.getUsers,
        
    },

    {
        method: 'POST',
        path: '/login',
        config: {   
            auth: false,
            handler: userController.login,
            validate: {
              payload: {
                email: Joi.string().email().required(),
                password: Joi.string().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{8,40}$/).required(),
              }
    },
      
},
    },

    {
        method: 'POST',
        path: '/register',
        config: {     
            auth: false,
            handler: userController.register,
                validate: {
                  payload: {
                    firstName: Joi.string().required(),
                    lastName: Joi.string().optional(),
                    email: Joi.string().email().required(),
                    password: Joi.string().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{8,40}$/).required(),
                    owner: Joi.boolean().required(),
                  }
        },
    },
},

    {
        method: 'PUT',
        path: '/user/{id}',
        config: {
            handler: userController.updateUser,
            validate: {
                params: {
                    id: Joi.string().guid({ version: [ 'uuidv4' ] })
            },  
        },
    }
    },

    {
        method: 'DELETE',
        path: '/user/{id}',
        config: {
            handler: userController.deleteUser,
            validate: {
                params: {
                    id: Joi.string().guid({ version: [ 'uuidv4' ] })
            },  
        },
    }
    }

]