

module.exports = (sequelize, DataTypes) => {

    const Screen = sequelize.define('Screen', 
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
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price_per_seat: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        booked_seats: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
        },
        theaterId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        
    },
    )
    
    Screen.associate = (models) => {
        Screen.belongsTo(models.theater, {
          foreignKey: {
            name: 'theaterId',
            allowNull: false
          }
        });
        Screen.hasMany(models.show, {
            foreignKey: {
              name: 'screenId',
              allowNull: false
            }
          });
      };


    return Screen;

}