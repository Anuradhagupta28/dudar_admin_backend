const sequelize = require('../config/database');

const { UserRole } = require('../models/roleModel')(sequelize);
const { MenuPermission } = require('../models/roleModel')(sequelize);
const { SystemUser } = require('../models/roleModel')(sequelize);

exports.createUser = async (req, res) => {
  try {
    const { roleName, permission } = req.body;
    const newUser = await UserRole.create({ roleName, permission });
    res.status(201).json({ message: 'User role created successfully', newUser });
  } catch (error) {
    console.error('Error creating user role:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserRole.findAll();
    res.json({ message: 'User roles fetched successfully', users });
  } catch (error) {
    console.error('Error fetching user roles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await UserRole.findByPk(req.params.uuid);
    if (user) {
      res.json({ message: 'User role fetched successfully', user });
    } else {
      res.status(404).json({ error: 'User role not found' });
    }
  } catch (error) {
    console.error('Error fetching user role:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { roleName, permission } = req.body;
    const [updated] = await UserRole.update(
      { roleName, permission },
      { where: { uuid: req.params.uuid } }
    );
    if (updated) {
      const updatedUser = await UserRole.findByPk(req.params.uuid);
      res.json({ message: 'User role updated successfully', updatedUser });
    } else {
      res.status(404).json({ error: 'User role not found' });
    }
  } catch (error) {
    console.error('Error updating user role:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleted = await UserRole.destroy({ where: { uuid: req.params.uuid } });
    if (deleted) {
      res.status(200).json({ message: 'User role deleted successfully' });
    } else {
      res.status(404).json({ error: 'User role not found' });
    }
  } catch (error) {
    console.error('Error deleting user role:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// For system user
exports.createSystemUser = async (req, res) => {
  try {
    const { role, name, email, phone, profilePic, status } = req.body;
    const newUser = await SystemUser.create({ role, name, email, phone, profilePic, status });
    res.status(201).json({ message: 'System user created successfully', newUser });
  } catch (error) {
    console.error('Error creating system user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllSystemUsers = async (req, res) => {
  try {
    const users = await SystemUser.findAll();
    res.json({ message: 'System users fetched successfully', users });
  } catch (error) {
    console.error('Error fetching system users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getSystemUserById = async (req, res) => {
  try {
    const user = await SystemUser.findByPk(req.params.uuid);
    if (user) {
      res.json({ message: 'System user fetched successfully', user });
    } else {
      res.status(404).json({ error: 'System user not found' });
    }
  } catch (error) {
    console.error('Error fetching system user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateSystemUser = async (req, res) => {
  try {
    const { role, name, email, phone, profilePic, status } = req.body;
    const [updated] = await SystemUser.update(
      { role, name, email, phone, profilePic, status },
      { where: { uuid: req.params.uuid } }
    );
    if (updated) {
      const updatedUser = await SystemUser.findByPk(req.params.uuid);
      res.json({ message: 'System user updated successfully', updatedUser });
    } else {
      res.status(404).json({ error: 'System user not found' });
    }
  } catch (error) {
    console.error('Error updating system user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteSystemUser = async (req, res) => {
  try {
    const deleted = await SystemUser.destroy({ where: { uuid: req.params.uuid } });
    if (deleted) {
      res.status(200).json({ message: 'System user deleted successfully' });
    } else {
      res.status(404).json({ error: 'System user not found' });
    }
  } catch (error) {
    console.error('Error deleting system user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// For menu permission
exports.createMenuPermission = async (req, res) => {
  try {
    const { role, menu, submenu, url } = req.body;
    const newPermission = await MenuPermission.create({ role, menu, submenu, url });
    res.status(201).json({ message: 'Menu permission created successfully', newPermission });
  } catch (error) {
    console.error('Error creating menu permission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllMenuPermissions = async (req, res) => {
  try {
    const permissions = await MenuPermission.findAll();
    res.json({ message: 'Menu permissions fetched successfully', permissions });
  } catch (error) {
    console.error('Error fetching menu permissions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getMenuPermissionById = async (req, res) => {
  try {
    const permission = await MenuPermission.findByPk(req.params.uuid);
    if (permission) {
      res.json({ message: 'Menu permission fetched successfully', permission });
    } else {
      res.status(404).json({ error: 'Menu permission not found' });
    }
  } catch (error) {
    console.error('Error fetching menu permission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateMenuPermission = async (req, res) => {
  try {
    const { role, menu, submenu, url } = req.body;
    const [updated] = await MenuPermission.update(
      { role, menu, submenu, url },
      { where: { uuid: req.params.uuid } }
    );
    if (updated) {
      const updatedPermission = await MenuPermission.findByPk(req.params.uuid);
      res.json({ message: 'Menu permission updated successfully', updatedPermission });
    } else {
      res.status(404).json({ error: 'Menu permission not found' });
    }
  } catch (error) {
    console.error('Error updating menu permission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteMenuPermission = async (req, res) => {
  try {
    const deleted = await MenuPermission.destroy({ where: { uuid: req.params.uuid } });
    if (deleted) {
      res.status(200).json({ message: 'Menu permission deleted successfully' });
    } else {
      res.status(404).json({ error: 'Menu permission not found' });
    }
  } catch (error) {
    console.error('Error deleting menu permission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};




// for system user
exports.createSystemUser = async (req, res) => {
  try {
    const { role, name, email, phone, profilePic, status } = req.body;
    const newUser = await SystemUser.create({ role, name, email, phone, profilePic, status });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating system user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllSystemUsers = async (req, res) => {
  try {
    const users = await SystemUser.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching system users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getSystemUserById = async (req, res) => {
  try {
    const user = await SystemUser.findByPk(req.params.uuid);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'System user not found' });
    }
  } catch (error) {
    console.error('Error fetching system user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateSystemUser = async (req, res) => {
  try {
    const { role, name, email, phone, profilePic, status } = req.body;
    const [updated] = await SystemUser.update(
      { role, name, email, phone, profilePic, status },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedUser = await SystemUser.findByPk(req.params.id);
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'System user not found' });
    }
  } catch (error) {
    console.error('Error updating system user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteSystemUser = async (req, res) => {
  try {
    const deleted = await SystemUser.destroy({ where: { uuid: req.params.uuid } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'System user not found' });
    }
  } catch (error) {
    console.error('Error deleting system user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.createMenuPermission = async (req, res) => {
  try {
    const { role, menu, submenu, url } = req.body;
    const newPermission = await MenuPermission.create({ role, menu, submenu, url });
    res.status(201).json(newPermission);
  } catch (error) {
    console.error('Error creating menu permission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllMenuPermissions = async (req, res) => {
  try {
    const permissions = await MenuPermission.findAll();
    res.json(permissions);
  } catch (error) {
    console.error('Error fetching menu permissions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getMenuPermissionById = async (req, res) => {
  try {
    const permission = await MenuPermission.findByPk(req.params.uuid);
    if (permission) {
      res.json(permission);
    } else {
      res.status(404).json({ error: 'Menu permission not found' });
    }
  } catch (error) {
    console.error('Error fetching menu permission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateMenuPermission = async (req, res) => {
  try {
    const { role, menu, submenu, url } = req.body;
    const [updated] = await MenuPermission.update(
      { role, menu, submenu, url },
      { where: { uuid: req.params.uuid } }
    );
    if (updated) {
      const updatedPermission = await MenuPermission.findByPk(req.params.uuid);
      res.json(updatedPermission);
    } else {
      res.status(404).json({ error: 'Menu permission not found' });
    }
  } catch (error) {
    console.error('Error updating menu permission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteMenuPermission = async (req, res) => {
  try {
    const deleted = await MenuPermission.destroy({ where: { uuid: req.params.uuid } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Menu permission not found' });
    }
  } catch (error) {
    console.error('Error deleting menu permission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};