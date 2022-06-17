
const movieTheaterController = require('../controllers/movie_theater');
var Joi = require('joi');


module.exports = [

    {
        method: 'GET',
        path: '/movieTheater/{id}',
        config:{
            handler: movieTheaterController.getMovieTheater,
            validate: {
                params: {
                    id: Joi.string().guid({ version: [ 'uuidv4' ] })
                }
            }
        }
       
    },

    {
        method: 'GET',
        path: '/movieTheaters',
        handler: movieTheaterController.getMovieTheaters,
    },

    {
        method: 'POST',
        path: '/movieTheater',
        config: {
        handler: movieTheaterController.createMovieTheater,
            validate: {
              payload: {
                movie_id: Joi.string().guid({ version: [ 'uuidv4' ] }),
                theater_id: Joi.string().guid({ version: [ 'uuidv4' ] }),
              }
            }
          }
    },

    {
        method: 'POST',
        path: '/movieTheaters',
        config: {
        handler: movieTheaterController.createMovieTheaters,
            validate: {
              payload: Joi.array().items(Joi.object().keys({
                movie_id: Joi.string().guid({ version: [ 'uuidv4' ] }),
                theater_id: Joi.string().guid({ version: [ 'uuidv4' ] }),
              })
              )
            }
          }    
    },


    {
        method: 'PUT',
        path: '/movieTheater/{id}',
        config: {
          validate: {
              params: {
                  id: Joi.string().guid({ version: [ 'uuidv4' ] })
          },  
      },
        handler: movieTheaterController.updateMovieTheater,
    }
    },

    {
        method: 'DELETE',
        path: '/movieTheater/{id}',
        config: {
          validate: {
              params: {
                  id: Joi.string().guid({ version: [ 'uuidv4' ] })
          },  
      },
        handler: movieTheaterController.deleteMovieTheater,
    }
    }

]