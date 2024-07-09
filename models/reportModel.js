const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const Report = sequelize.define('Report', {
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
        doubtId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        userType: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        reportedUserId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        report: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        time: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        readByAdmin: {
          type: DataTypes.STRING,
          defaultValue: false,
        },
      });
    return{Report}
}