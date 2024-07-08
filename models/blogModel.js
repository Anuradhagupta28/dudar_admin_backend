const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const Author = sequelize.define('Author', {
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
          unique: true,
          validate: {
            isEmail: true
          }
        },
        photo: {
          type: DataTypes.STRING,
          allowNull: true
        },
        about: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        linkedin: {
          type: DataTypes.STRING,
          allowNull: true
        },
        status: {
          type: DataTypes.STRING,
          defaultValue: true
        }
      });
    
      const Blog = sequelize.define('Blog', {
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
        authorName: {
          type: DataTypes.STRING,
          allowNull: false,
          
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        tags: {
          type: DataTypes.STRING,
          allowNull: true
        }
      });
    return { Author, Blog};
}

  