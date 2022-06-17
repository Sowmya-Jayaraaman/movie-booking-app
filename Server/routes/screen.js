
const screenController = require('../controllers/screen');
var Joi = require('joi');


module.exports = [

    {
        method: 'GET',
        path: '/screen/{id}',
        config:{
            handler: screenController.getScreen,
            validate: {
                params: {
                    id: Joi.string().guid({ version: [ 'uuidv4' ] })
                }
            }
        }
       
    },

    {
        method: 'GET',
        path: '/screens',
        handler: screenController.getScreens,
    },

    {
        method: 'POST',
        path: '/screen',
        config: {
            
        handler: screenController.createScreen,
            validate: {
              payload: {
                name: Joi.string().required(),
                capacity: Joi.number().required(),
                price_per_seat: Joi.number().required(),
                booked_seats: Joi.array().items(Joi.number()),
                theaterId: Joi.string().guid({ version: [ 'uuidv4' ] })
              }
            }
          }
      
    },

    {
        method: 'POST',
        path: '/screens',
        config: {
            
        handler: screenController.createScreens,
            validate: {
              payload: Joi.array().items(Joi.object().keys({
                name: Joi.string().required(),
                capacity: Joi.number().required(),
                price_per_seat: Joi.number().required(),
                booked_seats: Joi.array().items(Joi.number()),
                theaterId: Joi.string().guid({ version: [ 'uuidv4' ] })
              }))
            }
          }
      
    },


    {
        method: 'PUT',
        path: '/screen/{id}',
        config: {
          validate: {
              params: {
                  id: Joi.string().guid({ version: [ 'uuidv4' ] })
          },  
      },
        handler: screenController.updateScreen,
    }
    },

    {
        method: 'DELETE',
        path: '/screen/{id}',
        config: {
          validate: {
              params: {
                  id: Joi.string().guid({ version: [ 'uuidv4' ] })
          },  
      },
        handler: screenController.deleteScreen,
    }
    }

]