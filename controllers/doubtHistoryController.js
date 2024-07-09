const sequelize = require('../config/database');

const { All,SchoolGroup } = require('../models/doubtHistoryModel')(sequelize);


exports.createAll = async (req, res) => {
  try {
    const { studentId, chapterId, question, accepted, duration, teacherId, time, acceptTime,amount,callingTeachers } = req.body;
    const newAll = await All.create({ studentId, chapterId, question, accepted, duration, teacherId, time, acceptTime ,amount,callingTeachers  });
    res.status(201).json({ message: 'All created successfully', newAll });
  } catch (error) {
    console.error('Error creating all:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAll = async (req, res) => {
  try {
    const all = await All.findAll();
    res.json({ message: 'All fetched successfully', all });
  } catch (error) {
    console.error('Error fetching all:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllById = async (req, res) => {
  try {
    const all = await All.findOne({ where: { id: req.params.id } });
    if (all) {
      res.json({ message: 'All fetched successfully', all });
    } else {
      res.status(404).json({ error: 'All not found' });
    }
  } catch (error) {
    console.error('Error fetching all:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateAll = async (req, res) => {
  try {
    const { studentId, chapterId, question, accepted, duration, teacherId, time, acceptTime,amount,callingTeachers  } = req.body;
    const [updated] = await All.update(
      { studentId, chapterId, question, accepted, duration, teacherId, time, acceptTime,amount,callingTeachers  },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedAll = await All.findOne({ where: { id: req.params.id } });
      res.json({ message: 'All updated successfully', updatedAll });
    } else {
      res.status(404).json({ error: 'All not found' });
    }
  } catch (error) {
    console.error('Error updating all:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    const deleted = await All.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(200).json({ message: 'All deleted successfully' });
    } else {
      res.status(404).json({ error: 'All not found' });
    }
  } catch (error) {
    console.error('Error deleting all:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// controllers/schoolGroupController.js


exports.createSchoolGroup = async (req, res) => {
  try {
    const { studentId, chapterId, question, accepted, duration, teacherId, time, acceptTime, callType ,amount,callingTeachers} = req.body;
    const newSchoolGroup = await SchoolGroup.create({ studentId, chapterId, question, accepted, duration, teacherId, time, acceptTime, callType ,amount,callingTeachers});
    res.status(201).json({ message: 'SchoolGroup created successfully', newSchoolGroup });
  } catch (error) {
    console.error('Error creating schoolGroup:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllSchoolGroups = async (req, res) => {
  try {
    const schoolGroups = await SchoolGroup.findAll();
    res.json({ message: 'SchoolGroups fetched successfully', schoolGroups });
  } catch (error) {
    console.error('Error fetching schoolGroups:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getSchoolGroupById = async (req, res) => {
  try {
    const schoolGroup = await SchoolGroup.findOne({ where: { id: req.params.id } });
    if (schoolGroup) {
      res.json({ message: 'SchoolGroup fetched successfully', schoolGroup });
    } else {
      res.status(404).json({ error: 'SchoolGroup not found' });
    }
  } catch (error) {
    console.error('Error fetching schoolGroup:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateSchoolGroup = async (req, res) => {
  try {
    const { studentId, chapterId, question, accepted, duration, teacherId, time, acceptTime, callType ,amount,callingTeachers} = req.body;
    const [updated] = await SchoolGroup.update(
      { studentId, chapterId, question, accepted, duration, teacherId, time, acceptTime, callType,amount,callingTeachers },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedSchoolGroup = await SchoolGroup.findOne({ where: { id: req.params.id } });
      res.json({ message: 'SchoolGroup updated successfully', updatedSchoolGroup });
    } else {
      res.status(404).json({ error: 'SchoolGroup not found' });
    }
  } catch (error) {
    console.error('Error updating schoolGroup:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteSchoolGroup = async (req, res) => {
  try {
    const deleted = await SchoolGroup.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(200).json({ message: 'SchoolGroup deleted successfully' });
    } else {
      res.status(404).json({ error: 'SchoolGroup not found' });
    }
  } catch (error) {
    console.error('Error deleting schoolGroup:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

