const sequelize = require('../config/database');

const { TodayDoubts } = require('../models/todayDoubtsModel')(sequelize);


exports.createTodayDoubt = async (req, res) => {
  try {
    const { studentId, chapterId, question, callType, accepted, teacherId, time, acceptTime,duration,amount,callingTeachers } = req.body;
    const newTodayDoubt = await TodayDoubts.create({ studentId, chapterId, question, callType, accepted, teacherId, time, acceptTime ,duration,amount,callingTeachers  });
    res.status(201).json({ message: 'TodayDoubt created successfully', newTodayDoubt });
  } catch (error) {
    console.error('Error creating todayDoubt:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllTodayDoubts = async (req, res) => {
  try {
    const todayDoubts = await TodayDoubts.findAll();
    res.json({ message: 'TodayDoubts fetched successfully', todayDoubts });
  } catch (error) {
    console.error('Error fetching todayDoubts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getTodayDoubtById = async (req, res) => {
  try {
    const todayDoubt = await TodayDoubts.findOne({ where: { id: req.params.id } });
    if (todayDoubt) {
      res.json({ message: 'TodayDoubt fetched successfully', todayDoubt });
    } else {
      res.status(404).json({ error: 'TodayDoubt not found' });
    }
  } catch (error) {
    console.error('Error fetching todayDoubt:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateTodayDoubt = async (req, res) => {
  try {
    const { studentId, chapterId, question, callType, accepted, teacherId, time, acceptTime ,duration,amount,callingTeachers  } = req.body;
    const [updated] = await TodayDoubts.update(
      { studentId, chapterId, question, callType, accepted, teacherId, time, acceptTime,duration,amount,callingTeachers  },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedTodayDoubt = await TodayDoubts.findOne({ where: { id: req.params.id } });
      res.json({ message: 'TodayDoubt updated successfully', updatedTodayDoubt });
    } else {
      res.status(404).json({ error: 'TodayDoubt not found' });
    }
  } catch (error) {
    console.error('Error updating todayDoubt:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteTodayDoubt = async (req, res) => {
  try {
    const deleted = await TodayDoubts.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(200).json({ message: 'TodayDoubt deleted successfully' });
    } else {
      res.status(404).json({ error: 'TodayDoubt not found' });
    }
  } catch (error) {
    console.error('Error deleting todayDoubt:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
