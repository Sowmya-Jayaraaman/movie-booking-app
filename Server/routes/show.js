
const showController = require('../controllers/show');
var Joi = require('joi');


module.exports = [

    {
        method: 'GET',
        path: '/show/{id}',
        config: {
            handler: showController.getShow,
            validate: {
                params: {
                    id: Joi.string().guid({ version: ['uuidv4'] })
                }
            }
        }

    },

    {
        method: 'GET',
        path: '/shows',
        handler: showController.getShows,
    },

    {
        method: 'POST',
        path: '/show',
        config: {
            handler: showController.createShow,
            validate: {
                payload: {
                    timing: Joi.string().required(),
                    date: Joi.date().required(),
                    screenId: Joi.string().guid({ version: [ 'uuidv4' ] }).required(),
                  }
            }
        }

    },

    {
        method: 'POST',
        path: '/shows',
        config: {

            handler: showController.createShows,
            validate: {
                payload: Joi.array().items(Joi.object().keys({
                        timing: Joi.string().required(),
                        date: Joi.date().required(),
                        screenId: Joi.string().guid({ version: [ 'uuidv4' ] }).required(),      
                })
                )
              }
        }

    },


    {
        method: 'PUT',
        path: '/show/{id}',
        config: {
            validate: {
                params: {
                    id: Joi.string().guid({ version: [ 'uuidv4' ] })
            },  
        },
        handler: showController.updateShow,
    }
    },

    {
        method: 'DELETE',
        path: '/show/{id}',
        config: {
            validate: {
                params: {
                    id: Joi.string().guid({ version: [ 'uuidv4' ] })
            },  
        },
        handler: showController.deleteShow,
    }
    }

]