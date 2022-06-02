

module.exports = (sequelize, DataTypes) => {

    const Movie_Theater = sequelize.define('Movie_Theater', 
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        movie_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        theater_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
    },
    )


    return Movie_Theater;

}