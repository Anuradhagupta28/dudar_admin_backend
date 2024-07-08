const sequelize = require('../config/database');

const { Teacher } = require('../models/teacherModel')(sequelize);
// Teacher Controllers
exports.createTeacher = async (req, res) => {
    try {
      const { name, email, phone, exam, subject, avgRating, image } = req.body;
      const newTeacher = await Teacher.create({ name, email, phone, exam, subject, avgRating, image });
      res.status(201).json({ message: 'Teacher created successfully', newTeacher });
    } catch (error) {
      console.error('Error creating teacher:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.getAllTeachers = async (req, res) => {
    try {
      const teachers = await Teacher.findAll();
      res.json({ message: 'Teachers fetched successfully', teachers });
    } catch (error) {
      console.error('Error fetching teachers:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.getTeacherById = async (req, res) => {
    try {
      const teacher = await Teacher.findByPk(req.params.uuid);
      if (teacher) {
        res.json({ message: 'Teacher fetched successfully', teacher });
      } else {
        res.status(404).json({ error: 'Teacher not found' });
      }
    } catch (error) {
      console.error('Error fetching teacher:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.updateTeacher = async (req, res) => {
    try {
      const { name, email, phone, exam, subject, avgRating, image } = req.body;
      const [updated] = await Teacher.update(
        { name, email, phone, exam, subject, avgRating, image },
        { where: { uuid: req.params.uuid } }
      );
      if (updated) {
        const updatedTeacher = await Teacher.findByPk(req.params.uuid);
        res.json({ message: 'Teacher updated successfully', updatedTeacher });
      } else {
        res.status(404).json({ error: 'Teacher not found' });
      }
    } catch (error) {
      console.error('Error updating teacher:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.deleteTeacher = async (req, res) => {
    try {
      const deleted = await Teacher.destroy({ where: { uuid: req.params.uuid } });
      if (deleted) {
        res.status(200).json({ message: 'Teacher deleted successfully' });
      } else {
        res.status(404).json({ error: 'Teacher not found' });
      }
    } catch (error) {
      console.error('Error deleting teacher:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };