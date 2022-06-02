

module.exports = (sequelize, DataTypes) => {

    const Show = sequelize.define('Show', 
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        timing: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        screenId: {
          type: DataTypes.UUID,
          allowNull: false,
      },
    },
    )

    Show.associate = (models) => {
        Show.belongsTo(models.screen, {
          foreignKey: {
            name: 'screenId',
            allowNull: false
          }
        });
      };


    return Show;

}