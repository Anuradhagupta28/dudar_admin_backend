const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const StudentQuiz = sequelize.define('StudentQuiz', {
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
        exam: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        subject: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        chapter: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        question: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        image: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        correct: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        solution: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        difficultyLevel: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        mark: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
          }
      });
    return{StudentQuiz}
}