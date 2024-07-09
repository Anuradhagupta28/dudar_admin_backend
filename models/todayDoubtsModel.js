const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const TodayDoubts = sequelize.define('TodayDoubts', {
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
        studentId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        chapterId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        question: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        callType: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        accepted: {
          type: DataTypes.INTEGER,
          defaultValue: false,
        },
        teacherId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        time: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        acceptTime: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },
          callingTeachers: {
            type: DataTypes.INTEGER,
            allowNull: false,
          }
      });
    return{TodayDoubts}
}