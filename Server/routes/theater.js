
const theaterController = require('../controllers/theater');
var Joi = require('joi');


module.exports = [

    {
        method: 'GET',
        path: '/theater/{id}',
        config:{
            handler: theaterController.getTheater,
            validate: {
                params: {
                    id: Joi.string().guid({ version: [ 'uuidv4' ] })
                }
            }
        }
       
    },

    {
        method: 'GET',
        path: '/theaters',
        handler: theaterController.getTheaters,
    },

    {
        method: 'POST',
        path: '/theater',
        config: { 
        handler: theaterController.createTheater,
            validate: {
              payload: {
                name: Joi.string().required(),
                userId: Joi.string().guid({ version: [ 'uuidv4' ] }),
              }
            }
          }
    },

    {
        method: 'POST',
        path: '/theaters',
        config: {
            
        handler: theaterController.createTheaters,
        validate: {
          payload: Joi.array().items(Joi.object().keys({
            name: Joi.string().required(),
            userId: Joi.string().guid({ version: [ 'uuidv4' ] }),
          })
          )
        }
          }
      
    },

    {
        method: 'PUT',
        path: '/theater/{id}', 
        config: {
          handler: theaterController.updateTheater,
          validate: {
              params: {
                  id: Joi.string().guid({ version: [ 'uuidv4' ] })
          },  
      },
    }
    },

    {
        method: 'DELETE',
        path: '/theater/{id}',
        config: {
          handler: theaterController.deleteTheater,
          validate: {
              params: {
                  id: Joi.string().guid({ version: [ 'uuidv4' ] })
          },  
      },
    }
  }

]