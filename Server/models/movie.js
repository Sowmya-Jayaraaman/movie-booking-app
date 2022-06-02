const { models } = require('../config/modelConfig')

module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
            },
            image: {
                type: DataTypes.BLOB,
            },
            ratings: {
                type: DataTypes.INTEGER,
            },
            language: {
                type: DataTypes.STRING,
            },
            runtime: {
                type: DataTypes.STRING,
            },
            releaseDate: {
                type: DataTypes.DATEONLY,
            },
            genre: {
                type: DataTypes.STRING,
            },


        },
    );

    Movie.associate = (models) => {
        Movie.belongsToMany(models.theater, { through: models.movie_theater });
      };


    return Movie
}