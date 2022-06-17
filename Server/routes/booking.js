
const bookingController = require('../controllers/booking');
var Joi = require('joi');


module.exports = [

    {
        method: 'GET',
        path: '/booking/{id}',
        config:{
            handler: bookingController.getBooking,
            validate: {
                params: {
                    id: Joi.string().guid({ version: [ 'uuidv4' ] })
                }
            }
        }
       
    },

    {
        method: 'GET',
        path: '/bookings',
        handler: bookingController.getBookings,
    },

    {
        method: 'POST',
        path: '/booking',
        config: {
            
        handler: bookingController.createBooking,
            validate: {
              payload: {
                user_id: Joi.string().required(),
                theater_id: Joi.string().required(),
                screen_id: Joi.string().required(),
                show_id: Joi.string().required(),
                seats_count: Joi.number().required(),
                booked_seats: Joi.array().items(Joi.number()),
                total_cost: Joi.number().required(),
              }
            }
          }
      
    },

    {
        method: 'POST',
        path: '/bookings',
        config: {
            
        handler: bookingController.createBookings,
            validate: {
              payload: Joi.array().items(Joi.object().keys({
                user_id: Joi.string().required(),
                theater_id: Joi.string().required(),
                screen_id: Joi.string().required(),
                show_id: Joi.string().required(),
                seats_count: Joi.number().required(),
                booked_seats: Joi.array().items(Joi.number()),
                total_cost: Joi.number().required(),
              })
              )
            }
        }
    },


    {
        method: 'PUT',
        path: '/booking/{id}',
        config: {  
            handler: bookingController.updateBooking,
                validate: {
                    params: {
                        id: Joi.string().guid({ version: [ 'uuidv4' ] })
                    },
                  payload: {
                    user_id: Joi.string().required(),
                    theater_id: Joi.string().required(),
                    screen_id: Joi.string().required(),
                    show_id: Joi.string().required(),
                    seats_count: Joi.number().required(),
                    booked_seats: Joi.array().items(Joi.number()),
                    total_cost: Joi.number().required(),
                  }
                }
              }
       
    },

    {
        method: 'DELETE',
        path: '/booking/{id}',
        config: {
            validate: {
                params: {
                    id: Joi.string().guid({ version: [ 'uuidv4' ] })
            },  
        },
        handler: bookingController.deleteBooking,
       
    }
}

]