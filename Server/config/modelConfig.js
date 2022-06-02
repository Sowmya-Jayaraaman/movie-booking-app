

const db = require('./dbConfig');
const createModels = require('./createModel');
const models = createModels(db.sequelize, db.DataTypes);

module.exports = { models }