

module.exports = (sequelize, DataTypes) => {

      const User = sequelize.define('User',
            {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                    primaryKey: true,
                },
                firstName: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                lastName: {
                    type: DataTypes.STRING
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        isEmail: true,
                    }
                },
                owner: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                },
            },

            // {
            //     tableName: 'Employees'
            // }

            // {
            //     freezeTableName: true
            // }

        );

        User.associate = (models) => {
            User.hasMany(models.booking, {
              foreignKey: {
                name: 'userId',
                allowNull: false
              }
            });

            User.hasMany(models.theater, {
                foreignKey: {
                  name: 'userId',
                  allowNull: false
                }
              });
          };

        


    return User;

}



// console.log(User === sequelize.models.User); // true
