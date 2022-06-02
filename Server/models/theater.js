

module.exports = (sequelize, DataTypes) => {

    const Theater = sequelize.define('Theater', 
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
        userId: {
          type: DataTypes.UUID,
          allowNull: false,
      },
    },
    )
    
    Theater.associate = (models) => {
        Theater.belongsTo(models.user, {
          foreignKey: {
            name: 'theaterId',
            allowNull: false
          }
        });

        Theater.hasMany(models.screen, {
          foreignKey: {
            name: 'theaterId',
            allowNull: false
          }
        });

        Theater.belongsToMany(models.movie, { through: models.movie_theater });
      };


    return Theater;

}