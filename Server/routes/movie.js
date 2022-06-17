
const movieController = require('../controllers/movie');
var Joi = require('joi');

module.exports = [

  {
    method: 'GET',
    path: '/movies/{id}',
    config: {
      handler: movieController.getMovie,
      validate: {
          params: {
              id: Joi.string().guid({ version: [ 'uuidv4' ] })
      },  
  },
}
  },

  {
    method: 'GET',
    path: '/movies',
    handler:  movieController.getMovies,
    // config: {
    //   auth: { mode: 'try' }
    // }
    // config: { auth: false }
    // config: { auth: 'myjwt' }
  },

  {
    method: 'POST',
    path: '/movie',
    config: {
      handler: movieController.createMovie,
      validate: {
        payload: {
          name: Joi.string().required(),
          description: Joi.string(),
          image: Joi.string().required(),
          ratings: Joi.string(),
          language: Joi.string().required(),
          runtime: Joi.string().required(),
          releaseDate: Joi.string().required(),
          genre: Joi.string().required(),
        }
      }
    }
  },

  {
    method: 'POST',
    path: '/movies',
    config: {    
      handler: movieController.createMovies,
      validate: {
            payload: Joi.array().items(Joi.object().keys({
              name: Joi.string().required(),
              description: Joi.string(),
              image: Joi.string().required(),
              ratings: Joi.string(),
              language: Joi.string().required(),
              runtime: Joi.string().required(),
              releaseDate: Joi.string().required(),
              genre: Joi.string().required(),
            })
            )
          }
      }
  },

  {
    method: 'PUT',
    path: '/movie/{id}',
    config: {
      handler: movieController.updateMovie,
      validate: {
          params: {
              id: Joi.string().guid({ version: [ 'uuidv4' ] })
      },  
  },
  }
  },

  {
    method: 'DELETE',
    path: '/movie/{id}',
    config: {
      handler: movieController.deleteMovie,
      validate: {
          params: {
              id: Joi.string().guid({ version: [ 'uuidv4' ] })
      },  
  },
}
  }

]