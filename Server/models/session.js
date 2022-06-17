
module.exports = (sequelize, DataTypes) => {

    const Session = sequelize.define('Session', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }

    })

    Session.associate = (models) => {        
        Session.belongsTo(models.user, {
          foreignKey: {
            name: 'userId',
            allowNull: false
          }
        });
      };

    return Session;
}