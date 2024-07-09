const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const TeacherQuiz = sequelize.define('TeacherQuiz', {
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
        questionImage: {
          type: DataTypes.STRING,
          allowNull: false,
        },
       
        correct: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        mark: {
          type: DataTypes.FLOAT,
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
      
    return{TeacherQuiz}
}