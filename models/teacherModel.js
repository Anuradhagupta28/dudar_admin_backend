const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize) => {

    const Teacher = sequelize.define('Teacher', {
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
        exam: {
          type: DataTypes.STRING,
          allowNull: false
        },
        subject: {
          type: DataTypes.STRING,
          allowNull: false
        },
        avgRating: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        image: {
          type: DataTypes.STRING,
          allowNull: true
        }
      });
      
    return{Teacher}
}