const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const Question = sequelize.define('Question', {
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
        question: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        solution: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        createdBy: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        viewQuestion: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM('active', 'inactive'),
          defaultValue: 'active',
        },
        reviewedBy: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      });
      
    return{Question}
}