const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize) => {

  const UserRole = sequelize.define('UserRole', {
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
    roleName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    permission: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

      const SystemUser = sequelize.define('SystemUser', {
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
        role: {
          type: DataTypes.STRING,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: false
        },
        profilePic: {
          type: DataTypes.STRING,
          allowNull: true
        },
        status: {
          type: DataTypes.ENUM('active', 'inactive'),
          defaultValue: 'active'
        }
      });
      const MenuPermission = sequelize.define('MenuPermission', {
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
        role: {
          type: DataTypes.STRING,
          allowNull: false
        },
        menu: {
          type: DataTypes.STRING,
          allowNull: false
        },
        submenu: {
          type: DataTypes.STRING,
          allowNull: true
        },
        url: {
          type: DataTypes.STRING,
          allowNull: false
        }
      });

    return {SystemUser,UserRole, MenuPermission};
}