const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    gender: {
      type: DataTypes.ENUM('male', 'female'),
      allowNull: false
    }
  });

  const UserSession = sequelize.define('UserSession', {
    timeSpent: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  const Collection = sequelize.define('Collection', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  const Connection = sequelize.define('Connection', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  const Call = sequelize.define('Call', {
    callDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('accepted', 'not_accepted'),
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return { User, UserSession, Collection, Connection, Call };
};