
module.exports = (sequelize, DataTypes) => {

    const Booking = sequelize.define('Booking', 
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.UUID,
        },
        theater_id: {
            type: DataTypes.UUID,
        },
        screen_id: {
            type: DataTypes.UUID,
        },
        show_id: {
            type: DataTypes.UUID,
        },
        seats_count: {
            type: DataTypes.INTEGER,
        },
        booked_seats: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
        },
        total_cost: {
            type: DataTypes.INTEGER,
        },
    },
    )

    Booking.associate = (models) => {        
        Booking.belongsTo(models.user, {
          foreignKey: {
            name: 'userId',
            allowNull: false
          }
        });
      };

    return Booking;

}