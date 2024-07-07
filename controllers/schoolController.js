const sequelize = require('../config/database');
const { School, Branch, StudentCode } = require('../models/schoolModel')(sequelize);

// School CRUD operations
exports.createSchool = async (req, res) => {
  try {
    const { groupName, schoolName, schoolCode, email, image } = req.body;
    const newSchool = await School.create({ groupName, schoolName, schoolCode, email, image });
    res.status(201).json(newSchool);
  } catch (error) {
    console.error('Error creating school:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllSchools = async (req, res) => {
  try {
    const schools = await School.findAll();
    res.json(schools);
  } catch (error) {
    console.error('Error fetching schools:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getSchoolById = async (req, res) => {
  try {
    const school = await School.findByPk(req.params.id);
    if (school) {
      res.json(school);
    } else {
      res.status(404).json({ error: 'School not found' });
    }
  } catch (error) {
    console.error('Error fetching school:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateSchool = async (req, res) => {
  try {
    const { groupName, schoolName, schoolCode, email, image } = req.body;
    const [updated] = await School.update(
      { groupName, schoolName, schoolCode, email, image },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedSchool = await School.findByPk(req.params.id);
      res.json(updatedSchool);
    } else {
      res.status(404).json({ error: 'School not found' });
    }
  } catch (error) {
    console.error('Error updating school:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteSchool = async (req, res) => {
  try {
    const deleted = await School.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'School not found' });
    }
  } catch (error) {
    console.error('Error deleting school:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Branch CRUD operations
exports.createBranch = async (req, res) => {
  try {
    const { school, branch, startTime, endTime, trial, discount, subscription } = req.body;
    const newBranch = await Branch.create({ school, branch, startTime, endTime, trial, discount, subscription });
    res.status(201).json(newBranch);
  } catch (error) {
    console.error('Error creating branch:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllBranches = async (req, res) => {
  try {
    const branches = await Branch.findAll();
    res.json(branches);
  } catch (error) {
    console.error('Error fetching branches:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getBranchById = async (req, res) => {
  try {
    const branch = await Branch.findByPk(req.params.id);
    if (branch) {
      res.json(branch);
    } else {
      res.status(404).json({ error: 'Branch not found' });
    }
  } catch (error) {
    console.error('Error fetching branch:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateBranch = async (req, res) => {
  try {
    const { school, branch, startTime, endTime, trial, discount, subscription } = req.body;
    const [updated] = await Branch.update(
      { school, branch, startTime, endTime, trial, discount, subscription },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedBranch = await Branch.findByPk(req.params.id);
      res.json(updatedBranch);
    } else {
      res.status(404).json({ error: 'Branch not found' });
    }
  } catch (error) {
    console.error('Error updating branch:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteBranch = async (req, res) => {
  try {
    const deleted = await Branch.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Branch not found' });
    }
  } catch (error) {
    console.error('Error deleting branch:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// StudentCode CRUD operations
exports.createStudentCode = async (req, res) => {
  try {
    const { school, branch, code, printStatus, useStatus } = req.body;
    const newStudentCode = await StudentCode.create({ school, branch, code, printStatus, useStatus });
    res.status(201).json(newStudentCode);
  } catch (error) {
    console.error('Error creating student code:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllStudentCodes = async (req, res) => {
  try {
    const studentCodes = await StudentCode.findAll();
    res.json(studentCodes);
  } catch (error) {
    console.error('Error fetching student codes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getStudentCodeById = async (req, res) => {
  try {
    const studentCode = await StudentCode.findByPk(req.params.id);
    if (studentCode) {
      res.json(studentCode);
    } else {
      res.status(404).json({ error: 'Student code not found' });
    }
  } catch (error) {
    console.error('Error fetching student code:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateStudentCode = async (req, res) => {
  try {
    const { school, branch, code, printStatus, useStatus } = req.body;
    const [updated] = await StudentCode.update(
      { school, branch, code, printStatus, useStatus },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedStudentCode = await StudentCode.findByPk(req.params.id);
      res.json(updatedStudentCode);
    } else {
      res.status(404).json({ error: 'Student code not found' });
    }
  } catch (error) {
    console.error('Error updating student code:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteStudentCode = async (req, res) => {
  try {
    const deleted = await StudentCode.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Student code not found' });
    }
  } catch (error) {
    console.error('Error deleting student code:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};