const sequelize = require('../config/database');

const { OnlineTeacher } = require('../models/onlineTeacherModel')(sequelize);
exports.createOnlineTeacher = async (req, res) => {
    try {
      const { name, email, phone, exam, subject, avgRating } = req.body;
      const newOnlineTeacher = await OnlineTeacher.create({ name, email, phone, exam, subject, avgRating });
      res.status(201).json({ message: 'OnlineTeacher created successfully', newOnlineTeacher });
    } catch (error) {
      console.error('Error creating online teacher:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.getAllOnlineTeachers = async (req, res) => {
    try {
      const onlineTeachers = await OnlineTeacher.findAll();
      res.json({ message: 'OnlineTeachers fetched successfully', onlineTeachers });
    } catch (error) {
      console.error('Error fetching online teachers:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.getOnlineTeacherById = async (req, res) => {
    try {
      const onlineTeacher = await OnlineTeacher.findByPk(req.params.uuid);
      if (onlineTeacher) {
        res.json({ message: 'OnlineTeacher fetched successfully', onlineTeacher });
      } else {
        res.status(404).json({ error: 'OnlineTeacher not found' });
      }
    } catch (error) {
      console.error('Error fetching online teacher:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.updateOnlineTeacher = async (req, res) => {
    try {
      const { name, email, phone, exam, subject, avgRating } = req.body;
      const [updated] = await OnlineTeacher.update(
        { name, email, phone, exam, subject, avgRating },
        { where: { uuid: req.params.uuid } }
      );
      if (updated) {
        const updatedOnlineTeacher = await OnlineTeacher.findByPk(req.params.uuid);
        res.json({ message: 'OnlineTeacher updated successfully', updatedOnlineTeacher });
      } else {
        res.status(404).json({ error: 'OnlineTeacher not found' });
      }
    } catch (error) {
      console.error('Error updating online teacher:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.deleteOnlineTeacher = async (req, res) => {
    try {
      const deleted = await OnlineTeacher.destroy({ where: { uuid: req.params.uuid } });
      if (deleted) {
        res.status(200).json({ message: 'OnlineTeacher deleted successfully' });
      } else {
        res.status(404).json({ error: 'OnlineTeacher not found' });
      }
    } catch (error) {
      console.error('Error deleting online teacher:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };