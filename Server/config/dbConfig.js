const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('movie_booking', 'sowmya', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    port: '5432',
    logging: false
});


async function startDB() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}



module.exports = { sequelize, DataTypes, startDB }
