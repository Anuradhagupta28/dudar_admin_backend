const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const Student = sequelize.define('Student', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        uuid: {
          type: DataTypes.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: true
          }
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: false
        },
        image: {
          type: DataTypes.STRING,
          allowNull: true
        },
        city: {
          type: DataTypes.STRING,
          allowNull: false
        },
        school: {
          type: DataTypes.STRING,
          allowNull: false
        }
      });
    return{Student}
}