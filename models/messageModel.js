const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const Message = sequelize.define('Message', {
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
        image: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        userType: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        order: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        time: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        visible: {
          type: DataTypes.STRING,
          defaultValue: true,
        }
     
      });
      
    return{Message}
}