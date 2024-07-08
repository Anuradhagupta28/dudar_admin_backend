const sequelize = require('../config/database');

const { School, Branch, StudentCode,TeacherCode,SlotToTeacher } = require('../models/schoolModel')(sequelize);

// School CRUD operations
exports.createSchool = async (req, res) => {
  try {
    const { groupName, schoolName, schoolCode, email, image } = req.body;
    const newSchool = await School.create({ groupName, schoolName, schoolCode, email, image });
    res.status(201).json({ message: 'School created successfully', newSchool });
  } catch (error) {
    console.error('Error creating school:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllSchools = async (req, res) => {
  try {
    const schools = await School.findAll();
    res.json({ message: 'Schools fetched successfully', schools });
  } catch (error) {
    console.error('Error fetching schools:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getSchoolById = async (req, res) => {
  try {
    const school = await School.findOne({ where: { uuid: req.params.uuid } });
    if (school) {
      res.json({ message: 'School fetched successfully', school });
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
      { where: { uuid: req.params.uuid } }
    );
    if (updated) {
      const updatedSchool = await School.findOne({ where: { uuid: req.params.uuid } });
      res.json({ message: 'School updated successfully', updatedSchool });
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
    const deleted = await School.destroy({ where: { uuid: req.params.uuid } });
    if (deleted) {
      res.status(200).json({ message: 'School deleted successfully' });
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
    const { name, schoolId, address } = req.body;
    const newBranch = await Branch.create({ name, schoolId, address });
    res.status(201).json({ message: 'Branch created successfully', newBranch });
  } catch (error) {
    console.error('Error creating branch:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllBranches = async (req, res) => {
  try {
    const branches = await Branch.findAll();
    res.json({ message: 'Branches fetched successfully', branches });
  } catch (error) {
    console.error('Error fetching branches:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getBranchById = async (req, res) => {
  try {
    const branch = await Branch.findByPk(req.params.id);
    if (branch) {
      res.json({ message: 'Branch fetched successfully', branch });
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
    const { name, schoolId, address } = req.body;
    const [updated] = await Branch.update(
      { name, schoolId, address },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedBranch = await Branch.findByPk(req.params.id);
      res.json({ message: 'Branch updated successfully', updatedBranch });
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
      res.status(200).json({ message: 'Branch deleted successfully' });
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
    const { code, branchId } = req.body;
    const newStudentCode = await StudentCode.create({ code, branchId });
    res.status(201).json({ message: 'Student code created successfully', newStudentCode });
  } catch (error) {
    console.error('Error creating student code:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllStudentCodes = async (req, res) => {
  try {
    const studentCodes = await StudentCode.findAll();
    res.json({ message: 'Student codes fetched successfully', studentCodes });
  } catch (error) {
    console.error('Error fetching student codes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getStudentCodeById = async (req, res) => {
  try {
    const studentCode = await StudentCode.findByPk(req.params.id);
    if (studentCode) {
      res.json({ message: 'Student code fetched successfully', studentCode });
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
    const { code, branchId } = req.body;
    const [updated] = await StudentCode.update(
      { code, branchId },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedStudentCode = await StudentCode.findByPk(req.params.id);
      res.json({ message: 'Student code updated successfully', updatedStudentCode });
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
      res.status(200).json({ message: 'Student code deleted successfully' });
    } else {
      res.status(404).json({ error: 'Student code not found' });
    }
  } catch (error) {
    console.error('Error deleting student code:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Teacher Code CRUD operations
exports.createTeacherCode = async (req, res) => {
  try {
    const { schoolGroup, code, printStatus, useStatus, createdAt } = req.body;
    const newTeacherCode = await TeacherCode.create({ schoolGroup, code, printStatus, useStatus, createdAt });
    res.status(201).json({ message: 'Teacher code created successfully', newTeacherCode });
  } catch (error) {
    console.error('Error creating teacher code:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllTeacherCodes = async (req, res) => {
  try {
    const teacherCodes = await TeacherCode.findAll();
    res.json({ message: 'Teacher codes fetched successfully', teacherCodes });
  } catch (error) {
    console.error('Error fetching teacher codes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getTeacherCodeById = async (req, res) => {
  try {
    const teacherCode = await TeacherCode.findByPk(req.params.id);
    if (teacherCode) {
      res.json({ message: 'Teacher code fetched successfully', teacherCode });
    } else {
      res.status(404).json({ error: 'Teacher code not found' });
    }
  } catch (error) {
    console.error('Error fetching teacher code:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateTeacherCode = async (req, res) => {
  try {
    const { schoolGroup, code, printStatus, useStatus, createdAt } = req.body;
    const [updated] = await TeacherCode.update(
      { schoolGroup, code, printStatus, useStatus, createdAt },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedTeacherCode = await TeacherCode.findByPk(req.params.id);
      res.json({ message: 'Teacher code updated successfully', updatedTeacherCode });
    } else {
      res.status(404).json({ error: 'Teacher code not found' });
    }
  } catch (error) {
    console.error('Error updating teacher code:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteTeacherCode = async (req, res) => {
  try {
    const deleted = await TeacherCode.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(200).json({ message: 'Teacher code deleted successfully' });
    } else {
      res.status(404).json({ error: 'Teacher code not found' });
    }
  } catch (error) {
    console.error('Error deleting teacher code:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// SlotToTeacher  Code CRUD operations


exports.createSlotToTeacher = async (req, res) => {
  try {
    const { name, email, phone, ftpStatus, day, startTime, endTime, price } = req.body;
    const newSlotToTeacher = await SlotToTeacher.create({ name, email, phone, ftpStatus, day, startTime, endTime, price });
    res.status(201).json({ message: 'Slot to teacher created successfully', newSlotToTeacher });
  } catch (error) {
    console.error('Error creating slot to teacher:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllSlotToTeachers = async (req, res) => {
  try {
    const slotToTeachers = await SlotToTeacher.findAll();
    res.json({ message: 'Slot to teachers fetched successfully', slotToTeachers });
  } catch (error) {
    console.error('Error fetching slot to teachers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getSlotToTeacherById = async (req, res) => {
  try {
    const slotToTeacher = await SlotToTeacher.findByPk(req.params.id);
    if (slotToTeacher) {
      res.json({ message: 'Slot to teacher fetched successfully', slotToTeacher });
    } else {
      res.status(404).json({ error: 'Slot to teacher not found' });
    }
  } catch (error) {
    console.error('Error fetching slot to teacher:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateSlotToTeacher = async (req, res) => {
  try {
    const { name, email, phone, ftpStatus, day, startTime, endTime, price } = req.body;
    const [updated] = await SlotToTeacher.update(
      { name, email, phone, ftpStatus, day, startTime, endTime, price },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedSlotToTeacher = await SlotToTeacher.findByPk(req.params.id);
      res.json({ message: 'Slot to teacher updated successfully', updatedSlotToTeacher });
    } else {
      res.status(404).json({ error: 'Slot to teacher not found' });
    }
  } catch (error) {
    console.error('Error updating slot to teacher:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteSlotToTeacher = async (req, res) => {
  try {
    const deleted = await SlotToTeacher.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(200).json({ message: 'Slot to teacher deleted successfully' });
    } else {
      res.status(404).json({ error: 'Slot to teacher not found' });
    }
  } catch (error) {
    console.error('Error deleting slot to teacher:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
