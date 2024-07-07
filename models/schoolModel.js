const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const School = sequelize.define('School', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    groupName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    schoolName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    schoolCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  const Branch = sequelize.define('Branch', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    school: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Schools',
        key: 'id'
      }
    },
    branch: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    trial: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    discount: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    subscription: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  const StudentCode = sequelize.define('StudentCode', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    school: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Schools',
        key: 'id'
      }
    },
    branch: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Branches',
        key: 'id'
      }
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    printStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    useStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return { School, Branch, StudentCode };
};