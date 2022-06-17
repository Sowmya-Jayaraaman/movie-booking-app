
const sessionController = require('../controllers/session');
var Joi = require('joi');

module.exports = [

    {
        method: 'GET',
        path: '/session/{id}',
        config:{
            handler: sessionController.getSession,
            validate: {
                params: {
                    id: Joi.string().guid({ version: [ 'uuidv4' ] })
                }
            }
        } 
       
    },

    {
        method: 'GET',
        path: '/sessions',
        handler: sessionController.getSessions,
        
    },

 

//     {
//         method: 'POST',
//         path: '/session',
//         config: {     
//             auth: false,
//             handler: sessionController.createSession,
//                 validate: {
//                   payload: {
//                     userId: Joi.string().guid({ version: [ 'uuidv4' ] }).required(),
//                     isActive: Joi.boolean().required(),
//                   }
//         },
//     },
// },

{
    method: 'POST',
    path: '/logout',
    config: {   
        handler: sessionController.logout,
},
},

    {
        method: 'PUT',
        path: '/session/{id}',
        config: {
            handler: sessionController.updateSession,
            validate: {
                params: {
                    id: Joi.string().guid({ version: [ 'uuidv4' ] })
            },  
        },
    }
    },

  

]