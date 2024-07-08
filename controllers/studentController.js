const sequelize = require('../config/database');

const { Student } = require('../models/studentModel')(sequelize);
// Student Controllers
exports.createStudent = async (req, res) => {
    try {
      const { name, email, phone, image, city, school } = req.body;
      const newStudent = await Student.create({ name, email, phone, image, city, school });
      res.status(201).json({ message: 'Student created successfully', newStudent });
    } catch (error) {
      console.error('Error creating student:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.getAllStudents = async (req, res) => {
    try {
      const students = await Student.findAll();
      res.json({ message: 'Students fetched successfully', students });
    } catch (error) {
      console.error('Error fetching students:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.getStudentById = async (req, res) => {
    try {
      const student = await Student.findByPk(req.params.uuid);
      if (student) {
        res.json({ message: 'Student fetched successfully', student });
      } else {
        res.status(404).json({ error: 'Student not found' });
      }
    } catch (error) {
      console.error('Error fetching student:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.updateStudent = async (req, res) => {
    try {
      const { name, email, phone, image, city, school } = req.body;
      const [updated] = await Student.update(
        { name, email, phone, image, city, school },
        { where: { uuid: req.params.uuid } }
      );
      if (updated) {
        const updatedStudent = await Student.findByPk(req.params.uuid);
        res.json({ message: 'Student updated successfully', updatedStudent });
      } else {
        res.status(404).json({ error: 'Student not found' });
      }
    } catch (error) {
      console.error('Error updating student:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.deleteStudent = async (req, res) => {
    try {
      const deleted = await Student.destroy({ where: { uuid: req.params.uuid } });
      if (deleted) {
        res.status(200).json({ message: 'Student deleted successfully' });
      } else {
        res.status(404).json({ error: 'Student not found' });
      }
    } catch (error) {
      console.error('Error deleting student:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };